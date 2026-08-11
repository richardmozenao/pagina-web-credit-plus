export type Service = {
  slug: string;
  title: string;
  iconName:
    | "FileSearch"
    | "GraduationCap"
    | "TrendingUp"
    | "Home"
    | "Car"
    | "Compass";
  short: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "revision-de-reporte",
    title: "Revisión del reporte de crédito",
    iconName: "FileSearch",
    short: "Analizamos tu reporte y te explicamos qué significa cada dato.",
    description:
      "Revisamos tu reporte de crédito contigo, punto por punto, en español y sin tecnicismos, para que entiendas exactamente qué información contiene y cómo te afecta.",
  },
  {
    slug: "educacion-financiera",
    title: "Educación financiera",
    iconName: "GraduationCap",
    short: "Aprende a manejar el crédito con conocimiento, no con adivinanzas.",
    description:
      "Te enseñamos los conceptos clave del sistema financiero de Estados Unidos: cómo se calcula un puntaje, qué factores lo afectan y cómo tomar decisiones informadas.",
  },
  {
    slug: "estrategias-personalizadas",
    title: "Estrategias personalizadas",
    iconName: "TrendingUp",
    short: "Un plan de acción adaptado a tu historial y tus metas.",
    description:
      "Diseñamos un plan realista según tu situación actual, con pasos claros que puedes seguir a tu propio ritmo para fortalecer tu perfil crediticio con el tiempo.",
  },
  {
    slug: "preparacion-hipotecaria",
    title: "Preparación para préstamos hipotecarios",
    iconName: "Home",
    short: "Llega mejor preparado al proceso de comprar tu casa.",
    description:
      "Te orientamos sobre qué revisan los prestamistas hipotecarios y qué aspectos de tu perfil conviene fortalecer antes de iniciar el proceso de compra de vivienda.",
  },
  {
    slug: "financiamiento-vehicular",
    title: "Preparación para financiamiento de vehículos",
    iconName: "Car",
    short: "Entiende qué evalúan las financieras de autos.",
    description:
      "Te explicamos cómo funciona el financiamiento de autos en Estados Unidos y qué puedes hacer para presentarte con mayor confianza ante una financiera.",
  },
  {
    slug: "construccion-de-historial",
    title: "Orientación para construir mejor historial",
    iconName: "Compass",
    short: "Hábitos y herramientas para un historial más sólido con el tiempo.",
    description:
      "Te acompañamos en la construcción de hábitos financieros saludables y el uso responsable de herramientas de crédito para fortalecer tu historial a largo plazo.",
  },
];
