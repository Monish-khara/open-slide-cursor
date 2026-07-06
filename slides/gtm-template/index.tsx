import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import type { ReactNode } from 'react';

import cursorGothicBold from './assets/fonts/CursorGothic-Bold.otf';
import cursorGothicBoldItalic from './assets/fonts/CursorGothic-BoldItalic.otf';
import cursorGothicItalic from './assets/fonts/CursorGothic-Italic.otf';
import cursorGothicRegular from './assets/fonts/CursorGothic-Regular.otf';
import cursorLockup from './assets/cursor-lockup.svg';
import dividerRule from './assets/divider.svg';
import subAgentsVisual from './assets/sub-agents-visual.png';
import illustration1 from './assets/dividers/1-blue.svg';
import illustration2 from './assets/dividers/2-orange.svg';
import illustration3 from './assets/dividers/3-lavender.svg';
import illustration4 from './assets/dividers/4-sky.svg';
import illustration5 from './assets/dividers/5-green.svg';
import illustration6Center from './assets/dividers/6-olive-center.svg';
import illustration6Left from './assets/dividers/6-olive-left.svg';
import illustration6Right from './assets/dividers/6-olive-right.svg';
import uiFeatureScreenshot from './assets/ui-feature-screenshot.png';
import comparisonCheck from './assets/comparison/check.svg';
import comparisonCodexIcon from './assets/comparison/codex-icon.svg';
import comparisonCursorIcon from './assets/comparison/cursor-icon.svg';
import comparisonRule from './assets/comparison/rule.svg';
import timelineRule from './assets/timeline-rule.svg';
import futureStateGraphic from './assets/future-state-graphic.svg';
import statsSnowflake from './assets/key-stats/snowflake.svg';
import statsShopifyText from './assets/key-stats/shopify-text.svg';
import statsShopifyBag from './assets/key-stats/shopify-bag.svg';
import statsRamp from './assets/key-stats/ramp.svg';
import logoAirbnb from './assets/logo-wall/airbnb.svg';
import logoShopifyText from './assets/logo-wall/shopify-text.svg';
import logoShopifyBag from './assets/logo-wall/shopify-bag.svg';
import logoRamp from './assets/logo-wall/ramp.svg';
import logoVercel from './assets/logo-wall/vercel.svg';
import logoRedo from './assets/logo-wall/redo.svg';
import logoSuperhuman from './assets/logo-wall/superhuman.svg';
import logoMongodb from './assets/logo-wall/mongodb.svg';
import logoDatadog from './assets/logo-wall/datadog.svg';
import logoDuolingo from './assets/logo-wall/duolingo.svg';
import logoPerplexity from './assets/logo-wall/perplexity.svg';
import logoLucid from './assets/logo-wall/lucid.svg';
import logoSnowflake from './assets/logo-wall/snowflake.svg';
import logoSentry from './assets/logo-wall/sentry.svg';
import logoNetflix from './assets/logo-wall/netflix.svg';
import logoRetool from './assets/logo-wall/retool.svg';
import logoSemgrepDots from './assets/logo-wall/semgrep-dots.svg';
import logoSemgrepText from './assets/logo-wall/semgrep-text.svg';
import logoRobinhood from './assets/logo-wall/robinhood.svg';
import logoBlock from './assets/logo-wall/block.svg';
import logoFigma from './assets/logo-wall/figma.svg';
import logoLimeMask from './assets/logo-wall/lime-mask.svg';
import logoLimeIcon from './assets/logo-wall/lime-icon.svg';
import logoLimeLeaf from './assets/logo-wall/lime-leaf.svg';
import logoLimeText from './assets/logo-wall/lime-text.svg';
import section4161Slides from './section4161';
import section4179Slides from './section4179';

const STYLE_ID = 'gtm-template-styles';
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

/** Figma UI Feature — right panel anchors at 33.33% + offset */
const UI_FEATURE_X = Math.round(1920 / 3);

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

const MARGIN = 40;
const LIST_LEFT = Math.round(1920 / 3) + 20;
const LIST_W = 1220;
const ROW_GAP = 32;
const NUM_LABEL_GAP = 80;
const NUM_W = 116;
const LOCKUP_H = 50;
const bodyMuted = 'rgba(18, 18, 17, 0.5)';

