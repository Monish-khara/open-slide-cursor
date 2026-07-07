import type { Page } from '@open-slide/core';
import type { CSSProperties, ReactNode } from 'react';

import agentMainstreamChart from './assets/section4208/agent-mainstream-chart.png';
import logoBitbucket from './assets/section4208/logos/bitbucket.svg';
import logoCircleci from './assets/section4208/logos/circleci.svg';
import logoDocker from './assets/section4208/logos/docker.svg';
import logoFigma from './assets/section4208/logos/figma.svg';
import logoGithubActions from './assets/section4208/logos/github-actions.svg';
import logoGithubCat from './assets/section4208/logos/github-cat.svg';
import logoGithubMark from './assets/section4208/logos/github-mark.svg';
import logoGithubMaintain from './assets/section4208/logos/github-maintain.svg';
import logoGithubReview from './assets/section4208/logos/github-review.svg';
import logoGitlab from './assets/section4208/logos/gitlab.svg';
import logoJfrog from './assets/section4208/logos/jfrog.svg';
import logoLinear from './assets/section4208/logos/linear.svg';
import logoNotion from './assets/section4208/logos/notion.svg';
import logoNotionMark from './assets/section4208/logos/notion-mark.svg';
import logoReplit from './assets/section4208/logos/replit.svg';
import logoSnyk from './assets/section4208/logos/snyk.svg';
import logoVscode from './assets/section4208/logos/vscode.svg';
import agenticDividerArt from './assets/section4208/agentic-divider-art.svg';
import cardRule from './assets/section4208/card-rule.svg';
import cloudAgentsSlide from './assets/section4208/cloud-agents-slide.png';
import focusRule from './assets/section4208/focus-rule.svg';
import platformDividerArt from './assets/section4208/platform-divider-art.svg';
import prodAi from './assets/section4208/prod-ai.png';
import prodBreak from './assets/section4208/prod-break.png';
import sdlcCursor from './assets/section4208/sdlc-cursor.png';
import sdlcFlowHandwritten from './assets/section4208/sdlc-flow-handwritten.png';
import sdlcFull from './assets/section4208/sdlc-full.png';
import sdlcHalf from './assets/section4208/sdlc-half.png';
import sdlcTimelineRule from './assets/section4208/sdlc-timeline-rule.svg';
import sdlcTwoHalf from './assets/section4208/sdlc-two-half.png';
import taaIconAgents from './assets/section4208/taa-icon-agents.svg';
import taaIconAsync from './assets/section4208/taa-icon-async.svg';
import taaIconTab from './assets/section4208/taa-icon-tab.svg';
import taaMarkerLine from './assets/section4208/taa-marker-line.svg';

const core = {
  pureWhite: '#ffffff',
  offWhite: '#edece8',
  offWhite60: '#f4f3ef',
  midGray: '#8e8e8b',
  darkGray: '#3b3b3a',
  offBlack: '#121211',
  lightGray: '#cccac4',
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
const cardTint = 'rgba(237, 235, 228, 0.6)';
const topicMuted = 'rgba(237, 236, 232, 0.5)';
const bodyMuted = 'rgba(18, 18, 17, 0.5)';

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

/** Figma 4161:2580–2584 — blue markers on SDLC timeline */
const SDLC_MARKER_LEFT = [209, Math.round(1920 / 6) + 261, 960 - 7, Math.round((1920 * 2) / 3) + 45, Math.round((1920 * 5) / 6) + 97] as const;

const BrandLogo = ({ src, alt, height }: { src: string; alt: string; height: number }) => (
  <img src={src} alt={alt} style={{ height, width: 'auto', display: 'block', flexShrink: 0, objectFit: 'contain' }} />
);

const FeatureList = ({ items, ruleSrc }: { items: string[]; ruleSrc: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
    {items.map((item, index) => (
      <div key={item} style={{ width: '100%' }}>
        <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
          {item}
        </p>
        {index < items.length - 1 ? (
          <img src={ruleSrc} alt="" style={{ display: 'block', width: '100%', height: 1, marginTop: 12 }} />
        ) : null}
      </div>
    ))}
  </div>
);

const SdlcColumn = ({
  title,
  items,
  logos,
}: {
  title: string;
  items: string[];
  logos: Array<{ src: string; alt: string; height: number }>;
}) => (
  <div
    style={{
      flex: 1,
      height: 656,
      background: cardTint,
      borderRadius: 6,
      padding: 35,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minWidth: 0,
    }}
  >
    <div style={{ width: '100%' }}>
      <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, margin: 0, height: 130 }}>
        {title}
      </p>
      <FeatureList items={items} ruleSrc={cardRule} />
    </div>
    <div style={{ display: 'flex', gap: 15, alignItems: 'center', flexWrap: 'wrap' }}>
      {logos.map((logo) => (
        <BrandLogo key={logo.src} src={logo.src} alt={logo.alt} height={logo.height} />
      ))}
    </div>
  </div>
);

