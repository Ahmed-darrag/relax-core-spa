// ملف جديد — احفظيه في: app/components/home/RcOffers.tsx

// موثّقة حرفيًا من صورة العروض المرفوعة — 6 عروض
const OFFERS = [
  { n: 1, price: 400, items: ['45 دقيقة مساج سويدي', '30 دقيقة حمام مغربي', 'بخار', 'بديكير', 'بوكس'] },
  { n: 2, price: 450, items: ['60 دقيقة مساج سويدي', '30 دقيقة حمام مغربي', 'بخار', 'بديكير', 'بوكس'] },
  { n: 3, price: 250, items: ['45 دقيقة مساج سويدي', '30 دقيقة حمام مغربي'] },
  { n: 4, price: 350, items: ['60 دقيقة مساج مكس', '60 دقيقة حمام مغربي'] },
  { n: 5, price: 300, items: ['45 دقيقة مساج سويدي', 'بديكير كامل لليد والرجل', 'اسكراب', 'بوكس'] },
  { n: 6, price: 450, items: ['60 دقيقة مساج مكس', '60 دقيقة حمام مغربي', 'بديكير كامل لليد والرجل', 'اسكراب', 'بوكس'] },
];

export function RcOffers({ bookingUrl = '#booking' }: { bookingUrl?: string }) {
  return (
    <section id="packages" className="rc-section rc-section--dark">
      <div className="rc-section__head">
        <span className="rc-eyebrow">البكجات والعروض</span>
        <h2>تجارب متكاملة، مصمّمة للاسترخاء الكامل</h2>
      </div>

      <div className="rc-grid">
        {OFFERS.map((offer) => (
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
