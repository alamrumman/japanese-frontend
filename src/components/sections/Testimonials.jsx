import { useScrollReveal } from '../../hooks/useScrollReveal';
import { testimonials } from './config/site.config';
import './Testimonials.css';

export default function Testimonials() {
  const root = useScrollReveal({ stagger: 0.12 });
  return (
    <section className="quotes" ref={root}>
      <div className="container">
        <header className="quotes__header">
          <span className="eyebrow" data-reveal>五 · お客様の声</span>
          <h2 className="quotes__heading" data-reveal>
            静かな部屋、声高く憶えて。
          </h2>
        </header>

        <div className="quotes__grid">
          {testimonials.map((t, i) => (
            <figure className="quote" key={i} data-reveal>
              <span className="quote__mark" aria-hidden="true">「</span>
              <blockquote className="quote__body">{t.quote}</blockquote>
              <figcaption className="quote__cite">
                <span className="quote__name">{t.name}</span>
                <span className="quote__where">{t.where}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
