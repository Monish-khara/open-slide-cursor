import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import type { ReactNode } from 'react';

import cursorGothicBold from './assets/fonts/CursorGothic-Bold.otf';
import cursorGothicBoldItalic from './assets/fonts/CursorGothic-BoldItalic.otf';
import cursorGothicItalic from './assets/fonts/CursorGothic-Italic.otf';
import cursorGothicRegular from './assets/fonts/CursorGothic-Regular.otf';
import cursorLockup from './assets/cursor-lockup.svg';
import dividerRule from './assets/divider.svg';
import illustration1 from './assets/dividers/1-blue.svg';
import illustration2 from './assets/dividers/2-orange.svg';
import illustration3 from './assets/dividers/3-lavender.svg';
import illustration4 from './assets/dividers/4-sky.svg';
import illustration5 from './assets/dividers/5-green.svg';
import illustration6Center from './assets/dividers/6-olive-center.svg';
import illustration6Left from './assets/dividers/6-olive-left.svg';
import illustration6Right from './assets/dividers/6-olive-right.svg';

const STYLE_ID = 'role-focus-styles';
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
    body: 64,
  },
  radius: 0,
};

const core = {
  pureWhite: '#ffffff',
  offWhite: '#edece8',
  offWhite60: '#f4f3ef',
  midGray: '#8e8e8b',
  darkGray: '#3b3b3a',
  offBlack: '#121211',
} as const;

const secondary = {
  blue: '#2268ff',
  cursorOrange: '#f44e00',
  lavender: '#8c89e7',
  sky: '#0ec1ac',
  green: '#019f52',
  olive: '#a88d02',
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

const topicMuted = 'rgba(237, 236, 232, 0.5)';
const bodyMuted = 'rgba(18, 18, 17, 0.5)';

const MARGIN = 40;
const LIST_LEFT = Math.round(1920 / 3) + 20;
const LIST_W = 1220;
const ROW_GAP = 32;
const NUM_LABEL_GAP = 80;
const NUM_W = 116;
const LOCKUP_H = 50;
const CARD_ROW_TOP = 525;

const pageShell = (background: string) =>
  ({
    width: '100%',
    height: '100%',
    background,
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'var(--osd-font-display)',
  }) as const;

const illustrationInset = {
  position: 'absolute' as const,
  left: MARGIN,
  top: Math.round(1080 * 0.4074),
  right: MARGIN,
  bottom: Math.round(1080 * 0.037),
};

const illustrationInsetOrange = {
  position: 'absolute' as const,
  left: MARGIN,
  top: Math.round(1080 * 0.4065),
  right: MARGIN,
  bottom: Math.round(1080 * 0.038),
};

const DividerRule = () => (
  <img src={dividerRule} alt="" style={{ display: 'block', width: LIST_W, height: 1, maxWidth: 'none' }} />
);

const SectionDividerHead = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => (
  <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
    <p style={{ ...deckType('super'), color: core.offWhite }}>{heading}</p>
    <p style={{ ...deckType('super'), color: topicMuted }}>{subheading}</p>
  </div>
);

const SectionDividerPage = ({
  bg,
  heading,
  subheading,
  children,
}: {
  bg: string;
  heading: string;
  subheading: string;
  children: ReactNode;
}) => (
  <div style={pageShell(bg)}>
    <SectionDividerHead heading={heading} subheading={subheading} />
    {children}
  </div>
);

const LightHeadlineBody = ({
  headline,
  body,
  width = 1100,
}: {
  headline: string;
  body: string;
  width?: number;
}) => (
  <div
    style={{
      position: 'absolute',
      left: MARGIN,
      top: MARGIN,
      width,
      display: 'flex',
      flexDirection: 'column',
      gap: 60,
    }}
  >
    <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, margin: 0 }}>
      {headline}
    </p>
    <p className="gtm-deck-text" style={{ ...deckType('m'), color: bodyMuted, margin: 0 }}>
      {body}
    </p>
  </div>
);

const HighlightColumn = ({ title, body }: { title: string; body: string }) => (
  <div className="gtm-deck-text" style={{ width: 550, display: 'flex', flexDirection: 'column', gap: 24 }}>
    <p style={{ ...deckType('xs'), color: core.offBlack, margin: 0 }}>{title}</p>
    <p style={{ ...deckType('xs'), color: bodyMuted, margin: 0 }}>{body}</p>
  </div>
);

