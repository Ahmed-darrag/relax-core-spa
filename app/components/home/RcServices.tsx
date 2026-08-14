import { useState } from 'react';
import { rcContent } from '../../config/rc-content';

const TABS = [
  { key: 'massage', label: 'المساج' },
  { key: 'hammam', label: 'الحمام المغربي' },
  { key: 'pedicure', label: 'البديكير' },
] as const;

export function RcServices() {
  const [active, setActive] = useState<typeof TABS[number]['key']>('massage');
  const { services, bookingUrl } = rcContent;
  const currentData = services[active];

  return (
    <section id="services" className="rc-section">
      <div className="rc-section__head">
        <span className="rc-eyebrow">خدماتنا</span>
        <h2>عناية تليق برجل يعرف قيمة وقته</h2>
      </div>

      <div className="rc-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`rc-tab${tab.key === active ? ' is-active' : ''}`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rc-grid">
        {currentData.map((service) => (
          <article key={service.name} className="rc-card rc-service-card">
            <div>
              <h3>{service.name}</h3>
              <div className="rc-service-card__meta">
                {service.duration && <span>{service.duration} دقيقة</span>}
                <span>{service.price} ر.س</span>
              </div>
            </div>
            <a href={bookingUrl} className="rc-btn-ghost">احجز الآن</a>
          </article>
        ))}
      </div>
    </section>
  );
}