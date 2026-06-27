import { useScrollReveal } from '../../hooks/useScrollReveal';
import { finale } from './menuData';
import './TonightsOmakase.css';

export default function TonightsOmakase() {
  const root = useScrollReveal({ stagger: 0.14 });
  return (
    <section className="to" ref={root}>
      <div className="to__photo" data-reveal aria-hidden="true">
        <img src="/menu%20item5.png" alt="" loading="lazy" />
        <div className="to__veil" />
        <span className="to__watermark kanji">終</span>
      </div>

      <div className="to__copy">
        <span className="eyebrow" data-reveal>結び</span>
        <h2 className="to__title kanji" data-reveal>
          本日の<br />おまかせ。
        </h2>
        <p className="to__quote" data-reveal>
          「{finale.quote}」
        </p>
        <div className="to__signature-wrap" data-reveal>
          <span className="to__signature">{finale.signature}</span>
          <span className="to__signature-mark kanji">印</span>
        </div>
        <div data-reveal>
          <a href="/contact" className="btn to__btn">
            <span className="kanji">{finale.reserveCta}</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <p className="to__close" data-reveal>
          帖を、ここに閉じます。
          <br />
          続きは、暖簾の向こうにて。
        </p>
      </div>
    </section>
  );
}
