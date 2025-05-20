"use client"

import { useState } from "react"
import { CheckCircle, ChevronRight, Play, PauseCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentLesson, setCurrentLesson] = useState(0)

  const lessons = [
    {
      id: 1,
      title: "Día 1: Fuerza superior",
      description: "Entrenamiento enfocado en pecho, hombros y brazos",
      duration: "45 min",
      completed: true,
    },
    {
      id: 2,
      title: "Día 2: Core y flexibilidad",
      description: "Ejercicios para fortalecer el núcleo y mejorar la flexibilidad",
      duration: "35 min",
      completed: false,
    },
    {
      id: 3,
      title: "Día 3: Fuerza inferior",
      description: "Entrenamiento enfocado en piernas y glúteos",
      duration: "50 min",
      completed: false,
    },
  ]

  const handleNextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
    }
  }

  const handleMarkCompleted = () => {
    // Logic to mark lesson as completed
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium">{lessons[currentLesson].title}</CardTitle>
        <CardDescription>{lessons[currentLesson].description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-16 w-16 rounded-full bg-black/30 hover:bg-black/50 text-white"
              onClick={togglePlayPause}
            >
              {isPlaying ? <PauseCircle className="h-10 w-10" /> : <Play className="h-10 w-10" />}
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 text-xs rounded">
            {lessons[currentLesson].duration}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-6">
        <Button variant="outline" className="gap-2" onClick={handleMarkCompleted}>
          <CheckCircle className="h-4 w-4" />
          Marcar como completado
        </Button>
        <Button className="gap-2" onClick={handleNextLesson} disabled={currentLesson === lessons.length - 1}>
          Siguiente lección
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
