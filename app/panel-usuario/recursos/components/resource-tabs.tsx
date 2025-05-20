import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourceCard } from "./resource-card"

export function ResourceTabs() {
  const recursos = [
    {
      title: "Guía de nutrición para rendimiento",
      description: "Aprende a alimentarte para maximizar tu rendimiento físico",
      type: "PDF",
      category: "nutricion",
      duration: "15 min",
      icon: "FileText",
    },
    {
      title: "Técnicas de recuperación avanzadas",
      description: "Métodos profesionales para recuperarte después del entrenamiento",
      type: "Video",
      category: "recuperacion",
      duration: "22 min",
      icon: "Video",
    },
    {
      title: "Meditación para deportistas",
      description: "Mejora tu concentración y reduce el estrés",
      type: "Audio",
      category: "mental",
      duration: "10 min",
      icon: "Headphones",
    },
    {
      title: "Guía de estiramientos",
      description: "Rutina completa para mejorar tu flexibilidad",
      type: "PDF",
      category: "recuperacion",
      duration: "12 min",
      icon: "FileText",
    },
    {
      title: "Planificación de comidas semanal",
      description: "Plan de alimentación para 7 días",
      type: "PDF",
      category: "nutricion",
      duration: "8 min",
      icon: "FileText",
    },
    {
      title: "Técnicas de respiración",
      description: "Mejora tu rendimiento con técnicas de respiración",
      type: "Video",
      category: "mental",
      duration: "18 min",
      icon: "Video",
    },
  ]

  return (
    <Tabs defaultValue="todos" className="w-full">
      <TabsList>
        <TabsTrigger value="todos">Todos</TabsTrigger>
        <TabsTrigger value="nutricion">Nutrición</TabsTrigger>
        <TabsTrigger value="recuperacion">Recuperación</TabsTrigger>
        <TabsTrigger value="mental">Salud Mental</TabsTrigger>
      </TabsList>
      <TabsContent value="todos" className="mt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recursos.map((recurso, index) => (
            <ResourceCard key={index} recurso={recurso} />
          ))}
        </div>
      </TabsContent>
      {["nutricion", "recuperacion", "mental"].map((category) => (
        <TabsContent key={category} value={category} className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recursos
              .filter((recurso) => recurso.category === category)
              .map((recurso, index) => (
                <ResourceCard key={index} recurso={recurso} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
