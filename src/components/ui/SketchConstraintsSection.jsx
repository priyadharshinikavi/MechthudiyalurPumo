import { FiChevronRight } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

// ── Icon helper: 24×24 line icons drawn in the current colour ──
function Ico({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}
const Dot = ({ x, y, r = 1.7 }) => <circle cx={x} cy={y} r={r} fill="currentColor" stroke="none" />;

// ── Sketch tools ───────────────────────────────────────────
const SKETCH_TOOLS = [
  { name: 'Line', icon: <Ico><line x1="4" y1="20" x2="20" y2="4" /><Dot x={4} y={20} /><Dot x={20} y={4} /></Ico> },
  { name: 'Circle', icon: <Ico><circle cx="12" cy="12" r="8" /><Dot x={12} y={12} /></Ico> },
  { name: 'Spline', icon: <Ico><path d="M3 17C6 5 10 5 12 12s6 7 9-5" /><Dot x={3} y={17} /><Dot x={21} y={7} /></Ico> },
  { name: 'Rectangle', icon: <Ico><rect x="4" y="6" width="16" height="12" /><Dot x={4} y={6} /><Dot x={20} y={18} /></Ico> },
  { name: 'Arc', icon: <Ico><path d="M4 18a8 8 0 0 1 16 0" /><Dot x={4} y={18} /><Dot x={20} y={18} /><Dot x={12} y={18} r={1.3} /></Ico> },
  { name: 'Ellipse', icon: <Ico><ellipse cx="12" cy="12" rx="9" ry="5.5" /><Dot x={12} y={12} /></Ico> },
  { name: 'Slot', icon: <Ico><rect x="3" y="8" width="18" height="8" rx="4" /><line x1="7" y1="12" x2="17" y2="12" strokeDasharray="2 2" /></Ico> },
  { name: 'Polygon', icon: <Ico><polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" /><Dot x={12} y={12} /></Ico> },
  { name: 'Fillet', icon: <Ico><path d="M5 4v7a8 8 0 0 0 8 8h7" /><path d="M5 4v15h15" strokeDasharray="2 2.5" opacity="0.45" /></Ico> },
  { name: 'Text', icon: <Ico><path d="M6 20 12 4l6 16M8.5 14h7" /></Ico> },
  { name: 'Point', icon: <Ico><line x1="12" y1="5" x2="12" y2="9" /><line x1="12" y1="15" x2="12" y2="19" /><line x1="5" y1="12" x2="9" y2="12" /><line x1="15" y1="12" x2="19" y2="12" /><Dot x={12} y={12} r={2.2} /></Ico> },
  { name: 'Centerline', icon: <Ico><line x1="3" y1="20" x2="21" y2="4" strokeDasharray="5 2.5 1 2.5" /></Ico> },
];

// ── Geometric relations ────────────────────────────────────
const RELATIONS = [
  { name: 'Horizontal', icon: <Ico><line x1="4" y1="12" x2="20" y2="12" /></Ico> },
  { name: 'Vertical', icon: <Ico><line x1="12" y1="4" x2="12" y2="20" /></Ico> },
  { name: 'Collinear', icon: <Ico><path d="M3 21l7-7M14 10l7-7" /><line x1="10" y1="14" x2="14" y2="10" strokeDasharray="1.5 2" opacity="0.5" /></Ico> },
  { name: 'Perpendicular', icon: <Ico><path d="M5 19h14M12 19V5" /><path d="M12 15h4v4" strokeWidth="1.4" /></Ico> },
  { name: 'Parallel', icon: <Ico><path d="M5 19 14 5M10 19l9-14" /></Ico> },
  { name: 'Equal', icon: <Ico><path d="M5 9h14M5 15h14" /></Ico> },
  { name: 'Tangent', icon: <Ico><circle cx="12" cy="14" r="6" /><line x1="2" y1="8" x2="22" y2="8" /><Dot x={12} y={8} r={1.4} /></Ico> },
  { name: 'Concentric', icon: <Ico><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4" /><Dot x={12} y={12} r={1.2} /></Ico> },
  { name: 'Coincident', icon: <Ico><path d="M4 18l8-8 8 6" /><Dot x={12} y={10} r={2.3} /></Ico> },
  { name: 'Fix', icon: <Ico><path d="M12 4v10M6 14h12M8 14l-3 5M12 14l-3 5M16 14l-3 5" /></Ico> },
];

const SmartDimensionIcon = () => (
  <Ico>
    <path d="M5 19 19 5" />
    <path d="M19 5h-5M19 5v5" />
    <path d="M5 19h5M5 19v-5" />
    <path d="M3 14l4 4M14 3l4 4" strokeWidth="1.3" opacity="0.6" />
  </Ico>
);

const DEFAULT_POINTS = [
  'Introduction of Sketcher',
  'Understanding 3D Parametric Concepts',
  'Feature Based, Parametric, Associative Concepts',
  'Creating Sketcher Geometry Using Sketcher Tools',
  'Applying Smart Dimensions & Geometric Relations',
  'Creating Fully Defined Sketches with Design Intent',
];

export default function SketchConstraintsSection({ image, points = DEFAULT_POINTS }) {
  return (
    <section id="cd-sketch" className="skc-section">
      <div className="container">
        <AnimatedSection className="skc-head">
          <span className="skc-eyebrow">Module 03 · Sketching &amp; Parametric Design</span>
          <h2 className="skc-title">
            2D Sketch <span>Dimensions</span> With <span>Constraints</span>
          </h2>
        </AnimatedSection>

        <div className="skc-grid">
          {/* ── Left: sketch + topics ── */}
          <AnimatedSection animation="reveal-left" className="skc-main">
            <figure className="skc-figure">
              <img src={image} alt="Fully dimensioned and constrained 2D sketch in SolidWorks" loading="lazy" />
              <figcaption>
                <span className="skc-live-dot" /> Fully defined sketch · Ø15, R17, R7.50, 30 &amp; 40 mm
              </figcaption>
            </figure>

            <ul className="skc-points">
              {points.map((p) => (
                <li key={p}>
                  <FiChevronRight className="skc-arrow" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* ── Right: tool panels ── */}
          <AnimatedSection animation="reveal-right" delay={0.1} className="skc-side">
            <div className="skc-panel">
              <div className="skc-panel-head">Sketch Tools</div>
              <div className="skc-tools">
                {SKETCH_TOOLS.map((t) => (
                  <div key={t.name} className="skc-tool" title={t.name}>
                    <span className="skc-tool-ico">{t.icon}</span>
                    <span className="skc-tool-name">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skc-panel skc-smart">
              <span className="skc-smart-ico"><SmartDimensionIcon /></span>
              <div>
                <div className="skc-smart-title">Smart Dimension</div>
                <div className="skc-smart-sub">Linear · Radial · Diameter · Angular</div>
              </div>
            </div>

            <div className="skc-panel">
              <div className="skc-panel-head">Add Relations</div>
              <ul className="skc-relations">
                {RELATIONS.map((r) => (
                  <li key={r.name}>
                    <span className="skc-rel-ico">{r.icon}</span>
                    {r.name}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
