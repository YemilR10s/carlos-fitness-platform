import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function SuscripcionesPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Suscripciones</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Plan
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <SubscriptionCard
            title="Plan Básico"
            price="$29.99"
            period="mensual"
            features={[
              "Acceso a rutinas básicas",
              "1 sesión de evaluación",
              "Soporte por email",
              "Acceso a la app móvil",
            ]}
            users={45}
            percentage={35}
          />

          <SubscriptionCard
            title="Plan Intermedio"
            price="$49.99"
            period="mensual"
            features={[
              "Acceso a todas las rutinas",
              "2 sesiones de evaluación",
              "Soporte prioritario",
              "Acceso a la app móvil",
              "Plan nutricional básico",
            ]}
            users={62}
            percentage={48}
            popular={true}
          />

          <SubscriptionCard
            title="Plan Premium"
            price="$79.99"
            period="mensual"
            features={[
              "Acceso a todas las rutinas",
              "4 sesiones de evaluación",
              "Soporte 24/7",
              "Acceso a la app móvil",
              "Plan nutricional personalizado",
              "Seguimiento semanal",
            ]}
            users={21}
            percentage={17}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Estadísticas de Suscripciones</CardTitle>
            <CardDescription>Resumen de suscripciones activas y tendencias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Distribución de Suscripciones</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                        <span className="text-sm font-medium">Plan Básico</span>
                      </div>
                      <span className="text-sm text-gray-500">45 usuarios (35%)</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                        <span className="text-sm font-medium">Plan Intermedio</span>
                      </div>
                      <span className="text-sm text-gray-500">62 usuarios (48%)</span>
                    </div>
                    <Progress value={48} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <span className="text-sm font-medium">Plan Premium</span>
                      </div>
                      <span className="text-sm text-gray-500">21 usuarios (17%)</span>
                    </div>
                    <Progress value={17} className="h-2" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Tendencia Mensual</h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {["Ene", "Feb", "Mar", "Abr", "May", "Jun"].map((month) => (
                    <div key={month} className="flex flex-col items-center gap-2">
                      <div className="flex flex-col gap-1">
                        <div className="w-12 bg-gray-900" style={{ height: `${20 + Math.random() * 40}px` }}></div>
                        <div className="w-12 bg-gray-600" style={{ height: `${30 + Math.random() * 60}px` }}></div>
                        <div className="w-12 bg-gray-400" style={{ height: `${10 + Math.random() * 30}px` }}></div>
                      </div>
                      <span className="text-xs text-gray-500">{month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SubscriptionCard({
  title,
  price,
  period,
  features,
  users,
  percentage,
  popular = false,
}: {
  title: string
  price: string
  period: string
  features: string[]
  users: number
  percentage: number
  popular?: boolean
}) {
  return (
    <Card className={`relative ${popular ? "border-gray-400" : ""}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-gray-900 text-white hover:bg-gray-800">Más Popular</Badge>
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Button variant="outline" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500">/{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Users className="h-4 w-4" />
          <span>
            {users} usuarios activos ({percentage}%)
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          Ver Detalles
        </Button>
      </CardFooter>
    </Card>
  )
}
