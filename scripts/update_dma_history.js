const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const target = path.resolve(process.argv[2] || path.join(root, "site", "data", "market-data.json"));

const yahooSymbols = {
  sh000001: "000001.SS",
  sz399001: "399001.SZ",
  sz399006: "399006.SZ",
  sh000300: "000300.SS",
  sh000905: "000905.SS",
  sh000852: "000852.SS",
  SPY: "SPY",
  QQQ: "QQQ",
  SOXX: "SOXX"
};

const eastmoneySecids = {
  sh000001: "1.000001",
  sz399001: "0.399001",
  sz399006: "0.399006",
  sh000300: "1.000300",
  sh000905: "1.000905",
  sh000852: "1.000852"
};

function round(value, digits = 2) {
  return Number.isFinite(value) ? Number(value.toFixed(digits)) : null;
}

function average(values) {
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function dmaDivergence(closes, window) {
  if (closes.length < window) return null;
  const latest = closes[closes.length - 1];
  const ma = average(closes.slice(-window));
  if (!ma) return null;
  return round(((latest / ma) - 1) * 100);
}

async function fetchYahooCloses(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=1y&interval=1d`;
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json"
    }
  });
  if (!response.ok) throw new Error(`Yahoo ${symbol} ${response.status}`);
  const json = await response.json();
  const result = json.chart?.result?.[0];
  const closes = result?.indicators?.quote?.[0]?.close || [];
  return closes.filter((value) => Number.isFinite(value) && value > 0);
}

async function fetchEastmoneyCloses(secid) {
  const url = `https://push2his.eastmoney.com/api/qt/stock/kline/get?secid=${encodeURIComponent(secid)}&fields1=f1,f2,f3,f4,f5,f6&fields2=f51,f52,f53,f54,f55&klt=101&fqt=1&beg=20250101&end=20500101`;
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://quote.eastmoney.com/"
    }
  });
  if (!response.ok) throw new Error(`Eastmoney ${secid} ${response.status}`);
  const json = await response.json();
  const rows = json.data?.klines || [];
  return rows
    .map((row) => Number(String(row).split(",")[2]))
    .filter((value) => Number.isFinite(value) && value > 0);
}

async function fetchCloses(row) {
  const yahooSymbol = yahooSymbols[row.symbol];
  if (yahooSymbol) {
    const closes = await fetchYahooCloses(yahooSymbol);
    if (closes.length >= 50) return { closes, source: "Yahoo Finance chart" };
  }
  const eastmoneySecid = eastmoneySecids[row.symbol];
  if (eastmoneySecid) {
    const closes = await fetchEastmoneyCloses(eastmoneySecid);
    if (closes.length >= 50) return { closes, source: "Eastmoney daily K-line" };
  }
  throw new Error("No historical source returned enough closes");
}

async function updateDma() {
  const data = JSON.parse(fs.readFileSync(target, "utf8"));
  const checkedAt = new Date().toISOString();
  const failures = [];

  for (const row of data.indices || []) {
    try {
      const { closes, source } = await fetchCloses(row);
      row.dma = {
        ma20: dmaDivergence(closes, 20),
        ma50: dmaDivergence(closes, 50),
        ma100: dmaDivergence(closes, 100),
        ma200: dmaDivergence(closes, 200)
      };
      row.dmaSource = source;
      row.dmaCalculatedAt = checkedAt;
      row.read = "Latest quote updated; DMA divergence calculated from 1Y daily closes";
    } catch (error) {
      failures.push(`${row.symbol}: ${error.message}`);
    }
  }

  fs.writeFileSync(target, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log(`DMA updated for ${(data.indices || []).length - failures.length}/${(data.indices || []).length} index rows`);
  if (failures.length) {
    console.warn("DMA failures:");
    failures.forEach((failure) => console.warn(`- ${failure}`));
  }
}

updateDma().catch((error) => {
  console.error(error);
  process.exit(1);
});
