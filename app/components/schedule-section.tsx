"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { schedules } from "@/lib/data"

export default function ScheduleSection() {
  return (
    <section id="horarios" className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Horarios de Entrenamiento</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clases adaptadas a cada nivel. Encuentra el horario perfecto para tu rutina diaria.
          </p>
        </motion.div>

        <Tabs defaultValue="principiante" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="principiante">Principiante</TabsTrigger>
            <TabsTrigger value="intermedio">Intermedio</TabsTrigger>
            <TabsTrigger value="avanzado">Avanzado</TabsTrigger>
          </TabsList>

          {Object.entries(schedules).map(([level, schedule]) => (
            <TabsContent key={level} value={level} className="mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="rounded-lg border overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="text-left p-3 font-medium">Día</th>
                            <th className="text-left p-3 font-medium">Actividad</th>
                            <th className="text-left p-3 font-medium">Horario</th>
                          </tr>
                        </thead>
                        <tbody>
                          {schedule.map((item, i) => (
                            <tr key={i} className="border-t">
                              <td className="p-3 font-medium">{item.day}</td>
                              <td className="p-3">{item.activity}</td>
                              <td className="p-3">{item.time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
