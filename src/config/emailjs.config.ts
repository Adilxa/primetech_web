// EmailJS Configuration
// Используем переменные окружения для безопасного хранения ключей
export const EMAILJS_CONFIG = {
    // Конфигурация для формы на странице /form
    FORM_PAGE: {
        PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_FORM_PUBLIC_KEY || "7MZDqAOqQeiz76dwl",
        SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_FORM_SERVICE_ID || "service_b4uu7fm",
        TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_FORM_TEMPLATE_ID || "template_15op4k7"
    },
    // Конфигурация для контактного бота на главной странице
    CONTACT_BOT: {
        PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_PUBLIC_KEY || "99jSd3AsW_OB-cBIq",
        SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID || "service_rqfx799",
        TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "template_b179jhr"
    }
};
