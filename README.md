# open-slide-cursor

GTM slide template experiments in [open-slide](https://github.com/1weiho/open-slide) — on-brand decks built from Figma designs, agent-ready.

**Preview:** http://localhost:5173/s/gtm-template (after `npm run dev`)

## Slides

| Deck | Source |
| --- | --- |
| `gtm-template` | GTM master template — title, agenda, section dividers, content slides, section 4161 layouts, CTA (46 pages) |
| `nuclear-reactors` | 10-page Cursor GTM deck — nuclear power overview |
| `world-cup` | 10-page Cursor GTM deck — FIFA World Cup (grey type only) |

## Theme

| Theme | Description |
| --- | --- |
| **Cursor GTM** | Cursor Gothic + Deck–Mon type scale (Super → XXS). Preview in dev UI **Themes** panel. |

---

# open-slide workspace

Slides as React components. Each slide lives under `slides/<id>/index.tsx` and default-exports an array of page components. The `@open-slide/core` runtime handles layout, scaling, navigation, thumbnails, and fullscreen play mode — you just write the pages.

## Getting started

```bash
npm install
npm run dev
```

Then open the dev server and edit `slides/getting-started/index.tsx`, or create a new slide at `slides/<your-slide>/index.tsx`.

## Google Slides export

The Download menu includes **Export to Google Slides**, which captures the current page as a PNG and inserts it full-bleed into a new Google Slides deck.

### One-time Google Cloud setup

1. Create a [Google Cloud project](https://console.cloud.google.com/) and enable **Google Slides API** and **Google Drive API**.
2. Configure the **OAuth consent screen** (External). Add your Google account as a **Test user**.
3. Create an **OAuth client ID** (Web application). Set **Authorized JavaScript origins** to `http://localhost:5173` (and your production origin if you deploy).
4. Copy `.env.example` to `.env` and set `VITE_GOOGLE_CLIENT_ID` to the client ID.

```bash
cp .env.example .env
# edit .env — paste your client ID
```

Restart the dev server after changing `.env`. The first export opens a Google sign-in/consent popup; the token is kept in memory for the session.

> Full OAuth testing requires your own client ID. Without it, the menu item will show an error when selected.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload. |
| `npm run build` | Build a static bundle you can deploy. |
| `npm run preview` | Preview the built bundle locally. |

## Authoring a slide

```tsx
// slides/my-slide/index.tsx
import type { Page, SlideMeta } from '@open-slide/core';

const Cover: Page = () => (
  <div style={{ width: '100%', height: '100%' }}>Hello</div>
);

export const meta: SlideMeta = { title: 'My slide' };
export default [Cover] satisfies Page[];
```

Every page renders into a fixed **1920 × 1080** canvas — design with absolute pixel values. Put images, videos, and fonts under `slides/<id>/assets/` and import them directly.

See [`CLAUDE.md`](./CLAUDE.md) for the full authoring guide.

## Navigation

- Arrow keys / PageUp / PageDown move between pages.
- `F` enters fullscreen play mode; Esc exits.
- In play mode: Space / → next, ← prev.

## Claude Code integration

This workspace ships with Claude Code skills preconfigured under `.claude/skills/` and `.agents/skills/`. Ask Claude Code to "make slides about X" and the `create-slide` skill takes over. Use `apply-comments` to iterate via inspector-style markers inside your source.

## Config

Optional `open-slide.config.ts` at the workspace root:

```ts
import type { OpenSlideConfig } from '@open-slide/core';

const openSlideConfig: OpenSlideConfig = {
  port: 5173,
};

export default openSlideConfig;
```

Supported fields: `slidesDir`, `port`.
