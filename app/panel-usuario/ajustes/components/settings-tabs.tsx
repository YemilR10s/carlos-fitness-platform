"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileSettings } from "./profile-settings"
import { SecuritySettings } from "./security-settings"
import { NotificationSettings } from "./notification-settings"

export function SettingsTabs() {
  return (
    <Tabs defaultValue="perfil" className="w-full">
      <TabsList className="grid w-full max-w-md grid-cols-3">
        <TabsTrigger value="perfil">Perfil</TabsTrigger>
        <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
        <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
      </TabsList>

      <TabsContent value="perfil" className="mt-6 space-y-6">
        <ProfileSettings />
      </TabsContent>

      <TabsContent value="seguridad" className="mt-6 space-y-6">
        <SecuritySettings />
      </TabsContent>

      <TabsContent value="notificaciones" className="mt-6">
        <NotificationSettings />
      </TabsContent>
    </Tabs>
  )
}
