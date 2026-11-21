import { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CYCLE_MS = 3600;

// Drawing inspector: a spotlight frame glides between regions of the sheet.
// Hovering the sheet pauses it; the list on the right jumps to any region.
export default function ProjectDrawingSection({ image, title, regions }) {
  const [ref, visible] = useScrollReveal(0.15);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!visible || paused) return undefined;
    const t = setTimeout(() => {
      setActive((a) => (a + 1) % regions.length);
      setCycle((c) => c + 1);
    }, CYCLE_MS);
    return () => clearTimeout(t);
  }, [visible, paused, cycle, regions.length]);

  const choose = (i) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  const reg = regions[active];

  return (
    <section id="cd-project-drawing" ref={ref} className={`pd-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <div className="pd-head">
          <span className="pd-eyebrow">Student Project · A3 Production Drawing</span>
          <h2 className="pd-title">{title.lead} <span>{title.accent}</span></h2>
        </div>

        <div className="pd-grid">
          {/* ── Drawing viewer ── */}
          <div className="pd-viewer">
            <div
              className="pd-stage"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <img src={image} alt={`${title.lead} ${title.accent} — complete production drawing`} />

              {/* spotlight frame */}
              <div
                className="pd-focus"
                style={{ left: `${reg.box[0]}%`, top: `${reg.box[1]}%`, width: `${reg.box[2]}%`, height: `${reg.box[3]}%` }}
                aria-hidden="true"
              >
                <span className="pd-focus-tag">{String(active + 1).padStart(2, '0')} · {reg.name}</span>
                <i className="c tl" /><i className="c tr" /><i className="c bl" /><i className="c br" />
              </div>

            </div>

            <div className="pd-progress" aria-hidden="true">
              <span key={cycle} className={visible && !paused ? 'run' : ''} style={{ animationDuration: `${CYCLE_MS}ms` }} />
            </div>
          </div>

          {/* ── Region list ── */}
          <ol className="pd-list">
            {regions.map((r, i) => (
              <li key={r.name} style={{ '--i': i }}>
                <button
                  type="button"
                  className={i === active ? 'active' : ''}
                  onClick={() => choose(i)}
                  aria-pressed={i === active}
                >
                  <span className="pd-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="pd-txt">
                    <strong>{r.name}</strong>
                    <small>{r.desc}</small>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
