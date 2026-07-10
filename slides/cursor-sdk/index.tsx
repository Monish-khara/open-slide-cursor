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
import illustration5 from './assets/dividers/5-green.svg';
import illustration6Center from './assets/dividers/6-olive-center.svg';
import illustration6Left from './assets/dividers/6-olive-left.svg';
import illustration6Right from './assets/dividers/6-olive-right.svg';

const STYLE_ID = 'cursor-sdk-styles';
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

const CodePanel = ({ lines }: { lines: string[] }) => (
  <div
    style={{
      position: 'absolute',
      left: Math.round(1920 / 3) + 80,
      top: MARGIN,
      width: 1140,
      height: 1000,
      background: core.offWhite60,
      borderRadius: 6,
      boxSizing: 'border-box',
      padding: 48,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <pre
      style={{
        margin: 0,
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 22,
        lineHeight: 1.55,
        color: core.darkGray,
        whiteSpace: 'pre-wrap',
      }}
    >
      {lines.join('\n')}
    </pre>
  </div>
);

const TitleSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('super'), color: core.offWhite }}>Cursor SDK</p>
      <p style={{ ...deckType('super'), color: core.midGray }}>TypeScript & Python</p>
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
      <div style={{ display: 'flex', alignItems: 'center', gap: NUM_LABEL_GAP, width: '100%' }}>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.midGray, width: NUM_W, flexShrink: 0 }}>
          01
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, flex: 1 }}>
          What the SDK is
        </p>
      </div>
      <DividerRule />
      <div style={{ display: 'flex', alignItems: 'center', gap: NUM_LABEL_GAP, width: '100%' }}>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.midGray, width: NUM_W, flexShrink: 0 }}>
          02
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, flex: 1 }}>
          Languages & runtimes
        </p>
      </div>
      <DividerRule />
      <div style={{ display: 'flex', alignItems: 'center', gap: NUM_LABEL_GAP, width: '100%' }}>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.midGray, width: NUM_W, flexShrink: 0 }}>
          03
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, flex: 1 }}>
          Auth, billing & quick start
        </p>
      </div>
      <DividerRule />
      <div style={{ display: 'flex', alignItems: 'center', gap: NUM_LABEL_GAP, width: '100%' }}>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.midGray, width: NUM_W, flexShrink: 0 }}>
          04
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, flex: 1 }}>
          Core capabilities
        </p>
      </div>
      <DividerRule />
      <div style={{ display: 'flex', alignItems: 'center', gap: NUM_LABEL_GAP, width: '100%' }}>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.midGray, width: NUM_W, flexShrink: 0 }}>
          05
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, flex: 1 }}>
          Safety & visibility
        </p>
      </div>
      <DividerRule />
      <div style={{ display: 'flex', alignItems: 'center', gap: NUM_LABEL_GAP, width: '100%' }}>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.midGray, width: NUM_W, flexShrink: 0 }}>
          06
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, flex: 1 }}>
          Use cases & next steps
        </p>
      </div>
      <DividerRule />
    </div>
  </div>
);

const DividerOverview: Page = () => (
  <SectionDividerPage bg={secondary.blue} heading="What is the SDK" subheading="A quick guide">
    <div style={illustrationInset}>
      <img src={illustration1} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const WhatIsSdkSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <LightHeadlineBody
      headline="Call the same agent from your code"
      body="The Cursor SDK exposes the agent that powers the IDE, CLI, and web app — in public beta. TypeScript (@cursor/sdk) and Python (cursor-sdk) share one interface and one CURSOR_API_KEY. All inference runs on Cursor's hosted models; there is no BYOK."
    />
  </div>
);

const StatementSameAgentSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1920 - MARGIN * 2 }}
    >
      <p style={{ ...deckType('xxl'), color: core.offWhite, margin: 0 }}>Same agent.</p>
      <p style={{ ...deckType('xxl'), color: core.midGray, margin: 0 }}>Your code. Local or cloud.</p>
    </div>
  </div>
);

const LanguagesSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Languages & packages
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
        title="TypeScript / Node"
        body="Package @cursor/sdk on npm. Node-first with native deps for sandboxing, ripgrep, and a SQLite checkpoint store. Install: npm install @cursor/sdk."
      />
      <HighlightColumn
        title="Python"
        body="Package cursor-sdk with sync and async clients. Install: uv pip install cursor-sdk. Run /sdk inside Cursor to scaffold a project."
      />
      <HighlightColumn
        title="Other languages"
        body="Use the REST Cloud Agents API — separate from the SDKs. Same agent concepts, HTTP interface for any stack."
      />
    </div>
  </div>
);

const DividerRuntimes: Page = () => (
  <SectionDividerPage
    bg={secondary.cursorOrange}
    heading="Local & cloud runtimes"
    subheading="Where the agent runs"
  >
    <div style={{ ...illustrationInsetOrange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%', transform: 'scaleX(-1)' }}>
        <img src={illustration2} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  </SectionDividerPage>
);

const RuntimesSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      One interface, three runtimes
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
        title="Local"
        body="Agent loop in your Node or Python process. Files from disk. Best for dev scripts and CI against a working tree."
      />
      <FeatureCard
        title="Cloud (Cursor-hosted)"
        body="Isolated VM with repo cloned in. Parallel agents, survives disconnect. Set autoCreatePR for cloud PRs."
      />
      <FeatureCard
        title="Cloud (self-hosted)"
        body="Same SDK surface, VMs in your pool. When code, secrets, and artifacts must stay in your environment."
      />
    </div>
  </div>
);

const QuickStartSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: MARGIN,
        width: 580,
        display: 'flex',
        flexDirection: 'column',
        gap: 60,
      }}
    >
      <div className="gtm-deck-text">
        <p style={{ ...deckType('l'), color: core.offBlack, margin: 0 }}>Quick start</p>
        <p style={{ ...deckType('l'), color: core.midGray, margin: 0 }}>TypeScript example</p>
      </div>
      <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
        Set CURSOR_API_KEY, create an agent with local or cloud options, then send a prompt. Use run.stream() for
        events or run.wait() for the final result.
      </p>
    </div>
    <CodePanel
      lines={[
        'npm install @cursor/sdk',
        'export CURSOR_API_KEY="your-key"',
        '',
        'const agent = await Agent.create({',
        '  apiKey: process.env.CURSOR_API_KEY!,',
        '  model: { id: "composer-2.5" },',
        '  local: { cwd: process.cwd() },',
        '});',
        '',
        'const run = await agent.send("Summarize this repo");',
        'for await (const e of run.stream()) console.log(e);',
      ]}
    />
  </div>
);

const DividerAuth: Page = () => (
  <SectionDividerPage
    bg={secondary.lavender}
    heading="Authentication & billing"
    subheading="Keys, costs & usage"
  >
    <div style={illustrationInset}>
      <img src={illustration3} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const AuthSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Authentication
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
        title="User API key"
        body="Cursor Dashboard → Integrations. Bills to the user's personal plan. Works for local and cloud SDK runs."
      />
      <HighlightColumn
        title="Service account key"
        body="Dashboard → API Keys tab (cursor.com/dashboard/api). Team admins create keys; runs bill to the team."
      />
      <HighlightColumn
        title="Not supported yet"
        body="Team Admin API keys do not work with the SDK today. Use a user or service account key instead."
      />
    </div>
  </div>
);

const BillingSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <LightHeadlineBody
      headline="Same pricing as IDE & Cloud Agents"
      body="SDK runs use the same request pools and Privacy Mode rules. Spend appears in the usage dashboard tagged SDK. Pin a specific SDK version while APIs are in public beta — they may change before general availability."
    />
  </div>
);

const DividerCapabilities: Page = () => (
  <SectionDividerPage
    bg={secondary.green}
    heading="Core capabilities"
    subheading="Agent, run & beyond"
  >
    <div style={{ position: 'absolute', left: MARGIN, top: 440, width: 1920 - MARGIN * 2, height: 600 }}>
      <img src={illustration5} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const CoreConceptsSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Core concepts
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
        title="Agent"
        body="Durable handle for conversation state, workspace config, model selection, and settings. Survives across multiple send() calls."
      />
      <FeatureCard
        title="Run"
        body="One prompt submission with its own stream, status, result, and cancellation. Use run.cancel(), run.conversation(), or run.text()."
      />
      <FeatureCard
        title="SDKMessage"
        body="Normalized stream events during a run — same shape across local and cloud. Agent.resume() reattaches by agent ID (bc- prefix = cloud)."
      />
    </div>
  </div>
);

const CapabilitiesSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Capabilities worth knowing
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
        title="Streaming & models"
        body="run.stream() yields SDKMessage events. Discover models with Cursor.models.list(); prefer { id: 'auto' } in long-lived scripts."
      />
      <HighlightColumn
        title="Cloud-only extras"
        body="listArtifacts() and downloadArtifact() on cloud runs. autoCreatePR opens PRs; URL in run.git.branches[].prUrl. envVars inject short-lived secrets."
      />
      <HighlightColumn
        title="MCP & subagents"
        body="Pass mcpServers inline or via .cursor/mcp.json. Subagents via agents inline or .cursor/agents/*.md. Hooks are file-based only."
      />
    </div>
  </div>
);

const StatementHeadlessSlide: Page = () => (
  <div style={pageShell(core.offBlack)}>
    <div
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1920 - MARGIN * 2 }}
    >
      <p style={{ ...deckType('xxl'), color: core.offWhite, margin: 0 }}>Headless by default.</p>
      <p style={{ ...deckType('xxl'), color: core.midGray, margin: 0 }}>
        No human-in-the-loop tool approval in SDK mode.
      </p>
    </div>
  </div>
);

const SafetySlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Gating local runs
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
        title="local.autoReview"
        body="Route tool calls through an auto-review classifier. Steer with autoRun.allow_instructions and block_instructions in permissions.json."
      />
      <FeatureCard
        title="File-based hooks"
        body="beforeShellExecution and preToolUse in .cursor/hooks.json. Cloud runs pick up project hooks; enterprise plans add team hooks."
      />
      <FeatureCard
        title="local.sandboxOptions"
        body="Restrict filesystem, shell, and network on local runs. Cloud runs always execute inside an isolated VM."
      />
    </div>
  </div>
);

const CloudVisibilitySlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <LightHeadlineBody
      headline="Finding SDK cloud agents"
      body="Runs started outside the IDE are hidden from the default list at cursor.com/agents. Filter by Source: SDK for official SDK runs, CLI for Cursor CLI, API for REST or service-account integrations. Revoking a key does not delete past run history."
      width={1200}
    />
  </div>
);

const UseCasesSlide: Page = () => (
  <div style={pageShell(core.pureWhite)}>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Common starting points
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
        title="CI auto-fix bots"
        body="Run the agent against failing builds in CI. Local runtime reads the working tree; cloud runtime clones the repo in a VM."
      />
      <HighlightColumn
        title="Bug triage & code review"
        body="Automated passes over issues and PRs. Stream results with run.stream() or wait for run.text() when the job finishes."
      />
      <HighlightColumn
        title="Orchestrators & in-product agents"
        body="Embed Cursor's agent in your product or coordinate many cloud agents in parallel with the async Python client."
      />
    </div>
  </div>
);

const DividerNextSteps: Page = () => (
  <SectionDividerPage bg={secondary.olive} heading="Get started" subheading="Docs & next steps">
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
        Run /sdk in Cursor to scaffold a project
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
          cursor.com/docs/sdk
        </p>
      </div>
      <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0, maxWidth: 800 }}>
        TypeScript & Python SDKs are in public beta. Pin a version and watch the changelog for updates.
      </p>
    </div>
    <img src={cursorLockup} alt="Cursor" style={{ height: LOCKUP_H, width: 'auto', display: 'block' }} />
  </div>
);

export const meta: SlideMeta = {
  title: 'Cursor SDK',
  theme: 'Cursor GTM',
  createdAt: '2026-07-07T19:29:39.723Z',
};

export default [
  TitleSlide,
  AgendaSlide,
  DividerOverview,
  WhatIsSdkSlide,
  StatementSameAgentSlide,
  LanguagesSlide,
  DividerRuntimes,
  RuntimesSlide,
  QuickStartSlide,
  DividerAuth,
  AuthSlide,
  BillingSlide,
  DividerCapabilities,
  CoreConceptsSlide,
  CapabilitiesSlide,
  StatementHeadlessSlide,
  SafetySlide,
  CloudVisibilitySlide,
  UseCasesSlide,
  DividerNextSteps,
  CtaSlide,
] satisfies Page[];
