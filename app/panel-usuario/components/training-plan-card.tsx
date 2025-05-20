import { Play, ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TrainingPlanCard() {
  const trainingDays = ["Día 1: Fuerza superior", "Día 2: Core y flexibilidad", "Día 3: Fuerza inferior"]

  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Tu plan de entrenamiento</CardTitle>
        <CardDescription>Acceso rápido a tu rutina personalizada</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {trainingDays.map((title, i) => (
            <div
              key={i}
              className="flex items-center p-4 border-t hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <Play className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-muted-foreground">6 ejercicios • 45 min</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Ver plan completo
        </Button>
      </CardFooter>
    </Card>
  )
}
