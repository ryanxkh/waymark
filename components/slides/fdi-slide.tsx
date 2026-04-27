import type { FDISlide as FDISlideType } from "@/lib/slides"
import {
  Activity,
  Bot,
  Box,
  Cpu,
  Globe,
  Rocket,
  Sparkles,
  RefreshCw,
  BarChart3,
} from "lucide-react"
import { FadeIn, SectionLabel, SlideShell, SlideSubtitle, SlideTitle } from "./atoms"

const layerIcon = {
  globe: Globe,
  cpu: Cpu,
  database: Box,
  rocket: Rocket,
  sparkles: Sparkles,
} as const

const orbitIcon: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  cdn: Globe,
  isr: RefreshCw,
  compute: Activity,
  ai: Bot,
  gateway: Sparkles,
  sandbox: Box,
  v0: Sparkles,
  observability: BarChart3,
  agent: Bot,
}

export function FDISlide({ slide, isVisible }: { slide: FDISlideType; isVisible: boolean }) {
  return (
    <SlideShell>
      <SectionLabel isVisible={isVisible}>{slide.sectionLabel}</SectionLabel>

      <div className="mt-3 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* Left: copy + layer cards */}
        <FadeIn isVisible={isVisible} delay={80}>
          <SlideTitle isVisible={isVisible} delay={80} className="mb-3">
            {slide.title}
          </SlideTitle>
          <SlideSubtitle isVisible={isVisible} delay={160} className="mb-6">
            {slide.subtitle}
          </SlideSubtitle>

          <ul className="flex flex-col gap-2.5">
            {slide.layers.map((layer, index) => {
              const Icon = layerIcon[layer.icon] ?? Globe
              return (
                <FadeIn
                  key={index}
                  isVisible={isVisible}
                  delay={220 + index * 60}
                  direction="left"
                >
                  <li className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-gray-500">
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-border bg-gray-300 text-foreground"
                      aria-hidden
                    >
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {layer.step}
                        </span>
                        <span className="text-sm font-medium text-foreground">{layer.title}</span>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {layer.description}
                      </p>
                    </div>
                  </li>
                </FadeIn>
              )
            })}
          </ul>
        </FadeIn>

        {/* Right: orbital diagram (desktop only) + chip list (mobile only) */}
        <FadeIn
          isVisible={isVisible}
          delay={300}
          className="hidden lg:flex items-center justify-center"
        >
          <OrbitalDiagram nodes={slide.orbitNodes} />
        </FadeIn>

        <FadeIn isVisible={isVisible} delay={300} className="lg:hidden">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-gray-300">
                <svg viewBox="0 0 76 65" className="h-3 w-3 fill-foreground" aria-hidden>
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Vercel FDI
                </span>
                <span className="text-sm text-foreground">Frontend Development Infrastructure</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {slide.orbitNodes.map((node, i) => (
                <span
                  key={i}
                  className="rounded border border-border bg-gray-100 px-2 py-1 text-[10px] text-muted-foreground"
                >
                  {node.name}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </SlideShell>
  )
}

function OrbitalDiagram({ nodes }: { nodes: { name: string; icon: string }[] }) {
  return (
    <div className="relative h-[420px] w-[420px]">
      {/* Outer ring */}
      <div className="absolute inset-2 rounded-full border border-border" />
      {/* Inner ring */}
      <div className="absolute inset-12 rounded-full border border-dashed border-border" />

      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-border bg-card">
          <svg viewBox="0 0 76 65" className="mb-1 h-7 w-7 fill-foreground" aria-hidden>
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            FDI
          </span>
        </div>
      </div>

      {/* Orbit nodes */}
      {nodes.map((node, index) => {
        const angle = (index * (360 / nodes.length) - 90) * (Math.PI / 180)
        const radius = 175
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const Icon = orbitIcon[node.icon] ?? Globe
        return (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px - 22px)`,
              top: `calc(50% + ${y}px - 22px)`,
            }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card transition-colors hover:border-gray-500">
              <Icon size={16} className="text-muted-foreground" />
            </div>
            <span className="mt-1.5 whitespace-nowrap font-mono text-[10px] text-muted-foreground">
              {node.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