const gitForgeCardCopy = {
  title: "Cursor's git forge",
  titleLine2: 'for the agentic era.',
  body: 'Origin covers the entire outer loop: review, CI, merge,and code hosting, purpose-built for the volume, velocity, and reliability that agentic development demands.',
} as const;

const comparisonFeatures = [
  'Fast Mode',
  'Extended limits on Agent',
  'Access to frontier models',
  'MCPs, skills, and hooks',
  'Cloud agents',
  'Pooled usage',
] as const;

const timelineMilestones = [
  {
    label: '2024',
    markerLeft: 40,
    listLeft: 74.12,
    items: ['Slack Integration', 'Team memories', 'Admin API', 'SCIM', 'MCP Allowlist'],
  },
  {
    label: 'Q1 2025',
    markerLeft: Math.round(1920 / 6) + 88.55,
    listLeft: Math.round(1920 / 6) + 122.67,
    items: [
      'Model Allow List',
      'Auto-run',
      'Per User Limit',
      'Cloud Agents',
      'Bugbot',
      'Slack Integration',
      'Team memories',
      'Admin API',
      'SCIM',
      'MCP Allowlist',
    ],
  },
  {
    label: 'Q2 2025',
    markerLeft: Math.round(1920 / 3) + 137.09,
    listLeft: Math.round(1920 / 3) + 171.22,
    items: [
      'One Click MCP Integration',
      'Linear Integration',
      'Plan Mode',
      'Team Rules',
      'Code Tracking API',
      'Audit Logs',
      'Sandboxed Terminals',
      'Auto-run Controls',
      'Team hooks',
      'Commands',
    ],
  },
  {
    label: 'Q3 2025',
    markerLeft: 960 + 185.64,
    listLeft: 960 + 219.76,
    items: [
      'Parallel Agents (worktrees)',
      'Cloud Agents in apps',
      'Code Review agent',
      'Browser interaction',
    ],
  },
  {
    label: 'Q4 2025',
    markerLeft: Math.round((1920 * 2) / 3) + 234.18,
    listLeft: Math.round((1920 * 2) / 3) + 268.31,
    items: [
      'Spend controls',
      'Billing groups',
      'Shared chats',
      'Service accounts',
      'Visual editor for Browser',
      'Debug mode',
      'Skills',
      'Subagents',
      'Plugins',
      'Cursor Blame',
      'Bugbot Autofix',
    ],
  },
] as const;

const timelineLabelType = {
  fontSize: 16.38,
  lineHeight: 1,
  letterSpacing: '0',
  fontWeight: 400,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  margin: 0,
} as const;

const statLabelType = {
  fontSize: 28,
  lineHeight: 1.3,
  letterSpacing: '-0.02em',
  fontWeight: 400,
  fontFamily: 'var(--osd-font-display)',
  margin: 0,
} as const;

const ShopifyLogo = ({
  textSrc,
  bagSrc,
  width,
  height,
}: {
  textSrc: string;
  bagSrc: string;
  width: number;
  height: number;
}) => (
  <div style={{ position: 'relative', width, height, overflow: 'hidden', flexShrink: 0 }}>
    <div style={{ position: 'absolute', top: '19.53%', right: '-0.05%', bottom: 0, left: '28.43%' }}>
      <img src={textSrc} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
    <div style={{ position: 'absolute', top: '0.23%', right: '75.44%', bottom: '2.59%', left: '0.07%' }}>
      <img src={bagSrc} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
  </div>
);

const SemgrepLogo = () => (
  <div style={{ position: 'relative', width: 172, height: 26.127, overflow: 'hidden', flexShrink: 0 }}>
    <div style={{ position: 'absolute', top: 0, right: '69.34%', bottom: '20.64%', left: 0 }}>
      <img src={logoSemgrepDots} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
    <div style={{ position: 'absolute', top: '2.38%', right: 0, bottom: 0, left: '35.27%' }}>
      <img src={logoSemgrepText} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
  </div>
);

