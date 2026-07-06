# Logo library

Shared company logos for GTM decks. Exported from Figma **Mon Working Space → Logos** (`node 10:105`, file `kSdVujtewT6pxD4bjjhRkZ`).

## How agents should use this

1. Read `catalog.json` and match the user's company names against `aliases`.
2. Import the SVG in a slide:

```tsx
import github from '@assets/logos/github.svg';
import cursor from '@assets/logos/cursor.svg';

<img src={github} alt="GitHub" style={{ height: 32 }} />
```

3. For comparisons ("Cursor vs GitHub"), resolve both entries from the catalog and place them side by side.

## Lookup examples

| User says | Use |
| --------- | --- |
| compare OpenAI to Cursor | `openai.svg`, `cursor.svg` |
| compare x to GitHub | `x.svg`, `github.svg` |
| GitLab vs Bitbucket | `gitlab.svg`, `bitbucket.svg` |
| Anthropic vs OpenAI | `anthropic.svg`, `openai.svg` |

## Contents

49 SVGs in light/wordmark style (dark-background exports from Figma). OpenAI, Anthropic, and Google were added from existing deck assets because they are common in comparison slides but not in the Figma logo sheet.

Full searchable index: `catalog.json`.
