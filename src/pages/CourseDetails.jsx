import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FiArrowLeft, FiClock, FiArrowRight, FiCheckCircle,
  FiChevronDown, FiBookOpen, FiBriefcase, FiAward,
  FiMessageSquare, FiTool
} from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';

import { getCourseById } from '../data/courses';
import courseDetailData, { PLACEMENTS } from '../data/courseDetailData';
import { industrialSyllabus, industrialCertSyllabus } from '../data/industrialSyllabus';
import { automotiveSyllabus, automotiveCertSyllabus } from '../data/automotiveSyllabus';
import { generalFaqs, industrialFaqs, automotiveFaqs } from '../data/faqs';

import AnimatedSection from '../components/ui/AnimatedSection';
import SoftwareSection from '../components/ui/SoftwareSection';
import EnquiryForm from '../components/ui/EnquiryForm';
import FAQ from '../components/ui/FAQ';
import PlacementSection from '../components/ui/PlacementSection';
import CourseShowcase from '../components/ui/CourseShowcase';
import CourseIntroBlock from '../components/ui/CourseIntroBlock';
import SketchConstraintsSection from '../components/ui/SketchConstraintsSection';
import ProjectionSection from '../components/ui/ProjectionSection';
import PartModellingSection from '../components/ui/PartModellingSection';
import AssemblySection from '../components/ui/AssemblySection';
import SheetMetalSection from '../components/ui/SheetMetalSection';
import WeldmentsSection from '../components/ui/WeldmentsSection';
import DraftingSection from '../components/ui/DraftingSection';
import ProjectDrawingSection from '../components/ui/ProjectDrawingSection';
import SurfaceSection from '../components/ui/SurfaceSection';
import ToolDieSection from '../components/ui/ToolDieSection';
import JigFixtureSection from '../components/ui/JigFixtureSection';
import ReverseEngSection from '../components/ui/ReverseEngSection';
import GdtSection from '../components/ui/GdtSection';
import ProjectSection from '../components/ui/ProjectSection';
import IndustriesSection from '../components/ui/IndustriesSection';
import { midShowcase, midIntro } from '../data/mastersIndustrialShowcase';

// Course-specific design showcases (add more courses here)
const SHOWCASES = {
  'masters-industrial-design': midShowcase,
};

// Course-specific intro block: logos left, feature image right
const INTROS = {
  'masters-industrial-design': midIntro,
};

// Sections removed from specific course pages (ids match NAV_SECTIONS)
const HIDDEN_SECTIONS = {
  // 'nav' = the sticky section-menu bar under the banner
  'masters-industrial-design': [
    'overview', 'software', 'curriculum', 'nav',
    'showcase', 'projects', 'skills', 'careers', 'placements', 'faq',
  ],
};
import { useScrollReveal } from '../hooks/useScrollReveal';

import '../styles/course-detail-enhanced.css';

// ── Helper: get syllabus by key ─────────────────────────────
function getSyllabus(key) {
  if (key === 'industrial')      return industrialSyllabus;
  if (key === 'industrial-cert') return industrialCertSyllabus;
  if (key === 'automotive')      return automotiveSyllabus;
  if (key === 'automotive-cert') return automotiveCertSyllabus;
  return [];
}

function getFaqs(key) {
  if (key === 'industrial' || key === 'industrial-cert') return industrialFaqs;
  if (key === 'automotive' || key === 'automotive-cert') return automotiveFaqs;
  return generalFaqs;
}

