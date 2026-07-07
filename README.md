# open-slide-cursor

GTM slide template experiments in [open-slide](https://github.com/1weiho/open-slide) — on-brand decks built from Figma designs, agent-ready.

**Preview:** http://localhost:5173/s/gtm-template (after `npm run dev`)

## Slides

| Deck | Source |
| --- | --- |
| `gtm-template` | GTM master template — title, agenda, section dividers, content slides, section 4161 layouts, section 4179 layouts, CTA (64 pages) |
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

### Option A — local `.env`

4. Copy `.env.example` to `.env` and set `VITE_GOOGLE_CLIENT_ID` to the client ID.

```bash
cp .env.example .env
# edit .env — paste your client ID
npm run dev
```

### Option B — 1Password (multiple machines)

Store the client ID in 1Password and inject it at dev time with `op run` (no committed `.env`).

1. Install the CLI: `brew install 1password-cli`
2. In the **1Password app**: Settings → Developer → **Integrate with 1Password CLI**
3. One-time setup (reads `VITE_GOOGLE_CLIENT_ID` from your local `.env` if present):

```bash
npm run setup:op
```

4. Start dev with secrets from 1Password:

```bash
npm run dev:op
```

The committed [`.env.op`](./.env.op) references `op://Private/open-slide-gslides/credential`. Account selection defaults to **Monish Personal** via [`.op-account`](./.op-account) (`monishkhara@gmail.com`). Override with `export OP_ACCOUNT=other@email.com` if needed.

On your work laptop: enable CLI integration, `git pull`, then `npm run dev:op` (the item syncs via your 1Password account).

Restart the dev server after changing env vars. The first export opens a Google sign-in/consent popup; the token is kept in memory for the session.

> Full OAuth testing requires your own client ID. Without it, the menu item will show an error when selected.

> If `op run` does not expose the variable to Vite, run `op inject -i .env.op -o .env` and use `npm run dev` instead.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload. |
| `npm run dev:op` | Same as `dev`, but loads `VITE_GOOGLE_CLIENT_ID` from 1Password via `.env.op`. |
| `npm run setup:op` | Create/update the `open-slide-gslides` item in 1Password (run once per machine). |
| `npm run build` | Build a static bundle you can deploy. |
| `npm run preview` | Preview the built bundle locally. |
| `npm run preview:op` | Same as `preview`, with 1Password env injection. |

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
