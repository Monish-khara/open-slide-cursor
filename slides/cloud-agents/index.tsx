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

const STYLE_ID = 'cloud-agents-styles';
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
  width = 942,
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

const TitleSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('super'), color: core.offWhite }}>Cloud Agents</p>
      <p style={{ ...deckType('super'), color: core.midGray }}>101</p>
    </div>
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
      <AgendaRow num="01" label="What is a cloud agent" />
      <AgendaRow num="02" label="Why cloud agents matter" />
      <AgendaRow num="03" label="Local vs cloud workflow" />
      <AgendaRow num="04" label="Drivers of autonomy" />
      <AgendaRow num="05" label="Environment setup" />
      <AgendaRow num="06" label="Private Workers" />
    </div>
  </div>
);

const DividerWhat: Page = () => (
  <SectionDividerPage bg={secondary.blue} heading="What is a cloud agent" subheading="Isolated, durable, always-on">
    <div style={illustrationInset}>
      <img src={illustration1} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const WhatIsSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <LightHeadlineBody
      headline="Agents that run in the cloud"
      body="Cloud agents run in isolated VMs with durable execution — they keep working through network issues, restarts, and closed laptops. Kick off, monitor, and intercept them from every Cursor surface: desktop, web, Slack, GitHub, API, and more."
      width={1100}
    />
  </div>
);

const HarnessAutomationsSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Built for ambitious work
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
        title="Long-running harness"
        body="A custom harness specialized for complex tasks. Agents can run for hours or even days — not just a few minutes of prompt-and-response."
      />
      <FeatureCard
        title="Cursor Automations"
        body="Always-on cloud agents that tackle tasks from pre-defined triggers. No manual kickoff — the agent starts when the trigger fires."
      />
      <FeatureCard
        title="Every surface"
        body="Start and steer agents from desktop, web, Slack, GitHub, or the API. Same agent, wherever developers already work."
      />
    </div>
  </div>
);

const DividerWhy: Page = () => (
  <SectionDividerPage bg={secondary.cursorOrange} heading="Why they matter" subheading="The shift to cloud">
    <div style={{ ...illustrationInsetOrange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%', transform: 'scaleX(-1)' }}>
        <img src={illustration2} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  </SectionDividerPage>
);

const StatementRevenueSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1920 - MARGIN * 2 }}
    >
      <p style={{ ...deckType('xxl'), color: core.offWhite, margin: 0 }}>
        By year end, 50%+ of Cursor revenue
      </p>
      <p style={{ ...deckType('xxl'), color: core.midGray, margin: 0 }}>
        from cloud agents — higher still in enterprise.
      </p>
    </div>
  </div>
);

const WhyMatterSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Why cloud wins
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 451,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <HighlightColumn
        title="Long-running harness"
        body="Tackle larger, more ambitious tasks that local prompt-and-response loops cannot finish."
      />
      <HighlightColumn
        title="Isolated VMs"
        body="Better parallelization across tasks — no shared machine fighting for CPU, ports, or deps."
      />
      <HighlightColumn
        title="Computer & tool use"
        body="Build and test software like developers. Always-on agents automate repetitive work with no intervention."
      />
    </div>
  </div>
);

const StatementShiftSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1920 - MARGIN * 2 }}
    >
      <p style={{ ...deckType('xxl'), color: core.offWhite, margin: 0 }}>Local to cloud.</p>
      <p style={{ ...deckType('xxl'), color: core.midGray, margin: 0 }}>
        Bigger than the shift from Tab to local agents.
      </p>
    </div>
  </div>
);

const DividerWorkflow: Page = () => (
  <SectionDividerPage bg={secondary.lavender} heading="Developer workflow" subheading="Local vs cloud">
    <div style={illustrationInset}>
      <img src={illustration3} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const LocalVsCloudSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      How work changes
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
        title="Local"
        body="Synchronous prompt-and-response. Watch the agent for a few minutes, then re-prompt. More agents hit resource limits and environment conflicts on one machine."
      />
      <ComparisonCard
        title="Cloud"
        body="Asynchronous. Scope a large task, let it run for hours, spin up the next agent, then come back to review, merge, or follow up. Parallelization without local constraints."
      />
    </div>
  </div>
);

const StatementManagerSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1920 - MARGIN * 2 }}
    >
      <p style={{ ...deckType('xxl'), color: core.offWhite, margin: 0 }}>Scope and review.</p>
      <p style={{ ...deckType('xxl'), color: core.midGray, margin: 0 }}>
        Developers act more like managers than ICs.
      </p>
    </div>
  </div>
);

const DividerAutonomy: Page = () => (
  <SectionDividerPage bg={secondary.sky} heading="Drivers of autonomy" subheading="What unlocks independence">
    <div style={illustrationInset}>
      <img src={illustration4} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const AutonomyPart1Slide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      How agents prove their work
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
        title="Artifacts over diffs"
        body="When agents run for days and write thousands of lines, line-by-line review fails. Artifacts — demos, screenshots, test plans, logs — let you assess work before deep code review."
      />
      <FeatureCard
        title="Self-verification"
        body="Full environments and computer use to test as they go. Cloud agents can run Debug Mode to solve harder problems without waiting on a developer."
      />
      <FeatureCard
        title="Long-running harness"
        body="Local agents optimize for fast turns and frequent intervention. Cloud agents optimize for deeper tasks they can drive to completion."
      />
    </div>
  </div>
);

const AutonomyPart2Slide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Isolation & durability
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
        title="Durable execution"
        body="Keep working while the developer is offline. Persist through network issues and restarts — closed laptop is not a stop signal."
      />
      <FeatureCard
        title="Process isolation"
        body="Isolated, scalable environments with no shared-machine resource fights. Local agents compete for CPU, memory, ports, and dependencies."
      />
      <FeatureCard
        title="Secure sandboxing"
        body="Isolated sandboxes run terminal commands with fewer escalations. Local agents inherit workstation permissions and need more constant approval."
      />
    </div>
  </div>
);

const DividerEnvironment: Page = () => (
  <SectionDividerPage bg={secondary.green} heading="Environment setup" subheading="DX for agents">
    <div style={{ position: 'absolute', left: MARGIN, top: 440, width: 1920 - MARGIN * 2, height: 600 }}>
      <img src={illustration5} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const EnvironmentSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <LightHeadlineBody
      headline="Setup is the new DX"
      body="Cloud agents need a well-configured environment — secrets, tools, and codebase context — just like human developers. Cursor invested so agents can self-onboard quickly, lowering the barrier so any developer can spin one up with minimal overhead. Higher upfront effort unlocks more complex environments and ambitious tasks."
      width={1200}
    />
  </div>
);

const DividerPrivate: Page = () => (
  <SectionDividerPage bg={secondary.olive} heading="Private Workers" subheading="Enterprise self-hosted">
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

const PrivateWorkersSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Self-hosted cloud agents
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 451,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <HighlightColumn
        title="Code stays put"
        body="For enterprises that cannot let the codebase leave their environment. Private Workers keep execution inside the customer boundary."
      />
      <HighlightColumn
        title="Reuse existing compute"
        body="Run on existing node clusters, VMs, or dev environments. Less setup, more control over how agents execute."
      />
      <HighlightColumn
        title="Full capabilities"
        body="Same cloud agent product surface — with granular control on where and how work runs. Enterprise-only."
      />
    </div>
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
      <p className="gtm-deck-text" style={{ ...deckType('xl'), color: core.offWhite, margin: 0, maxWidth: 900 }}>
        Start a cloud agent from any Cursor surface
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
          cursor.com/agents
        </p>
      </div>
    </div>
    <img src={cursorLockup} alt="Cursor" style={{ height: LOCKUP_H, width: 'auto', display: 'block' }} />
  </div>
);

export const meta: SlideMeta = {
  title: 'Cloud Agents 101',
  theme: 'Cursor GTM',
  createdAt: '2026-07-08T14:42:09.738Z',
};

export default [
  TitleSlide,
  AgendaSlide,
  DividerWhat,
  WhatIsSlide,
  HarnessAutomationsSlide,
  DividerWhy,
  StatementRevenueSlide,
  WhyMatterSlide,
  StatementShiftSlide,
  DividerWorkflow,
  LocalVsCloudSlide,
  StatementManagerSlide,
  DividerAutonomy,
  AutonomyPart1Slide,
  AutonomyPart2Slide,
  DividerEnvironment,
  EnvironmentSlide,
  DividerPrivate,
  PrivateWorkersSlide,
  CtaSlide,
] satisfies Page[];
