import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardStats } from "./components/dashboard-stats"
import { RecentAppointments } from "./components/recent-appointments"
import { SubscriptionStatus } from "./components/subscription-status"

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Bienvenido Carlos</h2>
          <div className="flex items-center gap-2">
          </div>
        </div>
        <DashboardStats />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Próximas Citas</CardTitle>
              <CardDescription>Tienes 5 citas programadas para hoy</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentAppointments />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Estado de Suscripciones</CardTitle>
              <CardDescription>Distribución de suscripciones activas</CardDescription>
            </CardHeader>
            <CardContent>
              <SubscriptionStatus />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
 