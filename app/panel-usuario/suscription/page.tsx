import { CurrentPlan } from "./components/current-plan"
import { AvailablePlans } from "./components/available-plans"
import { PaymentSecurity } from "./components/payment-security"

export default function SuscripcionPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Administrar suscripción</h1>
        <p className="text-sm text-muted-foreground mt-2">Gestiona tu plan y método de pago.</p>
      </div>

      <CurrentPlan />
      <AvailablePlans />
      <PaymentSecurity />
    </div>
  )
}
