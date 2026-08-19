const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = path.join(root, "site");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const item of ["index.html", "styles.css", "app.js"]) {
  fs.copyFileSync(path.join(site, item), path.join(dist, item));
}

fs.cpSync(path.join(site, "data"), path.join(dist, "data"), { recursive: true });

for (const item of ["_redirects", "_headers", ".nojekyll"]) {
  const source = path.join(site, item);
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, path.join(dist, item));
  }
}

fs.copyFileSync(path.join(site, "index.html"), path.join(dist, "404.html"));

console.log(`Built H^3 public static site: ${dist}`);
