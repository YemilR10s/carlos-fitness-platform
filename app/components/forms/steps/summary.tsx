"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

type SummaryProps = {
  formData: {
    personalInfo: {
      name: string
      email: string
      phone: string
      age: string
      gender: string
    }
    fitnessGoals: string[]
    experienceLevel: string
  }
}

// Mapeo de IDs a nombres legibles
const goalLabels: Record<string, string> = {
  "perder-peso": "Perder peso",
  "ganar-musculo": "Ganar músculo",
  "mejorar-resistencia": "Mejorar resistencia",
  tonificar: "Tonificar cuerpo",
  flexibilidad: "Aumentar flexibilidad",
  rehabilitacion: "Rehabilitación",
  nutricion: "Mejorar nutrición",
  rendimiento: "Mejorar rendimiento deportivo",
}

const experienceLabels: Record<string, string> = {
  principiante: "Principiante",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
  atleta: "Atleta",
}

export default function Summary({ formData }: SummaryProps) {
  const { personalInfo, fitnessGoals, experienceLevel } = formData

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Resumen de tu información</h2>
        <p className="text-muted-foreground">Revisa tus datos antes de continuar al calendario</p>
      </div>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="space-y-3"
        >
          <h3 className="font-semibold text-lg">Información Personal</h3>
          <div className="bg-muted p-4 rounded-lg space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <p className="text-sm text-muted-foreground">Nombre:</p>
              <p className="text-sm font-medium">{personalInfo.name}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-sm text-muted-foreground">Email:</p>
              <p className="text-sm font-medium">{personalInfo.email}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-sm text-muted-foreground">Teléfono:</p>
              <p className="text-sm font-medium">{personalInfo.phone}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-sm text-muted-foreground">Edad:</p>
              <p className="text-sm font-medium">{personalInfo.age} años</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-sm text-muted-foreground">Género:</p>
              <p className="text-sm font-medium">{personalInfo.gender}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="space-y-3"
        >
          <h3 className="font-semibold text-lg">Objetivos Fitness</h3>
          <div className="bg-muted p-4 rounded-lg">
            <ul className="space-y-1">
              {fitnessGoals.length > 0 ? (
                fitnessGoals.map((goal) => (
                  <li key={goal} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{goalLabels[goal] || goal}</span>
                  </li>
                ))
              ) : (
                <li className="text-sm text-muted-foreground">No se seleccionaron objetivos</li>
              )}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="space-y-3"
        >
          <h3 className="font-semibold text-lg">Nivel de Experiencia</h3>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm font-medium">
              {experienceLevel ? experienceLabels[experienceLevel] || experienceLevel : "No seleccionado"}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <p className="text-sm">
          Al continuar, podrás seleccionar la fecha y hora para tu llamada 1-1 con un entrenador de Carlos Fitness.
          Nuestro equipo preparará un plan personalizado basado en tu información.
        </p>
      </div>
    </div>
  )
}
