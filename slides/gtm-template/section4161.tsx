import type { Page } from '@open-slide/core';
import type { CSSProperties, ReactNode } from 'react';

import aiCurve1 from './assets/section4161/ai-curve-1.svg';
import aiCurve2 from './assets/section4161/ai-curve-2.svg';
import aiCurve3 from './assets/section4161/ai-curve-3.svg';
import aiCurve4 from './assets/section4161/ai-curve-4.svg';
import milestoneDotActive from './assets/section4161/milestone-dot-active.svg';
import milestoneDotStart from './assets/section4161/milestone-dot-start.svg';
import platformArrowUp from './assets/section4161/platform-arrow-up.svg';
import platformArrowRight from './assets/section4161/platform-arrow-right.svg';
import platformArrowLeft from './assets/section4161/platform-arrow-left.svg';
import platformArrowRightSolid from './assets/section4161/platform-arrow-right-solid.svg';
import jointLogoCursor from './assets/section4161/joint-logo-cursor.svg';
import jointLogoDivider from './assets/section4161/joint-logo-divider.svg';
import openaiLogo from './assets/section4161/openai-logo.svg';
import openaiLogoDark from './assets/section4161/openai-logo-dark.svg';
import proofPointsVisual from './assets/section4161/proof-points-visual.png';
import proofPointsRotated from './assets/section4161/proof-points-rotated.png';
import customerQuoteVisual from './assets/section4161/customer-quote-visual.png';
import heroMetricLines from './assets/section4161/hero-metric-lines.svg';
import enterpriseControlsArt from './assets/section4161/enterprise-controls-art.svg';
import featureIcon from './assets/section4161/feature-icon.svg';
import adminDashboard from './assets/section4161/admin-dashboard.png';
import sectionDividerOrgs from './assets/section4161/section-divider-orgs.svg';
import overviewIconBug from './assets/section4161/overview-icon-bug.svg';
import overviewIconCloud from './assets/section4161/overview-icon-cloud.svg';
import overviewIconPerson from './assets/section4161/overview-icon-person.svg';
import orgDiagramVline from './assets/section4161/org-diagram-vline.svg';
import orgDiagramHline from './assets/section4161/org-diagram-hline.svg';
import orgDiagramBranch from './assets/section4161/org-diagram-branch.svg';
import surfaceDesktop from './assets/section4161/surface-desktop.svg';
import surfaceMobile from './assets/section4161/surface-mobile.svg';
import surfaceOther from './assets/section4161/surface-other.svg';
import surfaceCli from './assets/section4161/surface-cli.svg';
import extensibilityMarketplace from './assets/section4161/extensibility-marketplace.png';
import connectorSlack from './assets/section4161/connector-slack.svg';
import connectorFigma from './assets/section4161/connector-figma.svg';
import connectorNotion from './assets/section4161/connector-notion.svg';
import connectorLinear from './assets/section4161/connector-linear.svg';
import connectorGithub from './assets/section4161/connector-github.svg';
import adoptionPlanRule from './assets/section4161/adoption-plan-rule.svg';
import codeReviewScreenshot from './assets/section4161/code-review-screenshot.png';

const core = {
  pureWhite: '#ffffff',
  offWhite: '#edece8',
  offWhite60: '#f4f3ef',
  midGray: '#8e8e8b',
  darkGray: '#3b3b3a',
  offBlack: '#121211',
} as const;

