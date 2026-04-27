import type { NextStepsSlide as NextStepsSlideType } from "@/lib/slides"
import { Target, Users } from "lucide-react"
import { FadeIn, SectionLabel, SlideShell, SlideSubtitle, SlideTitle } from "./atoms"

const timelineCards = [
  {
    step: "01",
    week: "Week 1",
    title: "Build",
    description: "Frontend rebuild and instrumentation. AI workshop with the engineering team.",
  },
  {
    step: "02",
    week: "Week 2",
    title: "Measure",
    description:
      "Route traffic via Edge Middleware. Collect real-user performance data through Speed Insights.",
  },
  {
    step: "03",
    week: "Week 3",
    title: "Prove",
    description: "Analysis and readout. Compare performance, measure conversion delta, present findings.",
  },
]

const successCriteria = [
  "LCP under 2.5s (from 4.1s) with real-user data",
  "Lighthouse Performance above 80 (from 38)",
  "AI agent resolves 3/5 sample support scenarios",
  "More iterations shipped vs 3-week monolith sprint",
]

const waymarkCommits = [
  "1-2 frontend engineers for the rebuild",
  "API access to booking system",
  "Approval to route test traffic",
  "1 engineering lead for AI workshop",
]

const vercelProvides = [
  "Enterprise evaluation access",
  "Dedicated SE support throughout",
  "AI SDK implementation guidance",
  "Compute credits for POV period",
]

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
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              Rebuild the frontend rendering of one high-traffic booking page in Next.js on Vercel, connected to existing booking APIs.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              Half-day AI workshop where we build the support agent with your engineering team against a staging environment.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn isVisible={isVisible} delay={290}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {timelineCards.map((card, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-4">
                <div className="mb-1 flex items-center gap-2">
                  <span className="font-mono text-base font-medium text-foreground">{card.step}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {card.week}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-foreground">{card.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            ))}
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
              {successCriteria.map((criterion, i) => (
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
              items={waymarkCommits}
            />
            <CommitmentCard
              label="Vercel Provides"
              icon={
                <svg viewBox="0 0 76 65" className="h-2.5 w-2.5 fill-current" aria-hidden>
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
              }
              items={vercelProvides}
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
  items,
  accent = false,
}: {
  label: string
  icon: React.ReactNode
  items: string[]
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-lg border bg-card p-4 ${
        accent ? "border-foreground/30" : "border-border"
      }`}
    >
      <span className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] ${
        accent ? "text-foreground" : "text-muted-foreground"
      }`}>
        {icon}
        {label}
      </span>
      <ul className="mt-2.5 flex flex-col gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span
              className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${
                accent ? "bg-foreground/60" : "bg-gray-700"
              }`}
              aria-hidden
            />
            <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
