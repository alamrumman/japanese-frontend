import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { featureCards } from './config/site.config';
import './FeatureCards.css';

const optimizedImages = {
  '/craftsmen1.png': {
    base: '/craftsmen1',
    width: 445,
    height: 769,
  },
  '/intimate.png': {
    base: '/intimate',
    width: 456,
    height: 749,
  },
  '/seasonality.png': {
    base: '/seasonality',
    width: 458,
    height: 771,
  },
};

function FeatureImage({ card }) {
  const image = optimizedImages[card.image];

  if (!image) {
    return (
      <img
        src={card.image}
        alt={card.glyph}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: card.focal }}
      />
    );
  }

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${image.base}-320.avif 320w, ${image.base}-480.avif 480w, ${image.base}-640.avif 640w`}
        sizes="(max-width: 900px) calc(100vw - 48px), 31vw"
      />
      <source
        type="image/webp"
        srcSet={`${image.base}-320.webp 320w, ${image.base}-480.webp 480w, ${image.base}-640.webp 640w`}
        sizes="(max-width: 900px) calc(100vw - 48px), 31vw"
      />
      <img
        src={card.image}
        alt={card.glyph}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: card.focal }}
      />
    </picture>
  );
}

export default function FeatureCards() {
  const root = useScrollReveal({ stagger: 0.12 });

  return (
    <section className="features" ref={root}>
      <div className="features__grid">
        {featureCards.map((card) => (
          <Link to={card.href} className="feature" data-reveal key={card.id}>
            <div className="feature__image">
              <FeatureImage card={card} />
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
