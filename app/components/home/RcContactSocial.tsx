import { rcContent } from '../../config/rc-content';

export function RcContactSocial() {
    const { social } = rcContent;

    return (
        <section className="rc-contact-social">
            <div className="rc-contact-social__inner">
                <h2>تواصل معنا</h2>

                <div className="rc-contact-social__icons">
                    <a href={social.whatsapp} target="_blank" rel="noreferrer" aria-label="واتساب">واتساب</a>
                    <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="انستجرام">انستجرام</a>
                    <a href={social.tiktok} target="_blank" rel="noreferrer" aria-label="تيك توك">تيك توك</a>
                    <a href={social.snapchat} target="_blank" rel="noreferrer" aria-label="سناب شات">سناب شات</a>
                </div>

                <div className="rc-contact-social__phones">
                    {social.phones.map((p) => (
                        <a key={p.number} href={`tel:${p.number}`}>
                            <span>{p.label}</span> {p.number}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}