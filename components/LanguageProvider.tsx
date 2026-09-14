"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Language } from "@/lib/i18n/dictionary";
import { translations } from "@/lib/i18n/dictionary";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "efcinco-language";
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT"]);
const ATTRS = ["aria-label", "title", "placeholder", "alt"] as const;

const PT_TO_EN: [string, string][] = Object.entries(translations).sort(
  (a, b) => b[0].length - a[0].length || a[0].localeCompare(b[0]),
);

const EN_TO_PT: [string, string][] = (() => {
  const byEnLength = Object.entries(translations).sort(
    (a, b) => b[1].length - a[1].length || a[1].localeCompare(b[1]),
  );
  const seen = new Set<string>();
  const pairs: [string, string][] = [];
  for (const [pt, en] of byEnLength) {
    if (seen.has(en)) continue;
    seen.add(en);
    pairs.push([en, pt]);
  }
  return pairs;
})();

function applyGreedyReplacements(text: string, pairs: [string, string][]): string {
  if (!text) return text;
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

function translateString(value: string, language: Language): string {
  const pairs = language === "en" ? PT_TO_EN : EN_TO_PT;
  return applyGreedyReplacements(value, pairs);
}

function shouldSkipTextNode(node: Text): boolean {
  const parent = node.parentElement;
  if (!parent) return true;
  return SKIP_TAGS.has(parent.tagName);
}

function translateNode(node: Text, language: Language) {
  if (!node.isConnected || !node.nodeValue || shouldSkipTextNode(node)) return;
  const source = node.nodeValue;
  const leading = source.match(/^\s*/)?.[0] ?? "";
  const trailing = source.match(/\s*$/)?.[0] ?? "";
  const middle = source.slice(leading.length, source.length - trailing.length);
  if (!middle) return;
  const translated = translateString(middle, language);
  if (translated === middle) return;
  node.nodeValue = `${leading}${translated}${trailing}`;
}

function translateAttributes(root: ParentNode, language: Language) {
  root.querySelectorAll<HTMLElement>("[aria-label],[title],[placeholder],[alt]").forEach((element) => {
    if (SKIP_TAGS.has(element.tagName)) return;
    ATTRS.forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;
      const translated = translateString(value, language);
      if (translated !== value) element.setAttribute(attribute, translated);
    });
  });
}

function collectTextNodes(root: Node): Text[] {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return shouldSkipTextNode(node as Text)
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT;
    },
  });
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  return nodes;
}

function translateTree(root: ParentNode, language: Language) {
  collectTextNodes(root).forEach((node) => translateNode(node, language));
  translateAttributes(root, language);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const appliedRef = useRef<Language>("pt");

  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    setLanguageState(nextLanguage);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt") setLanguageState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";

    // Source markup is PT. Only mutate the DOM when English is active,
    // or when reverting from EN → PT. Avoid fighting React on PT pages.
    const run = () => {
      if (language === "en") {
        translateTree(document.body, "en");
        appliedRef.current = "en";
      } else if (appliedRef.current === "en") {
        translateTree(document.body, "pt");
        appliedRef.current = "pt";
      }
    };

    const frame = window.requestAnimationFrame(run);

    if (language !== "en") {
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new MutationObserver((mutations) => {
      window.requestAnimationFrame(() => {
        mutations.forEach((mutation) =>
          mutation.addedNodes.forEach((node) => {
            if (!node.isConnected) return;
            if (node.nodeType === Node.TEXT_NODE) {
              translateNode(node as Text, "en");
            } else if (node instanceof HTMLElement) {
              if (SKIP_TAGS.has(node.tagName)) return;
              translateTree(node, "en");
              ATTRS.forEach((attribute) => {
                const value = node.getAttribute(attribute);
                if (!value) return;
                const translated = translateString(value, "en");
                if (translated !== value) node.setAttribute(attribute, translated);
              });
            }
          }),
        );
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage: () => setLanguage(language === "pt" ? "en" : "pt"),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider.");
  return context;
}
