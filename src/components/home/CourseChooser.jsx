import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiClock, FiPause, FiPlay } from 'react-icons/fi';
import AnimatedSection from '../ui/AnimatedSection';

// ============================================================
// Illustrated students + a looping "how the work is done"
// animation on a screen beside them. Everything is SVG + CSS
// (see chooser.css): one 12-second cycle = 3 work steps.
// ============================================================

const SKIN = '#d9a066';
const SKIN_SHADE = '#b97f48';
const HAIR = '#2b1d14';
const TORSO = 'M54 300 L60 232 Q64 208 94 200 L118 196 Q130 206 142 196 L166 200 Q196 208 200 232 L206 300 Z';

function Face() {
  return (
    <>
      <rect x="116" y="170" width="28" height="40" rx="10" fill={SKIN_SHADE} />
      <circle cx="88" cy="140" r="9" fill={SKIN} />
      <circle cx="172" cy="140" r="9" fill={SKIN} />
      <ellipse cx="130" cy="136" rx="42" ry="46" fill={SKIN} />
      <rect x="86" y="118" width="9" height="20" rx="4" fill={HAIR} />
      <rect x="165" y="118" width="9" height="20" rx="4" fill={HAIR} />
      <path d="M106 131 Q114 126 122 130" stroke={HAIR} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M138 130 Q146 126 154 131" stroke={HAIR} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* eyes glance toward the screen */}
      <g className="cc-eyes">
        <circle cx="116" cy="143" r="4.6" fill="#1f2937" />
        <circle cx="148" cy="143" r="4.6" fill="#1f2937" />
        <circle cx="117.6" cy="141.4" r="1.4" fill="#fff" />
        <circle cx="149.6" cy="141.4" r="1.4" fill="#fff" />
      </g>
      <path d="M130 147 Q126 157 131 158" stroke={SKIN_SHADE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M116 164 Q130 178 144 164 Q130 169 116 164 Z" fill="#8b2c2c" />
      <circle cx="103" cy="160" r="7" fill="#f08a7a" opacity="0.35" />
      <circle cx="157" cy="160" r="7" fill="#f08a7a" opacity="0.35" />
    </>
  );
}

// Laptop seen from behind + typing hands
function Laptop() {
  return (
    <>
      <circle className="cc-hand" cx="64" cy="268" r="12" fill={SKIN} />
      <circle className="cc-hand cc-hand-2" cx="196" cy="268" r="12" fill={SKIN} />
      <rect x="68" y="240" width="124" height="72" rx="8" fill="#e2e8f0" />
      <rect x="68" y="240" width="124" height="6" rx="3" fill="#cbd5e1" />
      <circle cx="130" cy="276" r="9" fill="#94a3b8" opacity="0.6" />
    </>
  );
}

function IndustrialKid() {
  return (
    <g className="cc-kid">
      <Face />
      <path d={TORSO} fill="#1e3a8a" />
      <path d="M118 196 L130 222 L106 214 Z" fill="#dbeafe" />
      <path d="M142 196 L130 222 L154 214 Z" fill="#dbeafe" />
      <path d="M60 236 Q64 210 92 202 L110 205 L112 300 L56 300 Z" fill="#f97316" />
      <path d="M200 236 Q196 210 168 202 L150 205 L148 300 L204 300 Z" fill="#f97316" />
      <rect x="57" y="226" width="55" height="8" fill="#f1f5f9" opacity="0.9" />
      <rect x="148" y="226" width="56" height="8" fill="#f1f5f9" opacity="0.9" />
      <rect x="160" y="206" width="22" height="15" rx="3" fill="#fff" />
      <rect x="163" y="209" width="7" height="9" rx="1.5" fill="#93c5fd" />
      <path d="M84 118 Q84 72 130 70 Q176 72 176 118 Z" fill="#fbbf24" />
      <path d="M122 72 Q130 68 138 72 L138 116 L122 116 Z" fill="#fcd34d" />
      <rect x="74" y="112" width="112" height="13" rx="6.5" fill="#f59e0b" />
      <circle cx="104" cy="96" r="8" fill="none" stroke="#1e3a8a" strokeWidth="3.5" strokeDasharray="3 2.4" />
      <Laptop />
    </g>
  );
}

function AutomotiveKid() {
  return (
    <g className="cc-kid">
      <Face />
      <path d={TORSO} fill="#dc2626" />
      <path d="M54 300 L60 232 Q63 214 80 205 L86 300 Z" fill="#111827" />
      <path d="M206 300 L200 232 Q197 214 180 205 L174 300 Z" fill="#111827" />
      <path d="M108 198 Q130 214 152 198 L152 207 Q130 223 108 207 Z" fill="#111827" />
      <line x1="130" y1="216" x2="130" y2="240" stroke="#7f1d1d" strokeWidth="3" />
      <rect x="92" y="216" width="24" height="16" rx="3" fill="#fff" />
      <g fill="#111827">
        <rect x="95" y="219" width="4.5" height="5" />
        <rect x="104" y="219" width="4.5" height="5" />
        <rect x="99.5" y="224" width="4.5" height="5" />
        <rect x="108.5" y="224" width="4.5" height="5" />
      </g>
      <rect x="144" y="220" width="26" height="9" rx="2" fill="#fff" opacity="0.9" />
      <path d="M86 116 Q86 74 130 72 Q174 74 174 116 Z" fill="#dc2626" />
      <path d="M130 73 L130 112" stroke="#b91c1c" strokeWidth="2" />
      <circle cx="130" cy="73" r="4" fill="#111827" />
      <circle cx="130" cy="96" r="11" fill="#fff" />
      <circle cx="130" cy="96" r="6.5" fill="none" stroke="#dc2626" strokeWidth="2.2" />
      <path d="M130 89.5 L130 102.5 M123.5 96 L136.5 96" stroke="#dc2626" strokeWidth="1.8" />
      <path d="M78 112 Q130 128 182 112 L182 121 Q130 138 78 121 Z" fill="#111827" />
      <Laptop />
    </g>
  );
}

function Gear({ x, y, r, reverse }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={`cc-spin ${reverse ? 'reverse' : ''}`}>
        <circle r={r} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="9" strokeDasharray="6 5" />
        <circle r={r - 8} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3.5" />
      </g>
    </g>
  );
}