const secondary = {
  cursorOrange: '#f44e00',
  green: '#019f52',
  blue: '#2268ff',
  lavender: '#8c89e7',
  olive: '#a88d02',
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
const bodyMuted = 'rgba(18, 18, 17, 0.5)';
const topicMuted = 'rgba(237, 236, 232, 0.5)';
const cardTint = 'rgba(237, 235, 228, 0.6)';
const milestoneLabelType = {
  fontSize: 30.735,
  lineHeight: 1.2,
  letterSpacing: 0,
  fontWeight: 400,
  fontFamily: 'var(--osd-font-display)',
  margin: 0,
} as const;

const CARD_ROW_TOP = Math.round(1080 / 2 + 242.5 - 515 / 2);
const UI_FEATURE_X = Math.round(1920 / 3);

/** Figma 4161:2326–2391 — each curve variant is a segment of the same path with its own bbox. */
const aiCurveBoxes = {
  curve4: { left: 117, top: 99, width: 1668, height: 856 },
  curve3: { left: 117, top: 649.809, width: 1216, height: 305.191 },
  curve2: { left: 117, top: 855.478, width: 725, height: 99.522 },
  curve1: { left: 117, top: 943.275, width: 198.5, height: 11.725 },
} as const;

const lightSlide: CSSProperties = {
  width: '100%',
  height: '100%',
  background: core.pureWhite,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'var(--osd-font-display)',
};

const LightSlide = ({ children, bg = core.pureWhite }: { children: ReactNode; bg?: string }) => (
  <div style={{ ...lightSlide, background: bg }}>{children}</div>
);

type Milestone = {
  lines: string[];
  cardLeft: number;
  cardTop: number;
  cardWidth?: number;
};

const assistedMilestone = {
  cardLeft: 177,
  cardTop: 793,
  dotLeft: 301.52,
  dotTop: 930.37,
} as const;

/** Figma renders dots at 24.392px with a −42.11% inset halo so the stroke sits on the curve. */
const MilestoneDot = ({ src, left, top }: { src: string; left: number; top: number }) => (
  <div style={{ position: 'absolute', left, top, width: 24.392, height: 24.392, zIndex: 2 }}>
    <div style={{ position: 'absolute', inset: '-42.11%' }}>
      <img src={src} alt="" style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  </div>
);

const MilestoneCard = ({ lines }: { lines: string[] }) => (
  <div
    style={{
      background: core.offWhite60,
      borderRadius: 6,
      height: 125.813,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 25.676,
      boxSizing: 'border-box',
    }}
  >
    <div className="gtm-deck-text" style={{ textAlign: 'center' }}>
      {lines.map((line, i) => (
        <p key={line} style={{ ...milestoneLabelType, color: core.offBlack, margin: 0 }}>
          {line}
        </p>
      ))}
    </div>
  </div>
);

const AiCurveSlide = ({
  curveSrc,
  curveStyle,
  milestones,
  assistedOnly,
}: {
  curveSrc: string;
  curveStyle: CSSProperties;
  milestones: Omit<Milestone, 'labelOnly'>[];
  assistedOnly?: { cardLeft: number; cardTop: number; dotLeft: number; dotTop: number };
}) => (
  <LightSlide>
    <p
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: MARGIN,
        width: 511,
        ...deckType('l'),
        color: core.offBlack,
      }}
    >
      AI Development Maturity Curve
    </p>
    <img
      src={curveSrc}
      alt=""
      style={{ position: 'absolute', zIndex: 1, display: 'block', ...curveStyle }}
    />
    {assistedOnly ? (
      <>
        <div
          style={{
            position: 'absolute',
            left: assistedOnly.cardLeft,
            top: assistedOnly.cardTop,
            width: 291.423,
            height: 125.813,
            background: core.offWhite60,
            borderRadius: 6,
            zIndex: 2,
          }}
        />
        <p
          className="gtm-deck-text"
          style={{
            position: 'absolute',
            left: 313.71,
            top: 837.41,
            width: 240.071,
            transform: 'translateX(-50%)',
            zIndex: 2,
            ...milestoneLabelType,
            color: core.offBlack,
            textAlign: 'center',
          }}
        >
          AI Assisted
        </p>
        <MilestoneDot src={milestoneDotStart} left={assistedOnly.dotLeft} top={assistedOnly.dotTop} />
      </>
    ) : null}
    {milestones.map((m) => (
      <div
        key={m.lines.join('-')}
        style={{
          position: 'absolute',
          left: m.cardLeft,
          top: m.cardTop,
          width: m.cardWidth ?? 270.882,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 11.554,
          zIndex: 2,
        }}
      >
        <MilestoneCard lines={m.lines} />
        <div style={{ position: 'relative', width: 24.392, height: 24.392, flexShrink: 0 }}>
          <div style={{ position: 'absolute', inset: '-42.11%' }}>
            <img src={milestoneDotActive} alt="" style={{ display: 'block', width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    ))}
  </LightSlide>
);

const platformDiagramMilestones = {
  aiAssisted: { cardLeft: 177, cardTop: 793 },
  agentsSync: { cardLeft: Math.round(1920 / 3) + 57, cardTop: 707 },
  cloudAgents: { cardLeft: 960 + 238, cardTop: 501 },
  aiFactory: { cardLeft: Math.round((1920 * 2) / 3) + 252, cardTop: 185 },
} as const;

const PlatformDiagramSlide = ({ title }: { title: string }) => (
  <LightSlide>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack }}
    >
      {title}
    </p>
    <div style={{ position: 'absolute', left: '50%', top: 275, transform: 'translateX(-50%)', width: 1840 }}>
      <div
        style={{
          position: 'absolute',
          left: 191 - MARGIN,
          top: 24,
          width: 759,
          height: 559,
          border: `2px dashed ${core.midGray}`,
          borderRadius: 8,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 960 + 10 - MARGIN,
          top: 24,
          width: 759,
          height: 559,
          border: `2px dashed ${core.midGray}`,
          borderRadius: 8,
        }}
      />
      <p
        className="gtm-deck-text"
        style={{
          position: 'absolute',
          left: Math.round(1920 / 6) + 153 - MARGIN,
          top: 0,
          ...deckType('s'),
          color: core.offBlack,
          background: core.pureWhite,
          padding: '10px 30px',
        }}
      >
        Today
      </p>
      <p
        className="gtm-deck-text"
        style={{
          position: 'absolute',
          left: Math.round((1920 * 2) / 3) + 34 - MARGIN,
          top: 0,
          ...deckType('s'),
          color: core.offBlack,
          background: core.pureWhite,
          padding: '10px 30px',
        }}
      >
        Q3
      </p>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 73,
          transform: 'translateX(-50%)',
          width: 1440,
          height: 148,
          background: core.offWhite60,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack }}>
          Origin
        </p>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 240 - MARGIN,
          top: 379,
          width: 624,
          height: 148,
          background: core.offWhite60,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 50,
          boxSizing: 'border-box',
        }}
      >
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, textAlign: 'center' }}>
          Backed by GH data
        </p>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 960 + 96 - MARGIN,
          top: 379,
          width: 624,
          height: 148,
          background: core.offWhite60,
          border: `2px solid ${secondary.green}`,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 50,
          boxSizing: 'border-box',
        }}
      >
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, textAlign: 'center' }}>
          Backed by Origin Repos
        </p>
      </div>
      <img
        src={platformArrowLeft}
        alt=""
        style={{ position: 'absolute', left: Math.round(1920 / 6) + 190.67 - MARGIN, top: 260, width: 83.97, height: 81 }}
      />
      <img
        src={platformArrowRightSolid}
        alt=""
        style={{ position: 'absolute', left: Math.round((1920 * 2) / 3) + 46.25 - MARGIN, top: 260, width: 83.97, height: 81 }}
      />
      <img
        src={platformArrowUp}
        alt=""
        style={{
          position: 'absolute',
          left: Math.round(1920 / 3) + 275.33 - MARGIN,
          top: 441,
          width: 88.437,
          height: 14.728,
          transform: 'rotate(180deg)',
        }}
      />
      <img
        src={platformArrowRight}
        alt=""
        style={{ position: 'absolute', left: Math.round(1920 / 3) + 275.33 - MARGIN, top: 502, width: 88.437, height: 14.728 }}
      />
    </div>
  </LightSlide>
);

