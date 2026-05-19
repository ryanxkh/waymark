"use client"

import { useEffect, useState } from "react"
import type { Slide } from "@/lib/slides"
import { TitleSlide } from "@/components/slides/title-slide"
import { DiscoverySlide } from "@/components/slides/discovery-slide"
import { FDISlide } from "@/components/slides/fdi-slide"
import { EdgeDeliverySlide } from "@/components/slides/edge-delivery-slide"
import { AppComputeSlide } from "@/components/slides/app-compute-slide"
import { DevExSlide } from "@/components/slides/devex-slide"
import { AISlide } from "@/components/slides/ai-slide"
import { BusinessCaseSlide } from "@/components/slides/business-case-slide"
import { RevealSlide } from "@/components/slides/reveal-slide"
import { NextStepsSlide } from "@/components/slides/next-steps-slide"

export function SlideRenderer({ slide }: { slide: Slide }) {
  const [isVisible, setIsVisible] = useState(false)

  // Replay the staggered entrance cascade on every slide mount.
  useEffect(() => {
    setIsVisible(false)
    const timer = window.setTimeout(() => setIsVisible(true), 60)
    return () => window.clearTimeout(timer)
  }, [slide.id])

  switch (slide.type) {
    case "title":
      return <TitleSlide slide={slide} isVisible={isVisible} />
    case "discovery":
      return <DiscoverySlide slide={slide} isVisible={isVisible} />
    case "fdi":
      return <FDISlide slide={slide} isVisible={isVisible} />
    case "edge-delivery":
      return <EdgeDeliverySlide slide={slide} isVisible={isVisible} />
    case "app-compute":
      return <AppComputeSlide slide={slide} isVisible={isVisible} />
    case "devex":
      return <DevExSlide slide={slide} isVisible={isVisible} />
    case "ai":
      return <AISlide slide={slide} isVisible={isVisible} />
    case "business-case":
      return <BusinessCaseSlide slide={slide} isVisible={isVisible} />
    case "reveal":
      return <RevealSlide slide={slide} isVisible={isVisible} />
    case "next-steps":
      return <NextStepsSlide slide={slide} isVisible={isVisible} />
    default:
      return null
  }
}
