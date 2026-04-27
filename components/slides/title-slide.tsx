import type { TitleSlide as TitleSlideType } from "@/lib/slides"
import { FadeIn } from "./atoms"

export function TitleSlide({ slide, isVisible }: { slide: TitleSlideType; isVisible: boolean }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-6 py-12 text-center">
      <FadeIn isVisible={isVisible} delay={0}>
        <svg
          viewBox="0 0 76 65"
          className="h-12 w-12 fill-foreground sm:h-14 sm:w-14"
          aria-label="Vercel logomark"
        >
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
        </svg>
      </FadeIn>

      <FadeIn isVisible={isVisible} delay={120}>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
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
  )
}
