import { Card, CardContent } from "@/components/ui/card"

export function Alerts() {
  const alerts = [
    "Coverage dropping in East region (−3% month-over-month).",
    "Increase pending doses in North region (820).",
  ]
  return (
    <div className="grid gap-3">
      {alerts.map((a, i) => (
        <Card key={i} className="border-red-300 bg-red-50">
          <CardContent className="text-sm text-red-800 p-3">{a}</CardContent>
        </Card>
      ))}
    </div>
  )
}
