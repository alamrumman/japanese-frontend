import { useEffect, useState } from 'react';
import { chapters } from './menuData';
import './ChapterNav.css';

export default function ChapterNav() {
  const [active, setActive] = useState(chapters[0].id);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.4;
      let current = chapters[0].id;
      for (const ch of chapters) {
        const el = document.getElementById(ch.id);
        if (el && el.offsetTop <= y) current = ch.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeIndex = chapters.findIndex((c) => c.id === active);
  const progress = ((activeIndex + 1) / chapters.length) * 100;

  return (
    <>
      <aside className="chapter-nav" aria-label="Menu chapters">
        <ul className="chapter-nav__list">
          {chapters.map((ch) => (
            <li key={ch.id}>
              <a
                href={`#${ch.id}`}
                className={`chapter-link ${active === ch.id ? 'is-active' : ''}`}
              >
                <span className="chapter-link__num kanji">{ch.number}</span>
                <span className="chapter-link__line" />
                <span className="chapter-link__label kanji">{ch.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <div className="chapter-progress" aria-hidden="true">
        <div
          className="chapter-progress__bar"
          style={{ width: `${progress}%` }}
        />
        <div className="chapter-progress__labels">
          {chapters.map((ch) => (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className={`chapter-progress__label ${active === ch.id ? 'is-active' : ''}`}
            >
              <span className="kanji">{ch.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
