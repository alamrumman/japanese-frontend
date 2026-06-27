import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MenuHero.css';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function MenuHero() {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.set('[data-mh-fade]', { opacity: 0, y: 22 });
      gsap.set('[data-mh-mask] > span', { yPercent: 110 });
      gsap.set('[data-mh-photo]', { opacity: 0, scale: 1.04 });

      gsap.timeline({ delay: 0.2 })
        .to('[data-mh-photo]', { opacity: 1, scale: 1, duration: 1.8, ease: 'expo.out' }, 0)
        .to('[data-mh-eyebrow]', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.4)
        .to('[data-mh-mask] > span', {
          yPercent: 0, duration: 1.1, stagger: 0.12, ease: 'expo.out',
        }, 0.65)
        .to('[data-mh-lede]', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.5)
        .to('[data-mh-meta]', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.7);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="mh" ref={root}>
      <div className="mh__photo" data-mh-photo aria-hidden="true">
        <div className="mh__photo-bg" />
        <span className="mh__watermark kanji">献</span>
        <div className="mh__veil" />
      </div>

      <div className="mh__copy">
        <span className="eyebrow" data-mh-fade data-mh-eyebrow>
          お品書き · 二〇二六
        </span>
        <h1 className="mh__title" aria-label="おまかせの帖">
          <span className="mh__mask" data-mh-mask>
            <span className="kanji">おまかせ</span>
          </span>
          <span className="mh__mask" data-mh-mask>
            <span className="kanji mh__title-accent">の帖。</span>
          </span>
        </h1>
        <p className="mh__lede" data-mh-fade data-mh-lede>
          毎朝、豊洲で選ばれた魚と、<br />
          季節の手で結ばれた一冊。
        </p>
        <div className="mh__meta" data-mh-fade data-mh-meta>
          <span>本日 · {new Intl.DateTimeFormat('ja-JP-u-ca-japanese', { era: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date())}</span>
        </div>
      </div>
    </section>
  );
}