const FeatureCard = ({ title, body }: { title: string; body: string }) => (
  <div
    style={{
      background: core.offWhite60,
      borderRadius: 6,
      width: 601,
      height: 515,
      boxSizing: 'border-box',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 40,
    }}
  >
    <div className="gtm-deck-text">
      <p style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>{title}</p>
    </div>
    <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
      {body}
    </p>
  </div>
);

const ComparisonCard = ({ title, body }: { title: string; body: string }) => (
  <div
    style={{
      background: core.offWhite60,
      borderRadius: 6,
      width: 910,
      boxSizing: 'border-box',
      padding: 50,
      display: 'flex',
      flexDirection: 'column',
      gap: 40,
    }}
  >
    <p className="gtm-deck-text" style={{ ...deckType('m'), color: core.offBlack, margin: 0 }}>
      {title}
    </p>
    <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
      {body}
    </p>
  </div>
);

const AgendaRow = ({ num, label }: { num: string; label: string }) => (
  <>
    <div style={{ display: 'flex', alignItems: 'center', gap: NUM_LABEL_GAP, width: '100%' }}>
      <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.midGray, width: NUM_W, flexShrink: 0 }}>
        {num}
      </p>
      <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, flex: 1 }}>
        {label}
      </p>
    </div>
    <DividerRule />
  </>
);

const Lockup = () => (
  <img
    src={cursorLockup}
    alt="Cursor"
    style={{
      position: 'absolute',
      left: MARGIN,
      top: 1080 - MARGIN - LOCKUP_H,
      height: LOCKUP_H,
      width: 'auto',
      display: 'block',
    }}
  />
);

const TitleSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('super'), color: core.offWhite }}>Go-to-market</p>
      <p style={{ ...deckType('super'), color: core.midGray }}>Supporting sales with winning PMM programs</p>
    </div>
    <p
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 1080 - MARGIN - LOCKUP_H - 80,
        ...deckType('xs'),
        color: core.midGray,
        margin: 0,
      }}
    >
      Thought starters for Hung & Roman · July 2026
    </p>
    <Lockup />
  </div>
);

const AgendaSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('xxl'), color: core.offBlack }}>Agenda</p>
    </div>
    <div
      style={{
        position: 'absolute',
        left: LIST_LEFT,
        top: MARGIN,
        width: LIST_W,
        display: 'flex',
        flexDirection: 'column',
        gap: ROW_GAP,
        alignItems: 'flex-start',
      }}
    >
      <DividerRule />
      <AgendaRow num="01" label="The pain point" />
      <AgendaRow num="02" label="Origin as a proof point" />
      <AgendaRow num="03" label="What is next" />
      <AgendaRow num="04" label="Areas of focus" />
      <AgendaRow num="05" label="Time breakdown" />
      <AgendaRow num="06" label="The ask" />
    </div>
  </div>
);

const DividerPain: Page = () => (
  <SectionDividerPage bg={secondary.blue} heading="The pain point" subheading="Where sales needs support">
    <div style={illustrationInset}>
      <img src={illustration1} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const PainIntroSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <LightHeadlineBody
      headline="We ship a lot, but it’s hard to place our releases"
      body="Battle-tested motions and themes that scale without friction — not one-offs. Sales needs programs they can run, not more launches to translate alone."
    />
  </div>
);

const QuoteSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1920 - MARGIN * 2 }}
    >
      <p style={{ ...deckType('xxl'), color: core.offWhite, margin: 0 }}>
        “Sales doesn’t feel very supported and cared for.”
      </p>
      <p style={{ ...deckType('l'), color: core.midGray, margin: 0 }}>Roman · 1:1 check-in</p>
    </div>
  </div>
);

const ThreeOpportunitiesSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Three opportunities
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: CARD_ROW_TOP,
        width: 1920 - MARGIN * 2,
        height: 515,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
      }}
    >
      <FeatureCard
        title="Expert Agents"
        body="Derek: “the team’s dying for sales plays.” Package a repeatable play that grows landed accounts — or lands new ones as a wedge."
      />
      <FeatureCard
        title="Cloud Agents"
        body="Critical to the business, but low PMM treatment today: no deck, one-pagers, talk track, campaign, or program."
      />
      <FeatureCard
        title="Enterprise refresh"
        body="Rework ENT GTM materials — decks, web, one-pagers — into durable marketecture that contextualizes releases over time."
      />
    </div>
  </div>
);

