"use client"

import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type FitnessGoalsProps = {
  data: string[]
  updateData: (data: string[]) => void
}

const goals = [
  { id: "perder-peso", label: "Perder peso" },
  { id: "ganar-musculo", label: "Ganar músculo" },
  { id: "mejorar-resistencia", label: "Mejorar resistencia" },
  { id: "tonificar", label: "Tonificar cuerpo" },
  { id: "flexibilidad", label: "Aumentar flexibilidad" },
  { id: "rehabilitacion", label: "Rehabilitación" },
  { id: "nutricion", label: "Mejorar nutrición" },
  { id: "rendimiento", label: "Mejorar rendimiento deportivo" },
]

export default function FitnessGoals({ data, updateData }: FitnessGoalsProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>(data)

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) => (prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]))
  }

  // Actualizar datos del padre solo cuando cambian los objetivos seleccionados
  useEffect(() => {
    // Usar un temporizador para evitar actualizaciones excesivas
    const timer = setTimeout(() => {
      updateData(selectedGoals)
    }, 0)

    return () => clearTimeout(timer)
  }, [selectedGoals, updateData])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Tus Objetivos Fitness</h2>
        <p className="text-muted-foreground">Selecciona los objetivos que quieres lograr (puedes elegir varios)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
          >
            <Checkbox
              id={goal.id}
              checked={selectedGoals.includes(goal.id)}
              onCheckedChange={() => toggleGoal(goal.id)}
            />
            <div className="space-y-1">
              <Label htmlFor={goal.id} className="font-medium cursor-pointer">
                {goal.label}
              </Label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
