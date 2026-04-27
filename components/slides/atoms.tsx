// Shared slide primitives — Geist neutral dark.

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BaseProps {
  children: ReactNode
  className?: string
  isVisible?: boolean
  delay?: number
}

export function SlideShell({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("slide-shell", className)}>{children}</section>
}

export function SectionLabel({ children, isVisible = true, delay = 0, className }: BaseProps) {
  return (
    <span
      className={cn(
        "section-label inline-block transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
        className,
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </span>
  )
}

export function SlideTitle({ children, isVisible = true, delay = 80, className }: BaseProps) {
  return (
    <h2
      className={cn(
        "slide-title transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </h2>
  )
}

export function SlideSubtitle({ children, isVisible = true, delay = 160, className }: BaseProps) {
  return (
    <p
      className={cn(
        "slide-subtitle transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </p>
  )
}

export function FadeIn({
  children,
  isVisible = true,
  delay = 0,
  direction = "up",
  className,
}: BaseProps & { direction?: "up" | "left" | "right" | "none" }) {
  const hiddenClass =
    direction === "up"
      ? "translate-y-2"
      : direction === "left"
        ? "-translate-x-2"
        : direction === "right"
          ? "translate-x-2"
          : ""
  return (
    <div
      className={cn(
        "transition-all duration-500",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenClass}`,
        className,
      )}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}

// Number-step chip in monospaced muted style
export function StepChip({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">{children}</span>
  )
}

// Generic content card used throughout slides
export function ContentCard({
  children,
  className,
  variant = "default",
}: {
  children: ReactNode
  className?: string
  variant?: "default" | "muted" | "outline"
}) {
  const variantClass =
    variant === "muted"
      ? "bg-gray-100 border-border"
      : variant === "outline"
        ? "bg-transparent border-border"
        : "bg-card border-border"
  return (
    <div className={cn("rounded-lg border", variantClass, className)}>{children}</div>
  )
}

// Stat badge — small footnote-style card
export function StatBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-md border border-border bg-gray-100 px-3 py-2", className)}>
      <span className="text-[11px] text-muted-foreground leading-tight block text-pretty">{children}</span>
    </div>
  )
}
