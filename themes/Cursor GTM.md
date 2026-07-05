---
name: Cursor GTM
description: Dark GTM deck theme — Cursor Gothic, Deck-Mon type scale, off-black canvas.
mode: dark
---

# Cursor GTM

## Palette

Semantic roles map to **core** neutrals. **Cursor Orange** lives only in `secondary` — do not duplicate.

| Role   | Token    | Hex       | Notes              |
| ------ | -------- | --------- | ------------------ |
| bg     | offBlack | `#121211` | Slide canvas       |
| text   | offWhite | `#edece8` | Primary copy       |
| muted  | midGray  | `#8e8e8b` | Secondary / labels |
| accent | —        | `#f44e00` | Use `secondary.cursorOrange` |

### Core palette

Neutrals from Cursor Brand Guidelines.

| Token      | Hex       | Name        |
| ---------- | --------- | ----------- |
| pureWhite  | `#ffffff` | Pure White  |
| offWhite   | `#edece8` | Off White   |
| offWhite60 | `#f4f3ef` | Off White 60 — cards, tinted panels |
| lightGray  | `#cccac4` | Light Gray  |
| midGray    | `#8e8e8b` | Mid Gray    |
| darkGray   | `#3b3b3a` | Dark Gray   |
| offBlack   | `#121211` | Off Black   |
| pureBlack  | `#000000` | Pure Black  |

**Always use offBlack (`#121211`) for dark backgrounds and for “black” type.** Do not use pure black (`#000000`) or ad-hoc near-blacks like `#0a0a0a` on slides.

Paste-ready constant:

```tsx
const core = {
  pureWhite: '#ffffff',
  offWhite: '#edece8',
  offWhite60: '#f4f3ef',
  lightGray: '#cccac4',
  midGray: '#8e8e8b',
  darkGray: '#3b3b3a',
  offBlack: '#121211',
  pureBlack: '#000000',
} as const;
```

### Secondary palette

From Cursor Brand Guidelines — vibrant accents for **non-text visuals only** (charts, diagrams, icons, shape fills). See **Color rules** below — never use these for text color or text highlighting.

| Token          | Hex       | Notes          |
| -------------- | --------- | -------------- |
| cursorOrange   | `#f44e00` | Cursor Orange  |
| salmon         | `#ff744b` | Salmon         |
| brown          | `#916031` | Brown          |
| olive          | `#a88d02` | Olive          |
| green          | `#019f52` | Green          |
| sky            | `#0ec1ac` | Sky            |
| blue           | `#2268ff` | Blue           |
| lavender       | `#8c89e7` | Lavender       |
| pink           | `#fc77bf` | Pink           |
| red            | `#dc322f` | Red            |

Paste-ready constant:

```tsx
const secondary = {
  cursorOrange: '#f44e00',
  salmon: '#ff744b',
  brown: '#916031',
  olive: '#a88d02',
  green: '#019f52',
  sky: '#0ec1ac',
  blue: '#2268ff',
  lavender: '#8c89e7',
  pink: '#fc77bf',
  red: '#dc322f',
} as const;
```

## Color rules

**No secondary palette on text.** GTM decks must not use the secondary palette (Cursor Orange, Salmon, Brown, Olive, Green, Sky, Blue, Lavender, Pink, Red) for:

- Text **color** on headlines, body copy, labels, or captions
- Text **highlighting** — no `backgroundColor`, `<mark>`, highlighted spans, or colored pills behind words
- “Emphasis” tricks — if everything is highlighted, nothing is

**Core greys only for type.** Set text with the **core** palette:

| Use            | Token      | Hex       |
| -------------- | ---------- | --------- |
| Primary copy   | offWhite   | `#edece8` |
| Secondary line | midGray    | `#8e8e8b` |
| Tertiary / dim | lightGray  | `#cccac4` |
| Footer / meta  | midGray    | `#8e8e8b` |

Title slides: offWhite headline + midGray subline (see Title Block). Section labels and bullets use midGray or lightGray — not Sky, Orange, etc.

