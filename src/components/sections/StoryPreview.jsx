import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./StoryPreview.css";

export default function StoryPreview() {
  const root = useScrollReveal({ stagger: 0.12 });

  return (
    <section id="story" className="story" ref={root}>
      <div className="container">
        {/* ---------------- Header ---------------- */}

        <header className="story__header">
          <span className="story__eyebrow eyebrow" data-reveal>
            二 · 料理人
          </span>

          <h2 className="story__title" data-reveal>
            二十二年、
            <br />
            ひとつの所作を。
          </h2>
        </header>

        {/* ---------------- Main Layout ---------------- */}

        <div className="story__layout">
          {/* ---------- Portrait ---------- */}

          <figure className="story__figure" data-reveal>
            <div className="story__image">
              <img src="/chef.png" alt="森 春人" loading="lazy" />
            </div>

            <figcaption className="story__caption">
              <span className="story__chef">森 春人</span>

              <span className="story__meta">石川県・金沢にて修業</span>
            </figcaption>
          </figure>

          {/* ---------- Divider ---------- */}

          <span className="story__divider" aria-hidden="true" data-reveal />

          {/* ---------- Story ---------- */}

          <article className="story__content" data-reveal>
            <span className="story__watermark" aria-hidden="true">
              初心
            </span>

            <p className="story__lead">
              十六歳、 金沢の小さな鮨屋で包丁を握った日から、
              森春人の修業は始まりました。 毎朝同じ魚を捌き、
              毎晩同じ所作を繰り返す日々。 その積み重ねが、
              今日の一貫へと繋がっています。
            </p>

            <p className="story__body">
              「素材は季節が選び、 握りは料理人が整える。
              しかし最後に味を決めるのは、 お客様が過ごす静かな時間です。」
            </p>

            <p className="story__body">
              二十二年を経た今も、 技術を誇ることはありません。
              一皿ごとに初心へ立ち返り、 派手さではなく、
              誠実さを積み重ねています。
            </p>

            <blockquote className="story__quote">
              「静けさもまた、 料理の一部である。」
            </blockquote>

            <div className="story__footer">
              <span className="story__signature">森 春人</span>

              <a href="#" className="story__link">
                <span>料理人の物語</span>

                <span className="story__arrow">→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