// Screen frame shared by both scenes; `apps` = title per step
function Screen({ apps, children }) {
  return (
    <g>
      {/* projection beam from laptop to screen */}
      <path d="M150 252 Q176 236 200 190" className="cc-beam" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeDasharray="5 5" />
      <rect x="196" y="30" width="194" height="164" rx="12" fill="rgba(6,16,32,0.55)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      <path d="M196 42 Q196 30 208 30 L378 30 Q390 30 390 42 L390 50 L196 50 Z" fill="rgba(255,255,255,0.12)" />
      <circle cx="208" cy="40" r="3" fill="#f87171" />
      <circle cx="218" cy="40" r="3" fill="#fbbf24" />
      <circle cx="228" cy="40" r="3" fill="#4ade80" />
      {apps.map((app, i) => (
        <text key={app} className={`cc-s${i + 1}`} x="380" y="44" textAnchor="end" fill="rgba(255,255,255,0.75)" fontSize="9.5" fontWeight="700" fontFamily="Poppins, sans-serif">
          {app}
        </text>
      ))}
      {children}
    </g>
  );
}

const LINE = { fill: 'none', stroke: '#e0f2fe', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };

// ── Industrial: drawing → 3D model → machining ─────────────
function IndustrialScene() {
  return (
    <svg viewBox="0 0 400 300" className="cc-scene" role="img" aria-label="Animation: a student draws a part in AutoCAD, models it in 3D and sends it to a CNC machine">
      <defs>
        <pattern id="cc-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0 L0 0 0 20" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#cc-grid)" />
      <Gear x={360} y={250} r={24} />
      <Gear x={318} y={276} r={14} reverse />

      <Screen apps={['AutoCAD · 2D Drawing', 'SolidWorks · 3D Model', 'CNC · Machining']}>
        {/* Step 1 — flange drawing draws itself */}
        <g className="cc-s1">
          <g stroke="rgba(224,242,254,0.35)" strokeWidth="1" strokeDasharray="6 3 2 3">
            <line x1="236" y1="118" x2="350" y2="118" />
            <line x1="293" y1="64" x2="293" y2="172" />
          </g>
          <circle className="cc-draw" pathLength="1" cx="293" cy="118" r="44" {...LINE} />
          <circle className="cc-draw cc-draw-late" pathLength="1" cx="293" cy="118" r="15" {...LINE} />
          {[[-22, -22], [22, -22], [22, 22], [-22, 22]].map(([dx, dy]) => (
            <circle key={`${dx}${dy}`} className="cc-draw cc-draw-late" pathLength="1" cx={293 + dx} cy={118 + dy} r="5" {...LINE} />
          ))}
          <g className="cc-fade-late" stroke="#fbbf24" strokeWidth="1.2" fill="none">
            <path d="M249 178 L337 178 M249 173 L249 183 M337 173 L337 183" />
          </g>
          <text className="cc-fade-late" x="293" y="175" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="monospace">Ø 88</text>
        </g>

        {/* Step 2 — block extrudes into a 3D part */}
        <g className="cc-s2">
          <g className="cc-build">
            <polygon points="293,76 341,102 293,128 245,102" fill="#93c5fd" />
            <polygon points="245,102 293,128 293,170 245,144" fill="#3b82f6" />
            <polygon points="293,128 341,102 341,144 293,170" fill="#1d4ed8" />
            <ellipse cx="293" cy="102" rx="13" ry="7" fill="#1e3a8a" />
          </g>
          <g className="cc-fade-mid" stroke="#fbbf24" strokeWidth="1.2" fill="none">
            <path d="M352 102 L352 144 M348 102 L356 102 M348 144 L356 144" />
          </g>
          <text className="cc-fade-mid" x="358" y="127" fill="#fbbf24" fontSize="9" fontFamily="monospace">40</text>
          <text className="cc-fade-mid" x="208" y="184" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Poppins, sans-serif">Extrude ↑</text>
        </g>

        {/* Step 3 — CNC spindle cuts the part */}
        <g className="cc-s3">
          <rect x="228" y="164" width="130" height="10" rx="3" fill="#64748b" />
          <rect x="236" y="174" width="10" height="14" fill="#475569" />
          <rect x="340" y="174" width="10" height="14" fill="#475569" />
          <polygon points="293,128 323,142 293,156 263,142" fill="#93c5fd" />
          <polygon points="263,142 293,156 293,164 263,150" fill="#3b82f6" />
          <polygon points="293,156 323,142 323,150 293,164" fill="#1d4ed8" />
          <g className="cc-spindle">
            <rect x="279" y="54" width="28" height="22" rx="4" fill="#94a3b8" />
            <rect x="286" y="76" width="14" height="38" fill="#cbd5e1" />
            <rect x="290" y="114" width="6" height="14" fill="#f8fafc" />
          </g>
          <g className="cc-sparks" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
            <line x1="282" y1="138" x2="272" y2="130" />
            <line x1="304" y1="138" x2="315" y2="129" />
            <line x1="286" y1="142" x2="276" y2="146" />
            <line x1="300" y1="142" x2="312" y2="147" />
          </g>
          <g className="cc-done">
            <circle cx="362" cy="74" r="13" fill="#22c55e" />
            <path d="M356 74 L360.5 78.5 L368 70" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </Screen>

      <g transform="translate(-6 62) scale(0.8)">
        <IndustrialKid />
      </g>
    </svg>
  );
}

