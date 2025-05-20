"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { format, addDays, startOfWeek, addWeeks, subWeeks, isSameDay } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar, Clock, ArrowLeft, ArrowRight, Check, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Horarios disponibles
const timeSlots = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

// Función para generar días de la semana
const generateWeekDays = (startDate: Date) => {
  const days = []
  const start = startOfWeek(startDate, { weekStartsOn: 1 }) // Semana comienza el lunes

  for (let i = 0; i < 7; i++) {
    days.push(addDays(start, i))
  }

  return days
}

export default function CalendarioPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams.get("name") || "Cliente"

  const [currentWeekStart, setCurrentWeekStart] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isBooked, setIsBooked] = useState(false)

  const weekDays = generateWeekDays(currentWeekStart)

  const nextWeek = () => {
    setCurrentWeekStart(addWeeks(currentWeekStart, 1))
  }

  const prevWeek = () => {
    setCurrentWeekStart(subWeeks(currentWeekStart, 1))
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true)
    }
  }

  const goBack = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-12">
      <div className="container max-w-[1200px] m-auto px-5 md:px-10">
        <Button variant="ghost" onClick={goBack} className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Button>

        {isBooked ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="border-green-500">
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <CardTitle>¡Reserva confirmada!</CardTitle>
                    <CardDescription>Tu llamada 1-1 ha sido agendada</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Fecha</p>
                      <p className="text-muted-foreground">
                        {selectedDate && format(selectedDate, "EEEE d 'de' MMMM 'de' yyyy", { locale: es })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Hora</p>
                      <p className="text-muted-foreground">{selectedTime} hrs</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm">
                    Hemos enviado un correo electrónico con los detalles de tu reserva. Un entrenador de Carlos Fitness
                    se pondrá en contacto contigo para confirmar la llamada.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={goBack}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Volver al inicio
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ) : (
          <>
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Selecciona una fecha y hora</h1>
              <p className="text-muted-foreground">
                Hola {name}, elige el momento que mejor te convenga para tu llamada 1-1 con un entrenador
              </p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Calendario</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={prevWeek}>
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextWeek}>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>{format(weekDays[0], "MMMM yyyy", { locale: es })}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {weekDays.map((day, index) => (
                    <div key={index} className="text-center">
                      <p className="text-xs text-muted-foreground mb-1">{format(day, "EEE", { locale: es })}</p>
                      <button
                        onClick={() => handleDateSelect(day)}
                        className={cn(
                          "h-10 w-10 rounded-full flex items-center justify-center text-sm",
                          selectedDate && isSameDay(selectedDate, day)
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                            : "hover:bg-muted",
                        )}
                      >
                        {format(day, "d")}
                      </button>
                    </div>
                  ))}
                </div>

                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-medium mb-3">
                      Horarios disponibles para el {format(selectedDate, "d 'de' MMMM", { locale: es })}:
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={cn(
                            "py-2 px-3 rounded-md text-sm border",
                            selectedTime === time
                              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent"
                              : "hover:bg-muted",
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Confirmar reserva
                </Button>
              </CardFooter>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
