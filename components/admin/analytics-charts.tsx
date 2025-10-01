"use client"

import {
  LineChart as RLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const coverage = [
  { month: "Jan", percent: 62 },
  { month: "Feb", percent: 65 },
  { month: "Mar", percent: 68 },
  { month: "Apr", percent: 72 },
  { month: "May", percent: 75 },
  { month: "Jun", percent: 78 },
]

const pendingByRegion = [
  { region: "North", pending: 820 },
  { region: "South", pending: 540 },
  { region: "East", pending: 980 },
  { region: "West", pending: 874 },
]

export function AnalyticsCharts() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="h-64 rounded-xl border p-3">
        <div className="text-sm font-medium mb-2">Coverage Over Time</div>
        <ResponsiveContainer width="100%" height="100%">
          <RLineChart data={coverage}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="percent" stroke="var(--chart-1)" strokeWidth={2} dot={false} />
          </RLineChart>
        </ResponsiveContainer>
      </div>

      <div className="h-64 rounded-xl border p-3">
        <div className="text-sm font-medium mb-2">Pending Doses by Region</div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pendingByRegion}>
            <XAxis dataKey="region" />
            <YAxis />
            <Bar dataKey="pending" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
