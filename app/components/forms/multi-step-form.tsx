"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ProgressSteps from "@/components/ui/progress-steps"
import PersonalInfo from "./steps/personal-info"
import FitnessGoals from "./steps/fitness-goals"
import ExperienceLevel from "./steps/experience-level"
import Summary from "./steps/summary"

// Tipos para los datos del formulario
type FormData = {
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

export default function MultiStepForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
    },
    fitnessGoals: [],
    experienceLevel: "",
  })

  const totalSteps = 4

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateFormData = (step: number, data: any) => {
    setFormData((prev) => {
      // Solo actualizar si los datos son diferentes
      if (step === 1 && JSON.stringify(prev.personalInfo) === JSON.stringify(data)) {
        return prev
      }
      if (step === 2 && JSON.stringify(prev.fitnessGoals) === JSON.stringify(data)) {
        return prev
      }
      if (step === 3 && prev.experienceLevel === data) {
        return prev
      }

      if (step === 1) return { ...prev, personalInfo: data }
      if (step === 2) return { ...prev, fitnessGoals: data }
      if (step === 3) return { ...prev, experienceLevel: data }
      return prev
    })
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Aquí podrías enviar los datos a tu backend
    console.log("Datos del formulario:", formData)

    // Redirigir al calendario con el nombre como parámetro
    router.push(`/calendario?name=${encodeURIComponent(formData.personalInfo.name)}`)
  }

  return (
    <div className="space-y-6">
      <ProgressSteps currentStep={currentStep} totalSteps={totalSteps} />

      <Card className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <PersonalInfo data={formData.personalInfo} updateData={(data) => updateFormData(1, data)} />
            )}

            {currentStep === 2 && (
              <FitnessGoals data={formData.fitnessGoals} updateData={(data) => updateFormData(2, data)} />
            )}

            {currentStep === 3 && (
              <ExperienceLevel data={formData.experienceLevel} updateData={(data) => updateFormData(3, data)} />
            )}

            {currentStep === 4 && <Summary formData={formData} />}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            Anterior
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              Siguiente
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              Agendar ahora
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}
