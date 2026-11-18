// Genereert de losse pagina's (leren/, spiek/, index.html) uit data/*.js.
// Gebruik: node build.mjs            -> schrijft naar de map zelf
//          node build.mjs --fragment <bestand>   -> schrijft alleen de hub als fragment (zonder doctype/head/body), voor het publiceren als artifact
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const ctx = { window: {} };
vm.createContext(ctx);
const files = fs.readdirSync(path.join(dir, "data")).filter((f) => /^m\d+\.js$/.test(f)).sort();
for (const f of files) vm.runInContext(fs.readFileSync(path.join(dir, "data", f), "utf8"), ctx);
const ALL = ctx.window.MODS.sort((a, b) => a.nr - b.nr);
const MODS = ALL.filter((M) => !M.boek); // onderdelen met boek:"..." horen alleen in dat losse boekje

const fonts = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">';
const head = (title, css) => `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<link rel="manifest" href="${css.replace("engine.css", "")}manifest.webmanifest">
<link rel="apple-touch-icon" href="${css.replace("engine.css", "")}icons/icon-180.png">
<meta name="theme-color" content="#12306b">
<meta name="robots" content="noindex, nofollow">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Handboek">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<script>if("serviceWorker" in navigator)addEventListener("load",function(){navigator.serviceWorker.register("${css.replace("engine.css", "")}sw.js").catch(function(){})})</script>
${fonts}
<link rel="stylesheet" href="${css}">
</head>`;

function page(M, mode) {
  const label = mode === "leren" ? "Leerdocument" : "Spiekbriefje";
  return `${head(`${M.titel} · ${label}`, "../engine.css")}
<body class="r${M.reeks}">
<div id="app"></div>
<script>window.MODE="${mode}"</script>
<script src="../data/${M.id}.js"></script>
<script src="../data/menu.js"></script>
<script src="../engine.js"></script>
</body>
</html>
`;
}

function hub(fragment) {
  const scripts = MODS.map((M) => `<script src="data/${M.id}.js"></script>`).join("\n");
  if (fragment) {
    return `<title>Politiehandboek</title>
<meta name="claude:viewport-fit-sides" content="cover">
${fonts}
<link rel="stylesheet" href="engine.css">
<div id="app"></div>
<script>window.MODE="hub"</script>
${scripts}
<script src="engine.js"></script>
`;
  }
  return `${head("Politiehandboek", "engine.css")}
<body>
<div id="app"></div>
<script>window.MODE="hub"</script>
${scripts}
<script src="data/menu.js"></script>
<script src="engine.js"></script>
</body>
</html>
`;
}

fs.writeFileSync(path.join(dir, "data", "menu.js"), "window.MENU = " + JSON.stringify(MODS.map((M) => ({ id: M.id, nr: M.nr, reeks: M.reeks, titel: M.titel }))) + ";\n");

function bundle(out, book) {
  const rd = (f) => fs.readFileSync(path.join(dir, f), "utf8");
  const ids = book ? book.mods : MODS.map((M) => M.id);
  let sel = ids.map((id) => ALL.find((M) => M.id === id));
  const nrOf = {};
  sel.forEach((M, i) => { nrOf[M.id] = book ? i + 1 : M.nr; });
  const menuData = "window.MENU = " + JSON.stringify(sel.map((M) => ({ id: M.id, nr: nrOf[M.id], reeks: M.reeks, titel: M.titel }))) + ";";
  let dataJs = ids.map((id) => rd("data/" + id + ".js")).join("\n");
  if (book) {
    for (const [a, b] of book.replace || []) dataJs = dataJs.split(a).join(b);
    dataJs += "\n(function(){var n=" + JSON.stringify(nrOf) + ",o=" + JSON.stringify(ids) + ";window.MODS=window.MODS.filter(function(m){return n[m.id]}).sort(function(a,b){return o.indexOf(a.id)-o.indexOf(b.id)});window.MODS.forEach(function(m){m.nr=n[m.id]});})();";
  }
  const titel = book ? book.titel : "Politiehandboek";
  const bookJs = book ? "window.BOOK=" + JSON.stringify({ titel: book.titel, tag: book.tag, sub: book.sub, flat: true }) + ";" : "";
  const html = `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${titel}</title>
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#12306b">
${fonts}
<style>
${rd("engine.css")}
</style>
</head>
<body>
<div id="app"></div>
<script>window.SINGLE=true;window.MODE="hub";${bookJs}</script>
<script>
${menuData}
${dataJs}
</script>
<script>
${rd("engine.js")}
</script>
</body>
</html>
`;
  fs.writeFileSync(out, html);
  console.log("alles-in-een geschreven:", out, Math.round(html.length / 1024) + " kB");
}
const si = process.argv.indexOf("--single");
if (si > -1) { bundle(process.argv[si + 1], null); process.exit(0); }
const bi = process.argv.indexOf("--book");
if (bi > -1) {
  const book = JSON.parse(fs.readFileSync(process.argv[bi + 1], "utf8"));
  bundle(path.join(dir, book.out), book);
  process.exit(0);
}

const fi = process.argv.indexOf("--fragment");
if (fi > -1) {
  fs.writeFileSync(process.argv[fi + 1], hub(true));
  console.log("fragment geschreven:", process.argv[fi + 1]);
} else {
  for (const M of MODS) {
    fs.writeFileSync(path.join(dir, "leren", `${M.id}.html`), page(M, "leren"));
    fs.writeFileSync(path.join(dir, "spiek", `${M.id}.html`), page(M, "spiek"));
  }
  fs.writeFileSync(path.join(dir, "index.html"), hub(false));
  const scripts = MODS.map((M) => `<script src="data/${M.id}.js"></script>`).join("\n");
  fs.writeFileSync(path.join(dir, "oefenen.html"), `${head("Alle flitskaarten", "engine.css")}
<body>
<div id="app"></div>
<script>window.MODE="oefen"</script>
${scripts}
<script src="data/menu.js"></script>
<script src="engine.js"></script>
</body>
</html>
`);
  console.log(`${MODS.length} onderdelen: ${MODS.length * 2} pagina's + index.html geschreven`);
}
