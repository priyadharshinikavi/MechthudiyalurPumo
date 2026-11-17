import { useState } from 'react';
import { FiPlay, FiExternalLink } from 'react-icons/fi';

export default function VideoEmbed({ videoId, title, description, thumbnail }) {
  const [playing, setPlaying] = useState(false);

  if (!videoId) {
    return (
      <div
        style={{
          background: 'linear-gradient(135deg, var(--primary-dark), #1a2744)',
          borderRadius: 16,
          padding: '40px 24px',
          textAlign: 'center',
          color: '#fff',
          border: '2px dashed rgba(255,255,255,0.15)',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🎬</div>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 0 }}>
          Demonstration video coming soon
        </p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const thumbUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="cd-video-container">
      {!playing ? (
        /* Thumbnail + Play button */
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${thumbUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'pointer',
            borderRadius: 16,
          }}
          onClick={() => setPlaying(true)}
          role="button"
          aria-label={`Play video: ${title}`}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
        >
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(13, 27, 42, 0.45)',
              borderRadius: 16,
            }}
          />
          {/* Play button */}
          <div
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 16,
            }}
          >
            <div
              style={{
                width: 72, height: 72,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.95)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                fontSize: '1.6rem',
                color: '#1565c0',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)'; }}
            >
              <FiPlay style={{ marginLeft: 4 }} />
            </div>
            <span
              style={{
                color: '#fff', fontSize: '0.88rem', fontWeight: 700,
                fontFamily: 'var(--font-heading)', letterSpacing: '0.03em',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              Click to Watch
            </span>
          </div>
          {/* YouTube badge bottom-right */}
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute', bottom: 14, right: 14,
              background: 'rgba(0,0,0,0.65)', color: '#fff',
              padding: '5px 12px', borderRadius: 6,
              fontSize: '0.72rem', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 5,
              backdropFilter: 'blur(4px)',
              textDecoration: 'none',
            }}
            onClick={e => e.stopPropagation()}
          >
            <FiExternalLink size={11} /> Watch on YouTube
          </a>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
}
