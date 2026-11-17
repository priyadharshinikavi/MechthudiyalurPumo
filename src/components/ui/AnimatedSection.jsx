// AnimatedSection — wraps children with scroll-reveal animation
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function AnimatedSection({
  children,
  className = '',
  animation = 'reveal', // 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale'
  delay = 0,
  threshold = 0.12,
  style = {},
  as: Tag = 'div',
}) {
  const [ref, visible] = useScrollReveal(threshold);

  return (
    <Tag
      ref={ref}
      className={`${animation} ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </Tag>
  );
}
