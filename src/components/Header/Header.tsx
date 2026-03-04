"use client";
import s from "./Header.module.scss";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouter } from "next/navigation";
import BurgerButton from "@/ui/burgerButton/BurgerButton";
import BurgerMenu from "@/ui/burgerMenu/BurgerMenu";
import LanguageSwitcher from "@/ui/LanguageSwitcher/LanguageSwitcher";

const Header = () => {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <header className={s.Header}>
            <div className="container">
                <div className={s.content}>
                    <Link href="/" className={s.logo}>
                        PRIME TECH
                    </Link>

                    <nav className={s.nav}>
                        <div className={s.links}>
                            <Link href="/#main">{t.home}</Link>
                            <Link href="/#info">{t.aboutSystem}</Link>
                            <Link href="/#working">{t.howToPay}</Link>
                            <Link href="/#connecting">{t.connection}</Link>
                        </div>
                        <div className={s.btns}>
                            <LanguageSwitcher />
                            <button className={s.loginBtn} onClick={() => router.push("/login")}>
                                {t.account}
                            </button>
                            <div className={s.burgerWrap}>
                                <BurgerButton />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <BurgerMenu />
        </header>
    );
};

export default Header;
