import type { DesignSystem, Page } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#121211', text: '#edece8', accent: '#8e8e8b' },
  fonts: {
    display: '"Cursor Gothic", system-ui, sans-serif',
    body: '"Cursor Gothic", system-ui, sans-serif',
  },
  typeScale: { hero: 140, body: 36 },
  radius: 0,
};

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
  fontFamily: 'var(--osd-font-display)',
  margin: 0,
});

const core = {
  pureWhite: '#ffffff',
  offWhite: '#edece8',
  lightGray: '#cccac4',
  midGray: '#8e8e8b',
  darkGray: '#3b3b3a',
  offBlack: '#121211',
  pureBlack: '#000000',
} as const;

const coreLabels: Record<keyof typeof core, string> = {
  pureWhite: 'Pure White',
  offWhite: 'Off White',
  lightGray: 'Light Gray',
  midGray: 'Mid Gray',
  darkGray: 'Dark Gray',
  offBlack: 'Off Black',
  pureBlack: 'Pure Black',
};

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

const secondaryLabels: Record<keyof typeof secondary, string> = {
  cursorOrange: 'Cursor Orange',
  salmon: 'Salmon',
  brown: 'Brown',
  olive: 'Olive',
  green: 'Green',
  sky: 'Sky',
  blue: 'Blue',
  lavender: 'Lavender',
  pink: 'Pink',
  red: 'Red',
};

const STYLE_ID = 'cursor-gtm-demo-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    .gtm-deck-text { text-box-trim: trim-both; text-box-edge: cap alphabetic; line-height: 0; }
    .gtm-deck-text p { margin: 0; }
  `;
  document.head.appendChild(style);
}

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  position: 'relative' as const,
  overflow: 'hidden',
};

const Cover: Page = () => (
  <div style={fill}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: 40, top: 40 }}>
      <p style={{ ...deckType('super'), color: 'var(--osd-text)' }}>Cursor GTM</p>
      <p style={{ ...deckType('super'), color: 'var(--osd-accent)' }}>Deck – Mon</p>
    </div>
  </div>
);

const TypeScale: Page = () => (
  <div style={{ ...fill, padding: 40, boxSizing: 'border-box' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {(Object.keys(deckMon) as (keyof typeof deckMon)[]).map((token) => (
        <div key={token} className="gtm-deck-text">
          <p style={{ ...deckType(token), color: 'var(--osd-text)', textTransform: 'capitalize' }}>
            {token} — Rag 123
          </p>
        </div>
      ))}
    </div>
  </div>
);

const CorePalette: Page = () => (
  <div style={{ ...fill, padding: 40, boxSizing: 'border-box' }}>
    <p style={{ ...deckType('m'), color: 'var(--osd-text)', marginBottom: 32 }}>Core palette</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 12, flex: 1 }}>
      {(Object.keys(core) as (keyof typeof core)[]).map((token) => (
        <div key={token} style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ flex: 1, minHeight: 320, background: core[token], borderRadius: 4 }} />
          <p style={{ ...deckType('xxs'), color: 'var(--osd-text)', marginTop: 12 }}>
            {coreLabels[token]}
          </p>
          <p style={{ ...deckType('xxs'), color: 'var(--osd-accent)', marginTop: 4 }}>{core[token]}</p>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 24 }}>
      <div style={{ height: 48, background: secondary.cursorOrange, borderRadius: 4 }} />
      <p style={{ ...deckType('xxs'), color: 'var(--osd-text)', marginTop: 12 }}>
        Cursor Orange — see secondary palette
      </p>
    </div>
  </div>
);

const SecondaryPalette: Page = () => (
  <div style={{ ...fill, padding: 40, boxSizing: 'border-box' }}>
    <p style={{ ...deckType('m'), color: 'var(--osd-text)', marginBottom: 32 }}>Secondary palette</p>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 16,
        width: '100%',
      }}
    >
      {(Object.keys(secondary) as (keyof typeof secondary)[]).map((token) => (
        <div key={token}>
          <div
            style={{
              height: 120,
              background: secondary[token],
              borderRadius: 4,
            }}
          />
          <p style={{ ...deckType('xxs'), color: 'var(--osd-text)', marginTop: 12 }}>
            {secondaryLabels[token]}
          </p>
          <p style={{ ...deckType('xxs'), color: 'var(--osd-accent)', marginTop: 4 }}>
            {secondary[token]}
          </p>
        </div>
      ))}
    </div>
  </div>
);

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
        color: 'var(--osd-accent)',
      }}
    >
      <span>
        {current} / {total}
      </span>
    </div>
  );
};

const Closer: Page = () => (
  <div style={fill}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: 40, top: 40 }}>
      <p style={{ ...deckType('l'), color: 'var(--osd-text)' }}>On-brand by default.</p>
    </div>
    <Footer />
  </div>
);

export default [Cover, CorePalette, TypeScale, SecondaryPalette, Closer];
