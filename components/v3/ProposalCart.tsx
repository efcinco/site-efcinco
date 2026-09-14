"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ProposalItem = {
  slug: string;
  title: string;
  image?: string;
  quantity: number;
};

type ProposalCartContextValue = {
  items: ProposalItem[];
  count: number;
  isOpen: boolean;
  addItem: (item: Omit<ProposalItem, "quantity">) => void;
  removeItem: (slug: string) => void;
  openCart: () => void;
  closeCart: () => void;
};

const ProposalCartContext = createContext<ProposalCartContextValue | null>(null);
const STORAGE_KEY = "efcinco-v3-proposal";

export function ProposalCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ProposalItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Array<Partial<ProposalItem>>;
        setItems(parsed.map((item) => ({
          slug: item.slug ?? "",
          title: item.title ?? "",
          image: item.image,
          quantity: item.quantity ?? 1,
        })).filter((item) => item.slug && item.title));
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  const value = useMemo<ProposalCartContextValue>(() => ({
    items,
    addItem: (item) => setItems((current) => {
      const existing = current.find(({ slug }) => slug === item.slug);
      if (!existing) return [...current, { ...item, quantity: 1 }];
      return current.map((currentItem) =>
        currentItem.slug === item.slug
          ? { ...currentItem, quantity: currentItem.quantity + 1 }
          : currentItem,
      );
    }),
    removeItem: (slug) => setItems((current) => current.filter((item) => item.slug !== slug)),
    count: items.reduce((total, item) => total + item.quantity, 0),
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  }), [items, isOpen]);

  return <ProposalCartContext.Provider value={value}>{children}</ProposalCartContext.Provider>;
}

export function useProposalCart() {
  const context = useContext(ProposalCartContext);
  if (!context) throw new Error("useProposalCart deve ser usado dentro de ProposalCartProvider.");
  return context;
}
