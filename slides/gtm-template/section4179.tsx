import type { Page } from '@open-slide/core';
import type { CSSProperties, ReactNode } from 'react';

import cursorLockup from './assets/cursor-lockup.svg';
import cursorWordmarkBlack from './assets/cursor-wordmark-black.svg';
import checkIcon from './assets/section4179/check-icon.svg';
import composerBenchmarkChart from './assets/section4179/composer-benchmark-chart.png';
import cursorCubeIcon from './assets/section4179/cursor-cube-icon.svg';
import dividerHarnessCenter from './assets/section4179/divider-harness-center.svg';
import dividerHarnessLeft from './assets/section4179/divider-harness-left.svg';
import dividerHarnessRight from './assets/section4179/divider-harness-right.svg';
import externalLinkIcon from './assets/section4179/external-link-icon.svg';
import harness16Ui from './assets/section4179/harness-16-ui.png';
import harness17Benchmark from './assets/section4179/harness-17-benchmark.png';
import harness18Youtube from './assets/section4179/harness-18-youtube.png';
import harness21ScreenshotInset from './assets/section4179/harness-21-screenshot-inset.png';
import harness21ScreenshotMain from './assets/section4179/harness-21-screenshot-main.png';
import harnessIconApps from './assets/section4179/harness-icon-apps.svg';
import harnessIconHarness from './assets/section4179/harness-icon-harness.svg';
import harnessIconModel from './assets/section4179/harness-icon-model.svg';
import appIconAnthropic from './assets/section4179/app-icon-anthropic.svg';
import appIconCursor from './assets/section4179/app-icon-cursor.svg';
import appIconOpenai from './assets/section4179/app-icon-openai.svg';
import modelIconAnthropic from './assets/section4179/model-icon-anthropic.svg';
import modelIconDeepseek from './assets/section4179/model-icon-deepseek.svg';
import modelIconGoogle from './assets/section4179/model-icon-google.svg';
import modelIconOpenai from './assets/section4179/model-icon-openai.svg';
import rulesSkillsRules from './assets/section4179/rules-skills-rules.png';
import rulesSkillsSkills from './assets/section4179/rules-skills-skills.png';
import rulesSkillsSubagents from './assets/section4179/rules-skills-subagents.png';
import tableRule from './assets/section4179/table-rule.svg';

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

const tableType = {
  fontSize: 20,
  lineHeight: 1.2,
  letterSpacing: 0,
  fontWeight: 400,
  fontFamily: 'var(--osd-font-display)',
  margin: 0,
} as const;

const MARGIN = 40;
const LOCKUP_H = 50;
const bodyMuted = 'rgba(18, 18, 17, 0.5)';

/** Brand marks — set height only; width derives from SVG aspect ratio. */
const BrandLogo = ({
  src,
  alt,
  height,
  style,
}: {
  src: string;
  alt: string;
  height: number;
  style?: CSSProperties;
}) => (
  <img
    src={src}
    alt={alt}
    style={{
      height,
      width: 'auto',
      display: 'block',
      flexShrink: 0,
      ...style,
    }}
  />
);
const topicMuted = 'rgba(237, 236, 232, 0.5)';
const cardTint = 'rgba(237, 235, 228, 0.6)';
const tableTint = 'rgba(237, 235, 228, 0.2)';
const UI_FEATURE_X = Math.round(1920 / 3);

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

type ModelRow = {
  icon: string;
  name: string;
  resolved: string;
  avgCost: string;
  org: string;
  date: string;
  agent: string;
};

const modelRows: ModelRow[] = [
  { icon: modelIconAnthropic, name: 'Claude 4.5 Opus (high reasoning)', resolved: '76.80', avgCost: '$0.75', org: 'Anthropic', date: '2026-02-17', agent: '2.0.0' },
  { icon: modelIconGoogle, name: 'Gemini 3 Flash (high reasoning)', resolved: '75.80', avgCost: '$0.36', org: 'Google', date: '2026-02-17', agent: '2.0.0' },
  { icon: modelIconOpenai, name: 'GPT-5-2 Codex', resolved: '72.80', avgCost: '$0.45', org: 'OpenAI', date: '2026-02-19', agent: '2.0.0' },
  { icon: modelIconDeepseek, name: 'DeepSeek V3.2 (high reasoning)', resolved: '70.00', avgCost: '$0.45', org: 'DeepSeek', date: '2026-02-17', agent: '2.0.0' },
  { icon: modelIconAnthropic, name: 'Claude 4.5 Haiku (high reasoning)', resolved: '66.60', avgCost: '$0.33', org: 'Anthropic', date: '2026-02-17', agent: '2.0.0' },
  { icon: modelIconAnthropic, name: 'Claude 4.5 Opus (high reasoning)', resolved: '76.80', avgCost: '$0.75', org: 'Anthropic', date: '2026-02-17', agent: '2.0.0' },
  { icon: modelIconGoogle, name: 'Gemini 3 Flash (high reasoning)', resolved: '75.80', avgCost: '$0.36', org: 'Google', date: '2026-02-17', agent: '2.0.0' },
  { icon: modelIconOpenai, name: 'GPT-5-2 Codex', resolved: '72.80', avgCost: '$0.45', org: 'OpenAI', date: '2026-02-19', agent: '2.0.0' },
  { icon: modelIconDeepseek, name: 'DeepSeek V3.2 (high reasoning)', resolved: '70.00', avgCost: '$0.45', org: 'DeepSeek', date: '2026-02-17', agent: '2.0.0' },
  { icon: modelIconAnthropic, name: 'Claude 4.5 Haiku (high reasoning)', resolved: '66.60', avgCost: '$0.33', org: 'Anthropic', date: '2026-02-17', agent: '2.0.0' },
  { icon: modelIconGoogle, name: 'Gemini 3 Flash (high reasoning)', resolved: '75.80', avgCost: '$0.36', org: 'Google', date: '2026-02-17', agent: '2.0.0' },
];

