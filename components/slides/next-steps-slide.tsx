import type { NextStepsSlide as NextStepsSlideType } from "@/lib/slides"
import { Target, Users } from "lucide-react"
import { FadeIn, SectionLabel, SlideShell, SlideSubtitle, SlideTitle } from "./atoms"

export function NextStepsSlide({
  slide,
  isVisible,
}: {
  slide: NextStepsSlideType
  isVisible: boolean
}) {
  return (
    <SlideShell>
      <SectionLabel isVisible={isVisible}>{slide.sectionLabel}</SectionLabel>
      <SlideTitle isVisible={isVisible} delay={60} className="mt-3 mb-3">
        {slide.title}
      </SlideTitle>
      {slide.subtitle ? (
        <SlideSubtitle isVisible={isVisible} delay={140} className="mb-5">
          {slide.subtitle}
        </SlideSubtitle>
      ) : null}

      <div className="flex flex-1 flex-col gap-3">
        {/* Scope */}
        <FadeIn isVisible={isVisible} delay={220}>
          <div className="rounded-lg border border-border bg-card p-4 lg:p-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Scope
            </span>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{slide.povScope}</p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn isVisible={isVisible} delay={290}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {slide.povTimeline.map((entry, i) => {
              const [weekLabel, ...rest] = entry.split(":")
              const description = rest.join(":").trim()
              return (
                <div key={i} className="rounded-lg border border-border bg-card p-4">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="font-mono text-base font-medium text-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {weekLabel}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{description}</p>
                </div>
              )
            })}
          </div>
        </FadeIn>

        {/* Success criteria */}
        <FadeIn isVisible={isVisible} delay={360}>
          <div className="rounded-lg border border-border bg-card p-4">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <Target size={12} aria-hidden />
              Success Criteria
            </span>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {slide.povCriteria.map((criterion, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-700" aria-hidden />
                  <p className="text-sm leading-relaxed text-muted-foreground">{criterion}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Commitments */}
        <FadeIn isVisible={isVisible} delay={430}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <CommitmentCard
              label="Waymark Commits"
              icon={<Users size={12} aria-hidden />}
              text={slide.waymarkCommits}
            />
            <CommitmentCard
              label="Vercel Provides"
              icon={
                <svg viewBox="0 0 76 65" className="h-2.5 w-2.5 fill-current" aria-hidden>
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
              }
              text={slide.vercelProvides}
              accent
            />
          </div>
        </FadeIn>

        {slide.footer ? (
          <FadeIn isVisible={isVisible} delay={500}>
            <p className="mt-auto text-center text-sm italic text-muted-foreground">{slide.footer}</p>
          </FadeIn>
        ) : null}
      </div>
    </SlideShell>
  )
}

function CommitmentCard({
  label,
  icon,
  text,
  accent = false,
}: {
  label: string
  icon: React.ReactNode
  text: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-lg border bg-card p-4 ${
        accent ? "border-foreground/30" : "border-border"
      }`}
    >
      <span
        className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] ${
          accent ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {icon}
        {label}
      </span>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  )
}
