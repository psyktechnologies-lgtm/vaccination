"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const barData = [
  { name: "Jan", doses: 2 },
  { name: "Feb", doses: 1 },
  { name: "Mar", doses: 3 },
  { name: "Apr", doses: 0 },
]

const pieData = [
  { name: "Completed", value: 7 },
  { name: "Pending", value: 3 },
]

export function CertificatesReports() {
  const colors = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"]

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="font-serif">Certificates & Reports</CardTitle>
        <Button onClick={() => alert("Downloading PDF...")}>Download PDF</Button>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="doses" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={40} outerRadius={60} paddingAngle={4}>
                {pieData.map((_, idx) => (
                  <Cell key={idx} fill={colors[idx % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
