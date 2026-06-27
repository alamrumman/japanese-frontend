import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ContactInvitation.css';

export default function ContactInvitation() {
  const root = useScrollReveal();

  return (
    <section className="c-inv" ref={root}>
      <div className="c-inv__photo" aria-hidden="true">
        <div className="c-inv__light c-inv__light--a" />
        <div className="c-inv__light c-inv__light--b" />
        <div className="c-inv__counter" />
        <span className="c-inv__watermark kanji">席</span>
        <div className="c-inv__veil" />
      </div>

      <div className="c-inv__copy">
        <span className="eyebrow" data-reveal>お招き</span>
        <h2 className="c-inv__heading" data-reveal>
          静かに、<br />お迎え申し上げます。
        </h2>
        <p className="c-inv__sub" data-reveal>
          一夜、八つの椅子のひとつにて。
        </p>
        <div data-reveal>
          <a href="/#reserve" className="btn c-inv__btn">
            <span className="kanji">ご予約を承る</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
