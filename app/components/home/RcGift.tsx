import { rcContent } from '../../config/rc-content';

export function RcGift() {
    const { gift } = rcContent;

    return (
        <section
            id="gift"
            className="rc-gift"
            style={{ backgroundImage: `url(/assets/images/${gift.image})` }}
        >
            <div className="rc-gift__overlay" />
            <div className="rc-gift__content">
                <h2>{gift.title}</h2>
                <p>{gift.subtitle}</p>
                <a href="#" className="rc-btn-primary">اطلب بطاقة إهداء</a>
            </div>
        </section>
    );
}