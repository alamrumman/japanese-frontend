import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ContactHero.css';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function ContactHero() {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.set('[data-c-fade]', { opacity: 0, y: 24 });
      gsap.set('[data-c-mask] > span', { yPercent: 110 });
      gsap.set('[data-c-photo]', { opacity: 0, scale: 1.04 });

      gsap.timeline({ delay: 0.2 })
        .to('[data-c-photo]', { opacity: 1, scale: 1, duration: 1.8, ease: 'expo.out' }, 0)
        .to('[data-c-eyebrow]', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.3)
        .to('[data-c-mask] > span', {
          yPercent: 0, duration: 1.1, stagger: 0.14, ease: 'expo.out',
        }, 0.55)
        .to('[data-c-lede]', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 1.4);

      gsap.to('[data-c-glow-a]', { opacity: 0.95, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      gsap.to('[data-c-glow-b]', { opacity: 0.7, duration: 5.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.8 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="c-hero" ref={root}>
      <div className="c-hero__photo" data-c-photo aria-hidden="true">
        <div className="c-hero__lantern c-hero__lantern--a" data-c-glow-a />
        <div className="c-hero__lantern c-hero__lantern--b" data-c-glow-b />
        <span className="c-hero__watermark kanji">暖簾</span>
        <div className="c-hero__photo-veil" />
      </div>

      <div className="c-hero__copy">
        <span className="eyebrow" data-c-fade data-c-eyebrow>
          店舗情報
        </span>
        <h1 className="c-hero__title" aria-label="暮れの扉まで">
          <span className="c-hero__mask" data-c-mask>
            <span className="kanji">暮れの</span>
          </span>
          <span className="c-hero__mask" data-c-mask>
            <span className="kanji c-hero__title-accent">扉まで。</span>
          </span>
        </h1>
        <p className="c-hero__lede" data-c-fade data-c-lede>
          銀座の路地裏、<br />
          八つの椅子の静けさへ。
        </p>
      </div>
    </section>
  );
}
