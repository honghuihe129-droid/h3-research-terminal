const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const target = path.resolve(process.argv[2] || path.join(root, "site", "data", "market-data.json"));
const maxAgeHours = Number(process.env.H3_MAX_DATA_AGE_HOURS || 30);
const reportPath = path.join(root, "logs", "data-quality-last.json");

const errors = [];
const warnings = [];

function addError(message, detail) {
  errors.push(detail ? `${message}: ${detail}` : message);
}

function addWarning(message, detail) {
  warnings.push(detail ? `${message}: ${detail}` : message);
}

function isFiniteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function requireArray(data, key, min) {
  if (!Array.isArray(data[key])) {
    addError(`Missing array ${key}`);
    return [];
  }
  if (data[key].length < min) {
    addError(`Array ${key} has too few rows`, `${data[key].length} < ${min}`);
  }
  return data[key];
}

function assertUrl(value, label) {
  if (!value) return;
  try {
    const url = new URL(value);
    if (!/^https?:$/.test(url.protocol)) addError(`Invalid URL protocol in ${label}`, value);
  } catch {
    addError(`Invalid URL in ${label}`, value);
  }
}

function walkStrings(value, visitor, trail = "root") {
  if (typeof value === "string") {
    visitor(value, trail);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => walkStrings(item, visitor, `${trail}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => walkStrings(item, visitor, `${trail}.${key}`));
  }
}

function validateQuoteRow(row, label) {
  if (!row || typeof row !== "object") {
    addError("Invalid quote row", label);
    return;
  }
  ["name", "symbol"].forEach((key) => {
    if (!row[key]) addError(`Missing ${label}.${key}`);
  });
  if (!isFiniteNumber(row.price) || row.price <= 0) {
    addError(`Invalid ${label}.price`, `${row.symbol || "unknown"}=${row.price}`);
  }
  if (!isFiniteNumber(row.changePct) || Math.abs(row.changePct) > 25) {
    addError(`Suspicious ${label}.changePct`, `${row.symbol || row.name || "unknown"}=${row.changePct}`);
  }
}

function validateHeatRow(row, label, requireLeader) {
  if (!row || typeof row !== "object") {
    addError("Invalid heat row", label);
    return;
  }
  if (!row.name) addError(`Missing ${label}.name`);
  if (!isFiniteNumber(row.changePct) || Math.abs(row.changePct) > 30) {
    addError(`Suspicious ${label}.changePct`, `${row.name || "unknown"}=${row.changePct}`);
  }
  if (requireLeader && !row.leader) addWarning(`Missing ${label}.leader`, row.name);
}

function validateCompany(row, index) {
  const label = `companies[${index}]`;
  ["market", "name", "symbol", "chain", "evidenceType", "latest", "classification", "action", "source", "url"].forEach((key) => {
    if (!row[key]) addError(`Missing ${label}.${key}`);
  });
  if (!isFiniteNumber(row.growth) || row.growth < 0 || row.growth > 500) {
    addError(`Invalid ${label}.growth`, `${row.symbol || row.name || "unknown"}=${row.growth}`);
  }
  ["quality", "dmaHealth"].forEach((key) => {
    if (!isFiniteNumber(row[key]) || row[key] < 0 || row[key] > 100) {
      addError(`Invalid ${label}.${key}`, `${row.symbol || row.name || "unknown"}=${row[key]}`);
    }
  });
  assertUrl(row.url, `${label}.url`);
}

function validateMacro(row, index) {
  const label = `macro[${index}]`;
  ["region", "metric", "value", "delta", "read", "source", "url"].forEach((key) => {
    if (!row[key]) addError(`Missing ${label}.${key}`);
  });
  assertUrl(row.url, `${label}.url`);
}

function validatePreciousMetal(row, index) {
  const label = `preciousMetals[${index}]`;
  ["name", "symbol", "proxy", "role", "status", "thesis", "validation", "nextStep", "source", "url"].forEach((key) => {
    if (!row[key]) addError(`Missing ${label}.${key}`);
  });
  if (!isFiniteNumber(row.price) || row.price < 0) {
    addError(`Invalid ${label}.price`, `${row.symbol || row.name || "unknown"}=${row.price}`);
  }
  if (!isFiniteNumber(row.changePct) || Math.abs(row.changePct) > 25) {
    addError(`Suspicious ${label}.changePct`, `${row.symbol || row.name || "unknown"}=${row.changePct}`);
  }
  assertUrl(row.url, `${label}.url`);
}

function validate() {
  if (!fs.existsSync(target)) addError("Data file does not exist", target);
  if (errors.length) return null;

  let data;
  try {
    data = JSON.parse(fs.readFileSync(target, "utf8"));
  } catch (error) {
    addError("JSON parse failed", error.message);
    return null;
  }

  const generatedAt = Date.parse(data.generatedAt || "");
  if (!Number.isFinite(generatedAt)) {
    addError("Invalid generatedAt", data.generatedAt);
  } else {
    const ageHours = (Date.now() - generatedAt) / 36e5;
    if (ageHours < -0.25) addError("generatedAt is in the future", data.generatedAt);
    if (ageHours > maxAgeHours) addError("generatedAt is stale", `${ageHours.toFixed(1)}h > ${maxAgeHours}h`);
  }

  const indices = requireArray(data, "indices", 6);
  const sectors = requireArray(data, "sectors", 8);
  const usSectors = requireArray(data, "usSectors", 8);
  const companies = requireArray(data, "companies", 5);
  const macro = requireArray(data, "macro", 12);
  requireArray(data, "passList", 3);
  requireArray(data, "hypothesisFlow", 4);
  requireArray(data, "watchItems", 4);
  requireArray(data, "sources", 3);
  const preciousMetals = Array.isArray(data.preciousMetals) ? data.preciousMetals : [];
  if (preciousMetals.length && preciousMetals.length < 2) {
    addError("Array preciousMetals has too few rows", `${preciousMetals.length} < 2`);
  }

  const requiredSymbols = ["sh000001", "sz399001", "sz399006", "SPY", "QQQ", "SOXX"];
  const symbolSet = new Set(indices.map((row) => row.symbol));
  requiredSymbols.forEach((symbol) => {
    if (!symbolSet.has(symbol)) addError("Missing required market symbol", symbol);
  });

  const duplicateSymbols = indices
    .map((row) => row.symbol)
    .filter((symbol, index, arr) => symbol && arr.indexOf(symbol) !== index);
  if (duplicateSymbols.length) addError("Duplicate index symbols", [...new Set(duplicateSymbols)].join(", "));

  indices.forEach((row, index) => validateQuoteRow(row, `indices[${index}]`));
  sectors.forEach((row, index) => validateHeatRow(row, `sectors[${index}]`, true));
  usSectors.forEach((row, index) => validateHeatRow(row, `usSectors[${index}]`, false));
  companies.forEach(validateCompany);
  macro.forEach(validateMacro);
  preciousMetals.forEach(validatePreciousMetal);
  (data.sources || []).forEach((row, index) => assertUrl(row.url, `sources[${index}].url`));

  const mojibakePattern = /(?:�|鍥|涓|缇|鑲|闂|绉|鐨|妯|湪|槸|锛|浠|瀹|犻|娴|鐪|鍏|骞|獙|搴|叕)/;
  walkStrings(data, (text, trail) => {
    if (mojibakePattern.test(text)) addError("Possible mojibake text", trail);
  });

  return data;
}

const data = validate();
const report = {
  status: errors.length ? "fail" : "pass",
  checkedAt: new Date().toISOString(),
  file: target,
  generatedAt: data?.generatedAt || null,
  metrics: data ? {
    indices: data.indices?.length || 0,
    sectors: data.sectors?.length || 0,
    usSectors: data.usSectors?.length || 0,
    companies: data.companies?.length || 0,
    macro: data.macro?.length || 0,
    preciousMetals: data.preciousMetals?.length || 0,
    sources: data.sources?.length || 0
  } : {},
  errors,
  warnings
};

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

if (errors.length) {
  console.error(`H3 data quality check failed: ${errors.length} error(s)`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`H3 data quality check passed: ${target}`);
if (warnings.length) warnings.forEach((warning) => console.warn(`Warning: ${warning}`));
