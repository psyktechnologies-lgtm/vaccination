"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Bell, Home, LineChart, MapPin, Shield, Users } from "lucide-react"

export function DashboardShell({
  children,
  active = "parent",
}: {
  children: ReactNode
  active?: "parent" | "admin"
}) {
  return (
    <div className="min-h-dvh grid md:grid-cols-[260px_1fr]">
      <aside className="hidden md:flex flex-col gap-2 border-r bg-[var(--brand-tint)]/60">
        <div className="h-16 flex items-center gap-2 px-4 border-b">
          <div className="h-9 w-9 rounded-lg bg-white/80 grid place-items-center">
            <Shield className="h-5 w-5 text-[var(--brand-primary)]" />
          </div>
          <span className="font-serif font-semibold">VacciTrack</span>
        </div>
        <nav className="px-2 py-4 grid gap-1 text-sm">
          <SidebarLink href="/parent" active={active === "parent"} icon={<Home className="h-4 w-4" />}>
            Parent Dashboard
          </SidebarLink>
          <SidebarLink href="/admin" active={active === "admin"} icon={<LineChart className="h-4 w-4" />}>
            Admin Dashboard
          </SidebarLink>
          <SidebarLink href="/parent#map" active={false} icon={<MapPin className="h-4 w-4" />}>
            Centers Map
          </SidebarLink>
          <SidebarLink href="/admin#users" active={false} icon={<Users className="h-4 w-4" />}>
            Manage Users
          </SidebarLink>
        </nav>
      </aside>
      <div className="grid">
        <header className="h-16 border-b flex items-center justify-between px-4">
          <div className="text-sm text-muted-foreground">Welcome back</div>
          <button
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:bg-[var(--brand-tint)]",
            )}
          >
            <Bell className="h-4 w-4 text-[var(--brand-primary)]" />
            Notifications
          </button>
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

function SidebarLink({
  href,
  icon,
  children,
  active,
}: {
  href: string
  icon: ReactNode
  children: ReactNode
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 hover:bg-white",
        active && "bg-white text-[var(--brand-primary)] font-medium",
      )}
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}
