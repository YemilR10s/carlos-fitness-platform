interface DashboardHeaderProps {
    userName: string
  }
  
  export function DashboardHeader({ userName }: DashboardHeaderProps) {
    return (
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Bienvenido de vuelta, {userName} 👋</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Tu próxima sesión está programada para mañana. Aquí tienes un resumen de tu plan.
        </p>
      </div>
    )
  }
  