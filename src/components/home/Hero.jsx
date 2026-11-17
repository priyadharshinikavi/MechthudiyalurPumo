import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// ── Slides ─────────────────────────────────────────────────
const SLIDES = [
  {
    id: 1,
    image: '/banner1.jpg',
    showStats: true,   // stats overlay only on slide 1
  },
  {
    id: 2,
    image: '/banner2.jpg',
    showStats: false,
  },
];

// ── Animated Counter ───────────────────────────────────────
function Counter({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    setCount(0);
    startRef.current = null;
    const numeric = parseInt(target.replace(/\D/g, ''), 10);

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * numeric));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return (
    <span>
      {count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

// ── Stats Data ─────────────────────────────────────────────
const STATS = [
  { num: '7500', suffix: '+', label: 'Students Trained Per Year',       icon: '🎓' },
  { num: '200',  suffix: '+', label: 'Industrial Projects Completed',   icon: '🏭' },
  { num: '5000', suffix: '+', label: 'Students Placed Per Year',        icon: '💼' },
  { num: '50',   suffix: '+', label: 'Awards Won',                      icon: '🏆' },
];

// ── Hero Component ─────────────────────────────────────────
export default function Hero() {
  const [current, setCurrent]   = useState(0);
  const [animating, setAnimating] = useState(false);
  const [countKey, setCountKey]   = useState(0);
  const intervalRef = useRef(null);

  const startAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => goTo('next'), 5000);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(prev => {
        const next = dir === 'next'
          ? (prev + 1) % SLIDES.length
          : (prev - 1 + SLIDES.length) % SLIDES.length;
        if (SLIDES[next].showStats) setCountKey(k => k + 1);
        return next;
      });
      setAnimating(false);
    }, 400);
    startAuto();
  };

  const slide = SLIDES[current];

  return (
    <section className="hero-slider-section">

      {/* ── Slides ─────────────────────────────────────── */}
      <div className={`hero-slide-wrap ${animating ? 'fading' : 'visible'}`}>
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`hero-slide ${i === current ? 'active' : ''}`}
          >
            <img
              src={s.image}
              alt={`Pumo Technovation banner ${s.id}`}
              className="hero-slide-img"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* ── Stats Overlay — slide 1 only ─────────────── */}
      {slide.showStats && (
        <div className="hero-stats-overlay">
          {STATS.map((stat, i) => (
            <div key={i} className="hero-stat-box">
              <div className="hsb-icon">{stat.icon}</div>
              <div className="hsb-number">
                <Counter key={countKey} target={stat.num} suffix={stat.suffix} />
              </div>
              <div className="hsb-label">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* ── Arrow Controls ────────────────────────────── */}
      <button
        className="hero-arrow hero-arrow-left"
        onClick={() => goTo('prev')}
        aria-label="Previous slide"
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        className="hero-arrow hero-arrow-right"
        onClick={() => goTo('next')}
        aria-label="Next slide"
      >
        <FiChevronRight size={28} />
      </button>

      {/* ── Dot Indicators ───────────────────────────── */}
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => {
              if (i !== current) {
                if (SLIDES[i].showStats) setCountKey(k => k + 1);
                setCurrent(i);
                startAuto();
              }
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