// ── Animated Curriculum Accordion ───────────────────────────
function ModuleAccordion({ syllabus }) {
  const [openId, setOpenId] = useState(1);
  const [openCount, setOpenCount] = useState(1);
  const [ref, visible] = useScrollReveal(0.08);

  const toggle = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
      setOpenCount(prev => Math.max(prev, id));
    }
  };

  const progress = Math.round((openCount / syllabus.length) * 100);

  return (
    <div ref={ref}>
      {/* Progress Indicator */}
      <div className={`cd-curriculum-progress reveal ${visible ? 'visible' : ''}`}>
        <FiBookOpen style={{ color: 'var(--primary-blue)', fontSize: '1.1rem' }} />
        <span style={{ fontSize: '0.82rem', color: 'var(--gray-text)', fontWeight: 600 }}>
          Curriculum Explorer
        </span>
        <div className="cd-progress-bar-wrap">
          <div className="cd-progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="cd-progress-label">{openCount}/{syllabus.length} explored</span>
      </div>

      {/* Modules */}
      {syllabus.map((module, idx) => (
        <div
          key={module.id}
          className={`cd-module-card ${openId === module.id ? 'open' : ''} reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: `${idx * 0.04}s` }}
        >
          <button
            className="cd-module-btn"
            onClick={() => toggle(module.id)}
            aria-expanded={openId === module.id}
          >
            <div className="d-flex align-items-center gap-3 flex-1">
              <div className="cd-module-num">{module.id}</div>
              <div className="cd-module-info">
                <div className="cd-module-label">{module.module}</div>
                <div className="cd-module-title">{module.title}</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              {module.duration && (
                <span className="cd-module-duration d-none d-sm-inline">
                  <FiClock size={12} style={{ marginRight: 4 }} />
                  {module.duration}
                </span>
              )}
              <FiChevronDown className="cd-module-chevron" />
            </div>
          </button>

          <div className="cd-module-body">
            <div className="cd-module-body-inner">
              <div className="cd-module-topics">
                {module.topics.map((topic, i) => (
                  <div key={i} className="cd-topic-item">
                    <span className="cd-topic-dot" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Section Nav ──────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: 'overview',  label: '📖 Overview' },
  { id: 'software',  label: '🖥️ Software' },
  { id: 'curriculum', label: '📚 Curriculum' },
  { id: 'showcase',  label: '🖼️ Showcase', showcaseOnly: true },
  { id: 'projects',  label: '🏗️ Projects' },
  { id: 'skills',    label: '⚡ Skills' },
  { id: 'careers',   label: '💼 Careers' },
  { id: 'placements', label: '🎓 Placements' },
  { id: 'enquiry',   label: '✉️ Enquire' },
];

function SectionNav({ hasShowcase, hidden }) {
  const sections = NAV_SECTIONS.filter(
    (s) => (!s.showcaseOnly || hasShowcase) && !hidden.has(s.id),
  );
  const [active, setActive] = useState(sections[0]?.id);

  const scrollTo = (id) => {
    const el = document.getElementById(`cd-${id}`);
    if (el) {
      const offset = 130;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setActive(id);
  };

  return (
    <div className="cd-section-nav">
      <div className="container">
        <div className="cd-section-nav-inner">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              className={`cd-nav-pill ${active === id ? 'active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────
export default function CourseDetails() {
  const { id } = useParams();
  const course = getCourseById(id);
  const detailData = courseDetailData[id];
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    // Trigger hero background animation
    const timer = setTimeout(() => setBgLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [id]);

  if (!course) {
    return (
      <div className="text-center py-5" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>⚙️</div>
        <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: 8 }}>Course Not Found</h2>
        <p className="text-muted mb-4">The course you're looking for doesn't exist.</p>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  const syllabus = getSyllabus(course.syllabusKey);
  const faqs = getFaqs(course.syllabusKey);
  const detail = detailData || {};
  const softwareSections = detail.softwareSections || [];
  const projects = detail.projects || [];
  const skills = detail.skills || [];
  const placements = PLACEMENTS[id] || [];
  const showcase = SHOWCASES[id] || [];
  const hidden = new Set(HIDDEN_SECTIONS[id] || []);
  const lightHero = Boolean(detail.heroImage); // white banner with a feature image
  const exploreTarget = !hidden.has('curriculum')
    ? 'cd-curriculum'
    : showcase.length > 0 && !hidden.has('showcase') ? 'cd-showcase' : 'cd-intro';
  const overview = detail.overview || {};

  const careerIcons = ['💼', '🏭', '🔩', '🚗', '⚙️', '🎯', '🛠️', '🔌', '📐'];

  return (
    <main>
      {/* ── SECTION 1: HERO ─────────────────────────── */}
      <section className={`cd-hero ${lightHero ? 'cd-hero--light' : ''}`}>
        {/* Background Image (dark theme only) */}
        {!lightHero && (
          <>
            <div
              className={`cd-hero-bg ${bgLoaded ? 'loaded' : ''}`}
              style={{ backgroundImage: `url(${detail.heroBg || course.image})` }}
            />
            <div className="cd-hero-overlay" />
          </>
        )}
        <div className="cd-hero-grid" />

        <div className="container cd-hero-content">
          {/* Back link */}
          <Link
            to="/courses"
            className="d-inline-flex align-items-center gap-2 mb-4"
            style={{ color: lightHero ? '#5b6474' : 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 600 }}
          >
            <FiArrowLeft size={14} /> All Courses
          </Link>

          <div className="row align-items-center g-5">
            <div className={lightHero ? 'col-lg-7' : 'col-lg-8'}>
              {/* Eyebrow */}
              <div className="cd-hero-eyebrow">
                <span className={`badge-${course.badgeType}`}
                  style={{ background: 'transparent', border: 'none', padding: 0, fontSize: '0.78rem', color: lightHero ? 'var(--primary-blue)' : '#60b4ff', fontWeight: 700 }}
                >
                  {course.badge}
                </span>
                <span style={{ opacity: 0.5 }}>·</span>
                <span>{course.categoryLabel}</span>
              </div>

              {/* Title */}
              <h1>
                {course.title.split(' ').map((word, i) =>
                  ['Industrial', 'Automotive', 'Masters', 'Certified'].includes(word)
                    ? <span key={i}>{word} </span>
                    : <span key={i} className={lightHero ? 'cd-h1-plain' : undefined} style={lightHero ? undefined : { color: '#fff' }}>{word} </span>
                )}
              </h1>

              {detail.heroTagline && (
                <p style={{ color: lightHero ? '#5b6474' : 'rgba(255,255,255,0.6)', fontSize: '0.95rem', fontWeight: 500, marginBottom: 20 }}>
                  {detail.heroTagline}
                </p>
              )}

              <p className="cd-hero-desc">{course.description}</p>

              {/* Meta */}
              <div className="cd-hero-meta">
                <div className="cd-meta-item">
                  <div className="cd-meta-label">Duration</div>
                  <div className="cd-meta-value">⏱ {course.duration}</div>
                </div>
                <div className="cd-meta-item">
                  <div className="cd-meta-label">Level</div>
                  <div className="cd-meta-value">📊 {course.level}</div>
                </div>
                <div className="cd-meta-item">
                  <div className="cd-meta-label">Modules</div>
                  <div className="cd-meta-value">📚 {syllabus.length}</div>
                </div>
                <div className="cd-meta-item">
                  <div className="cd-meta-label">Software Tools</div>
                  <div className="cd-meta-value">🖥️ {course.software.length}</div>
                </div>
              </div>

              {/* Software pills */}
              <div className="cd-hero-software">
                {course.software.map(s => (
                  <span key={s} className="cd-sw-pill">{s}</span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="cd-hero-actions">
                <Link to="/contact" className="cd-btn-primary">
                  <FiMessageSquare size={16} /> Enquire Now
                </Link>
                <button
                  className="cd-btn-secondary"
                  onClick={() => {
                    document.getElementById(exploreTarget)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <FiBookOpen size={16} /> {exploreTarget === 'cd-curriculum' ? 'Explore Curriculum' : exploreTarget === 'cd-showcase' ? 'Explore Designs' : 'Explore Course'}
                </button>
              </div>
            </div>

            {/* Feature image (light theme) */}
            {lightHero && (
              <div className="col-lg-5">
                <div className="cd-hero-feature">
                  <img src={detail.heroImage} alt={`${course.title} — hands-on training at Pumo Technovation`} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="cd-scroll-hint">
          <div className="cd-scroll-dot" />
          <span>SCROLL</span>
        </div>
      </section>

      {/* Sticky Section Nav */}
      {!hidden.has('nav') && (
        <SectionNav key={id} hasShowcase={showcase.length > 0} hidden={hidden} />
      )}

      {/* Sticky Enquiry Button */}
      <Link to="/contact" className="cd-sticky-cta">
        <FiMessageSquare size={15} /> Enquire Now
      </Link>

      {/* ── INTRO: software logos + feature image ───── */}
      {INTROS[id] && (
        <CourseIntroBlock title={course.title} {...INTROS[id]} />
      )}

      {/* ── 2D SKETCH: dimensions with constraints ──── */}
      {INTROS[id]?.sketchImage && (
        <SketchConstraintsSection image={INTROS[id].sketchImage} />
      )}

      {/* ── 1st & 3rd ANGLE OF PROJECTION ─────────────── */}
      {INTROS[id]?.showProjection && <ProjectionSection />}

      {/* ── CONCEPT OF ISOMETRIC / PART MODEL ─────────── */}
      {INTROS[id]?.partModelling && (
        <PartModellingSection {...INTROS[id].partModelling} />
      )}

      {/* ── CONCEPT OF ASSEMBLY ───────────────────────── */}
      {INTROS[id]?.assembly && <AssemblySection {...INTROS[id].assembly} />}

      {/* ── CONCEPT OF SHEET METAL ────────────────────── */}
      {INTROS[id]?.sheetMetal && <SheetMetalSection images={INTROS[id].sheetMetal} />}

      {/* ── WELDMENTS ─────────────────────────────────── */}
      {INTROS[id]?.weldments && <WeldmentsSection images={INTROS[id].weldments} />}

      {/* ── CONCEPT OF DRAFTING ───────────────────────── */}
      {INTROS[id]?.drafting && <DraftingSection images={INTROS[id].drafting} />}

      {/* ── PROJECT DRAWING (universal coupling) ──────── */}
      {INTROS[id]?.projectDrawing && <ProjectDrawingSection {...INTROS[id].projectDrawing} />}

      {/* ── CONCEPT OF SURFACE ────────────────────────── */}
      {INTROS[id]?.surface && <SurfaceSection images={INTROS[id].surface} />}

      {/* ── TOOL & DIE DESIGN CONCEPT ─────────────────── */}
      {INTROS[id]?.toolDie && <ToolDieSection images={INTROS[id].toolDie} />}

      {/* ── JIG & FIXTURE DESIGN CONCEPT ──────────────── */}
      {INTROS[id]?.jigFixture && <JigFixtureSection images={INTROS[id].jigFixture} />}

      {/* ── REVERSE ENGINEERING ───────────────────────── */}
      {INTROS[id]?.reverseEng && <ReverseEngSection images={INTROS[id].reverseEng} />}

      {/* ── STUDY OF GD&T ─────────────────────────────── */}
      {INTROS[id]?.gdt && <GdtSection {...INTROS[id].gdt} />}

      {/* ── PROJECT (Creo gearbox mechanism) ──────────── */}
      {INTROS[id]?.project && <ProjectSection {...INTROS[id].project} />}

      {/* ── INDUSTRIES ────────────────────────────────── */}
      {INTROS[id]?.industries && <IndustriesSection industries={INTROS[id].industries} />}

      {/* ── SECTION 2: OVERVIEW ─────────────────────── */}
      {!hidden.has('overview') && (
      <section id="cd-overview" className="cd-overview">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <AnimatedSection animation="reveal-left">
                <span className="eyebrow">Course Overview</span>
                <h2 className="mt-2 mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
                  {overview.title || `What is ${course.title}?`}
                </h2>
                <p style={{ color: 'var(--gray-text)', lineHeight: 1.85, marginBottom: 32, fontSize: '0.98rem' }}>
                  {overview.intro || course.description}
                </p>

                {overview.points && (
                  <div className="row g-3">
                    {overview.points.map((pt, i) => (
                      <div key={i} className="col-sm-6">
                        <AnimatedSection delay={i * 0.08}>
                          <div className="cd-overview-point">
                            <span className="cd-overview-icon">{pt.icon}</span>
                            <div>
                              <h5>{pt.title}</h5>
                              <p>{pt.desc}</p>
                            </div>
                          </div>
                        </AnimatedSection>
                      </div>
                    ))}
                  </div>
                )}
              </AnimatedSection>
            </div>

            <div className="col-lg-6">
              <AnimatedSection animation="reveal-right" delay={0.1}>
                <div className="cd-overview-image">
                  <img
                    src={overview.image || course.image}
                    alt={course.title}
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ── SECTION 3 + 4: SOFTWARE SECTIONS + VIDEOS ── */}
      {!hidden.has('software') && (
      <div id="cd-software">
        {softwareSections.length > 0 ? (
          softwareSections.map((sw, idx) => (
            <SoftwareSection key={sw.name} sw={sw} index={idx} />
          ))
        ) : (
          /* Fallback if no detail data */
          <section className="section-pad section-bg-light">
            <div className="container">
              <div className="section-header">
                <span className="eyebrow">Software Covered</span>
                <h2>Tools You Will Master</h2>
                <div className="underline-bar" />
              </div>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {course.software.map(s => (
                  <span key={s} className="software-chip" style={{ fontSize: '1rem', padding: '8px 20px' }}>{s}</span>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      )}

      {/* ── SECTION 5: CURRICULUM ───────────────────── */}
      {!hidden.has('curriculum') && (
      <section id="cd-curriculum" className="cd-curriculum-wrap">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="eyebrow">Complete Curriculum</span>
              <h2>{course.title} — Module-wise Syllabus</h2>
              <div className="underline-bar" />
              <p>Explore all {syllabus.length} modules. Click any module to expand and view the complete topic list.</p>
            </div>
          </AnimatedSection>

          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <ModuleAccordion syllabus={syllabus} />
          </div>
        </div>
      </section>
      )}

      {/* ── DESIGN SHOWCASE (course-specific image gallery) ── */}
      {showcase.length > 0 && !hidden.has('showcase') && (
        <CourseShowcase chapters={showcase} courseTitle={course.title} />
      )}

      {/* ── SECTION 7: PROJECTS ─────────────────────── */}
      {projects.length > 0 && !hidden.has('projects') && (
        <section id="cd-projects" className="cd-projects">
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <span className="eyebrow">Practical Learning</span>
                <h2>Real Engineering Projects You Will Build</h2>
                <div className="underline-bar" />
                <p>Hands-on projects inspired by actual industry design challenges — not toy exercises.</p>
              </div>
            </AnimatedSection>

            <div className="row g-4">
              {projects.map((project, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <AnimatedSection delay={i * 0.07}>
                    <div className="cd-project-card">
                      <div className="cd-project-img">
                        <img src={project.image} alt={project.title} loading="lazy" />
                        <div className="cd-project-overlay">
                          <span className="cd-project-sw-badge">{project.software}</span>
                        </div>
                      </div>
                      <div className="cd-project-body">
                        <div className="cd-project-title">{project.title}</div>
                        <div className="cd-project-desc">{project.desc}</div>
                        <div className="cd-project-skills">
                          <FiTool size={12} />
                          {project.skills}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 8: SKILLS ───────────────────────── */}
      {skills.length > 0 && !hidden.has('skills') && (
        <section id="cd-skills" className="cd-skills">
          <div className="container">
            <AnimatedSection>
              <div className="section-header">
                <span className="eyebrow" style={{ color: 'var(--accent-blue)' }}>Skills You Will Acquire</span>
                <h2 style={{ color: '#fff' }}>What You Will Know After This Course</h2>
                <div className="underline-bar" />
                <p style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Job-ready skills validated by industry engineers — directly applicable to your engineering career.
                </p>
              </div>
            </AnimatedSection>

            <div className="row g-3">
              {skills.map((skill, i) => (
                <div key={i} className="col-lg-2 col-md-3 col-4">
                  <AnimatedSection delay={i * 0.05}>
                    <div className="cd-skill-card">
                      <span className="cd-skill-icon">{skill.icon}</span>
                      <div className="cd-skill-name">{skill.name}</div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 9: CAREERS ──────────────────────── */}
      {!hidden.has('careers') && (
      <section id="cd-careers" className="cd-careers">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="eyebrow">After This Course</span>
              <h2>Career Opportunities</h2>
              <div className="underline-bar" />
              <p>Roles you can apply for in OEM, Tier-1, and core manufacturing sectors.</p>
            </div>
          </AnimatedSection>

          <div className="row g-3">
            {course.careerOpportunities.map((career, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <AnimatedSection delay={i * 0.08}>
                  <div className="cd-career-card">
                    <div className="cd-career-icon">
                      {careerIcons[i % careerIcons.length]}
                    </div>
                    <div>
                      <div className="cd-career-name">{career}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gray-text)', marginTop: 2 }}>
                        {course.categoryLabel} · {course.level}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* -- PLACEMENTS SECTION -- */}
      {!hidden.has('placements') && (
        <PlacementSection placements={placements} courseTitle={course.title} />
      )}


      {/* ── SECTION 10: FAQ + ENQUIRY ────────────────── */}
      {!hidden.has('faq') && (
      <section id="cd-enquiry" className="section-pad">
        <div className="container">
          <AnimatedSection>
            <FAQ faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>
      )}

      <section className="enquiry-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <AnimatedSection animation="reveal-left">
                <span className="eyebrow" style={{ color: 'var(--accent-blue)' }}>Start Your Journey</span>
                <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: '12px 0 16px' }}>
                  Interested in {course.title}?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 24, lineHeight: 1.75 }}>
                  Fill in your details and our counsellor will contact you within 24 hours with fees, schedule, and joining process.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {course.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem' }}>
                      <FiCheckCircle size={16} style={{ color: '#4ade80', flexShrink: 0, marginTop: 2 }} />
                      {h}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="col-lg-7">
              <AnimatedSection animation="reveal-right" delay={0.1}>
                <EnquiryForm selectedCourse={course.title} />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


