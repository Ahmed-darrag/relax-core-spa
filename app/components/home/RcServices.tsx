// ملف جديد — احفظيه في: app/components/home/RcServices.tsx
import { useState } from 'react';

interface Service {
  name: string;
  duration?: string;
  price: string;
  bookingUrl?: string;
}

// بيانات موثّقة من قائمة الأسعار المرفوعة — يفضّل لاحقًا ربطها بمنتجات Salla
const MASSAGE: Service[] = [
  { name: 'مساج سويدي', duration: '45-60', price: '150-180' },
  { name: 'مساج تايلاندي', duration: '45-60', price: '160-190' },
  { name: 'مساج رياضي', duration: '45-60', price: '160-190' },
  { name: 'مساج شياتسو', duration: '45-60', price: '170-200' },
  { name: 'مساج كاسات الهواء', duration: '60', price: '220' },
  { name: 'مساج الأحجار الساخنة', duration: '60', price: '200' },
  { name: 'مساج VIP', duration: '75', price: '250' },
  { name: 'مساج ملكي', duration: '90', price: '300' },
  { name: 'مساج أقدام', duration: '30', price: '160' },
];

const HAMMAM: Service[] = [
  { name: 'حمام مغربي عادي', duration: '30-60', price: '150-200' },
  { name: 'حمام مغربي عطري', duration: '60', price: '200' },
  { name: 'حمام طين البحر الميت', duration: '60', price: '200' },
  { name: 'الحمام الملكي', duration: '90', price: '300' },
];

const PEDICURE: Service[] = [
  { name: 'العناية بالأظافر', duration: '45', price: '180' },
  { name: 'جاكوزي', duration: '30', price: '110' },
  { name: 'علبة بديكير', price: '50' },
];

const TABS = [
  { key: 'massage', label: 'المساج', data: MASSAGE },
  { key: 'hammam', label: 'الحمام المغربي', data: HAMMAM },
  { key: 'pedicure', label: 'البديكير', data: PEDICURE },
] as const;

export function RcServices({ bookingUrl = '#booking' }: { bookingUrl?: string }) {
  const [active, setActive] = useState<typeof TABS[number]['key']>('massage');
  const current = TABS.find((t) => t.key === active)!;

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
        {current.data.map((service) => (
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
