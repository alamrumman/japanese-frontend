import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site, tickerItems } from "./config/site.config";
import "./Hero.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TITLE_LINES = [
  { text: "味わう、", accent: false },
  { text: "日本の", accent: false },
  { text: "美学。", accent: true },
];

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set("[data-hero-fade]", {
        opacity: 0,
        y: 24,
      });

      gsap.set("[data-hero-mask] > span", {
        yPercent: 110,
      });

      gsap.set("[data-hero-photo]", {
        opacity: 0,
        scale: 1.04,
      });

      gsap.set("[data-hero-ticker]", {
        opacity: 0,
      });

      gsap.set("[data-hero-cta]", {
        opacity: 0,
        y: 18,
      });

      const tl = gsap.timeline({
        delay: 0.2,
      });

      tl.to(
        "[data-hero-photo]",
        {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "expo.out",
        },
        0.15,
      )

        .to(
          "[data-hero-eyebrow]",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          0.45,
        )

        .to(
          "[data-hero-mask] > span",
          {
            yPercent: 0,
            duration: 1,
            stagger: 0.12,
            ease: "expo.out",
          },
          0.65,
        )

        .to(
          "[data-hero-copy]",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          1.3,
        )

        .to(
          "[data-hero-cta]",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          1.55,
        )

        .to(
          "[data-hero-scroll]",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          1.7,
        )

        .to(
          "[data-hero-ticker]",
          {
            opacity: 1,
            duration: 0.7,
          },
          1.9,
        );

      gsap.to("[data-hero-photo] img", {
        scale: 1.04,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      gsap.to("[data-hero-scroll-dot]", {
        y: 14,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="hero" ref={root}>
      {/* ---------- Hero Image ---------- */}

      <div className="hero__photo"  data-hero-photo>
        <img src="/sushi.png" alt="Japanese Sushi" loading="eager" />

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
