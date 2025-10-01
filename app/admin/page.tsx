"use client"

import { DashboardShell } from "@/components/layouts/dashboard-shell"
import { StatsCards } from "@/components/admin/stats-cards"
import { AnalyticsCharts } from "@/components/admin/analytics-charts"
import { ManageTable } from "@/components/admin/manage-table"
import { Alerts } from "@/components/admin/alerts"
import { Button } from "@/components/ui/button"

export default function AdminDashboardPage() {
  return (
    <DashboardShell active="admin">
      <section className="grid gap-6">
        <StatsCards />
        <div className="flex items-center gap-3">
          <Button onClick={() => alert("Open Reports Dashboard")}>View Reports</Button>
          <Button variant="outline" onClick={() => alert("Export Analytics PDF")}>
            Download Analytics
          </Button>
          <Button variant="secondary" onClick={() => alert("Send Bulk Reminders")}>
            Send Bulk Reminders
          </Button>
        </div>
        <AnalyticsCharts />
        <ManageTable />
        <Alerts />
      </section>
    </DashboardShell>
  )
}