**Where secondary is allowed:** chart bars, line strokes, icon fills, diagram nodes, decorative rules — elements that are **not** typography. Keep shapes off text; do not place colored blocks behind copy.

```tsx
// Allowed — grey type hierarchy
<p style={{ ...deckType('super'), color: core.offWhite }}>The World Cup</p>
<p style={{ ...deckType('super'), color: core.midGray }}>Every four years</p>

// Forbidden — colorful text or highlight
<p style={{ color: secondary.sky }}>Section label</p>
<span style={{ backgroundColor: secondary.cursorOrange }}>highlighted</span>
```

## Typography

- **Font:** Cursor Gothic Regular (400). Load from `slides/<id>/assets/fonts/CursorGothic-*.otf` or project `assets/fonts/`.
- **Vertical trim:** cap height → baseline on all deck display type (`text-box-trim: trim-both; text-box-edge: cap alphabetic`).
- **Deck – Mon scale** (Figma text styles; excludes Mono Small / Mono Large):

| Token  | Size | Line height | Letter spacing |
| ------ | ---- | ----------- | -------------- |
| Super  | 140  | 95% (0.95)  | -3% (-0.03em)  |
| XXL    | 112  | 95% (0.95)  | -3% (-0.03em)  |
| XL     | 90   | 100% (1)    | -3% (-0.03em)  |
| L      | 64   | 100% (1)    | -2% (-0.02em)  |
| M      | 48   | 110% (1.1)  | -1% (-0.01em)  |
| S      | 36   | 120% (1.2)  | -0.5% (-0.005em) |
| XS     | 27   | 120% (1.2)  | 0              |
| XXS    | 20   | 120% (1.2)  | 0              |

Paste-ready scale constant:

```tsx
const deckMon = {
  super: { size: 140, lineHeight: 0.95, letterSpacing: '-0.03em' },
  xxl: { size: 112, lineHeight: 0.95, letterSpacing: '-0.03em' },
  xl: { size: 90, lineHeight: 1, letterSpacing: '-0.03em' },
  l: { size: 64, lineHeight: 1, letterSpacing: '-0.02em' },
  m: { size: 48, lineHeight: 1.1, letterSpacing: '-0.01em' },
  s: { size: 36, lineHeight: 1.2, letterSpacing: '-0.005em' },
  xs: { size: 27, lineHeight: 1.2, letterSpacing: '0' },
  xxs: { size: 20, lineHeight: 1.2, letterSpacing: '0' },
} as const;

const deckType = (token: keyof typeof deckMon) => ({
  fontSize: deckMon[token].size,
  lineHeight: deckMon[token].lineHeight,
  letterSpacing: deckMon[token].letterSpacing,
  fontWeight: 400,
  fontFamily: '"Cursor Gothic", sans-serif',
  margin: 0,
});
```

Trim wrapper (apply to stacked headline blocks):

```tsx
// CSS class — inject once per slide module
.gtm-deck-text {
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
  line-height: 0;
}
.gtm-deck-text p {
  margin: 0;
}
```

## Layout

- Canvas: **1920 × 1080**.
- **Margin: 40 px on every side, every slide.** No exceptions — all content (type, logos, footers, charts, images) sits inside this inset. Nothing touches the canvas edge.
- Usable content area: **1840 × 1000** (1920 − 80 × 1080 − 80).
- Alignment: left-aligned, editorial unless a layout spec says otherwise.
- Logo lockup: bottom-left at **40 px** inset, **50 px** tall (`assets/cursor-lockup.svg`).

Paste-ready constant — use on every page:

```tsx
const MARGIN = 40;

// Safe content box helper
const contentInset = {
  position: 'absolute' as const,
  left: MARGIN,
  top: MARGIN,
  width: 1920 - MARGIN * 2,
  height: 1080 - MARGIN * 2,
  boxSizing: 'border-box' as const,
};
```

When placing elements with absolute positioning, use **40 px** from the nearest edge (`left: 40`, `top: 40`, `right: 40`, `bottom: 40`). For bottom-anchored elements: `top: 1080 - MARGIN - height`.

## Fixed components

### Title (Super — two-line title slide)

