# Project: Mullet - Wedding Event Website

## Overview
This is a wedding/event website built with modern web technologies, optimized for performance and deployment on Cloudflare Pages.

## Tech Stack

### Framework
- **Astro** - Static-first, zero JS by default, component-based architecture
- Built-in image optimization
- Cloudflare Pages adapter
- Perfect for pixel-perfect landing pages

### Styling
- **Tailwind CSS** - Fast to match exact Figma values (px positions, font sizes, colors)
- Responsive utilities for desktop/mobile switch at ~768px breakpoint

### Animations
- **CSS @keyframes** or **stroke-dashoffset** for SVG path animations
- Loaded as Astro components

### Forms
- **Astro + Cloudflare Functions**
- Single `<form>` in the RSVP section
- Submissions via Cloudflare Functions (serverless)
- Storage options: KV storage, email webhook, or external service (TBD)

### Deployment
- **Cloudflare Pages**
- `astro build` outputs static HTML
- Deploys in seconds

## Project Structure

```
src/
├── components/
│   ├── Hero.astro          # Save the Date section
│   ├── DressCode.astro     # Dress Code section
│   ├── RSVPForm.astro      # Form section
│   ├── Gifts.astro         # Gifts section
│   ├── Instagram.astro     # Social section
│   ├── Novios.astro        # 13 años section
│   ├── Footer.astro
│   └── svgs/               # Animated SVG components
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro         # Entry point
└── styles/
    └── global.css
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Fonts (Self-hosted via @font-face in global.css)
- Didot
- Limoncello Recipe
- Montserrat

## Key Conventions

- Use `.astro` files for components
- Keep SVG components in `src/components/svgs/`
- Use Tailwind CSS classes for styling
- Follow existing code patterns and naming conventions
- Test responsive design on both desktop and mobile layouts
- Breakpoint: ~768px for desktop/mobile switch
- Ensure animations are performant and respect user preferences (prefers-reduced-motion)

## Figma Reference

- **File**: `Untitled` - Wedding landing page designs
- **File Key**: `lkupf5s4XGwAmUNC57npEU`
- **Page**: "Page 2" - "Finales_lau" section
- **Access**: Use `figma_get_figma_data` tool with `fileKey` and `nodeId`
- **Images/SVGs**: Use `figma_download_figma_images` tool to export assets

## Hard Constraints

- **DO NOT modify** any text, color, font, or image from the Figma design
- All values must be extracted exactly from Figma data
- Maintain pixel-perfect fidelity to the design files

## Section Mapping

| # | Section | Desktop Frame | Desktop Node | Desktop Size | Mobile Frame | Mobile Node | Mobile Size |
|---|---------|--------------|-------------|-------------|-------------|------------|------------|
| 1 | Hero | Prueba 90 | `#46:4289` | 1440×700 | Prueba 115 | `#60:4552` | 390×759 |
| 2 | Dress Code | Prueba 110 | `#46:4477` | 1440×488 | Prueba 116 | `#60:5126` | 390×488 |
| 3 | RSVP Form | Prueba 111 | `#46:4505` | 1440×488 | Prueba 117 | `#67:5138` | 390×488 |
| 4 | Gifts | Prueba 112 | `#46:4518` | 1440×484 | Prueba 118 | `#67:5154` | 389×484 |
| 5 | Instagram | Prueba 113 | `#46:4486` | 1440×297 | Prueba 119 | `#67:5188` | 389×297 |
| 6 | 13 años | Prueba 114 | `#46:4495` | 1440×614 | Prueba 120 | `#67:5204` | 389×759 |

### Section Content (Exact text from Figma — DO NOT modify)

