import { DashboardHeader } from "./components/dashboard-header"
import { NextSessionCard } from "./components/next-session-card"
import { TrainingPlanCard } from "./components/training-plan-card"
import { MotivationalMessageCard } from "./components/motivational-message-card"
import { RecentResourcesCard } from "./components/recent-resources-card"

export default function DashboardPage() {
  const userName = "Carlos Mendoza"

  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <DashboardHeader userName={userName} />

      {/* Próxima sesión */}
      <NextSessionCard />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Plan de entrenamiento */}
        <TrainingPlanCard />

        {/* Testimonios */}
        <MotivationalMessageCard />
      </div>

      {/* Recursos recientes */}
      <RecentResourcesCard />
    </div>
  )
}
