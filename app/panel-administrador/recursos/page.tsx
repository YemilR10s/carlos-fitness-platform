import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, FileText, Video, FileImage, FileSpreadsheet } from "lucide-react"

export default function RecursosPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Recursos</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Recurso
          </Button>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="grid w-full grid-cols-5 md:w-auto">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="recetas">Recetas</TabsTrigger>
            <TabsTrigger value="consejos">Consejos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="documentos">Documentos</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Recetas Saludables"
                description="Colección de recetas para desayuno, almuerzo y cena"
                type="document"
                date="Actualizado hace 2 días"
              />
              <ResourceCard
                title="Rutina HIIT 20 minutos"
                description="Video tutorial para entrenamiento de alta intensidad"
                type="video"
                date="Creado hace 1 semana"
              />
              <ResourceCard
                title="Guía de estiramientos"
                description="Documento PDF con rutinas de estiramiento"
                type="document"
                date="Actualizado hace 3 semanas"
              />
              <ResourceCard
                title="Consejos para dormir mejor"
                description="Artículo con recomendaciones para mejorar el sueño"
                type="article"
                date="Creado hace 1 mes"
              />
              <ResourceCard
                title="Planificación semanal"
                description="Hoja de cálculo para planificar comidas y entrenamientos"
                type="spreadsheet"
                date="Actualizado hace 5 días"
              />
              <ResourceCard
                title="Técnicas de respiración"
                description="Video tutorial sobre técnicas de respiración para reducir estrés"
                type="video"
                date="Creado hace 2 semanas"
              />
            </div>
          </TabsContent>

          <TabsContent value="recetas" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Recetas Saludables"
                description="Colección de recetas para desayuno, almuerzo y cena"
                type="document"
                date="Actualizado hace 2 días"
              />
              <ResourceCard
                title="Batidos proteicos"
                description="10 recetas de batidos proteicos post-entrenamiento"
                type="document"
                date="Creado hace 3 semanas"
              />
            </div>
          </TabsContent>

          {/* Contenido para las otras pestañas */}
          <TabsContent value="consejos" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Consejos para dormir mejor"
                description="Artículo con recomendaciones para mejorar el sueño"
                type="article"
                date="Creado hace 1 mes"
              />
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Rutina HIIT 20 minutos"
                description="Video tutorial para entrenamiento de alta intensidad"
                type="video"
                date="Creado hace 1 semana"
              />
              <ResourceCard
                title="Técnicas de respiración"
                description="Video tutorial sobre técnicas de respiración para reducir estrés"
                type="video"
                date="Creado hace 2 semanas"
              />
            </div>
          </TabsContent>

          <TabsContent value="documentos" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Guía de estiramientos"
                description="Documento PDF con rutinas de estiramiento"
                type="document"
                date="Actualizado hace 3 semanas"
              />
              <ResourceCard
                title="Planificación semanal"
                description="Hoja de cálculo para planificar comidas y entrenamientos"
                type="spreadsheet"
                date="Actualizado hace 5 días"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ResourceCard({
  title,
  description,
  type,
  date,
}: {
  title: string
  description: string
  type: "document" | "video" | "article" | "spreadsheet" | "image"
  date: string
}) {
  const getIcon = () => {
    switch (type) {
      case "document":
        return <FileText className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "image":
        return <FileImage className="h-4 w-4" />
      case "spreadsheet":
        return <FileSpreadsheet className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
        {getIcon()}
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-gray-500">{date}</div>
        <Button variant="outline" size="sm">
          Ver
        </Button>
      </CardFooter>
    </Card>
  )
}
