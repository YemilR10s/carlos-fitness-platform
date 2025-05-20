"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type PersonalInfoData = {
  name: string
  email: string
  phone: string
  age: string
  gender: string
}

type PersonalInfoProps = {
  data: PersonalInfoData
  updateData: (data: PersonalInfoData) => void
}

export default function PersonalInfo({ data, updateData }: PersonalInfoProps) {
  const [formState, setFormState] = useState(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenderChange = (value: string) => {
    setFormState((prev) => ({ ...prev, gender: value }))
  }

  // Actualizar datos del padre solo cuando cambian los valores relevantes
  useEffect(() => {
    // Usar una bandera para evitar la primera actualización innecesaria
    const timer = setTimeout(() => {
      updateData(formState)
    }, 0)

    return () => clearTimeout(timer)
  }, [formState, updateData])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Información Personal</h2>
        <p className="text-muted-foreground">Cuéntanos un poco sobre ti para personalizar tu experiencia</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo</Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Ej. Carlos García"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="+57 300 123 4567"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Edad</Label>
          <Input
            id="age"
            name="age"
            type="number"
            min="18"
            max="99"
            value={formState.age}
            onChange={handleChange}
            placeholder="30"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Género</Label>
          <RadioGroup value={formState.gender} onValueChange={handleGenderChange} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="masculino" id="masculino" />
              <Label htmlFor="masculino">Masculino</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="femenino" id="femenino" />
              <Label htmlFor="femenino">Femenino</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="otro" id="otro" />
              <Label htmlFor="otro">Otro</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}