const DividerOrigin: Page = () => (
  <SectionDividerPage bg={secondary.cursorOrange} heading="Origin release" subheading="A GTM motion that worked">
    <div style={{ ...illustrationInsetOrange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%', transform: 'scaleX(-1)' }}>
        <img src={illustration2} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  </SectionDividerPage>
);

const BuildingDemandSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Building the demand
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 420,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        rowGap: 48,
      }}
    >
      <HighlightColumn
        title="Media leak"
        body="Sales used it to spawn customer conversations and pique interest ahead of the broader reveal."
      />
      <HighlightColumn
        title="Analyst briefings"
        body="Got the analyst community interested before the public moment — early narrative control."
      />
      <HighlightColumn
        title="Enterprise reveal"
        body="Deck and talk track for Compile, presented to ~60 senior enterprise customers."
      />
    </div>
  </div>
);

const DemandToRevenueSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Turning demand into revenue
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 420,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <HighlightColumn
        title="Sales enablement"
        body="Talk tracks, competitive decks, deal support, sales decks, one-pagers, timelines, roadmaps, lead routing, ROE."
      />
      <HighlightColumn
        title="Full GTM motion"
        body="Pricing and packaging, migration bridge strategy, rollout sequencing — and a paid media campaign on enterprise accounts."
      />
      <HighlightColumn
        title="Waitlist signal"
        body="~24K valid submissions with big named accounts. Still work to do, but demand is set up to succeed."
      />
    </div>
  </div>
);

const DividerWhatsNext: Page = () => (
  <SectionDividerPage bg={secondary.lavender} heading="What’s next" subheading="Extend the GTM PMM lane">
    <div style={illustrationInset}>
      <img src={illustration3} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const WhatsNextIntroSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <LightHeadlineBody
      headline="Optimize for output-driven wins"
      body="Over the next six weeks: drive deep partnerships and ship playbooks the field can run — starting with Expert Agents and Cloud Agents."
    />
  </div>
);

const WithDerekZachSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Two build-outs
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 333,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <ComparisonCard
        title="With Derek · Expert Agents"
        body="Sales play for account expansion and field branding. End-to-end marketing + sales program to grow from ~$60–65M run rate. The field is hungry for plays — product is sticky with low churn."
      />
      <ComparisonCard
        title="With Zach · Cloud Agents"
        body="Earliest stage: no deck, one-pager, or dialed sales play. $146M run rate, 23 activated enterprise accounts, zero PMM today. Top-down transformation sell — shape narrative from day one."
      />
    </div>
  </div>
);

const DividerFocus: Page = () => (
  <SectionDividerPage bg={secondary.sky} heading="Areas of focus" subheading="A starting point to react to">
    <div style={illustrationInset}>
      <img src={illustration4} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const AreasOfFocusSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Recommended areas of focus
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: CARD_ROW_TOP,
        width: 1920 - MARGIN * 2,
        height: 515,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
      }}
    >
      <FeatureCard
        title="Primary · GTM / ENT PMM"
        body="Tight relationships with sales and transformation leaders. Turn product potential into executable, repeatable, revenue-driving plays and programs."
      />
      <FeatureCard
        title="Secondary · Outer loop"
        body="Own positioning and go-to-market for outer-loop products end to end — e.g. Origin — through discovery, pricing, and packaging."
      />
      <FeatureCard
        title="Additional · Releases"
        body="Some time on the release marketing treadmill — launch execution and release-level support without making it the center of gravity."
      />
    </div>
  </div>
);

