import type {Metadata, Viewport} from "next";
import "./globals.scss";
import {Providers} from "@/components/Providers";

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://primetech.kg'),
    manifest: '/manifest.json',
    title: {
        default: "Primetech | Быстрые и безопасные платежи",
        template: "%s | Primetech"
    },
    description: "Primetech - надежная платежная система для быстрых переводов и оплаты услуг. Безопасные транзакции, выгодные тарифы и круглосуточная поддержка.",
    keywords: ["платежная система", "онлайн платежи", "денежные переводы", "электронные платежи", "финансовые услуги", "Primetech"],
    authors: [{name: "KG Friends"}],
    creator: "KG Friends",
    publisher: "Kg Friends",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-video-preview': -1,
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/icon',
        apple: '/icon512_maskable.png?v=4',
    },
    applicationName: 'Primetech',
    category: 'finance',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}