import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SplashPage() {
  return (
    <main
      className="min-h-dvh flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(180deg, var(--brand-tint) 0%, var(--brand-white) 60%)",
      }}
    >
      <section className="max-w-4xl mx-auto text-center grid gap-8">
        <div className="mx-auto h-14 w-14 rounded-xl bg-[var(--brand-tint)] flex items-center justify-center shadow-sm">
          {/* Simple shield/health cross icon using CSS */}
          <div aria-hidden className="relative h-7 w-7" style={{ color: "var(--brand-primary)" }}>
            <div
              className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-2 rounded-sm"
              style={{ backgroundColor: "currentColor" }}
            />
            <div
              className="absolute inset-y-2 left-1/2 -translate-x-1/2 w-2 rounded-sm"
              style={{ backgroundColor: "currentColor" }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-pretty text-3xl md:text-4xl font-semibold text-[var(--brand-ink)]">
            VacciTrack
          </h1>
          <p className="text-balance text-muted-foreground">Stay on track, protect your child’s health.</p>
          <p className="text-sm text-muted-foreground">
            A smart way to manage your child’s vaccinations online with reminders, certificates, and reports.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button asChild className="rounded-full px-6">
            <Link href="/parent">Login</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-tint)] bg-transparent"
          >
            <Link href="/parent">Sign Up</Link>
          </Button>
        </div>

        <div className="mx-auto w-full max-w-2xl">
          <Image
            alt="Parent and child illustration"
            src={"/placeholder.svg?height=320&width=640&query=parent%20and%20child%20with%20healthcare%20icons"}
            width={640}
            height={320}
            className="rounded-xl border"
          />
        </div>
      </section>
    </main>
  )
}