const gitForgeBody =
  'Origin covers the entire outer loop: review, CI, merge,and code hosting, purpose-built for the volume, velocity, and reliability that agentic development demands.';

const FeatureCard = ({
  icon,
  title,
  body,
  padding = 35,
  titleSize = 'xxs' as keyof typeof deckMon,
}: {
  icon: string;
  title: string;
  body: string;
  padding?: number;
  titleSize?: keyof typeof deckMon;
}) => (
  <div
    style={{
      flex: 1,
      height: '100%',
      background: cardTint,
      borderRadius: 6,
      padding,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      minWidth: 0,
    }}
  >
    <img src={icon} alt="" style={{ width: 30, height: 30, display: 'block' }} />
    <div className="gtm-deck-text">
      <p style={{ ...deckType(titleSize), color: core.offBlack, margin: 0 }}>{title}</p>
      <p style={{ ...deckType(titleSize), color: core.midGray, margin: 0 }}>{body}</p>
    </div>
  </div>
);

const connectorItems = [
  { icon: connectorSlack, label: 'Slack Messaging Kit' },
  { icon: connectorFigma, label: 'Figma Visual Editor' },
  { icon: connectorNotion, label: 'Notion Workspace' },
  { icon: connectorNotion, label: 'Notion Workspace' },
  { icon: connectorLinear, label: 'Linear Agente Excellence' },
  { icon: connectorGithub, label: 'Github Actions Suite' },
  { icon: connectorSlack, label: 'Slack Messaging Kit' },
  { icon: connectorFigma, label: 'Figma Visual Editor' },
] as const;