#### 1. Hero — Prueba 90 / 115
**Desktop (1440×700, BG: `#FFE7EF`):**
- `Tomefina dice que sí` — Limoncello Recipe, 65px, `#EE563F`
- `19 · 12 · 2026` — Didot, 65px, 0.04em, LOWER, `#EE563F`
- `18:30 hs` — Montserrat, 27px, 0.04em, UPPER, `#EE563F`
- `Finca Madero El Roble` — Montserrat, 27px, 0.04em, UPPER, `#EE563F`
- `Cómo llegar` — Montserrat, 24px, 0.04em, UPPER, `#EE563F`
- Rectangle button (292×76) with `#EE563F` stroke
- IMAGE-SVG: decorative illustration (557×442)
- IMAGE-SVG: scroll arrow icon (100×100)

**Mobile (390×759, BG: `#FFE7EF`):**
- `Tomefina dice que sí` — Limoncello Recipe, 33px, `#EE563F`
- IMAGE-SVG: scroll arrow icon (27×108)
- NOTE: Mobile is SIMPLER — no date, time, location, or button

##### Border Frame — Capa_1 (Desktop #46:4528, 1368×620 / Mobile #60:4741, 377×653)
Decorative double-line border frame centered in Hero. Contains 9 SVG elements + drone icon:
| File | Size (Desktop) | Description |
|------|---------------|-------------|
| `border-frame-outer.svg` | 1219×512 | Outer decorative frame |
| `border-line-top.svg` | 1139×14 | Top horizontal line |
| `border-line-bottom.svg` | 1144×19 | Bottom horizontal line |
| `border-line-left.svg` | 119×605 | Left vertical line |
| `border-line-right.svg` | 107×605 | Right vertical line |
| `border-line-inner-right.svg` | 100×514 | Inner right vertical line |
| `border-line-inner-bottom.svg` | 1114×21 | Inner bottom horizontal line |
| `border-corner-bottomleft.svg` | 83×62 | Bottom-left corner |
| `border-corner-bottomright.svg` | 92×56 | Bottom-right corner |
| `drone-icon.png` | 128×128 | Drone icon (centered in frame) |

Mobile versions prefixed `mobile-` (e.g., `mobile-border-frame-outer.svg` 313×582)

#### 2. Dress Code — Prueba 110 / 116
**Desktop (1440×488, BG: `#FDFDF3`):**
- `Dress Code` — Limoncello Recipe, 65px, `#82A8E7`
- `Elegante. Más es más.` — Didot, 29px, 0.04em, UPPER, `#82A8E7`
- `Chicas no entren en la lista negra:\nblanco, beige, crudo, paliditos no.` — Montserrat, 22px, 0.04em, `#82A8E7`
- IMAGE-SVG: divider line (399×8)
- IMAGE-SVG: pareja bailando (364×345)
- RECTANGLE: screenshot image (454×421)

**Mobile (390×488, BG: `#FDFDF3`):**
- `Dress Code` — Limoncello Recipe, 33px, `#82A8E7`
- `Elegante. Más es más.` — Didot, 20px, 0.04em, UPPER, `#82A8E7`
- `Chicas no entren en la lista negra:\nblanco, beige, crudo, paliditos no.` — Montserrat, 16px, 0.04em, `#82A8E7`
- IMAGE-SVG: divider line (276×8)
- IMAGE-SVG: pareja bailando (277×257)
- RECTANGLE: screenshot image (122×114)

#### 3. RSVP Form — Prueba 111 / 117
**Desktop (1440×488, BG: `#F5F3C2`):**
- `No pongamos en\n riesgo la noche` — Limoncello Recipe, 60px, `#706B2E`
- `Rellená el formulario con \ntus datos y restricciones` — Montserrat, 22px, 0.04em, UPPER, `#706B2E`
- `completar form` — Montserrat, 22px, 0.04em, UPPER, `#706B2E`
- Rectangle button (292×68) with `#706B2E` stroke
- IMAGE-SVG: vertical decorative line (6×294)
- IMAGE-SVG: vasos brindando (386×277)
- RECTANGLE: screenshot image (454×421)