const DividerBreakdown: Page = () => (
  <SectionDividerPage bg={secondary.green} heading="The breakdown" subheading="How time actually splits">
    <div style={{ position: 'absolute', left: MARGIN, top: 440, width: 1920 - MARGIN * 2, height: 600 }}>
      <img src={illustration5} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const TimeBreakdownSlide: Page = () => {
  const size = 560;
  const stroke = 92;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const gap = 10;
  const segments = [
    { pct: 0.6, color: secondary.cursorOrange },
    { pct: 0.25, color: '#cccac4' },
    { pct: 0.15, color: core.darkGray },
  ];
  let running = 0;
  const ring = segments.map((seg) => {
    const start = running;
    running += seg.pct * circ;
    return { ...seg, start, len: Math.max(seg.pct * circ - gap, 0) };
  });

  return (
    <div style={pageShell(core.pureWhite)}>
      <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 900 }}>
        <p style={{ ...deckType('xl'), color: core.offBlack, margin: 0 }}>Splitting time</p>
        <p style={{ ...deckType('xs'), color: bodyMuted, margin: '28px 0 0', fontStyle: 'italic' }}>
          Directional. What the primary lane actually looks like in terms of time commitment.
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          left: MARGIN,
          top: 280,
          width: 1920 - MARGIN * 2,
          display: 'flex',
          alignItems: 'center',
          gap: 100,
        }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden style={{ flexShrink: 0 }}>
          <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
            {ring.map((seg) => (
              <circle
                key={seg.color}
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth={stroke}
                strokeDasharray={`${seg.len} ${circ - seg.len}`}
                strokeDashoffset={-seg.start}
                strokeLinecap="butt"
              />
            ))}
          </g>
        </svg>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
            <div style={{ width: 28, height: 28, background: secondary.cursorOrange, flexShrink: 0, marginTop: 6 }} />
            <div className="gtm-deck-text" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>60% — GTM / Enterprise PMM</p>
              <p style={{ ...deckType('xs'), color: bodyMuted, margin: 0 }}>
                Sales relationships, wedge plays, Expert Agents and Cloud Agents build-out, website updates, sales deck
                refresh, etc.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
            <div style={{ width: 28, height: 28, background: '#cccac4', flexShrink: 0, marginTop: 6 }} />
            <div className="gtm-deck-text" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>25% — Outer Loop Product Ownership</p>
              <p style={{ ...deckType('xs'), color: bodyMuted, margin: 0 }}>
                Origin ownership, still have pricing and packaging to do, among other things, given cont’ customer
                discovery.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
            <div
              style={{
                width: 28,
                height: 28,
                background: core.darkGray,
                flexShrink: 0,
                marginTop: 6,
                boxSizing: 'border-box',
                border: `1.5px solid ${core.midGray}`,
              }}
            />
            <div className="gtm-deck-text" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>15% — Release Marketing</p>
              <p style={{ ...deckType('xs'), color: bodyMuted, margin: 0 }}>
                Launch execution and release-level marketing support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DividerTheFocus: Page = () => (
  <SectionDividerPage bg={secondary.olive} heading="The focus" subheading="Make ENT PMM primary">
    <div style={{ position: 'absolute', left: MARGIN, top: 440, width: 1920 - MARGIN * 2, height: 600 }}>
      <div style={{ position: 'absolute', top: 0, right: '5.04%', bottom: 0, left: '5.06%' }}>
        <img
          src={illustration6Center}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />
      </div>
      <div style={{ position: 'absolute', top: 0, right: '61.91%', bottom: 0, left: 0 }}>
        <img
          src={illustration6Left}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '61.91%' }}>
        <img
          src={illustration6Right}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
        />
      </div>
    </div>
  </SectionDividerPage>
);

const StatementFocusSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1920 - MARGIN * 2 }}
    >
      <p style={{ ...deckType('xxl'), color: core.offWhite, margin: 0 }}>Make GTM / Enterprise PMM</p>
      <p style={{ ...deckType('xxl'), color: core.midGray, margin: 0 }}>the primary focus.</p>
    </div>
  </div>
);

const FocusBodySlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <LightHeadlineBody
      headline="Build Expert Agents and Cloud Agents as sales plays"
      body="Flag early: does this sit under me, or is there existing coverage on Zach’s org I’d be stepping on? Align ownership before we scale the programs."
    />
  </div>
);

const CtaSlide: Page = () => (
  <div
    style={{
      ...pageShell(core.offBlack),
      boxSizing: 'border-box',
      padding: MARGIN,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 60, alignItems: 'flex-start' }}>
      <p className="gtm-deck-text" style={{ ...deckType('xl'), color: core.offWhite, margin: 0, maxWidth: 1100 }}>
        Let’s align on ownership, then ship the plays
      </p>
      <div
        style={{
          background: secondary.cursorOrange,
          borderRadius: 100,
          padding: '20px 36px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.offWhite, margin: 0 }}>
          Hung & Roman · July 2026
        </p>
      </div>
    </div>
    <img src={cursorLockup} alt="Cursor" style={{ height: LOCKUP_H, width: 'auto', display: 'block' }} />
  </div>
);

export const meta: SlideMeta = {
  title: 'Role Focus Thought Starters',
  theme: 'Cursor GTM',
  createdAt: '2026-07-10T00:04:50.865Z',
};

export default [
  TitleSlide,
  AgendaSlide,
  DividerPain,
  PainIntroSlide,
  QuoteSlide,
  ThreeOpportunitiesSlide,
  DividerOrigin,
  BuildingDemandSlide,
  DemandToRevenueSlide,
  DividerWhatsNext,
  WhatsNextIntroSlide,
  WithDerekZachSlide,
  DividerFocus,
  AreasOfFocusSlide,
  DividerBreakdown,
  TimeBreakdownSlide,
  DividerTheFocus,
  StatementFocusSlide,
  FocusBodySlide,
  CtaSlide,
] satisfies Page[];
