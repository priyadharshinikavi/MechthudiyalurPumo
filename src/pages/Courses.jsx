import { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { courses } from '../data/courses';
import CourseCard from '../components/ui/CourseCard';
import EnquiryForm from '../components/ui/EnquiryForm';

const filters = [
  { id: 'all', label: 'All Courses' },
  { id: 'industrial-design', label: 'Industrial Design' },
  { id: 'automotive-design', label: 'Automotive Design' },
  { id: 'masters', label: "Master's Programs" },
  { id: 'certified', label: 'Certification Programs' },
];

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchFilter =
        activeFilter === 'all' ||
        c.category === activeFilter ||
        (activeFilter === 'masters' && c.badgeType === 'masters') ||
        (activeFilter === 'certified' && c.badgeType === 'certified');
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.software.some((s) => s.toLowerCase().includes(q)) ||
        c.categoryLabel.toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [activeFilter, search]);

  return (
    <main>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Our Programs</span>
          <h1>Engineering Design Courses</h1>
          <p>Choose from our industry-aligned programs in Industrial Design and Automotive Design.</p>
        </div>
      </div>

      {/* Courses Section */}
      <section className="section-pad">
        <div className="container">
          {/* Search */}
          <div className="course-search-bar">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by course name, software…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter Pills */}
          <div className="filter-pills">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`filter-pill ${activeFilter === f.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p style={{ textAlign: 'center', color: 'var(--gray-text)', marginBottom: 32, fontSize: '0.88rem' }}>
            Showing <strong>{filtered.length}</strong> of {courses.length} courses
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="row g-4">
              {filtered.map((course) => (
                <div key={course.id} className="col-lg-3 col-md-6">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔍</div>
              <h4>No courses found</h4>
              <p>Try a different search term or filter.</p>
              <button
                className="btn btn-primary mt-3"
                onClick={() => { setSearch(''); setActiveFilter('all'); }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="enquiry-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 16 }}>
                Not Sure Which Course to Choose?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                Our course counsellors will help you pick the right program based on your background and career goals.
              </p>
            </div>
            <div className="col-lg-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
