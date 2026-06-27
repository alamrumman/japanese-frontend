import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useScrollReveal({ selector = '[data-reveal]', stagger = 0.08 } = {}) {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !root.current) return;

    const ctx = gsap.context(() => {
      const items = root.current.querySelectorAll(selector);
      if (!items.length) return;

      gsap.set(items, { opacity: 0, y: 28 });

      ScrollTrigger.batch(items, {
        start: 'top 82%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'expo.out',
            stagger,
          }),
      });
    }, root);

    return () => ctx.revert();
  }, [selector, stagger]);

  return root;
}
