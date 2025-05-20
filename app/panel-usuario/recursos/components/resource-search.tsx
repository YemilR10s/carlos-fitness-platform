"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ResourceSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    // Implementar lógica de búsqueda
    console.log("Buscando:", searchQuery)
  }

  return (
    <div className="flex items-center gap-4">
      <Input
        placeholder="Buscar recursos..."
        className="max-w-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <Button variant="outline" onClick={handleSearch}>
        Buscar
      </Button>
    </div>
  )
}
