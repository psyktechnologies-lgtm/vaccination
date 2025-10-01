"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Row = {
  id: string
  parent: string
  child: string
  lastDose?: string
}

const rows: Row[] = [
  { id: "P-1001", parent: "Anita Sharma", child: "Aarav", lastDose: "2025-03-12" },
  { id: "P-1002", parent: "Rahul Mehta", child: "Isha", lastDose: "2025-02-05" },
  { id: "P-1003", parent: "Neha Verma", child: "Kabir", lastDose: "—" },
]

export function ManageTable() {
  const [q, setQ] = useState("")
  const filtered = useMemo(
    () =>
      rows.filter(
        (r) =>
          r.parent.toLowerCase().includes(q.toLowerCase()) ||
          r.child.toLowerCase().includes(q.toLowerCase()) ||
          r.id.toLowerCase().includes(q.toLowerCase()),
      ),
    [q],
  )

  return (
    <Card id="users">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="font-serif">Manage Parents/Children</CardTitle>
        <div className="flex items-center gap-2">
          <Input placeholder="Search..." value={q} onChange={(e) => setQ(e.target.value)} className="w-48" />
          <Button variant="outline" onClick={() => alert("Export CSV...")}>
            Export CSV
          </Button>
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-muted-foreground">
            <tr>
              <th className="py-2 pe-4">Parent ID</th>
              <th className="py-2 pe-4">Parent</th>
              <th className="py-2 pe-4">Child</th>
              <th className="py-2 pe-4">Last Dose</th>
              <th className="py-2 pe-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="py-2 pe-4">{r.id}</td>
                <td className="py-2 pe-4">{r.parent}</td>
                <td className="py-2 pe-4">{r.child}</td>
                <td className="py-2 pe-4">{r.lastDose}</td>
                <td className="py-2 pe-4">
                  <Button variant="ghost" size="sm" onClick={() => alert("Edit vaccination record")}>
                    Edit Record
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