const TableRow = ({ row, showAllColumns = true }: { row: ModelRow; showAllColumns?: boolean }) => (
  <>
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', minWidth: 410 }}>
      <img src={row.icon} alt="" style={{ width: 20, height: 20, flexShrink: 0, objectFit: 'contain' }} />
      <p className="gtm-deck-text" style={{ ...tableType, color: core.midGray, width: 374 }}>
        {row.name}
      </p>
    </div>
    {showAllColumns ? (
      <div style={{ display: 'flex', gap: 156, alignItems: 'center' }}>
        {[row.resolved, row.avgCost, row.org, row.date, row.agent].map((cell) => (
          <p key={cell} className="gtm-deck-text" style={{ ...tableType, color: core.midGray, width: 154 }}>
            {cell}
          </p>
        ))}
      </div>
    ) : null}
  </>
);

const FullWidthModelTable = ({ rows }: { rows: ModelRow[] }) => (
  <div style={{ position: 'absolute', left: MARGIN, top: 330, width: 1840 }}>
    <div style={{ display: 'flex', height: 69 }}>
      <div
        style={{
          width: 466,
          background: core.offWhite,
          borderRadius: '10px 0 0 0',
          padding: 20,
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <p className="gtm-deck-text" style={{ ...tableType, color: core.offBlack }}>
          Model
        </p>
      </div>
      <div
        style={{
          flex: 1,
          background: core.offWhite,
          borderRadius: '0 10px 0 0',
          padding: '20px 0 20px 20px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          gap: 156,
        }}
      >
        {['% Resolved', 'Avg. $', 'Org', 'Date', 'Agent'].map((label) => (
          <p
            key={label}
            className="gtm-deck-text"
            style={{ ...tableType, color: core.offBlack, width: 154, whiteSpace: 'nowrap' }}
          >
            {label}
          </p>
        ))}
      </div>
    </div>
    <div style={{ position: 'relative', background: tableTint, minHeight: 631, padding: '20px 20px 0' }}>
      {rows.map((row, index) => (
        <div key={`${row.name}-${index}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 36, padding: '10px 0' }}>
            <TableRow row={row} />
          </div>
          {index < rows.length - 1 ? <img src={tableRule} alt="" style={{ width: '100%', height: 1, display: 'block' }} /> : null}
        </div>
      ))}
    </div>
  </div>
);

const ModelPickerPanel = () => {
  const models = [
    { label: 'Composer 1.5', selected: false },
    { label: 'GPT-5.2', selected: true },
    { label: 'Opus 4.6', selected: false },
    { label: 'Gemini Pro 3', selected: false },
    { label: 'Grok Code', selected: false },
  ] as const;

  return (
    <div
      style={{
        position: 'absolute',
        left: UI_FEATURE_X + 20,
        top: MARGIN,
        width: 1220,
        height: 1000,
        background: core.offWhite,
        borderRadius: 6,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 532,
          background: '#fcfcfb',
          borderRadius: 28,
          padding: 15,
          boxSizing: 'border-box',
        }}
      >
        {models.map((model) => (
          <div
            key={model.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '11px 15px',
              borderRadius: model.selected ? 18 : 4,
              background: model.selected ? 'rgba(0,0,0,0.05)' : 'transparent',
              border: model.selected ? '2px solid rgba(0,0,0,0.08)' : '2px solid transparent',
              marginBottom: 4,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 22,
                lineHeight: 1.2,
                color: model.selected ? core.offBlack : bodyMuted,
                fontFamily: 'var(--osd-font-display)',
              }}
            >
              {model.label}
            </p>
            {model.selected ? (
              <span style={{ fontSize: 18, color: core.offBlack }}>✓</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductChip = ({ label }: { label: string }) => (
  <div
    style={{
      background: cardTint,
      borderRadius: 6,
      padding: '10px 20px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <p className="gtm-deck-text" style={{ ...deckType('xxs'), color: core.offBlack, whiteSpace: 'nowrap' }}>
      {label}
    </p>
  </div>
);

const ApplicationCards = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
    {[
      { icon: appIconCursor, rows: [['Cursor Desktop', 'Cursor CLI'], ['Cloud Agents', 'Automations']] },
      { icon: appIconOpenai, rows: [['Codex CLI', 'Codex Desktop App'], ['Codex Plugins']] },
      { icon: appIconAnthropic, rows: [['Claude Code CLI'], ['Cowork', 'Plugins']] },
    ].map((card) => (
      <div
        key={card.icon}
        style={{
          background: core.pureWhite,
          borderRadius: 6,
          padding: '20px 25px',
          display: 'flex',
          gap: 30,
          alignItems: 'center',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <BrandLogo src={card.icon} alt="" height={66} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {card.rows.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {row.map((label) => (
                <ProductChip key={label} label={label} />
              ))}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const HarnessColumnBox = ({
  label,
  borderColor,
  children,
  width = 600,
  padded = false,
}: {
  label?: string;
  borderColor: string;
  children: ReactNode;
  width?: number;
  padded?: boolean;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 21, width, flexShrink: 0 }}>
    {label ? (
      <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack }}>
        {label}
      </p>
    ) : null}
    <div
      style={{
        background: cardTint,
        border: `3px dashed ${borderColor}`,
        borderRadius: 6,
        height: 670,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: padded ? 40 : 10,
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      {children}
    </div>
  </div>
);

const FactorySection = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) => (
  <div
    style={{
      flex: 1,
      background: '#f7f7f4',
      border: '1.218px solid rgba(38, 37, 30, 0.1)',
      borderRadius: 8,
      padding: '24px 20px 20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0,
    }}
  >
    <div className="gtm-deck-text" style={{ textAlign: 'center' }}>
      {subtitle ? (
        <>
          <p style={{ ...deckType('xs'), color: core.offBlack, margin: 0 }}>{title}</p>
          <p style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>{subtitle}</p>
        </>
      ) : (
        <p style={{ ...deckType('xs'), color: core.offBlack, margin: 0 }}>{title}</p>
      )}
    </div>
    {children}
  </div>
);

const FactoryChip = ({ label, small = false }: { label: string; small?: boolean }) => (
  <div
    style={{
      flex: 1,
      background: small ? '#f0efeb' : 'rgba(255,255,255,0.6)',
      border: '1.218px solid rgba(38, 37, 30, 0.1)',
      borderRadius: small ? 4 : 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: small ? '5px 16px' : 12,
      minHeight: small ? 0 : 48,
      boxSizing: 'border-box',
    }}
  >
    <p
      className="gtm-deck-text"
      style={{
        ...(small ? { fontSize: 14.6, lineHeight: 1.2, letterSpacing: '-0.073px' } : deckType('xxs')),
        color: core.offBlack,
        margin: 0,
        textAlign: 'center',
      }}
    >
      {label}
    </p>
  </div>
);

export const ProductInsightsTitleSlide: Page = () => (
  <div style={{ ...lightSlide, background: core.offBlack }}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('super'), color: core.offWhite }}>Cursor Product Insights</p>
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
      }}
    />
  </div>
);

export const TableLayoutSlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack }}>
      Table Layout
    </p>
    <FullWidthModelTable rows={modelRows} />
  </LightSlide>
);

export const ModelSelectionCostSlide: Page = () => (
  <LightSlide>
    <div
      className="gtm-deck-text"
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
      <div>
        <p style={{ ...deckType('l'), color: core.offBlack, margin: 0 }}>
          Model Selection
          <br />
          &amp; Cost{' '}
          <span style={{ color: core.midGray }}>Use any AI model, your way</span>
        </p>
      </div>
      <p style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
        Connect Claude, GPT-4, Gemini, or any model your team already relies on. Switch providers as your needs evolve
        — no lock-in, no disruption, just consistent results.
      </p>
    </div>
    <div style={{ position: 'absolute', left: UI_FEATURE_X + 82, top: MARGIN, width: 1158 }}>
      <div
        style={{
          height: 69,
          background: cardTint,
          borderRadius: '10px 0 0 0',
          width: 410,
          padding: 20,
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <p className="gtm-deck-text" style={{ ...tableType, color: core.offBlack }}>
          Model
        </p>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 410,
          top: 0,
          height: 69,
          right: 0,
          background: cardTint,
          borderRadius: '0 10px 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: 156,
          paddingLeft: 20,
        }}
      >
        {['% Resolved', 'Avg. $', 'Org', 'Date', 'Agent'].map((label) => (
          <p
            key={label}
            className="gtm-deck-text"
            style={{ ...tableType, color: core.offBlack, width: 154, whiteSpace: 'nowrap' }}
          >
            {label}
          </p>
        ))}
      </div>
      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 34 }}>
        {modelRows.slice(0, 10).map((row, index) => (
          <div key={`${row.name}-${index}`}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <TableRow row={row} />
            </div>
            {index < 9 ? <img src={tableRule} alt="" style={{ width: '100%', height: 1, marginTop: 14 }} /> : null}
          </div>
        ))}
      </div>
    </div>
  </LightSlide>
);

export const ModelNeutralitySlide: Page = () => (
  <LightSlide>
    <div
      className="gtm-deck-text"
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
      <div>
        <p style={{ ...deckType('l'), color: core.offBlack, margin: 0 }}>Model Neutrality</p>
        <p style={{ ...deckType('l'), color: core.midGray, margin: 0 }}>Use any AI model, your way</p>
      </div>
      <p style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
        Connect Claude, GPT-4, Gemini, or any model your team already relies on. Switch providers as your needs evolve
        — no lock-in, no disruption, just consistent results.
      </p>
    </div>
    <ModelPickerPanel />
  </LightSlide>
);

const pricingPlans = [
  {
    title: 'Hobby',
    price: 'Free',
    intro: 'Includes:',
    features: ['No credit card required', 'Limited Agent requests', 'Limited Tab completions'],
  },
  {
    title: 'Individual',
    price: '$20/mo',
    intro: 'Everything in Hobby, plus:',
    features: [
      'Extended limits on Agent',
      'Access to frontier models',
      'MCPs, skills, and hooks',
      'Cloud agents',
      'Bugbot on usage-based billing',
    ],
  },
  {
    title: 'Teams',
    price: '$40/user/mo.',
    intro: 'Everything on Individual, plus:',
    features: [
      'Centralized team billing and administration',
      'Team marketplace for internal rules, skills, and plugins',
      'Agentic code reviews with Bugbot',
      'Cloud agents and automations with shared team context',
      'Usage analytics to understand team behavior',
      'Team-wide privacy mode',
      'SAML/OIDC SSO',
    ],
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    intro: 'Everything on Teams, plus:',
    features: [
      'Pooled usage',
      'Invoice/PO billing',
      'SCIM seat management',
      'Repository, model, and MCP access controls',
      'Auto-run, browser, and network controls',
      'Audit logs and service accounts',
      'AI code tracking API',
      'Priority support and account management',
    ],
  },
] as const;

export const PricingModelSlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack }}>
      Pricing Model
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 347,
        width: 1840,
        height: 693,
        display: 'flex',
        gap: 20,
      }}
    >
      {pricingPlans.map((plan) => (
        <div
          key={plan.title}
          style={{
            flex: 1,
            background: cardTint,
            borderRadius: 8,
            padding: 30,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
          }}
        >
          <div className="gtm-deck-text">
            <p style={{ ...deckType('s'), color: core.offBlack, margin: 0 }}>{plan.title}</p>
            <p style={{ ...deckType('s'), color: core.midGray, margin: 0 }}>{plan.price}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            <p className="gtm-deck-text" style={{ ...tableType, color: core.midGray }}>
              {plan.intro}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
              {plan.features.map((feature) => (
                <div key={feature} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <img src={checkIcon} alt="" style={{ width: 21, height: 21, flexShrink: 0, marginTop: 2 }} />
                  <p className="gtm-deck-text" style={{ ...tableType, color: core.offBlack }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </LightSlide>
);

const rulesSkillsCardType = {
  fontSize: 24,
  lineHeight: 1.34,
  letterSpacing: '-0.12px',
  fontWeight: 400,
  fontFamily: 'var(--osd-font-display)',
  margin: 0,
} as const;

const RulesSkillsFeatureCard = ({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle: string;
  body: string;
}) => (
  <div
    style={{
      flex: 1,
      background: cardTint,
      borderRadius: 8,
      padding: 40,
      boxSizing: 'border-box',
      height: 277,
    }}
  >
    <p className="gtm-deck-text" style={{ ...rulesSkillsCardType, color: core.offBlack }}>
      {title}
    </p>
    <p className="gtm-deck-text" style={{ ...rulesSkillsCardType, color: core.midGray }}>
      {subtitle}
    </p>
    <p className="gtm-deck-text" style={{ ...rulesSkillsCardType, color: core.midGray, marginTop: 24 }}>
      {body}
    </p>
  </div>
);

export const RulesSkillsSubAgentsSlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack }}>
      Rules, skills and sub-agents
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 196,
        width: 1840,
        display: 'flex',
        gap: 20,
      }}
    >
      <div style={{ width: 600, height: 547, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
        <img src={rulesSkillsRules} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ width: 600, height: 547, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
        <img src={rulesSkillsSkills} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ width: 600, height: 547, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
        <img src={rulesSkillsSubagents} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
      <RulesSkillsFeatureCard
        title="Rules"
        subtitle="Maintain quality at scale."
        body="Enforce standards across every codebase without slowing teams down."
      />
      <RulesSkillsFeatureCard
        title="Sub-agents"
        subtitle="Maintain quality at scale."
        body="Enforce standards across every codebase without slowing teams down."
      />
      <RulesSkillsFeatureCard
        title="Skills"
        subtitle="Maintain quality at scale."
        body="Enforce standards across every codebase without slowing teams down."
      />
    </div>
  </LightSlide>
);

export const ComposerBenchmarkSlide: Page = () => (
  <div style={{ ...lightSlide, background: core.offWhite }}>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('l'), color: core.offBlack, width: 475 }}>
      Composer Benchmark
    </p>
    <div
      style={{
        position: 'absolute',
        left: Math.round(1920 / 6) + 72,
        top: MARGIN,
        width: 1448,
        height: 963,
        background: core.pureWhite,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        boxSizing: 'border-box',
      }}
    >
      <div style={{ width: 1240, height: 787, overflow: 'hidden', position: 'relative' }}>
        <img
          src={composerBenchmarkChart}
          alt=""
          style={{ position: 'absolute', width: '108.67%', height: '114.15%', left: '-3.33%', top: '-7.07%' }}
        />
      </div>
    </div>
  </div>
);

export const SoftwareFactorySlide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('l'), color: core.offBlack, width: 1248 }}>
      The end-to-end, extensible software factory
    </p>
    <div
      style={{
        position: 'absolute',
        left: MARGIN,
        top: 207,
        width: 1840,
        height: 833,
        border: `2px dashed ${secondary.blue}`,
        borderRadius: 20,
        padding: '50px 40px 40px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 50,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BrandLogo src={cursorWordmarkBlack} alt="Cursor" height={44.6} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 30 }}>
        <div style={{ display: 'flex', gap: 30, flex: 1, minHeight: 0 }}>
          <FactorySection title="Developer Interfaces (sync)">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
              <div style={{ display: 'flex', gap: 8, flex: 1 }}>
                <FactoryChip label="Cursor Agents" />
                <FactoryChip label="Cursor Editor" />
              </div>
              <div style={{ display: 'flex', gap: 8, flex: 1 }}>
                <FactoryChip label="CLI" />
                <FactoryChip label="Slack & MS Teams" />
              </div>
              <FactoryChip label="Cursor in JetBrains IDEs, Android Studio, & Xcode" />
            </div>
          </FactorySection>
          <FactorySection title="Automated Agents (async)">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              <div
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.6)',
                  border: '1.218px solid rgba(38, 37, 30, 0.1)',
                  borderRadius: 6,
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <p className="gtm-deck-text" style={{ ...deckType('xxs'), color: core.offBlack, textAlign: 'center', margin: 0 }}>
                  Custom Automation Platform
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                  {[
                    ['Issue Triage', 'Security Scans', 'Codebase Hygiene', 'CI Autofix'],
                    ['Pre-Review Risk Scoring', 'Docs Updater', 'Dependency Updates', 'PRD Auto-Implementer'],
                    ['Merge Conflict Resolver', 'Standup Prep', 'Bug Fixes & Comms'],
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, flex: 1 }}>
                      {row.map((label) => (
                        <FactoryChip key={label} label={label} small />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <FactoryChip label="Cloud Agent API & SDK" />
            </div>
          </FactorySection>
        </div>
        <div style={{ display: 'flex', gap: 30, flex: 1, minHeight: 0 }}>
          <FactorySection
            title="Choice of Models"
            subtitle="with API pricing & custom, coding optimized harnesses"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
              <div style={{ display: 'flex', gap: 8, flex: 1 }}>
                <FactoryChip label="Gemini for UI Polish" />
                <FactoryChip label="GPT for Code Review" />
              </div>
              <div style={{ display: 'flex', gap: 8, flex: 1 }}>
                <FactoryChip label="Composer for Execution" />
                <FactoryChip label="Opus for planning" />
              </div>
            </div>
          </FactorySection>
          <FactorySection title="Code Review & Governance for the Agentic Era">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
              <div style={{ display: 'flex', gap: 8, flex: 1 }}>
                <FactoryChip label="Cursor Review" />
                <FactoryChip label="Bugbot" />
              </div>
              <div style={{ display: 'flex', gap: 8, flex: 1 }}>
                <FactoryChip label="Agent Tests on VMs" />
                <FactoryChip label="Enterprise Admin Controls" />
              </div>
              <FactoryChip label="Custom Agents for Security & Code Quality" />
            </div>
          </FactorySection>
        </div>
      </div>
    </div>
  </LightSlide>
);

export const HarnessSectionDividerSlide: Page = () => (
  <div style={{ ...lightSlide, background: secondary.olive }}>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN }}>
      <p style={{ ...deckType('super'), color: core.offWhite }}>Cursor&apos;s Advantage</p>
      <p style={{ ...deckType('super'), color: topicMuted }}>The Harness</p>
    </div>
    <div style={{ position: 'absolute', left: MARGIN, top: 440, width: 1840, height: 600 }}>
      <div style={{ position: 'absolute', top: 0, right: '5.04%', bottom: 0, left: '5.06%' }}>
        <img src={dividerHarnessCenter} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: '61.91%', bottom: 0, left: 0 }}>
        <img src={dividerHarnessLeft} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '61.91%' }}>
        <img src={dividerHarnessRight} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      </div>
    </div>
  </div>
);

export const ModelHarness1Slide: Page = () => (
  <LightSlide>
    <div
      className="gtm-deck-text"
      style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1550, display: 'flex', flexDirection: 'column', gap: 80 }}
    >
      <div>
        <p style={{ ...deckType('xl'), color: core.offBlack, margin: 0 }}>
          Use your models with Agent
          <br />
          Harnesses they deserve.
        </p>
        <p style={{ ...deckType('xl'), color: core.offBlack, margin: 0, marginTop: 40 }}>
          On average, side-by-side analyses show that Cursor makes models faster, more accurate, and more
          token-efficient.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 19, alignItems: 'center' }}>
        <div
          style={{
            background: cardTint,
            borderRadius: 6,
            padding: '25px 30px',
            display: 'flex',
            gap: 20,
            alignItems: 'center',
          }}
        >
          <img src={cursorCubeIcon} alt="" style={{ width: 40, height: 46, objectFit: 'contain' }} />
          <p style={{ ...tableType, color: core.offBlack, width: 242, margin: 0 }}>
            The best coding applications &amp; harnesses
          </p>
        </div>
        <p style={{ ...deckType('l'), color: core.darkGray, margin: 0 }}>+</p>
        <div
          style={{
            background: cardTint,
            borderRadius: 6,
            padding: '25px 30px 25px 25px',
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            height: 96,
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <img src={modelIconAnthropic} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <img src={modelIconGoogle} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <img src={modelIconOpenai} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <img src={modelIconDeepseek} alt="" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          </div>
          <p style={{ ...tableType, color: core.offBlack, margin: 0, whiteSpace: 'nowrap' }}>
            The best models
          </p>
        </div>
      </div>
    </div>
  </LightSlide>
);

const HarnessRoleIntro = () => (
  <p
    className="gtm-deck-text"
    style={{
      position: 'absolute',
      left: 960 + 162,
      top: MARGIN,
      width: 758,
      ...deckType('xs'),
      color: core.offBlack,
    }}
  >
    Models come from the same API sources, regardless of how you&apos;re accessing them. Application surfaces and Coding
    Harnesses are where developer experiences diverge.
  </p>
);

export const ModelHarness23Slide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, width: 725 }}>
      The role of the Model Harness
    </p>
    <HarnessRoleIntro />
    <div style={{ position: 'absolute', left: MARGIN, top: 323, width: 1840 }}>
      <div style={{ display: 'flex', gap: 20, marginBottom: 21 }}>
        {['Model', 'Coding Harness', 'Applications'].map((label) => (
          <p key={label} className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, width: 600 }}>
            {label}
          </p>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 20, height: 670 }}>
        <HarnessColumnBox borderColor={secondary.blue}>
          <img src={harnessIconModel} alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />
        </HarnessColumnBox>
        <HarnessColumnBox borderColor={secondary.cursorOrange}>
          <img src={harnessIconHarness} alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />
        </HarnessColumnBox>
        <HarnessColumnBox borderColor={secondary.cursorOrange}>
          <img src={harnessIconApps} alt="" style={{ width: 64, height: 64, objectFit: 'contain' }} />
        </HarnessColumnBox>
      </div>
    </div>
  </LightSlide>
);

export const ModelHarness2Slide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, width: 725 }}>
      The role of the Model Harness
    </p>
    <HarnessRoleIntro />
    <div style={{ position: 'absolute', left: MARGIN, top: 323, width: 1840 }}>
      <div style={{ display: 'flex', gap: 20, marginBottom: 21 }}>
        {['Model', 'Coding Harness', 'Applications'].map((label) => (
          <p key={label} className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, width: 600 }}>
            {label}
          </p>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 20, height: 670 }}>
        <HarnessColumnBox borderColor={secondary.blue}>
          <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, textAlign: 'center', width: 380 }}>
            General-purpose models, consumed via public Model APIs
          </p>
        </HarnessColumnBox>
        <HarnessColumnBox borderColor={secondary.cursorOrange}>
          <div
            className="gtm-deck-text"
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
          >
            <p style={{ ...deckType('s'), color: core.offBlack, margin: 0, width: 380, textAlign: 'center' }}>
              Proprietary &amp; Custom
            </p>
            <p style={{ ...deckType('xs'), color: core.midGray, margin: 0, width: 474 }}>
              (System prompt, context assembly, tool execution, conversation &amp; cache management, agentic loop,
              etc)
            </p>
          </div>
        </HarnessColumnBox>
        <HarnessColumnBox borderColor={secondary.cursorOrange} padded>
          <ApplicationCards />
        </HarnessColumnBox>
      </div>
    </div>
  </LightSlide>
);

export const ModelHarness7Slide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('l'), color: core.offBlack, width: 410 }}>
      Model labs&apos; primary focus
    </p>
    <div style={{ position: 'absolute', left: MARGIN, top: 323 }}>
      <HarnessColumnBox label="Model" borderColor={secondary.blue}>
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, textAlign: 'center', width: 380 }}>
          General-purpose models, consumed via public Model APIs
        </p>
      </HarnessColumnBox>
    </div>
    <div style={{ position: 'absolute', left: UI_FEATURE_X + 20, top: 323, width: 1220, opacity: 0.25 }}>
      <div style={{ display: 'flex', gap: 20, marginBottom: 21 }}>
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, width: 600 }}>
          Coding Harness
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, width: 600 }}>
          Applications
        </p>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <HarnessColumnBox borderColor={secondary.cursorOrange}>
          <div
            className="gtm-deck-text"
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <p style={{ ...deckType('s'), color: core.offBlack, margin: 0, width: 380, textAlign: 'center' }}>
              Proprietary &amp; Custom
            </p>
            <p style={{ ...deckType('xs'), color: core.midGray, margin: 0, width: 474 }}>
              (System prompt, context assembly, tool execution, conversation &amp; cache management, agentic loop, etc)
            </p>
          </div>
        </HarnessColumnBox>
        <HarnessColumnBox borderColor={secondary.cursorOrange} padded>
          <ApplicationCards />
        </HarnessColumnBox>
      </div>
    </div>
  </LightSlide>
);

export const ModelHarness8Slide: Page = () => (
  <LightSlide>
    <p
      className="gtm-deck-text"
      style={{ position: 'absolute', left: UI_FEATURE_X + 20, top: MARGIN, ...deckType('l'), color: core.offBlack, width: 410 }}
    >
      Cursor&apos;s primary focus
    </p>
    <div style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 600, opacity: 0.25 }}>
      <p className="gtm-deck-text" style={{ ...deckType('l'), color: core.offBlack, width: 410, marginBottom: 173 }}>
        Model labs&apos; primary focus
      </p>
      <HarnessColumnBox label="Model" borderColor={secondary.blue}>
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, textAlign: 'center', width: 380 }}>
          General-purpose models, consumed via public Model APIs
        </p>
      </HarnessColumnBox>
    </div>
    <div style={{ position: 'absolute', left: UI_FEATURE_X + 20, top: 323, width: 1220 }}>
      <div style={{ display: 'flex', gap: 20, marginBottom: 21 }}>
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, width: 600 }}>
          Coding Harness
        </p>
        <p className="gtm-deck-text" style={{ ...deckType('s'), color: core.offBlack, width: 600 }}>
          Applications
        </p>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <HarnessColumnBox borderColor={secondary.cursorOrange}>
          <div
            className="gtm-deck-text"
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <p style={{ ...deckType('s'), color: core.offBlack, margin: 0, width: 380, textAlign: 'center' }}>
              Proprietary &amp; Custom
            </p>
            <p style={{ ...deckType('xs'), color: core.midGray, margin: 0, width: 474 }}>
              (System prompt, context assembly, tool execution, conversation &amp; cache management, agentic loop, etc)
            </p>
          </div>
        </HarnessColumnBox>
        <HarnessColumnBox borderColor={secondary.cursorOrange} padded>
          <ApplicationCards />
        </HarnessColumnBox>
      </div>
    </div>
  </LightSlide>
);

const harness21Quotes = [
  'Model Labs are great at building models, but often underperform when building great coding harnesses.',
  'Claude Code, for instance, is the lowest-ranked harness for Opus on the Terminal-Bench 2.0 leaderboard: 11th out of 11.',
  'A 2026 METR.org study found that Claude Code & Codex both failed to outperform METR\u2019s intentionally basic, simple scaffold.',
] as const;

export const ModelHarness21Slide: Page = () => (
  <LightSlide>
    <p className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, ...deckType('xl'), color: core.offBlack, width: 1482 }}>
      First-Party Harnesses tend to underperform more focused products.
    </p>
    <div style={{ position: 'absolute', left: MARGIN, top: 308, width: 1220, height: 732, background: core.offBlack, borderRadius: 6, overflow: 'hidden' }}>
      <img
        src={harness21ScreenshotMain}
        alt=""
        style={{ position: 'absolute', left: 46, top: 35, width: 1128, height: 673, objectFit: 'cover', borderRadius: 6 }}
      />
      <div style={{ position: 'absolute', left: 39, top: 218, width: 1135, height: 490, background: 'rgba(12,12,12,0.85)', borderRadius: 6 }} />
      <img
        src={harness21ScreenshotInset}
        alt=""
        style={{ position: 'absolute', left: 58, top: 659, width: 1098, height: 49, objectFit: 'cover', borderRadius: 6 }}
      />
    </div>
    <div style={{ position: 'absolute', left: '66.67%', top: 308, width: 600, display: 'flex', flexDirection: 'column', gap: 20 }}>
      {harness21Quotes.map((quote) => (
        <div key={quote} style={{ background: cardTint, borderRadius: 6, padding: 40 }}>
          <p className="gtm-deck-text" style={{ ...deckType('xs'), color: core.midGray, margin: 0, whiteSpace: 'pre-wrap' }}>
            {quote}
          </p>
        </div>
      ))}
    </div>
  </LightSlide>
);

export const ModelHarness16Slide: Page = () => (
  <LightSlide>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1343, display: 'flex', flexDirection: 'column', gap: 80 }}>
      <p style={{ ...deckType('xxl'), color: core.offBlack, margin: 0 }}>
        Fable 5 delivered a 52.6%¹
        <br />
        better security score in
        <br />
        Cursor than in Claude Code.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, width: 1020 }}>
        <div>
          <p style={{ ...deckType('xs'), color: core.offBlack, margin: 0 }}>Purpose-built harnesses yield better results</p>
          <p style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>
            Per Endor Labs&rsquo; June 2026 Agent Security benchmark:
          </p>
          <p style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>¹ scored 29%, 52.6% better than 19%</p>
        </div>
        <div style={{ background: cardTint, borderRadius: 8, padding: '18px 25px', display: 'inline-flex', gap: 10, alignItems: 'center', width: 'fit-content' }}>
          <span style={{ ...tableType, color: secondary.cursorOrange, textDecoration: 'underline' }}>endorlabs.com</span>
          <img src={externalLinkIcon} alt="" style={{ width: 15, height: 15 }} />
        </div>
      </div>
    </div>
    <div
      style={{
        position: 'absolute',
        left: 801,
        top: 402,
        width: 1119,
        height: 678,
        overflow: 'hidden',
      }}
    >
      <img src={harness16Ui} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  </LightSlide>
);

export const ModelHarness17Slide: Page = () => (
  <LightSlide>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1764, display: 'flex', flexDirection: 'column', gap: 80 }}>
      <p style={{ ...deckType('xxl'), color: core.offBlack, margin: 0 }}>
        Claude Opus is more capable
        <br />
        in Cursor than in Claude Code.
      </p>
      <div style={{ width: 1020 }}>
        <p style={{ ...deckType('xs'), color: core.offBlack, margin: 0 }}>Purpose-built harnesses yield better results</p>
        <p style={{ ...deckType('xs'), color: core.midGray, margin: 0 }}>Per Artificial Analysis&apos; composite benchmarks</p>
      </div>
    </div>
    <div style={{ position: 'absolute', left: MARGIN, top: 422, width: 1840, height: 658, border: `1px solid ${core.lightGray}`, borderRadius: 6, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: 54, transform: 'translateX(-50%)', width: 1711, height: 571, overflow: 'hidden' }}>
        <img src={harness17Benchmark} alt="" style={{ position: 'absolute', width: '102.47%', height: '251.62%', left: '-1.73%', top: 0 }} />
      </div>
    </div>
  </LightSlide>
);

export const ModelHarness18Slide: Page = () => (
  <LightSlide>
    <div className="gtm-deck-text" style={{ position: 'absolute', left: MARGIN, top: MARGIN, width: 1459, display: 'flex', flexDirection: 'column', gap: 80 }}>
      <p style={{ ...deckType('xxl'), color: core.offBlack, margin: 0, width: 'min-content' }}>
        Opus scored 20% higher
        <br />
        in Cursor than in Claude Code.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ width: 716 }}>
          <p style={{ ...deckType('xs'), color: core.offBlack, margin: 0, lineHeight: 1.2 }}>
            Purpose-built harnesses yield better results
          </p>
          <p style={{ ...deckType('xs'), color: core.midGray, margin: 0, lineHeight: 1.2 }}>
            Cursor&apos;s codebase-aware harness routinely delivers more accurate and faster results, especially in large
            codebases. Cursor is focused on harness development, not on building all-purpose AGI.
          </p>
          <p style={{ ...deckType('xs'), color: core.midGray, margin: 0, lineHeight: 1.2 }}>&nbsp;</p>
          <p style={{ ...deckType('xs'), color: core.midGray, margin: 0, lineHeight: 1.2 }}>
            Per an Independent study by Matt Maher, Staff Engineer at Sony: Benchmarked with a PRD-to-implementation
            task across a battery of 100 features.
          </p>
        </div>
        <div style={{ background: cardTint, borderRadius: 8, padding: '18px 25px', display: 'inline-flex', gap: 10, alignItems: 'center', width: 'fit-content' }}>
          <span style={{ ...tableType, color: secondary.cursorOrange, textDecoration: 'underline' }}>youtube.com</span>
          <img src={externalLinkIcon} alt="" style={{ width: 14.562, height: 14.562 }} />
        </div>
      </div>
    </div>
    {/* Figma 4161:1270 — youtube panel @ calc(33.33%+218), top 296; clip 4161:1272 inset @ (0, 0), 1012×747 */}
    <div
      style={{
        position: 'absolute',
        left: UI_FEATURE_X + 218,
        top: 296,
        width: 1062,
        height: 784,
        background: cardTint,
        borderTop: `1px solid ${core.midGray}`,
        borderLeft: `1px solid ${core.midGray}`,
        borderRadius: '6px 0 0 0',
        padding: 50,
        boxSizing: 'border-box',
      }}
    >
      <div style={{ position: 'relative', width: 1218, height: 747 }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 1012,
            height: 747,
            overflow: 'hidden',
            borderRadius: '8px 0 0 8px',
          }}
        >
          <img src={harness18Youtube} alt="" style={{ display: 'block', width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
  </LightSlide>
);

export const section4179Slides = [
  ProductInsightsTitleSlide,
  TableLayoutSlide,
  ModelSelectionCostSlide,
  ModelNeutralitySlide,
  PricingModelSlide,
  RulesSkillsSubAgentsSlide,
  ComposerBenchmarkSlide,
  SoftwareFactorySlide,
  HarnessSectionDividerSlide,
  ModelHarness1Slide,
  ModelHarness23Slide,
  ModelHarness2Slide,
  ModelHarness7Slide,
  ModelHarness8Slide,
  ModelHarness21Slide,
  ModelHarness16Slide,
  ModelHarness17Slide,
  ModelHarness18Slide,
] satisfies Page[];

export default section4179Slides;
