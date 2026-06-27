import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './LegalPage.css';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function LegalPage({ eyebrow, title, intro, sections, footer }) {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.set('[data-l-fade]', { opacity: 0, y: 16 });
      gsap.timeline({ delay: 0.15 })
        .to('[data-l-fade]', {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power3.out',
        });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <article className="legal" ref={root}>
      <header className="legal__hero">
        <div className="legal__hero-inner">
          <span className="legal__eyebrow" data-l-fade>{eyebrow}</span>
          <h1 className="legal__title kanji" data-l-fade>{title}</h1>
          {intro && (
            <p className="legal__intro" data-l-fade>{intro}</p>
          )}
        </div>
      </header>

      <div className="legal__divider legal__divider--top" aria-hidden="true" />

      <div className="legal__body">
        {sections.map((section, idx) => (
          <section className="legal__section" key={section.title} data-l-fade>
            <header className="legal__section-head">
              <span className="legal__section-num kanji">{section.num}</span>
              <h2 className="legal__section-title kanji">{section.title}</h2>
            </header>
            <div className="legal__section-body">
              {section.paragraphs.map((p, i) =>
                Array.isArray(p) ? (
                  <ul className="legal__list" key={i}>
                    {p.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="legal__paragraph">{p}</p>
                ),
              )}
            </div>
            {idx < sections.length - 1 && (
              <div className="legal__section-divider" aria-hidden="true" />
            )}
          </section>
        ))}
      </div>

      {footer && (
        <>
          <div className="legal__divider" aria-hidden="true" />
          <footer className="legal__footer" data-l-fade>
            <span className="legal__footer-mark kanji">印</span>
            <div className="legal__footer-meta">
              {footer.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </footer>
        </>
      )}
    </article>
  );
}
