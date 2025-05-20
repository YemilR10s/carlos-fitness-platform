import type React from "react"
/* import { Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button" */
import { ResourceHeader } from "./components/resource-header"
import { ResourceSearch } from "./components/resource-search"
import { ResourceTabs } from "./components/resource-tabs"

export default function RecursosPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <ResourceHeader />
      <ResourceSearch />
      <ResourceTabs />
    </div>
  )
}

/* interface RecursoCardProps {
  recurso: {
    title: string
    description: string
    type: string
    duration: string
    icon: React.ElementType
  }
} */

/* function RecursoCard({ recurso }: RecursoCardProps) {
  const { title, description, type, duration, icon: Icon } = recurso

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 flex justify-center">
        <Icon className="h-12 w-12 text-gray-600 dark:text-gray-300" />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <span>
              {type} • {duration}
            </span>
          </div>
          <Button variant="ghost" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Descargar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
 */