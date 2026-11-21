import AnimatedSection from './AnimatedSection';

// Course intro: title on top, software logos stacked on the left,
// large feature image on the right.
export default function CourseIntroBlock({ title, logos, image, imageAlt }) {
  return (
    <section id="cd-intro" className="cib-section">
      <div className="container">
        <AnimatedSection>
          <h2 className="cib-title">{title}</h2>
        </AnimatedSection>

        <div className="cib-grid">
          <AnimatedSection animation="reveal-left" className="cib-logos">
            {logos.map((logo) => (
              <div key={logo.alt} className="cib-logo-card" title={logo.alt}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection animation="reveal-right" delay={0.1} className="cib-image">
            <img src={image} alt={imageAlt} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
