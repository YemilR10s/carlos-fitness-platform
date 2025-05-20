"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  BookOpen,
  Calendar,
  CreditCard,
  Home,
  LogOut,
  Settings,
  FileVideo,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export function UserSidebar() {
  const [activeItem, setActiveItem] = useState("dashboard")
  const router = useRouter()
  const userName = "Carlos Mendoza"

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, path: "/panel-usuario" },
    { id: "entrenamiento", label: "Entrenamiento", icon: FileVideo, path: "/panel-usuario/plan-entrenamiento" },
    { id: "recursos", label: "Recursos", icon: BookOpen, path: "/panel-usuario/recursos" },
    { id: "agendar", label: "Agendar sesión", icon: Calendar, path: "/calendario?name=" },
    { id: "suscripcion", label: "Administrar suscripción", icon: CreditCard, path: "/panel-usuario/suscription" },
    { id: "ajustes", label: "Ajustes", icon: Settings, path: "/panel-usuario/ajustes" },
  ]


  const handleRedirect = (path: string, id: string) => {
    setActiveItem(id)
    router.push(path)
  }

  return (
    <Sidebar className="border-r border-border bg-background">
      <SidebarHeader className="p-5">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-border">
            <AvatarImage src="/placeholder.svg" alt={userName} />
            <AvatarFallback>CM</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{userName}</span>
            <span className="text-xs text-muted-foreground">Plan Premium</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="p-2">
        <SidebarMenu>
          {/* Menu normal */}
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                isActive={activeItem === item.id}
                onClick={() => handleRedirect(item.path, item.id)}
                className="transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800">
              <LogOut className="h-4 w-4" />
              <Link href="/">
                <span>Cerrar sesión</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
