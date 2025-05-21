import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AgendaPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Agenda</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nueva Cita
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1 md:col-span-1 lg:col-span-1">
            <CardHeader>
              <CardTitle>Calendario</CardTitle>
              <CardDescription>Vista mensual de tus citas</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" className="rounded-md border" />
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Citas del Día</CardTitle>
              <CardDescription>Martes, 20 de Mayo de 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <AppointmentItem
                  time="09:00 - 10:00"
                  client="Ana García"
                  type="Entrenamiento Personal"
                  status="Confirmada"
                />
                <AppointmentItem
                  time="11:30 - 12:30"
                  client="Carlos Rodríguez"
                  type="Evaluación Física"
                  status="Pendiente"
                />
                <AppointmentItem
                  time="14:00 - 15:00"
                  client="Laura Martínez"
                  type="Entrenamiento Personal"
                  status="Confirmada"
                />
                <AppointmentItem
                  time="16:30 - 17:30"
                  client="Miguel Sánchez"
                  type="Consulta Nutricional"
                  status="Confirmada"
                />
                <AppointmentItem
                  time="18:00 - 19:00"
                  client="Elena López"
                  type="Entrenamiento Personal"
                  status="Pendiente"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Disponibilidad Semanal</CardTitle>
            <CardDescription>Configura tus horarios disponibles para citas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-4">
              {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((day) => (
                <div key={day} className="space-y-2">
                  <h3 className="text-center font-medium">{day}</h3>
                  <div className="space-y-1">
                    <TimeSlot time="08:00 - 10:00" available={day !== "Domingo"} />
                    <TimeSlot time="10:00 - 12:00" available={day !== "Domingo"} />
                    <TimeSlot time="12:00 - 14:00" available={false} />
                    <TimeSlot time="14:00 - 16:00" available={day !== "Sábado" && day !== "Domingo"} />
                    <TimeSlot time="16:00 - 18:00" available={day !== "Sábado" && day !== "Domingo"} />
                    <TimeSlot time="18:00 - 20:00" available={day !== "Sábado" && day !== "Domingo"} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AppointmentItem({
  time,
  client,
  type,
  status,
}: {
  time: string
  client: string
  type: string
  status: "Confirmada" | "Pendiente" | "Cancelada"
}) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
      <div className="flex items-center gap-4">
        <div className="text-lg font-medium">{time}</div>
        <div>
          <p className="font-medium">{client}</p>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant={status === "Confirmada" ? "outline" : "secondary"}>{status}</Badge>
        <Button variant="outline" size="sm">
          Detalles
        </Button>
      </div>
    </div>
  )
}

function TimeSlot({ time, available }: { time: string; available: boolean }) {
  return (
    <div
      className={`text-xs p-1 text-center rounded ${
        available
          ? "bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200"
          : "bg-gray-50 text-gray-400 line-through"
      }`}
    >
      {time}
    </div>
  )
}
