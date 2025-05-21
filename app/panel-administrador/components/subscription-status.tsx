import { Progress } from "@/components/ui/progress"

const subscriptions = [
  {
    name: "Plan Básico",
    count: 45,
    percentage: 35,
  },
  {
    name: "Plan Intermedio",
    count: 62,
    percentage: 48,
  },
  {
    name: "Plan Premium",
    count: 21,
    percentage: 17,
  },
]

export function SubscriptionStatus() {
  return (
    <div className="space-y-6">
      {subscriptions.map((subscription) => (
        <div key={subscription.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{subscription.name}</div>
            <div className="text-sm text-gray-500">{subscription.count} usuarios</div>
          </div>
          <Progress value={subscription.percentage} className="h-2" />
        </div>
      ))}
      <div className="pt-4 text-center text-sm text-gray-500">Total: 128 suscripciones activas</div>
    </div>
  )
}
