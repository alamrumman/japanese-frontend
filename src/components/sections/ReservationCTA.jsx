import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ReservationCTA.css';

export default function ReservationCTA() {
  const root = useScrollReveal();
  return (
    <section id="reserve" className="reserve" ref={root}>
      <div className="reserve__bg" aria-hidden="true" />
      <div className="reserve__veil" aria-hidden="true" />

      <div className="container reserve__inner">
        <span className="eyebrow" data-reveal>四 · ご予約</span>
        <h2 className="reserve__heading" data-reveal>
          八つの椅子。<br />一夜ずつ、お迎えします。
        </h2>
        <p className="reserve__body" data-reveal>
          ご予約は毎月一日、翌月分を承ります。<br />
          ご来店は、お席のお時間の十分以内にお越しくださいませ。
        </p>
        <div className="reserve__cta" data-reveal>
          <a href="mailto:reserve@kuronami.jp" className="btn reserve__btn">
            <span className="kanji">ご予約を承る</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <p className="reserve__note" data-reveal>
          四名様以上のお客様は、<a href="mailto:info@kuronami.jp">info@kuronami.jp</a>{' '}
          まで直接ご連絡くださいませ。
        </p>
      </div>
    </section>
  );
}
