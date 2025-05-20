import { Shield } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PaymentSecurity() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Shield className="h-6 w-6" />
        <div>
          <CardTitle>Seguridad de pago</CardTitle>
          <CardDescription>Tus datos de pago están seguros y encriptados</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}