const LimeLogo = () => (
  <div style={{ position: 'relative', width: 123.195, height: 43.888, overflow: 'hidden', flexShrink: 0 }}>
    <div
      style={{
        position: 'absolute',
        top: '12.44%',
        right: '67.94%',
        bottom: '12.42%',
        left: '4.1%',
        WebkitMaskImage: `url(${logoLimeMask})`,
        WebkitMaskSize: '39.488px 38.84px',
        WebkitMaskPosition: '-2.518px -2.93px',
        WebkitMaskRepeat: 'no-repeat',
        maskImage: `url(${logoLimeMask})`,
        maskSize: '39.488px 38.84px',
        maskPosition: '-2.518px -2.93px',
        maskRepeat: 'no-repeat',
      }}
    >
      <img src={logoLimeIcon} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
    <div style={{ position: 'absolute', top: '0.1%', right: '63.85%', bottom: '0.1%', left: 0 }}>
      <img src={logoLimeLeaf} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
    <div style={{ position: 'absolute', top: '25.19%', right: '0.05%', bottom: '25.15%', left: '46.14%' }}>
      <img src={logoLimeText} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
  </div>
);

const LogoImage = ({ src, width, height }: { src: string; width: number; height: number }) => (
  <img src={src} alt="" style={{ width, height, display: 'block', flexShrink: 0 }} />
);

const LogoWallCell = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      flex: 1,
      height: '100%',
      background: core.offWhite60,
      borderRadius: 6,
      padding: 40,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 0,
    }}
  >
    {children}
  </div>
);

const keyStatsCards = [
  {
    value: '55%',
    label: 'More PRs shipped per engineer',
    logo: <LogoImage src={statsSnowflake} width={209.802} height={46.949} />,
  },
  {
    value: '33%',
    label: 'More PRs shipped per engineer',
    logo: <ShopifyLogo textSrc={statsShopifyText} bagSrc={statsShopifyBag} width={182.667} height={52.633} />,
  },
  {
    value: '-75%',
    label: 'Time between PRs merged',
    logo: <LogoImage src={statsRamp} width={171.333} height={46.041} />,
  },
  {
    value: '-75%',
    label: 'Time between PRs merged',
    logo: <LogoImage src={statsRamp} width={171.333} height={46.041} />,
  },
] as const;

const logoWallRows: ReactNode[][] = [
  [
    <LogoImage src={logoAirbnb} width={118.797} height={37.27} />,
    <ShopifyLogo textSrc={logoShopifyText} bagSrc={logoShopifyBag} width={118} height={34} />,
    <LogoImage src={logoRamp} width={124} height={33.322} />,
    <LogoImage src={logoVercel} width={119.602} height={23.493} />,
    <LogoImage src={logoRedo} width={113.195} height={24.124} />,
  ],
  [
    <LogoImage src={logoSuperhuman} width={178.797} height={26.607} />,
    <LogoImage src={logoMongodb} width={144.402} height={36.686} />,
    <LogoImage src={logoDatadog} width={144} height={36.484} />,
    <LogoImage src={logoDuolingo} width={133.602} height={31.396} />,
    <LogoImage src={logoPerplexity} width={148.804} height={35.756} />,
  ],
  [
    <LogoImage src={logoLucid} width={116.797} height={28.772} />,
    <LogoImage src={logoSnowflake} width={146.402} height={32.761} />,
    <LogoImage src={logoSentry} width={128} height={30.118} />,
    <LogoImage src={logoNetflix} width={97.602} height={26.379} />,
    <LogoImage src={logoRetool} width={123.195} height={24.103} />,
  ],
  [
    <SemgrepLogo />,
    <LogoImage src={logoRobinhood} width={148.402} height={28.388} />,
    <LogoImage src={logoBlock} width={116} height={25.368} />,
    <LogoImage src={logoFigma} width={87.602} height={32.851} />,
    <LimeLogo />,
  ],
];

const sdlcPhases = ['Plan', 'Design', 'Code', 'Review/Test', 'Merge'] as const;

const sdlcPhaseBody =
  'Origin covers the entire outer loop: review, CI, merge,and code hosting, purpose-built for the volume, velocity, and reliability that agentic development demands.';

/** Figma 3852:3464–3468 — blue markers centered on each phase column */
const SDLC_MARKER_LEFT = [209, Math.round(1920 / 6) + 261, 960 - 7, Math.round((1920 * 2) / 3) + 45, Math.round((1920 * 5) / 6) + 97] as const;

