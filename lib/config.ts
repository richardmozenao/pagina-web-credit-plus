/**
 * CONFIGURACIÓN GENERAL DEL SITIO
 * -------------------------------
 * Edita este archivo con los datos reales de la empresa antes de publicar.
 */

export const siteConfig = {
  name: "CreditPlus",
  slogan: "Más crédito. Más oportunidades.",
  description:
    "CreditPlus ayuda a la comunidad latina en Estados Unidos a entender y fortalecer su historial crediticio con educación financiera y acompañamiento personalizado en español e inglés.",
  url: "https://credit-plus.net",
  email: "creditplus.admin@gmail.com",
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
    "Hola, quiero más información sobre los servicios de CreditPlus.",
};

/**
 * STATIC FORMS (staticforms.dev)
 * El sitio es un export estático (GitHub Pages, sin backend), así que el
 * formulario de contacto envía el correo con Static Forms: un servicio
 * gratuito que recibe el POST directamente desde el navegador y reenvía
 * el mensaje a la casilla configurada en su dashboard (actualmente
 * creditplus.admin@gmail.com) — sin servidor propio ni secretos de build.
 *
 * Para activarlo:
 * 1. Entra a https://staticforms.dev y regístrate (gratis).
 * 2. Crea un formulario y copia su "Access Key".
 * 3. Pégala abajo.
 *
 * La Access Key es pública por diseño (viaja en el HTML del cliente), por
 * eso se guarda directo en este archivo y no como secret de CI.
 */
export const staticFormsConfig = {
  accessKey: "sf_5c4d4fd53bc2ccc7258873c5",
};
