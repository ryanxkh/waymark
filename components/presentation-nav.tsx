"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PresentationNavProps {
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
  onJump: (index: number) => void
}

export function PresentationNav({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onJump,
}: PresentationNavProps) {
  const isFirst = currentSlide === 0
  const isLast = currentSlide === totalSlides - 1

  return (
    <nav
      aria-label="Presentation navigation"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card/90 px-2.5 py-1.5 backdrop-blur-md sm:bottom-6 sm:gap-3 sm:px-3 sm:py-2"
    >
      <button
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Previous slide"
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full transition-colors sm:h-8 sm:w-8",
          isFirst
            ? "cursor-not-allowed text-gray-600"
            : "text-muted-foreground hover:bg-gray-200 hover:text-foreground",
        )}
      >
        <ChevronLeft size={16} />
      </button>

      <div className="flex items-center gap-1 sm:gap-1.5">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const active = index === currentSlide
          return (
            <button
              key={index}
              onClick={() => onJump(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={active ? "true" : undefined}
              className="-m-1 p-1"
            >
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  active
                    ? "h-1.5 w-5 bg-foreground sm:h-1.5 sm:w-6"
                    : "h-1.5 w-1.5 bg-gray-600 hover:bg-gray-800",
                )}
              />
            </button>
          )
        })}
      </div>

      <button
        onClick={onNext}
        disabled={isLast}
        aria-label="Next slide"
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full transition-colors sm:h-8 sm:w-8",
          isLast
            ? "cursor-not-allowed text-gray-600"
            : "text-muted-foreground hover:bg-gray-200 hover:text-foreground",
        )}
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  )
}
