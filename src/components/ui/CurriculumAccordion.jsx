import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function CurriculumAccordion({ syllabus, title = 'Course Curriculum' }) {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="fw-bold" style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>
          {title}
        </h3>
        <span
          className="badge rounded-pill"
          style={{ background: 'var(--light-blue)', color: 'var(--primary-blue)', fontFamily: 'var(--font-heading)', fontSize: '0.85rem', padding: '6px 14px' }}
        >
          {syllabus.length} Modules
        </span>
      </div>

      <div className="curriculum-accordion">
        {syllabus.map((module) => (
          <div key={module.id} className="accordion-item">
            <button
              className={`accordion-button w-100 d-flex align-items-center justify-content-between p-4 ${openId === module.id ? '' : 'collapsed'}`}
              onClick={() => toggle(module.id)}
              style={{ cursor: 'pointer', border: 'none', background: 'none' }}
            >
              <div className="d-flex align-items-center gap-3">
                <span
                  className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{
                    width: 36, height: 36, flexShrink: 0,
                    background: openId === module.id ? 'var(--primary-blue)' : 'var(--light-blue)',
                    color: openId === module.id ? '#fff' : 'var(--primary-blue)',
                    fontSize: '0.8rem', fontFamily: 'var(--font-heading)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {module.id}
                </span>
                <div className="text-start">
                  <div
                    style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-blue)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                  >
                    {module.module}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--dark-text)' }}>
                    {module.title}
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 flex-shrink-0">
                {module.duration && (
                  <span
                    className="d-none d-sm-inline"
                    style={{ fontSize: '0.78rem', color: 'var(--gray-text)', fontWeight: 500 }}
                  >
                    {module.duration}
                  </span>
                )}
                <span style={{ color: 'var(--primary-blue)', fontSize: '1.1rem' }}>
                  {openId === module.id ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>
            </button>

            {openId === module.id && (
              <div className="accordion-body px-4 pb-4">
                <ul className="topic-list ps-0">
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
