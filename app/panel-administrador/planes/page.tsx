import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Plus } from "lucide-react"

export default function PlanesPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Planes de Entrenamiento</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Plan
          </Button>
        </div>

        <Tabs defaultValue="basico" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="basico">Plan Básico</TabsTrigger>
            <TabsTrigger value="intermedio">Plan Intermedio</TabsTrigger>
            <TabsTrigger value="premium">Plan Premium</TabsTrigger>
          </TabsList>

          <TabsContent value="basico" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Plan Básico</CardTitle>
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Plan de entrenamiento para principiantes - 3 días por semana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Descripción General</h3>
                    <p className="text-sm text-gray-500">
                      Este plan está diseñado para personas que están comenzando su viaje fitness. Se enfoca en
                      establecer una base sólida con ejercicios fundamentales y técnicas correctas.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Estructura del Plan</h3>
                    <div className="space-y-4">
                      <WorkoutDay
                        day="Día 1"
                        focus="Tren Superior"
                        exercises={[
                          "Flexiones (3 series x 10 repeticiones)",
                          "Remo con mancuernas (3 series x 12 repeticiones)",
                          "Press de hombros (3 series x 10 repeticiones)",
                          "Curl de bíceps (3 series x 12 repeticiones)",
                          "Extensiones de tríceps (3 series x 12 repeticiones)",
                        ]}
                      />

                      <WorkoutDay
                        day="Día 2"
                        focus="Tren Inferior"
                        exercises={[
                          "Sentadillas (3 series x 12 repeticiones)",
                          "Estocadas (3 series x 10 repeticiones por pierna)",
                          "Peso muerto rumano (3 series x 12 repeticiones)",
                          "Elevaciones de pantorrilla (3 series x 15 repeticiones)",
                          "Puente de glúteos (3 series x 15 repeticiones)",
                        ]}
                      />

                      <WorkoutDay
                        day="Día 3"
                        focus="Cuerpo Completo y Cardio"
                        exercises={[
                          "Burpees (3 series x 10 repeticiones)",
                          "Mountain climbers (3 series x 30 segundos)",
                          "Jumping jacks (3 series x 30 segundos)",
                          "Plancha (3 series x 30 segundos)",
                          "Saltos de cuerda (3 series x 1 minuto)",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <div className="text-sm text-gray-500">45 usuarios activos en este plan</div>
                <Button>Ver Estadísticas</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="intermedio" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Plan Intermedio</CardTitle>
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Plan de entrenamiento para nivel intermedio - 4 días por semana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Descripción General</h3>
                    <p className="text-sm text-gray-500">
                      Este plan está diseñado para personas que ya tienen experiencia con el entrenamiento. Se enfoca en
                      aumentar la intensidad y variedad de ejercicios para continuar progresando.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Estructura del Plan</h3>
                    <div className="space-y-4">
                      <WorkoutDay
                        day="Día 1"
                        focus="Pecho y Tríceps"
                        exercises={[
                          "Press de banca (4 series x 10 repeticiones)",
                          "Flexiones inclinadas (3 series x 12 repeticiones)",
                          "Aperturas con mancuernas (3 series x 12 repeticiones)",
                          "Fondos de tríceps (3 series x 12 repeticiones)",
                          "Extensiones de tríceps con polea (3 series x 15 repeticiones)",
                        ]}
                      />

                      <WorkoutDay
                        day="Día 2"
                        focus="Espalda y Bíceps"
                        exercises={[
                          "Dominadas (4 series x 8 repeticiones)",
                          "Remo con barra (3 series x 12 repeticiones)",
                          "Pullover con mancuerna (3 series x 12 repeticiones)",
                          "Curl de bíceps con barra (3 series x 12 repeticiones)",
                          "Curl martillo (3 series x 12 repeticiones)",
                        ]}
                      />

                      {/* Mostrar solo 2 días para mantener la interfaz limpia */}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <div className="text-sm text-gray-500">62 usuarios activos en este plan</div>
                <Button>Ver Estadísticas</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="premium" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Plan Premium</CardTitle>
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Plan de entrenamiento avanzado - 5 días por semana</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Descripción General</h3>
                    <p className="text-sm text-gray-500">
                      Este plan está diseñado para personas con experiencia avanzada en entrenamiento. Incluye rutinas
                      de alta intensidad, periodización y técnicas avanzadas.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Estructura del Plan</h3>
                    <div className="space-y-4">
                      <WorkoutDay
                        day="Día 1"
                        focus="Pecho y Hombros"
                        exercises={[
                          "Press de banca (5 series x 8 repeticiones)",
                          "Press inclinado (4 series x 10 repeticiones)",
                          "Aperturas en polea (3 series x 12 repeticiones)",
                          "Press militar (4 series x 10 repeticiones)",
                          "Elevaciones laterales (3 series x 15 repeticiones)",
                        ]}
                      />

                      <WorkoutDay
                        day="Día 2"
                        focus="Espalda"
                        exercises={[
                          "Dominadas lastradas (4 series x 8 repeticiones)",
                          "Remo con barra T (4 series x 10 repeticiones)",
                          "Remo unilateral con mancuerna (3 series x 12 repeticiones)",
                          "Pullover con polea (3 series x 12 repeticiones)",
                          "Hiperextensiones (3 series x 15 repeticiones)",
                        ]}
                      />

                      {/* Mostrar solo 2 días para mantener la interfaz limpia */}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <div className="text-sm text-gray-500">21 usuarios activos en este plan</div>
                <Button>Ver Estadísticas</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function WorkoutDay({ day, focus, exercises }: { day: string; focus: string; exercises: string[] }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium">
          {day} - {focus}
        </h4>
      </div>
      <ul className="space-y-1">
        {exercises.map((exercise, index) => (
          <li key={index} className="text-sm text-gray-600">
            • {exercise}
          </li>
        ))}
      </ul>
    </div>
  )
}
