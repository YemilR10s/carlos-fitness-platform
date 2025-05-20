import { CreditCard, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CurrentPlan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tu plan actual</CardTitle>
        <CardDescription>Detalles de tu suscripción activa</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Award className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </div>
            <div>
              <p className="font-medium">Plan Premium</p>
              <p className="text-sm text-muted-foreground">Facturación mensual</p>
            </div>
          </div>
          <Badge variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            Activo
          </Badge>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <p className="text-sm">Próximo pago</p>
          <p className="font-medium">21 de Junio, 2025</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm">Monto</p>
          <p className="font-medium">€59.99 / mes</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm">Método de pago</p>
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <p className="font-medium">•••• 4242</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cambiar método de pago</Button>
        <Button variant="outline" className="text-red-500 hover:text-red-600">
          Cancelar suscripción
        </Button>
      </CardFooter>
    </Card>
  )
}
