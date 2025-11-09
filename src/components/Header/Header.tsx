"use client";
import Image from "next/image";
import s from "./Header.module.scss";
import logo from "@/assets/icons/logo.svg";
import Link from "next/link";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher";
import { useEffect, useState } from "react";
import BurgerButton from "@/ui/burgerButton/BurgerButton";
import { useHeaderStore } from "@/stores/useHeaderStore";
import BurgerMenu from "@/ui/burgerMenu/BurgerMenu";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouter } from "next/navigation";

const Header = () => {
    const { t } = useTranslation();

    const router = useRouter()

    return (
        <header className={s.Header}>
            <div className="container">
                <div className={s.content}>
                    <Link href="/">
                        <h1 className="text-2xl font-bold">PRIME TECH</h1>
                    </Link>

                    <nav className={s.nav}>
                        <div className={s.btns}>
                            <button
                                onClick={() => router.push(
                                    "login"
                                )}
                            >{t.account}</button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
