import { useState, useMemo } from 'react';
import { projects, projectCategories } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Student Work</span>
          <h1>Engineering Project Showcase</h1>
          <p>Real design projects across Industrial and Automotive disciplines — built by our students using industry-standard software.</p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="section-pad">
        <div className="container">
          {/* Category Filters */}
          <div className="filter-pills">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: 'var(--gray-text)', marginBottom: 32, fontSize: '0.88rem' }}>
            Showing <strong>{filtered.length}</strong> projects
          </p>

          {/* Grid */}
          <div className="row g-4">
            {filtered.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div className="project-card">
                  <div className="project-card-img">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="project-card-body">
                    <div className="mb-2">
                      <span style={{
                        fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-blue)',
                        textTransform: 'uppercase', letterSpacing: '0.08em',
                      }}>
                        {project.categoryLabel}
                      </span>
                    </div>
                    <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8, color: 'var(--dark-text)' }}>
                      {project.title}
                    </h5>
                    <p style={{ fontSize: '0.82rem', color: 'var(--gray-text)', marginBottom: 14, lineHeight: 1.65 }}>
                      {project.description}
                    </p>
                    <div className="d-flex flex-wrap gap-1 mb-2">
                      {project.software.map(s => (
                        <span key={s} className="software-chip">{s}</span>
                      ))}
                    </div>
                    <div>
                      {project.tags.map(t => (
                        <span key={t} className="project-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-results">
              <div style={{ fontSize: '3rem', marginBottom: 12 }}>📂</div>
              <h4>No projects in this category yet</h4>
              <p>Check back soon or explore another category.</p>
              <button className="btn btn-primary mt-3" onClick={() => setActiveCategory('all')}>
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad section-bg-dark">
        <div className="container text-center">
          <span style={{ color: 'var(--accent-blue)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Start Building Your Portfolio
          </span>
          <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', margin: '16px 0', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Create Projects Like These in Our Programs
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 540, margin: '0 auto 28px' }}>
            All programs include hands-on project work from real industrial and automotive design scenarios.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/courses" className="btn btn-primary px-4 py-2">Explore Courses</a>
            <a href="/contact" className="btn btn-outline-light px-4 py-2">Enquire Now</a>
          </div>
        </div>
      </section>
    </main>
  );
}
