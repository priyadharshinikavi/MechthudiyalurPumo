import { Link } from 'react-router-dom';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { FaTools } from 'react-icons/fa';

export default function CourseCard({ course }) {
  const {
    id, title, badge, badgeType, duration, software,
    shortDescription, thumbnailImage, categoryLabel,
  } = course;

  return (
    <div className="course-card h-100" style={{ position: 'relative' }}>
      {/* Image with zoom effect */}
      <div className="course-card-img">
        <img
          src={thumbnailImage}
          alt={title}
          loading="lazy"
          onLoad={e => e.currentTarget.classList.add('loaded')}
          style={{ transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease' }}
        />
        <div className="course-card-img-overlay">
          <span className={`badge-${badgeType}`}>{badge}</span>
        </div>
        <div className="course-card-category">{categoryLabel}</div>
      </div>

      {/* Body */}
      <div className="course-card-body">
        <h5 className="course-card-title">{title}</h5>
        <p className="course-card-desc">{shortDescription}</p>

        {/* Meta */}
        <div className="course-meta">
          <FiClock size={14} />
          <span>{duration}</span>
        </div>

        {/* Software chips */}
        <div className="course-software-row">
          <span className="d-flex align-items-center me-1">
            <FaTools size={12} className="text-primary me-1" />
          </span>
          {software.map((s) => (
            <span key={s} className="software-chip">{s}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="course-card-actions">
          <Link
            to={`/courses/${id}`}
            className="btn btn-primary"
            style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            View Curriculum
          </Link>
          <Link
            to="/contact"
            className="btn btn-outline-primary"
            style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Enquire <FiArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
