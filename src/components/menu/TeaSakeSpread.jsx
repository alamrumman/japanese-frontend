import { useScrollReveal } from '../../hooks/useScrollReveal';
import { teaSake } from './menuData';
import './TeaSakeSpread.css';

export default function TeaSakeSpread() {
  const root = useScrollReveal({ stagger: 0.08 });

  return (
    <section className="ts" ref={root}>
      <div className="ts__inner">
        <header className="ts__header" data-reveal>
          <span className="ts__number kanji">六</span>
          <h2 className="ts__title kanji">茶 · 酒</h2>
          <span className="ts__sub">Tea & Sake</span>
          <p className="ts__intro">{teaSake.description}</p>
        </header>

        <div className="ts__columns">
          <div className="ts__column" data-reveal>
            <h3 className="ts__column-title kanji">茶</h3>
            <ul className="ts__list">
              {teaSake.tea.map((t) => (
                <li key={t.nameJa} className="ts__item">
                  <div className="ts__item-name">
                    <span className="kanji">{t.nameJa}</span>
                    <span className="ts__item-note">{t.note}</span>
                  </div>
                  <span className="ts__item-price">{t.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ts__divider" aria-hidden="true" />

          <div className="ts__column" data-reveal>
            <h3 className="ts__column-title kanji">酒</h3>
            <ul className="ts__list">
              {teaSake.sake.map((s) => (
                <li key={s.nameJa} className="ts__item">
                  <div className="ts__item-name">
                    <span className="kanji">{s.nameJa}</span>
                    <span className="ts__item-note">{s.note}</span>
                  </div>
                  <span className="ts__item-price">{s.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