```tsx
const TitleBlock = ({
  primary,
  secondary,
}: {
  primary: string;
  secondary?: string;
}) => (
  <div className="gtm-deck-text" style={{ position: 'absolute', left: 40, top: 40 }}>
    <p style={{ ...deckType('super'), color: core.offWhite }}>{primary}</p>
    {secondary ? (
      <p style={{ ...deckType('super'), color: core.midGray }}>{secondary}</p>
    ) : null}
  </div>
);
```

### Logo lockup

```tsx
// height 50px, left 40, bottom 40
<img
  src={cursorLockup}
  alt="Cursor"
  style={{
    position: 'absolute',
    left: 40,
    top: 1080 - 40 - 50,
    height: 50,
    width: 'auto',
    display: 'block',
  }}
/>
```

### Section divider (colored canvas + illustration)

Secondary palette as **full-slide background** — not for text highlights. Each variant has a unique line illustration anchored in the lower ~56% of the canvas.

| # | Background token | Hex       | Figma node   |
| - | ---------------- | --------- | ------------ |
| 1 | blue             | `#2268ff` | 3781:11629   |
| 2 | cursorOrange     | `#f44e00` | 3828:2047    |
| 3 | lavender         | `#8c89e7` | 3828:2065    |
| 4 | sky              | `#0ec1ac` | 3828:2093    |
| 5 | green            | `#019f52` | 3828:2116    |
| 6 | olive            | `#a88d02` | 3828:2178    |

All section dividers live in the **`gtm-template`** deck (`slides/gtm-template/index.tsx`) as pages 3–8 after title and agenda.

```tsx
const SectionDividerBlock = ({ title, topic }: { title: string; topic: string }) => (
  <div className="gtm-deck-text" style={{ position: 'absolute', left: 40, top: 40 }}>
    <p style={{ ...deckType('super'), color: core.offWhite }}>{title}</p>
    <p style={{ ...deckType('super'), color: 'rgba(237, 236, 232, 0.5)' }}>{topic}</p>
  </div>
);

// Illustration box — Figma inset top 40.74%, sides 2.08%, bottom 3.7%
const illustrationInset = {
  position: 'absolute' as const,
  left: 40,
  top: Math.round(1080 * 0.4074),
  right: 40,
  bottom: Math.round(1080 * 0.037),
};
```

Export illustration SVG from Figma per variant; one asset per slide under `assets/illustration.svg`.

### Simple headline + body (light)

Figma `3938:9252`. White canvas, left copy block + rotated visual card on the right.

- Headline: Deck Mon **L** (64px), `core.offBlack`
- Body: Deck Mon **M** (48px), `rgba(18, 18, 17, 0.5)`
- Copy block: `(40, 40)`, width **942px**, gap **60px** between headline and body
- Visual: container at `left: 66.67%`, `top: 39px`, **599×1001**; inner card rotated **-90°**, **1001×599**, `border-radius: 8px`, fill `#3e2132`; image inset per Figma (`4.68%` / `11.52%` / `90.53%` / `77.13%`)

```tsx
const bodyMuted = 'rgba(18, 18, 17, 0.5)';

// Light slides use cursor-lockup-dark.svg (offBlack fill), not the off-white lockup
```

### 3 column highlight (light)

Figma `3780:11585`. XL headline top-left; three XS columns at `top: 451px`.

- Title: Deck Mon **XL** (90px), `core.offBlack`, `(40, 40)`
- Columns: `(40, 451)`, width **1840px**, `justify-content: space-between`, each column **550px**
- Column title + body: Deck Mon **XS** (27px, line-height 1.2); title `core.offBlack`, body `bodyMuted`

### UI feature (light)

Figma `3776:6986`. Left copy stack + right off-white-60 card panel with product screenshot.

- Headline: two Deck Mon **L** lines — primary `core.offBlack`, secondary `core.midGray`
- Body: Deck Mon **XS**, `core.midGray`
- Copy block: `(40, 40)`, width **580px**, gap **60px**
- Card panel: `core.offWhite60` (`#f4f3ef`); outer at `left: 33.33% + 134px`, **1146×1000**, radius **6px** left corners; inner at `+225px` / `top: 102`, **1055×876**, radius **10px** left corners
- Screenshot: `+246px` / `top: 129`, **1034×849**, image crop per Figma inset

