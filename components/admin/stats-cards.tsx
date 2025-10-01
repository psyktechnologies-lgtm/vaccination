import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatsCards() {
  const stats = [
    { label: "Children Registered", value: "12,430" },
    { label: "% Vaccinated", value: "78%" },
    { label: "Pending Doses", value: "3,214" },
  ]
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((s) => (
        <Card key={s.label}>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">{s.label}</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">{s.value}</CardContent>
        </Card>
      ))}
    </div>
  )
}
