import { DashboardShell } from "@/components/layouts/dashboard-shell"
import { ChildProfileCard } from "@/components/parent/child-profile-card"
import { VaccinationCard } from "@/components/parent/vaccination-card"
import { UpcomingVaccines } from "@/components/parent/upcoming-vaccines"
import { RemindersPanel } from "@/components/parent/reminders-panel"
import { CatchUpPlan } from "@/components/parent/catch-up-plan"
import { CertificatesReports } from "@/components/parent/certificates-reports"
import { MapWidget } from "@/components/parent/map-widget"
import { ChatbotFAB } from "@/components/parent/chatbot-fab"

export default function ParentDashboardPage() {
  return (
    <DashboardShell active="parent">
      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 grid gap-4">
          <ChildProfileCard />
          <VaccinationCard />
        </div>
        <div className="grid gap-4">
          <UpcomingVaccines />
          <RemindersPanel />
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <CertificatesReports />
        </div>
        <CatchUpPlan />
      </section>

      <section className="mt-6">
        <MapWidget />
      </section>

      <ChatbotFAB />
    </DashboardShell>
  )
}