const ConnectorColumn = () => (
  <div
    style={{
      background: core.pureWhite,
      border: '1.685px solid rgba(142, 142, 136, 0.05)',
      borderRadius: 13.848,
      padding: 33.707,
      width: 574,
      height: 1000,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    {connectorItems.map((item, index) => (
      <div key={`${item.label}-${index}`} style={{ display: 'flex', alignItems: 'center', gap: 22.293 }}>
        <div
          style={{
            width: 80.255,
            height: 80.255,
            background: cardTint,
            borderRadius: 12.983,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <img src={item.icon} alt="" style={{ width: 35.669, height: 35.669 }} />
        </div>
        <p className="gtm-deck-text" style={{ ...deckType('m'), color: core.offBlack, fontSize: 35.669, lineHeight: 1.5 }}>
          {item.label}
        </p>
      </div>
    ))}
  </div>
);

const orgDiagramLabel = {
  fontSize: 29.627,
  lineHeight: 1.2,
  letterSpacing: '-0.5925px',
  fontWeight: 400,
  fontFamily: 'var(--osd-font-display)',
  margin: 0,
} as const;

const OrgBox = ({
  label,
  width,
  dashed = false,
  children,
}: {
  label?: string;
  width?: number | string;
  dashed?: boolean;
  children?: ReactNode;
}) => (
  <div
    style={{
      background: dashed ? core.pureWhite : core.offWhite60,
      border: dashed ? `1.5px dashed ${core.midGray}` : undefined,
      borderRadius: 6,
      padding: 18.517,
      boxSizing: 'border-box',
      width,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12.344,
    }}
  >
    {label ? (
      <p className="gtm-deck-text" style={{ ...orgDiagramLabel, color: core.offBlack }}>
        {label}
      </p>
    ) : null}
    {children}
  </div>
);

const UserChip = ({ name }: { name: string }) => (
  <div
    style={{
      background: core.pureWhite,
      borderRadius: 6,
      height: 61.722,
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 0,
    }}
  >
    <p className="gtm-deck-text" style={{ ...orgDiagramLabel, color: core.offBlack, textAlign: 'center' }}>
      {name}
    </p>
  </div>
);

export const AiCurve4Slide: Page = () => (
  <AiCurveSlide
    curveSrc={aiCurve4}
    curveStyle={aiCurveBoxes.curve4}
    assistedOnly={assistedMilestone}
    milestones={[
      {
        lines: ['Agents (Sync)'],
        cardLeft: platformDiagramMilestones.agentsSync.cardLeft,
        cardTop: platformDiagramMilestones.agentsSync.cardTop,
        cardWidth: 291.423,
      },
      {
        lines: ['Cloud Agents', '(Async)'],
        cardLeft: platformDiagramMilestones.cloudAgents.cardLeft,
        cardTop: platformDiagramMilestones.cloudAgents.cardTop,
      },
      {
        lines: ['AI Software Factory'],
        cardLeft: platformDiagramMilestones.aiFactory.cardLeft,
        cardTop: platformDiagramMilestones.aiFactory.cardTop,
      },
    ]}
  />
);

export const AiCurve3Slide: Page = () => (
  <AiCurveSlide
    curveSrc={aiCurve3}
    curveStyle={aiCurveBoxes.curve3}
    assistedOnly={assistedMilestone}
    milestones={[
      {
        lines: ['Agents (Sync)'],
        cardLeft: platformDiagramMilestones.agentsSync.cardLeft,
        cardTop: platformDiagramMilestones.agentsSync.cardTop,
        cardWidth: 291.423,
      },
      {
        lines: ['Cloud Agents', '(Async)'],
        cardLeft: platformDiagramMilestones.cloudAgents.cardLeft,
        cardTop: platformDiagramMilestones.cloudAgents.cardTop,
      },
    ]}
  />
);

export const AiCurve2Slide: Page = () => (
  <AiCurveSlide
    curveSrc={aiCurve2}
    curveStyle={aiCurveBoxes.curve2}
    assistedOnly={assistedMilestone}
    milestones={[
      {
        lines: ['Agents (Sync)'],
        cardLeft: platformDiagramMilestones.agentsSync.cardLeft,
        cardTop: platformDiagramMilestones.agentsSync.cardTop,
        cardWidth: 291.423,
      },
    ]}
  />
);

export const AiCurve1Slide: Page = () => (
  <AiCurveSlide
    curveSrc={aiCurve1}
    curveStyle={aiCurveBoxes.curve1}
    assistedOnly={assistedMilestone}
    milestones={[]}
  />
);

export const PlatformOverviewSlide: Page = () => <PlatformDiagramSlide title="Platform overview" />;

export const ArchDiagramSlide: Page = () => <PlatformDiagramSlide title="Architecture Diagram" />;

export const JointLogoLockupSlide: Page = () => (
  <div style={{ ...lightSlide, background: core.offWhite }}>
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        gap: 40,
      }}
    >
      <img src={jointLogoCursor} alt="Cursor" style={{ height: 127.088, width: 'auto' }} />
      <img src={jointLogoDivider} alt="" style={{ height: 153.514, width: 2 }} />
      <p
        className="gtm-deck-text"
        style={{
          fontSize: 115.136,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: core.offBlack,
          margin: 0,
        }}
      >
        +LOGO+
      </p>
    </div>
  </div>
);

export const BriefNarrativeSlide: Page = () => (
  <LightSlide>
    <img
      src={openaiLogo}
      alt="OpenAI"
      style={{ position: 'absolute', left: Math.round(1920 * 0.0833) - 14 - MARGIN + MARGIN, top: 69, width: 211.674, height: 57 }}
    />
    <p
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 164,
        width: 1840,
        ...deckType('xxl'),
        color: core.offBlack,
      }}
    >
      Code Tours walk you through every change the way the author would explain it, leading with what matters and
      calling out points of risk.
    </p>
  </LightSlide>
);

export const ThreeProofPointsSlide: Page = () => (
  <LightSlide>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: 38, width: 1220, ...deckType('xl'), color: core.offBlack }}
    >
      OpenAI adopted Origin
      <br />
      to increase developer throughput
    </p>
    <div style={{ position: 'absolute', left: 1280, top: MARGIN, width: 600, height: 1000, borderRadius: 6, overflow: 'hidden' }}>
      <img src={proofPointsVisual} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'bottom' }} />
    </div>
    <div
      style={{
        position: 'absolute',
        left: 1280,
        top: MARGIN,
        width: 599,
        height: 1001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div style={{ transform: 'rotate(-90deg)' }}>
        <div style={{ width: 1001, height: 599, borderRadius: 8, overflow: 'hidden', background: '#3e2132', position: 'relative' }}>
          <img
            src={proofPointsRotated}
            alt=""
            style={{ position: 'absolute', left: '4.68%', top: '11.52%', width: '90.53%', height: '77.13%' }}
          />
        </div>
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 687,
        width: 1220,
        height: 353,
        display: 'flex',
        gap: 20,
      }}
    >
      {[
        { value: '70.5%', label: 'Of PRs merged are now\ncreated with Origin CLI' },
        { value: '33%', label: 'More PRS shipped\nper engineer' },
        { value: '$66M', label: 'Total engineer compensation cost optimization savings' },
      ].map((stat) => (
        <div
          key={stat.value}
          style={{
            flex: 1,
            background: cardTint,
            borderRadius: 6,
            padding: 40,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}
        >
          <p className="gtm-deck-text" style={{ ...deckType('xl'), color: core.offBlack }}>
            {stat.value}
          </p>
          <p className="gtm-deck-text" style={{ ...deckType('xxs'), color: core.midGray, whiteSpace: 'pre-line' }}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </LightSlide>
);

export const CustomerQuoteSlide: Page = () => (
  <LightSlide>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: MARGIN,
        width: 910,
        height: 1000,
        background: core.offWhite,
        borderRadius: 6,
        padding: 50,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div className="gtm-deck-text" style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
        <p style={{ ...deckType('l'), color: core.offBlack }}>
          &ldquo;It feels like we&apos;re in safe hands, with a team that&apos;s out ahead of the challenges we&apos;re
          thinking about too.&rdquo;
        </p>
        <p style={{ ...deckType('s'), color: bodyMuted }}>- Nathan Hunt, Developer Productivity</p>
      </div>
      <img src={openaiLogoDark} alt="OpenAI" style={{ height: 46, width: 'auto' }} />
    </div>
    <div
      style={{
        position: 'absolute',
        left: 970,
        top: MARGIN,
        width: 909,
        height: 1000,
        borderRadius: 6,
        overflow: 'hidden',
        background: '#2e2500',
      }}
    >
      <img
        src={customerQuoteVisual}
        alt=""
        style={{ position: 'absolute', height: '72.92%', width: '152.79%', left: '-26.4%', top: '13.58%' }}
      />
    </div>
  </LightSlide>
);

export const HeroMetricSlide: Page = () => (
  <LightSlide>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: MARGIN,
        width: 910,
        height: 1000,
        borderRadius: 6,
        overflow: 'hidden',
        background: secondary.olive,
      }}
    >
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: 'rotate(-90deg)', width: 1000, height: 1200 }}>
          <img src={heroMetricLines} alt="" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        left: 970,
        top: MARGIN,
        width: 910,
        height: 1000,
        background: core.offWhite,
        borderRadius: 6,
        padding: 70,
        boxSizing: 'border-box',
      }}
    >
      <div className="gtm-deck-text" style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
        <p style={{ ...deckType('super'), color: core.offBlack }}>$66M</p>
        <p style={{ ...deckType('m'), color: core.midGray, maxWidth: 678 }}>
          Total engineer compensation cost optimization savings
        </p>
      </div>
    </div>
  </LightSlide>
);

export const EnterpriseControlsSlide: Page = () => (
  <div style={{ ...lightSlide, background: secondary.lavender }}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('super'), color: core.offWhite }}>Enterprise</p>
      <p style={{ ...deckType('super'), color: topicMuted }}>Team Controls</p>
    </div>
    <div style={{ position: 'absolute', left: MARGIN, top: Math.round(1080 * 0.4074), right: MARGIN, bottom: Math.round(1080 * 0.037) }}>
      <img src={enterpriseControlsArt} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  </div>
);

export const HeadlineVariant1Slide: Page = () => (
  <LightSlide>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1840, ...deckType('xl'), color: core.offBlack }}
    >
      Automated PR review on every update.
      <br />
      Catches bugs, security issues, and code quality problems before a human ever looks. Learns over time and
      auto-fixes issues via Cursor Cloud Agent.
    </p>
  </LightSlide>
);

export const BodySlide: Page = () => (
  <LightSlide>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1268, ...deckType('xl'), color: core.offBlack }}
    >
      Enterprise controls
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 267,
        width: 1840,
        display: 'flex',
        gap: 20,
      }}
    >
      {[
        {
          title: 'Merge Queue',
          body: 'Automated PR review on every update. Catches bugs, security issues, and code quality problems before a human ever looks. Learns over time and auto-fixes issues via Cursor Cloud Agent.',
        },
        {
          title: 'Cursor Cloud Agent',
          body: 'Tell it what to change directly in the PR. It sees the full diff, reads CI failures, and picks up where any previous threads left off.',
        },
      ].map((col) => (
        <div
          key={col.title}
          style={{
            width: 910,
            height: 773,
            background: cardTint,
            borderRadius: 6,
            padding: 50,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
          }}
        >
          <img src={featureIcon} alt="" style={{ width: 30, height: 30 }} />
          <div className="gtm-deck-text">
            <p style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>{col.title}</p>
            <p style={{ ...deckType('s'), color: core.midGray, margin: 0 }}>{col.body}</p>
          </div>
        </div>
      ))}
    </div>
  </LightSlide>
);

