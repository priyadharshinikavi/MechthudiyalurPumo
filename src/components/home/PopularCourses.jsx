import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { courses } from '../../data/courses';
import CourseCard from '../ui/CourseCard';

export default function PopularCourses() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Our Programs</span>
          <h2>Popular Courses</h2>
          <div className="underline-bar" />
          <p>Industry-aligned programs designed to make you job-ready from day one.</p>
        </div>

        <div className="row g-4">
          {courses.map((course) => (
            <div key={course.id} className="col-lg-3 col-md-6">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/courses">
            <button className="btn btn-outline-primary px-5 py-3" style={{ fontSize: '0.95rem' }}>
              View All Courses <FiArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
