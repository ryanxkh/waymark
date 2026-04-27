import type { DevExSlide as DevExSlideType } from "@/lib/slides"
import { Eye, RotateCcw, GitBranch, MessageSquare, Activity, Globe } from "lucide-react"
import { FadeIn, SectionLabel, SlideShell, SlideSubtitle, SlideTitle, StatBadge } from "./atoms"

const itemIcon: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  eye: Eye,
  rotate: RotateCcw,
  gitbranch: GitBranch,
  message: MessageSquare,
  activity: Activity,
}

const timelineSteps = [
  { label: "Push" },
  { label: "Preview", caption: "30–90s" },
  { label: "Review", caption: "Toolbar" },
  { label: "Merge" },
  { label: "Production", emphasis: true },
]

export function DevExSlide({ slide, isVisible }: { slide: DevExSlideType; isVisible: boolean }) {
  return (
    <SlideShell>
      <SectionLabel isVisible={isVisible}>{slide.sectionLabel}</SectionLabel>

      <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:gap-10">
        {/* Left */}
        <div className="flex flex-1 flex-col lg:w-[55%]">
          <SlideTitle isVisible={isVisible} delay={60} className="mb-3">
            {slide.title}
          </SlideTitle>
          <SlideSubtitle isVisible={isVisible} delay={140} className="mb-5">
            {slide.subtitle}
          </SlideSubtitle>

          <ul className="flex flex-col gap-2">
            {slide.listItems.map((item, index) => {
              const Icon = itemIcon[item.icon] ?? Globe
              return (
                <FadeIn
                  key={index}
                  isVisible={isVisible}
                  delay={220 + index * 50}
                  direction="left"
                >
                  <li className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-border bg-gray-300">
                      <Icon size={14} className="text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-0.5 flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {item.step}
                        </span>
                        <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                </FadeIn>
              )
            })}
          </ul>

          <FadeIn isVisible={isVisible} delay={500} className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <StatBadge>{slide.stats.left}</StatBadge>
            <StatBadge>{slide.stats.right}</StatBadge>
          </FadeIn>
        </div>

        {/* Right: timeline */}
        <FadeIn
          isVisible={isVisible}
          delay={400}
          className="hidden lg:flex lg:w-[45%] flex-col items-center justify-start pt-12"
        >
          <div className="w-full">
            <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Deploy Lifecycle
            </span>
            <div className="flex items-center justify-between gap-1">
              {timelineSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div
                    className={`flex flex-col items-center rounded-md border px-3 py-2 ${
                      step.emphasis
                        ? "border-foreground/40 bg-card"
                        : "border-border bg-card"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-medium ${
                        step.emphasis ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.label}
                    </span>
                    {step.caption ? (
                      <span className="font-mono text-[9px] text-muted-foreground">
                        {step.caption}
                      </span>
                    ) : null}
                  </div>
                  {i < timelineSteps.length - 1 ? (
                    <div className="h-px w-3 bg-border" />
                  ) : null}
                </div>
              ))}
            </div>

            {/* Rollback */}
            <div className="mt-6 flex flex-col items-center">
              <svg className="h-6 w-2" viewBox="0 0 8 24" aria-hidden>
                <line
                  x1="4"
                  y1="0"
                  x2="4"
                  y2="24"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                  className="text-border"
                />
              </svg>
              <div className="rounded-md border border-dashed border-border bg-card px-3 py-2">
                <span className="text-[11px] text-foreground">Rollback</span>
                <span className="ml-2 font-mono text-[9px] text-muted-foreground">seconds</span>
              </div>
            </div>

            <p className="mt-4 text-center text-[11px] text-muted-foreground">
              Push to Production in minutes. Rollback in seconds.
            </p>
          </div>
        </FadeIn>

        {/* Mobile workflow chip strip */}
        <FadeIn isVisible={isVisible} delay={400} className="lg:hidden">
          <div className="rounded-lg border border-border bg-card p-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {timelineSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className={`rounded border px-2 py-1 text-[10px] ${
                      step.emphasis
                        ? "border-foreground/30 text-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                  {i < timelineSteps.length - 1 ? (
                    <span className="text-muted-foreground/60">→</span>
                  ) : null}
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              Push to Production in minutes. Rollback in seconds.
            </p>
          </div>
        </FadeIn>
      </div>
    </SlideShell>
  )
}