const keyFeatures = [
  { title: 'Bugbot', body: 'Automated PR review on every update. Catches bugs, security issues, and code quality problems before a human ever looks. Learns over time and auto-fixes issues via Cursor Cloud Agent.' },
  { title: 'Cursor Cloud Agent', body: 'Tell it what to change directly in the PR. It sees the full diff, reads CI failures, and picks up where any previous threads left off.' },
  { title: 'Code Tours', body: 'An agent-guided walkthrough of every PR, leading with what matters and calling out points of risk.' },
  { title: 'Inbox Experience', body: 'One place for every PR that needs your attention. Customizable filters, keyboard shortcuts, and Slack notifications.' },
  { title: 'CLI', body: 'Break changes into a stack of small, focused PRs so everything that lands is reviewable, not one giant diff.' },
  { title: 'Merge Queue', body: 'Submit and move on. Batches and sequences PRs, merges atomically.\nNo waiting, no stale branches.' },
  { title: 'Bugbot', body: 'Automated PR review on every update. Catches bugs, security issues, and code quality problems before a human ever looks. Learns over time and auto-fixes issues via Cursor Cloud Agent.' },
  { title: 'Cursor Cloud Agent', body: 'Tell it what to change directly in the PR. It sees the full diff, reads CI failures, and picks up where any previous threads left off.' },
  { title: 'Code Tours', body: 'An agent-guided walkthrough of every PR, leading with what matters and calling out points of risk.' },
  { title: 'Inbox Experience', body: 'One place for every PR that needs your attention. Customizable filters, keyboard shortcuts, and Slack notifications.' },
] as const;

export const TenKeyFeaturesSlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: 38, ...deckType('xl'), color: core.offBlack }}>
      10 Key features
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 261,
        width: 1840,
        height: 779,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      {[keyFeatures.slice(0, 5), keyFeatures.slice(5)].map((row, rowIndex) => (
        <div key={rowIndex} style={{ flex: 1, display: 'flex', gap: 20, minHeight: 0 }}>
          {row.map((feature, colIndex) => (
            <FeatureCard key={`${rowIndex}-${colIndex}`} icon={featureIcon} title={feature.title} body={feature.body} />
          ))}
        </div>
      ))}
    </div>
  </LightSlide>
);

export const AdminDashboardSlide: Page = () => (
  <div style={{ ...lightSlide, background: core.offWhite }}>
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: 103.5,
        transform: 'translateX(-50%)',
        width: 1605,
        height: 953,
        borderRadius: '24px 24px 0 0',
        overflow: 'hidden',
      }}
    >
      <img
        src={adminDashboard}
        alt=""
        style={{ position: 'absolute', height: '187.62%', width: '121.94%', left: '-10.75%', top: '-32.96%' }}
      />
    </div>
  </div>
);

export const SectionDividerOrgsSlide: Page = () => (
  <div style={{ ...lightSlide, background: secondary.green }}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('super'), color: core.offWhite }}>Enterprise</p>
      <p style={{ ...deckType('super'), color: topicMuted }}>Cursor Organizations</p>
    </div>
    <div style={{ position: 'absolute', left: MARGIN, top: 440, width: 1840, height: 600 }}>
      <img src={sectionDividerOrgs} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  </div>
);

export const HeadlineVariant2Slide: Page = HeadlineVariant1Slide;

export const ThreeColumnOverviewSlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack }}>
      Overview
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: CARD_ROW_TOP,
        width: 1840,
        height: 515,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {[
        { icon: overviewIconBug, title: "Cursor's git forge\nfor the agentic era." },
        { icon: overviewIconCloud, title: "Cursor's git forge\nfor the agentic era." },
        { icon: overviewIconPerson, title: "Cursor's git forge\nfor the agentic era." },
      ].map((col) => (
        <div
          key={col.icon}
          style={{
            width: 601,
            height: '100%',
            background: cardTint,
            borderRadius: 6,
            padding: 40,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}
        >
          <img src={col.icon} alt="" style={{ width: 30, height: 30 }} />
          <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, margin: 0, whiteSpace: 'pre-line' }}>
            {col.title}
          </p>
          <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
            {gitForgeBody}
          </p>
        </div>
      ))}
    </div>
  </LightSlide>
);

