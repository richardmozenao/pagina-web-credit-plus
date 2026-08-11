import type { Locale } from "./routes";

export type ServiceIconName =
  | "FileSearch"
  | "GraduationCap"
  | "TrendingUp"
  | "Home"
  | "Car"
  | "Compass";

/**
 * Todas las secciones legales comparten esta firma (nombre, ciudad, estado,
 * país), aunque la mayoría solo usa "name" o ningún dato — así evitamos que
 * TypeScript infiera un tipo de función distinto por sección y se queje al
 * llamarlas genéricamente desde las páginas legales.
 */
export type LegalSection = {
  heading: string;
  body: (name: string, city: string, state: string, country: string) => string;
};

export type Dictionary = typeof es;

const es = {
  common: {
    skipToContent: "Saltar al contenido principal",
    langName: "Español",
  },
  nav: {
    links: [
      { href: "", label: "Inicio" },
      { href: "/servicios", label: "Servicios" },
      { href: "/sobre-nosotros", label: "Sobre Nosotros" },
      { href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
      { href: "/contacto", label: "Contacto" },
    ],
    ariaLabel: "Navegación principal",
    cta: "Agenda tu consulta",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  footer: {
    navTitle: "Navegación",
    legalTitle: "Legal",
    links: [
      { href: "/servicios", label: "Servicios" },
      { href: "/sobre-nosotros", label: "Sobre Nosotros" },
      { href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
      { href: "/contacto", label: "Contacto" },
    ],
    legalLinks: [
      { href: "/politica-de-privacidad", label: "Política de Privacidad" },
      { href: "/terminos-y-condiciones", label: "Términos y Condiciones" },
      { href: "/aviso-legal", label: "Aviso Legal" },
    ],
    rights: (year: number, name: string) =>
      `© ${year} ${name}. Todos los derechos reservados. ${name} no es una entidad gubernamental ni está afiliada al gobierno de Estados Unidos.`,
    social: {
      facebook: "CreditPlus en Facebook",
      instagram: "CreditPlus en Instagram",
      youtube: "CreditPlus en YouTube",
    },
  },
  hero: {
    titlePre: "Tu crédito puede",
    titleGradient: "abrirte nuevas oportunidades.",
    description:
      "Te acompañamos a entender tu reporte de crédito, tomar mejores decisiones financieras y prepararte con confianza para tu próxima casa, tu próximo auto o la tarjeta que necesitas.",
    ctaPrimary: "Agenda tu consulta",
    ctaSecondary: "Escríbenos",
    disclaimer:
      "Servicio educativo e informativo. No garantizamos aumentos de puntaje ni eliminación de deudas.",
    imageAlt: "Familia latina sonriendo frente a su nueva casa, celebrando un logro financiero",
  },
  stats: [
    { value: 10, suffix: "+", label: "Años de experiencia" },
    { value: 15000, suffix: "+", label: "Personas orientadas" },
  ],
  benefits: {
    kicker: "Por qué CreditPlus",
    title: "Un acompañamiento honesto, pensado para ti",
    items: [
      {
        icon: "Users" as const,
        title: "Acompañamiento personalizado",
        text: "Un plan hecho a partir de tu situación real, no una receta genérica.",
      },
      {
        icon: "GraduationCap" as const,
        title: "Educación financiera",
        text: "Aprendes a leer tu reporte y a tomar decisiones informadas a largo plazo.",
      },
      {
        icon: "Eye" as const,
        title: "Transparencia",
        text: "Sin promesas irreales. Te decimos qué es posible y qué no lo es.",
      },
      {
        icon: "Award" as const,
        title: "Experiencia",
        text: "Años ayudando a familias latinas a avanzar hacia sus metas financieras.",
      },
    ],
  },
  services: {
    kicker: "Nuestros servicios",
    title: "Acompañamiento en cada etapa de tu camino financiero",
    ctaButton: "Consultar sobre este servicio",
    linkMore: "Conocer más",
    items: [
      {
        slug: "revision-de-reporte",
        title: "Revisión del reporte de crédito",
        iconName: "FileSearch" as ServiceIconName,
        short: "Analizamos tu reporte y te explicamos qué significa cada dato.",
        description:
          "Revisamos tu reporte de crédito contigo, punto por punto, en tu idioma y sin tecnicismos, para que entiendas exactamente qué información contiene y cómo te afecta.",
      },
      {
        slug: "educacion-financiera",
        title: "Educación financiera",
        iconName: "GraduationCap" as ServiceIconName,
        short: "Aprende a manejar el crédito con conocimiento, no con adivinanzas.",
        description:
          "Te enseñamos los conceptos clave del sistema financiero de Estados Unidos: cómo se calcula un puntaje, qué factores lo afectan y cómo tomar decisiones informadas.",
      },
      {
        slug: "estrategias-personalizadas",
        title: "Estrategias personalizadas",
        iconName: "TrendingUp" as ServiceIconName,
        short: "Un plan de acción adaptado a tu historial y tus metas.",
        description:
          "Diseñamos un plan realista según tu situación actual, con pasos claros que puedes seguir a tu propio ritmo para fortalecer tu perfil crediticio con el tiempo.",
      },
      {
        slug: "preparacion-hipotecaria",
        title: "Preparación para préstamos hipotecarios",
        iconName: "Home" as ServiceIconName,
        short: "Llega mejor preparado al proceso de comprar tu casa.",
        description:
          "Te orientamos sobre qué revisan los prestamistas hipotecarios y qué aspectos de tu perfil conviene fortalecer antes de iniciar el proceso de compra de vivienda.",
      },
      {
        slug: "financiamiento-vehicular",
        title: "Preparación para financiamiento de vehículos",
        iconName: "Car" as ServiceIconName,
        short: "Entiende qué evalúan las financieras de autos.",
        description:
          "Te explicamos cómo funciona el financiamiento de autos en Estados Unidos y qué puedes hacer para presentarte con mayor confianza ante una financiera.",
      },
      {
        slug: "construccion-de-historial",
        title: "Orientación para construir mejor historial",
        iconName: "Compass" as ServiceIconName,
        short: "Hábitos y herramientas para un historial más sólido con el tiempo.",
        description:
          "Te acompañamos en la construcción de hábitos financieros saludables y el uso responsable de herramientas de crédito para fortalecer tu historial a largo plazo.",
      },
    ],
  },
  process: {
    kicker: "Nuestro proceso",
    title: "Cuatro pasos claros, sin sorpresas",
    stepLabel: "Paso",
    steps: [
      {
        icon: "PhoneCall" as const,
        title: "Consulta",
        text: "Conversamos sobre tu situación actual y tus metas financieras, sin costo ni compromiso.",
      },
      {
        icon: "SearchCheck" as const,
        title: "Análisis",
        text: "Revisamos tu reporte de crédito y te explicamos con claridad lo que encontramos.",
      },
      {
        icon: "ClipboardList" as const,
        title: "Plan personalizado",
        text: "Diseñamos contigo una estrategia realista, adaptada a tu historial y objetivos.",
      },
      {
        icon: "LineChart" as const,
        title: "Seguimiento",
        text: "Te acompañamos en el camino, ajustando el plan a medida que avanzas.",
      },
    ],
  },
  testimonials: {
    kicker: "Testimonios",
    title: "Historias de personas que confiaron en nosotros",
    disclaimer:
      "Los testimonios y fotografías mostrados son ejemplos ilustrativos creados para fines de diseño y no representan clientes reales de CreditPlus.",
    items: [
      {
        name: "Marisol R.",
        city: "Houston, TX",
        rating: 5,
        photo:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        quote:
          "Me explicaron mi reporte de crédito con paciencia y en mi idioma. Por fin entendí qué estaba pasando con mi historial.",
      },
      {
        name: "Jorge M.",
        city: "Orlando, FL",
        rating: 5,
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        quote:
          "El plan que armamos juntos fue realista y claro. Sentí que trabajaban conmigo, no solo para venderme algo.",
      },
      {
        name: "Ana P.",
        city: "Phoenix, AZ",
        rating: 5,
        photo:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
        quote:
          "Aprendí mucho sobre cómo funciona el crédito aquí en Estados Unidos. Hoy me siento más segura tomando decisiones.",
      },
    ],
  },
  faq: {
    kicker: "Preguntas frecuentes",
    title: "Respuestas claras, sin letras pequeñas",
    items: [
      {
        question: "¿CreditPlus garantiza que mi puntaje de crédito va a subir?",
        answer:
          "No. Ninguna empresa puede garantizar de forma legítima un aumento específico de tu puntaje de crédito. Lo que sí hacemos es ayudarte a entender tu reporte, educarte sobre buenas prácticas financieras y acompañarte con estrategias personalizadas realistas.",
      },
      {
        question: "¿Ustedes eliminan deudas o negativos de mi reporte?",
        answer:
          "No prometemos ni garantizamos la eliminación de deudas o de información negativa de tu reporte. Nuestro trabajo es de orientación y educación financiera, no de intervención legal sobre tu historial.",
      },
      {
        question: "¿La primera consulta tiene algún costo?",
        answer:
          "La consulta inicial es gratuita y sin compromiso. En ella conversamos sobre tu situación y te explicamos cómo podemos ayudarte.",
      },
      {
        question: "¿En qué idioma es la atención?",
        answer:
          "Atendemos en español, desde la primera llamada hasta el seguimiento.",
      },
      {
        question: "¿Cuánto tiempo toma ver resultados?",
        answer:
          "Cada historial de crédito es diferente y los tiempos varían de persona a persona. En tu consulta te explicamos, según tu caso particular, qué tipo de avances son razonables esperar y en qué plazos.",
      },
      {
        question: "¿Trabajan con personas que están preparándose para comprar casa o auto?",
        answer:
          "Sí. Una parte importante de nuestro trabajo es ayudarte a prepararte, con tiempo, antes de solicitar un préstamo hipotecario o un financiamiento de vehículo.",
      },
      {
        question: "¿Mis datos están seguros?",
        answer:
          "Sí. Tratamos tu información con confidencialidad y solo la usamos para brindarte el servicio solicitado. Puedes conocer más detalles en nuestra Política de Privacidad.",
      },
    ],
  },
  cta: {
    title: "Da el primer paso hacia un mejor futuro financiero",
    text: "Agenda una consulta gratuita y conversemos sobre cómo fortalecer tu perfil crediticio.",
    button: "Agenda tu consulta gratuita",
  },
  whatsapp: {
    ariaLabel: "Escríbenos por WhatsApp",
    defaultMessage: "Hola, quiero más información sobre los servicios de CreditPlus.",
  },
  backToTop: {
    ariaLabel: "Volver arriba",
  },
  notFound: {
    title: "Esta página no está disponible",
    text: "El enlace que intentaste abrir no existe o fue movido. Puedes volver al inicio o escribirnos si necesitas ayuda.",
    home: "Volver al inicio",
    contact: "Contactar soporte",
  },
  home: {
    title: "Más crédito, más oportunidades",
    description:
      "CreditPlus ayuda a la comunidad latina en Estados Unidos a entender su crédito, educarse financieramente y prepararse para comprar casa o auto.",
  },
  contactPage: {
    title: "Contacto",
    description:
      "Agenda tu consulta gratuita con CreditPlus. Escríbenos por correo, WhatsApp o completa el formulario y te contactaremos.",
    kicker: "Contacto",
    heading: "Hablemos sobre tu próximo paso financiero",
    subheading:
      "Completa el formulario o escríbenos directamente. Te respondemos sin presión ni compromiso.",
    info: {
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
      schedule: "Horario",
      scheduleValue: "Lun – Vie · 9:00 am – 6:00 pm",
    },
    form: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      serviceLabel: "¿En qué te podemos ayudar?",
      serviceOptions: [
        "Revisión de reporte de crédito",
        "Educación financiera",
        "Preparación para préstamo hipotecario",
        "Preparación para financiamiento de auto",
        "Otro",
      ],
      servicePlaceholder: "Selecciona una opción",
      message: "Mensaje",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
      notConfigured:
        "El formulario aún no está conectado. Configura la Access Key de Static Forms en lib/config.ts (ver instrucciones en el archivo README.md).",
      sendError:
        "No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos directamente por correo o WhatsApp.",
      success: "¡Gracias! Recibimos tu mensaje y te contactaremos pronto.",
    },
  },
  servicesPage: {
    title: "Servicios",
    description:
      "Conoce los servicios de CreditPlus: revisión de reporte de crédito, educación financiera, estrategias personalizadas y preparación para préstamos hipotecarios y de auto.",
    kicker: "Servicios",
    heading: "Todo lo que hacemos por tu tranquilidad financiera",
    subheading:
      "Cada servicio está diseñado para informarte y prepararte, con honestidad, sin promesas irreales sobre tu puntaje o tus deudas.",
  },
  aboutPage: {
    title: "Sobre Nosotros",
    description:
      "Conoce la misión, visión y valores de CreditPlus: ayudar a la comunidad latina en Estados Unidos a fortalecer su historial crediticio con honestidad y educación.",
    kicker: "Sobre nosotros",
    heading: "Acompañamos a la comunidad latina hacia un mejor futuro financiero",
    intro:
      "CreditPlus nació para cerrar una brecha real: la falta de información financiera clara, en tu idioma, para quienes están construyendo su vida en Estados Unidos.",
    imageAlt: "Equipo de asesores de CreditPlus conversando en una reunión de trabajo",
    mission: {
      title: "Misión",
      text: "Ayudar a la comunidad latina en Estados Unidos a mejorar su historial crediticio mediante asesoría personalizada, educación financiera y soluciones transparentes que les permitan alcanzar sus metas.",
    },
    vision: {
      title: "Visión",
      text: "Ser una referencia confiable para la comunidad hispana en Estados Unidos, reconocida por su honestidad, claridad y excelente servicio.",
    },
    promise: {
      title: "Nuestra promesa",
      text: "Creemos que un mejor crédito abre la puerta a nuevas oportunidades. Nuestro compromiso es acompañarte con honestidad, claridad y un servicio cercano.",
    },
    valuesKicker: "Nuestros valores",
    valuesTitle: "Lo que guía cada conversación con nuestros clientes",
    values: [
      { icon: "ShieldCheck" as const, title: "Transparencia" },
      { icon: "HeartHandshake" as const, title: "Honestidad" },
      { icon: "Handshake" as const, title: "Compromiso" },
      { icon: "BookOpen" as const, title: "Educación" },
    ],
  },
  faqPage: {
    title: "Preguntas Frecuentes",
    description:
      "Resolvemos las dudas más comunes sobre los servicios de educación financiera y orientación de crédito de CreditPlus.",
    kicker: "Ayuda",
    heading: "Preguntas frecuentes",
  },
  legal: {
    updated: "30 de junio de 2026",
    avisoLegal: {
      title: "Aviso Legal",
      metaDescription: "Información legal e identificación del titular del sitio web de CreditPlus.",
      sections: [
        {
          heading: "Identificación",
          body: (name: string, city: string, state: string, country: string) =>
            `Este sitio web es operado por ${name}, con domicilio en ${city}, ${state}, ${country}. Para cualquier consulta legal, puedes escribir a`,
        },
        {
          heading: "Naturaleza informativa",
          body: (name: string) =>
            `${name} no es una entidad gubernamental, no está afiliada al gobierno de Estados Unidos, ni es un buró de crédito, banco o institución de préstamos. Los servicios ofrecidos son de carácter educativo y de orientación general; no constituyen asesoría legal ni financiera individualizada de carácter vinculante.`,
        },
        {
          heading: "Sin garantías de resultados",
          body: () =>
            "No garantizamos aumentos de puntaje de crédito, aprobación de préstamos ni eliminación de deudas o información de tu reporte de crédito. Cualquier ejemplo, testimonio o cifra presentada en este sitio tiene fines ilustrativos, salvo que se indique lo contrario.",
        },
        {
          heading: "Enlaces a terceros",
          body: () =>
            "Este sitio puede contener enlaces a sitios de terceros (como redes sociales o WhatsApp). No nos hacemos responsables por el contenido o las políticas de privacidad de sitios externos.",
        },
      ] as LegalSection[],
    },
    privacidad: {
      title: "Política de Privacidad",
      metaDescription: "Cómo CreditPlus recopila, usa y protege tu información personal.",
      intro: (name: string) =>
        `En ${name} respetamos tu privacidad y nos comprometemos a proteger la información personal que nos compartes. Esta política explica qué información recopilamos, cómo la usamos y qué derechos tienes sobre ella.`,
      sections: [
        {
          heading: "1. Información que recopilamos",
          body: () =>
            "Recopilamos la información que nos proporcionas directamente a través de nuestro formulario de contacto, correo electrónico o WhatsApp, como tu nombre, correo electrónico, número de teléfono y el contenido de tu mensaje. También podemos recopilar información técnica básica de navegación (como el tipo de dispositivo o navegador) con fines de mejora del sitio.",
        },
        {
          heading: "2. Cómo usamos tu información",
          body: () =>
            "Usamos tu información únicamente para responder tus consultas, brindarte los servicios solicitados y, si nos autorizas, enviarte contenido educativo relacionado con finanzas personales. No vendemos ni alquilamos tu información a terceros.",
        },
        {
          heading: "3. Cómo protegemos tu información",
          body: () =>
            "Implementamos medidas razonables, técnicas y organizativas, para proteger tu información contra accesos no autorizados, pérdida o uso indebido.",
        },
        {
          heading: "4. Servicios de terceros",
          body: () =>
            "Utilizamos proveedores externos, como el servicio de envío de formularios Static Forms, únicamente para procesar y entregarnos los mensajes que envías a través de nuestro sitio. Estos proveedores tienen sus propias políticas de privacidad.",
        },
        {
          heading: "5. Tus derechos",
          body: () =>
            "Puedes solicitarnos en cualquier momento que actualicemos o eliminemos tu información personal escribiéndonos a",
        },
        {
          heading: "6. Cambios a esta política",
          body: () =>
            "Podemos actualizar esta política ocasionalmente. Publicaremos cualquier cambio en esta misma página junto con la fecha de actualización.",
        },
      ] as LegalSection[],
    },
    terminos: {
      title: "Términos y Condiciones",
      metaDescription: "Condiciones de uso del sitio web y los servicios de CreditPlus.",
      sections: [
        {
          heading: "1. Naturaleza del servicio",
          body: (name: string) =>
            `${name} ofrece servicios de educación financiera y orientación general sobre el manejo del crédito personal. No somos una entidad gubernamental, un buró de crédito, ni una institución financiera, y no otorgamos préstamos ni líneas de crédito.`,
        },
        {
          heading: "2. Ausencia de garantías",
          body: () =>
            "No garantizamos resultados específicos, incluyendo, sin limitación, el aumento de tu puntaje de crédito, la aprobación de un préstamo, la eliminación de deudas o información negativa de tu reporte de crédito. Los resultados dependen de múltiples factores fuera de nuestro control, incluyendo tu historial financiero individual y las decisiones de terceros como bancos y burós de crédito.",
        },
        {
          heading: "3. Uso del sitio web",
          body: () =>
            "El contenido de este sitio es de carácter informativo y educativo. Al usar este sitio, aceptas no utilizarlo con fines ilícitos ni de manera que pueda dañar, deshabilitar o sobrecargar nuestros servidores.",
        },
        {
          heading: "4. Propiedad intelectual",
          body: (name: string) =>
            `El contenido, diseño, textos e imágenes de este sitio son propiedad de ${name} o de sus respectivos licenciantes y están protegidos por leyes de propiedad intelectual. No está permitida su reproducción sin autorización previa.`,
        },
        {
          heading: "5. Modificaciones",
          body: () =>
            "Podemos actualizar estos términos en cualquier momento. El uso continuo del sitio después de una actualización constituye tu aceptación de los nuevos términos.",
        },
        {
          heading: "6. Contacto",
          body: () => "Si tienes dudas sobre estos términos, escríbenos a",
        },
      ] as LegalSection[],
    },
    updatedLabel: "Última actualización",
  },
};

const en: Dictionary = {
  common: {
    skipToContent: "Skip to main content",
    langName: "English",
  },
  nav: {
    links: [
      { href: "", label: "Home" },
      { href: "/servicios", label: "Services" },
      { href: "/sobre-nosotros", label: "About Us" },
      { href: "/preguntas-frecuentes", label: "FAQ" },
      { href: "/contacto", label: "Contact" },
    ],
    ariaLabel: "Main navigation",
    cta: "Book your consultation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  footer: {
    navTitle: "Navigation",
    legalTitle: "Legal",
    links: [
      { href: "/servicios", label: "Services" },
      { href: "/sobre-nosotros", label: "About Us" },
      { href: "/preguntas-frecuentes", label: "FAQ" },
      { href: "/contacto", label: "Contact" },
    ],
    legalLinks: [
      { href: "/politica-de-privacidad", label: "Privacy Policy" },
      { href: "/terminos-y-condiciones", label: "Terms & Conditions" },
      { href: "/aviso-legal", label: "Legal Notice" },
    ],
    rights: (year: number, name: string) =>
      `© ${year} ${name}. All rights reserved. ${name} is not a government entity and is not affiliated with the United States government.`,
    social: {
      facebook: "CreditPlus on Facebook",
      instagram: "CreditPlus on Instagram",
      youtube: "CreditPlus on YouTube",
    },
  },
  hero: {
    titlePre: "Your credit can",
    titleGradient: "open new opportunities for you.",
    description:
      "We help you understand your credit report, make better financial decisions, and prepare with confidence for your next home, your next car, or the card you need.",
    ctaPrimary: "Book your consultation",
    ctaSecondary: "Message us",
    disclaimer:
      "Educational and informational service. We do not guarantee score increases or debt removal.",
    imageAlt: "A Latino family smiling in front of their new home, celebrating a financial milestone",
  },
  stats: [
    { value: 10, suffix: "+", label: "Years of experience" },
    { value: 15000, suffix: "+", label: "People guided" },
  ],
  benefits: {
    kicker: "Why CreditPlus",
    title: "Honest guidance, built around you",
    items: [
      {
        icon: "Users",
        title: "Personalized guidance",
        text: "A plan built from your real situation, not a generic recipe.",
      },
      {
        icon: "GraduationCap",
        title: "Financial education",
        text: "You learn to read your report and make informed decisions for the long run.",
      },
      {
        icon: "Eye",
        title: "Transparency",
        text: "No unrealistic promises. We tell you what's possible and what isn't.",
      },
      {
        icon: "Award",
        title: "Experience",
        text: "Years helping Latino families move forward toward their financial goals.",
      },
    ],
  },
  services: {
    kicker: "Our services",
    title: "Support at every stage of your financial journey",
    ctaButton: "Ask about this service",
    linkMore: "Learn more",
    items: [
      {
        slug: "revision-de-reporte",
        title: "Credit report review",
        iconName: "FileSearch",
        short: "We analyze your report and explain what each item means.",
        description:
          "We go through your credit report with you, point by point, in your language and without jargon, so you understand exactly what information it contains and how it affects you.",
      },
      {
        slug: "educacion-financiera",
        title: "Financial education",
        iconName: "GraduationCap",
        short: "Learn to manage credit with knowledge, not guesswork.",
        description:
          "We teach you the key concepts of the U.S. financial system: how a score is calculated, what factors affect it, and how to make informed decisions.",
      },
      {
        slug: "estrategias-personalizadas",
        title: "Personalized strategies",
        iconName: "TrendingUp",
        short: "An action plan tailored to your history and your goals.",
        description:
          "We design a realistic plan based on your current situation, with clear steps you can follow at your own pace to strengthen your credit profile over time.",
      },
      {
        slug: "preparacion-hipotecaria",
        title: "Mortgage loan preparation",
        iconName: "Home",
        short: "Arrive better prepared for the home-buying process.",
        description:
          "We guide you on what mortgage lenders review and which aspects of your profile are worth strengthening before you start the home-buying process.",
      },
      {
        slug: "financiamiento-vehicular",
        title: "Auto financing preparation",
        iconName: "Car",
        short: "Understand what auto lenders evaluate.",
        description:
          "We explain how auto financing works in the United States and what you can do to present yourself with more confidence to a lender.",
      },
      {
        slug: "construccion-de-historial",
        title: "Guidance to build a stronger history",
        iconName: "Compass",
        short: "Habits and tools for a stronger credit history over time.",
        description:
          "We help you build healthy financial habits and use credit tools responsibly to strengthen your history over the long term.",
      },
    ],
  },
  process: {
    kicker: "Our process",
    title: "Four clear steps, no surprises",
    stepLabel: "Step",
    steps: [
      {
        icon: "PhoneCall",
        title: "Consultation",
        text: "We talk about your current situation and your financial goals, free and with no obligation.",
      },
      {
        icon: "SearchCheck",
        title: "Analysis",
        text: "We review your credit report and clearly explain what we find.",
      },
      {
        icon: "ClipboardList",
        title: "Personalized plan",
        text: "Together we design a realistic strategy, tailored to your history and objectives.",
      },
      {
        icon: "LineChart",
        title: "Follow-up",
        text: "We stay with you along the way, adjusting the plan as you progress.",
      },
    ],
  },
  testimonials: {
    kicker: "Testimonials",
    title: "Stories from people who trusted us",
    disclaimer:
      "The testimonials and photos shown are illustrative examples created for design purposes and do not represent real CreditPlus clients.",
    items: [
      {
        name: "Marisol R.",
        city: "Houston, TX",
        rating: 5,
        photo:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        quote:
          "They explained my credit report patiently, in my language. I finally understood what was going on with my history.",
      },
      {
        name: "Jorge M.",
        city: "Orlando, FL",
        rating: 5,
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        quote:
          "The plan we put together was realistic and clear. I felt like they were working with me, not just selling me something.",
      },
      {
        name: "Ana P.",
        city: "Phoenix, AZ",
        rating: 5,
        photo:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
        quote:
          "I learned a lot about how credit works here in the United States. Today I feel more confident making decisions.",
      },
    ],
  },
  faq: {
    kicker: "Frequently asked questions",
    title: "Clear answers, no fine print",
    items: [
      {
        question: "Does CreditPlus guarantee my credit score will go up?",
        answer:
          "No. No company can legitimately guarantee a specific increase in your credit score. What we do is help you understand your report, educate you on good financial practices, and support you with realistic, personalized strategies.",
      },
      {
        question: "Do you remove debts or negative items from my report?",
        answer:
          "We don't promise or guarantee the removal of debts or negative information from your report. Our work is financial guidance and education, not legal intervention on your history.",
      },
      {
        question: "Does the first consultation cost anything?",
        answer:
          "The initial consultation is free and comes with no obligation. In it, we talk about your situation and explain how we can help you.",
      },
      {
        question: "What language is your service in?",
        answer:
          "We serve you in Spanish, from the first call through follow-up.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Every credit history is different, and timelines vary from person to person. In your consultation, we explain, based on your specific case, what kind of progress is reasonable to expect and over what timeframe.",
      },
      {
        question: "Do you work with people preparing to buy a home or a car?",
        answer:
          "Yes. An important part of our work is helping you prepare, ahead of time, before applying for a mortgage or an auto loan.",
      },
      {
        question: "Is my information secure?",
        answer:
          "Yes. We handle your information confidentially and use it only to provide the service you requested. You can learn more in our Privacy Policy.",
      },
    ],
  },
  cta: {
    title: "Take the first step toward a better financial future",
    text: "Book a free consultation and let's talk about how to strengthen your credit profile.",
    button: "Book your free consultation",
  },
  whatsapp: {
    ariaLabel: "Message us on WhatsApp",
    defaultMessage: "Hi, I'd like more information about CreditPlus's services.",
  },
  backToTop: {
    ariaLabel: "Back to top",
  },
  notFound: {
    title: "This page isn't available",
    text: "The link you tried to open doesn't exist or was moved. You can go back home or write to us if you need help.",
    home: "Back to home",
    contact: "Contact support",
  },
  home: {
    title: "More credit, more opportunities",
    description:
      "CreditPlus helps the Latino community in the United States understand their credit, build financial knowledge, and prepare to buy a home or a car.",
  },
  contactPage: {
    title: "Contact",
    description:
      "Book your free consultation with CreditPlus. Write to us by email, WhatsApp, or fill out the form and we'll get back to you.",
    kicker: "Contact",
    heading: "Let's talk about your next financial step",
    subheading:
      "Fill out the form or write to us directly. We reply with no pressure or obligation.",
    info: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      schedule: "Hours",
      scheduleValue: "Mon – Fri · 9:00 am – 6:00 pm",
    },
    form: {
      name: "Full name",
      email: "Email address",
      phone: "Phone",
      serviceLabel: "How can we help you?",
      serviceOptions: [
        "Credit report review",
        "Financial education",
        "Mortgage loan preparation",
        "Auto financing preparation",
        "Other",
      ],
      servicePlaceholder: "Select an option",
      message: "Message",
      submit: "Send message",
      submitting: "Sending...",
      notConfigured:
        "The form isn't connected yet. Configure the Static Forms Access Key in lib/config.ts (see instructions in README.md).",
      sendError:
        "We couldn't send your message. Please try again or write to us directly by email or WhatsApp.",
      success: "Thank you! We received your message and will contact you soon.",
    },
  },
  servicesPage: {
    title: "Services",
    description:
      "Explore CreditPlus's services: credit report review, financial education, personalized strategies, and preparation for mortgage and auto loans.",
    kicker: "Services",
    heading: "Everything we do for your financial peace of mind",
    subheading:
      "Every service is designed to inform and prepare you, honestly, with no unrealistic promises about your score or your debts.",
  },
  aboutPage: {
    title: "About Us",
    description:
      "Learn about CreditPlus's mission, vision, and values: helping the Latino community in the United States strengthen their credit history with honesty and education.",
    kicker: "About us",
    heading: "We support the Latino community toward a better financial future",
    intro:
      "CreditPlus was created to close a real gap: the lack of clear financial information, in your language, for those building their life in the United States.",
    imageAlt: "CreditPlus advisors talking during a work meeting",
    mission: {
      title: "Mission",
      text: "To help the Latino community in the United States improve their credit history through personalized guidance, financial education, and transparent solutions that help them reach their goals.",
    },
    vision: {
      title: "Vision",
      text: "To be a trusted reference for the Hispanic community in the United States, known for honesty, clarity, and excellent service.",
    },
    promise: {
      title: "Our promise",
      text: "We believe better credit opens the door to new opportunities. Our commitment is to support you with honesty, clarity, and a close, personal service.",
    },
    valuesKicker: "Our values",
    valuesTitle: "What guides every conversation with our clients",
    values: [
      { icon: "ShieldCheck", title: "Transparency" },
      { icon: "HeartHandshake", title: "Honesty" },
      { icon: "Handshake", title: "Commitment" },
      { icon: "BookOpen", title: "Education" },
    ],
  },
  faqPage: {
    title: "FAQ",
    description:
      "We answer the most common questions about CreditPlus's financial education and credit guidance services.",
    kicker: "Help",
    heading: "Frequently asked questions",
  },
  legal: {
    updated: "June 30, 2026",
    avisoLegal: {
      title: "Legal Notice",
      metaDescription: "Legal information and site owner identification for the CreditPlus website.",
      sections: [
        {
          heading: "Identification",
          body: (name: string, city: string, state: string, country: string) =>
            `This website is operated by ${name}, headquartered in ${city}, ${state}, ${country}. For any legal inquiry, you can write to`,
        },
        {
          heading: "Informational nature",
          body: (name: string) =>
            `${name} is not a government entity, is not affiliated with the United States government, and is not a credit bureau, bank, or lending institution. The services offered are educational and general guidance in nature; they do not constitute individualized, binding legal or financial advice.`,
        },
        {
          heading: "No guarantee of results",
          body: () =>
            "We do not guarantee credit score increases, loan approvals, or removal of debts or information from your credit report. Any example, testimonial, or figure presented on this site is illustrative, unless otherwise noted.",
        },
        {
          heading: "Third-party links",
          body: () =>
            "This site may contain links to third-party sites (such as social media or WhatsApp). We are not responsible for the content or privacy policies of external sites.",
        },
      ],
    },
    privacidad: {
      title: "Privacy Policy",
      metaDescription: "How CreditPlus collects, uses, and protects your personal information.",
      intro: (name: string) =>
        `At ${name} we respect your privacy and are committed to protecting the personal information you share with us. This policy explains what information we collect, how we use it, and what rights you have over it.`,
      sections: [
        {
          heading: "1. Information we collect",
          body: () =>
            "We collect the information you provide directly through our contact form, email, or WhatsApp, such as your name, email address, phone number, and the content of your message. We may also collect basic technical browsing information (such as device or browser type) to improve the site.",
        },
        {
          heading: "2. How we use your information",
          body: () =>
            "We use your information only to respond to your inquiries, provide the services requested, and, if you authorize us, send you educational content related to personal finance. We do not sell or rent your information to third parties.",
        },
        {
          heading: "3. How we protect your information",
          body: () =>
            "We implement reasonable technical and organizational measures to protect your information against unauthorized access, loss, or misuse.",
        },
        {
          heading: "4. Third-party services",
          body: () =>
            "We use external providers, such as the form-delivery service Static Forms, solely to process and deliver the messages you send through our site. These providers have their own privacy policies.",
        },
        {
          heading: "5. Your rights",
          body: () =>
            "You may ask us at any time to update or delete your personal information by writing to us at",
        },
        {
          heading: "6. Changes to this policy",
          body: () =>
            "We may update this policy from time to time. We will post any changes on this same page along with the update date.",
        },
      ],
    },
    terminos: {
      title: "Terms & Conditions",
      metaDescription: "Terms of use for the CreditPlus website and services.",
      sections: [
        {
          heading: "1. Nature of the service",
          body: (name: string) =>
            `${name} offers financial education services and general guidance on managing personal credit. We are not a government entity, a credit bureau, or a financial institution, and we do not issue loans or lines of credit.`,
        },
        {
          heading: "2. No guarantees",
          body: () =>
            "We do not guarantee specific results, including, without limitation, an increase in your credit score, loan approval, or the removal of debts or negative information from your credit report. Results depend on multiple factors beyond our control, including your individual financial history and the decisions of third parties such as banks and credit bureaus.",
        },
        {
          heading: "3. Use of the website",
          body: () =>
            "The content of this site is informational and educational in nature. By using this site, you agree not to use it for unlawful purposes or in a way that could damage, disable, or overload our servers.",
        },
        {
          heading: "4. Intellectual property",
          body: (name: string) =>
            `The content, design, text, and images on this site are the property of ${name} or its respective licensors and are protected by intellectual property laws. Reproduction without prior authorization is not permitted.`,
        },
        {
          heading: "5. Modifications",
          body: () =>
            "We may update these terms at any time. Continued use of the site after an update constitutes your acceptance of the new terms.",
        },
        {
          heading: "6. Contact",
          body: () => "If you have questions about these terms, write to us at",
        },
      ],
    },
    updatedLabel: "Last updated",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };
