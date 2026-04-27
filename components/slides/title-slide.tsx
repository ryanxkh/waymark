import type { TitleSlide as TitleSlideType } from "@/lib/slides"
import { FadeIn } from "./atoms"

export function TitleSlide({ slide, isVisible }: { slide: TitleSlideType; isVisible: boolean }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      {/* Vercel-style RGB radial glow — pure visual personality, no content */}
      <div
        className="vercel-glow glow-breathe pointer-events-none absolute inset-0"
        aria-hidden
      />
      {/* Soft vignette to anchor the content */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent, rgba(0,0,0,0.55) 75%, #000 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-5 px-6 py-12 text-center">
        <FadeIn isVisible={isVisible} delay={0}>
          <div className="relative">
            {/* Subtle inner glow halo behind logomark */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(237,237,237,0.25), transparent 70%)",
              }}
              aria-hidden
            />
            <svg
              viewBox="0 0 76 65"
              className="h-14 w-14 fill-foreground sm:h-16 sm:w-16"
              aria-label="Vercel logomark"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
          </div>
        </FadeIn>

        <FadeIn isVisible={isVisible} delay={120}>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title}
          </h1>
        </FadeIn>

        <FadeIn isVisible={isVisible} delay={220}>
          <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg">{slide.subtitle}</p>
        </FadeIn>

        <FadeIn isVisible={isVisible} delay={320} direction="none">
          <div className="my-2 h-px w-12 bg-border" aria-hidden />
        </FadeIn>

        <FadeIn isVisible={isVisible} delay={400}>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {slide.author}
          </span>
        </FadeIn>
      </div>
    </div>
  )
}
