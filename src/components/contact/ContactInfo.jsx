import { useScrollReveal } from '../../hooks/useScrollReveal';
import { site } from '../sections/config/site.config';
import './ContactInfo.css';

export default function ContactInfo() {
  const root = useScrollReveal({ stagger: 0.12 });

  return (
    <section className="c-info" ref={root}>
      <div className="container c-info__grid">
        <div className="c-info__block" data-reveal>
          <span className="c-info__label">所在地</span>
          <p className="c-info__value">
            〒150-0002<br />
            東京都渋谷区広尾2-1-1<br />
            青山ファーストビル B1F
          </p>
          <span className="c-info__meta">広尾 · 渋谷区 · 東京</span>
        </div>

        <div className="c-info__divider" aria-hidden="true" />

        <div className="c-info__block" data-reveal>
          <span className="c-info__label">営業時間</span>
          <ul className="c-info__hours">
            {site.hours.map((h) => (
              <li key={h.day}>
                <span className="kanji">{h.day}</span>
                <span className="c-info__time">{h.time}</span>
              </li>
            ))}
          </ul>
          <span className="c-info__meta">お席 二回 · 18:00 / 20:30</span>
        </div>

        <div className="c-info__divider" aria-hidden="true" />

        <div className="c-info__block" data-reveal>
          <span className="c-info__label">お問い合わせ</span>
          <p className="c-info__value">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="c-info__link">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="c-info__link">
              {site.email}
            </a>
          </p>
          <span className="c-info__meta">火曜 – 日曜 · 14:00 より</span>
        </div>
      </div>
    </section>
  );
}
