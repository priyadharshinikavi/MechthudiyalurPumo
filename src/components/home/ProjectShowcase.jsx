import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { projects } from '../../data/projects';

export default function ProjectShowcase() {
  const featured = projects.slice(0, 6);

  return (
    <section className="section-pad section-bg-light">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Student Work</span>
          <h2>Engineering Project Showcase</h2>
          <div className="underline-bar" />
          <p>Real design projects created by students across industrial and automotive disciplines.</p>
        </div>

        <div className="row g-4">
          {featured.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="project-card">
                <div className="project-card-img">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-card-body">
                  <div className="mb-2">
                    <span
                      style={{
                        fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-blue)',
                        textTransform: 'uppercase', letterSpacing: '0.08em',
                      }}
                    >
                      {project.categoryLabel}
                    </span>
                  </div>
                  <h6
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px', color: 'var(--dark-text)' }}
                  >
                    {project.title}
                  </h6>
                  <p style={{ fontSize: '0.82rem', color: 'var(--gray-text)', marginBottom: '12px', lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  <div>
                    {project.software.map((s) => (
                      <span key={s} className="project-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/projects">
            <button className="btn btn-outline-primary px-5 py-3">
              View All Projects <FiArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