export const VisualDiagramSlide: Page = () => (
  <LightSlide>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 869, ...deckType('m'), color: core.offBlack }}
    >
      Manage multiple Cursor teams, each with their own settings, from one place
    </p>
    <div style={{ position: 'absolute', left: 301, top: 216, width: 1318, height: 736 }}>
      <div style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)' }}>
        <OrgBox label="Organization" width={277.132} />
      </div>
      <div style={{ position: 'absolute', left: '50%', top: 61, transform: 'translateX(-50%)' }}>
        <img src={orgDiagramVline} alt="" style={{ height: 93.818, width: 11 }} />
      </div>
      <div style={{ position: 'absolute', left: 201, top: 108, width: 875.219 }}>
        <img src={orgDiagramHline} alt="" style={{ width: '100%', height: 46.909 }} />
      </div>
      <div style={{ position: 'absolute', left: '50%', top: 172, transform: 'translateX(-50%)', width: 1319 }}>
        <OrgBox label="Settings A" width="100%" dashed>
          <div style={{ display: 'flex', gap: 30.861 }}>
            {[
              { team: 'Mobile App Team', users: ['User 1', 'User 2'] },
              { team: 'Web App Team', users: ['User 3', 'User 4'] },
              { team: 'Sandbox Team', users: ['User 5', 'User 6'] },
            ].map((group) => (
              <OrgBox key={group.team} width={406.748}>
                <p className="gtm-deck-text" style={{ ...orgDiagramLabel, color: core.offBlack, textAlign: 'center' }}>
                  {group.team}
                </p>
                <div style={{ display: 'flex', gap: 12.344, width: '100%' }}>
                  {group.users.map((user) => (
                    <UserChip key={user} name={user} />
                  ))}
                </div>
              </OrgBox>
            ))}
          </div>
        </OrgBox>
      </div>
      {[138, 59, -58, -138].map((offset, index) => (
        <div
          key={offset}
          style={{
            position: 'absolute',
            left: `calc(50% + ${offset}px)`,
            top: 416,
            transform: 'translateX(-50%)',
          }}
        >
          <img src={orgDiagramBranch} alt="" style={{ height: 77.153, width: 11 }} />
        </div>
      ))}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 510,
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 37.033,
        }}
      >
        {[
          { settings: 'Settings B', group: 'Design Group', users: ['User 2', 'User 3'] },
          { settings: 'Settings C', group: 'Product Group', users: ['User 4', 'User 5'] },
        ].map((col) => (
          <OrgBox key={col.settings} label={col.settings} width={443.781} dashed>
            <OrgBox width="100%">
              <p className="gtm-deck-text" style={{ ...orgDiagramLabel, color: core.offBlack, textAlign: 'center' }}>
                {col.group}
              </p>
              <div style={{ display: 'flex', gap: 12.344, width: '100%' }}>
                {col.users.map((user) => (
                  <UserChip key={user} name={user} />
                ))}
              </div>
            </OrgBox>
          </OrgBox>
        ))}
      </div>
    </div>
  </LightSlide>
);

export const SurfacesSlide: Page = () => {
  const tiles = [
    { icon: surfaceDesktop, label: 'Desktop', border: secondary.cursorOrange },
    { icon: surfaceMobile, label: 'Web & Mobile', border: '#2c9f28' },
    { icon: surfaceOther, label: 'Other Surfaces', border: secondary.blue },
    { icon: surfaceCli, label: 'CLI', border: secondary.olive },
  ] as const;

  return (
    <LightSlide>
      <div
        style={{
          position: 'absolute',
          left: MARGIN,
          top: MARGIN,
          width: 1840,
          height: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {[tiles.slice(0, 2), tiles.slice(2)].map((row, rowIndex) => (
          <div key={rowIndex} style={{ flex: 1, display: 'flex', gap: 23, minHeight: 0 }}>
            {row.map((tile) => (
              <div
                key={tile.label}
                style={{
                  flex: 1,
                  background: cardTint,
                  border: `2px dashed ${tile.border}`,
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 16,
                }}
              >
                <img src={tile.icon} alt="" style={{ width: 46, height: 46 }} />
                <p className="gtm-deck-text" style={{ ...deckType('m'), color: core.offBlack }}>
                  {tile.label}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </LightSlide>
  );
};

export const ConnectorsSlide: Page = () => (
  <div style={{ ...lightSlide, background: core.offWhite }}>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 573,
        background: core.pureWhite,
        borderRadius: 16.395,
        padding: '17.844px',
        boxSizing: 'border-box',
      }}
    >
      <p className="gtm-deck-text" style={{ ...deckType('m'), color: secondary.cursorOrange, fontSize: 34 }}>
        /add-plugin
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
        <p className="gtm-deck-text" style={{ fontSize: 23.565, color: '#cccac4' }}>
          Composer 2.5 Fast
        </p>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 50,
            background: core.offBlack,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: core.pureWhite,
            fontSize: 18,
          }}
        >
          ↑
        </div>
      </div>
    </div>
    <div style={{ position: 'absolute', left: Math.round(1920 / 3) + 66, top: MARGIN }}>
      <ConnectorColumn />
    </div>
    <div style={{ position: 'absolute', left: Math.round((1920 * 2) / 3) + 26, top: MARGIN }}>
      <ConnectorColumn />
    </div>
  </div>
);

const extensibilityCopy = {
  title: 'Maintain quality at scale.',
  body: 'Enforce standards across every codebase without slowing teams down.',
} as const;

export const ExtensibilitySlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('l'), color: core.offBlack }}>
      Cursor Extensibility
    </p>
    <div style={{ position: 'absolute', left: MARGIN, top: 196, display: 'flex', gap: 20, width: 1840 }}>
      <div
        style={{
          width: 600,
          height: 547,
          background: core.offWhite,
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
          boxSizing: 'border-box',
        }}
      >
        <p
          style={{
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 23.422,
            lineHeight: 1.1,
            margin: 0,
            textAlign: 'center',
          }}
        >
          <span style={{ color: secondary.blue }}>import</span>
          <span style={{ color: core.offBlack }}>{' { '}</span>
          <span style={{ color: '#2c9f28' }}>Agent</span>
          <span style={{ color: core.offBlack }}>{' }'}</span>{' '}
          <span style={{ color: secondary.blue }}>from</span>{' '}
          <span style={{ color: secondary.lavender }}>&quot;@cursor/sdk&quot;</span>
        </p>
      </div>
      <div
        style={{
          width: 600,
          height: 547,
          background: '#f2f1ed',
          borderRadius: 6,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img src={extensibilityMarketplace} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div
        style={{
          width: 600,
          height: 547,
          background: core.offWhite,
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 392,
            background: 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(0,0,0,0.03)',
            borderRadius: 14,
            boxShadow: '0 17.786px 47.43px 5.929px rgba(0,0,0,0.05)',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '10.816px 16.225px' }}>
            <p style={{ margin: 0, color: secondary.cursorOrange, fontSize: 20.801 }}>/create-subagent </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10.816 }}>
            <p style={{ margin: 0, color: core.offBlack, fontSize: 16.641, opacity: 0.5 }}>Composer 2</p>
            <div
              style={{
                width: 27,
                height: 27,
                borderRadius: 31,
                background: core.offBlack,
                color: core.pureWhite,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
              }}
            >
              ↑
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 763,
        width: 1840,
        display: 'flex',
        gap: 20,
      }}
    >
      {(['SDK', 'Plugins', 'Skills'] as const).map((label) => (
        <div
          key={label}
          style={{
            flex: 1,
            height: 277,
            background: cardTint,
            borderRadius: 8,
            padding: 40,
            boxSizing: 'border-box',
          }}
        >
          <div className="gtm-deck-text" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontSize: 24, lineHeight: 1.3, color: core.offBlack, margin: 0 }}>{label}</p>
            <p style={{ fontSize: 24, lineHeight: 1.3, color: core.midGray, margin: 0 }}>{extensibilityCopy.title}</p>
            <p style={{ fontSize: 24, lineHeight: 1.3, color: core.midGray, margin: 0 }}>{extensibilityCopy.body}</p>
          </div>
        </div>
      ))}
    </div>
  </LightSlide>
);