### 3 column highlight — cards (light)

Figma `3780:11464`. XL “Features” headline; three off-white-60 cards in a bottom row.

- Card row: `(40, 525)`, **1840×515**, `justify-content: space-between`
- Each card: **601×515**, `core.offWhite60`, **6px** radius, **40px** padding
- Card title: Deck Mon **S** (36px), two lines, `core.offBlack`
- Card body: Deck Mon **XS**, `core.midGray`; **40px** gap between title block and body

### 2 column comparison (light)

Figma `3777:7083`. XL “Comparison” headline; two feature cards side by side.

- Cards: `top: 333`, **910px** wide each, **50px** padding, `core.offWhite60`, **6px** radius
- Header block: icon + Deck Mon **M** title + **XS** body, **40px** gap
- Feature list: check icon (**25px**) + **XS** label, **20px** gap; **16px** between rows; `#cccac4` rule dividers
- Card columns: **50px** gap between header block and feature list

### Statement slide (dark)

Figma `4156:548`. Full-bleed off-black canvas with a two-line XXL statement at top-left.

- Copy block: `(40, 40)`, width **1840px**
- Line 1: Deck Mon **XXL** (112px), `core.offWhite` — e.g. “Cursor's Mission”
- Line 2: Deck Mon **XXL**, `core.midGray` — supporting statement
- No lockup or footer

### Timeline (light)

Figma `3848:2945`. XL two-line headline; horizontal timeline with orange markers and milestone lists.

- Headline: “Cursor Timeline” (`core.offBlack`) + “Brief History” (`core.midGray`), Deck Mon **XL**, `(40, 40)`
- Quarter labels: mono **16.38px**, `core.offBlack`, row at `top: 472.7`, **1840px** wide, space-between
- Rule: `top: 520.48` (50% − 19.52px), full content width; `core.midGray` stroke
- Markers: **15×15px** `secondary.cursorOrange` squares at `top: 512.29`
- Lists: Deck Mon **XXS** (20px), `core.darkGray`, `top: 550.51`, per-column `listLeft` from Figma

### Future state (dark)

Figma `3913:7481`. Off-black canvas, XXL headline block, pink infinity illustration.

- Graphic: inset `28.24%` top, `2.08%` sides, `3.7%` bottom (`future-state-graphic.svg`)
- Headline block: `(40, 162.5)` with `translateY(-50%)`, **1195×245**, off-black fill masks graphic
- Copy: Deck Mon **XXL** — “Future state:” `core.offWhite` + “the future we are building towards” `core.midGray`

### 4 key stats (light)

Figma `3848:3076`. 2×2 grid of stat cards filling the content area.

- Grid: `(40, 40)`, **1840×1000**, **20px** gap
- Cards: `core.offWhite60`, **6px** radius, **65px** padding
- Stat: Deck Mon **XXL**, `core.offBlack`
- Label: **28px** / 1.3 leading, `core.midGray`
- Logo lockup anchored to card bottom-left

### Logo wall (light)

Figma `3781:11923`. 4×5 grid of customer logos on off-white-60 tiles.

- Grid: `(40, 40)`, **1840×1000**, **20px** gap
- Cells: `core.offWhite60`, **6px** radius, **40px** padding, centered logo
- Row order: Airbnb, Shopify, Ramp, Vercel, Redo → Superhuman, MongoDB, Datadog, Duolingo, Perplexity → Lucid, Snowflake, Sentry, Netflix, Retool → Semgrep, Robinhood, Block, Figma, Lime

### SDLC (light)

Figma section `4156:561` — two variants.

**SDLC** (`3852:3404`): XL title; timeline with `secondary.blue` markers; five phase cards (Deck Mon **S**, centered) on `core.offWhite60`.

**SDLC detail** (`3852:3470`): Same as above plus description row at `top: 702` — **352×338** cards, **30px** padding, Deck Mon **XXS**, `core.darkGray`.

