import { Link } from 'react-router-dom';
import { FiClock, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import CurriculumAccordion from '../components/ui/CurriculumAccordion';
import EnquiryForm from '../components/ui/EnquiryForm';
import FAQ from '../components/ui/FAQ';
import { industrialSyllabus, industrialCertSyllabus } from '../data/industrialSyllabus';
import { industrialFaqs } from '../data/faqs';

const software = ['AutoCAD', 'SolidWorks', 'Creo (Masters)'];

const objectives = [
  'Understand CADD fundamentals and industry design standards',
  'Create 2D drawings and 3D parametric models using industry software',
  'Design parts, assemblies, sheet metal, and weldments',
  'Apply GD&T in engineering drawings for manufacturing',
  'Design tools, dies, jigs and fixtures for production',
  'Perform reverse engineering using metrology instruments',
  'Build a strong project portfolio for OEM job applications',
];

const careers = [
  'CAD Design Engineer', 'Product Design Engineer', 'Mechanical Design Engineer',
  'Tool Design Engineer', 'Jig & Fixture Design Engineer', 'Reverse Engineering Specialist',
  'Draughtsman / CAD Modeller', 'Manufacturing Support Engineer',
];

export default function IndustrialDesign() {
  return (
    <main>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">Industrial Design</span>
          <h1>Industrial Design Programs</h1>
          <p style={{ maxWidth: 600 }}>
            Comprehensive training in CADD, 3D parametric design, sheet metal, surface modelling,
            tool &amp; die, and jig &amp; fixture design using AutoCAD, SolidWorks and Creo.
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
            <h2>Industrial Design Courses</h2>
            <div className="underline-bar" />
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { title: "Masters in Industrial Design", duration: "2–3 Months", badge: "Master's Program", badgeType: "masters", sw: ['AutoCAD', 'SolidWorks', 'Creo'], modules: 15, id: 'masters-industrial-design', desc: "Complete industrial design curriculum covering all 15 modules from CADD basics to advanced Tool & Die and Jig & Fixture design." },
              { title: "Certified in Industrial Design", duration: "2 Months", badge: "Certification Program", badgeType: "certified", sw: ['AutoCAD', 'SolidWorks'], modules: 9, id: 'certified-industrial-design', desc: "Core industrial design certification covering CADD fundamentals through professional engineering drawings and assemblies." },
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
                    📚 {c.modules} Modules
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

      {/* Overview */}
      <section className="section-pad">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="eyebrow">Course Overview</span>
              <h2 className="mt-2 mb-4">What is Industrial Design?</h2>
              <p style={{ color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 16 }}>
                Industrial Design training equips you with the skills to design, model, and document
                mechanical components and systems using industry-standard CAD software. From 2D drafting
                to complex 3D surface modelling, students learn the full design lifecycle.
              </p>
              <p style={{ color: 'var(--gray-text)', lineHeight: 1.8, marginBottom: 24 }}>
                Our programs are aligned with what OEM factories, Tier-1 suppliers, valve and pump
                industries, tool rooms, and fabrication companies actually need from their engineering teams.
              </p>
              {/* Software */}
              <div>
                <p style={{ fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-heading)' }}>Software Covered:</p>
                <div className="d-flex flex-wrap gap-2">
                  {software.map(s => <span key={s} className="software-chip" style={{ fontSize: '0.85rem', padding: '5px 14px' }}>{s}</span>)}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
                <img
                  src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=700&q=80"
                  alt="Industrial Design CAD Training"
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
            <h2>Masters in Industrial Design — Full Curriculum</h2>
            <div className="underline-bar" />
            <p>All 15 modules from CADD fundamentals to advanced industrial projects.</p>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <CurriculumAccordion syllabus={industrialSyllabus} title="Masters — 15 Modules" />
          </div>
        </div>
      </section>

      {/* Certification Syllabus */}
      <section className="section-pad section-bg-light">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Certification Program</span>
            <h2>Certified in Industrial Design — Curriculum</h2>
            <div className="underline-bar" />
            <p>Core 9 modules for the certification pathway.</p>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <CurriculumAccordion syllabus={industrialCertSyllabus} title="Certification — 9 Modules" />
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="section-pad section-bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow" style={{ color: 'var(--accent-blue)' }}>Career Paths</span>
            <h2 style={{ color: '#fff' }}>Career Opportunities</h2>
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
          <FAQ faqs={industrialFaqs} title="Industrial Design — FAQ" />
        </div>
      </section>

      {/* Enquiry */}
      <section className="enquiry-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: 16 }}>
                Enquire About Industrial Design Programs
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                Our team will help you choose between the Masters and Certification programs based on your goals and background.
              </p>
            </div>
            <div className="col-lg-7">
              <EnquiryForm selectedCourse="Masters in Industrial Design" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
