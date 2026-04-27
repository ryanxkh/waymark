"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { slides } from "@/lib/slides"
import { PresentationNav } from "@/components/presentation-nav"
import { TitleSlide } from "@/components/slides/title-slide"
import { DiscoverySlide } from "@/components/slides/discovery-slide"
import { FDISlide } from "@/components/slides/fdi-slide"
import { EdgeDeliverySlide } from "@/components/slides/edge-delivery-slide"
import { AppComputeSlide } from "@/components/slides/app-compute-slide"
import { DevExSlide } from "@/components/slides/devex-slide"
import { AISlide } from "@/components/slides/ai-slide"
import { BusinessCaseSlide } from "@/components/slides/business-case-slide"
import { RevealSlide } from "@/components/slides/reveal-slide"
import { NextStepsSlide } from "@/components/slides/next-steps-slide"

const TRANSITION_MS = 320

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  // Initial mount fade-in
  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 60)
    return () => window.clearTimeout(timer)
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentSlide || index < 0 || index >= slides.length || isAnimating) return
      setIsAnimating(true)
      setIsVisible(false)
      window.setTimeout(() => {
        setCurrentSlide(index)
        window.setTimeout(() => {
          setIsVisible(true)
          setIsAnimating(false)
        }, 50)
      }, TRANSITION_MS)
    },
    [currentSlide, isAnimating],
  )

  const goToNext = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide])
  const goToPrev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "Enter":
          e.preventDefault()
          goToNext()
          break
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault()
          goToPrev()
          break
        case "Home":
          e.preventDefault()
          goToSlide(0)
          break
        case "End":
          e.preventDefault()
          goToSlide(slides.length - 1)
          break
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrev, goToSlide, isAnimating])

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
      if (dx > 50) goToNext()
      else if (dx < -50) goToPrev()
    }
    document.addEventListener("touchstart", onStart, { passive: true })
    document.addEventListener("touchmove", onMove, { passive: true })
    document.addEventListener("touchend", onEnd, { passive: true })
    return () => {
      document.removeEventListener("touchstart", onStart)
      document.removeEventListener("touchmove", onMove)
      document.removeEventListener("touchend", onEnd)
    }
  }, [goToNext, goToPrev])

  // Reset scroll on slide change
  useEffect(() => {
    window.scrollTo(0, 0)
    mainRef.current?.scrollTo(0, 0)
  }, [currentSlide])

  const slide = slides[currentSlide]
  if (!slide) return null

  return (
    <main
      ref={mainRef}
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
        <div className="relative hidden border border-border lg:block lg:absolute lg:inset-6 xl:inset-10 2xl:inset-14" aria-hidden />

        {/* Slide content */}
        <div className="flex flex-1 flex-col">
          {slide.type === "title" && <TitleSlide slide={slide} isVisible={isVisible} />}
          {slide.type === "discovery" && <DiscoverySlide slide={slide} isVisible={isVisible} />}
          {slide.type === "fdi" && <FDISlide slide={slide} isVisible={isVisible} />}
          {slide.type === "edge-delivery" && <EdgeDeliverySlide slide={slide} isVisible={isVisible} />}
          {slide.type === "app-compute" && <AppComputeSlide slide={slide} isVisible={isVisible} />}
          {slide.type === "devex" && <DevExSlide slide={slide} isVisible={isVisible} />}
          {slide.type === "ai" && <AISlide slide={slide} isVisible={isVisible} />}
          {slide.type === "business-case" && <BusinessCaseSlide slide={slide} isVisible={isVisible} />}
          {slide.type === "reveal" && <RevealSlide slide={slide} isVisible={isVisible} />}
          {slide.type === "next-steps" && <NextStepsSlide slide={slide} isVisible={isVisible} />}
        </div>
      </div>

      <PresentationNav
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={goToPrev}
        onNext={goToNext}
        onJump={goToSlide}
      />

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
        {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </main>
  )
}
