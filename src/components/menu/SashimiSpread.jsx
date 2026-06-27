import { useScrollReveal } from '../../hooks/useScrollReveal';
import { sashimi, chapters } from './menuData';
import './Spread.css';

const chapter = chapters.find((c) => c.id === 'sashimi');

export default function SashimiSpread() {
  const root = useScrollReveal({ stagger: 0.1 });

  return (
    <section id="sashimi" className="spread spread--photo-top" ref={root}>
      <div className="spread__inner">
        <header className="spread__header" data-reveal>
          <span className="spread__number kanji">{chapter.number}</span>
          <h2 className="spread__title kanji">{chapter.label}</h2>
          <span className="spread__sub">Sashimi</span>
          <p className="spread__intro">{sashimi.description}</p>
        </header>

        <figure className="spread__photo spread__photo--wide" data-reveal>
          <img src={sashimi.items[0].image} alt={sashimi.items[0].nameJa} loading="lazy" />
          <figcaption className="spread__photo-caption kanji">
            {sashimi.items[0].nameJa}
          </figcaption>
        </figure>

        <ol className="spread__items spread__items--cols">
          {sashimi.items.map((item, idx) => (
            <li className="dish" data-reveal key={item.nameJa}>
              <span className="dish__num">{String(idx + 1).padStart(2, '0')}</span>
              <div className="dish__body">
                <div className="dish__head">
                  <h3 className="dish__name kanji">{item.nameJa}</h3>
                  <span className="dish__price">{item.price}</span>
                </div>
                <p className="dish__desc">{item.description}</p>
                <span className="dish__ingredients">{item.ingredients}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
