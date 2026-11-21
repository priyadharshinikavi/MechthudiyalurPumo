import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

// View names
const VIEWS = {
  FV: 'Front View',
  BV: 'Bottom View',
  TV: 'Top View',
  RSV: 'Right Side View',
  LSV: 'Left Side View',
};

// Colour follows the POSITION in the layout (same in both systems)
const POS_COLOR = {
  top: '#b9baf3',
  left: '#5f8f68',
  center: '#f5cf6e',
  right: '#f2733f',
  bottom: '#5a6c9e',
};

const SYSTEMS = [
  {
    id: 'first',
    num: '1',
    sup: 'st',
    subtitle: 'Opposite Side View Projection',
    wideLeft: true,
    layout: { top: 'BV', left: 'RSV', center: 'FV', right: 'LSV', bottom: 'TV' },
  },
  {
    id: 'third',
    num: '3',
    sup: 'rd',
    subtitle: 'Same Side View Projection',
    wideLeft: false,
    layout: { top: 'TV', left: 'LSV', center: 'FV', right: 'RSV', bottom: 'BV' },
  },
];

const LEGEND_ORDER = ['FV', 'BV', 'TV', 'RSV', 'LSV'];

// Observer figure + line of sight + ISO projection symbol
function ProjectionDiagram({ wideLeft }) {
  const trap = wideLeft
    ? '150,24 222,38 222,74 150,88'   // 1st angle: large end towards the circle
    : '150,38 222,24 222,88 150,74';  // 3rd angle: small end towards the circle
  return (
    <svg className="prj-diagram" viewBox="0 0 240 112" role="img"
      aria-label={wideLeft ? 'First angle projection symbol' : 'Third angle projection symbol'}>
      {/* observer */}
      <ellipse cx="14" cy="104" rx="13" ry="4" fill="#f2733f" />
      <circle cx="14" cy="34" r="6" fill="#1f2937" />
      <path d="M7 44h14l2 26h-4l-1 32h-4l-1-24-1 24h-4l-1-32H5z" fill="#1f2937" />
      {/* line of sight */}
      <line x1="30" y1="56" x2="54" y2="56" stroke="#111827" strokeWidth="2.4" />
      <path d="M54 51l8 5-8 5z" fill="#111827" />
      {/* centre lines */}
      <line x1="68" y1="56" x2="236" y2="56" stroke="#111827" strokeWidth="1.6" strokeDasharray="7 4" />
      <line x1="104" y1="14" x2="104" y2="98" stroke="#111827" strokeWidth="1.6" strokeDasharray="7 4" />
      {/* circle view */}
      <circle cx="104" cy="56" r="30" fill="none" stroke="#111827" strokeWidth="2.6" />
      <circle cx="104" cy="56" r="13" fill="none" stroke="#111827" strokeWidth="2.6" />
      {/* frustum view */}
      <polygon points={trap} fill="none" stroke="#111827" strokeWidth="2.6" strokeLinejoin="round" />
    </svg>
  );
}

function SystemPanel({ sys, delay }) {
  const [active, setActive] = useState(null);
  const posOf = Object.fromEntries(Object.entries(sys.layout).map(([pos, v]) => [v, pos]));

  const Box = ({ pos }) => {
    const v = sys.layout[pos];
    return (
      <div
        className={`prj-box prj-${pos} ${active === v ? 'is-active' : ''} ${active && active !== v ? 'is-dim' : ''}`}
        style={{ background: POS_COLOR[pos] }}
        onMouseEnter={() => setActive(v)}
        onMouseLeave={() => setActive(null)}
        title={VIEWS[v]}
      >
        {v}
      </div>
    );
  };

  return (
    <AnimatedSection delay={delay} className="prj-panel">
      <h3 className="prj-title">
        {sys.num}<sup>{sys.sup}</sup> Angle of Projection
      </h3>
      <p className="prj-subtitle">{sys.subtitle}</p>

      <ProjectionDiagram wideLeft={sys.wideLeft} />

      <div className="prj-body">
        <ul className="prj-legend">
          {LEGEND_ORDER.map((v) => (
            <li
              key={v}
              className={active === v ? 'is-active' : ''}
              onMouseEnter={() => setActive(v)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="prj-chip" style={{ background: POS_COLOR[posOf[v]] }}>{v}:</span>
              {VIEWS[v]}
            </li>
          ))}
        </ul>

        <div className="prj-layout" aria-label={`${sys.num}${sys.sup} angle view arrangement`}>
          <Box pos="top" />
          <Box pos="left" />
          <Box pos="center" />
          <Box pos="right" />
          <Box pos="bottom" />
        </div>
      </div>

    </AnimatedSection>
  );
}

export default function ProjectionSection() {
  return (
    <section id="cd-projection" className="prj-section">
      <div className="container">
        <AnimatedSection className="prj-head">
          <span className="prj-eyebrow">Engineering Graphics · Orthographic Projection</span>
        </AnimatedSection>

        <div className="prj-grid">
          {SYSTEMS.map((sys, i) => (
            <SystemPanel key={sys.id} sys={sys} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
