import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ContactForm.css';

export default function ContactForm() {
  const root = useScrollReveal({ stagger: 0.08 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="c-form" ref={root}>
      <div className="container c-form__wrap">
        <header className="c-form__header">
          <span className="eyebrow" data-reveal>お問い合わせ</span>
          <h2 className="c-form__heading" data-reveal>
            ご質問・特別なご要望は<br />こちらより。
          </h2>
          <p className="c-form__lede" data-reveal>
            通常、二営業日以内にお返事を差し上げます。
            アレルギーやアニバーサリーのご要望も、こちらにお書き添えくださいませ。
          </p>
        </header>

        {submitted ? (
          <div className="c-form__thanks" data-reveal>
            <span className="c-form__thanks-mark kanji">承</span>
            <h3 className="c-form__thanks-title">承りました。</h3>
            <p className="c-form__thanks-body">
              静かなお返事を、間もなくお届けいたします。
            </p>
          </div>
        ) : (
          <form className="c-form__form" onSubmit={handleSubmit} noValidate>
            <div className="c-form__field" data-reveal>
              <label htmlFor="cf-name">お名前</label>
              <input
                id="cf-name"
                type="text"
                name="name"
                placeholder="例 · 田中 葵"
                autoComplete="name"
                required
              />
            </div>

            <div className="c-form__field" data-reveal>
              <label htmlFor="cf-email">メールアドレス</label>
              <input
                id="cf-email"
                type="email"
                name="email"
                placeholder="example@kuronami.jp"
                autoComplete="email"
                required
              />
            </div>

            <div className="c-form__field" data-reveal>
              <label htmlFor="cf-phone">お電話番号 <span className="c-form__optional">(任意)</span></label>
              <input
                id="cf-phone"
                type="tel"
                name="phone"
                placeholder="03 — 0000 — 0000"
                autoComplete="tel"
              />
            </div>

            <div className="c-form__field" data-reveal>
              <label htmlFor="cf-message">ご用件</label>
              <textarea
                id="cf-message"
                name="message"
                rows="6"
                placeholder="ご希望の日付、人数、アレルギーなどをお書き添えください。"
                required
              />
            </div>

            <div className="c-form__submit-row" data-reveal>
              <button type="submit" className="btn c-form__submit">
                <span className="kanji">送信する</span>
                <span className="arrow" aria-hidden="true">→</span>
              </button>
              <span className="c-form__note">
                通信は安全に守られています。
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
