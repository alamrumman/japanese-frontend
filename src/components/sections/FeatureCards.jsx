import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { featureCards } from './config/site.config';
import './FeatureCards.css';

export default function FeatureCards() {
  const root = useScrollReveal({ stagger: 0.12 });

  return (
    <section className="features" ref={root}>
      <div className="features__grid">
        {featureCards.map((card) => (
          <Link to={card.href} className="feature" data-reveal key={card.id}>
            <div className="feature__image">
              <img
                src={card.image}
                alt={card.glyph}
                loading="lazy"
                style={{ objectPosition: card.focal }}
              />
              <span className="feature__glyph kanji" aria-hidden="true">
                {card.glyph}
              </span>
              <span className="feature__image-frame" aria-hidden="true" />
              <div className="feature__veil" aria-hidden="true" />
            </div>
            <div className="feature__body">
              <h3 className="feature__title">
                {card.title.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < card.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <span className="feature__cta">
                {card.cta}
                <span className="arrow" aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
