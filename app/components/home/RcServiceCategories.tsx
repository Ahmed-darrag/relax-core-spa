import { rcContent } from '../../config/rc-content';

export function RcServiceCategories() {
    const { serviceCategories } = rcContent;

    return (
        <section className="rc-section">
            <div className="rc-section__head">
                <span className="rc-eyebrow">خدماتنا</span>
                <h2>اختر ما يناسبك</h2>
            </div>

            <div className="rc-grid">
                {serviceCategories.map((cat) => (
                    <article key={cat.title} className="rc-card rc-cat-card">
                        <div
                            className="rc-cat-card__img"
                            style={{ backgroundImage: `url(/assets/images/${cat.image})` }}
                        />
                        <div className="rc-cat-card__body">
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                            <a href="#services">عرض الخدمات</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}