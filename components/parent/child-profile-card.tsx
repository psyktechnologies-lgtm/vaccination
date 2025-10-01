import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export function ChildProfileCard() {
  const completed = 7
  const total = 10
  const pct = Math.round((completed / total) * 100)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Image
            alt="Child avatar"
            src={"/placeholder.svg?height=48&width=48&query=child%20avatar"}
            width={48}
            height={48}
            className="rounded-full border"
          />
          <span className="font-serif text-base">Aarav Kumar • 2y 3m</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="text-sm text-muted-foreground">
          Vaccines completed: {completed} / {total}
        </div>
        <Progress value={pct} />
      </CardContent>
    </Card>
  )
}
