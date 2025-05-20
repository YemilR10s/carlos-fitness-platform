"use client"

import { FileText, Video, Headphones, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ResourceCardProps {
  recurso: {
    title: string
    description: string
    type: string
    duration: string
    icon: string
  }
}

export function ResourceCard({ recurso }: ResourceCardProps) {
  const { title, description, type, duration, icon } = recurso

  const getIcon = () => {
    switch (icon) {
      case "FileText":
        return <FileText className="h-12 w-12 text-gray-600 dark:text-gray-300" />
      case "Video":
        return <Video className="h-12 w-12 text-gray-600 dark:text-gray-300" />
      case "Headphones":
        return <Headphones className="h-12 w-12 text-gray-600 dark:text-gray-300" />
      default:
        return <FileText className="h-12 w-12 text-gray-600 dark:text-gray-300" />
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 flex justify-center">{getIcon()}</div>
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
