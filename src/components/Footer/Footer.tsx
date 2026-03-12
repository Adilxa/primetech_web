"use client";
import s from "./Footer.module.scss";
import Link from "next/link";
import {useTranslation} from "@/hooks/useTranslation";
import {usePathname} from "next/navigation";

const Footer = () => {
    const {t} = useTranslation();
    const pathname = usePathname();

    return (
        <footer className={s.Footer}>
            <div className="container">
                <div className={s.content}>
                    <header>
                        <Link href="/">
                            <h2 className={s.logo}>PRIMETEK</h2>
                        </Link>

                        <nav>
                            <Link href="/#main">{t.home}</Link>
                            <Link href="/#info">{t.aboutSystem}</Link>
                            <Link href="/#working">{t.howToPay}</Link>
                            <Link href="/#connecting">{t.connection}</Link>
                            <Link href="/terms">{t.termsLink}</Link>
                        </nav>
                    </header>

                    <div className={s.footer}>
                        <div className={s.text}>
                            <h1>{t.contacts}</h1>
                            <a href="mailto:info@prime1.tech" className={s.contact}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <h6>info@prime1.tech</h6>
                            </a>
                            <a href="tel:+996703355388" className={s.contact}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <h6>+996 703 355 388</h6>
                            </a>
                            <a href="https://2gis.kg/bishkek/geo/70000001060690470/74.623431,42.848733" target="_blank" rel="noopener noreferrer" className={s.contact}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <h6>Бишкек, посмотреть на карте</h6>
                            </a>
                        </div>
                        {pathname !== "/form" && (
                            <div className={s.btn}>
                                <Link href="/form">
                                    <button>{t.connectBusiness}</button>
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className={s.bottom}>
                        <div className={s.requisites}>
                            <p>ООО «ПраймТек»</p>
                            <p>ИНН: 02810202410124</p>
                        </div>
                        <div className={s.licenses}>
                            <span>{t.licenses}:</span>
                            <a href="/license-1.pdf" target="_blank" rel="noopener noreferrer">Лицензия №1</a>
                            <a href="/license-2.pdf" target="_blank" rel="noopener noreferrer">Лицензия №2</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
