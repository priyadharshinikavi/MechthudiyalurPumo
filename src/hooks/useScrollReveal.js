// ============================================================
// useScrollReveal — Intersection Observer based scroll hook
// ============================================================
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.12, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold, rootMargin }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold, rootMargin]);

  return [ref, visible];
}

// Staggered reveal for lists — returns classes array
export function useStaggerReveal(count, threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  return [ref, Array.from({ length: count }, (_, i) => visible ? `stagger-visible stagger-${i}` : 'stagger-hidden')];
}
