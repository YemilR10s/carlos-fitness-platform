"use client"

import { VideoPlayer } from "./components/video-player"
import { LessonsList } from "./components/lessons-list"
import { FaqSection } from "./components/faq-section"
import { ProgressBar } from "./components/progress-bar"

export default function PlanEntrenamientoPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Tu plan de entrenamiento</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Sigue tu progreso y completa todas las lecciones para obtener resultados óptimos.
        </p>
      </div>

      <ProgressBar />

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-6">
          <VideoPlayer />
          <FaqSection />
        </div>
        <LessonsList />
      </div>
    </div>
  )
}