const adoptionSteps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'] as const;
const adoptionMarkerLeft = [255, Math.round(1920 / 3) + 80, 960 + 225, Math.round((1920 * 5) / 6) + 50] as const;
const adoptionCardLeft = [40, Math.round(1920 / 6) + 185, 970, Math.round((1920 * 2) / 3) + 155] as const;

export const FourStepPlanSlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack }}>
      4 Step Adoption Plan
    </p>
    <div style={{ position: 'absolute', left: MARGIN, top: 334, width: 1840, height: 2 }}>
      <img src={adoptionPlanRule} alt="" style={{ width: '100%', height: '100%' }} />
    </div>
    {adoptionMarkerLeft.map((left) => (
      <div key={left} style={{ position: 'absolute', left, top: 334, width: 15, height: 15, background: secondary.green }} />
    ))}
    {adoptionSteps.map((step, index) => (
      <div
        key={step}
        style={{
          position: 'absolute',
          left: adoptionCardLeft[index],
          top: 374,
          width: 445,
          height: 515,
          background: cardTint,
          borderRadius: 6,
          padding: 40,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        <img src={featureIcon} alt="" style={{ width: 30, height: 30 }} />
        <div className="gtm-deck-text">
          <p style={{ ...deckType('xs'), color: core.offBlack, margin: 0 }}>{step}</p>
          <p style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>{gitForgeBody}</p>
        </div>
      </div>
    ))}
  </LightSlide>
);

export const CodeReviewSlide: Page = () => (
  <LightSlide>
    <div
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: MARGIN,
        top: MARGIN,
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        gap: 60,
      }}
    >
      <div>
        <p style={{ ...deckType('l'), color: core.offBlack, margin: 0 }}>For Code Reviewers</p>
        <p style={{ ...deckType('l'), color: core.midGray, margin: 0 }}>Understand every decision the agent made</p>
      </div>
      <div style={{ ...deckType('xs'), color: core.midGray }}>
        <p style={{ margin: 0 }}>
          Chat with the Cursor Cloud Agent that wrote the code to understand the intent behind every decision.
        </p>
        <p style={{ margin: 0 }}>Or spin up a fresh agent for an unbiased second opinion.</p>
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        left: UI_FEATURE_X + 125,
        top: MARGIN,
        width: 1719,
        height: 1000,
        background: core.offWhite,
        borderRadius: 6,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 91,
          top: 62,
          width: 1535,
          height: 874,
          background: '#f7f7f7',
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        <img
          src={codeReviewScreenshot}
          alt=""
          style={{ position: 'absolute', width: '100%', height: '180.66%', top: '-0.1%' }}
        />
      </div>
    </div>
  </LightSlide>
);

export const section4161Slides = [
  AiCurve4Slide,
  AiCurve3Slide,
  AiCurve2Slide,
  AiCurve1Slide,
  PlatformOverviewSlide,
  ArchDiagramSlide,
  JointLogoLockupSlide,
  BriefNarrativeSlide,
  ThreeProofPointsSlide,
  CustomerQuoteSlide,
  HeroMetricSlide,
  EnterpriseControlsSlide,
  HeadlineVariant1Slide,
  BodySlide,
  TenKeyFeaturesSlide,
  AdminDashboardSlide,
  SectionDividerOrgsSlide,
  HeadlineVariant2Slide,
  ThreeColumnOverviewSlide,
  VisualDiagramSlide,
  SurfacesSlide,
  ConnectorsSlide,
  ExtensibilitySlide,
  FourStepPlanSlide,
  CodeReviewSlide,
] satisfies Page[];

export default section4161Slides;
