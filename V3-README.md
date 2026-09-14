# Layout E-commerce Premium (v3)

## Visão Geral

Layout alternativo inspirado em e-commerces premium modernos (Shopify Plus, Apple Store, Stripe) com foco em conversão, mantendo 100% do SEO/GEO existente.

## Acesso

O layout v3 está disponível em: **`/v3`**

## Características Principais

### Design
- **Paleta premium**: Preto luxo (#0a0a0a), creme (#fdfaf7), ouro sutil (#d4af37)
- **Tipografia**: Inter (corpo) + Inter Display (títulos) + JetBrains Mono (preços/badges)
- **Micro-interactions**: Hover effects, magnetic buttons, scroll reveal, skeleton loaders
- **Componentes e-commerce**: Product cards, pricing tables, mega menus, trust badges

### SEO/GEO
✅ **Mantido 100%**:
- Metadata (title, description, OG tags, canonical)
- JSON-LD (Organization, WebSite, FAQPage, Service, etc.)
- Sitemap, robots.txt, llms.txt
- Heading hierarchy, breadcrumbs, alt text
- Internal linking structure

### Performance
- Lazy loading de imagens
- Skeleton loaders (não spinners)
- Preload de fontes e hero image
- Reduce motion support (`prefers-reduced-motion`)
- Core Web Vitals otimizados

### Acessibilidade
- ARIA labels em filtros, tabs, modals
- Focus visible em elementos interativos
- Contrast ratio ≥ 4.5:1
- Navegação por teclado
- Screen reader friendly

## Estrutura de Arquivos

```
app/
├── v3/
│   ├── layout.tsx              # Layout com Header/Footer v3
│   ├── page.tsx                # Home e-commerce style
│   ├── opengraph-image.tsx     # OG image dinâmica
│   └── not-found.tsx           # 404 personalizado
├── globals-v3.css              # Tema premium

components/v3/
├── HeaderV3.tsx                # Header com mega menu + progress bar
├── FooterV3.tsx                # Footer com newsletter + badges
├── HeroV3.tsx                  # Hero split com mockup visual
├── TrustBar.tsx                # Marquee infinito de badges
├── ProductCard.tsx             # Card de serviço estilo e-commerce
├── QuickViewModal.tsx          # Modal de preview rápido
├── PricingTable.tsx            # Tabela SaaS com toggle mensal/anual
├── PortfolioCases.tsx          # Grid de cases com filtros
├── TestimonialWall.tsx         # Depoimentos + wall of love
├── ServicesGrid.tsx            # Grid de serviços com filtros
├── FaqSection.tsx              # FAQ com accordion
├── AccordionFaq.tsx            # Accordion controlado
├── CtaBanner.tsx               # CTA com urgency
├── NewsletterForm.tsx          # Captura de email
├── FilterTabs.tsx              # Filtros interativos
├── ProgressBar.tsx             # Barra de progresso de scroll
├── ScrollReveal.tsx            # Animação on scroll
├── SkeletonLoader.tsx          # Loading states
├── Button.tsx                  # Botões reutilizáveis
├── Badge.tsx                   # Badges premium
└── Rating.tsx                  # Estrelas de avaliação

lib/hooks/
├── useScrollProgress.ts        # Hook para % de scroll
├── useIntersectionReveal.ts    # Hook para scroll reveal
└── useMagneticCursor.ts        # Hook para efeito magnético
```

## Componentes Premium

### HeaderV3
- Mega menu com preview de imagem
- Progress bar de scroll (dourado)
- Sticky com backdrop blur
- Mobile menu responsivo

### HeroV3
- Layout split (60% texto / 40% mockup)
- Trust badges inline
- Avatares de clientes
- Stats em destaque
- Floating indicators animados

### ProductCard
- Badge de "Mais vendido"
- Rating visual com estrelas
- Hover: glow dourado + lift
- Quick-view modal
- Preço "Sob consulta" ou valores

### PricingTable
- Toggle mensal/anual com animação
- Badge "Popular" flutuante
- Comparison expandável
- Estilo SaaS premium

### PortfolioCases
- Filtros interativos
- KPIs visuais on hover
- Image zoom effect
- Badge de segmento

### TestimonialWall
- Avatares e ratings
- Badge "Verified"
- Wall of love grid
- Quote icon decorativo

### TrustBar
- Marquee infinito
- Pausa no hover
- Badges de confiança

### AccordionFaq
- Ícone + → − animado
- Fade-in suave
- Não usa `<details>`
- Link "Fale conosco"

## Micro-Interactions

### Botões
- Hover: lift + shadow grow
- Click: scale(0.97) feedback
- Magnetic effect (opcional)

### Cards
- Hover: border glow + translateY(-4px)
- Image zoom sutil
- Transition smooth

### Scroll Effects
- Progress bar no header
- Fade-in scroll reveal
- Threshold 0.15

### Loading States
- Skeleton loaders (shimmer)
- Sem spinners genéricos
- Background gradiente animado

## Conversão E-commerce

- ✅ Trust badges acima da dobra
- ✅ Social proof visível (avatares, ratings)
- ✅ Pricing transparente
- ✅ CTA repetido a cada 2-3 scrolls
- ✅ Quick-view para reduzir fricção
- ✅ Newsletter com incentivo (e-book)
- ✅ FAQ expansível
- ✅ Urgency sutil (vagas limitadas)
- ✅ Mobile-first + touch-friendly

## Comparação v2 vs v3

| Aspecto | v2 (Atual) | v3 (E-commerce Premium) |
|---------|-----------|-------------------------|
| **Hero** | Full-bleed image | Split com mockup visual |
| **Serviços** | Cards simples | Product tiles + quick-view |
| **Iugis** | Section escura | Pricing table SaaS |
| **Cases** | Grid overlay | Portfolio com filtros KPI |
| **Header** | Dropdown simples | Mega menu visual + progress |
| **CTA** | Botão padrão | Product-style urgency |
| **Social Proof** | Testimonials básicos | Wall + ratings + verified |
| **Micro-interactions** | Hover suave | Magnetic, parallax, reveals |
| **Paleta** | Azul navy | Preto/creme/ouro |
| **Fontes** | DM Sans + Syne | Inter + Display |

## Como Testar

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse: `http://localhost:3000/v3`

3. Compare com: `http://localhost:3000` (v2 original)

## Performance Checklist

- [x] Lazy load imagens
- [x] Skeleton UI (não spinner)
- [x] Preload hero assets
- [x] Reduce motion support
- [x] Focus visible
- [x] ARIA labels
- [x] Contrast ratio ok
- [x] Touch targets ≥ 44px
- [x] Next.js Image optimization
- [x] Font display: swap

## Próximos Passos (Opcional)

- [ ] A/B test v2 vs v3
- [ ] Analytics de conversão
- [ ] Heatmap de clicks
- [ ] Session replay
- [ ] Feedback de usuários
- [ ] Ajustes finos de copy

## Notas Técnicas

- **Zero mudança semântica**: HTML e SEO mantidos
- **CSS isolado**: `globals-v3.css` não interfere com v2
- **Componentes independentes**: Pasta `components/v3/`
- **Rotas separadas**: `/v3` não afeta rotas existentes
- **Fontes Google**: Inter (400-800) + JetBrains Mono
- **Tailwind CSS**: Classes utilitárias + custom
- **TypeScript**: Tipagem completa
- **React Server Components**: Padrão Next.js App Router

## Suporte

Para dúvidas ou ajustes, consulte:
- Plano original: `.cursor/plans/layout_e-commerce_premium_*.plan.md`
- Código fonte: `app/v3/` e `components/v3/`
- Documentação Next.js: https://nextjs.org/docs

---

**Diferencial competitivo**: Poucos concorrentes VTEX têm site com qualidade visual de e-commerce high-end. Isso comunica competência técnica antes mesmo da leitura do texto.
