import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

import cursorGothicBold from './assets/fonts/CursorGothic-Bold.otf';
import cursorGothicBoldItalic from './assets/fonts/CursorGothic-BoldItalic.otf';
import cursorGothicItalic from './assets/fonts/CursorGothic-Italic.otf';
import cursorGothicRegular from './assets/fonts/CursorGothic-Regular.otf';
import cursorLockup from './assets/cursor-lockup.svg';

const STYLE_ID = 'nuclear-reactors-styles';
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

const secondary = {
  cursorOrange: '#f44e00',
  sky: '#0ec1ac',
  blue: '#2268ff',
  green: '#019f52',
  lavender: '#8c89e7',
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
        color: 'var(--osd-accent)',
      }}
    >
      <span>
        {current} / {total}
      </span>
    </div>
  );
};

const TitleBlock = ({
  primary,
  secondaryLine,
}: {
  primary: string;
  secondaryLine?: string;
}) => (
  <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
    <p style={{ ...deckType('super'), color: 'var(--osd-text)' }}>{primary}</p>
    {secondaryLine ? (
      <p style={{ ...deckType('super'), color: 'var(--osd-accent)' }}>{secondaryLine}</p>
    ) : null}
  </div>
);

const SectionHead = ({ label, title }: { label: string; title: string }) => (
  <>
    <p
      style={{
        ...deckType('xs'),
        color: secondary.sky,
        margin: 0,
        marginBottom: 24,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      }}
    >
      {label}
    </p>
    <p style={{ ...deckType('xl'), color: 'var(--osd-text)', margin: 0 }}>{title}</p>
  </>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 28 }}>
    {items.map((item) => (
      <li
        key={item}
        style={{
          ...deckType('s'),
          color: 'var(--osd-text)',
          paddingLeft: 36,
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: '0.55em',
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: secondary.cursorOrange,
          }}
        />
        {item}
      </li>
    ))}
  </ul>
);

const Cover: Page = () => (
  <div style={fill}>
    <TitleBlock primary="Nuclear Reactors" secondaryLine="Power from the atom" />
    <Logo />
  </div>
);

const FissionBasics: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="01 — Fundamentals" title="Controlled fission releases heat" />
      <p
        style={{
          ...deckType('s'),
          color: 'var(--osd-accent)',
          marginTop: 48,
          maxWidth: 1200,
        }}
      >
        A neutron splits a heavy nucleus — usually uranium-235. The reaction releases energy,
        more neutrons, and fission products. In a reactor, that chain reaction is kept steady, not
        runaway.
      </p>
    </div>
    <Footer />
  </div>
);

const HowItWorks: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="02 — Architecture" title="From fuel rod to grid" />
      <div style={{ marginTop: 48 }}>
        <BulletList
          items={[
            'Fuel assemblies hold enriched uranium in a reactor core',
            'Moderator slows neutrons so fission stays efficient',
            'Control rods absorb neutrons to tune power output',
            'Primary coolant carries heat to a steam generator',
            'Turbines spin generators — electrons reach the grid',
          ]}
        />
      </div>
    </div>
    <Footer />
  </div>
);

