export function RcTopBar() {
    return (
        <div className="rc-topbar">
            <div className="rc-topbar__logo">RC SPA</div>
            <nav className="rc-topbar__nav">
                <a href="#">الرئيسية</a>
                <a href="#services">الخدمات</a>
                <a href="#packages">البكجات والعروض</a>
                <a href="#branches">الفروع</a>
                <a href="#gift">الإهداء</a>
            </nav>
            <a href="#booking" className="rc-btn-primary rc-topbar__cta">احجز الآن</a>
        </div>
    );
}