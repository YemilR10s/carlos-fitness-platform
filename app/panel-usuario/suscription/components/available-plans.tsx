import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AvailablePlans() {
  const currentPlan = "premium"

  const plans = [
    {
      id: "basico",
      name: "Básico",
      price: "29.99",
      description: "Acceso a entrenamientos básicos",
      features: ["Acceso a 10 videos de entrenamiento", "Recursos básicos de nutrición", "Soporte por email"],
    },
    {
      id: "premium",
      name: "Premium",
      price: "59.99",
      description: "Acceso completo a todos los recursos",
      features: [
        "Acceso ilimitado a videos de entrenamiento",
        "Recursos avanzados de nutrición",
        "Soporte prioritario",
        "Sesiones personalizadas",
        "Seguimiento de progreso",
      ],
    },
    {
      id: "elite",
      name: "Elite",
      price: "99.99",
      description: "Experiencia personalizada completa",
      features: [
        "Todo lo incluido en Premium",
        "Entrenador personal dedicado",
        "Plan de nutrición personalizado",
        "Consultas ilimitadas",
        "Análisis avanzado de progreso",
      ],
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Planes disponibles</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`${plan.id === currentPlan ? "border-2 border-gray-800 dark:border-gray-200" : ""}`}
          >
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">
                €{plan.price}
                <span className="text-sm font-normal text-muted-foreground"> / mes</span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.id === currentPlan ? "secondary" : "default"}
                disabled={plan.id === currentPlan}
              >
                {plan.id === currentPlan ? "Plan actual" : "Cambiar plan"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