const SdlcSlideLayout = ({ withDescriptions }: { withDescriptions: boolean }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.pureWhite,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <p
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: MARGIN,
        width: 910,
        ...deckType('xl'),
        color: core.offBlack,
        margin: 0,
      }}
    >
      Software Development Lifecycle
    </p>

    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 540 - 37.81,
        width: 1920 - MARGIN * 2,
        height: 2,
        transform: 'translateY(-50%)',
      }}
    >
      <img src={timelineRule} alt="" style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>

    {SDLC_MARKER_LEFT.map((left, index) => (
      <div
        key={sdlcPhases[index]}
        style={{
          position: 'absolute',
          left,
          top: 494,
          width: 15,
          height: 15,
          background: secondary.blue,
        }}
      />
    ))}

    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 533.71,
        width: 1920 - MARGIN * 2,
        display: 'flex',
        gap: 20,
        alignItems: 'center',
      }}
    >
      {sdlcPhases.map((phase) => (
        <div
          key={phase}
          style={{
            width: 352,
            height: 148,
            background: core.offWhite60,
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, margin: 0, textAlign: 'center' }}>
            {phase}
          </p>
        </div>
      ))}
    </div>

    {withDescriptions ? (
      <div
        style={{
          position: 'absolute',
          left: MARGIN,
          top: 702,
          width: 1920 - MARGIN * 2,
          height: 338,
          display: 'flex',
          gap: 20,
          alignItems: 'stretch',
        }}
      >
        {sdlcPhases.map((phase) => (
          <div
            key={`${phase}-body`}
            style={{
              width: 352,
              height: '100%',
              background: core.offWhite60,
              borderRadius: 6,
              padding: 30,
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'flex-start',
              flexShrink: 0,
            }}
          >
            <p className="gtm-deck-text" style={{ ...deckType('xxs'), color: core.darkGray, margin: 0 }}>
              {sdlcPhaseBody}
            </p>
          </div>
        ))}
      </div>
    ) : null}
  </div>
);

const SdlcSlide: Page = () => <SdlcSlideLayout withDescriptions={false} />;

const SdlcDetailSlide: Page = () => <SdlcSlideLayout withDescriptions={true} />;

/** Figma 3780:11468 — centered row, translate -50%/-50% from (50%, 50%+242.5px) */
const CARD_ROW_TOP = Math.round(1080 / 2 + 242.5 - 515 / 2);

const GitForgeCard = () => (
  <div
    style={{
      background: core.offWhite60,
      borderRadius: 6,
      padding: MARGIN,
      width: 601,
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'flex-start',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, flex: 1 }}>
      <div className="gtm-deck-text">
        <p style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>{gitForgeCardCopy.title}</p>
        <p style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>{gitForgeCardCopy.titleLine2}</p>
      </div>
      <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
        {gitForgeCardCopy.body}
      </p>
    </div>
  </div>
);

const ComparisonFeatureList = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
    {comparisonFeatures.map((label, index) => (
      <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <img src={comparisonCheck} alt="" style={{ width: 25, height: 25, display: 'block', flexShrink: 0 }} />
          <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0, whiteSpace: 'nowrap' }}>
            {label}
          </p>
        </div>
        {index < comparisonFeatures.length - 1 ? (
          <img src={comparisonRule} alt="" style={{ display: 'block', width: '100%', height: 1 }} />
        ) : null}
      </div>
    ))}
  </div>
);

const ComparisonCard = ({
  icon,
  iconWidth,
  iconHeight,
  title,
}: {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
}) => (
  <div
    style={{
      background: core.offWhite60,
      borderRadius: 6,
      padding: 50,
      width: 910,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'flex-start',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 50, flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, width: '100%' }}>
        <img src={icon} alt="" style={{ width: iconWidth, height: iconHeight, display: 'block' }} />
        <p className="gtm-deck-text" style={{ ...deckType('m'), color: core.offBlack, margin: 0 }}>
          {title}
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
          {gitForgeCardCopy.body}
        </p>
      </div>
      <ComparisonFeatureList />
    </div>
  </div>
);

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

const agendaItems = [
  { num: '01', label: 'Welcome & context' },
  { num: '02', label: 'Product update' },
  { num: '03', label: 'Go-to-market motion' },
  { num: '04', label: 'Customer stories' },
  { num: '05', label: 'Pipeline & metrics' },
  { num: '06', label: 'Roadmap preview' },
  { num: '07', label: 'Q&A' },
];

const DividerRule = () => (
  <img src={dividerRule} alt="" style={{ display: 'block', width: LIST_W, height: 1, maxWidth: 'none' }} />
);

