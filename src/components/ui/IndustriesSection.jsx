import { useEffect, useState } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function Ico({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const ICONS = {
  pump: <Ico><circle cx="9" cy="13" r="5" /><circle cx="9" cy="13" r="1.6" /><path d="M14 13h4v-5h3M4 13H2" /><path d="M7 8V5h4v3" /></Ico>,
  valve: <Ico><path d="M3 15h6l3-3 3 3h6" /><path d="M3 12v6M21 12v6" /><path d="M12 12V5M8 5h8" /></Ico>,
  services: <Ico><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /><path d="M8 11l2-2 2 2 3-3" /></Ico>,
  spm: <Ico><rect x="3" y="9" width="18" height="9" rx="1" /><path d="M7 9V5h10v4" /><circle cx="7" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /><path d="M10 13h4" /></Ico>,
  fabrication: <Ico><path d="M12 3v6" /><path d="M9 9h6l-3 4z" /><path d="M4 20h16" /><path d="M8 16l-2 2M16 16l2 2M12 15v3" /></Ico>,
  product: <Ico><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" /></Ico>,
};

function useCounter(target, run, ms = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return undefined;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / ms);
      setN(Math.round(target * (1 - (1 - p) ** 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, ms]);
  return n;
}

export default function IndustriesSection({ industries }) {
  const [ref, visible] = useScrollReveal(0.1);
  const count = useCounter(industries.length, visible);

  return (
    <section id="cd-industries" ref={ref} className={`in-section ${visible ? 'in' : ''}`}>
      <div className="container">
        <div className="in-head">
          <span className="in-count"><strong>{count}</strong> Core Industries</span>
          <h2 className="in-title">Where Our <span>Engineers Work</span></h2>
          <p className="in-sub">Industries that hire Masters in Industrial Design graduates. Hover a card to see the roles.</p>
          <svg className="in-route" viewBox="0 0 600 20" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 10H600" />
            {[0, 120, 240, 360, 480, 600].map((x) => <circle key={x} cx={x} cy="10" r="4" />)}
          </svg>
        </div>

        <div className="in-grid">
          {industries.map((ind, i) => (
            <article key={ind.name} className="in-card" style={{ '--i': i }} tabIndex={0}>
              <div className="in-card-inner">
                <div className={`in-img ${ind.fit === 'contain' ? 'is-contain' : ''}`}>
                  <img src={ind.src} alt={ind.alt} loading="lazy" />
                </div>
                <span className="in-ico">{ICONS[ind.icon]}</span>
                <div className="in-body">
                  <h3>{ind.name}</h3>
                  <div className="in-roles">
                    <span className="in-roles-head"><FiBriefcase /> Typical roles</span>
                    <ul>
                      {ind.roles.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