const GlobalStats: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="03 — Scale" title="Nuclear in numbers" />
      <div
        style={{
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
        }}
      >
        {[
          { value: '440+', label: 'Operating reactors worldwide', color: secondary.blue },
          { value: '~10%', label: 'Global electricity from nuclear', color: secondary.green },
          { value: '24/7', label: 'Baseload — runs through the night', color: secondary.lavender },
        ].map((stat) => (
          <div key={stat.label}>
            <p style={{ ...deckType('xxl'), color: stat.color, margin: 0 }}>{stat.value}</p>
            <p style={{ ...deckType('xs'), color: 'var(--osd-accent)', marginTop: 16 }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

const ReactorTypes: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="04 — Designs" title="Major reactor families" />
      <div
        style={{
          marginTop: 48,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 40,
        }}
      >
        {[
          {
            name: 'PWR',
            desc: 'Pressurized water — most common. Water stays liquid under high pressure; secondary loop makes steam.',
          },
          {
            name: 'BWR',
            desc: 'Boiling water — water boils directly in the core. Simpler loop, different containment profile.',
          },
          {
            name: 'PHWR',
            desc: 'Heavy water moderator — can use natural uranium. CANDU-style designs in several countries.',
          },
          {
            name: 'Fast reactor',
            desc: 'Fast neutrons, no moderator — breeds fuel, burns long-lived waste. Few commercial units today.',
          },
        ].map((row) => (
          <div key={row.name}>
            <p style={{ ...deckType('m'), color: secondary.cursorOrange, margin: 0 }}>{row.name}</p>
            <p style={{ ...deckType('xs'), color: 'var(--osd-accent)', marginTop: 12 }}>{row.desc}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

const SafetySystems: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="05 — Safety" title="Defense in depth" />
      <div style={{ marginTop: 48 }}>
        <BulletList
          items={[
            'Multiple physical barriers: fuel cladding, reactor vessel, containment building',
            'Redundant cooling — even without power, passive systems can remove decay heat',
            'SCRAM: control rods drop in milliseconds to shut the chain reaction',
            'Continuous monitoring — radiation, pressure, temperature, and flow sensors',
            'Regulatory oversight — design reviews, inspections, and licensed operators',
          ]}
        />
      </div>
    </div>
    <Footer />
  </div>
);

const FuelCycle: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="06 — Fuel cycle" title="From mine to storage" />
      <div
        style={{
          marginTop: 64,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 24,
        }}
      >
        {['Mining', 'Enrichment', 'Fabrication', 'Operation', 'Storage'].map((step, i, arr) => (
          <div key={step} style={{ flex: 1, textAlign: 'center' }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                border: `2px solid ${secondary.sky}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                ...deckType('xxs'),
                color: secondary.sky,
              }}
            >
              {i + 1}
            </div>
            <p style={{ ...deckType('xs'), color: 'var(--osd-text)', marginTop: 16 }}>{step}</p>
            {i < arr.length - 1 ? (
              <div
                style={{
                  position: 'absolute',
                  marginTop: 24,
                  marginLeft: 120 + i * 340,
                  width: 200,
                  height: 2,
                  background: '#3b3b3a',
                  display: 'none',
                }}
              />
            ) : null}
          </div>
        ))}
      </div>
      <p style={{ ...deckType('s'), color: 'var(--osd-accent)', marginTop: 72, maxWidth: 1400 }}>
        Spent fuel remains radioactive for years. Most countries store it on-site in dry casks while
        debating reprocessing or deep geological disposal.
      </p>
    </div>
    <Footer />
  </div>
);

const SmallModular: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="07 — Future" title="Small modular reactors (SMRs)" />
      <p
        style={{
          ...deckType('s'),
          color: 'var(--osd-accent)',
          marginTop: 48,
          maxWidth: 1300,
        }}
      >
        Factory-built modules, smaller footprints, and passive safety features. SMRs aim to cut
        construction time and cost — the bet is serial production beats one-off gigawatt builds.
      </p>
      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {[
          { title: '50–300 MW', sub: 'Typical SMR output range' },
          { title: 'Modular', sub: 'Shipped and assembled on site' },
          { title: 'Flexible', sub: 'Grid, industrial heat, hydrogen' },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              borderLeft: `4px solid ${secondary.green}`,
              paddingLeft: 24,
            }}
          >
            <p style={{ ...deckType('l'), color: 'var(--osd-text)', margin: 0 }}>{item.title}</p>
            <p style={{ ...deckType('xs'), color: 'var(--osd-accent)', marginTop: 12 }}>{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

const Challenges: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: CONTENT_W }}>
      <SectionHead label="08 — Trade-offs" title="Why deployment is hard" />
      <div style={{ marginTop: 48 }}>
        <BulletList
          items={[
            'Capital cost and long build timelines — billions per plant, 5–10+ years',
            'Public perception — accidents linger in memory despite strong safety records',
            'Waste management — no universal long-term repository yet in operation',
            'Proliferation concerns — enrichment technology dual-use with weapons programs',
            'Competition — solar and wind costs fell faster than many forecasts predicted',
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
      <p style={{ ...deckType('xl'), color: 'var(--osd-text)' }}>Low-carbon baseload</p>
      <p style={{ ...deckType('xl'), color: 'var(--osd-accent)' }}>when the grid needs it.</p>
    </div>
    <p
      style={{
        ...deckType('xs'),
        color: 'var(--osd-accent)',
        position: 'absolute',
        left: MARGIN,
        top: MARGIN + 280,
        maxWidth: 900,
      }}
    >
      Nuclear reactors won&apos;t solve everything — but they remain one of the few proven sources of
      firm, emissions-free power at scale.
    </p>
    <Logo />
    <Footer />
  </div>
);

export const meta: SlideMeta = {
  title: 'Nuclear Reactors',
  theme: 'Cursor GTM',
  createdAt: new Date().toISOString(),
};

export default [
  Cover,
  FissionBasics,
  HowItWorks,
  GlobalStats,
  ReactorTypes,
  SafetySystems,
  FuelCycle,
  SmallModular,
  Challenges,
  Closing,
] satisfies Page[];