- Phase row: `top: 533.71`, **352×148** cards, **20px** gap
- Rule: `top: 502.19` (50% − 37.81px); markers at `top: 494`

### CTA slide (dark)

Figma `3780:11617`. Off-black canvas, headline + orange pill button, lockup bottom.

- Background: `core.offBlack`
- Padding: **40px** all sides; flex column `justify-content: space-between`
- Headline: Deck Mon **XL**, `core.offWhite`, max-width **671px**
- Button: `secondary.cursorOrange` fill (shape — not text highlight), `border-radius: 100px`, padding **20px 36px**; label Deck Mon **XS**, `core.offWhite`
- Lockup: **50px** tall, bottom-left (off-white `cursor-lockup.svg`)

### Section 4161 layouts (`slides/gtm-template/section4161.tsx`)

Figma section `4161:4668` — 25 pages appended before CTA (pages 22–46). Assets under `assets/section4161/`.

| Slide | Figma node | Notes |
| ----- | ---------- | ----- |
| AI Curve 4–1 | 4161:2326–2387 | Shared `AiCurveSlide`; curve SVG per variant; milestone labels **30.735px** |
| Platform overview | 4161:2648 | Today/Q3 dashed columns + Origin bar |
| Architecture Diagram | 4161:2677 | Same diagram as platform overview, different title |
| Joint Logo Lockup | 4161:3190 | Off-white canvas; Cursor lockup + divider + `+LOGO+` |
| Brief Narrative | 4161:3235 | XXL quote + OpenAI logo |
| 3 Proof Points | 4161:3267 | XL headline; 3 stat cards; right visual panel |
| Customer Quote | 4161:3303 | Split quote card + perspective graphic |
| Hero Metric | 4161:3204 | Olive panel + `$66M` super stat |
| Enterprise Controls | 4161:2838 | Lavender canvas + line-art illustration |
| Headline (×2) | 4161:192, 4161:202 | XL full-width statement |
| Body | 4161:207 | Two enterprise control cards |
| 10 Key features | 4161:2267 | 2×5 feature grid, XXS copy |
| Admin Dashboard | 4161:3230 | Full-bleed dashboard screenshot |
| Section Divider | 4161:2873 | Green canvas; Enterprise / Cursor Organizations |
| 3 Column Overview | 4161:244 | Three git-forge cards + icons |
| Visual Diagram | 4161:299 | Org hierarchy (Settings A/B/C) — simplified HTML boxes + connector SVGs |
| Surfaces | 4161:2447 | 2×2 dashed-border surface tiles |
| Connectors | 4161:3321 | `/add-plugin` composer + dual connector columns |
| Extensibility | 4161:3435 | SDK / marketplace / skills panels + bottom copy row |
| 4 Step Plan | 4161:268 | Timeline + four step cards |
| Code Review | 4161:4251 | Left copy + PR screenshot panel |

**Simplifications:** Visual Diagram uses React boxes + line SVGs instead of pixel-perfect nested Figma layout. Extensibility marketplace and Code Review use exported PNG screenshots. Connectors composer chrome is simplified (no SF Symbols).

### Page number footer


const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 40,
        right: 40,
        bottom: 40,
        display: 'flex',
        justifyContent: 'flex-end',
        ...deckType('xxs'),
        color: core.midGray,
      }}
    >
      <span>
        {current} / {total}
      </span>
    </div>
  );
};
```

## Motion

Static. No entrance animations on GTM decks unless explicitly requested.

## Aesthetic

Minimal dark-mode editorial. Off-black field, off-white type, muted grey for secondary lines. **Core greys only on text — no secondary palette for type or highlights.** Cursor Gothic only. No gradients, no rounded cards, no decorative emoji. Generous negative space. Title slides: Super headline + optional muted subline + logo lockup only.

## Example usage

```tsx
const Cover: Page = () => (
  <div style={{ width: '100%', height: '100%', background: core.offBlack, position: 'relative' }}>
    <TitleBlock primary="Project Origin" secondary="May 28" />
    {/* Logo lockup */}
  </div>
);
```
