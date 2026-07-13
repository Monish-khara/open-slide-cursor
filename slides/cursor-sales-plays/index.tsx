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
import illustration5 from './assets/dividers/5-green.svg';

const STYLE_ID = 'cursor-sales-plays-styles';
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
  brown: '#916031',
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
const NUM_LABEL_GAP = 80;
const NUM_W = 116;
const LOCKUP_H = 50;
const CARD_ROW_TOP = 333;

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

const DividerRule = () => (
  <img src={dividerRule} alt="" style={{ display: 'block', width: LIST_W, height: 1, maxWidth: 'none' }} />
);

const SectionDividerHead = ({ heading, subheading }: { heading: string; subheading: string }) => (
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

const FeatureCard = ({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) => (
  <div
    style={{
      background: core.offWhite60,
      borderRadius: 6,
      width: 601,
      height: 620,
      boxSizing: 'border-box',
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
    }}
  >
    <p className="gtm-deck-text" style={{ ...deckType('xxs'), color: core.midGray, margin: 0 }}>
      {eyebrow}
    </p>
    <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>
      {title}
    </p>
    <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
      {body}
    </p>
  </div>
);

const FieldBlock = ({ label, body, width }: { label: string; body: string; width: number }) => (
  <div className="gtm-deck-text" style={{ width, display: 'flex', flexDirection: 'column', gap: 20 }}>
    <p style={{ ...deckType('xs'), color: core.offBlack, margin: 0 }}>{label}</p>
    <p style={{ ...deckType('xs'), color: bodyMuted, margin: 0 }}>{body}</p>
  </div>
);

const PageTitle = ({ children }: { children: string }) => (
  <p
    className="gtm-deck-text"
    style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
  >
    {children}
  </p>
);

const PageEyebrow = ({ children }: { children: string }) => (
  <p
    className="gtm-deck-text"
    style={{
      position: 'absolute',
      left: MARGIN,
      top: MARGIN,
      ...deckType('xs'),
      color: core.midGray,
      margin: 0,
    }}
  >
    {children}
  </p>
);

// ——— Pages ———

const TitleSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('super'), color: core.offWhite }}>Cursor sales plays</p>
      <p style={{ ...deckType('super'), color: core.midGray }}>Three plays for the GTM / Enterprise motion</p>
    </div>
    <Lockup />
  </div>
);

const AgendaSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Agenda
    </p>
    <div
      style={{
        position: 'absolute',
        left: LIST_LEFT,
        top: 280,
        width: LIST_W,
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
      }}
    >
      <AgendaRow num="01" label="Autonomous Software Factory" />
      <AgendaRow num="02" label="Post-Code Velocity & Security" />
      <AgendaRow num="03" label="Value-Maxing / Vendor Consolidation" />
      <AgendaRow num="04" label="Open gaps to close" />
    </div>
  </div>
);

const OverviewSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageTitle>Three plays at a glance</PageTitle>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: CARD_ROW_TOP,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <FeatureCard
        eyebrow="Enterprise transform · Top-down, vision-led"
        title="Autonomous Software Factory"
        body="CTO / CIO transformational buyers. FDE co-builds on a real initiative; expand into the C-suite."
      />
      <FeatureCard
        eyebrow="Land & expand · 2-week trial"
        title="Post-Code Velocity & Security"
        body="Eng managers feeling review/security bottlenecks. Expert Agents trial on real PRs; expand to org-wide BugBot."
      />
      <FeatureCard
        eyebrow="Cost & ROI · 30-day trial"
        title="Value-Maxing / Consolidation"
        body="CFO / VP Eng facing vendor sprawl. Consolidate spend into one model-agnostic Cursor contract."
      />
    </div>
  </div>
);

const DividerAsf: Page = () => (
  <SectionDividerPage bg={secondary.blue} heading="Autonomous Software Factory" subheading="Enterprise transform">
    <div style={illustrationInset}>
      <img src={illustration1} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const AsfBuyerSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Autonomous Software Factory</PageEyebrow>
    <p
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 120,
        ...deckType('l'),
        color: core.offBlack,
        margin: 0,
        width: 1600,
      }}
    >
      Who buys, and what triggers the conversation
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 340,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <FieldBlock
        width={880}
        label="Primary buyer"
        body="CTO / CIO — a transformational, visionary leader rethinking how the org builds software."
      />
      <FieldBlock
        width={880}
        label="Trigger"
        body="A leader looking at the full transformation of their software supply chain, staffing, and how work gets done. A visionary bet on the future."
      />
    </div>
  </div>
);

const AsfMessageSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Autonomous Software Factory · Message</PageEyebrow>
    <div
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 200,
        width: 1700,
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
      }}
    >
      <p style={{ ...deckType('l'), color: core.offBlack, margin: 0 }}>
        The calculus has shifted. Competitors are moving quickly, inspired by the titans of the tech industry.
      </p>
      <p style={{ ...deckType('m'), color: bodyMuted, margin: 0 }}>
        We work with you closely to set up an autonomous, self-driving future — humans elevated into higher-judgment,
        higher-creativity, higher-taste roles. Ship more, faster, better, and compete in the new global markets.
      </p>
    </div>
  </div>
);

const AsfMotionSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Autonomous Software Factory · Motion</PageEyebrow>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: 120, ...deckType('l'), color: core.offBlack, margin: 0 }}
    >
      Top-down, vision-led
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 280,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <FieldBlock
        width={580}
        label="Land"
        body="Cursor FDEs embed with the customer, co-building systems and deploying on an actual customer initiative — benchmarked against their current capacity (sync / assist agents)."
      />
      <FieldBlock
        width={580}
        label="Expand"
        body="Work top-down to penetrate the C-suite and reach the transformational buyer. Share insights from co-builds; anchor on an important initiative of theirs."
      />
      <FieldBlock
        width={580}
        label="Who brings it in"
        body="AE + incubation team — may require internal exec sponsorship and exec-level access."
      />
    </div>
  </div>
);

const AsfGapsSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Autonomous Software Factory · Still open</PageEyebrow>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 200,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          background: core.offWhite60,
          borderRadius: 6,
          width: 900,
          boxSizing: 'border-box',
          padding: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>
          Proof point
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
          Gap — need a flagship case study of an org shipping a large % of features totally autonomously.
        </p>
      </div>
      <div
        style={{
          background: core.offWhite60,
          borderRadius: 6,
          width: 900,
          boxSizing: 'border-box',
          padding: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>
          Open gap
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
          Need to formulate the trial mechanism with the right internal teams — stand up a strawman.
        </p>
      </div>
    </div>
  </div>
);

const DividerPostCode: Page = () => (
  <SectionDividerPage bg={secondary.green} heading="Post-Code Velocity & Security" subheading="Land & expand">
    <div style={illustrationInset}>
      <img src={illustration5} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const PostBuyerSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Post-Code Velocity & Security</PageEyebrow>
    <p
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 120,
        ...deckType('l'),
        color: core.offBlack,
        margin: 0,
        width: 1600,
      }}
    >
      Who buys, and what triggers the conversation
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 340,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <FieldBlock
        width={880}
        label="Primary buyer"
        body="Engineering Manager / Team Lead — bring Head of Security in to sell the full package when possible."
      />
      <FieldBlock
        width={880}
        label="Trigger"
        body="Review, security, or another post-code stage can't keep pace with PR volume as agents write more code. A real bottleneck — most customers feel this pain today."
      />
    </div>
  </div>
);

const PostMessageSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Post-Code Velocity & Security · Message</PageEyebrow>
    <div
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 200,
        width: 1700,
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
      }}
    >
      <p style={{ ...deckType('l'), color: core.offBlack, margin: 0 }}>
        Everything after code creation — review, security, approval — needs to move at the same speed your agents write
        code, or the authoring speed gains stall out.
      </p>
      <p style={{ ...deckType('m'), color: bodyMuted, margin: 0 }}>
        Expert Agents are ready out of the box to close that gap across the SDLC.
      </p>
    </div>
  </div>
);

const PostMotionSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Post-Code Velocity & Security · Motion</PageEyebrow>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: 120, ...deckType('l'), color: core.offBlack, margin: 0 }}
    >
      2-week trial
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 280,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <FieldBlock
        width={580}
        label="Land"
        body="Baseline capture (review / security metrics) → trial on real PRs → Day 14 review comparing before / after, with and without Expert Agents, on cost, value, and speed."
      />
      <FieldBlock
        width={580}
        label="Expand"
        body="Expand BugBot usage more broadly. VP Eng enters as economic buyer for org-wide rollout — draw down from existing token commitment or add to contract mid-term."
      />
      <FieldBlock
        width={580}
        label="Who brings it in"
        body="AE, with FE / FDE and incubation team assisting where needed."
      />
    </div>
  </div>
);

const PostProofSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Post-Code Velocity & Security · Proof & gaps</PageEyebrow>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 180,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          background: core.offWhite60,
          borderRadius: 6,
          width: 900,
          minHeight: 520,
          boxSizing: 'border-box',
          padding: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>
          Proof point
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
          BugBot: one of the best resolution rates in the industry at ~80%, ~90 second reviews, for less than a dollar
          per review.
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
          Security Reviewer: not yet validated.
        </p>
      </div>
      <div
        style={{
          background: core.offWhite60,
          borderRadius: 6,
          width: 900,
          minHeight: 520,
          boxSizing: 'border-box',
          padding: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>
          Open gap
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
          Security Reviewer needs a real, concrete proof point before it can lead as confidently as review.
        </p>
      </div>
    </div>
  </div>
);

const DividerValue: Page = () => (
  <SectionDividerPage bg={secondary.brown} heading="Value-Maxing / Consolidation" subheading="Cost & ROI">
    <div style={illustrationInset}>
      <img src={illustration2} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const ValueBuyerSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Value-Maxing / Vendor Consolidation</PageEyebrow>
    <p
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 120,
        ...deckType('l'),
        color: core.offBlack,
        margin: 0,
        width: 1600,
      }}
    >
      Who buys, and what triggers the conversation
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 340,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <FieldBlock
        width={880}
        label="Primary buyer"
        body="CFO / VP Eng / other budget-owning leader."
      />
      <FieldBlock
        width={880}
        label="Trigger"
        body="Vendor sprawl across coding agents, model providers, and agent tooling with no unified view of spend or ROI. Most AI vendor contracts are one year — timely anywhere in the cycle, not just at renewal."
      />
    </div>
  </div>
);

const ValueMessageSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Value-Maxing / Vendor Consolidation · Message</PageEyebrow>
    <div
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 200,
        width: 1700,
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
      }}
    >
      <p style={{ ...deckType('l'), color: core.offBlack, margin: 0 }}>
        One vendor, one contract, model-agnostic, with a harness that does the hard work.
      </p>
      <p style={{ ...deckType('m'), color: bodyMuted, margin: 0 }}>
        Don&apos;t overpay for lock-in — Cursor&apos;s router optimizes performance / cost by task, giving a unified view
        of value instead of fragmented spend.
      </p>
    </div>
  </div>
);

const ValueMotionSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Value-Maxing / Vendor Consolidation · Motion</PageEyebrow>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: 120, ...deckType('l'), color: core.offBlack, margin: 0 }}
    >
      30-day trial (standard)
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 280,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <FieldBlock
        width={580}
        label="Land"
        body="30-day platform trial, comparing fragmented spend today vs. consolidated Cursor cost."
      />
      <FieldBlock
        width={580}
        label="Expand"
        body="Move into the leadership conversation with budget owners dealing with tool sprawl — CFO as economic buyer, incentivized by financial efficiencies."
      />
      <FieldBlock
        width={580}
        label="Who brings it in"
        body="AE, paired with an ADM who has run this play before."
      />
    </div>
  </div>
);

const ValueGapsSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <PageEyebrow>Value-Maxing / Vendor Consolidation · Still open</PageEyebrow>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 200,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          background: core.offWhite60,
          borderRadius: 6,
          width: 900,
          boxSizing: 'border-box',
          padding: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>
          Proof point
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
          Gap — BugBot cost data and the 83% adoption stat don&apos;t apply here. No packaged proof point yet.
        </p>
      </div>
      <div
        style={{
          background: core.offWhite60,
          borderRadius: 6,
          width: 900,
          boxSizing: 'border-box',
          padding: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>
          Open gap
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
          Still need a packaged proof point for consolidated spend / value — nothing existing applies.
        </p>
      </div>
    </div>
  </div>
);

const ClosingSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offWhite, margin: 0 }}
    >
      Gaps to close before these plays scale
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 280,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
      }}
    >
      <div className="gtm-deck-text" style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
        <p style={{ ...deckType('s'), color: core.midGray, width: 80, flexShrink: 0, margin: 0 }}>01</p>
        <p style={{ ...deckType('s'), color: core.offWhite, margin: 0, maxWidth: 1600 }}>
          ASF — flagship autonomy case study + a strawman trial mechanism
        </p>
      </div>
      <div className="gtm-deck-text" style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
        <p style={{ ...deckType('s'), color: core.midGray, width: 80, flexShrink: 0, margin: 0 }}>02</p>
        <p style={{ ...deckType('s'), color: core.offWhite, margin: 0, maxWidth: 1600 }}>
          Post-code — concrete Security Reviewer proof before it can lead like BugBot
        </p>
      </div>
      <div className="gtm-deck-text" style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
        <p style={{ ...deckType('s'), color: core.midGray, width: 80, flexShrink: 0, margin: 0 }}>03</p>
        <p style={{ ...deckType('s'), color: core.offWhite, margin: 0, maxWidth: 1600 }}>
          Consolidation — packaged spend / value proof point (existing stats don&apos;t transfer)
        </p>
      </div>
    </div>
    <Lockup />
  </div>
);

export const meta: SlideMeta = {
  title: 'Cursor sales plays',
  theme: 'Cursor GTM',
  createdAt: '2026-07-13T18:58:51.961Z',
};

export default [
  TitleSlide,
  AgendaSlide,
  OverviewSlide,
  DividerAsf,
  AsfBuyerSlide,
  AsfMessageSlide,
  AsfMotionSlide,
  AsfGapsSlide,
  DividerPostCode,
  PostBuyerSlide,
  PostMessageSlide,
  PostMotionSlide,
  PostProofSlide,
  DividerValue,
  ValueBuyerSlide,
  ValueMessageSlide,
  ValueMotionSlide,
  ValueGapsSlide,
  ClosingSlide,
] satisfies Page[];
