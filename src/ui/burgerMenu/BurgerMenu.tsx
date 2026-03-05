"use client";
import React from "react";
import styles from "./BurgerMenu.module.scss";
import Link from "next/link";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouter } from "next/navigation";

const BurgerMenu: React.FC = () => {
    const { isOpenModal, setIsOpenModal } = useHeaderStore();
    const { t } = useTranslation();

    const router = useRouter()

    const handleLinkClick = () => {
        setIsOpenModal(false);
    };

    return (
        <div className={`${styles.main} ${isOpenModal ? styles.active : ""}`}>
            <nav className={styles.navMenu}>
                <div className={styles.links}>
                    <Link href="/#main" onClick={handleLinkClick}>{t.home}</Link>
                    <Link href="/#info" onClick={handleLinkClick}>{t.aboutSystem}</Link>
                    <Link href="/#working" onClick={handleLinkClick}>{t.howToPay}</Link>
                    <Link href="/#connecting" onClick={handleLinkClick}>{t.connection}</Link>
                    <Link href="/terms" onClick={handleLinkClick}>{t.termsLink}</Link>
                </div>
                <button
                    onClick={() => {
                        handleLinkClick();
                        router.push("login");
                    }}
                >{t.account}</button>
            </nav>
        </div>
    );
};

export default BurgerMenu;
