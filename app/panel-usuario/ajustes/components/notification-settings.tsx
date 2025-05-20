import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferencias de notificaciones</CardTitle>
        <CardDescription>Configura cómo quieres recibir notificaciones</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          { title: "Recordatorios de sesiones", description: "Recibe alertas antes de tus sesiones programadas" },
          { title: "Nuevos recursos", description: "Notificaciones cuando se añadan nuevos videos o recursos" },
          { title: "Mensajes del entrenador", description: "Recibe notificaciones de mensajes de tu entrenador" },
          {
            title: "Actualizaciones del plan",
            description: "Cambios o actualizaciones en tu plan de entrenamiento",
          },
        ].map((notification, i) => (
          <div key={i} className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm font-medium">{notification.title}</p>
              <p className="text-xs text-muted-foreground">{notification.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch id={`email-${i}`} defaultChecked />
                <Label htmlFor={`email-${i}`} className="text-xs">
                  Email
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id={`push-${i}`} defaultChecked />
                <Label htmlFor={`push-${i}`} className="text-xs">
                  Push
                </Label>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button>Guardar preferencias</Button>
      </CardFooter>
    </Card>
  )
}
