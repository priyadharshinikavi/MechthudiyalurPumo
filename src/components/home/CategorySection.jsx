import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  {
    icon: '⚙️',
    title: 'Industrial Design',
    desc: 'Part Modelling, Assembly, Sheet Metal, Tool & Die, Jig & Fixture',
    link: '/industrial-design',
    color: '#1565c0',
  },
  {
    icon: '🚗',
    title: 'Automotive Design',
    desc: 'BIW, Trims, Wiring Harness, Automotive Plastics, CATIA',
    link: '/automotive-design',
    color: '#0891b2',
  },
  {
    icon: '🎓',
    title: "Master's Programs",
    desc: "Comprehensive 2–5 month Master's programs with full industry curriculum",
    link: '/courses',
    color: '#f59e0b',
  },
  {
    icon: '📜',
    title: 'Certification Programs',
    desc: 'Focused 2–4 month certification programs for core CAD skills',
    link: '/courses',
    color: '#28a745',
  },
];

export default function CategorySection() {
  return (
    <section className="section-pad section-bg-light">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">What We Offer</span>
          <h2>Explore Course Categories</h2>
          <div className="underline-bar" />
          <p>Choose from our carefully designed engineering education programs built for the modern industry.</p>
        </div>

        <div className="row g-4">
          {categories.map((cat, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div
                className="eng-card p-4 text-center h-100"
                style={{ borderTop: `4px solid ${cat.color}` }}
              >
                <div style={{ fontSize: '2.8rem', marginBottom: '16px' }}>{cat.icon}</div>
                <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '10px' }}>
                  {cat.title}
                </h5>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', marginBottom: '20px', lineHeight: 1.6 }}>
                  {cat.desc}
                </p>
                <Link
                  to={cat.link}
                  style={{ color: cat.color, fontWeight: 700, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                  Explore <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
