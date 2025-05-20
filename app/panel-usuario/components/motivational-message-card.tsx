import { Star } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function MotivationalMessageCard() {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Mensaje motivacional</CardTitle>
        <CardDescription>De tu entrenador personal</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-4 italic">
            Carlos, has mostrado un progreso increíble en las últimas semanas. Sigue con ese compromiso y verás
            resultados aún mejores. ¡Estoy orgulloso de tu dedicación!
          </div>
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Miguel Estrada</p>
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
                  ))}
                <span className="text-xs text-muted-foreground ml-1">Entrenador certificado</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
