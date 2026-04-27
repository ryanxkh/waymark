import type { AppComputeSlide as AppComputeSlideType } from "@/lib/slides"
import { Code2, Zap, Clock, ArrowDown } from "lucide-react"
import { FadeIn, SectionLabel, SlideShell, SlideSubtitle, SlideTitle, StatBadge } from "./atoms"

const itemIcon: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code2,
  zap: Zap,
  clock: Clock,
}

export function AppComputeSlide({
  slide,
  isVisible,
}: {
  slide: AppComputeSlideType
  isVisible: boolean
}) {
  return (
    <SlideShell>
      <SectionLabel isVisible={isVisible}>{slide.sectionLabel}</SectionLabel>

      <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:gap-10">
        {/* Left */}
        <div className="flex flex-1 flex-col lg:w-1/2">
          <SlideTitle isVisible={isVisible} delay={60} className="mb-3">
            {slide.title}
          </SlideTitle>
          <SlideSubtitle isVisible={isVisible} delay={140} className="mb-5">
            {slide.subtitle}
          </SlideSubtitle>

          <ul className="flex flex-col gap-2.5">
            {slide.listItems.map((item, index) => {
              const Icon = itemIcon[item.icon] ?? Code2
              return (
                <FadeIn
                  key={index}
                  isVisible={isVisible}
                  delay={220 + index * 60}
                  direction="left"
                >
                  <li className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-border bg-gray-200">
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

        {/* Right: before/after diagram */}
        <FadeIn
          isVisible={isVisible}
          delay={400}
          className="hidden lg:flex lg:w-1/2 flex-col gap-3 pt-10"
        >
          {/* TODAY */}
          <div>
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Today
            </span>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col gap-2 text-right">
                  <span className="font-mono text-[10px] text-muted-foreground">Static</span>
                  <span className="font-mono text-[10px] text-muted-foreground">Dynamic</span>
                  <span className="font-mono text-[10px] text-muted-foreground">API</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-px w-10 bg-border" />
                  <div className="h-px w-10 bg-border" />
                  <div className="h-px w-10 bg-border" />
                </div>
                <div className="rounded-md border border-dashed border-gray-600 bg-gray-100 px-5 py-3">
                  <span className="text-sm text-muted-foreground">PHP Monolith</span>
                </div>
                <div className="h-px w-8 bg-border" />
              </div>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                All requests funnel through one bottleneck
              </p>
            </div>
          </div>

          <div className="flex justify-center text-muted-foreground" aria-hidden>
            <ArrowDown size={14} />
          </div>

          {/* ON VERCEL */}
          <div>
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
              On Vercel
            </span>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-3 text-center">
                <span className="rounded border border-border bg-gray-100 px-2 py-1 font-mono text-[10px] text-muted-foreground">
                  Build Output API
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Static", target: "CDN" },
                  { label: "ISR", target: "CDN + Cache" },
                  { label: "Dynamic", target: "Fluid Compute" },
                ].map((path, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="font-mono text-[10px] text-muted-foreground">{path.label}</span>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
                      <line
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="20"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="3 2"
                        className="text-gray-700 dash-flow"
                      />
                      <polygon points="8,16 12,22 16,16" fill="currentColor" className="text-gray-700" />
                    </svg>
                    <div className="w-full rounded-md border border-border bg-gray-100 px-2 py-1.5 text-center">
                      <span className="text-xs text-foreground">{path.target}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Requests route to optimal compute automatically
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </SlideShell>
  )
}
