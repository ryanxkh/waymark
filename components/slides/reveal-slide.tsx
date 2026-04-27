import type { RevealSlide as RevealSlideType } from "@/lib/slides"
import { ArrowRight, ExternalLink, Zap, Clock, Bot } from "lucide-react"
import { FadeIn, SectionLabel, SlideShell, SlideTitle } from "./atoms"

export function RevealSlide({ slide, isVisible }: { slide: RevealSlideType; isVisible: boolean }) {
  return (
    <SlideShell>
      <div className="flex items-center justify-between">
        <SectionLabel isVisible={isVisible}>{slide.sectionLabel}</SectionLabel>
        <svg viewBox="0 0 76 65" className="h-4 w-4 fill-foreground" aria-hidden>
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
        </svg>
      </div>

      <SlideTitle isVisible={isVisible} delay={60} className="mt-3 mb-3">
        {slide.title}
      </SlideTitle>

      <FadeIn isVisible={isVisible} delay={140}>
        <p className="mb-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {slide.subtitle}{" "}
          <a
            href={slide.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {slide.demoLinkText}
            <ExternalLink size={12} aria-hidden />
          </a>
        </p>
      </FadeIn>

      {/* Lighthouse comparison */}
      <FadeIn
        isVisible={isVisible}
        delay={240}
        className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[1fr_auto_1fr] sm:gap-4 lg:gap-8"
      >
        {/* Current site */}
        <ComparisonFrame
          label="Current Site"
          urlBar="Lighthouse Report"
          imageSrc={slide.lighthouseOldImage}
          imageAlt="Current site Lighthouse scores"
          scores={[
            { label: "Perf", value: 38, status: "bad" },
            { label: "A11y", value: 91, status: "good" },
            { label: "BP", value: 54, status: "warn" },
            { label: "SEO", value: 92, status: "good" },
          ]}
          caption="FCP 3.5s · LCP 4.1s · TBT 2,020ms"
        />

        <div className="flex justify-center text-muted-foreground" aria-hidden>
          <ArrowRight size={20} className="hidden sm:block" />
          <ArrowRight size={20} className="rotate-90 sm:hidden" />
        </div>

        {/* On Vercel */}
        <ComparisonFrame
          label="On Vercel"
          urlBar={slide.demoLinkText}
          urlBarLink={slide.demoUrl}
          imageSrc={slide.lighthouseNewImage}
          imageAlt="Vercel site Lighthouse scores"
          scores={[
            { label: "Perf", value: 85, status: "good" },
            { label: "A11y", value: 91, status: "good" },
            { label: "BP", value: 100, status: "good" },
            { label: "SEO", value: 100, status: "good" },
          ]}
          caption="Built with v0 · Deployed to Vercel's edge"
        />
      </FadeIn>

      {/* Callouts */}
      <FadeIn
        isVisible={isVisible}
        delay={400}
        className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-8"
      >
        <span className="inline-flex items-center gap-2">
          <Zap size={14} className="text-foreground" aria-hidden />
          2.2x faster performance
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock size={14} className="text-foreground" aria-hidden />
          Built in hours, not weeks
        </span>
        <span className="inline-flex items-center gap-2">
          <Bot size={14} className="text-foreground" aria-hidden />
          AI agent included
        </span>
      </FadeIn>
    </SlideShell>
  )
}

interface Score {
  label: string
  value: number
  status: "good" | "warn" | "bad"
}

const scoreDot: Record<Score["status"], string> = {
  good: "bg-emerald-500",
  warn: "bg-amber-500",
  bad: "bg-red-500",
}

function ComparisonFrame({
  label,
  urlBar,
  urlBarLink,
  imageSrc,
  imageAlt,
  scores,
  caption,
}: {
  label: string
  urlBar: string
  urlBarLink?: string
  imageSrc: string
  imageAlt: string
  scores: Score[]
  caption: string
}) {
  const FrameWrapper = urlBarLink ? "a" : "div"
  const wrapperProps = urlBarLink
    ? { href: urlBarLink, target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <div className="flex flex-col">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      <FrameWrapper
        {...wrapperProps}
        className="overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-gray-500"
      >
        <div className="flex items-center gap-2 border-b border-border bg-gray-200 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-gray-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-500" />
          </div>
          <div className="flex-1 truncate rounded border border-border bg-background px-2.5 py-0.5 text-center text-xs text-muted-foreground">
            {urlBar}
          </div>
          {urlBarLink ? <ExternalLink size={12} className="text-muted-foreground" /> : null}
        </div>
        <div className="h-[200px] overflow-hidden lg:h-[280px]">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </FrameWrapper>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
        {scores.map((s) => (
          <span key={s.label} className="inline-flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${scoreDot[s.status]}`} aria-hidden />
            {s.label}: {s.value}
          </span>
        ))}
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{caption}</p>
    </div>
  )
}
