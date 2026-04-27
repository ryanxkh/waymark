"use client"

import { useState } from "react"
import type { EdgeDeliverySlide as EdgeDeliverySlideType } from "@/lib/slides"
import {
  Globe,
  RefreshCw,
  Image as ImageIcon,
  Shield,
  ArrowLeftRight,
  ChevronDown,
} from "lucide-react"
import { FadeIn, SectionLabel, SlideShell, SlideSubtitle, SlideTitle } from "./atoms"
import { cn } from "@/lib/utils"

const itemIcon: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  globe: Globe,
  refresh: RefreshCw,
  arrows: ArrowLeftRight,
  image: ImageIcon,
  shield: Shield,
}

type CachingMode = "isr" | "api" | "external" | "image"

const cachingModeLabels: Record<CachingMode, string> = {
  isr: "Frameworks with ISR Support",
  api: "APIs with Cache-Control Headers",
  external: "External Origins",
  image: "Image Optimization",
}

const cachingModeDescriptions: Record<CachingMode, string> = {
  isr: "Next.js and other frameworks use ISR to cache pre-rendered pages and update content on demand without redeploying.",
  api: "API routes and custom backends can cache responses in the Vercel CDN by setting Cache-Control headers.",
  external: "Requests proxied to external origins via rewrites can be cached in the Vercel CDN to improve performance.",
  image: "Vercel dynamically transforms and optimizes images, caching them on the CDN for fast delivery.",
}

export function EdgeDeliverySlide({
  slide,
  isVisible,
}: {
  slide: EdgeDeliverySlideType
  isVisible: boolean
}) {
  const [mode, setMode] = useState<CachingMode>("isr")

  return (
    <SlideShell>
      <SectionLabel isVisible={isVisible}>{slide.sectionLabel}</SectionLabel>

      <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:gap-10">
        {/* Left: copy + items */}
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
                      <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                </FadeIn>
              )
            })}
          </ul>
        </div>

        {/* Right: caching diagram */}
        <FadeIn
          isVisible={isVisible}
          delay={360}
          className="hidden lg:flex lg:w-[45%] flex-col"
        >
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-medium text-foreground">How Caching Works</h4>
          </div>
          <div className="relative mb-3">
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as CachingMode)}
              className="w-full appearance-none rounded-md border border-border bg-card px-3 py-2 pr-9 text-sm text-foreground transition-colors hover:border-gray-500 focus:border-gray-500 focus:outline-none cursor-pointer"
            >
              {(Object.keys(cachingModeLabels) as CachingMode[]).map((m) => (
                <option key={m} value={m}>
                  {cachingModeLabels[m]}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
          </div>
          <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
            {cachingModeDescriptions[mode]}
          </p>

          <CachingDiagram mode={mode} />
        </FadeIn>
      </div>
    </SlideShell>
  )
}

function DiagramRow({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <div className="border-b border-border bg-gray-100 px-3 py-1.5 text-right">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
      </div>
      <div className="bg-card p-3">
        <span className="block text-sm text-foreground">{title}</span>
        {description ? (
          <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  )
}

function Connector({ className }: { className?: string }) {
  return <div className={cn("ml-4 h-3 w-px border-l border-dashed border-border", className)} aria-hidden />
}

function CachingDiagram({ mode }: { mode: CachingMode }) {
  return (
    <div className="flex flex-col">
      <DiagramRow label="Close to user" title="Client" />
      <Connector />
      <DiagramRow label="Vercel Region" title="CDN Cache" description="Global across all Vercel regions for fast delivery" />
      <Connector />

      {(mode === "isr" || mode === "api") && (
        <>
          <div className="overflow-hidden rounded-md border border-border">
            <div className="border-b border-border bg-gray-100 px-3 py-1.5 text-right">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Function Region
              </span>
            </div>
            <div className="flex flex-col gap-2 bg-card p-3">
              {mode === "isr" && (
                <>
                  <span className="block text-sm text-foreground">ISR Cache</span>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    Can be revalidated on-demand or based on time
                  </p>
                  <Connector className="ml-1" />
                </>
              )}
              <span className="block text-sm text-foreground">Vercel Function</span>
              <Connector className="ml-1" />
              <span className="block text-sm text-foreground">Runtime Cache</span>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                For data used in Vercel Functions
              </p>
            </div>
          </div>
          <Connector />
          <span className="pl-3 text-sm text-muted-foreground">Backend</span>
        </>
      )}

      {mode === "external" && <span className="pl-3 text-sm text-muted-foreground">External Origin</span>}

      {mode === "image" && (
        <>
          <DiagramRow
            label="Image Cache Region"
            title="Image Cache"
            description="Durable cache for optimized images to avoid re-processing"
          />
          <Connector />
          <span className="pl-3 text-sm text-muted-foreground">Source Image</span>
        </>
      )}
    </div>
  )
}
