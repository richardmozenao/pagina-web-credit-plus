/**
 * CONFIGURACIÓN GENERAL DEL SITIO
 * -------------------------------
 * Edita este archivo con los datos reales de la empresa antes de publicar.
 */

export const siteConfig = {
  name: "CrediPlus",
  slogan: "Más crédito. Más oportunidades.",
  description:
    "CrediPlus ayuda a la comunidad latina en Estados Unidos a entender y fortalecer su historial crediticio con educación financiera y acompañamiento personalizado en español.",
  url: "https://www.crediplus.com", // TODO: reemplazar por el dominio real
  email: "soporte.crediplus@gmail.com",
  phoneDisplay: "(786) 555-1234", // TODO: número real de la oficina
  address: {
    city: "Miami",
    state: "FL",
    country: "Estados Unidos",
  },
  social: {
    facebook: "https://facebook.com/crediplususa",
    instagram: "https://instagram.com/crediplususa",
    tiktok: "https://tiktok.com/@crediplususa",
    youtube: "https://youtube.com/@crediplususa",
  },
};

/**
 * WHATSAPP
 * Reemplaza "1786555XXXX" por el número real en formato internacional,
 * sin espacios, sin "+" y sin guiones. Ejemplo: 17865551234
 */
export const whatsappConfig = {
  phoneNumber: "17865551234", // TODO: número real en formato internacional
  defaultMessage:
    "Hola, quiero más información sobre los servicios de CrediPlus.",
};

/**
 * EMAILJS
 * 1. Crea una cuenta gratuita en https://www.emailjs.com
 * 2. Conecta un servicio de correo (Gmail, Outlook, etc.) y copia el "Service ID"
 * 3. Crea una plantilla de correo y copia el "Template ID"
 * 4. En "Account > General" copia tu "Public Key"
 * 5. Crea un archivo .env.local en la raíz del proyecto (no lo subas a git) con:
 *
 *    NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
 *    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
 *    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
 *
 * El formulario de contacto (components/ContactForm.tsx) ya está listo
 * para leer estas variables y enviar los mensajes a soporte.crediplus@gmail.com
 */
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};