**Mobile (390×488, BG: `#F5F3C2`):**
- `No pongamos en\n riesgo la noche` — Limoncello Recipe, 33px, `#706B2E`
- `Rellená el formulario con \ntus datos y restricciones` — Montserrat, 16px, 0.04em, UPPER, `#706B2E`
- `completar form` — Montserrat, 16px, 0.04em, UPPER, `#706B2E`
- Rectangle button (181×47) with `#706B2E` stroke
- IMAGE-SVG: divider line (274×2)
- IMAGE-SVG: vasos brindando (259×186)
- RECTANGLE: screenshot image (122×114)
- IMAGE: "809c34f2badb7fe81d809a4aaaaec233" (447×559)

#### 4. Gifts — Prueba 112 / 118
**Desktop (1440×484, BG: `#C0D3F3`):**
- `¿Nos querés regalar algo?` — Limoncello Recipe, 60px, `#4B7AC8`
- `Que esta cuenta se llene de amor\nxxxxxxxxxxxxxxxxxxx\nalias: tomefina` — Montserrat, 22px, 0.04em, UPPER, LEFT, `#4B7AC8`
- `también podés buscar\nel buzón en la fiesta` — Montserrat, 22px, 0.04em, UPPER, LEFT, `#4B7AC8`
- IMAGE-SVG: cuarto_dibujito_negro_sin_fondo (349×349)
- RECTANGLE: screenshot image (454×421)

**Mobile (389×484, BG: `#C0D3F3`):**
- `¿Nos querés regalar algo?` — Limoncello Recipe, 33px, `#4B7AC8`
- `Que esta cuenta se llene de amor\nxxxxxxxxxxxxxxxxxxx\nalias: tomefina` — Montserrat, 16px, 0.04em, UPPER, RIGHT, `#4B7AC8`
- `también podés buscar\nel buzón en la fiesta` — Montserrat, 16px, 0.04em, UPPER, LEFT, `#4B7AC8`
- IMAGE-SVG: cuarto_dibujito (7 variations: 349×349, 214×214, 51×56, 43×53, 27×33, 32×46, 48×55)
- IMAGE-SVG: divider line (274×2)
- RECTANGLE: screenshot image (122×113)

#### 5. Instagram — Prueba 113 / 119
**Desktop (1440×297, BG: `#FDFDF3`):**
- `No te pierdas \nla cobertura oficial \nen Instragram` — Didot, 35px, UPPER, `#EE563F`
- `seguir a tomefina` — Montserrat, 22px, 0.04em, UPPER, `#EE563F`
- Rectangle button (292×76) with `#EE563F` stroke
- IMAGE-SVG: celular corazones (229×192)
- RECTANGLE: ChatGPT Image (216×181) — imageRef

**Mobile (389×297, BG: `#FDFDF3`):**
- `No te pierdas \nla cobertura oficial \nen Instragram` — Didot, 22px, UPPER, `#EE563F`
- `completar form` — Montserrat, 16px, 0.04em, UPPER, `#EE563F`
- Rectangle button (181×47) with `#EE563F` stroke
- IMAGE-SVG: celular corazones (229×192 + 118×99)
- RECTANGLE: ChatGPT Image (58×48) — imageRef
- NOTE: Mobile has "completar form" button instead of "seguir a tomefina" — different CTA!

#### 6. 13 años — Prueba 114 / 120
**Desktop (1440×614, BG: `#FFE3CC`):**
- `13 años de novios` — Limoncello Recipe, 70px, LEFT, `#EE7E23`
- `¿Estás a la altura?` — Limoncello Recipe, 45px, `#EE7E23`
- `JUNTAMOS MUCHAS GANAS DE FESTEJAR` — Didot, 45px, 0.04em, UPPER, `#EE7E23`
- IMAGE-SVG: divider line (514×10)
- IMAGE-SVG: celebration illustration (533×574)
- RECTANGLE: screenshot image (454×421)

