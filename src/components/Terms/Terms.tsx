"use client";
import s from "./Terms.module.scss";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "@/ui/LanguageSwitcher/LanguageSwitcher";

const Terms = () => {
    const { t } = useTranslation();

    return (
        <div className={s.Terms}>
            <div className={s.background}>
                <div className={s.gradientOrb1} />
                <div className={s.gradientOrb2} />
                <div className={s.gridOverlay} />
            </div>

            <div className="container">
                <header className={s.header}>
                    <Link href="/" className={s.logo}>
                        <h2>PRIMETEK</h2>
                    </Link>
                    <div className={s.headerActions}>
                        <LanguageSwitcher />
                        <Link href="/" className={s.backBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                            {t.termsBackToHome}
                        </Link>
                    </div>
                </header>

                <main className={s.content}>
                    <div className={s.titleSection}>
                        <div className={s.badge}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10 9 9 9 8 9"/>
                            </svg>
                            <span>{t.termsLastUpdated}: 2025</span>
                        </div>
                        <h1>{t.termsOfService}</h1>
                        <p className={s.subtitle}>Primetek</p>
                    </div>

                    <div className={s.sections}>
                        {/* Section 1 */}
                        <section className={s.section}>
                            <div className={s.sectionHeader}>
                                <div className={s.sectionNumber}>01</div>
                                <h2>{t.termsSection1Title}</h2>
                            </div>
                            <div className={s.sectionContent}>
                                {t.termsSection1Content.map((paragraph: string, index: number) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className={s.section}>
                            <div className={s.sectionHeader}>
                                <div className={s.sectionNumber}>02</div>
                                <h2>{t.termsSection2Title}</h2>
                            </div>
                            <div className={s.sectionContent}>
                                <p>{t.termsSection2Intro}</p>
                                <ul className={s.featureList}>
                                    {t.termsSection2List.map((item: string, index: number) => (
                                        <li key={index}>
                                            <span className={s.checkIcon}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                    <polyline points="20 6 9 17 4 12"/>
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p>{t.termsSection2Outro}</p>
                                <ul className={s.channelList}>
                                    {t.termsSection2Channels.map((channel: string, index: number) => (
                                        <li key={index}>
                                            <span className={s.dot} />
                                            {channel}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className={s.section}>
                            <div className={s.sectionHeader}>
                                <div className={s.sectionNumber}>03</div>
                                <h2>{t.termsSection3Title}</h2>
                            </div>
                            <div className={s.sectionContent}>
                                <p>{t.termsSection3Intro}</p>
                                <ol className={s.stepsList}>
                                    {t.termsSection3Steps.map((step: string, index: number) => (
                                        <li key={index}>
                                            <span className={s.stepNumber}>{index + 1}</span>
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                                <p className={s.note}>{t.termsSection3Outro}</p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className={s.section}>
                            <div className={s.sectionHeader}>
                                <div className={s.sectionNumber}>04</div>
                                <h2>{t.termsSection4Title}</h2>
                            </div>
                            <div className={s.sectionContent}>
                                <p>{t.termsSection4Intro}</p>
                                <ul className={s.featureList}>
                                    {t.termsSection4List.map((item: string, index: number) => (
                                        <li key={index}>
                                            <span className={s.checkIcon}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                    <polyline points="20 6 9 17 4 12"/>
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className={s.note}>{t.termsSection4Outro}</p>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className={s.section}>
                            <div className={s.sectionHeader}>
                                <div className={s.sectionNumber}>05</div>
                                <h2>{t.termsSection5Title}</h2>
                            </div>
                            <div className={s.sectionContent}>
                                <div className={s.subsection}>
                                    <h3>{t.termsSection5ObligationsTitle}</h3>
                                    <ul className={s.obligationList}>
                                        {t.termsSection5Obligations.map((item: string, index: number) => (
                                            <li key={index}>
                                                <span className={s.obligationIcon}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <circle cx="12" cy="12" r="10"/>
                                                        <line x1="12" y1="8" x2="12" y2="12"/>
                                                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                                                    </svg>
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={s.subsection}>
                                    <h3>{t.termsSection5RightsTitle}</h3>
                                    <ul className={s.rightsList}>
                                        {t.termsSection5Rights.map((item: string, index: number) => (
                                            <li key={index}>
                                                <span className={s.rightsIcon}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                                        <polyline points="22 4 12 14.01 9 11.01"/>
                                                    </svg>
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className={s.section}>
                            <div className={s.sectionHeader}>
                                <div className={s.sectionNumber}>06</div>
                                <h2>{t.termsSection6Title}</h2>
                            </div>
                            <div className={s.sectionContent}>
                                <div className={s.securityBanner}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    </svg>
                                    <p>{t.termsSection6Intro}</p>
                                </div>
                                <h4>{t.termsSection6Subtitle}</h4>
                                <ul className={s.securityList}>
                                    {t.termsSection6List.map((item: string, index: number) => (
                                        <li key={index}>
                                            <span className={s.securityIcon}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                                    <polyline points="9 12 11 14 15 10"/>
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section className={s.section}>
                            <div className={s.sectionHeader}>
                                <div className={s.sectionNumber}>07</div>
                                <h2>{t.termsSection7Title}</h2>
                            </div>
                            <div className={s.sectionContent}>
                                <p>{t.termsSection7Intro}</p>
                                <h4>{t.termsSection7Subtitle}</h4>
                                <ul className={s.limitationList}>
                                    {t.termsSection7List.map((item: string, index: number) => (
                                        <li key={index}>
                                            <span className={s.xIcon}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10"/>
                                                    <line x1="15" y1="9" x2="9" y2="15"/>
                                                    <line x1="9" y1="9" x2="15" y2="15"/>
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section className={s.section}>
                            <div className={s.sectionHeader}>
                                <div className={s.sectionNumber}>08</div>
                                <h2>{t.termsSection8Title}</h2>
                            </div>
                            <div className={s.sectionContent}>
                                {t.termsSection8Content.map((paragraph: string, index: number) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section className={s.section}>
                            <div className={s.sectionHeader}>
                                <div className={s.sectionNumber}>09</div>
                                <h2>{t.termsSection9Title}</h2>
                            </div>
                            <div className={s.sectionContent}>
                                {t.termsSection9Content.map((paragraph: string, index: number) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </section>
                    </div>

                    <footer className={s.footer}>
                        <div className={s.footerContent}>
                            <p>&copy; {new Date().getFullYear()} Primetek. All rights reserved.</p>
                            <Link href="/" className={s.footerBtn}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                    <polyline points="9 22 9 12 15 12 15 22"/>
                                </svg>
                                {t.termsBackToHome}
                            </Link>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default Terms;
