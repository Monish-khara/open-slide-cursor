import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

import cursorGothicBold from './assets/fonts/CursorGothic-Bold.otf';
import cursorGothicBoldItalic from './assets/fonts/CursorGothic-BoldItalic.otf';
import cursorGothicItalic from './assets/fonts/CursorGothic-Italic.otf';
import cursorGothicRegular from './assets/fonts/CursorGothic-Regular.otf';
import cursorLockup from './assets/cursor-lockup.svg';

const STYLE_ID = 'gtm-title-slide-styles';
if (typeof document !== 'undefined' && !document.getElementById(STYLE_ID)) {
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @font-face {
      font-family: 'Cursor Gothic';
      src: url('${cursorGothicRegular}') format('opentype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Cursor Gothic';
      src: url('${cursorGothicBold}') format('opentype');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Cursor Gothic';
      src: url('${cursorGothicItalic}') format('opentype');
      font-weight: 400;
      font-style: italic;
    }
    @font-face {
      font-family: 'Cursor Gothic';
      src: url('${cursorGothicBoldItalic}') format('opentype');
      font-weight: 700;
      font-style: italic;
    }

    /* Figma: vertical trim = cap height → baseline */
    .gtm-title-text {
      text-box-trim: trim-both;
      text-box-edge: cap alphabetic;
      line-height: 0;
    }
    .gtm-title-text p {
      margin: 0;
      line-height: 0.95;
    }
  `;
  document.head.appendChild(style);
}

export const design: DesignSystem = {
  palette: {
    bg: '#0a0a0a',
    text: '#edebe4',
    accent: '#8e8e88',
  },
  fonts: {
    display: '"Cursor Gothic", sans-serif',
    body: '"Cursor Gothic", sans-serif',
  },
  typeScale: {
    hero: 140,
    body: 36,
  },
  radius: 0,
};

const muted = '#8e8e88';
const padding = 40;
const lockupHeight = 94;

const heroType = {
  fontSize: design.typeScale.hero,
  letterSpacing: '-0.03em',
  fontWeight: 400,
  fontFamily: 'var(--osd-font-display)',
} as const;

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-display)',
  overflow: 'hidden',
  position: 'relative' as const,
};

const TitleSlide: Page = () => (
  <div style={fill}>
    {/* Figma Frame 2147259158 — 1920×1080, 40px padding */}
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1920,
        height: 1080,
        boxSizing: 'border-box',
      }}
    >
      {/* Figma H1 @ (40, 40) — cap height to baseline trim */}
      <div
        className="gtm-title-text"
        style={{
          position: 'absolute',
          left: padding,
          top: padding,
        }}
      >
        <p style={{ ...heroType, color: 'var(--osd-text)' }}>Project Origin</p>
        <p style={{ ...heroType, color: muted }}>May 28</p>
      </div>

      {/* Figma +LOCKUP+ @ (40, 993) — 225×47 */}
      <img
        src={cursorLockup}
        alt="Cursor"
        style={{
          position: 'absolute',
          left: padding,
          top: 1080 - padding - lockupHeight,
          height: lockupHeight,
          width: 'auto',
          display: 'block',
        }}
      />
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: 'GTM Title Slide',
  createdAt: '2026-07-03T19:50:38.178Z',
};

export default [TitleSlide] satisfies Page[];