**Mobile (389×759, BG: `#FFE3CC`):**
- `13 años de novios` — Limoncello Recipe, 45px, `#EE7E23`
- `¿Estás a la altura?` — Limoncello Recipe, 28px, `#EE7E23`
- `JUNTAMOS MUCHAS \nGANAS DE FESTEJAR` — Didot, 22px, 0.04em, UPPER, `#EE7E23`
- IMAGE-SVG: divider line (290×5)
- IMAGE: "ChatGPT Image 11 sept 2026" (329×336)
- RECTANGLE: screenshot image (122×113)

## Design Tokens

### Colors
| Token | Hex | Used In |
|-------|-----|---------|
| Pink BG | `#FFE7EF` | Hero section background |
| Pink Primary | `#EE563F` | Hero text & accents, Instagram accents |
| Blue Light | `#C0D3F3` | Gifts background |
| Blue Primary | `#4B7AC8` | Gifts text |
| Blue Accent | `#82A8E7` | Dress Code text |
| Olive BG | `#F5F3C2` | RSVP background |
| Olive Primary | `#706B2E` | RSVP text |
| Orange BG | `#FFE3CC` | 13 años background |
| Orange Primary | `#EE7E23` | 13 años text |
| Cream | `#FDFDF3` | Dress Code BG, Instagram BG |
| Transparent | `rgba(255, 231, 239, 0)` | Button fills |

### Typography
| Font | Usage | Weights |
|------|-------|---------|
| Didot | Headings, subtitles, "SAVE THE DATE" | Regular (400) |
| Limoncello Recipe | Display text, section titles, names | Regular (400) |
| Montserrat | Body text, labels, buttons, dates | Regular (400) |

### Font Sizes — Desktop vs Mobile
| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero title (Limoncello Recipe) | 65px | 33px |
| Section titles (Limoncello Recipe) | 60-70px | 33-45px |
| Subtitles (Didot) | 29-45px | 20-22px |
| Body text (Montserrat) | 22-27px | 16px |
| Button text (Montserrat) | 22-24px | 16px |
| All Montserrat uses 0.04em letter-spacing, UPPER case |

## Responsive Strategy
- Desktop: 1440px wide frames
- Mobile: 390px wide frames (some 389px)
- Breakpoint: ~768px
- Use Tailwind responsive utilities (`md:`, `lg:`) to switch layouts
- Desktop and mobile have DIFFERENT layouts and content — not just scaled versions
- Mobile sections are simplified (e.g., Hero has no date/time/location)

## SVG Handling
- SVGs stored in `src/components/svgs/`
- Scroll/chevron icons appear in every section (desktop: 100px, mobile: 27px) — hand-code as inline SVG
- Decorative illustrations are section-specific
- Many SVGs are the same element in different colors — use CSS `fill` or `currentColor`
- Some SVGs will be animated (TBD which ones and animation types)

## Image Assets (RECTANGLE nodes with imageRef)
- Dress Code: screenshot placeholder (desktop: 454×421, mobile: 122×114)
- RSVP: screenshot placeholder + "809c34f2" image
- Instagram: ChatGPT Image — phone mockup
- 13 años: screenshot placeholder + ChatGPT Image
- These are raster images — download via `figma_download_figma_images` with `imageRef`

## Form Behavior (TBD)
- Desktop RSVP section: "completar form" button
- Mobile Instagram section ALSO has "completar form" button (different section!)
- Fields: TBD (name, attendance, dietary restrictions, etc.)
- Submission: Cloudflare Functions
- Backend: TBD (KV storage, email, or external service)

## Important Notes
- Static-first architecture - no server-side rendering except Cloudflare Functions
- Focus on performance and accessibility
- Maintain visual consistency with the Figma design
- Zero JS by default - only add JavaScript when necessary
- Desktop and mobile layouts are fundamentally different — reference correct Figma nodes
- "Instragram" typo in Instagram section is intentional — match Figma exactly
