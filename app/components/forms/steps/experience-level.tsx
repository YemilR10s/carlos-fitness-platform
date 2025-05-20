"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { RadioGroup } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

type ExperienceLevelProps = {
  data: string
  updateData: (data: string) => void
}

const experienceLevels = [
  {
    id: "principiante",
    title: "Principiante",
    description: "Nuevo en el fitness o retomando después de un largo descanso",
    icon: "🌱",
  },
  {
    id: "intermedio",
    title: "Intermedio",
    description: "Entrenas regularmente desde hace algunos meses",
    icon: "🔄",
  },
  {
    id: "avanzado",
    title: "Avanzado",
    description: "Entrenas consistentemente y conoces bien tu cuerpo",
    icon: "💪",
  },
  {
    id: "atleta",
    title: "Atleta",
    description: "Nivel avanzado con experiencia en competiciones",
    icon: "🏆",
  },
]

export default function ExperienceLevel({ data, updateData }: ExperienceLevelProps) {
  const [selectedLevel, setSelectedLevel] = useState(data)

  const handleLevelChange = (value: string) => {
    setSelectedLevel(value)
  }

  // Actualizar datos del padre solo cuando cambia el nivel seleccionado
  useEffect(() => {
    // Usar un temporizador para evitar actualizaciones excesivas
    const timer = setTimeout(() => {
      updateData(selectedLevel)
    }, 0)

    return () => clearTimeout(timer)
  }, [selectedLevel, updateData])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Tu Nivel de Experiencia</h2>
        <p className="text-muted-foreground">Selecciona el nivel que mejor describe tu experiencia fitness actual</p>
      </div>

      <RadioGroup value={selectedLevel} onValueChange={handleLevelChange} className="space-y-3">
        {experienceLevels.map((level) => (
          <label
            key={level.id}
            className={cn(
              "flex items-center space-x-4 rounded-lg border p-4 cursor-pointer transition-all",
              selectedLevel === level.id ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20" : "hover:bg-muted",
            )}
          >
            <input
              type="radio"
              value={level.id}
              checked={selectedLevel === level.id}
              onChange={() => handleLevelChange(level.id)}
              className="sr-only"
            />
            <motion.div animate={selectedLevel === level.id ? { scale: 1.1 } : { scale: 1 }} className="text-2xl">
              {level.icon}
            </motion.div>
            <div className="flex-1">
              <p className="font-medium">{level.title}</p>
              <p className="text-sm text-muted-foreground">{level.description}</p>
            </div>
            <div
              className={cn(
                "h-5 w-5 rounded-full border-2 flex items-center justify-center",
                selectedLevel === level.id ? "border-orange-500 bg-orange-500" : "border-muted-foreground",
              )}
            >
              {selectedLevel === level.id && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-2 w-2 rounded-full bg-white" />
              )}
            </div>
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}
