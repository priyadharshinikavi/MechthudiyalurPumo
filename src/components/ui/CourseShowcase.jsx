import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { FiCheckCircle, FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

// ── Lightbox ───────────────────────────────────────────────
function Lightbox({ items, index, onClose, onMove }) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onMove]);

  // Portal to <body> so no transformed ancestor can trap the fixed overlay
  return createPortal(
    <div className="csh-lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <button className="csh-lb-close" onClick={onClose} aria-label="Close"><FiX /></button>
      {items.length > 1 && (
        <>
          <button className="csh-lb-nav csh-lb-prev" onClick={(e) => { e.stopPropagation(); onMove(-1); }} aria-label="Previous image">
            <FiChevronLeft />
          </button>
          <button className="csh-lb-nav csh-lb-next" onClick={(e) => { e.stopPropagation(); onMove(1); }} aria-label="Next image">
            <FiChevronRight />
          </button>
        </>
      )}
      <figure className="csh-lb-figure" onClick={(e) => e.stopPropagation()}>
        <div className="csh-lb-img-wrap">
          <img src={item.image} alt={item.title} />
        </div>
        <figcaption className="csh-lb-caption">
          <div className="csh-lb-meta">
            <span className="csh-tag">{item.tag}</span>
            <span className="csh-lb-count">{index + 1} / {items.length}</span>
          </div>
          <h4>{item.title}</h4>
          <ul>
            {item.points.map((p) => (
              <li key={p}><FiCheckCircle /> {p}</li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </div>,
    document.body,
  );
}

// ── Showcase Card ──────────────────────────────────────────
function ShowcaseCard({ item, onOpen, delay }) {
  return (
    <AnimatedSection delay={delay} className="h-100">
      <article className="csh-card">
        <button
          type="button"
          className={`csh-card-img ${item.fit === 'contain' ? 'is-logo' : ''}`}
          onClick={onOpen}
          aria-label={`View ${item.title} full size`}
        >
          <img src={item.image} alt={item.title} loading="lazy" />
          <span className="csh-zoom"><FiMaximize2 /></span>
        </button>
        <div className="csh-card-body">
          <span className="csh-tag">{item.tag}</span>
          <h5 className="csh-card-title">{item.title}</h5>
          <ul className="csh-points">
            {item.points.map((p) => (
              <li key={p}><FiCheckCircle className="csh-check" /> <span>{p}</span></li>
            ))}
          </ul>
        </div>
      </article>
    </AnimatedSection>
  );
}

// ── Main Section ───────────────────────────────────────────
export default function CourseShowcase({ chapters, courseTitle }) {
  const [activeId, setActiveId] = useState(chapters[0]?.id);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const chapter = chapters.find((c) => c.id === activeId) || chapters[0];
  const totalImages = chapters.reduce((n, c) => n + c.items.length, 0);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const count = chapter?.items.length || 1;
  const moveLightbox = useCallback(
    (dir) => setLightboxIndex((i) => (i + dir + count) % count),
    [count],
  );

  if (!chapter) return null;

  return (
    <section id="cd-showcase" className="csh-section">
      <div className="container">
        <AnimatedSection>
          <div className="section-header">
            <span className="eyebrow">Design Showcase</span>
            <h2>What You Will Design in {courseTitle}</h2>
            <div className="underline-bar" />
            <p>
              {chapters.length} learning stages · {totalImages} real design examples, from your first sketch to
              industry-grade tools, fixtures and structures. Click any image to view it full size.
            </p>
          </div>
        </AnimatedSection>

        {/* Chapter tabs */}
        <div className="csh-tabs" role="tablist" aria-label="Showcase chapters">
          {chapters.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === chapter.id}
              className={`csh-tab ${c.id === chapter.id ? 'active' : ''}`}
              onClick={() => setActiveId(c.id)}
            >
              <span className="csh-tab-num">{c.number}</span>
              {c.title.split(' — ')[0]}
            </button>
          ))}
        </div>

        {/* Chapter header */}
        <div className="csh-chapter-head" key={`head-${chapter.id}`}>
          <span className="csh-chapter-num">{chapter.number}</span>
          <div>
            <h3>{chapter.title}</h3>
            <p>{chapter.intro}</p>
          </div>
          <span className="csh-chapter-count">{chapter.items.length} designs</span>
        </div>

        {/* Grid */}
        <div className="row g-4" key={chapter.id}>
          {chapter.items.map((item, i) => (
            <div key={item.image} className="col-xl-4 col-md-6">
              <ShowcaseCard item={item} delay={i * 0.06} onOpen={() => setLightboxIndex(i)} />
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={chapter.items}
          index={lightboxIndex}
          onClose={closeLightbox}
          onMove={moveLightbox}
        />
      )}
    </section>
  );
}
