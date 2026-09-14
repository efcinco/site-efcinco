import fs from "fs";
import path from "path";

const keySet = new Set();
for (const file of [
  "lib/i18n/dictionary.ts",
  "lib/i18n/content-dictionary.ts",
  "lib/i18n/ui-dictionary.ts",
]) {
  if (!fs.existsSync(file)) continue;
  const dictSrc = fs.readFileSync(file, "utf8");
  for (const m of dictSrc.matchAll(/^\s*"((?:\\.|[^"\\])*)"\s*:/gm)) {
    try {
      keySet.add(JSON.parse(`"${m[1]}"`));
    } catch {
      /* ignore */
    }
  }
}

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(tsx?|jsx?)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const ptHint =
  /[àáâãéêíóôõúüçÀÁÂÃÉÊÍÓÔÕÚÜÇ]|\b(para|com|sem|sua|seu|nossa|nosso|você|não|mais|todos|todas|ver|serviço|serviços|solução|contato|sobre|proposta|diagnóstico|vitrine|loja|operação|voltar|enviar|agendar|montar|conhecer|falar|começar|pronto|ainda|deixe|escolha|confira|parceira|especialistas|carrinho|pedido|entrega|projeto|avaliados|implanta[cç][aã]o|migra[cç][aã]o|manuten[cç][aã]o)\b/i;

function looksLikeCodeOrPath(t) {
  if (t.length < 2 || t.length > 500) return true;
  if (/^(https?:|mailto:|tel:|\/|#)/i.test(t)) return true;
  if (/^(sm:|md:|lg:|xl:|2xl:|flex|grid|text-|bg-|border-|w-|h-|p-|m-|gap-|rounded|font-|leading-|tracking-|opacity-|transition|absolute|relative|inline|block|object-|shrink|items-|justify-|max-w|min-h|overflow|pointer|hover:|group|store-|animate|var\()/i.test(t)) return true;
  if (/^[0-9.x%]+$/.test(t)) return true;
  if (/^[a-z0-9_./-]+$/i.test(t) && !/[àáâãéêíóôõúüç ]/i.test(t)) return true;
  if (t.includes("className") || t.includes("${")) return true;
  return false;
}

function extractFromSource(src) {
  const out = [];
  let s = src.replace(/\/\*[\s\S]*?\*\//g, "");
  s = s.replace(/(^|[^:\\])\/\/.*$/gm, "$1");
  const re = /(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  let m;
  while ((m = re.exec(s))) {
    let val = m[2];
    if (m[1] === "`") {
      const plain = val.replace(/\$\{[^}]*\}/g, "…");
      if (plain.trim().length < 2) continue;
      val = plain;
    }
    val = val
      .replace(/\\n/g, "\n")
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\`/g, "`")
      .replace(/\s+/g, " ")
      .trim();
    if (val) out.push(val);
  }
  for (const x of s.matchAll(/>([^<>{}]+)</g)) {
    const t = x[1].replace(/\s+/g, " ").trim();
    if (t) out.push(t);
  }
  return out;
}

const files = [
  ...walk("content"),
  ...walk("components/v3"),
  ...walk("app").filter((f) => !f.includes(`${path.sep}v2${path.sep}`)),
];

const missing = [];
const seen = new Set();
for (const f of files) {
  const strings = extractFromSource(fs.readFileSync(f, "utf8"));
  for (const str of strings) {
    if (looksLikeCodeOrPath(str)) continue;
    if (!ptHint.test(str)) continue;
    if (keySet.has(str)) continue;
    if (seen.has(str)) continue;
    seen.add(str);
    missing.push(str);
  }
}

missing.sort((a, b) => a.length - b.length);
fs.writeFileSync("scripts/i18n-missing.json", JSON.stringify(missing, null, 2), "utf8");
console.log(`dict=${keySet.size} missing=${missing.length}`);
missing.slice(0, 40).forEach((s) => console.log(`- ${s}`));
if (missing.length > 40) console.log(`... +${missing.length - 40} more`);
