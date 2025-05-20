"use client"

import type React from "react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { UserSidebar } from "@/app/panel-usuario/components/user-sidebar"

export default function PanelUsuarioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <UserSidebar />
        <main className="flex flex-col">{children}</main>
      </div>
    </SidebarProvider>
  )
}
