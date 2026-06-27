import { site, tickerItems } from "./config/site.config";
import "./Hero.css";

const TITLE_LINES = [
  { text: "味わう、", accent: false },
  { text: "日本の", accent: false },
  { text: "美学。", accent: true },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      {/* ---------- Hero Image ---------- */}

      <div className="hero__photo" data-hero-photo>
        <picture>
          <source
            type="image/avif"
            srcSet="/sushi-768.avif 768w, /sushi-1024.avif 1024w, /sushi-1280.avif 1280w, /sushi-1536.avif 1536w"
            sizes="(max-width: 900px) 100vw, 75vw"
          />
          <source
            type="image/webp"
            srcSet="/sushi-768.webp 768w, /sushi-1024.webp 1024w, /sushi-1280.webp 1280w, /sushi-1536.webp 1536w"
            sizes="(max-width: 900px) 100vw, 75vw"
          />
          <img
            src="/sushi.png"
            alt="Japanese Sushi"
            width="1536"
            height="1024"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        <div className="hero__photo-veil" aria-hidden="true" />
      </div>

      {/* ---------- Copy ---------- */}

      <div className="hero__copy-wrap">
        <div className="hero__copy">
          <span className="eyebrow" data-hero-fade data-hero-eyebrow>
            鮨 黒浪 · 銀座
          </span>

          <h1 className="hero__title" aria-label={site.tagline}>
            {TITLE_LINES.map(({ text, accent }, i) => (
              <span className="hero__mask" data-hero-mask key={i}>
                <span className={`kanji ${accent ? "hero__title-accent" : ""}`}>
                  {text}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero__lede" data-hero-fade data-hero-copy>
            {site.body.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>

          <a href="#reserve" className="hero__cta" data-hero-cta>
            Reserve Table
            <span>→</span>
          </a>
        </div>
      </div>

      {/* ---------- Scroll ---------- */}

      <div className="hero__scroll" data-hero-fade data-hero-scroll>
        <span className="hero__scroll-line">
          <span className="hero__scroll-dot" data-hero-scroll-dot />
        </span>

        <span className="hero__scroll-label">SCROLL</span>
      </div>

      {/* ---------- Ticker ---------- */}

      <div className="hero__ticker" data-hero-ticker>
        <div className="hero__ticker-track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="hero__ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
