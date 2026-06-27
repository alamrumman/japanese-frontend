import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './MenuPreview.css';

const teasers = [
  {
    number: '一',
    label: '鮨',
    blurb: '本鮪 中とろ ・ 赤身 漬け ・ 鯛',
    image: '/menu%20item1.png',
    href: '/menu#nigiri',
    cta: '鮨の章へ',
  },
  {
    number: '二',
    label: '軍艦',
    blurb: 'うに ・ いくら',
    image: '/menu%20item2.png',
    href: '/menu#gunkan',
    cta: '軍艦の章へ',
  },
  {
    number: '四',
    label: '季節',
    blurb: '秋刀魚 炙り',
    image: '/menu%20item4.png',
    href: '/menu#seasonal',
    cta: '季節の章へ',
  },
];

const optimizedImages = {
  '/menu%20item1.png': {
    base: '/menu-item1',
    width: 280,
    height: 291,
  },
  '/menu%20item2.png': {
    base: '/menu-item2',
    width: 273,
    height: 287,
  },
  '/menu%20item4.png': {
    base: '/menu-item4',
    width: 285,
    height: 291,
  },
};

function TeaserImage({ teaser }) {
  const image = optimizedImages[teaser.image];

  if (!image) {
    return <img src={teaser.image} alt={teaser.label} loading="lazy" decoding="async" />;
  }

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${image.base}-320.avif 320w, ${image.base}-480.avif 480w, ${image.base}-640.avif 640w`}
        sizes="(max-width: 900px) min(480px, calc(100vw - 48px)), 31vw"
      />
      <source
        type="image/webp"
        srcSet={`${image.base}-320.webp 320w, ${image.base}-480.webp 480w, ${image.base}-640.webp 640w`}
        sizes="(max-width: 900px) min(480px, calc(100vw - 48px)), 31vw"
      />
      <img
        src={teaser.image}
        alt={teaser.label}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}

export default function MenuPreview() {
  const root = useScrollReveal({ stagger: 0.12 });

  return (
    <section className="mp" ref={root}>
      <div className="container">
        <header className="mp__header">
          <span className="eyebrow" data-reveal>三 · お品書きより</span>
          <h2 className="mp__heading" data-reveal>
            今宵、三つの章より。
          </h2>
          <p className="mp__lede" data-reveal>
            朝に決められたおまかせの帖から、<br />
            三つの章を、ひと足先に。
          </p>
        </header>

        <div className="mp__grid">
          {teasers.map((t) => (
            <Link to={t.href} className="mp__card" data-reveal key={t.label}>
              <span className="mp__card-stamp kanji">{t.number}</span>

              <div className="mp__card-photo">
                <TeaserImage teaser={t} />
                <div className="mp__card-veil" />
              </div>

              <div className="mp__card-body">
                <h3 className="mp__card-title kanji">{t.label}</h3>
                <p className="mp__card-blurb kanji">{t.blurb}</p>
                <span className="mp__card-cta">
                  <span className="kanji">{t.cta}</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mp__footer" data-reveal>
          <Link to="/menu" className="btn mp__btn">
            <span className="kanji">お品書きの帖を開く</span>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <span className="mp__note">全十一章 · 一夜の物語</span>
        </div>
      </div>
    </section>
  );
}