// ── Automotive: sketch → BIW → wiring harness ──────────────
const CAR_BODY = 'M214 150 L214 136 Q216 128 232 126 L258 122 Q272 104 296 100 L322 100 Q340 102 354 120 L366 124 Q372 128 372 140 L372 150';
const CAR_BASE = 'M214 150 L230 150 M262 150 L322 150 M354 150 L372 150';
const CAR_GLASS = 'M268 122 Q280 108 297 106 L318 106 Q332 108 342 122 Z';

function Wheel({ cx }) {
  return (
    <g transform={`translate(${cx} 150)`}>
      <circle r="14" fill="#0f172a" stroke="#e2e8f0" strokeWidth="2" />
      <g className="cc-wheel">
        <path d="M0 -9 L0 9 M-9 0 L9 0 M-6.4 -6.4 L6.4 6.4 M-6.4 6.4 L6.4 -6.4" stroke="#94a3b8" strokeWidth="1.6" />
      </g>
      <circle r="3" fill="#e2e8f0" />
    </g>
  );
}

function AutomotiveScene() {
  return (
    <svg viewBox="0 0 400 300" className="cc-scene" role="img" aria-label="Animation: a student sketches a car, designs its body structure in CATIA and routes the wiring harness">
      <rect y="268" width="400" height="32" fill="rgba(0,0,0,0.25)" />
      <line x1="0" y1="284" x2="400" y2="284" stroke="rgba(255,255,255,0.35)" strokeWidth="3" strokeDasharray="18 14" className="cc-road" />

      <Screen apps={['Concept Sketch', 'CATIA · BIW', 'CATIA · Wiring Harness']}>
        {/* Step 1 — car sketch draws itself */}
        <g className="cc-s1">
          <path className="cc-draw" pathLength="1" d={CAR_BODY} {...LINE} />
          <path className="cc-draw cc-draw-late" pathLength="1" d={CAR_BASE} {...LINE} />
          <path className="cc-draw cc-draw-late" pathLength="1" d={CAR_GLASS} {...LINE} />
          <circle className="cc-draw cc-draw-late" pathLength="1" cx="246" cy="150" r="14" {...LINE} />
          <circle className="cc-draw cc-draw-late" pathLength="1" cx="338" cy="150" r="14" {...LINE} />
        </g>

        {/* Step 2 — Body-in-White frame lights up */}
        <g className="cc-s2">
          <path d={CAR_BODY} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
          <path d={CAR_BASE} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
          <path className="cc-frame" pathLength="1" d="M232 142 L356 142 M262 124 L290 103 L330 103 L350 124 M304 103 L304 142 M262 124 L262 142 M350 124 L350 142 M232 142 L232 128 M356 142 L366 130" fill="none" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <g className="cc-fade-mid" fill="#fde68a">
            {[[290, 103], [330, 103], [304, 142], [262, 124], [350, 124], [262, 142], [350, 142]].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3.2" />
            ))}
          </g>
          <text className="cc-fade-mid" x="208" y="184" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Poppins, sans-serif">A · B · C Pillars</text>
        </g>

        {/* Step 3 — wiring harness + headlight on + wheels spin */}
        <g className="cc-s3">
          <path d="M392 122 L372 130 L372 136 L392 146 Z" className="cc-beam-light" fill="#fde68a" />
          <path d={CAR_BODY} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
          <path d={CAR_GLASS} fill="rgba(147,197,253,0.18)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <rect x="226" y="132" width="16" height="10" rx="2" fill="#475569" />
          <path className="cc-harness" pathLength="1" d="M242 137 L262 137 Q300 146 340 136 L368 132" fill="none" stroke="#f97316" strokeWidth="2.6" strokeLinecap="round" />
          <path className="cc-harness" pathLength="1" d="M262 137 Q290 120 330 118" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
          <path className="cc-harness" pathLength="1" d="M226 137 L216 136" fill="none" stroke="#a3e635" strokeWidth="2.2" strokeLinecap="round" />
          <circle className="cc-light" cx="369" cy="132" r="4" fill="#fde68a" />
          <circle className="cc-light" cx="216" cy="136" r="3.5" fill="#f87171" />
          <Wheel cx={246} />
          <Wheel cx={338} />
        </g>
      </Screen>

      <g transform="translate(-6 62) scale(0.8)">
        <AutomotiveKid />
      </g>
    </svg>
  );
}

