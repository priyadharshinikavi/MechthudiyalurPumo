import { useScrollReveal } from '../../hooks/useScrollReveal';

function Ico({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const POINTS = [
  {
    text: 'Tool & Die Designing, Mold Base Selection, Core & Cavity Splitting',
    icon: <Ico><rect x="3" y="3" width="18" height="6" rx="1" /><rect x="3" y="15" width="18" height="6" rx="1" /><path d="M8 9v6M16 9v6" /><path d="M10 12h4" strokeDasharray="1.5 1.5" /></Ico>,
  },
  {
    text: 'Side Core & Automation Mechanism, Shrinkage & Solidification',
    icon: <Ico><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M2 12h5M17 12h5" /><path d="M4 10l-2 2 2 2M20 10l2 2-2 2" /></Ico>,
  },
  {
    text: 'Runner Design & Calculation',
    icon: <Ico><circle cx="12" cy="4" r="2" /><path d="M12 6v5M12 11H5v5M12 11h7v5" /><rect x="3" y="16" width="4" height="4" rx="0.8" /><rect x="17" y="16" width="4" height="4" rx="0.8" /></Ico>,
  },
];

// Looping press: punch strikes a moving strip and ejects a blank
function PressAnim() {
  return (
    <svg className="td-press" viewBox="0 0 120 90" aria-hidden="true">
      <rect x="20" y="2" width="80" height="10" rx="2" className="td-press-frame" />
      <g className="td-punch">
        <rect x="48" y="12" width="24" height="26" rx="2" />
        <rect x="52" y="38" width="16" height="10" />
      </g>
      <g className="td-strip">
        <rect x="-60" y="52" width="240" height="6" />
      </g>
      <rect x="22" y="60" width="76" height="16" rx="2" className="td-press-frame" />
      <rect x="52" y="60" width="16" height="6" className="td-die-hole" />
      <rect x="53" y="62" width="14" height="4" className="td-blank" />
    </svg>
  );
}

function StampCard({ item, i, visible, area }) {
  return (
    <figure className={`td-card td-card-${area} ${visible ? 'in' : ''}`} style={{ '--i': i, gridArea: area }}>
      <div className="td-card-img">
        <img src={item.src} alt={item.alt} loading="lazy" />
      </div>
      <span className="td-shock" aria-hidden="true" />
      <figcaption>{item.label}</figcaption>
    </figure>
  );
}

export default function ToolDieSection({ images }) {
  const [ref, visible] = useScrollReveal(0.12);
  const [mould, pressTool, dieSets] = images;

  return (
    <section id="cd-tool-die" ref={ref} className={`td-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <div className="td-head">
          <h2 className="td-title">Tool &amp; Die <span>Design Concept</span></h2>
          <PressAnim />
        </div>

        <div className="td-grid">
          <StampCard item={mould} i={0} visible={visible} area="a" />
          <StampCard item={pressTool} i={1} visible={visible} area="b" />
          <StampCard item={dieSets} i={2} visible={visible} area="c" />
        </div>

        <ul className="td-points">
          {POINTS.map((p, i) => (
            <li key={p.text} style={{ '--i': i }}>
              <span className="td-point-ico">{p.icon}</span>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
