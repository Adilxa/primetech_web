// EmailJS Configuration
// Используем переменные окружения для безопасного хранения ключей
export const EMAILJS_CONFIG = {
    // Конфигурация для формы на странице /form
    // Template variables: {{name}}, {{email}}, {{question}}
    FORM_PAGE: {
        PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_FORM_PUBLIC_KEY || "C4-t5WYKLbcRtLJkt",
        SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_FORM_SERVICE_ID || "service_yquupsc",
        TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_FORM_TEMPLATE_ID || "template_n0z67f9"
    },
    // Конфигурация для контактного бота на главной странице
    CONTACT_BOT: {
        PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_PUBLIC_KEY || "C4-t5WYKLbcRtLJkt",
        SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID || "service_yquupsc",
        TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "template_n0z67f9"
    }
};