// ── Path data ──────────────────────────────────────────────
const PATHS = [
  {
    key: 'industrial',
    Scene: IndustrialScene,
    question: 'Is Industrial Design my future?',
    steps: ['Draw 2D in AutoCAD', 'Model in 3D', 'Send to manufacturing'],
    title: 'Industrial Design',
    tagline: 'Design the machines and products that build the world.',
    points: [
      'Part modelling, assembly & sheet metal design',
      'GD&T, Tool & Die and Jig & Fixture design',
      'Reverse engineering with metrology tools',
    ],
    programs: [
      { label: 'Masters', duration: '2–3 Months', modules: '15 Modules', to: '/courses/masters-industrial-design' },
      { label: 'Certified', duration: '2 Months', modules: '9 Modules', to: '/courses/certified-industrial-design' },
    ],
    software: ['AutoCAD', 'SolidWorks', 'Creo'],
    careers: 'Product Design · Tool Design · Mechanical Design Engineer',
    link: '/industrial-design',
  },
  {
    key: 'automotive',
    Scene: AutomotiveScene,
    question: 'Is Automotive Design my future?',
    steps: ['Sketch the car', 'Design BIW in CATIA', 'Route the wiring harness'],
    title: 'Automotive Design',
    tagline: 'Shape the cars, bikes and vehicles of tomorrow.',
    points: [
      'BIW body structures, doors & closures',
      'Interior & exterior trims, automotive plastics',
      'Wiring harness design across 9 vehicle zones',
    ],
    programs: [
      { label: 'Masters', duration: '4–5 Months', modules: '4 Modules', to: '/courses/masters-automotive-design' },
      { label: 'Certified', duration: '3–4 Months', modules: '3 Modules', to: '/courses/certified-automotive-design' },
    ],
    software: ['AutoCAD', 'Creo', 'CATIA', 'NX CAD'],
    careers: 'BIW Design · Trim Design · Wiring Harness Engineer',
    link: '/automotive-design',
  },
];

