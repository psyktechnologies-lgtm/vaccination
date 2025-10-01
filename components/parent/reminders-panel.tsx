"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { useState } from "react"

const initial = [
  { id: 1, text: "DTP-1 due in 7 days" },
  { id: 2, text: "Complete child profile photo" },
]

export function RemindersPanel() {
  const [items, setItems] = useState(initial)

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="font-serif">Reminders</CardTitle>
        <Bell className="h-4 w-4 text-[var(--brand-primary)]" />
      </CardHeader>
      <CardContent className="grid gap-2">
        {items.map((it) => (
          <div key={it.id} className="flex items-center justify-between rounded-md border p-2">
            <span className="text-sm">{it.text}</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setItems((s) => s.filter((x) => x.id !== it.id))}>
                Mark Done
              </Button>
              <Button variant="ghost" size="sm" onClick={() => alert("Snoozed for 24 hours")}>
                Snooze
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
