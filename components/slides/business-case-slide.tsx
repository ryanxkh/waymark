import type { BusinessCaseSlide as BusinessCaseSlideType } from "@/lib/slides"
import { BarChart3, Activity, Terminal, Sparkles, ArrowRight } from "lucide-react"
import { FadeIn, SectionLabel, SlideShell, SlideSubtitle, SlideTitle } from "./atoms"

const rowIcon: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  analytics: BarChart3,
  fluid: Activity,
  terminal: Terminal,
  sparkles: Sparkles,
}

export function BusinessCaseSlide({
  slide,
  isVisible,
}: {
  slide: BusinessCaseSlideType
  isVisible: boolean
}) {
  return (
    <SlideShell>
      <SectionLabel isVisible={isVisible}>{slide.sectionLabel}</SectionLabel>
      <SlideTitle isVisible={isVisible} delay={60} className="mt-3 mb-3">
        {slide.title}
      </SlideTitle>
      <SlideSubtitle isVisible={isVisible} delay={140} className="mb-5">
        {slide.subtitle}
      </SlideSubtitle>

      <div className="flex flex-1 flex-col gap-3">
        {slide.rows.map((row, index) => {
          const Icon = rowIcon[row.icon] ?? BarChart3
          return (
            <FadeIn key={index} isVisible={isVisible} delay={220 + index * 70}>
              <div className="rounded-lg border border-border bg-card p-4 lg:p-5">
                {/* Mobile: stacked */}
                <div className="flex flex-col gap-3 lg:hidden">
                  <div className="flex items-center gap-2.5">
                    <Icon size={16} className="text-foreground" />
                    <h3 className="text-sm font-medium text-foreground">{row.metric}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Current
                      </span>
                      <p className="text-xs leading-relaxed text-muted-foreground">{row.current}</p>
                    </div>
                    <div>
                      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
                        Goal
                      </span>
                      <p className="text-xs leading-relaxed text-foreground">{row.goal}</p>
                      {row.proofPoint ? (
                        <p className="mt-1 text-xs italic text-muted-foreground">{row.proofPoint}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Desktop: row */}
                <div className="hidden lg:flex lg:items-start lg:gap-5">
                  <div className="flex w-[18%] flex-shrink-0 items-start gap-2.5">
                    <Icon size={16} className="mt-0.5 text-foreground" />
                    <span className="text-sm font-medium text-foreground">{row.metric}</span>
                  </div>

                  <div className="w-[40%] flex-shrink-0">
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Current State
                    </span>
                    <p className="text-xs leading-relaxed text-muted-foreground">{row.current}</p>
                  </div>

                  <div className="flex flex-shrink-0 items-center pt-3 text-muted-foreground">
                    <ArrowRight size={16} aria-hidden />
                  </div>

                  <div className="flex-1">
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
                      Goal State
                    </span>
                    <p className="text-xs leading-relaxed text-foreground">{row.goal}</p>
                    {row.proofPoint ? (
                      <p className="mt-1 text-xs italic text-muted-foreground">{row.proofPoint}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </SlideShell>
  )
}
