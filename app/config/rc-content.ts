// ============================================================================
// ملف واحد بس تعدّلي فيه — كل نصوص وصور وأسعار الموقع هنا
// أي تعديل هنا بيظهر تلقائيًا في كل الموقع، من غير ما تفتحي أي ملف تاني
// بعد أي تعديل: احفظي (Ctrl+S) بس — الموقع هيتحدث لوحده
// ============================================================================

export const rcContent = {
    // ---- الهيرو (أول قسم في الصفحة) ----
    hero: {
        // اسم صورة الخلفية — لازم تكون مرفوعة في public/assets/images/
        image: 'rc-hero.jpg',
        title: 'استرخاء يليق بك',
        subtitle: 'اكتشف تجربة Relax Core Spa للعناية والاسترخاء للرجال',
    },

    // ---- العروض الستة ----
    offers: [
        { n: 1, price: 400, items: ['45 دقيقة مساج سويدي', '30 دقيقة حمام مغربي', 'بخار', 'بديكير', 'بوكس'] },
        { n: 2, price: 450, items: ['60 دقيقة مساج سويدي', '30 دقيقة حمام مغربي', 'بخار', 'بديكير', 'بوكس'] },
        { n: 3, price: 250, items: ['45 دقيقة مساج سويدي', '30 دقيقة حمام مغربي'] },
        { n: 4, price: 350, items: ['60 دقيقة مساج مكس', '60 دقيقة حمام مغربي'] },
        { n: 5, price: 300, items: ['45 دقيقة مساج سويدي', 'بديكير كامل لليد والرجل', 'اسكراب', 'بوكس'] },
        { n: 6, price: 450, items: ['60 دقيقة مساج مكس', '60 دقيقة حمام مغربي', 'بديكير كامل لليد والرجل', 'اسكراب', 'بوكس'] },
    ],

    // ---- الخدمات (مساج / حمام مغربي / بديكير) ----
    services: {
        massage: [
            { name: 'مساج سويدي', duration: '45-60', price: '150-180' },
            { name: 'مساج تايلاندي', duration: '45-60', price: '160-190' },
            { name: 'مساج رياضي', duration: '45-60', price: '160-190' },
            { name: 'مساج شياتسو', duration: '45-60', price: '170-200' },
            { name: 'مساج كاسات الهواء', duration: '60', price: '220' },
            { name: 'مساج الأحجار الساخنة', duration: '60', price: '200' },
            { name: 'مساج VIP', duration: '75', price: '250' },
            { name: 'مساج ملكي', duration: '90', price: '300' },
            { name: 'مساج أقدام', duration: '30', price: '160' },
        ],
        hammam: [
            { name: 'حمام مغربي عادي', duration: '30-60', price: '150-200' },
            { name: 'حمام مغربي عطري', duration: '60', price: '200' },
            { name: 'حمام طين البحر الميت', duration: '60', price: '200' },
            { name: 'الحمام الملكي', duration: '90', price: '300' },
        ],
        pedicure: [
            { name: 'العناية بالأظافر', duration: '45', price: '180' },
            { name: 'جاكوزي', duration: '30', price: '110' },
            { name: 'علبة بديكير', price: '50' },
        ],
    },

    // ---- الفروع الثلاثة ----
    branches: [
        {
            name: 'فرع الدمام',
            image: 'rc-branch-dammam.jpg',
            address: 'حي الروضة، شارع عبدالله بن ثهيل الحارثي، الدمام',
            phone: '0508899770',
            maps: 'https://maps.app.goo.gl/hJjvsdsyPwnPpFTSA',
            hours: '24 ساعة طوال الاسبوع',
        },
        {
            name: 'فرع الخبر',
            image: 'rc-branch-khobar.jpg',
            address: 'حي الخزامي، طريق الملك خالد، الخبر',
            phone: '0508899770',
            maps: 'https://maps.app.goo.gl/zv26CSL1qvVvrDUj6',
            hours: ' 24 ساعة طوال الاسبوع',
        },
        {
            name: 'فرع الظهران',
            image: 'rc-branch-dhahran.jpg',
            address: 'الظهران، حي الضوحة الجنوبية. شارع الملك سعود بن عبدالعزير (',
            phone: '0508899770',
            maps: 'https://maps.app.goo.gl/k3U1MZCBYPjoxFQBA',
            hours: ' 24 ساعة طوال الاسبوع',
        },
    ],
    // ---- كروت الخدمات (بديكير / حمام مغربي / مساج) ----
    serviceCategories: [
        { title: 'المساج', desc: 'مجموعة متنوعة من جلسات المساج', image: 'rc-cat-massage.jpg' },
        { title: 'الحمام المغربي', desc: 'تجربة مغربية أصيلة لتنظيف وتنعيم البشرة', image: 'rc-cat-hammam.jpg' },
        { title: 'البديكير', desc: 'عناية متكاملة لليدين والقدمين', image: 'rc-cat-pedicure.jpg' },
    ],

    // ---- قسم الإهداء ----
    gift: {
        title: 'أهدِ تجربة استرخاء',
        subtitle: 'بطاقات إهداء Relax Core Spa هي الهدية المثالية لمن تحب',
        image: 'rc-gift.jpg',
    },
    // ---- قسم التواصل والسوشيال ميديا ----
    social: {
        whatsapp: 'https://wa.me/966508899770',
        instagram: 'https://www.instagram.com/sparelaxcare',
        tiktok: 'https://www.tiktok.com/@relaxcare.spa',
        snapchat: 'https://www.snapchat.com/@rc.spa',
        phones: [
            { label: 'الرقم الموحد', number: '0508899770' },
            { label: 'الدمام', number: '0570210799' },
            { label: 'الظهران', number: '0577574647' },
            { label: 'الخبر (الخزامي)', number: '0578998453' },
        ],
    },

    // رابط الحجز العام (هيتغير لاحقًا لما نفعّل خاصية الحجز في Salla)
    bookingUrl: '#booking',
};
