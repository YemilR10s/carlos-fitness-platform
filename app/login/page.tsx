"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, User, Users, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleUserLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulamos un proceso de login
    setTimeout(() => {
      setIsLoading(false)
      router.push("/panel-usuario")
    }, 1000)
  }

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulamos un proceso de login
    setTimeout(() => {
      setIsLoading(false)
      router.push("/panel-administrador")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <div className="w-full max-w-md">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Iniciar Sesión</CardTitle>
              <CardDescription className="text-center">
                Accede a tu cuenta para ver tu progreso y entrenamientos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="usuario" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="usuario">
                    <User className="mr-2 h-4 w-4" />
                    Usuario
                  </TabsTrigger>
                  <TabsTrigger value="admin">
                    <Users className="mr-2 h-4 w-4" />
                    Administrador
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="usuario">
                  <form onSubmit={handleUserLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email-user">Correo electrónico</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="email-user" placeholder="tu@email.com" type="email" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password-user">Contraseña</Label>
                          <Link href="#" className="text-xs text-primary hover:underline">
                            ¿Olvidaste tu contraseña?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="password-user" type="password" className="pl-10" required />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                        disabled={isLoading}
                      >
                        {isLoading ? "Iniciando sesión..." : "Iniciar sesión como Usuario"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="admin">
                  <form onSubmit={handleAdminLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email-admin">Correo electrónico</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email-admin"
                            placeholder="admin@carlosfitness.co"
                            type="email"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password-admin">Contraseña</Label>
                          <Link href="#" className="text-xs text-primary hover:underline">
                            ¿Olvidaste tu contraseña?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="password-admin" type="password" className="pl-10" required />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                        disabled={isLoading}
                      >
                        {isLoading ? "Iniciando sesión..." : "Iniciar sesión como Admin"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-muted-foreground">
                ¿No tienes una cuenta?{" "}
                <Link href="#" className="text-primary hover:underline">
                  Regístrate
                </Link>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
