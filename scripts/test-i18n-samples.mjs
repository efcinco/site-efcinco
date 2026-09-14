import fs from "fs";

function loadPairs(files) {
  const map = new Map();
  for (const file of files) {
    const src = fs.readFileSync(file, "utf8");
    for (const m of src.matchAll(/^\s*"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"\s*,/gm)) {
      try {
        const k = JSON.parse(`"${m[1]}"`);
        const v = JSON.parse(`"${m[2]}"`);
        map.set(k, v);
      } catch {
        /* ignore */
      }
    }
  }
  return [...map.entries()].sort((a, b) => b[0].length - a[0].length || a[0].localeCompare(b[0]));
}

function tr(text, pairs) {
  let result = "";
  let i = 0;
  while (i < text.length) {
    let matched = false;
    for (const [from, to] of pairs) {
      if (from && text.startsWith(from, i)) {
        result += to;
        i += from.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result += text[i];
      i += 1;
    }
  }
  return result;
}

const pairs = loadPairs([
  "lib/i18n/content-dictionary.ts",
  "lib/i18n/ui-dictionary.ts",
  "lib/i18n/dictionary.ts",
]);

const samples = [
  "Implantação completa de e-commerce na VTEX IO: arquitetura, catálogo, checkout, CMS e go-live assistido com foco em performance e conversão.",
  "Migração segura para VTEX IO com preservação de SEO, redirecionamentos, dados e operação estável no cutover.",
  "Manutenção, reestruturação e evolução contínua de lojas VTEX IO e Legacy: landing pages, performance, bugs e novas funcionalidades.",
  "Projetos avaliados",
  "Solução sob medida",
  "Dúvidas sobre Implantação VTEX IO",
  "Prévia de Migração VTEX IO",
  "Ver Implantação VTEX IO",
];

console.log("pairs", pairs.length);
for (const s of samples) {
  console.log("\nPT:", s);
  console.log("EN:", tr(s, pairs));
}
