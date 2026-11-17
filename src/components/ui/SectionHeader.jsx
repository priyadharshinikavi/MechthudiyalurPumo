export default function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="section-header">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 style={{ color: light ? '#fff' : 'var(--dark-text)' }}>{title}</h2>
      <div className="underline-bar" />
      {subtitle && (
        <p style={{ color: light ? 'rgba(255,255,255,0.75)' : 'var(--gray-text)' }}>{subtitle}</p>
      )}
    </div>
  );
}