const SectionDividerHead = ({ topic }: { topic: string }) => (
  <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
    <p style={{ ...deckType('super'), color: core.offWhite }}>Section Divider</p>
    <p style={{ ...deckType('super'), color: topicMuted }}>{topic}</p>
  </div>
);

const SectionDividerPage = ({
  bg,
  topic,
  children,
}: {
  bg: string;
  topic: string;
  children: ReactNode;
}) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: bg,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <SectionDividerHead topic={topic} />
    {children}
  </div>
);

const TitleSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.offBlack,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('super'), color: core.offWhite }}>Project Origin</p>
      <p style={{ ...deckType('super'), color: core.midGray }}>May 28</p>
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
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.pureWhite,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
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
      {agendaItems.flatMap((item) => [
        <div
          key={item.num}
          style={{ display: 'flex', alignItems: 'center', gap: NUM_LABEL_GAP, width: '100%' }}
        >
          <p
            className="gtm-deck-text"
            style={{ ...deckType('l'), color: core.midGray, width: NUM_W, flexShrink: 0 }}
          >
            {item.num}
          </p>
          <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, flex: 1 }}>
            {item.label}
          </p>
        </div>,
        <DividerRule key={`${item.num}-rule`} />,
      ])}
    </div>
  </div>
);

const SectionDivider1: Page = () => (
  <SectionDividerPage bg={secondary.blue} topic="Topic 1">
    <div style={illustrationInset}>
      <img src={illustration1} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const SectionDivider2: Page = () => (
  <SectionDividerPage bg={secondary.cursorOrange} topic="Topic 2">
    <div style={{ ...illustrationInsetOrange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%', transform: 'scaleX(-1)' }}>
        <img src={illustration2} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  </SectionDividerPage>
);

const SectionDivider3: Page = () => (
  <SectionDividerPage bg={secondary.lavender} topic="Topic 3">
    <div style={illustrationInset}>
      <img src={illustration3} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const SectionDivider4: Page = () => (
  <SectionDividerPage bg={secondary.sky} topic="Topic 4">
    <div style={illustrationInset}>
      <img src={illustration4} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const SectionDivider5: Page = () => (
  <SectionDividerPage bg={secondary.green} topic="Topic 5">
    <div style={{ position: 'absolute', left: MARGIN, top: 440, width: 1920 - MARGIN * 2, height: 600 }}>
      <img src={illustration5} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </SectionDividerPage>
);

const SectionDivider6: Page = () => (
  <SectionDividerPage bg={secondary.olive} topic="Topic 6">
    {/* Figma 4153:516 — artwork box @ (40, 440), 1840×600; three layers inset inside */}
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 440,
        width: 1920 - MARGIN * 2,
        height: 600,
      }}
    >
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

const SimpleHeadlineBodySlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.pureWhite,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: MARGIN,
        width: 942,
        display: 'flex',
        flexDirection: 'column',
        gap: 60,
      }}
    >
      <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, margin: 0 }}>
        Sub-agents Orchestrate parallel work effortlessly
      </p>
      <p className="gtm-deck-text" style={{ ...deckType('m'), color: bodyMuted, margin: 0 }}>
        Sub-agents let you fan out complex workflows in parallel. Each agent focuses on its area of
        expertise, so you get thorough, coordinated results in a fraction of the time.
      </p>
    </div>

    {/* Figma 3938:9253 — rotated visual @ 66.67%, top 39 */}
    <div
      style={{
        position: 'absolute',
        left: '66.67%',
        top: 39,
        width: 599,
        height: 1001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
        <div
          style={{
            position: 'relative',
            width: 1001,
            height: 599,
            borderRadius: 8,
            overflow: 'hidden',
            background: '#3e2132',
          }}
        >
          <img
            src={subAgentsVisual}
            alt=""
            style={{
              position: 'absolute',
              left: '4.68%',
              top: '11.52%',
              width: '90.53%',
              height: '77.13%',
              maxWidth: 'none',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

const ThreeColumnHighlightSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.pureWhite,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Features
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
      {[
        {
          title: 'Bugbot',
          body: 'Automated PR review on every update. Catches bugs, security issues, and code quality problems before a human ever looks. Learns over time and auto-fixes issues via Cursor Cloud Agent.',
        },
        {
          title: 'Cursor Cloud Agent',
          body: 'Tell it what to change directly in the PR. It sees the full diff, reads CI failures, and picks up where any previous threads left off.',
        },
        {
          title: 'Code Tours',
          body: 'An agent-guided walkthrough of every PR, leading with what matters and calling out points of risk.',
        },
      ].map((col) => (
        <div key={col.title} className="gtm-deck-text" style={{ width: 550 }}>
          <p style={{ ...deckType('xs'), color: core.offBlack, margin: 0 }}>{col.title}</p>
          <p style={{ ...deckType('xs'), color: bodyMuted, margin: 0 }}>{col.body}</p>
        </div>
      ))}
    </div>
  </div>
);

const UiFeatureSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.pureWhite,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
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
        <p style={{ ...deckType('l'), color: core.offBlack, margin: 0 }}>For Code Reviewers</p>
        <p style={{ ...deckType('l'), color: core.midGray, margin: 0 }}>Understand any PR in seconds</p>
      </div>
      <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
        Code Tours walk you through every change the way the author would explain it, leading with
        what matters and calling out points of risk.
      </p>
    </div>

    {/* Figma 3776:6990 — outer card panel */}
    <div
      style={{
        position: 'absolute',
        left: UI_FEATURE_X + 134,
        top: MARGIN,
        width: 1146,
        height: 1000,
        background: core.offWhite60,
        borderRadius: '6px 0 0 6px',
      }}
    />

    {/* Figma 3776:7000 — inner card */}
    <div
      style={{
        position: 'absolute',
        left: UI_FEATURE_X + 225,
        top: 102,
        width: 1055,
        height: 876,
        background: core.offWhite60,
        borderRadius: '10px 0 0 10px',
      }}
    />

    {/* Figma 3776:7001 — screenshot */}
    <div
      style={{
        position: 'absolute',
        left: UI_FEATURE_X + 246,
        top: 129,
        width: 1034,
        height: 849,
        overflow: 'hidden',
      }}
    >
      <img
        src={uiFeatureScreenshot}
        alt=""
        style={{
          position: 'absolute',
          height: '126.55%',
          width: '142.95%',
          left: '-0.06%',
          top: '-2.19%',
          maxWidth: 'none',
        }}
      />
    </div>
  </div>
);

const ThreeColumnCardHighlightSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.pureWhite,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Features
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
      <GitForgeCard />
      <GitForgeCard />
      <GitForgeCard />
    </div>
  </div>
);

const TwoColumnComparisonSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.pureWhite,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, margin: 0 }}
    >
      Comparison
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
      <ComparisonCard icon={comparisonCursorIcon} iconWidth={43} iconHeight={50} title="Cursor" />
      <ComparisonCard icon={comparisonCodexIcon} iconWidth={50} iconHeight={50} title="Codex" />
    </div>
  </div>
);

const StatementSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.offBlack,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <div
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1920 - MARGIN * 2 }}
    >
      <p style={{ ...deckType('xxl'), color: core.offWhite, margin: 0 }}>Cursor&apos;s Mission</p>
      <p style={{ ...deckType('xxl'), color: core.midGray, margin: 0 }}>
        Building what comes after text-editing software — with the ambition to help write all the
        world&apos;s software.
      </p>
    </div>
  </div>
);

const TimelineSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.pureWhite,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('xl'), color: core.offBlack, margin: 0 }}>Cursor Timeline</p>
      <p style={{ ...deckType('xl'), color: core.midGray, margin: 0 }}>Brief History</p>
    </div>

    {/* Figma 3848:2969 — quarter labels */}
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 472.7,
        width: 1920 - MARGIN * 2,
        height: 12.133,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {timelineMilestones.map((milestone) => (
        <p
          key={milestone.label}
          className="gtm-deck-text"
          style={{ ...timelineLabelType, color: core.offBlack, flex: 1 }}
        >
          {milestone.label}
        </p>
      ))}
    </div>

    {/* Figma 3848:2980 — horizontal rule */}
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 540 - 19.52,
        width: 1920 - MARGIN * 2,
        height: 2,
        transform: 'translateY(-50%)',
      }}
    >
      <img src={timelineRule} alt="" style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>

    {timelineMilestones.map((milestone) => (
      <div
        key={`${milestone.label}-marker`}
        style={{
          position: 'absolute',
          left: milestone.markerLeft,
          top: 512.29,
          width: 15,
          height: 15,
          background: secondary.cursorOrange,
        }}
      />
    ))}

    {timelineMilestones.map((milestone) => (
      <div
        key={`${milestone.label}-list`}
        className="gtm-deck-text"
        style={{ position: 'absolute', left: milestone.listLeft, top: 550.51 }}
      >
        {milestone.items.map((item) => (
          <p key={item} style={{ ...deckType('xxs'), color: core.darkGray, margin: 0 }}>
            {item}
          </p>
        ))}
      </div>
    ))}
  </div>
);

const FutureStateSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.offBlack,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    {/* Figma 3913:7482 — infinity graphic inset */}
    <div
      style={{
        position: 'absolute',
        top: '28.24%',
        right: '2.08%',
        bottom: '3.7%',
        left: '2.08%',
      }}
    >
      <img src={futureStateGraphic} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>

    {/* Figma 3913:7485 — headline mask block */}
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 540 - 377.5,
        width: 1195,
        height: 245,
        background: core.offBlack,
        paddingBottom: 10,
        paddingRight: 10,
        boxSizing: 'border-box',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <p className="gtm-deck-text" style={{ ...deckType('xxl'), margin: 0, maxWidth: 1167 }}>
        <span style={{ color: core.offWhite }}>Future state:</span>{' '}
        <span style={{ color: core.midGray }}>the future we are building towards</span>
      </p>
    </div>
  </div>
);

const KeyStatCard = ({
  value,
  label,
  logo,
}: {
  value: string;
  label: string;
  logo: ReactNode;
}) => (
  <div
    style={{
      flex: 1,
      height: '100%',
      background: core.offWhite60,
      borderRadius: 6,
      padding: 65,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: 0,
    }}
  >
    <div
      style={{
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: '100%' }}>
        <p className="gtm-deck-text" style={{ ...deckType('xxl'), color: core.offBlack, margin: 0 }}>
          {value}
        </p>
        <p className="gtm-deck-text" style={{ ...statLabelType, color: core.midGray, margin: 0 }}>
          {label}
        </p>
      </div>
      {logo}
    </div>
  </div>
);

const FourKeyStatsSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.pureWhite,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: MARGIN,
        width: 1920 - MARGIN * 2,
        height: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <div style={{ flex: 1, display: 'flex', gap: 20, minHeight: 0 }}>
        <KeyStatCard {...keyStatsCards[0]} />
        <KeyStatCard {...keyStatsCards[1]} />
      </div>
      <div style={{ flex: 1, display: 'flex', gap: 20, minHeight: 0 }}>
        <KeyStatCard {...keyStatsCards[2]} />
        <KeyStatCard {...keyStatsCards[3]} />
      </div>
    </div>
  </div>
);

const LogoWallSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.pureWhite,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: MARGIN,
        width: 1920 - MARGIN * 2,
        height: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      {logoWallRows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ flex: 1, display: 'flex', gap: 20, minHeight: 0 }}>
          {row.map((logo, colIndex) => (
            <LogoWallCell key={colIndex}>{logo}</LogoWallCell>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const CtaSlide: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: core.offBlack,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--osd-font-display)',
      boxSizing: 'border-box',
      padding: MARGIN,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 60, alignItems: 'flex-start' }}>
      <p className="gtm-deck-text" style={{ ...deckType('xl'), color: core.offWhite, margin: 0, maxWidth: 671 }}>
        Join the waitlist to learn more
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
          Sign up
        </p>
      </div>
    </div>

    <img src={cursorLockup} alt="Cursor" style={{ height: LOCKUP_H, width: 'auto', display: 'block' }} />
  </div>
);

export const meta: SlideMeta = {
  title: 'GTM Template',
  theme: 'Cursor GTM',
  createdAt: new Date().toISOString(),
};

export default [
  TitleSlide,
  AgendaSlide,
  SectionDivider1,
  SectionDivider2,
  SectionDivider3,
  SectionDivider4,
  SectionDivider5,
  SectionDivider6,
  SimpleHeadlineBodySlide,
  ThreeColumnHighlightSlide,
  UiFeatureSlide,
  ThreeColumnCardHighlightSlide,
  TwoColumnComparisonSlide,
  StatementSlide,
  TimelineSlide,
  FutureStateSlide,
  FourKeyStatsSlide,
  LogoWallSlide,
  SdlcSlide,
  SdlcDetailSlide,
  ...section4161Slides,
  ...section4179Slides,
  CtaSlide,
] satisfies Page[];
