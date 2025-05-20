"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type ProgressStepsProps = {
  currentStep: number
  totalSteps: number
}

export default function ProgressSteps({ currentStep, totalSteps }: ProgressStepsProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">
          Paso {currentStep} de {totalSteps}
        </span>
        <span className="text-sm font-medium">{Math.round((currentStep / totalSteps) * 100)}%</span>
      </div>

      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 to-red-500"
          initial={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
          animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex justify-between mt-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center",
              index + 1 <= currentStep ? "text-primary" : "text-muted-foreground",
            )}
          >
            <div
              className={cn(
                "h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium",
                index + 1 < currentStep
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  : index + 1 === currentStep
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-muted-foreground/30 text-muted-foreground",
              )}
            >
              {index + 1 < currentStep ? "✓" : index + 1}
            </div>
            <span className="text-xs mt-1 hidden sm:block">
              {index === 0 ? "Información" : index === 1 ? "Objetivos" : index === 2 ? "Experiencia" : "Resumen"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
