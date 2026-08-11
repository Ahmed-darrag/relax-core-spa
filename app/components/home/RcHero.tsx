// ملف جديد — احفظيه في: app/components/home/RcHero.tsx

interface RcHeroProps {
  imageUrl: string;
  bookingUrl?: string;
  title?: string;
  subtitle?: string;
}

export function RcHero({
  imageUrl,
  bookingUrl = '#booking',
  title = 'استرخاء يليق بك',
  subtitle = 'اكتشف تجربة Relax Core Spa للعناية والاسترخاء للرجال',
}: RcHeroProps) {
  return (
    <section className="rc-hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="rc-hero__overlay" />
      <div className="rc-hero__content">
        <h1 className="rc-hero__title">{title}</h1>
        <p className="rc-hero__subtitle">{subtitle}</p>
        <div className="rc-hero__actions">
          <a href={bookingUrl} className="rc-btn-primary">احجز موعدك الآن</a>
          <a href="#services" className="rc-btn-ghost" style={{ color: '#F1EBDD' }}>اكتشف خدماتنا</a>
        </div>
      </div>
    </section>
  );
}
