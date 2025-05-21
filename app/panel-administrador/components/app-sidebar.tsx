"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, FileText, Dumbbell, Calendar, CreditCard, LogOut } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Dashboard",
    href: "/panel-administrador",
    icon: BarChart3,
  },
  {
    title: "Recursos",
    href: "/panel-administrador/recursos",
    icon: FileText,
  },
  {
    title: "Planes de Entrenamiento",
    href: "/panel-administrador/planes",
    icon: Dumbbell,
  },
  {
    title: "Agenda",
    href: "/panel-administrador/agenda",
    icon: Calendar,
  },
  {
    title: "Suscripciones",
    href: "/panel-administrador/suscripciones",
    icon: CreditCard,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6" />
          <span className="text-xl font-bold">FitCoach</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Cerrar Sesión">
              <button className="flex w-full items-center gap-2 text-gray-500 hover:text-gray-900">
                <LogOut className="h-5 w-5" />
                <Link href="/">
                  <span>Cerrar Sesión</span>
                </Link>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
