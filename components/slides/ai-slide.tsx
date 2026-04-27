import type { AISlide as AISlideType } from "@/lib/slides"
import { Code2, GitBranch, Shield, Sparkles, MessageSquare, Plane, FileText, FlaskConical, Globe } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FadeIn, SectionLabel, SlideShell, SlideSubtitle, SlideTitle, StatBadge } from "./atoms"

const productIcon: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code2,
  gitbranch: GitBranch,
  shield: Shield,
  sparkles: Sparkles,
}

const useCaseIcon: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  message: MessageSquare,
  plane: Plane,
  filetext: FileText,
  testtube: FlaskConical,
}

const tooltipContent: Record<string, string> = {
  "Customer Service Agent":
    "Vercel reduced their own support tickets by 31% using this pattern. At $7-8 per live call, that's direct cost avoidance at scale.",
  "Trip Management Agent":
    "Target: 40% reduction in human interaction during disruptions. One agent handles 200 simultaneous rebookings without scaling headcount.",
  "AI Content at Scale":
    "~$1,000 for 10,000 unique listings vs $500K+ hand-written. Ruggable saw 300% increase in organic search clicks.",
  "AI Testing Agents":
    "200-test suite in under 5 minutes vs 3 hours traditional. ~$0.34 per test run in Sandbox compute.",
}

export function AISlide({ slide, isVisible }: { slide: AISlideType; isVisible: boolean }) {
  const allUseCases = [...slide.useCasesTop, ...slide.useCasesBottom]

  return (
    <SlideShell>
      <SectionLabel isVisible={isVisible}>{slide.sectionLabel}</SectionLabel>

      <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:gap-10">
        {/* Left: products + code */}
        <div className="flex flex-1 flex-col lg:w-1/2">
          <SlideTitle isVisible={isVisible} delay={60} className="mb-3">
            {slide.title}
          </SlideTitle>
          <SlideSubtitle isVisible={isVisible} delay={140} className="mb-4">
            {slide.subtitle}
          </SlideSubtitle>

          <ul className="flex flex-col gap-2">
            {slide.products.map((item, index) => {
              const Icon = productIcon[item.icon] ?? Globe
              return (
                <FadeIn
                  key={index}
                  isVisible={isVisible}
                  delay={220 + index * 50}
                  direction="left"
                >
                  <li className="flex items-start gap-3 rounded-lg border border-border bg-card px-3 py-2.5">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-border bg-gray-200">
                      <Icon size={14} className="text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-0.5 flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {item.step}
                        </span>
                        <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-[11px] leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                </FadeIn>
              )
            })}
          </ul>

          {/* Code snippet */}
          <FadeIn isVisible={isVisible} delay={460} className="mt-3">
            <div className="rounded-lg border border-border bg-gray-100 px-3 py-3">
              <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-muted-foreground">
                <code className="text-foreground">{slide.codeSnippet}</code>
              </pre>
            </div>
          </FadeIn>

          <FadeIn isVisible={isVisible} delay={520} className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <StatBadge>{slide.stats.left}</StatBadge>
            <StatBadge>{slide.stats.right}</StatBadge>
          </FadeIn>
        </div>

        {/* Right: opportunities */}
        <div className="flex flex-col lg:w-1/2 lg:pt-12">
          <FadeIn isVisible={isVisible} delay={300}>
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Opportunities
            </span>
            <TooltipProvider delayDuration={200}>
              <ul className="flex flex-col gap-2">
                {allUseCases.map((useCase, index) => {
                  const Icon = useCaseIcon[useCase.icon] ?? Globe
                  return (
                    <FadeIn
                      key={index}
                      isVisible={isVisible}
                      delay={400 + index * 70}
                      direction="right"
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <li className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-gray-500 hover:bg-gray-100">
                            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-border bg-gray-200">
                              <Icon size={14} className="text-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="mb-0.5 text-sm font-medium text-foreground">{useCase.title}</h4>
                              <p className="text-xs leading-relaxed text-muted-foreground">{useCase.description}</p>
                            </div>
                          </li>
                        </TooltipTrigger>
                        <TooltipContent
                          side="left"
                          className="max-w-xs rounded-md border border-border bg-popover px-3 py-2 text-xs text-popover-foreground"
                          sideOffset={8}
                        >
                          {tooltipContent[useCase.title] ?? ""}
                        </TooltipContent>
                      </Tooltip>
                    </FadeIn>
                  )
                })}
              </ul>
            </TooltipProvider>
          </FadeIn>
        </div>
      </div>
    </SlideShell>
  )
}
