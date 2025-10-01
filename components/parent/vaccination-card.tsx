import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Dose = {
  name: string
  date?: string
  status: "completed" | "upcoming" | "missed"
}

const doses: Dose[] = [
  { name: "BCG", date: "2023-03-12", status: "completed" },
  { name: "OPV-0", date: "2023-03-12", status: "completed" },
  { name: "HepB-1", date: "2023-04-12", status: "completed" },
  { name: "DTP-1", status: "upcoming" },
  { name: "Rotavirus-1", status: "upcoming" },
]

export function VaccinationCard() {
  const statusColor = (s: Dose["status"]) =>
    s === "completed"
      ? "bg-green-100 text-green-700"
      : s === "missed"
        ? "bg-red-100 text-red-700"
        : "bg-yellow-100 text-yellow-700"

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="font-serif">Digital Vaccination Card</CardTitle>
        <div className="text-xs text-muted-foreground">QR for quick scan</div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-[1fr_120px] gap-4">
        <div className="grid gap-2">
          {doses.map((d) => (
            <div key={d.name} className="flex items-center justify-between rounded-md border p-2">
              <div className="text-sm">
                <div className="font-medium">{d.name}</div>
                <div className="text-xs text-muted-foreground">{d.date ? `Date: ${d.date}` : "No date"}</div>
              </div>
              <Badge className={statusColor(d.status)} variant="secondary">
                {d.status === "completed" ? "✅ Completed" : d.status === "missed" ? "❌ Missed" : "⏳ Upcoming"}
              </Badge>
            </div>
          ))}
        </div>
        <div className="rounded-lg border grid place-items-center text-xs text-muted-foreground p-2">
          {/* Placeholder QR tile */}
          <div className="aspect-square w-24 bg-[var(--brand-tint)] grid place-items-center rounded">QR</div>
          <span className="mt-2">Scan at hospital</span>
        </div>
      </CardContent>
    </Card>
  )
}
