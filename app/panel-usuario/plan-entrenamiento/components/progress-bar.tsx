"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"

export function ProgressBar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progress, setProgress] = useState(33)

  return (
    <div className="flex items-center gap-4">
      <Progress value={progress} className="h-2 flex-1" />
      <span className="text-sm font-medium">{progress}% completado</span>
    </div>
  )
}
