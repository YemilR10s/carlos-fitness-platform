"use client"

import { useState } from "react"
import { CheckCircle, Play } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LessonsList() {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Lecciones</CardTitle>
        <CardDescription>Tu programa de entrenamiento completo</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="all" className="px-4 pt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="pending">Pendientes</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="pt-4">
            <div className="space-y-1">
              {lessons.map((lesson, index) => (
                <div
                  key={index}
                  className={`flex items-center p-3 rounded-md cursor-pointer transition-colors ${
                    currentLesson === index ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-900"
                  }`}
                  onClick={() => setCurrentLesson(index)}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                      lesson.completed
                        ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                        : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                    }`}
                  >
                    {lesson.completed ? <CheckCircle className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${lesson.completed ? "text-muted-foreground" : ""}`}>
                      {lesson.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pending" className="pt-4">
            <div className="space-y-1">
              {lessons
                .filter((lesson) => !lesson.completed)
                .map((lesson, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 rounded-md cursor-pointer transition-colors ${
                      currentLesson === lessons.findIndex((l) => l.id === lesson.id)
                        ? "bg-gray-100 dark:bg-gray-800"
                        : "hover:bg-gray-50 dark:hover:bg-gray-900"
                    }`}
                    onClick={() => setCurrentLesson(lessons.findIndex((l) => l.id === lesson.id))}
                  >
                    <div className="h-8 w-8 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 flex items-center justify-center mr-3">
                      <Play className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{lesson.title}</p>
                      <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                    </div>
                  </div>
                ))}
              {lessons.filter((lesson) => !lesson.completed).length === 0 && (
                <div className="p-4 text-center text-sm text-muted-foreground">
                  ¡Has completado todas las lecciones! 🎉
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