function PathCard({ path, delay }) {
  const { Scene } = path;
  const [paused, setPaused] = useState(false);

  return (
    <AnimatedSection delay={delay} className="cc-col">
      <article className={`cc-card cc-${path.key} ${paused ? 'is-paused' : ''}`}>
        <div className="cc-stage">
          <Scene />
          <div className="cc-bubble">{path.question}</div>
          <button
            type="button"
            className="cc-play"
            onClick={() => setPaused(p => !p)}
            aria-label={paused ? 'Play animation' : 'Pause animation'}
          >
            {paused ? <FiPlay /> : <FiPause />}
          </button>
        </div>

        <div className="cc-steps">
          <ol>
            {path.steps.map((step, i) => (
              <li key={step} className={`cc-step cc-step-${i + 1}`}>
                <span className="cc-step-num">{i + 1}</span>
                <span className="cc-step-label">{step}</span>
              </li>
            ))}
          </ol>
          <div className="cc-progress"><span /></div>
        </div>

        <div className="cc-body">
          <h3>{path.title}</h3>
          <p className="cc-tagline">{path.tagline}</p>

          <ul className="cc-points">
            {path.points.map(pt => (
              <li key={pt}><FiCheck />{pt}</li>
            ))}
          </ul>

          <div className="cc-programs">
            {path.programs.map(pr => (
              <Link key={pr.label} to={pr.to} className="cc-program">
                <span className="cc-program-label">{pr.label}</span>
                <span className="cc-program-meta"><FiClock size={12} /> {pr.duration} · {pr.modules}</span>
              </Link>
            ))}
          </div>

          <div className="cc-software">
            {path.software.map(s => <span key={s}>{s}</span>)}
          </div>

          <p className="cc-careers"><strong>Become a:</strong> {path.careers}</p>

          <Link to={path.link} className="cc-cta">
            Explore {path.title} <FiArrowRight />
          </Link>
        </div>
      </article>
    </AnimatedSection>
  );
}

export default function CourseChooser() {
  return (
    <section className="cc-section">
      <div className="container">
        <AnimatedSection>
          <div className="cc-heading">
            <span className="eyebrow">Choose Your Path</span>
            <h2>Our Top Class Courses for Your <span>Bright Future</span></h2>
            <p>Two industry-ready career paths. Watch the work you will do, then pick your future.</p>
            <div className="cc-question">Which is your future?</div>
          </div>
        </AnimatedSection>

        <div className="cc-grid">
          <PathCard path={PATHS[0]} delay={0} />
          <div className="cc-or" aria-hidden="true"><span>OR</span></div>
          <PathCard path={PATHS[1]} delay={0.12} />
        </div>

        <AnimatedSection delay={0.2}>
          <p className="cc-help">
            Still confused? <Link to="/contact">Talk to our course counsellor <FiArrowRight size={14} /></Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