const DiagramSlide = ({ src }: { src: string }) => (
  <LightSlide>
    <img src={src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
  </LightSlide>
);

export const OwnSdlcSlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1723, ...deckType('l'), color: core.offBlack }}>
      Owning the AI-native SDLC, from intent to production.{' '}
      <span style={{ color: core.midGray }}>
        Horizontal expansion across the SDLC is one of the biggest opportunities in software.
      </span>
    </p>
    <div style={{ position: 'absolute', left: MARGIN, top: 363, width: 1840, height: 2 }}>
      <img src={sdlcTimelineRule} alt="" style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
    {SDLC_MARKER_LEFT.map((left) => (
      <div key={left} style={{ position: 'absolute', left, top: 355, width: 15, height: 15, background: secondary.blue }} />
    ))}
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 384,
        width: 1840,
        display: 'flex',
        gap: 20,
        alignItems: 'stretch',
      }}
    >
      <SdlcColumn
        title="Plan, Design"
        items={['Plan Mode', 'Browser', 'Design Editor', 'MCPs & Connectors']}
        logos={[
          { src: logoFigma, alt: 'Figma', height: 30 },
          { src: logoLinear, alt: 'Linear', height: 30 },
          { src: logoNotion, alt: 'Notion', height: 30 },
          { src: logoNotionMark, alt: 'Notion', height: 30 },
          { src: logoGithubMark, alt: 'GitHub', height: 30 },
          { src: logoGithubCat, alt: 'GitHub', height: 30 },
        ]}
      />
      <SdlcColumn
        title="Understand, Build"
        items={['Agents', 'Cloud Agents', 'MCPs & Connectors', 'Tab', 'Ask Mode', 'Codebase Indexing', 'Instant Grep']}
        logos={[
          { src: logoVscode, alt: 'VS Code', height: 30 },
          { src: logoReplit, alt: 'Replit', height: 30 },
        ]}
      />
      <SdlcColumn
        title="Review, Test"
        items={['Cursor Bugbot', 'Cloud Agents', 'Graphite Diamond', 'Debug Mode', 'Stacked PRs', 'MCPs & Connectors']}
        logos={[
          { src: logoGithubReview, alt: 'GitHub', height: 30 },
          { src: logoGitlab, alt: 'GitLab', height: 30 },
          { src: logoBitbucket, alt: 'Bitbucket', height: 30 },
        ]}
      />
      <SdlcColumn
        title="Deploy, CI/CD"
        items={['Agents', 'Cloud Agents', 'MCPs & Connectors']}
        logos={[
          { src: logoCircleci, alt: 'CircleCI', height: 30 },
          { src: logoGithubActions, alt: 'GitHub Actions', height: 30 },
          { src: logoDocker, alt: 'Docker', height: 30 },
        ]}
      />
      <SdlcColumn
        title="Deploy, CI/CD"
        items={['Agents', 'Cloud Agents', 'MCPs & Connectors']}
        logos={[
          { src: logoGithubMaintain, alt: 'GitHub', height: 30 },
          { src: logoJfrog, alt: 'JFrog', height: 30 },
          { src: logoSnyk, alt: 'Snyk', height: 22 },
        ]}
      />
    </div>
  </LightSlide>
);

const FocusColumn = ({ title, items }: { title: ReactNode; items: string[] }) => (
  <div
    style={{
      flex: 1,
      height: 656,
      background: cardTint,
      borderRadius: 6,
      padding: 40,
      boxSizing: 'border-box',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
      <div className="gtm-deck-text" style={{ ...deckType('m'), color: core.offBlack }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {items.map((item, index) => (
          <div key={item}>
            <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.midGray, margin: 0 }}>
              {item}
            </p>
            {index < items.length - 1 ? (
              <img src={focusRule} alt="" style={{ display: 'block', width: '100%', height: 1, marginTop: 20 }} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const EngFocusShiftSlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 934, ...deckType('xl'), color: core.offBlack }}>
      Where Engineering Focus Shifts
    </p>
    <div style={{ position: 'absolute', left: MARGIN, top: 384, width: 1840, display: 'flex', gap: 20 }}>
      <FocusColumn
        title={
          <>
            <p style={{ margin: 0 }}>Accelerated by AI</p>
            <p style={{ margin: 0 }}>(2–5x gains)</p>
          </>
        }
        items={['Onboarding New Code', 'Code Refactors', 'Writing Tests']}
      />
      <FocusColumn
        title={
          <>
            <p style={{ margin: 0 }}>Where Engineers</p>
            <p style={{ margin: 0 }}>Spend More Time</p>
          </>
        }
        items={['Planning & Design', 'Code Reviews', 'Security & CI/CD', 'Maintainability & Extensibility']}
      />
    </div>
  </LightSlide>
);

export const AgenticEraSlide: Page = () => (
  <div style={{ ...lightSlide, background: core.offBlack }}>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1840, ...deckType('xxl'), color: core.offWhite }}>
      The entire collaboration and infrastructure layer around code needs to be{' '}
      <span style={{ color: core.midGray }}>rebuilt for the agentic era.</span>
    </p>
  </div>
);

export const EndToEndSlide: Page = () => (
  <div style={{ ...lightSlide, background: core.offBlack }}>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1473, ...deckType('super'), color: core.offWhite }}>
      One end-to-end platform to create, review, and merge code.
    </p>
  </div>
);

