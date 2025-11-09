"use client";
import React from "react";
import styles from "./BurgerMenu.module.scss";
import Link from "next/link";
import { useHeaderStore } from "@/stores/useHeaderStore";
import LanguageSwitcher from "@/ui/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouter } from "next/navigation";

const BurgerMenu: React.FC = () => {
    const { isOpenModal, setIsOpenModal } = useHeaderStore();
    const { t } = useTranslation();

    const router = useRouter()

    return (
        <div className={styles.main}>
            <nav
                className={`${styles.navMenu} ${isOpenModal ? styles.active : ""}`}
            >
                <button
                    onClick={() => router.push(
                        "login"
                    )}
                >{t.account}</button>
            </nav>
        </div>
    );
};

export default BurgerMenu;
