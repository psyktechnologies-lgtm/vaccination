"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

export function ChatbotFAB() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        aria-label="Open vaccine FAQ chatbot"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-[var(--brand-primary)] text-white grid place-items-center shadow-lg"
        onClick={() => setOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      {open && (
        <div className="fixed bottom-20 right-4 w-[320px] rounded-xl border bg-background shadow-xl">
          <div className="px-3 py-2 border-b font-medium">Vaccine FAQs</div>
          <div className="p-3 text-sm text-muted-foreground h-48 overflow-auto">
            Ask anything about vaccine schedules, safety, or side effects. This is a prototype placeholder.
          </div>
          <div className="p-2 border-t flex justify-end">
            <button
              className="text-sm text-[var(--brand-primary)] px-3 py-1.5 hover:bg-[var(--brand-tint)] rounded-md"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
