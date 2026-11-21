import { useScrollReveal } from '../../hooks/useScrollReveal';

function Ico({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const TOPICS = [
  { name: 'Structural Members', icon: <Ico><path d="M4 5h16M4 19h16M12 5v14" /></Ico> },
  { name: 'Trim / Extend', icon: <Ico><path d="M4 12h10M14 6v12" /><path d="M17 9l3 3-3 3" /></Ico> },
  { name: 'Corner Treatment', icon: <Ico><path d="M5 19V5h14" /><path d="M5 5l5 5" strokeDasharray="2 2" /></Ico> },
  { name: 'Gussets & End Caps', icon: <Ico><path d="M5 19V5M5 19h14" /><path d="M5 12l7 7" /><path d="M5 12v7h7z" fill="currentColor" opacity="0.25" /></Ico> },
  { name: 'Weld Beads', icon: <Ico><path d="M3 15c2-3 3 3 5 0s3 3 5 0 3 3 5 0 2 3 3 0" /><path d="M3 19h18" opacity="0.5" /></Ico> },
  { name: 'Cut List & Drawings', icon: <Ico><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></Ico> },
];

// Card whose border is "welded" (traced) before the image reveals
function WeldCard({ item, i, visible, area }) {
  return (
    <figure className={`wd-card ${visible ? 'in' : ''}`} style={{ '--i': i, gridArea: area }}>
      <div className="wd-card-img">
        <img src={item.src} alt={item.alt} loading="lazy" />
        <span className="wd-spark" aria-hidden="true" />
      </div>
      <figcaption>{item.label}</figcaption>
    </figure>
  );
}

export default function WeldmentsSection({ images }) {
  const [ref, visible] = useScrollReveal(0.1);
  const [profiles, groups, stairModel, drawing, steelFrame, tower] = images;

  return (
    <section id="cd-weldments" ref={ref} className={`wd-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <div className="wd-head">
          <h2 className="wd-title">WELDMENTS</h2>
          <span className="wd-torch" aria-hidden="true">
            <i /><i /><i /><i /><i /><i />
          </span>
        </div>

        <div className="wd-grid">
          <WeldCard item={profiles} i={0} visible={visible} area="prof" />
          <WeldCard item={groups} i={1} visible={visible} area="groups" />
          <WeldCard item={stairModel} i={2} visible={visible} area="stair" />
          <WeldCard item={tower} i={3} visible={visible} area="tower" />
          <WeldCard item={drawing} i={4} visible={visible} area="draw" />
          <WeldCard item={steelFrame} i={5} visible={visible} area="steel" />
        </div>

        <ul className="wd-topics">
          {TOPICS.map((t, i) => (
            <li key={t.name} style={{ '--i': i }}>
              <span className="wd-topic-ico">{t.icon}</span>
              {t.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
