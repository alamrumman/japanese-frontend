import { useScrollReveal } from '../../hooks/useScrollReveal';
import { nigiri, chapters } from './menuData';
import './Spread.css';

const chapter = chapters.find((c) => c.id === 'nigiri');

export default function NigiriSpread() {
  const root = useScrollReveal({ stagger: 0.1 });

  return (
    <section id="nigiri" className="spread spread--photo-left" ref={root}>
      <div className="spread__inner">
        <header className="spread__header" data-reveal>
          <span className="spread__number kanji">{chapter.number}</span>
          <h2 className="spread__title kanji">{chapter.label}</h2>
          <span className="spread__sub">Nigiri</span>
          <p className="spread__intro">{nigiri.description}</p>
        </header>

        <div className="spread__body">
          <figure className="spread__photo spread__photo--portrait" data-reveal>
            <img src={nigiri.items[0].image} alt={nigiri.items[0].nameJa} loading="lazy" />
            <figcaption className="spread__photo-caption kanji">
              {nigiri.items[0].nameJa}
            </figcaption>
          </figure>

          <ol className="spread__items">
            {nigiri.items.map((item, idx) => (
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
      </div>
    </section>
  );
}
