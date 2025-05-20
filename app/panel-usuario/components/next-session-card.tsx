import { Clock, Calendar } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function NextSessionCard() {
  return (
    <Card className="border-2 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-medium">Próxima sesión agendada</CardTitle>
          <Badge variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            <Clock className="h-3 w-3 mr-1" /> Mañana
          </Badge>
        </div>
        <CardDescription>Entrenamiento personalizado con Entrenador Miguel</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 py-2">
          <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Calendar className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </div>
          <div>
            <p className="font-medium">Martes, 21 de Mayo</p>
            <p className="text-sm text-muted-foreground">10:00 AM - 11:00 AM</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Reprogramar</Button>
        <Button>Confirmar asistencia</Button>
      </CardFooter>
    </Card>
  )
}
