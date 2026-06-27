import { useScrollReveal } from '../../hooks/useScrollReveal';
import { desserts, chapters } from './menuData';
import './DessertsSpread.css';

const chapter = chapters.find((c) => c.id === 'desserts');

export default function DessertsSpread() {
  const root = useScrollReveal({ stagger: 0.1 });

  return (
    <section id="desserts" className="ds" ref={root}>
      <div className="ds__inner">
        <header className="ds__header" data-reveal>
          <span className="ds__number kanji">{chapter.number}</span>
          <h2 className="ds__title kanji">{chapter.label}</h2>
          <span className="ds__sub">Sweets</span>
          <p className="ds__intro">{desserts.description}</p>
        </header>

        <div className="ds__grid">
          {desserts.items.map((item, idx) => (
            <article className="ds__card" data-reveal key={item.nameJa}>
              <div className="ds__card-photo">
                <img src={item.image} alt={item.nameJa} loading="lazy" />
              </div>
              <div className="ds__card-body">
                <span className="ds__card-num">No.{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="ds__card-name kanji">{item.nameJa}</h3>
                <p className="ds__card-story">{item.description}</p>
                <div className="ds__card-meta">
                  <span className="ds__card-ingredients">{item.ingredients}</span>
                  <span className="ds__card-price">{item.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
