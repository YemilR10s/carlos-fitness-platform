import { BookOpen, ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RecentResourcesCard() {
  const resources = [
    { title: "Guía de nutrición para rendimiento", type: "PDF", time: "15 min" },
    { title: "Técnicas de recuperación avanzadas", type: "Video", time: "22 min" },
    { title: "Meditación para deportistas", type: "Audio", time: "10 min" },
  ]

  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-sm">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Recursos recientes</CardTitle>
          <Button variant="ghost" size="sm" className="gap-1">
            Ver todos <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid gap-4 md:grid-cols-3">
          {resources.map((resource, i) => (
            <div
              key={i}
              className="p-4 border-t md:border-t-0 md:border-l first:border-l-0 first:border-t-0 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-3">
                <BookOpen className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </div>
              <h3 className="font-medium text-sm">{resource.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {resource.type} • {resource.time}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
