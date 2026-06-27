import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { nav, site } from '../sections/config/site.config';
import './Footer.css';

const footerNav = nav.filter((n) => n.href !== '/#reserve');

export default function Footer() {
  const root = useScrollReveal({ stagger: 0.08 });
  const year = new Date().getFullYear();

  return (
    <footer className="footer layout" ref={root}>
      <div className="footer__glow" aria-hidden="true" />
      <span className="footer__watermark kanji" aria-hidden="true">灯</span>

      <div className="container footer__top">
        <div className="footer__brand" data-reveal>
          <Link to="/" className="footer__brand-link">
            <span className="footer__ja kanji">{site.nameJa}</span>
            <span className="footer__mark">{site.mark}</span>
          </Link>
          <p className="footer__tagline">{site.tagline}</p>
        </div>

        <div className="footer__farewell" data-reveal>
          <span className="footer__farewell-eyebrow">送り出し</span>
          <h2 className="footer__farewell-text">
            またのお越しを、<br />
            お待ちしております。
          </h2>
        </div>
      </div>

      <div className="footer__divider" aria-hidden="true" />

      <div className="container footer__inner">
        <div className="footer__col" data-reveal>
          <h4 className="footer__heading">案内</h4>
          <ul className="footer__list">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col" data-reveal>
          <h4 className="footer__heading">店舗情報</h4>
          <p className="footer__muted">{site.address}</p>
          <p className="footer__muted">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="footer__link">
              {site.phone}
            </a>
          </p>
          <p className="footer__muted">
            <a href={`mailto:${site.email}`} className="footer__link">
              {site.email}
            </a>
          </p>
        </div>

        <div className="footer__col" data-reveal>
          <h4 className="footer__heading">営業時間</h4>
          <ul className="footer__hours">
            {site.hours.map((h) => (
              <li key={h.day}>
                <span className="kanji">{h.day}</span>
                <span className="footer__muted">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col" data-reveal>
          <h4 className="footer__heading">その他</h4>
          <ul className="footer__list">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="footer__link" target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="footer__link">プライバシーポリシー</Link>
            </li>
            <li>
              <Link to="/terms" className="footer__link">利用規約</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__divider footer__divider--bottom" aria-hidden="true" />

      <div className="container footer__strip">
        <span className="footer__strip-left">
          © {year} {site.nameJa} · {site.edge}
        </span>
        <span className="footer__strip-right">
          すべての権利を、静かに。
        </span>
      </div>
    </footer>
  );
}
