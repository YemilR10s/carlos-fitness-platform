// Datos para los planes de suscripción
export const plans = [
    {
      title: "Plan Básico",
      description: "Ideal para principiantes que buscan comenzar su viaje fitness",
      price: "$49.900",
      features: ["Acceso a 2 clases semanales", "Plan nutricional básico", "Seguimiento mensual"],
    },
    {
      title: "Plan Intermedio",
      description: "Para quienes buscan llevar su entrenamiento al siguiente nivel",
      price: "$89.900",
      features: ["Acceso a 4 clases semanales", "Plan nutricional personalizado", "Seguimiento quincenal"],
      popular: true,
    },
    {
      title: "Plan Avanzado",
      description: "Entrenamiento intensivo para resultados óptimos",
      price: "$129.900",
      features: [
        "Acceso ilimitado a clases",
        "Plan nutricional avanzado",
        "Seguimiento semanal",
        "Sesión personal mensual",
      ],
    },
    {
      title: "Plan Premium",
      description: "La experiencia fitness definitiva con atención personalizada",
      price: "$199.900",
      features: [
        "Acceso VIP a todas las instalaciones",
        "Plan nutricional premium",
        "Seguimiento diario",
        "2 sesiones personales mensuales",
      ],
    },
  ]
  
  // Datos para los horarios de entrenamiento
  export const schedules = {
    principiante: [
      { day: "Lunes", activity: "Introducción a pesas", time: "18:00 - 19:00" },
      { day: "Miércoles", activity: "Cardio básico", time: "18:00 - 19:00" },
      { day: "Viernes", activity: "Yoga para principiantes", time: "18:00 - 19:00" },
    ],
    intermedio: [
      { day: "Lunes", activity: "Entrenamiento de fuerza", time: "19:00 - 20:30" },
      { day: "Martes", activity: "HIIT", time: "19:00 - 20:00" },
      { day: "Jueves", activity: "Entrenamiento funcional", time: "19:00 - 20:30" },
      { day: "Sábado", activity: "Cardio avanzado", time: "10:00 - 11:30" },
    ],
    avanzado: [
      { day: "Lunes", activity: "Levantamiento olímpico", time: "20:00 - 21:30" },
      { day: "Martes", activity: "CrossTraining", time: "20:00 - 21:30" },
      { day: "Miércoles", activity: "Recuperación activa", time: "20:00 - 21:00" },
      { day: "Jueves", activity: "Entrenamiento de potencia", time: "20:00 - 21:30" },
      { day: "Viernes", activity: "Competición", time: "20:00 - 21:30" },
      { day: "Sábado", activity: "Resistencia", time: "09:00 - 11:00" },
    ],
  }
  
  // Datos para los testimonios
  export const testimonials = [
    {
      name: "María González",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Desde que comencé con el programa de Carlos, he perdido 15 kilos y me siento con más energía que nunca.",
      rating: 5,
    },
    {
      name: "Juan Pérez",
      image: "/placeholder.svg?height=100&width=100",
      quote: "Los entrenadores son increíbles y el ambiente del gimnasio es muy motivador. Recomendado al 100%.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      image: "/placeholder.svg?height=100&width=100",
      quote: "El plan nutricional personalizado cambió completamente mi relación con la comida. ¡Gracias Carlos!",
      rating: 4,
    },
  ]
  
  // Datos para las guías de nutrición
  export const nutritionGuides = [
    {
      title: "Guía de nutrición básica",
      description: "Aprende los fundamentos de una alimentación saludable",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Recetas proteicas",
      description: "30 recetas ricas en proteínas para potenciar tu entrenamiento",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Plan detox de 7 días",
      description: "Limpia tu organismo y reinicia tu metabolismo",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]
  
  // Enlaces de navegación
  export const navLinks = [
    { name: "Planes", href: "#planes" },
    { name: "Horarios", href: "#horarios" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Nutrición", href: "#nutricion" },
    { name: "Contacto", href: "#contacto" },
  ]
  