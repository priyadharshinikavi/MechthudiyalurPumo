import { Link } from 'react-router-dom';
import { FiClock, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import CurriculumAccordion from '../components/ui/CurriculumAccordion';
import EnquiryForm from '../components/ui/EnquiryForm';
import FAQ from '../components/ui/FAQ';
import { automotiveSyllabus, automotiveCertSyllabus } from '../data/automotiveSyllabus';
import { automotiveFaqs } from '../data/faqs';

const software = ['AutoCAD', 'Creo', 'CATIA', 'NX CAD (Certified)'];

const objectives = [
  'Understand automotive body structure design principles',
  'Design automotive plastics — interior and exterior trim components',
  'Model BIW (Body in White) structural components',
  'Complete wiring harness design across 9 vehicle zones',
  'Understand OEM and Tier-1 supply chain design requirements',
  'Build a professional automotive design portfolio',
  'Prepare for automotive design engineering career roles',
];

const careers = [
  'Automotive Design Engineer', 'BIW Design Engineer', 'Wiring Harness Designer',
  'Interior Trim Designer', 'Exterior Trim Designer', 'Automotive Plastics Engineer',
  'CATIA Design Engineer', 'OEM Design Engineer', 'Tier-1 Automotive Engineer',
];

export default function AutomotiveDesign() {
  return (
    <main>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Automotive Design</span>
          <h1>Automotive Design Programs</h1>
          <p style={{ maxWidth: 650 }}>
            Become an automotive design engineer — master BIW structures, interior and exterior trims,
            automotive plastics, and complete wiring harness design using CATIA, Creo and NX CAD.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/contact"><button className="btn btn-primary px-4 py-2">Enquire Now</button></Link>
            <Link to="/courses"><button className="btn btn-outline-light px-4 py-2">View All Courses</button></Link>
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <section className="section-pad section-bg-light">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Available Programs</span>
            <h2>Automotive Design Courses</h2>
            <div className="underline-bar" />
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { title: "Masters in Automotive Design", duration: "4–5 Months", badge: "Master's Program", badgeType: "masters", sw: ['AutoCAD', 'Creo', 'CATIA'], modules: 4, id: 'masters-automotive-design', desc: "The most comprehensive automotive design program — covering the full vehicle development cycle from plastics through BIW and wiring harness design." },
              { title: "Certified in Automotive Design", duration: "3–4 Months", badge: "Certification Program", badgeType: "certified", sw: ['AutoCAD', 'Creo', 'CATIA', 'NX CAD'], modules: 3, id: 'certified-automotive-design', desc: "Automotive design certification covering body structures, BIW components, and wiring harness fundamentals across 4 industry software tools." },
            ].map((c, i) => (
              <div key={i} className="col-lg-5 col-md-8">
                <div className="eng-card p-4 h-100">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <span className={`badge-${c.badgeType}`}>{c.badge}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--gray-text)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <FiClock size={12} /> {c.duration}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 12 }}>{c.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', marginBottom: 16, lineHeight: 1.65 }}>{c.desc}</p>
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {c.sw.map(s => <span key={s} className="software-chip">{s}</span>)}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--primary-blue)', fontWeight: 600, marginBottom: 16 }}>
                    📚 {c.modules} Core Modules
                  </p>
                  <div className="d-flex gap-2">
                    <Link to={`/courses/${c.id}`} className="btn btn-primary flex-fill">View Curriculum</Link>
                    <Link to="/contact" className="btn btn-outline-primary flex-fill">Enquire <FiArrowRight size={13} /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="section-pad">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="eyebrow">Industry Overview</span>
              <h2 className="mt-2 mb-4">The Automotive Design Industry</h2>
              <p style={{ color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 16 }}>
                The automotive industry is one of the largest employers of mechanical design engineers
                globally. From vehicle body structure engineering to interior plastics and electrical
                systems, qualified automotive design engineers are in continuous demand.
              </p>
              <p style={{ color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 16 }}>
                Our programs cover the complete design lifecycle — from concept sketching through
                production-ready 3D models — using the same tools and processes used by OEM
                manufacturers and Tier-1 automotive suppliers.
              </p>
              <div className="row g-3 mt-2">
                {['BIW Design', 'Interior Trims', 'Exterior Trims', 'Wiring Harness', 'Automotive Plastics', 'OEM Standards'].map((tag, i) => (
                  <div key={i} className="col-auto">
                    <span className="software-chip" style={{ fontSize: '0.85rem', padding: '5px 14px' }}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80"
                  alt="Automotive Design Engineering"
                  style={{ width: '100%', height: 380, objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-pad section-bg-light">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What You'll Learn</span>
            <h2>Course Objectives</h2>
            <div className="underline-bar" />
          </div>
          <div className="learn-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
            {objectives.map((obj, i) => (
              <div key={i} className="learn-item">
                <FiCheckCircle className="check-icon" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masters Syllabus */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Masters Program</span>
            <h2>Masters in Automotive Design — Full Curriculum</h2>
            <div className="underline-bar" />
            <p>4 comprehensive modules covering the complete automotive design domain.</p>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <CurriculumAccordion syllabus={automotiveSyllabus} title="Masters — 4 Modules" />
          </div>
        </div>
      </section>

      {/* Certification Syllabus */}
      <section className="section-pad section-bg-light">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Certification Program</span>
            <h2>Certified in Automotive Design — Curriculum</h2>
            <div className="underline-bar" />
            <p>Core 3 modules for the automotive design certification pathway.</p>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <CurriculumAccordion syllabus={automotiveCertSyllabus} title="Certification — 3 Modules" />
          </div>
        </div>
      </section>

      {/* OEM / Tier-1 Section */}
      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Industry Structure</span>
            <h2>OEM &amp; Tier-1 Companies</h2>
            <div className="underline-bar" />
            <p>Our curriculum is aligned with what both OEM manufacturers and Tier-1 automotive suppliers expect from their design engineers.</p>
          </div>
          <div className="row g-4">
            {[
              { title: 'OEM Companies', icon: '🏭', desc: 'Original Equipment Manufacturers are the vehicle manufacturers themselves. OEM design teams handle full vehicle programs, BIW architecture, and advanced design decisions.' },
              { title: 'Tier-1 Suppliers', icon: '⚙️', desc: 'Tier-1 companies supply complete subsystems directly to OEMs — including door panels, dashboards, wiring harnesses, and bumper assemblies. This is a major employer of automotive design engineers.' },
            ].map((item, i) => (
              <div key={i} className="col-md-6">
                <div className="eng-card p-4 h-100 d-flex gap-4">
                  <div style={{ fontSize: '3rem', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 10 }}>{item.title}</h5>
                    <p style={{ color: 'var(--gray-text)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="section-pad section-bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow" style={{ color: 'var(--accent-blue)' }}>Career Paths</span>
            <h2 style={{ color: '#fff' }}>Automotive Career Opportunities</h2>
            <div className="underline-bar" />
          </div>
          <div className="text-center">
            {careers.map((c, i) => (
              <span key={i} className="career-tag m-2">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container">
          <FAQ faqs={automotiveFaqs} title="Automotive Design — FAQ" />
        </div>
      </section>

      {/* Enquiry */}
      <section className="enquiry-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Enquire About Automotive Design Programs
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                Our team will help you understand the difference between Masters and Certification programs and choose the right fit.
              </p>
            </div>
            <div className="col-lg-7">
              <EnquiryForm selectedCourse="Masters in Automotive Design" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
