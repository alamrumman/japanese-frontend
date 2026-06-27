import { useScrollReveal } from '../../hooks/useScrollReveal';
import './BrandStatement.css';

export default function BrandStatement() {
  const root = useScrollReveal();
  return (
    <section className="brand" ref={root}>
      <div className="container brand__grid">
        <div className="brand__left">
          <span className="eyebrow" data-reveal>一 · 私たちの理念</span>
          <h2 className="brand__heading" data-reveal>
            私たちは料理を出すのではなく、<br />朝が始めた物語を仕上げています。
          </h2>
        </div>

        <div className="brand__right">
          <p className="brand__body" data-reveal>
            日が昇る前、料理人は豊洲を歩きます。メモも、リストも、決まった意図もなく——
            何かが語りかけてくるまで。その一尾が、その夜を決めます。
          </p>
          <p className="brand__body" data-reveal>
            六時には、カウンターが整います。八つの席。一対の手。
            何かが始まろうとしている、その時のように、部屋は静まります。
          </p>
          <div className="brand__mark" aria-hidden="true" data-reveal>
            <span className="kanji">黒浪</span>
            <span className="brand__mark-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
