import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const appointments = [
  {
    id: 1,
    client: "Ana García",
    time: "09:00 - 10:00",
    type: "Entrenamiento Personal",
    status: "Confirmada",
    avatar: "AG",
  },
  {
    id: 2,
    client: "Carlos Rodríguez",
    time: "11:30 - 12:30",
    type: "Evaluación Física",
    status: "Pendiente",
    avatar: "CR",
  },
  {
    id: 3,
    client: "Laura Martínez",
    time: "14:00 - 15:00",
    type: "Entrenamiento Personal",
    status: "Confirmada",
    avatar: "LM",
  },
  {
    id: 4,
    client: "Miguel Sánchez",
    time: "16:30 - 17:30",
    type: "Consulta Nutricional",
    status: "Confirmada",
    avatar: "MS",
  },
  {
    id: 5,
    client: "Elena López",
    time: "18:00 - 19:00",
    type: "Entrenamiento Personal",
    status: "Pendiente",
    avatar: "EL",
  },
]

export function RecentAppointments() {
  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={appointment.client} />
              <AvatarFallback>{appointment.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{appointment.client}</p>
              <p className="text-xs text-gray-500">{appointment.type}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-500">{appointment.time}</div>
            <Badge variant={appointment.status === "Confirmada" ? "outline" : "secondary"} className="text-xs">
              {appointment.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
