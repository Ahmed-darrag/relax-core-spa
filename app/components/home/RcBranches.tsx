// ملف جديد — احفظيه في: app/components/home/RcBranches.tsx

// ⚠️ عنوان فرع الظهران وساعات العمل غير مؤكدة بعد — راجعي القسم النصي أسفل الرد
const BRANCHES = [
  {
    name: 'فرع الدمام',
    image: '/rc-branch-dammam.jpg',
    address: 'حي الروضة، شارع عبدالله بن ثهيل الحارثي، الدمام',
    phone: '0570210799',
    maps: 'https://maps.app.goo.gl/hJjvsdsyPwnPpFTSA',
    hours: 'يُحدَّد لاحقًا',
  },
  {
    name: 'فرع الخبر',
    image: '/rc-branch-khobar.jpg',
    address: 'حي الخزامي، طريق الملك خالد، الخبر',
    phone: '0508899770',
    maps: 'https://maps.app.goo.gl/zv26CSL1qvVvrDUj6',
    hours: 'يُحدَّد لاحقًا',
  },
  {
    name: 'فرع الظهران',
    image: '/rc-branch-dhahran.jpg',
    address: 'الظهران، المنطقة الشرقية (العنوان التفصيلي غير مؤكد)',
    phone: 'يُحدَّد لاحقًا',
    maps: 'https://maps.app.goo.gl/k3U1MZCBYPjoxFQBA',
    hours: 'يُحدَّد لاحقًا',
  },
];

export function RcBranches({ bookingUrl = '#booking' }: { bookingUrl?: string }) {
  return (
    <section id="branches" className="rc-section">
      <div className="rc-section__head">
        <span className="rc-eyebrow">فروعنا</span>
        <h2>اختر الفرع الأقرب إليك</h2>
      </div>

      <div className="rc-grid">
        {BRANCHES.map((b) => (
          <article key={b.name} className="rc-card rc-branch-card">
            <div className="rc-branch-card__img" style={{ backgroundImage: `url(${b.image})` }} />
            <div className="rc-branch-card__body">
              <h3>{b.name}</h3>
              <p className="rc-branch-card__addr">{b.address}</p>
              <p className="rc-branch-card__hours">{b.hours}</p>
              <div className="rc-branch-card__actions">
                <a href={b.maps} target="_blank" rel="noreferrer" className="rc-btn-ghost">الموقع على الخريطة</a>
                <a href={`tel:${b.phone}`} className="rc-btn-ghost">اتصال</a>
              </div>
              <a href={`${bookingUrl}?branch=${encodeURIComponent(b.name)}`} className="rc-branch-card__book">
                احجز في هذا الفرع
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
