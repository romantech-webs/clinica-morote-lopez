export const clinic = {
  name: "Clínica Morote López",
  logo: "/images/logo.png",
  tagline: "Tu recuperación en las mejores manos en Murcia",
  description: "Clínica Morote López es tu centro de fisioterapia de confianza en Murcia, con 5 estrellas en Google y 80 reseñas que avalan nuestro compromiso. Ofrecemos fisioterapia manual, tratamiento de espalda y trapecios, podología especializada y rehabilitación personalizada. Un equipo profesional que escucha tus necesidades y te acompaña desde la primera sesión hasta tu completa recuperación.",
  colors: {
    primary: "#a6c9cf",
    secondary: "#323c3e",
    accent: "#d6e5e6",
    neutral: "#f8fbfb"
  },
  phone: "968 45 02 03",
  whatsapp: "+34968450203",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Av. Ramón y Cajal, 25, 30530 Cieza, Murcia, España",
    city: "Murcia",
    province: "Toledo",
    postalCode: "30530",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=6014434696611929476&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Cl%C3%ADnica%20Morote%20L%C3%B3pez%20%4038.2398%2C-1.42433&z=16&output=embed",
  coordinates: {
    lat: 38.2398,
    lng: -1.42433
  },
  schedule: [
    {
      days: "lunes - jueves",
      hours: "9:30–13:45, 16:00–21:00"
    },
    {
      days: "viernes",
      hours: "9:30–13:45, 16:00–19:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 80,
    url: "https://maps.google.com/?cid=6014434696611929476&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Natalia Soriano García",
        rating: 5,
        text: "Desde el primer momento supe que estaba en buenas manos. El equipo es increíblemente profesional, atento y realmente se toma el tiempo de escuchar tus necesidades.\n\nSi estás buscando un lugar donde realmente se preocupen por tu recuperación y bienestar, esta clínica es la opción perfecta. ¡La recomiendo sin dudarlo!",
        date: "Hace 11 meses"
      },
      {
        author: "MCarmen Fernández Avilés",
        rating: 5,
        text: "El ambiente muy acogedor y con un olor muy agradable. Jesús tiene unas manos excelentes, es muy amable y hace que estés cómoda en la sala. Desde luego me has dejado la espalda y los trapecios bastante descargados. Muchas gracias por tu profesionalidad!!",
        date: "Hace 2 años"
      },
      {
        author: "Jorge Martínez",
        rating: 5,
        text: "He entrado andando y he salido volando! Encantado con el servicio y el trato. Javi es super profesional y te explica y aconseja todo a la perfección. El mejor servicio de podología que he probado. Gracias por todo!",
        date: "Hace 4 meses"
      },
      {
        author: "José Villalba Ortiz",
        rating: 5,
        text: "Un gran profesional, atento y muy cercano en el trato. Me explicó todo con claridad y el tratamiento fue efectivo desde la primera sesión",
        date: "Hace 2 meses"
      },
      {
        author: "TelPsi Clinic",
        rating: 5,
        text: "Muy amables con el paciente. Muy buen ambiente profesional. Encantado.",
        date: "Hace 3 meses"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas aplicadas por profesionales expertos que trabajan directamente sobre músculos, articulaciones y tejidos blandos. Tratamiento personalizado para aliviar el dolor de espalda, trapecios y otras zonas afectadas. Nuestros pacientes destacan la efectividad desde la primera sesión.",
      benefits: [
        "Alivio inmediato del dolor muscular",
        "Mejora de la movilidad articular",
        "Descarga profunda de zonas contracturadas"
      ],
      icon: "Hand"
    },
    {
      id: "podologia",
      name: "Podología Especializada",
      description: "Servicio profesional de podología que cuida la salud de tus pies con técnicas avanzadas y un trato excepcional. Nuestro especialista te explica y aconseja todo con claridad para garantizar los mejores resultados. Tratamientos efectivos que te harán sentir como si volaras al salir.",
      benefits: [
        "Diagnóstico preciso de patologías del pie",
        "Tratamientos personalizados y efectivos",
        "Asesoramiento profesional continuo"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-espalda",
      name: "Tratamiento de Espalda y Trapecios",
      description: "Especialización en el tratamiento de tensiones, contracturas y dolor en la zona dorsal y cervical. Técnicas manuales que descargan profundamente la musculatura y proporcionan alivio duradero. Atención personalizada en un ambiente que te hace sentir cómodo durante todo el tratamiento.",
      benefits: [
        "Descarga efectiva de trapecios",
        "Eliminación de tensión acumulada",
        "Mejora de la postura y movilidad"
      ],
      icon: "Target"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu condición y objetivos de recuperación. Seguimiento continuo desde la valoración inicial hasta la completa recuperación funcional. Combinamos diferentes técnicas para acelerar tu proceso de rehabilitación.",
      benefits: [
        "Planes adaptados a tu evolución",
        "Recuperación funcional completa",
        "Seguimiento profesional constante"
      ],
      icon: "Activity"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Tratamiento especializado para deportistas y personas activas que buscan prevenir lesiones o acelerar su recuperación. Técnicas avanzadas que te permiten volver a tu actividad física de forma segura y efectiva. Asesoramiento para optimizar tu rendimiento.",
      benefits: [
        "Recuperación rápida de lesiones deportivas",
        "Prevención de futuras lesiones",
        "Mejora del rendimiento físico"
      ],
      icon: "Dumbbell"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Técnica efectiva para el tratamiento de puntos gatillo miofasciales que causan dolor crónico y contracturas persistentes. Aplicada por profesionales cualificados para eliminar la tensión muscular profunda. Resultados notables en el alivio del dolor muscular.",
      benefits: [
        "Eliminación de puntos gatillo",
        "Alivio del dolor crónico",
        "Recuperación de la función muscular"
      ],
      icon: "Target"
    },
    {
      id: "electroterapia",
      name: "Electroterapia",
      description: "Tecnología de vanguardia con corrientes eléctricas terapéuticas para complementar el tratamiento manual. Acelera el proceso de recuperación y potencia los efectos del tratamiento. Equipamiento moderno en un entorno profesional y acogedor.",
      benefits: [
        "Aceleración de la recuperación",
        "Reducción de la inflamación",
        "Complemento ideal al tratamiento manual"
      ],
      icon: "Zap"
    },
    {
      id: "valoracion-personalizada",
      name: "Valoración Inicial Completa",
      description: "Evaluación exhaustiva de tu estado físico donde escuchamos tus necesidades y diseñamos un plan de tratamiento a medida. Te explicamos todo con claridad para que entiendas tu proceso de recuperación. El primer paso hacia tu bienestar con un equipo que realmente se preocupa por ti.",
      benefits: [
        "Diagnóstico preciso de tu condición",
        "Plan de tratamiento personalizado",
        "Explicación clara de todo el proceso"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llama al 968 45 02 03 o envíanos un WhatsApp para solicitar tu cita. Nuestro equipo te atenderá de forma cercana y resolverá todas tus dudas desde el primer contacto."
    },
    {
      step: 2,
      title: "Valoración Inicial Personalizada",
      description: "En tu primera visita, escuchamos tus necesidades con atención y realizamos una evaluación completa de tu estado físico. Te explicamos todo con claridad y diseñamos un plan de tratamiento específico para tu caso."
    },
    {
      step: 3,
      title: "Tratamiento Profesional",
      description: "Aplicamos las técnicas más efectivas con manos expertas en un ambiente acogedor donde te sentirás cómodo. Nuestros pacientes notan los resultados desde la primera sesión gracias a nuestro enfoque personalizado."
    },
    {
      step: 4,
      title: "Seguimiento y Recuperación",
      description: "Te acompañamos durante todo el proceso con seguimiento continuo hasta tu completa recuperación. Ajustamos el tratamiento según tu evolución y te asesoramos para mantener los resultados a largo plazo."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas con 80 Reseñas en Google",
      description: "Nuestra valoración perfecta en Google refleja el compromiso real con cada paciente. Nuestros clientes destacan la profesionalidad, el trato cercano y los resultados efectivos desde la primera sesión. Una prueba tangible de que en Clínica Morote López realmente nos preocupamos por tu recuperación y bienestar.",
      icon: "Heart"
    },
    {
      title: "Equipo Profesional con Manos Expertas",
      description: "Contamos con fisioterapeutas y especialistas altamente cualificados que combinan técnica avanzada con un trato humano excepcional. Nuestros pacientes destacan las 'manos excelentes' de nuestro equipo y la capacidad de hacer que te sientas cómodo durante todo el tratamiento. Profesionales que explican todo con claridad y te asesoran en cada paso.",
      icon: "Hand"
    },
    {
      title: "Resultados Desde la Primera Sesión",
      description: "Nuestros tratamientos son efectivos y notarás la diferencia inmediatamente. Los pacientes destacan cómo 'entran andando y salen volando', con espalda y trapecios descargados tras la primera visita. Aplicamos las técnicas más adecuadas para tu caso específico, garantizando resultados tangibles y duraderos.",
      icon: "Zap"
    },
    {
      title: "Ambiente Acogedor y Atención Personalizada",
      description: "Más que una clínica, es un espacio donde te sientes cuidado desde el primer momento. Ambiente agradable, trato atento y un equipo que se toma el tiempo real de escuchar tus necesidades. Cada tratamiento está diseñado específicamente para ti, con seguimiento continuo hasta tu completa recuperación.",
      icon: "Heart"
    }
  ],
  team: [
    {
      name: "Jesús",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Clínica Morote López nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    },
    {
      name: "Javi",
      role: "Podólogo",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Clínica Morote López nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Clínica Morote López - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Clínica Morote López - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Clínica Morote López - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Clínica Morote López - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Clínica Morote López - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Clínica Morote López - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Clínica Morote López - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "Clínica Morote López - Imagen 8"
    },
    {
      src: "/images/gallery/9.webp",
      alt: "Clínica Morote López - Imagen 9"
    }
  ],
  faq: [
    {
      question: "¿Qué servicios ofrece Clínica Morote López?",
      answer: "En Clínica Morote López ofrecemos fisioterapia manual especializada, podología profesional, tratamiento de espalda y trapecios, rehabilitación personalizada, fisioterapia deportiva, punción seca y electroterapia. Cada tratamiento se adapta a tus necesidades específicas con un enfoque profesional y cercano que nos ha valido 5 estrellas en Google con 80 reseñas."
    },
    {
      question: "¿Cómo puedo solicitar una cita?",
      answer: "Solicitar tu cita es muy sencillo. Puedes llamarnos directamente al 968 45 02 03 o contactarnos por WhatsApp. Nuestro equipo te atenderá de forma cercana, resolverá tus dudas y te asignará la cita que mejor se ajuste a tu disponibilidad. Estamos ubicados en Murcia y listos para atenderte."
    },
    {
      question: "¿Cuánto dura una sesión de fisioterapia?",
      answer: "La duración de cada sesión en Clínica Morote López varía según el tipo de tratamiento y tus necesidades específicas, aunque generalmente oscila entre 30 y 60 minutos. Durante la valoración inicial te explicamos con claridad la duración estimada de tus sesiones y la frecuencia recomendada para tu caso particular, asegurando siempre el tiempo necesario para un tratamiento efectivo."
    },
    {
      question: "¿Necesito derivación médica para acudir?",
      answer: "No es necesario que traigas una derivación médica para acudir a Clínica Morote López. Puedes solicitar tu cita directamente con nosotros y realizaremos una valoración completa de tu estado. Sin embargo, si dispones de informes médicos o pruebas diagnósticas previas, es recomendable que los traigas para complementar nuestra evaluación y optimizar tu tratamiento."
    },
    {
      question: "¿Desde cuándo notaré mejoras?",
      answer: "Muchos de nuestros pacientes en Clínica Morote López experimentan alivio desde la primera sesión, tal como reflejan nuestras reseñas de 5 estrellas. La velocidad de recuperación depende de cada caso particular, tu condición inicial y el tipo de lesión. Durante la valoración inicial te explicamos los tiempos estimados de recuperación y establecemos objetivos realistas para tu tratamiento personalizado."
    },
    {
      question: "¿Qué diferencia a Clínica Morote López de otros centros?",
      answer: "Nuestros pacientes destacan tres aspectos fundamentales: un equipo profesional con manos expertas que realmente escucha tus necesidades, resultados efectivos desde la primera sesión, y un ambiente acogedor que te hace sentir cómodo durante todo el tratamiento. Nuestra valoración de 5 estrellas con 80 reseñas en Google avala nuestro compromiso con tu recuperación y bienestar."
    },
    {
      question: "¿Tratáis lesiones deportivas?",
      answer: "Sí, en Clínica Morote López ofrecemos fisioterapia deportiva especializada para la prevención y recuperación de lesiones deportivas. Utilizamos técnicas avanzadas adaptadas a deportistas y personas activas, con planes personalizados que te permiten volver a tu actividad física de forma segura. Te asesoramos durante todo el proceso para optimizar tu rendimiento y prevenir futuras lesiones."
    },
    {
      question: "¿Ofrecéis servicio de podología?",
      answer: "Sí, contamos con servicio profesional de podología en Clínica Morote López. Nuestro especialista te ofrece diagnóstico preciso, tratamientos efectivos y asesoramiento completo sobre el cuidado de tus pies. Los pacientes destacan la profesionalidad del servicio y los excelentes resultados obtenidos, convirtiéndolo en uno de nuestros tratamientos más valorados."
    }
  ],
  seo: {
    titleTemplate: "%s | Clínica Morote López",
    defaultTitle: "Clínica Morote López - Fisioterapia en Murcia | 5★",
    defaultDescription: "Fisioterapia y podología en Murcia con 5 estrellas en Google. Tratamiento de espalda, rehabilitación y fisioterapia manual. Resultados desde la primera sesión. ☎ 968 45 02 03",
    keywords: [
      "fisioterapia Murcia",
      "Clínica Morote López",
      "podología Murcia",
      "fisioterapeuta Murcia",
      "tratamiento espalda Murcia",
      "rehabilitación Murcia",
      "fisioterapia manual Murcia",
      "clínica fisioterapia Murcia",
      "fisioterapia deportiva Murcia",
      "punción seca Murcia",
      "trapecios Murcia",
      "mejor fisioterapia Murcia"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Clínica Morote López",
    cif: "",
    registeredAddress: "Av. Ramón y Cajal, 25, 30530 Cieza, Murcia, España, Murcia, Toledo"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Murcia"
  ],
  heroDescription: "En Clínica Morote López combinamos técnicas manuales avanzadas con un trato cercano y profesional. Nuestro equipo se toma el tiempo de escuchar tus necesidades para diseñar el tratamiento más efectivo. Con resultados desde la primera sesión y un ambiente acogedor que hace la diferencia.",
  specialty: "Fisioterapia Manual Especializada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar?",
  ctaDescription: "Solicita tu cita en Clínica Morote López y descubre por qué nuestros pacientes nos valoran con 5 estrellas. Te esperamos para comenzar tu recuperación hoy mismo.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
