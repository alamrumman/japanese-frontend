import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ChefIntro.css';

export default function ChefIntro() {
  const root = useScrollReveal();
  return (
    <section className="ci" ref={root}>
      <div className="ci__inner">
        <figure className="ci__photo" data-reveal>
          <img src="/chef.png" alt="森 春人 — Chef Haruto Mori" loading="lazy" />
          <figcaption className="ci__caption">森 春人 · 料理人</figcaption>
        </figure>

        <div className="ci__copy">
          <span className="eyebrow" data-reveal>序文</span>
          <h2 className="ci__heading" data-reveal>
            朝が決めた一冊。
          </h2>
          <p className="ci__body" data-reveal>
            この帖は、毎朝書き直されます。
            豊洲の競りで魚を見つめ、
            そのひと尾の声を聞き、
            一夜の物語を組み立ててゆきます。
          </p>
          <p className="ci__body" data-reveal>
            お品書きとは、料理人の記憶です。
            その日のうちにしか書けない記憶を、
            八つの椅子のお客様と分かち合いたいと思います。
          </p>
        </div>
      </div>
    </section>
  );
}
