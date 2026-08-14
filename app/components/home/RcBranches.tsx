import { rcContent } from '../../config/rc-content';

export function RcBranches() {
  const { branches, bookingUrl } = rcContent;

  return (
    <section id="branches" className="rc-section">
      <div className="rc-section__head">
        <span className="rc-eyebrow">فروعنا</span>
        <h2>اختر الفرع الأقرب إليك</h2>
      </div>

      <div className="rc-grid">
        {branches.map((b) => (
          <article key={b.name} className="rc-card rc-branch-card">
            <div
              className="rc-branch-card__img"
              style={{ backgroundImage: `url(/assets/images/${b.image})` }}
            />
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