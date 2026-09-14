"use client";

import { FooterV3 } from "./v3/FooterV3";
import { HeaderV3 } from "./v3/HeaderV3";
import { LinkA11y } from "./v3/LinkA11y";
import { MiniCart } from "./v3/MiniCart";
import { ProposalCartProvider } from "./v3/ProposalCart";
import { LanguageProvider } from "./LanguageProvider";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ProposalCartProvider>
        <LinkA11y />
        <HeaderV3 />
        <main id="main-content" className="flex-1">{children}</main>
        <FooterV3 />
        <MiniCart />
      </ProposalCartProvider>
    </LanguageProvider>
  );
}
