import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ChefNote.css';

export default function ChefNote({ quote, eyebrow = '料理人の言葉', signature = '森 春人' }) {
  const root = useScrollReveal({ stagger: 0.15 });
  return (
    <section className="cn" ref={root}>
      <div className="cn__inner">
        <span className="eyebrow" data-reveal>{eyebrow}</span>
        <blockquote className="cn__quote kanji" data-reveal>
          <span className="cn__open" aria-hidden="true">「</span>
          {quote}
          <span className="cn__close" aria-hidden="true">」</span>
        </blockquote>
        <span className="cn__signature" data-reveal>— {signature}</span>
      </div>
    </section>
  );
}
