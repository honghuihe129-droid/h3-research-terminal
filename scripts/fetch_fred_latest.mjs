const series = process.argv[2];

if (!series) {
  console.error("Missing FRED series id");
  process.exit(1);
}

const url = `https://fred.stlouisfed.org/graph/fredgraph.csv?id=${encodeURIComponent(series)}`;
const response = await fetch(url, {
  headers: { "user-agent": "Mozilla/5.0" }
});

if (!response.ok) {
  throw new Error(`FRED ${series} returned ${response.status}`);
}

const text = await response.text();
const rows = text.trim().split(/\r?\n/).slice(1)
  .map((line) => line.split(","))
  .filter(([date, value]) => date && value && value !== ".");

const [date, value] = rows.at(-1) || [];
if (!date || !Number.isFinite(Number(value))) {
  throw new Error(`No usable FRED value for ${series}`);
}

console.log(JSON.stringify({ series, date, value: Number(value) }));
