import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CatchUpPlan() {
  return (
    <Card className="border-red-300">
      <CardHeader>
        <CardTitle className="font-serif text-red-700">Missed Dose Help</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-red-700 grid gap-2">
        <p>Rotavirus-1 missed. Recommended next step:</p>
        <ul className="list-disc ps-5">
          <li>Schedule appointment within 2 weeks</li>
          <li>Consult pediatrician if child had recent illness</li>
          <li>Review vaccine safety guidelines</li>
        </ul>
      </CardContent>
    </Card>
  )
}
