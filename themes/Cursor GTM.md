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
| lightGray  | `#cccac4` | Light Gray  |
| midGray    | `#8e8e8b` | Mid Gray    |
| darkGray   | `#3b3b3a` | Dark Gray   |
| offBlack   | `#121211` | Off Black   |
| pureBlack  | `#000000` | Pure Black  |

Paste-ready constant:

```tsx
const core = {
  pureWhite: '#ffffff',
  offWhite: '#edece8',
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

### Footer

```tsx
import { useSlidePageNumber } from '@open-slide/core';

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
