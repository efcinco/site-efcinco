"use client";

import { useEffect } from "react";

function deriveTitle(el: HTMLAnchorElement) {
  const existing = el.getAttribute("title")?.trim();
  if (existing) return;
  const aria = el.getAttribute("aria-label")?.trim();
  if (aria) {
    el.setAttribute("title", aria);
    return;
  }
  const text = el.textContent?.replace(/\s+/g, " ").trim();
  if (text) el.setAttribute("title", text);
}

export function LinkA11y() {
  useEffect(() => {
    const applyIn = (root: ParentNode) => {
      root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach(deriveTitle);
    };
    applyIn(document.body);

    let frame = 0;
    const observer = new MutationObserver((mutations) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLAnchorElement) deriveTitle(node);
            else if (node instanceof HTMLElement) applyIn(node);
          });
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