export const AgenticDevDividerSlide: Page = () => (
  <div style={{ ...lightSlide, background: secondary.blue }}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1840 }}>
      <p style={{ ...deckType('super'), color: core.offWhite, margin: 0 }}>Agentic Development</p>
      <p style={{ ...deckType('super'), color: topicMuted, margin: 0 }}>Tab → Chat → Agent</p>
    </div>
    <div style={{ position: 'absolute', left: MARGIN, top: 440, width: 1840, height: 600 }}>
      <img src={agenticDividerArt} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
    </div>
  </div>
);

export const AgentMainstreamSlide: Page = () => <DiagramSlide src={agentMainstreamChart} />;

export const TaaSlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 483, ...deckType('s'), color: core.midGray }}>
      The future of software development
    </p>
    <p
      className="gtm-deck-text"
      style={{
        position: 'absolute',
        left: 1275,
        top: 207,
        ...deckType('s'),
        color: secondary.cursorOrange,
        margin: 0,
        whiteSpace: 'nowrap',
      }}
    >
      We are here
    </p>
    <img
      src={taaMarkerLine}
      alt=""
      style={{ position: 'absolute', left: 1275, top: 254, width: 1, height: 82, display: 'block' }}
    />
    <div style={{ position: 'absolute', left: MARGIN, top: 323, width: 1840 }}>
      <div style={{ display: 'flex', gap: 50, marginBottom: 21 }}>
        {['1.  Tab', '2. Agents', '3. Async'].map((label) => (
          <p key={label} className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, flex: 1, margin: 0 }}>
            {label}
          </p>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 50, height: 670 }}>
        {[
          { icon: taaIconTab, border: secondary.blue },
          { icon: taaIconAgents, border: secondary.cursorOrange },
          { icon: taaIconAsync, border: secondary.cursorOrange },
        ].map(({ icon, border }) => (
          <div
            key={icon}
            style={{
              flex: 1,
              height: '100%',
              background: 'rgba(237, 236, 232, 0.6)',
              border: `3px dashed ${border}`,
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={icon} alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  </LightSlide>
);

export const CloudAgentsSlide: Page = () => <DiagramSlide src={cloudAgentsSlide} />;

export const PlatformSdlcDividerSlide: Page = () => (
  <div style={{ ...lightSlide, background: secondary.cursorOrange }}>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('super'), color: core.offWhite, margin: 0, whiteSpace: 'nowrap' }}>
      The AI-native SDLC
    </p>
    <div style={{ position: 'absolute', left: MARGIN, top: 440, width: 1840, height: 600 }}>
      <img src={platformDividerArt} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
    </div>
  </div>
);

export const SdlcFlowHandwrittenSlide: Page = () => <DiagramSlide src={sdlcFlowHandwritten} />;
export const SdlcTwoHalfSlide: Page = () => <DiagramSlide src={sdlcTwoHalf} />;
export const SdlcFullSlide: Page = () => <DiagramSlide src={sdlcFull} />;
export const SdlcCursorSlide: Page = () => <DiagramSlide src={sdlcCursor} />;
export const SdlcHalfSlide: Page = () => <DiagramSlide src={sdlcHalf} />;
export const ProdAiSlide: Page = () => <DiagramSlide src={prodAi} />;
export const ProdBreakSlide: Page = () => <DiagramSlide src={prodBreak} />;

export const section4208Slides = [
  OwnSdlcSlide,
  EngFocusShiftSlide,
  AgenticEraSlide,
  EndToEndSlide,
  AgenticDevDividerSlide,
  AgentMainstreamSlide,
  TaaSlide,
  CloudAgentsSlide,
  PlatformSdlcDividerSlide,
  SdlcFlowHandwrittenSlide,
  SdlcTwoHalfSlide,
  SdlcFullSlide,
  SdlcCursorSlide,
  SdlcHalfSlide,
  ProdAiSlide,
  ProdBreakSlide,
] satisfies Page[];

export default section4208Slides;
