import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

import cursorGothicBold from './assets/fonts/CursorGothic-Bold.otf';
import cursorGothicBoldItalic from './assets/fonts/CursorGothic-BoldItalic.otf';
import cursorGothicItalic from './assets/fonts/CursorGothic-Italic.otf';
import cursorGothicRegular from './assets/fonts/CursorGothic-Regular.otf';
import cursorLockup from './assets/cursor-lockup.svg';

const STYLE_ID = 'world-cup-styles';
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
    .gtm-deck-text {
      text-box-trim: trim-both;
      text-box-edge: cap alphabetic;
      line-height: 0;
    }
    .gtm-deck-text p {
      margin: 0;
    }
  `;
  document.head.appendChild(style);
}

export const design: DesignSystem = {
  palette: {
    bg: '#121211',
    text: '#edece8',
    accent: '#8e8e8b',
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

const core = {
  offWhite: '#edece8',
  lightGray: '#cccac4',
  midGray: '#8e8e8b',
  darkGray: '#3b3b3a',
  offBlack: '#121211',
} as const;

/** Secondary — shapes/charts only. Never for text color or highlights. */
const secondary = {
  blue: '#2268ff',
  green: '#019f52',
  sky: '#0ec1ac',
} as const;

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

const MARGIN = 40;
const CONTENT_W = 1920 - MARGIN * 2;

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-display)',
  overflow: 'hidden',
  position: 'relative' as const,
};

const Logo = () => (
  <img
    src={cursorLockup}
    alt="Cursor"
    style={{
      position: 'absolute',
      left: MARGIN,
      top: 1080 - MARGIN - 50,
      height: 50,
      width: 'auto',
      display: 'block',
    }}
  />
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        right: MARGIN,
        bottom: MARGIN,
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

const SectionHead = ({ label, title }: { label: string; title: string }) => (
  <>
    <p
      style={{
        ...deckType('xs'),
        color: core.midGray,
        margin: 0,
        marginBottom: 24,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      }}
    >
      {label}
    </p>
    <p style={{ ...deckType('xl'), color: core.offWhite, margin: 0 }}>{title}</p>
  </>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 28 }}>
    {items.map((item) => (
      <li
        key={item}
        style={{
          ...deckType('s'),
          color: core.offWhite,
          paddingLeft: 36,
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '0.55em',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: core.midGray,
          }}
        />
        {item}
      </li>
    ))}
  </ul>
);

const Cover: Page = () => (
  <div style={fill}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('super'), color: core.offWhite }}>The World Cup</p>
      <p style={{ ...deckType('super'), color: core.midGray }}>Every four years</p>
    </div>
    <Logo />
  </div>
);

const History: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="01 — Origins" title="A tournament built for the world" />
      <p
        style={{
          ...deckType('s'),
          color: core.lightGray,
          marginTop: 48,
          maxWidth: 1300,
        }}
      >
        The FIFA World Cup began in 1930 in Uruguay. Thirteen nations competed; the host won the
        final. It paused during World War II, then grew into the most watched sporting event on
        Earth — a month-long celebration of national pride and global football culture.
      </p>
    </div>
    <Footer />
  </div>
);

const Format: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="02 — Format" title="Qualify, group, knock out" />
      <div style={{ marginTop: 48 }}>
        <BulletList
          items={[
            'Continental qualifiers fill 32–48 team slots over two years',
            'Group stage: round-robin within four-team pods',
            'Top two (plus best thirds in expanded formats) advance',
            'Single-elimination knockout from round of 16 to the final',
            'Third-place match closes the tournament before the champion is crowned',
          ]}
        />
      </div>
    </div>
    <Footer />
  </div>
);

const Host2026: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="03 — 2026" title="USA · Mexico · Canada" />
      <p
        style={{
          ...deckType('s'),
          color: core.lightGray,
          marginTop: 48,
          maxWidth: 1200,
        }}
      >
        The 2026 edition is the first with 48 teams and the first hosted across three nations. Sixteen
        groups of three feed a 32-team knockout bracket — more matches, more cities, more travel for
        fans and squads alike.
      </p>
      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
        {[
          { city: 'Mexico City', note: 'Opening match host' },
          { city: 'Los Angeles', note: 'US West hub' },
          { city: 'Toronto', note: 'Canada anchor' },
        ].map((row) => (
          <div key={row.city}>
            <p style={{ ...deckType('m'), color: core.offWhite, margin: 0 }}>{row.city}</p>
            <p style={{ ...deckType('xs'), color: core.midGray, marginTop: 12 }}>{row.note}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

const GlobalStats: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="04 — Scale" title="By the numbers" />
      <div
        style={{
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
        }}
      >
        {[
          { value: '5B+', label: 'Estimated viewers for recent finals' },
          { value: '32', label: 'Teams through 2022; 48 from 2026' },
          { value: '64', label: 'Matches in the classic 32-team format' },
        ].map((stat) => (
          <div key={stat.label}>
            <p style={{ ...deckType('xxl'), color: core.offWhite, margin: 0 }}>{stat.value}</p>
            <p style={{ ...deckType('xs'), color: core.midGray, marginTop: 16 }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

const ViewershipChart: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="05 — Audience" title="Final viewership trend" />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 48, height: 480, marginTop: 48 }}>
        {[
          { year: '2010', h: 280, fill: secondary.blue },
          { year: '2014', h: 320, fill: secondary.green },
          { year: '2018', h: 360, fill: secondary.sky },
          { year: '2022', h: 400, fill: secondary.blue },
        ].map((bar) => (
          <div key={bar.year} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', height: bar.h, background: bar.fill }} />
            <p style={{ ...deckType('xxs'), color: core.midGray, marginTop: 16 }}>{bar.year}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

const LegendaryMoments: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="06 — Moments" title="What fans remember" />
      <div style={{ marginTop: 48 }}>
        <BulletList
          items={[
            'Pelé and Brazil’s three titles defining the 20th century',
            'Maradona’s 1986 run — genius and controversy in one tournament',
            'Zidane’s headbutt: a final act that stunned a billion viewers',
            'Germany 7–1 Brazil: the host’s semifinal collapse in 2014',
            'Messi lifting the trophy in 2022 — a career arc completed',
          ]}
        />
      </div>
    </div>
    <Footer />
  </div>
);

const Economics: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="07 — Economics" title="Billions on the line" />
      <p
        style={{
          ...deckType('s'),
          color: core.lightGray,
          marginTop: 48,
          maxWidth: 1300,
        }}
      >
        Host nations invest in stadiums, transit, and security. Sponsors and broadcast rights generate
        FIFA revenue measured in billions. Cities hope for tourism spikes; economists debate long-run
        benefits versus white-elephant venues. For many countries, qualification alone is a national
        economic event.
      </p>
    </div>
    <Footer />
  </div>
);

const Technology: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="08 — Technology" title="Offside by millimeters" />
      <div style={{ marginTop: 48 }}>
        <BulletList
          items={[
            'Goal-line technology — settled ghost-goal debates in 2014',
            'VAR — video review for goals, penalties, and red cards since 2018',
            'Semi-automated offside — tracking limbs and ball in real time',
            '4K HDR broadcasts — every blade of grass for home viewers',
            'Data tracking — heat maps and sprint stats for every player',
          ]}
        />
      </div>
    </div>
    <Footer />
  </div>
);

const Closing: Page = () => (
  <div style={fill}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('xl'), color: core.offWhite }}>One trophy.</p>
      <p style={{ ...deckType('xl'), color: core.midGray }}>The whole world watching.</p>
    </div>
    <p
      style={{
        ...deckType('xs'),
        color: core.lightGray,
        position: 'absolute',
        left: MARGIN,
        top: MARGIN + 280,
        maxWidth: 800,
      }}
    >
      The World Cup compresses joy, heartbreak, and history into a single month — then we wait four
      more years to do it again.
    </p>
    <Logo />
    <Footer />
  </div>
);

export const meta: SlideMeta = {
  title: 'The World Cup',
  theme: 'Cursor GTM',
  createdAt: new Date().toISOString(),
};

export default [
  Cover,
  History,
  Format,
  Host2026,
  GlobalStats,
  ViewershipChart,
  LegendaryMoments,
  Economics,
  Technology,
  Closing,
] satisfies Page[];
