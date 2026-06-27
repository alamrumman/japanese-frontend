import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ContactMap.css';

export default function ContactMap() {
  const root = useScrollReveal();

  return (
    <section className="c-map" ref={root}>
      <div className="c-map__wrap">
        <div className="c-map__surface" data-reveal aria-label="Map of Sushi Kuro Nami, Hiroo, Shibuya">
          <div className="c-map__grid" aria-hidden="true" />
          <div className="c-map__roads" aria-hidden="true" />
          <div className="c-map__noise" aria-hidden="true" />

          <div className="c-map__pin" aria-hidden="true">
            <span className="c-map__pin-pulse" />
            <span className="c-map__pin-dot" />
            <span className="c-map__pin-label kanji">鮨黒浪</span>
          </div>

          <span className="c-map__compass" aria-hidden="true">
            北<span className="c-map__compass-line" />
          </span>

          <span className="c-map__attribution" aria-hidden="true">
            35.6489° N · 139.7222° E
          </span>
        </div>

        <aside className="c-map__plate" data-reveal>
          <span className="c-map__plate-label">案内</span>
          <h3 className="c-map__plate-title kanji">広尾駅 から徒歩三分</h3>
          <p className="c-map__plate-body">
            東京メトロ日比谷線 広尾駅2番出口より徒歩約3分。<br />
            青山ファーストビルの地下、暖簾の奥に。
          </p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="link-arrow">
            地図で開く
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
