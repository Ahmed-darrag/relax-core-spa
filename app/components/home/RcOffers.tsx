import { rcContent } from '../../config/rc-content';

export function RcOffers() {
  const { offers, bookingUrl } = rcContent;

  return (
    <section id="packages" className="rc-section rc-section--dark">
      <div className="rc-section__head">
        <span className="rc-eyebrow">البكجات والعروض</span>
        <h2>تجارب متكاملة، مصمّمة للاسترخاء الكامل</h2>
      </div>

      <div className="rc-grid">
        {offers.map((offer) => (
          <article key={offer.n} className="rc-offer-card">
            <span className="rc-offer-card__num">العرض {offer.n}</span>
            <div className="rc-offer-card__price">{offer.price} <small>ر.س</small></div>
            <ul className="rc-offer-card__items">
              {offer.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a href={bookingUrl} className="rc-btn-primary">احجز هذا العرض</a>
          </article>
        ))}
      </div>
    </section>
  );
}