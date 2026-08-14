import { rcContent } from '../../config/rc-content';

export function RcHero() {
  const { hero, bookingUrl } = rcContent;
  const imageUrl = `/assets/images/${hero.image}`;

  return (
    <section className="rc-hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="rc-hero__overlay" />
      <div className="rc-hero__content">
        <h1 className="rc-hero__title">{hero.title}</h1>
        <p className="rc-hero__subtitle">{hero.subtitle}</p>
        <div className="rc-hero__actions">
          <a href={bookingUrl} className="rc-btn-primary">احجز موعدك الآن</a>
          <a href="#services" className="rc-btn-ghost" style={{ color: '#F1EBDD' }}>اكتشف خدماتنا</a>
        </div>
      </div>
    </section>
  );
}