import { useScrollReveal } from '../../hooks/useScrollReveal';
import { seasonal, chapters } from './menuData';
import './SeasonalHighlight.css';

const chapter = chapters.find((c) => c.id === 'seasonal');

export default function SeasonalHighlight() {
  const root = useScrollReveal({ stagger: 0.14 });
  return (
    <section id="seasonal" className="sh" ref={root}>
      <div className="sh__photo" data-reveal>
        <img src={seasonal.image} alt={seasonal.nameJa} loading="lazy" />
        <div className="sh__veil" aria-hidden="true" />
      </div>

      <div className="sh__copy">
        <span className="sh__chapter kanji" data-reveal>
          {chapter.number} · {chapter.label}
        </span>
        <span className="sh__season kanji" data-reveal>{seasonal.subtitle}</span>
        <h2 className="sh__name kanji" data-reveal>{seasonal.nameJa}</h2>
        <p className="sh__sentence" data-reveal>{seasonal.sentence}</p>
        <div className="sh__meta" data-reveal>
          <span className="sh__pairing">
            <span className="sh__pairing-label">合わせて</span>
            <span className="sh__pairing-name kanji">{seasonal.pairing}</span>
          </span>
          <span className="sh__price">{seasonal.price}</span>
        </div>
        <div data-reveal>
          <a href="/contact" className="btn sh__btn">
            <span className="kanji">ご予約を承る</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
