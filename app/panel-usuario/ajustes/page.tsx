"use client"

import { SettingsTabs } from "./components/settings-tabs"

export default function AjustesPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Ajustes</h1>
        <p className="text-sm text-muted-foreground mt-2">Administra tu cuenta y preferencias.</p>
      </div>

      <SettingsTabs />
    </div>
  )
}
