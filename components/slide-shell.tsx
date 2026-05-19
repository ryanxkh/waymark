"use client"

import { useCallback, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { slides } from "@/lib/slides"
import { PresentationNav } from "@/components/presentation-nav"

function navigate(router: ReturnType<typeof useRouter>, slideId: number) {
  const href = `/slide/${slideId}`
  if (typeof document !== "undefined" && "startViewTransition" in document) {
    // @ts-expect-error - startViewTransition not always present in TS DOM lib
    document.startViewTransition(() => router.push(href))
  } else {
    router.push(href)
  }
}

export function SlideShell({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const params = useParams<{ id?: string }>()
  const total = slides.length

  const parsed = Number(params?.id)
  const currentIndex =
    Number.isFinite(parsed) && parsed >= 1 && parsed <= total ? parsed - 1 : 0

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= total || index === currentIndex) return
      navigate(router, index + 1)
    },
    [currentIndex, router, total],
  )

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo])
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "Enter":
          e.preventDefault()
          goNext()
          break
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault()
          goPrev()
          break
        case "Home":
          e.preventDefault()
          goTo(0)
          break
        case "End":
          e.preventDefault()
          goTo(total - 1)
          break
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goNext, goPrev, goTo, total])

  // Touch swipe
  useEffect(() => {
    let startX = 0
    let startY = 0
    let endX = 0
    let endY = 0
    const onStart = (e: TouchEvent) => {
      startX = endX = e.touches[0].clientX
      startY = endY = e.touches[0].clientY
    }
    const onMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX
      endY = e.touches[0].clientY
    }
    const onEnd = () => {
      const dx = startX - endX
      const dy = Math.abs(startY - endY)
      if (dy > Math.abs(dx)) return
      if (dx > 50) goNext()
      else if (dx < -50) goPrev()
    }
    document.addEventListener("touchstart", onStart, { passive: true })
    document.addEventListener("touchmove", onMove, { passive: true })
    document.addEventListener("touchend", onEnd, { passive: true })
    return () => {
      document.removeEventListener("touchstart", onStart)
      document.removeEventListener("touchmove", onMove)
      document.removeEventListener("touchend", onEnd)
    }
  }, [goNext, goPrev])

  // Reset scroll on slide change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentIndex])

  return (
    <main
      tabIndex={0}
      className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-background text-foreground focus:outline-none lg:h-screen lg:overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="geist-grid pointer-events-none absolute inset-0" aria-hidden />

      {/* Faint corner glow — neutral, single layer */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.04), rgba(255,255,255,0) 70%)",
        }}
        aria-hidden
      />

      {/* Inset frame on large screens */}
      <div className="relative flex min-h-screen flex-col pb-24 sm:pb-24 lg:absolute lg:inset-0 lg:min-h-0 lg:p-6 xl:p-10 2xl:p-14">
        <div
          className="relative hidden border border-border lg:block lg:absolute lg:inset-6 xl:inset-10 2xl:inset-14"
          aria-hidden
        />

        {/* Slide content */}
        <div className="flex flex-1 flex-col">{children}</div>
      </div>

      <PresentationNav />

      {/* Keyboard hint — desktop only */}
      <div className="fixed bottom-6 right-6 z-40 hidden font-mono text-[10px] text-muted-foreground sm:block">
        <span className="inline-flex items-center gap-1.5">
          <kbd className="rounded border border-border bg-card px-1.5 py-0.5 text-[10px]">←</kbd>
          <kbd className="rounded border border-border bg-card px-1.5 py-0.5 text-[10px]">→</kbd>
          <span>to navigate</span>
        </span>
      </div>

      {/* Slide counter — desktop only */}
      <div className="fixed left-6 bottom-6 z-40 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
        {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </main>
  )
}
