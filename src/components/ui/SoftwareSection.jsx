import AnimatedSection from './AnimatedSection';
import VideoEmbed from './VideoEmbed';

export default function SoftwareSection({ sw, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`cd-software-section ${!isEven ? 'alt-bg' : ''}`} id={`sw-${sw.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="container">
        {/* Software Header */}
        <AnimatedSection>
          <div className="cd-sw-header">
            <span className="cd-sw-emoji">{sw.emoji}</span>
            <div>
              <div className="cd-sw-maker">by {sw.maker}</div>
              <div className="cd-sw-name">{sw.name}</div>
              <div className="cd-sw-tagline">{sw.tagline}</div>
            </div>
          </div>
        </AnimatedSection>

        <div className="row g-5 align-items-start">
          {/* Left: Image + What You Design */}
          <div className={`col-lg-5 ${isEven ? 'order-lg-1' : 'order-lg-2'}`}>
            <AnimatedSection animation={isEven ? 'reveal-left' : 'reveal-right'}>
              <div className="cd-sw-image">
                <img src={sw.image} alt={`${sw.name} engineering design`} loading="lazy" />
                <div className="cd-sw-image-label">
                  🖥️ {sw.name} — {sw.maker}
                </div>
              </div>

              {/* What you can design */}
              <div className="cd-you-design">
                <h6>What you can design with {sw.name}</h6>
                <ul>
                  {sw.whatYouDesign.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Text + Video */}
          <div className={`col-lg-7 ${isEven ? 'order-lg-2' : 'order-lg-1'}`}>
            <AnimatedSection animation={isEven ? 'reveal-right' : 'reveal-left'} delay={0.1}>
              {/* What is it */}
              <div className="cd-sw-desc-block">
                <div className="cd-sw-desc-label">What is {sw.name}?</div>
                <p className="cd-sw-desc-text">{sw.whatIs}</p>
              </div>

              {/* Why used */}
              <div className="cd-sw-desc-block">
                <div className="cd-sw-desc-label">Why is it used?</div>
                <p className="cd-sw-desc-text">{sw.whyUsed}</p>
              </div>

              {/* Features */}
              <div className="cd-sw-desc-block">
                <div className="cd-sw-desc-label">Key Features</div>
                <ul className="cd-sw-features">
                  {sw.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Industry Applications */}
              <div className="cd-sw-desc-block">
                <div className="cd-sw-desc-label">Industrial Applications</div>
                <div className="cd-sw-industries">
                  {sw.industries.map((ind, i) => (
                    <span key={i} className="cd-industry-pill">{ind}</span>
                  ))}
                </div>
              </div>

              {/* Video Demo */}
              <div className="cd-video-wrap">
                <div className="cd-video-heading">🎬 {sw.videoTitle}</div>
                <p className="cd-video-subtext">{sw.videoDescription}</p>
                <VideoEmbed
                  videoId={sw.videoId}
                  title={sw.videoTitle}
                  description={sw.videoDescription}
                />
                <p className="cd-video-note">
                  Video opens inline. Click "Watch on YouTube" to open in full browser. All videos are publicly available on YouTube.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
