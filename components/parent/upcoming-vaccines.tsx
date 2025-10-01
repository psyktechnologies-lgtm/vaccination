import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Syringe } from "lucide-react"

const timeline = [
  { name: "DTP-1", due: "2025-10-15" },
  { name: "Rotavirus-1", due: "2025-11-05" },
  { name: "Hib-1", due: "2025-11-05" },
]

export function UpcomingVaccines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Upcoming Vaccines</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ol className="relative border-s ps-6">
          {timeline.map((t, idx) => (
            <li key={t.name} className="mb-6">
              <span className="absolute -start-2 mt-1 h-4 w-4 rounded-full bg-[var(--brand-primary)]"></span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Syringe className="h-4 w-4 text-[var(--brand-primary)]" />
                  <span className="font-medium">{t.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{t.due}</span>
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
