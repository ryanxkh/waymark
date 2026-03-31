"use client"

/**
 * BUILD v74 - JSX SYNTAX VERIFIED CLEAN
 * Footer comment removed, structure verified at lines 1440-1453
 * Target icon imported, all slides use .slide-container class
 */

// React hooks
import { useState, useEffect, useCallback } from "react"

// Lucide icons
import { 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  Users, 
  Sparkles, 
  Zap, 
  Shield, 
  LineChart, 
  TrendingUp, 
  TrendingDown, 
  Layers, 
  Server, 
  Database, 
  Code, 
  GitBranch, 
  Eye, 
  RefreshCw, 
  RotateCcw, 
  Timer, 
  Play, 
  MessageSquare, 
  Bot, 
  Cpu, 
  Box, 
  Clock, 
  Terminal, 
  BarChart3, 
  Activity, 
  Target 
} from "lucide-react"

// UI components
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const _BUILD_VERSION = "v74_verified_clean"
interface TitleSlide {
  id: number
  type: "title"
  logo: boolean
  title: string
  subtitle: string
  author: string
}

interface DiscoverySlide {
  id: number
  type: "discovery"
  sectionLabel: string
  title: string
  assumptions: string[]
  cards: {
    id: string
    borderColor: string
    question: string
    revealTitle: string
    bullets: string[]
  }[]
}

interface ContentSlide {
  id: number
  type: "content"
  title: string
  bullets: string[]
}

interface FDILayerItem {
  step: string
  title: string
  description: string
  icon: "globe" | "cpu" | "database" | "rocket" | "sparkles"
}

interface OrbitNode {
  name: string
  icon: string
}

interface FDISlide {
  id: number
  type: "fdi"
  sectionLabel: string
  title: string
  subtitle: string
  layers: FDILayerItem[]
  orbitNodes: OrbitNode[]
  footer?: string
}

interface EdgeDeliveryListItem {
  step: string
  icon: string
  title: string
  description: string
}

interface EdgeDeliverySlide {
  id: number
  type: "edge-delivery"
  sectionLabel: string
  title: string
  subtitle: string
  listItems: EdgeDeliveryListItem[]
  footerText: string
}

interface AppComputeListItem {
  step: string
  icon: string
  title: string
  description: string
}

interface AppComputeSlide {
  id: number
  type: "app-compute"
  sectionLabel: string
  title: string
  subtitle: string
  listItems: AppComputeListItem[]
  stats: {
    left: string
    right: string
  }
}

interface DevExListItem {
  step: string
  icon: string
  title: string
  description: string
}

interface DevExSlide {
  id: number
  type: "devex"
  sectionLabel: string
  title: string
  subtitle: string
  listItems: DevExListItem[]
stats: {
  left: string
  right: string
  }
  }

interface AIProductItem {
  step: string
  icon: string
  title: string
  description: string
}

interface AIUseCaseItem {
  icon: string
  title: string
  description: string
  highlight?: boolean
}

interface AISlide {
  id: number
  type: "ai"
  sectionLabel: string
  title: string
  subtitle: string
  products: AIProductItem[]
  codeSnippet: string
  useCasesTop: AIUseCaseItem[]
  useCasesBottom: AIUseCaseItem[]
  stats: {
    left: string
    right: string
  }
}

interface BusinessCaseRow {
  icon: string
  metric: string
  current: string
  goal: string
  proofPoint?: string
}

interface BusinessCaseSlide {
  id: number
  type: "business-case"
  sectionLabel: string
  title: string
  subtitle: string
  rows: BusinessCaseRow[]
}

interface LighthouseScore {
  label: string
  score: number
}

interface NextStepsSlide {
  id: number
  type: "next-steps"
  sectionLabel: string
  title: string
  subtitle: string
  lighthouseOldImage: string
  lighthouseNewImage: string
  siteScreenshot: string
  povScope: string
  povTimeline: string[]
  povCriteria: string[]
  waymarkCommits: string
  vercelProvides: string
  footer: string
}

interface RevealSlide {
  id: number
  type: "reveal"
  sectionLabel: string
  title: string
  subtitle: string
  lighthouseOldImage: string
  lighthouseNewImage: string
  demoScreenshot: string
  demoUrl: string
  footer: string
}

type Slide = TitleSlide | DiscoverySlide | ContentSlide | FDISlide | EdgeDeliverySlide | AppComputeSlide | DevExSlide | AISlide | BusinessCaseSlide | NextStepsSlide | RevealSlide

const slides: Slide[] = [
  {
    id: 1,
    type: "title",
    logo: true,
    title: "Waymark",
    subtitle: "Technical Discovery & Platform Recommendation",
    author: "Ryan Hodge",
  },
  {
    id: 2,
    type: "discovery",
    sectionLabel: "DISCOVERY",
    title: "Assumptions and Discovery",
    assumptions: [
      "Likely an AWS shop — Amplify doesn't make the shortlist without existing AWS investment",
      "Running a traditional AWS stack — EC2 for compute, CloudFront for static assets, RDS for the database, with third-party integrations for RUM and their Global Distribution System",
      "Booking flow is fully dynamic — PHP monolith renders every page on every request; slow always, worse at peak",
      "Deployment velocity constrained by monolith — can't ship a booking fix without deploying everything",
      "No production AI integration — current stack can't support streaming, tool calling, or agent workflows",
      "Migration already attempted, partially stalled — React and legacy templates coexisting means someone started and hit a wall",
      "Tech debt compounding — two rendering systems = dual maintenance, and it's getting harder to justify either one",
    ],
    cards: [
      {
        id: "current-state",
        borderColor: "border-amber-500/60",
        question: "When you report to the board on how the site is performing, what are the three or four numbers you lead with? Which one is under the most pressure?",
        revealTitle: "What this reveals:",
        bullets: [
          "Establishes Current State",
          "Defines Negative Consequences",
          "Surfaces Goal State",
        ],
      },
      {
        id: "desired-state",
        borderColor: "border-amber-500/60",
        question: "You mentioned wanting AI in trip management and customer service. How are those being handled today, and what does it look like when AI is actually working?",
        revealTitle: "What this reveals:",
        bullets: [
          "Establishes Current State of AI",
          "Defines Negative Consequences of not having AI",
          "Surfaces Goal State and leads to Required Capabilities",
        ],
      },
      {
        id: "held-back",
        borderColor: "border-amber-500/60",
        question: "What else is being held back because of the current platform?",
        revealTitle: "What this reveals:",
        bullets: [
          "Clear up assumptions we made",
          "Surfaces more blockers and required capabilities for PoV",
          "Opens the path to more discovery",
        ],
      },
    ],
  },
  {
    id: 3,
    type: "fdi",
    sectionLabel: "PROPOSED ARCHITECTURE",
    title: "Framework-Defined Infrastructure",
    subtitle: "Infrastructure is declared by Next.js, not configured by your engineers.",
    layers: [
{ step: "01", title: "Edge + Delivery", description: "Vercel CDN, ISR, Edge Middleware, Image Optimization, Vercel Firewall", icon: "globe" },
  { step: "02", title: "Application + Compute", description: "Next.js, Vercel Functions, Fluid Compute, Streaming SSR", icon: "cpu" },
  { step: "03", title: "Developer Experience", description: "Preview Deployments, Instant Rollback, Rolling Releases, Vercel Toolbar, Observability, Vercel Agent", icon: "rocket" },
  { step: "04", title: "AI Platform", description: "AI SDK, AI Gateway, Vercel Sandbox, v0", icon: "sparkles" },
    ],
    orbitNodes: [
      { name: "Vercel CDN", icon: "cdn" },
      { name: "ISR", icon: "isr" },
      { name: "Fluid Compute", icon: "compute" },
      { name: "AI SDK", icon: "ai" },
      { name: "AI Gateway", icon: "gateway" },
      { name: "Sandbox", icon: "sandbox" },
      { name: "v0", icon: "v0" },
      { name: "Observability", icon: "observability" },
      { name: "Vercel Agent", icon: "agent" },
    ],
  },
  {
    id: 4,
    type: "edge-delivery",
    sectionLabel: "EDGE + DELIVERY",
    title: "Your CDN Should Understand Your Framework",
    subtitle: "Today CloudFront caches your static assets and everything dynamic bypasses it, hitting the origin on every request. Vercel's CDN reads the Build Output API at deploy time and knows which routes are static, which use ISR, and which are dynamic before a single request arrives.",
    listItems: [
      {
        step: "01",
        icon: "globe",
        title: "Vercel CDN",
        description: "Framework-aware caching across 126 PoPs. The CDN knows which routes to cache because it reads the Build Output API at deploy time.",
      },
      {
        step: "02",
        icon: "refresh",
        title: "ISR + Request Collapsing",
        description: "Cached pages with 300ms global purge. 1,000 concurrent requests to the same page become 1 origin call per region.",
      },
      {
        step: "03",
        icon: "arrows",
        title: "Edge Middleware",
        description: "Runs at every PoP before the cache layer. Locale detection, migration routing, A/B testing with built-in geolocation.",
      },
      {
        step: "04",
        icon: "image",
        title: "Image Optimization",
        description: "Auto WebP/AVIF conversion, lazy loading, layout shift prevention. Cached at CDN for up to 31 days.",
      },
      {
        step: "05",
        icon: "shield",
        title: "Vercel Firewall",
        description: "Automatic DDoS mitigation on all plans. WAF custom rules and bot management at the edge, before routing.",
      },
    ],
    footerText: "",
  },
  {
    id: 5,
    type: "app-compute",
    sectionLabel: "APPLICATION + COMPUTE",
    title: "Optimized Routing",
    subtitle: "Every request funnels through one PHP monolith today. With Next.js on Vercel, the framework classifies each route and the platform provisions the right compute automatically.",
    listItems: [
      {
        step: "01",
        icon: "code",
        title: "Next.js (Server Components)",
        description: "Server-rendered HTML sent directly to the browser. No blank page waiting for JavaScript to load.",
      },
      {
        step: "02",
        icon: "zap",
        title: "Vercel Functions (Fluid Compute)",
        description: "One warm instance handles multiple concurrent requests. No cold starts, no capacity planning.",
      },
      {
        step: "03",
        icon: "clock",
        title: "Streaming SSR",
        description: "Response streams to the browser as it renders. The traveler sees the page building in real-time instead of waiting for a blank screen to fully load.",
      },
    ],
    stats: {
      left: "Fluid Compute SSR: Next.js renders 3.55x faster on Vercel vs Cloudflare Workers",
      right: "Active CPU billing: a 10s GDS call using 100ms of CPU bills for 100ms of compute",
    },
  },
  {
    id: 6,
    type: "devex",
    sectionLabel: "DEVELOPER EXPERIENCE",
    title: "Ship Every Day, Roll Back in Seconds",
    subtitle: "Deploys are infrequent because the risk is high and coordination is heavy. When shipping is fast and rollback is instant, frequency becomes a safe default.",
    listItems: [
      {
        step: "01",
        icon: "eye",
        title: "Preview Deployments",
        description: "Every git push creates a live, production-identical URL in 30-90 seconds. Stakeholders review the real thing.",
      },
      {
        step: "02",
        icon: "rotate",
        title: "Instant Rollback",
        description: "One click reverts production to any previous deployment. No rebuild, no war room—a pointer change.",
      },
      {
        step: "03",
        icon: "gitbranch",
        title: "Rolling Releases",
        description: "Shift 10% of traffic to a new deployment, monitor, then scale up. Auto-pauses if errors spike.",
      },
      {
        step: "04",
        icon: "message",
        title: "Vercel Toolbar",
        description: "Visual comments pinned to elements, feature flag toggling, and draft mode for editors on the live URL.",
      },
      {
        step: "05",
        icon: "activity",
        title: "Vercel Agent",
        description: "AI-powered incident detection, code review, and security patching.",
      },
    ],
    stats: {
      left: "Notion: hotfix time 1hr → 15min",
      right: "DORA elite MTTR: under 60 min. Vercel: seconds.",
    },
  },
{
  id: 7,
  type: "ai",
  sectionLabel: "AI PLATFORM",
    title: "From Zero AI to Four Use Cases",
    subtitle: "The AI SDK, AI Gateway, and Sandbox give your team the tools to ship AI features in a fast, and secure way.",
    products: [
      {
        step: "01",
        icon: "code",
        title: "AI SDK",
        description: "Tool calling, multi-step agent loops, and human-in-the-loop approval built into the framework. 20M+ monthly downloads.",
      },
      {
        step: "02",
        icon: "gitbranch",
        title: "AI Gateway",
        description: "One API key, hundreds of models, automatic failover, zero token markup. Spend monitoring per agent.",
      },
      {
        step: "03",
        icon: "shield",
        title: "Vercel Sandbox",
        description: "Secure Firecracker microVMs for running AI-generated code. Credentials brokering means API keys never enter the execution environment.",
      },
      {
        step: "04",
        icon: "sparkles",
        title: "v0",
        description: "AI-powered app builder. Prototype the customer service chat UI or internal dashboards in hours, deploy to Vercel in one click.",
      },
    ],
    codeSnippet: `tool({
  description: 'Look up a booking by confirmation number',
  parameters: z.object({
    confirmationNumber: z.string()
  }),
  execute: async ({ confirmationNumber }) => {
    return await bookingAPI.lookup(confirmationNumber)
  }
})`,
    useCasesTop: [
      {
        icon: "message",
        title: "Customer Service Agent",
        description: "Human-in-the-loop chatbot reducing high volume, low value queries.",
      },
      {
        icon: "plane",
        title: "Trip Management Agent",
        description: "Multi-step rebooking during disruptions. Resolution in minutes, not hours on hold.",
      },
    ],
    useCasesBottom: [
      {
        icon: "filetext",
        title: "AI Content at Scale",
        description: "Unique SEO descriptions for listings via AI SDK.",
        highlight: true,
      },
      {
        icon: "testtube",
        title: "AI Testing Agents",
        description: "Automated QA on every PR. AI crawls booking flow in Sandbox, validates nothing broke.",
        highlight: true,
      },
    ],
    stats: {
      left: "Vercel reduced their own support tickets by 31% using AI SDK",
      right: "Thomson Reuters: 3 devs, 2 months, 1,300 firms",
    },
  },
  {
    id: 8,
    type: "business-case",
    sectionLabel: "THE BUSINESS CASE",
    title: "Where You Are → Where This Gets You",
    subtitle: "Everything in this architecture maps back to something you told me in discovery. Here's how it translates to the numbers you report to the board.",
    rows: [
      {
        icon: "analytics",
        metric: "Booking Conversion",
        current: "1% today. Slow booking flows lead to abandoned bookings because every page rebuilds from scratch on every request.",
        goal: "Faster pages through Server Components, streaming, and ISR. Travelers see the booking form instantly.",
        proofPoint: "PAIGE: 76% conversion improvement after migrating.",
      },
      {
        icon: "fluid",
        metric: "Peak Uptime",
        current: "Capacity planning meetings before every peak season. Monolith buckles under concurrent load, pre-provisioning is educated guessing.",
        goal: "Request collapsing and Fluid Compute handle spikes automatically. No pre-provisioning.",
        proofPoint: "Sportswear brand: 125K visitors/hour, zero downtime.",
      },
      {
        icon: "terminal",
        metric: "Dev Velocity",
        current: "Weekly batched deploys through a staging environment that drifts from production. Engineers maintaining Terraform and CloudFront rules.",
        goal: "80% reduction in build-to-production time (Forrester TEI). More features are shipped per year. Helly Hansen's CDO 3x'd ad spend mid-campaign because faster A/B testing proved the ROI.",
      },
      {
        icon: "sparkles",
        metric: "AI in Production",
        current: "Nothing shipped. Manual customer service (5-10 min per inquiry), no trip management automation.",
        goal: "Four use cases ready to build to reduce spend on SEO content creation, increase booking conversion percentage, and reduce support interactions.",
      },
    ],
  },
  {
    id: 9,
    type: "reveal",
    sectionLabel: "NEXT STEPS",
    title: "A Quick Demo",
    subtitle: "Before our conversation, I built a version of your site on Vercel using v0 to see what the performance delta looks like and what the AI agent feels like in production.",
    lighthouseOldImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldsitenotonvercel2-Tx1bUsaeu9iJwjKvZbpmMeTlP1MLWF.png",
    lighthouseNewImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-22%20at%2011.36.24%E2%80%AFPM-2npsiNb4jFdPZYPG7cMgiroUGlyyEc.png",
    demoScreenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-22%20at%2010.24.50%E2%80%AFPM.png-4lpeGpScYiycPTjZAfexKYQ1sKSc4k.jpeg",
    demoUrl: "https://waymarktravel.vercel.app/",
    footer: "",
  },
  {
    id: 10,
    type: "next-steps",
    sectionLabel: "NEXT STEPS",
    title: "Proof of Value and Workshop",
    subtitle: "Before our conversation, I built a version of your site on Vercel to see what the performance delta looks like.",
    lighthouseOldImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldsitenotonvercel2-Tx1bUsaeu9iJwjKvZbpmMeTlP1MLWF.png",
    lighthouseNewImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-22%20at%2011.36.24%E2%80%AFPM-2npsiNb4jFdPZYPG7cMgiroUGlyyEc.png",
    siteScreenshot: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-22%20at%2010.24.50%E2%80%AFPM.png-4lpeGpScYiycPTjZAfexKYQ1sKSc4k.jpeg",
    povScope: "Rebuild the frontend rendering of one high-traffic booking page in Next.js on Vercel, connected to existing booking APIs. Half-day AI workshop where we build the support agent with the CTO's team against a staging environment.",
    povTimeline: [
      "Week 1: Frontend rebuild and instrumentation. AI workshop with the engineering team.",
      "Week 2: Route a percentage of real traffic to the new page via Edge Middleware. Collect real-user performance data through Speed Insights.",
      "Week 3: Analysis and readout. Compare performance, measure the conversion delta, present findings and expansion plan.",
    ],
    povCriteria: [
      "LCP under 2.5 seconds (from current 4.1s) on the migrated page measured with real-user data",
      "Lighthouse Performance score above 80 (from current 38)",
      "AI agent resolving 3 out of 5 sample support scenarios in the workshop without human intervention",
      "Number of iterations shipped during the POV vs a comparable 3-week sprint on the monolith",
    ],
    waymarkCommits: "1-2 frontend engineers for the rebuild, API access to booking system, approval to route test traffic, 1 engineering lead for the AI workshop.",
    vercelProvides: "Enterprise evaluation access, dedicated SE support throughout, AI SDK implementation guidance, compute credits for the POV period.",
    footer: "",
  },
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [cachingMode, setCachingMode] = useState<"isr" | "api" | "external" | "image">("isr")

  // Initial mount animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setIsAnimating(true)
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSlide((prev) => prev + 1)
        setTimeout(() => {
          setIsVisible(true)
          setIsAnimating(false)
        }, 50)
      }, 400)
    }
  }, [currentSlide])

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setIsAnimating(true)
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSlide((prev) => prev - 1)
        setTimeout(() => {
          setIsVisible(true)
          setIsAnimating(false)
        }, 50)
      }, 400)
    }
  }, [currentSlide])

  const goToSlide = useCallback((index: number) => {
    if (index !== currentSlide && !isAnimating) {
      setIsAnimating(true)
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSlide(index)
        setTimeout(() => {
          setIsVisible(true)
          setIsAnimating(false)
        }, 50)
      }, 400)
    }
  }, [currentSlide, isAnimating])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "Enter":
          e.preventDefault()
          goToNext()
          break
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault()
          goToPrev()
          break
        case "Home":
          e.preventDefault()
          goToSlide(0)
          break
        case "End":
          e.preventDefault()
          goToSlide(slides.length - 1)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrev, goToSlide, isAnimating])

  // Touch/swipe support for mobile — only horizontal swipes, never block vertical scroll
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY })
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY })
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distanceX = touchStart.x - touchEnd.x
    const distanceY = Math.abs(touchStart.y - touchEnd.y)
    // Only trigger slide navigation if horizontal swipe is dominant (not vertical scroll)
    if (distanceY > Math.abs(distanceX)) return
    const isLeftSwipe = distanceX > minSwipeDistance
    const isRightSwipe = distanceX < -minSwipeDistance
    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrev()
    }
  }

  const slide = slides[currentSlide]

  if (!slide) {
    return null
  }

  return (
    <main
      className="min-h-[100dvh] w-screen bg-black relative overflow-x-hidden overflow-y-auto lg:overflow-hidden lg:h-[100dvh] lg:max-h-[100dvh] focus:outline-none"
      style={{ WebkitOverflowScrolling: "touch" }}
      tabIndex={0}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Static color burst in lower left corner with pulse animation */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: -160,
          bottom: -160,
          width: 800,
          height: 800,
        }}
      >
        {/* Base color burst layer */}
        <div
          className="absolute inset-0 animate-pulse-slow"
          style={{
            background: `
              radial-gradient(
                ellipse 85% 70% at 25% 75%,
                rgba(34, 197, 94, 0.35) 0%,
                rgba(234, 179, 8, 0.28) 25%,
                rgba(249, 115, 22, 0.22) 45%,
                rgba(239, 68, 68, 0.18) 60%,
                transparent 85%
              )
            `,
            filter: "blur(100px)",
          }}
        />
        {/* Secondary glow layer for depth */}
        <div
          className="absolute inset-0 animate-pulse-slower"
          style={{
            background: `
              radial-gradient(
                ellipse 75% 60% at 20% 80%,
                rgba(251, 191, 36, 0.25) 0%,
                rgba(239, 68, 68, 0.18) 35%,
                rgba(168, 85, 247, 0.10) 55%,
                transparent 80%
              )
            `,
            filter: "blur(120px)",
          }}
        />
        {/* Tertiary accent layer for vibrancy */}
        <div
          className="absolute inset-0 animate-pulse-accent"
          style={{
            background: `
              radial-gradient(
                ellipse 60% 50% at 30% 70%,
                rgba(34, 197, 94, 0.20) 0%,
                rgba(234, 179, 8, 0.15) 40%,
                transparent 70%
              )
            `,
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Visible grid pattern background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Inset content area */}
      <div className="relative lg:absolute inset-0 lg:inset-4 xl:inset-8 2xl:inset-12 flex flex-col min-h-[100dvh] lg:min-h-0 p-4 sm:p-6 lg:p-0 pb-24 lg:pb-0">
        {/* Decorative border overlay */}
        <div className="hidden lg:block absolute inset-0 border border-neutral-800/60 pointer-events-none" />

        {/* Centered content */}
        <div className="flex-1 flex flex-col items-center justify-start lg:justify-center gap-4 lg:gap-6 relative py-4 lg:py-0">
          {slide.type === "title" ? (
            <>
              {/* Vercel triangle logo */}
              <svg
                viewBox="0 0 76 65"
                className={`w-16 h-16 fill-white transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
                aria-label="Vercel Logo"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>

              {/* Title */}
              <h1 
                className={`text-4xl md:text-5xl font-semibold tracking-tight text-white font-sans transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
              >
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p 
                className={`text-base md:text-lg text-neutral-300 font-sans transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
              >
                {slide.subtitle}
              </p>

              {/* Separator line */}
              <div 
                className={`w-16 h-px bg-neutral-400 mx-auto transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 scale-x-100" 
                    : "opacity-0 scale-x-0"
                }`}
                style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
              />

              {/* Author */}
              <span 
                className={`text-sm text-neutral-400 font-mono transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
              >
                {slide.author}
              </span>
            </>
          ) : slide.type === "discovery" ? (
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              {/* Section label */}
              <div
                className={`mb-2 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
              >
                <span className="text-xs font-mono uppercase tracking-widest text-amber-500">
                  {slide.sectionLabel}
                </span>
              </div>

              {/* Headline */}
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6 transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
              >
                {slide.title}
              </h2>

              {/* Two-column layout */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Left column - Assumptions card */}
                <div
                  className={`lg:w-2/5 flex-shrink-0 transition-all duration-700 ease-out ${
                    isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
                >
                  <div className="h-full p-5 sm:p-6 rounded-xl border-2 border-amber-500/40 bg-amber-500/5 hover:border-amber-500/60 hover:bg-amber-500/[0.07] transition-colors duration-300">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-amber-500 mb-4">
                      Assumptions
                    </h4>
                    <ul className="space-y-3">
                      {slide.assumptions.map((assumption, index) => (
                        <li 
                          key={index}
                          className="text-sm text-neutral-300 leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/70 flex-shrink-0" />
                          {assumption}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right column - Discovery question cards */}
                <div className="lg:w-3/5 flex-1">
                  <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                    {slide.cards.map((card, index) => (
                      <div
                        key={card.id}
                        className={`transition-all duration-700 ease-out ${
                          isVisible 
                            ? "opacity-100 translate-y-0" 
                            : "opacity-0 translate-y-8"
                        }`}
                        style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
                      >
                        <AccordionItem
                          value={card.id}
                          className={`border border-amber-500/30 border-l-2 ${card.borderColor} bg-amber-500/5 rounded-xl overflow-hidden`}
                        >
                          <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 hover:no-underline hover:bg-amber-500/[0.03] [&>svg]:hidden">
                            <div className="flex flex-col gap-2 sm:gap-3 w-full text-left">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500">
                                Discovery Question #{index + 1}
                              </span>
                              {/* Question text with subtle accent */}
                              <div className="relative pl-3 sm:pl-4 py-2 sm:py-3 bg-white/[0.01] rounded-r-lg border-l border-amber-500/25">
                                <span className="text-sm text-neutral-300 font-normal leading-relaxed">
                                  {card.question}
                                </span>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                            <div className="pt-2 border-t border-neutral-800 mt-2">
                              <p className="text-sm font-semibold text-neutral-300 mb-3 mt-4">
                                {card.revealTitle}
                              </p>
                              <ul className="space-y-3">
                                {card.bullets.map((bullet, bulletIndex) => (
                                  <li 
                                    key={bulletIndex} 
                                    className="text-sm text-neutral-300 leading-relaxed flex items-start gap-2.5"
                                  >
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/70 flex-shrink-0" />
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </div>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          ) : slide.type === "fdi" ? (
            <div className="w-full flex flex-col px-4 sm:px-6 lg:px-8 py-4 lg:h-full">
              {/* Section label */}
              <div 
                className={`mb-4 transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400">
                  {slide.sectionLabel}
                </span>
              </div>

              {/* Main content - two columns */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column - Content */}
                <div
                  className={`transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
                >
                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-3">
                    {slide.title}
                  </h2>
                  
                  {/* Subtitle */}
                  <p className="text-base text-neutral-400 mb-8">
                    {slide.subtitle}
                  </p>

                  {/* Layer items */}
                  <div className="space-y-3">
                    {slide.layers.map((layer, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-4 p-4 rounded-lg border border-[#222] bg-[#111] hover:border-teal-400/30 transition-all duration-300 ${
                          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                        style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
                      >
                        {/* Icon */}
                        <div className="w-10 h-10 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0 text-teal-400">
                          {layer.icon === "globe" && <Globe size={20} />}
                          {layer.icon === "cpu" && <Cpu size={20} />}
                          {layer.icon === "database" && <Box size={20} />}
                          {layer.icon === "rocket" && <Terminal size={20} />}
                          {layer.icon === "sparkles" && <Sparkles size={20} />}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-teal-400">{layer.step}</span>
                            <span className="text-sm font-semibold text-white">{layer.title}</span>
                          </div>
                          <p className="text-sm text-neutral-400 leading-relaxed">{layer.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile FDI summary - visible only on small screens */}
                <div
                  className={`lg:hidden mt-6 p-4 bg-[#111] border border-[#222] rounded-lg transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-teal-400/10 border border-teal-400/30 flex items-center justify-center">
                      <svg viewBox="0 0 76 65" className="w-5 h-5 fill-white" aria-label="Vercel">
                        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-teal-400 block">VERCEL FDI</span>
                      <span className="text-sm text-white">Frontend Development Infrastructure</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {slide.orbitNodes?.slice(0, 6).map((node, index) => (
                      <span key={index} className="text-[10px] px-2 py-1 bg-[#0a0a0a] border border-[#333] rounded text-neutral-400">
                        {node.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Radial Diagram (desktop only) */}
                <div
                  className={`hidden lg:flex items-center justify-center transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
                >
                  <div className="relative w-[400px] h-[400px]">
                    {/* Orbital ring with glow */}
                    <div 
                      className="absolute inset-4 rounded-full border border-neutral-700/50 animate-spin-very-slow"
                      style={{ 
                        boxShadow: "0 0 40px rgba(45, 212, 191, 0.08), inset 0 0 40px rgba(45, 212, 191, 0.03)" 
                      }}
                    />
                    
                    {/* Second orbital ring */}
                    <div className="absolute inset-8 rounded-full border border-dashed border-neutral-800/50" />

                    {/* Center element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-teal-400/30 flex flex-col items-center justify-center"
                        style={{ boxShadow: "0 0 60px rgba(45, 212, 191, 0.15), 0 0 100px rgba(45, 212, 191, 0.08)" }}
                      >
                        <svg viewBox="0 0 76 65" className="w-8 h-8 fill-white mb-1" aria-label="Vercel Logo">
                          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                        </svg>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400">FDI</span>
                      </div>
                    </div>

                    {/* Orbit nodes */}
                    {slide.orbitNodes.map((node, index) => {
                      const angle = (index * 40 - 90) * (Math.PI / 180) // 360/9 = 40 degrees per node
                      const radius = 165
                      const x = Math.cos(angle) * radius
                      const y = Math.sin(angle) * radius
                      
                      // Get Geist icon component for orbit node
                      const getIcon = (iconType: string) => {
                        const iconClass = "text-neutral-400 group-hover:text-teal-400 transition-colors"
                        switch (iconType) {
                          case "cdn":
                            return <Globe size={16} className={iconClass} />
                          case "isr":
                            return <RefreshCw size={16} className={iconClass} />
                          case "compute":
                            return <Activity size={16} className={iconClass} />
case "ai":
  return <Bot size={16} className={iconClass} />
  case "gateway":
                            return <Sparkles size={16} className={iconClass} />
case "sandbox":
  return <Box size={16} className={iconClass} />
case "v0":
  return <Sparkles size={16} className={iconClass} />
case "observability":
  return <BarChart3 size={16} className={iconClass} />
case "agent":
  return <Bot size={16} className={iconClass} />
                          default:
                            return <Globe size={16} className={iconClass} />
                        }
                      }
                      
                      return (
                        <div
                          key={index}
                          className={`absolute flex flex-col items-center transition-all duration-500 ${
                            isVisible ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            left: `calc(50% + ${x}px - 24px)`,
                            top: `calc(50% + ${y}px - 24px)`,
                            transitionDelay: isVisible ? `${400 + index * 50}ms` : "0ms",
                          }}
                        >
                          <div className="w-11 h-11 rounded-lg bg-[#141414] border border-[#2a2a2a] hover:border-teal-400/40 transition-colors flex items-center justify-center group">
                            {getIcon(node.icon)}
                          </div>
                          <span className="text-[9px] text-neutral-300 mt-1.5 whitespace-nowrap font-mono">{node.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Footer - optional */}
              {slide.footer && (
                <div 
                  className={`text-center text-base text-neutral-300 pb-4 max-w-3xl mx-auto transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
                >
                  {slide.footer}
                </div>
              )}
            </div>
          ) : slide.type === "edge-delivery" ? (
            <div className="slide-container">
              {/* Section label */}
              <div 
                className={`slide-section-label transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                {slide.sectionLabel}
              </div>

              {/* Two-column layout */}
              <div className="slide-two-col">
                {/* Left side */}
                <div className="slide-col-55">
                  {/* Title */}
                  <h2 
                    className={`slide-title transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
                  >
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <p 
                    className={`text-sm text-neutral-400 mb-3 leading-relaxed transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* List items */}
                  <div className="flex flex-col gap-2 flex-1 lg:overflow-hidden lg:min-h-0">
                    {slide.listItems.map((item, index) => {
                      const getListIcon = (iconType: string) => {
                        switch (iconType) {
                          case "globe":
                            return <Globe size={18} className="text-teal-400" />
                          case "refresh":
                            return <RefreshCw size={18} className="text-teal-400" />
                          case "arrows":
                            return (
                              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                <path d="M3.5 8h9M9.5 5l3 3-3 3M12.5 8h-9M6.5 11l-3-3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )
                          case "image":
                            return (
                              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                <rect x="2" y="2" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1"/>
                                <circle cx="5.5" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1"/>
                                <path d="M14 10.5l-3.5-3.5L4 13.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )
                          case "shield":
                            return (
                              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                <path d="M8 1.5l5.5 2v4.5c0 3-2.5 5.5-5.5 6.5-3-1-5.5-3.5-5.5-6.5V3.5L8 1.5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )
                          default:
                            return <Globe size={18} className="text-teal-400" />
                        }
                      }

                      return (
                        <div
                          key={index}
                          className={`bg-[#111111] border border-[#222222] rounded-lg px-3 py-2.5 flex gap-3 transition-all duration-700 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          }`}
                          style={{ transitionDelay: isVisible ? `${300 + index * 80}ms` : "0ms" }}
                        >
                          {/* Icon */}
                          <div className="flex-shrink-0 mt-0.5">
                            {getListIcon(item.icon)}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-[10px] text-teal-400 font-mono">{item.step}</span>
                              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed lg:line-clamp-2">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Right side - Interactive Caching Diagram (hidden on mobile) */}
                <div 
                  className={`hidden lg:flex lg:w-[45%] flex-col transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
                >
                  {/* Header with dropdown */}
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-white mb-2">How Caching Works</h4>
                    <select
                      value={cachingMode}
                      onChange={(e) => setCachingMode(e.target.value as "isr" | "api" | "external" | "image")}
                      className="bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-2 text-sm text-white w-full appearance-none cursor-pointer hover:border-[#444] transition-colors"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      <option value="isr">Frameworks with ISR Support</option>
                      <option value="api">APIs with Cache-Control Headers</option>
                      <option value="external">External Origins</option>
                      <option value="image">Image Optimization</option>
                    </select>
                  </div>

                  {/* Description text */}
                  <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
                    {cachingMode === "isr" && "Next.js and other frameworks use ISR to cache pre-rendered pages and update content on demand without redeploying."}
                    {cachingMode === "api" && "API routes and custom backends can cache responses in the Vercel CDN by setting Cache-Control headers."}
                    {cachingMode === "external" && "Requests proxied to external origins via rewrites can be cached in the Vercel CDN to improve performance."}
                    {cachingMode === "image" && "Vercel dynamically transforms and optimizes images, caching them on the CDN for fast delivery."}
                  </p>

                  {/* Diagram container */}
                  <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
                    {/* Close to user section */}
                    <div className="border border-[#333] rounded-lg overflow-hidden">
                      <div className="bg-[#1a1a1a] px-3 py-1.5 text-right">
                        <span className="text-[10px] text-neutral-500">Close to user</span>
                      </div>
                      <div className="p-3 flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                          <span className="text-sm text-white">Client</span>
                        </div>
                        <div className="ml-2 w-px h-3 border-l border-dashed border-neutral-600"></div>
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
                            <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M6 10h4M6 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                          <span className="text-sm text-white">PoP</span>
                        </div>
                      </div>
                    </div>

                    {/* Dotted connector */}
                    <div className="ml-4 w-px h-2 border-l border-dashed border-neutral-600"></div>

                    {/* Vercel Region section */}
                    <div className="border border-[#333] rounded-lg overflow-hidden">
                      <div className="bg-[#1a1a1a] px-3 py-1.5 text-right">
                        <span className="text-[10px] text-neutral-500">Vercel Region</span>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
                            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                            <circle cx="17" cy="8" r="1" fill="currentColor"/>
                            <path d="M6 8h6M6 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                          <div>
                            <span className="text-sm text-white font-medium">CDN Cache</span>
                            <p className="text-[10px] text-neutral-500">Global across all Vercel regions for fast delivery</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dotted connector */}
                    <div className="ml-4 w-px h-2 border-l border-dashed border-neutral-600"></div>

                    {/* Conditional sections based on mode */}
                    {(cachingMode === "isr" || cachingMode === "api") && (
                      <>
                        {/* Function Region section */}
                        <div className="border border-[#333] rounded-lg overflow-hidden">
                          <div className="bg-[#1a1a1a] px-3 py-1.5 text-right">
                            <span className="text-[10px] text-neutral-500">Function Region</span>
                          </div>
                          <div className="p-3 flex flex-col gap-1">
                            {cachingMode === "isr" && (
                              <>
                                <div className="flex items-center gap-2">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
                                    <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.5"/>
                                  </svg>
                                  <div>
                                    <span className="text-sm text-white font-medium">ISR Cache</span>
                                    <p className="text-[10px] text-neutral-500">Can be revalidated on-demand or based on time</p>
                                  </div>
                                </div>
                                <div className="ml-2 w-px h-2 border-l border-dashed border-neutral-600"></div>
                              </>
                            )}
                            <div className="flex items-center gap-2">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
                                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M8 12h3l2-4 2 8 2-4h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <span className="text-sm text-white">Vercel Function</span>
                            </div>
                            <div className="ml-2 w-px h-2 border-l border-dashed border-neutral-600"></div>
                            <div className="flex items-center gap-2">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
                                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <circle cx="17" cy="8" r="1" fill="currentColor"/>
                                <path d="M6 8h6M6 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              </svg>
                              <div>
                                <span className="text-sm text-white font-medium">Runtime Cache</span>
                                <p className="text-[10px] text-neutral-500">For data used in Vercel Functions</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4 w-px h-2 border-l border-dashed border-neutral-600"></div>
                        <div className="flex items-center gap-2 pl-3">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
                            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                          <span className="text-sm text-neutral-400">Backend</span>
                        </div>
                      </>
                    )}

                    {cachingMode === "external" && (
                      <div className="flex items-center gap-2 pl-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
                          <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        <span className="text-sm text-neutral-400">External Origin</span>
                      </div>
                    )}

                    {cachingMode === "image" && (
                      <>
                        {/* Image Cache Region section */}
                        <div className="border border-[#333] rounded-lg overflow-hidden">
                          <div className="bg-[#1a1a1a] px-3 py-1.5 text-right">
                            <span className="text-[10px] text-neutral-500">Image Cache Region</span>
                          </div>
                          <div className="p-3">
                            <div className="flex items-center gap-2">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              <div>
                                <span className="text-sm text-white font-medium">Image Cache</span>
                                <p className="text-[10px] text-neutral-500">Durable cache for optimized images to avoid re-processing</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4 w-px h-2 border-l border-dashed border-neutral-600"></div>
                        <div className="flex items-center gap-2 pl-3">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neutral-400">
                            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                          <span className="text-sm text-neutral-400">Source Image</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p 
                className={`text-center text-neutral-500 text-xs lg:text-sm mt-auto pt-2 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
              >
                {slide.footerText}
              </p>
            </div>
          ) : slide.type === "app-compute" ? (
            <div className="slide-container">
              {/* Section label */}
              <div
                className={`slide-section-label transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                {slide.sectionLabel}
              </div>
              
              {/* Two-column layout */}
              <div className="slide-two-col">
                {/* Left column */}
                <div className="slide-col-50">
                  {/* Title */}
                  <h2 
                    className={`slide-title transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
                  >
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <p 
                    className={`text-xs lg:text-sm text-neutral-400 mb-3 leading-relaxed transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* List items */}
                  <div className="flex flex-col gap-3">
                    {slide.listItems.map((item, index) => {
                      const getListIcon = (iconType: string) => {
                        switch (iconType) {
                          case "code":
                            return (
                              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                <path d="M5.5 4L2 8l3.5 4M10.5 4L14 8l-3.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )
                          case "zap":
                            return (
                              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                <path d="M8.5 1L3 9h4.5l-1 6L13 7H8.5l1-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )
                          case "clock":
                            return (
                              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M8 4.5V8l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )
                          default:
                            return <Globe size={20} className="text-teal-400" />
                        }
                      }

                      return (
                        <div
                          key={index}
                          className={`bg-[#111111] border border-[#222222] rounded-lg px-4 py-3 flex gap-4 transition-all duration-700 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          }`}
                          style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {getListIcon(item.icon)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] text-teal-400 font-mono">{item.step}</span>
                              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Stats as inline badges below list items */}
                  <div 
                    className={`flex gap-3 mt-4 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
                  >
                    <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded px-3 py-2 flex-1">
                      <span className="text-[10px] text-neutral-500 leading-tight block">{slide.stats.left}</span>
                    </div>
                    <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded px-3 py-2 flex-1">
                      <span className="text-[10px] text-neutral-500 leading-tight block">{slide.stats.right}</span>
                    </div>
                  </div>
                </div>

                {/* Right column - Before/After diagrams */}
                <div className="hidden lg:flex lg:w-1/2 flex-col justify-start pt-10 gap-3 overflow-hidden">
                  {/* TODAY - Monolith diagram */}
                  <div 
                    className={`transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
                  >
                    <span className="text-[10px] tracking-widest text-amber-400 font-mono uppercase mb-1 block">TODAY</span>
                    <div className="bg-[#111111] border border-[#222222] rounded-lg p-3">
                      <div className="flex items-center justify-center gap-4">
                        <div className="flex flex-col gap-2 text-right">
                          <span className="text-[10px] text-neutral-500">Static</span>
                          <span className="text-[10px] text-neutral-500">Dynamic</span>
                          <span className="text-[10px] text-neutral-500">API</span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="w-10 h-px bg-neutral-600"></div>
                          <div className="w-10 h-px bg-neutral-600"></div>
                          <div className="w-10 h-px bg-neutral-600"></div>
                        </div>
                        <div className="bg-[#1a1a1a] border-2 border-amber-500/50 rounded-lg px-5 py-3 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
                          <span className="text-sm text-amber-400 font-medium">PHP Monolith</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-8 h-px bg-neutral-600"></div>
                          <svg width="8" height="12" viewBox="0 0 8 12" className="text-neutral-600">
                            <path d="M2 0l6 6-6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <p className="text-[10px] text-neutral-500 text-center mt-3">All requests funnel through one bottleneck</p>
                    </div>
                  </div>

                  {/* Divider arrow */}
                  <div 
                    className={`flex justify-center transition-all duration-700 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-px h-3 bg-neutral-600"></div>
                      <svg width="10" height="6" viewBox="0 0 10 6" className="text-neutral-600">
                        <path d="M5 6L0 0h10L5 6z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>

                  {/* ON VERCEL - Distributed diagram */}
                  <div 
                    className={`transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
                  >
<span className="text-[10px] tracking-widest text-teal-400 font-mono uppercase mb-1 block">ON VERCEL</span>
  <div className="bg-[#111111] border border-[#222222] rounded-lg p-3 max-h-[180px] overflow-hidden">
  {/* Build Output API label */}
  <div className="text-center mb-2">
                        <span className="text-[9px] text-neutral-500 bg-[#1a1a1a] px-2 py-1 rounded">Build Output API</span>
                      </div>
                      
                      {/* Three distributed paths */}
                      <div className="grid grid-cols-3 gap-4">
                        {/* Static path */}
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-neutral-500 mb-2">Static</span>
                          <svg className="w-8 h-8 mb-2" viewBox="0 0 32 32">
                            <path 
                              d="M16 4 L16 28" 
                              stroke="#2dd4bf" 
                              strokeWidth="1.5" 
                              strokeDasharray="4 3" 
                              fill="none"
                              style={{ animation: "dashFlow 2s linear infinite" }}
                            />
                            <polygon points="12,24 16,30 20,24" fill="#2dd4bf" opacity="0.8"/>
                          </svg>
                          <div className="bg-[#1a1a1a] border border-teal-400/50 rounded-lg px-3 py-2 text-center w-full">
                            <span className="text-xs text-teal-400 font-medium">CDN</span>
                          </div>
                        </div>
                        {/* ISR path */}
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-neutral-500 mb-2">ISR</span>
                          <svg className="w-8 h-8 mb-2" viewBox="0 0 32 32">
                            <path 
                              d="M16 4 L16 28" 
                              stroke="#2dd4bf" 
                              strokeWidth="1.5" 
                              strokeDasharray="4 3" 
                              fill="none"
                              style={{ animation: "dashFlow 2s linear infinite 0.3s" }}
                            />
                            <polygon points="12,24 16,30 20,24" fill="#2dd4bf" opacity="0.8"/>
                          </svg>
                          <div className="bg-[#1a1a1a] border border-teal-400/50 rounded-lg px-3 py-2 text-center w-full">
                            <span className="text-xs text-teal-400 font-medium">CDN + Cache</span>
                          </div>
                        </div>
                        {/* Dynamic path */}
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-neutral-500 mb-2">Dynamic</span>
                          <svg className="w-8 h-8 mb-2" viewBox="0 0 32 32">
                            <path 
                              d="M16 4 L16 28" 
                              stroke="#2dd4bf" 
                              strokeWidth="1.5" 
                              strokeDasharray="4 3" 
                              fill="none"
                              style={{ animation: "dashFlow 2s linear infinite 0.6s" }}
                            />
                            <polygon points="12,24 16,30 20,24" fill="#2dd4bf" opacity="0.8"/>
                          </svg>
                          <div className="bg-[#1a1a1a] border border-teal-400/50 rounded-lg px-3 py-2 text-center w-full">
                            <span className="text-xs text-teal-400 font-medium">Fluid Compute</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-neutral-500 text-center mt-3">Requests route to optimal compute automatically</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
) : slide.type === "devex" ? (
            <div className="slide-container">
              {/* Section label */}
              <div
                className={`slide-section-label transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                {slide.sectionLabel}
              </div>
              
              {/* Two-column layout */}
              <div className="slide-two-col">
                {/* Left side */}
                <div className="slide-col-55">
                  {/* Title */}
                  <h2 
                    className={`slide-title transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
                  >
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <p 
                    className={`text-xs lg:text-sm text-neutral-400 mb-3 leading-relaxed transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* List items */}
                  <div className="flex flex-col gap-1.5">
                      {slide.listItems.map((item, index) => {
                        const getDevExIcon = (iconType: string) => {
                          switch (iconType) {
                            case "eye":
                              return (
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                  <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
                                </svg>
                              )
                            case "rotate":
                              return (
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                  <path d="M1 4v4h4M15 12V8h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M2.6 10a6 6 0 0 0 10.8 0M13.4 6a6 6 0 0 0-10.8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )
                            case "gitbranch":
                              return (
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                  <circle cx="4" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                                  <circle cx="4" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                                  <circle cx="12" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                                  <path d="M4 5.5v5M10.5 6H7a2 2 0 0 0-2 2v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                              )
                            case "message":
                              return (
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                  <path d="M14 10a1 1 0 0 1-1 1H4l-2 2V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )
                            case "activity":
                              return (
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                  <path d="M14.5 8h-3l-2 6-4-12-2 6h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )
                            default:
                              return <Globe size={18} className="text-teal-400" />
                          }
                        }

                        return (
                          <div
                            key={index}
                            className={`bg-[#111111] border border-[#222222] rounded-lg px-3 py-2 flex gap-3 transition-all duration-700 ${
                              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                            }`}
                            style={{ transitionDelay: isVisible ? `${300 + index * 80}ms` : "0ms" }}
                          >
                            {/* Icon */}
                            <div className="flex-shrink-0 mt-0.5">
                              {getDevExIcon(item.icon)}
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[10px] text-teal-400 font-mono">{item.step}</span>
                                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                              </div>
                              <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        )
                      })}
                  </div>

                  {/* Inline stats badges */}
                  <div
                    className={`flex gap-3 mt-1 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
                  >
                    <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded px-3 py-1.5 flex-1">
                      <span className="text-[10px] text-neutral-500 leading-tight block">{slide.stats.left}</span>
                    </div>
                    <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded px-3 py-1.5 flex-1">
                      <span className="text-[10px] text-neutral-500 leading-tight block">{slide.stats.right}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile workflow summary - visible only on small screens */}
                <div
                  className={`lg:hidden mt-4 p-3 bg-[#111] border border-[#222] rounded-lg transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-1 bg-[#0a0a0a] border border-[#333] rounded text-neutral-400">Push</span>
                      <span className="text-teal-400/50">→</span>
                      <span className="text-[10px] px-2 py-1 bg-[#0a0a0a] border border-[#333] rounded text-neutral-400">Preview</span>
                      <span className="text-teal-400/50">→</span>
                      <span className="text-[10px] px-2 py-1 bg-[#0a0a0a] border border-[#333] rounded text-neutral-400">Review</span>
                      <span className="text-teal-400/50">→</span>
                      <span className="text-[10px] px-2 py-1 bg-teal-400/10 border border-teal-400/30 rounded text-teal-400">Production</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-neutral-500 mt-2 text-center">Push to Production in minutes. Rollback in seconds.</p>
                </div>

                {/* Right side - Deploy Lifecycle Timeline (desktop only) */}
                <div className="hidden lg:flex lg:w-[45%] flex-col items-center justify-start pt-12">
                    <div 
                      className={`w-full flex flex-col items-center transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
                    >
                      {/* Main timeline row */}
                      <div className="flex items-center gap-1 w-full justify-center">
                        {/* Push */}
                        <div className="flex flex-col items-center">
                          <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg px-3 py-2 flex flex-col items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-400 mb-1">
                              <circle cx="8" cy="8" r="2" fill="currentColor"/>
                              <path d="M8 2v4M8 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <span className="text-[10px] text-neutral-400">Push</span>
                          </div>
                        </div>

                        {/* Connector */}
                        <div className="w-4 h-px bg-teal-400/50"></div>

                        {/* Preview */}
                        <div className="flex flex-col items-center">
                          <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg px-3 py-2 flex flex-col items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-400 mb-1">
                              <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.5"/>
                              <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span className="text-[10px] text-neutral-400">Preview</span>
                            <span className="text-[9px] text-teal-400">30-90s</span>
                          </div>
                        </div>

                        {/* Connector */}
                        <div className="w-4 h-px bg-teal-400/50"></div>

                        {/* Review */}
                        <div className="flex flex-col items-center">
                          <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg px-3 py-2 flex flex-col items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-400 mb-1">
                              <path d="M14 10a1 1 0 0 1-1 1H4l-2 2V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7z" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span className="text-[10px] text-neutral-400">Review</span>
                            <span className="text-[9px] text-teal-400">Toolbar</span>
                          </div>
                        </div>

                        {/* Connector */}
                        <div className="w-4 h-px bg-teal-400/50"></div>

                        {/* Merge */}
                        <div className="flex flex-col items-center">
                          <div className="bg-[#141414] border border-[#2a2a2a] rounded-lg px-3 py-2 flex flex-col items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-400 mb-1">
                              <circle cx="4" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                              <circle cx="4" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                              <circle cx="12" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M4 5.5v5M5.5 5l5 2.5M5.5 11l5-2.5" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span className="text-[10px] text-neutral-400">Merge</span>
                          </div>
                        </div>

                        {/* Connector */}
                        <div className="w-4 h-px bg-teal-400/50"></div>

                        {/* Production - highlighted */}
                        <div className="flex flex-col items-center relative">
                          <div className="bg-[#141414] border border-teal-400/60 rounded-lg px-3 py-2 flex flex-col items-center shadow-[0_0_12px_rgba(45,212,191,0.2)]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-teal-400 mb-1">
                              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                              <path d="M2.5 8h11M8 2.5a9.5 9.5 0 0 1 2.5 5.5 9.5 9.5 0 0 1-2.5 5.5M8 2.5a9.5 9.5 0 0 0-2.5 5.5 9.5 9.5 0 0 0 2.5 5.5" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            <span className="text-[10px] text-teal-400 font-medium">Production</span>
                          </div>
                          
                          {/* Dashed connector down to Rollback */}
                          <svg className="h-6 w-2 my-1" viewBox="0 0 8 24">
                            <line x1="4" y1="0" x2="4" y2="24" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>
                          </svg>
                          
                          {/* Rollback - safety net */}
                          <div className="bg-[#141414] border border-dashed border-teal-400/40 rounded-lg px-3 py-2 flex flex-col items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-teal-400 mb-1">
                              <path d="M1 4v4h4M15 12V8h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2.6 10a6 6 0 0 0 10.8 0M13.4 6a6 6 0 0 0-10.8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-[10px] text-teal-400">Rollback</span>
                            <span className="text-[9px] text-teal-400/80">seconds</span>
                          </div>
                        </div>
                      </div>

                      {/* Timeline label */}
                      <p className="text-[10px] text-neutral-500 mt-4 text-center">Push to Production in minutes. Rollback in seconds.</p>
                    </div>
                  </div>
                </div>
              </div>
          ) : slide.type === "ai" ? (
            <div className="slide-container">
              {/* Section label */}
              <div
                className={`slide-section-label transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                {slide.sectionLabel}
              </div>
              
              {/* Two-column layout */}
              <div className="slide-two-col">
                {/* Left side */}
                <div className="slide-col-50">
                  {/* Title */}
                  <h2 
                    className={`slide-title transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                      style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
                    >
                      {slide.title}
                    </h2>

                    {/* Subtitle */}
                    <p 
                      className={`text-xs text-neutral-400 mb-3 leading-relaxed transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
                    >
                      {slide.subtitle}
                    </p>

                    {/* Product list items */}
                    <div className="flex flex-col gap-2 mb-3">
                      {slide.products.map((item, index) => {
                        const getAIProductIcon = (iconType: string) => {
                          switch (iconType) {
                            case "code":
                              return (
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                  <path d="M5.5 4L2 8l3.5 4M10.5 4L14 8l-3.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )
                            case "gitbranch":
                              return (
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                  <circle cx="4" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                                  <circle cx="4" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                                  <circle cx="12" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                                  <path d="M4 5.5v5M10.5 6H7a2 2 0 0 0-2 2v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                              )
                            case "shield":
                              return (
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                  <path d="M8 1.5L2 4v4c0 3.5 2.5 6 6 7.5 3.5-1.5 6-4 6-7.5V4L8 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )
                            case "sparkles":
                              return (
                                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                  <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.5 3.5l1.5 1.5M11 11l1.5 1.5M3.5 12.5l1.5-1.5M11 5l1.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                  <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
                                </svg>
                              )
                            default:
                              return <Globe size={18} className="text-teal-400" />
                          }
                        }

                        return (
                          <div
                            key={index}
                            className={`bg-[#111111] border border-[#222222] rounded-lg px-3 py-2 flex gap-3 transition-all duration-700 ${
                              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                            }`}
                            style={{ transitionDelay: isVisible ? `${300 + index * 70}ms` : "0ms" }}
                          >
                            {/* Icon */}
                            <div className="flex-shrink-0 mt-0.5">
                              {getAIProductIcon(item.icon)}
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[10px] text-teal-400 font-mono">{item.step}</span>
                                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                              </div>
                              <p className="text-[11px] text-neutral-400 leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Code snippet */}
                    <div 
                      className={`bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-3 font-mono text-[10px] leading-relaxed overflow-hidden transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
                    >
                      <pre className="text-neutral-300 whitespace-pre-wrap">
                        <span className="text-violet-400">tool</span>
                        <span className="text-neutral-300">{"({"}</span>
                        {"\n  "}
                        <span className="text-neutral-400">description</span>
                        <span className="text-neutral-300">: </span>
                        <span className="text-green-400">{`'Look up a booking by confirmation number'`}</span>
                        <span className="text-neutral-300">,</span>
                        {"\n  "}
                        <span className="text-neutral-400">parameters</span>
                        <span className="text-neutral-300">: </span>
                        <span className="text-teal-400">z</span>
                        <span className="text-neutral-300">.object({"{"}</span>
                        {"\n    "}
                        <span className="text-neutral-400">confirmationNumber</span>
                        <span className="text-neutral-300">: </span>
                        <span className="text-teal-400">z</span>
                        <span className="text-neutral-300">.string()</span>
                        {"\n  "}
                        <span className="text-neutral-300">{"})"}</span>
                        <span className="text-neutral-300">,</span>
                        {"\n  "}
                        <span className="text-violet-400">execute</span>
                        <span className="text-neutral-300">: </span>
                        <span className="text-violet-400">async</span>
                        <span className="text-neutral-300">{" ({ "}</span>
                        <span className="text-neutral-400">confirmationNumber</span>
                        <span className="text-neutral-300">{" }) => {"}</span>
                        {"\n    "}
                        <span className="text-violet-400">return</span>
                        <span className="text-neutral-300"> </span>
                        <span className="text-violet-400">await</span>
                        <span className="text-neutral-300"> bookingAPI.</span>
                        <span className="text-teal-400">lookup</span>
                        <span className="text-neutral-300">(confirmationNumber)</span>
                        {"\n  "}
                        <span className="text-neutral-300">{"}"}</span>
                        {"\n"}
                        <span className="text-neutral-300">{"})"}</span>
                      </pre>
                    </div>

                    {/* Inline stats badges */}
                    <div 
                      className={`flex gap-2 mt-2 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
                    >
                      <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded px-2 py-1.5 flex-1">
                        <span className="text-[9px] text-neutral-500 leading-tight block">{slide.stats.left}</span>
                      </div>
                      <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded px-2 py-1.5 flex-1">
                        <span className="text-[9px] text-neutral-500 leading-tight block">{slide.stats.right}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Stacked Use Cases */}
                  <div className="w-full lg:w-[50%] flex flex-col justify-start pt-0 lg:pt-16">
                    <div 
                      className={`transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
                    >
                      <span className="text-[10px] tracking-widest text-teal-400 font-mono uppercase mb-3 block">
                        OPPORTUNITIES
                      </span>
                      <TooltipProvider delayDuration={200}>
                        <div className="flex flex-col gap-2">
                          {/* All use cases stacked */}
                          {[...slide.useCasesTop, ...slide.useCasesBottom].map((useCase, index) => {
                            const getUseCaseIcon = (iconType: string) => {
                              switch (iconType) {
                                case "message":
                                  return (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                      <path d="M14 10a1 1 0 0 1-1 1H4l-2 2V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  )
                                case "plane":
                                  return (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                      <path d="M14.5 1.5l-6 6M14.5 1.5l-4 13-2-5-5-2 13-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  )
                                case "filetext":
                                  return (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                      <path d="M9 1H3.5A1.5 1.5 0 0 0 2 2.5v11A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V5L9 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M9 1v4h5M5 8h6M5 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  )
                                case "testtube":
                                  return (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-teal-400">
                                      <path d="M6 2v8.5a3.5 3.5 0 1 0 4 0V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M4.5 2h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                      <path d="M6 7h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                  )
                                default:
                                  return <Globe size={16} className="text-teal-400" />
                              }
                            }

                            const tooltipContent: Record<string, string> = {
                              "Customer Service Agent": "Vercel reduced their own support tickets by 31% using this pattern. At $7-8 per live call, that's direct cost avoidance at scale.",
                              "Trip Management Agent": "Target: 40% reduction in human interaction during disruptions. One agent handles 200 simultaneous rebookings without scaling headcount.",
                              "AI Content at Scale": "~$1,000 for 10,000 unique listings vs $500K+ hand-written. Ruggable saw 300% increase in organic search clicks.",
                              "AI Testing Agents": "200-test suite in under 5 minutes vs 3 hours traditional. ~$0.34 per test run in Sandbox compute."
                            }

                            return (
                              <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                  <div 
                                    className={`bg-[#111111] border border-[#222222] rounded-lg px-4 py-3 flex gap-3 transition-all duration-700 cursor-pointer hover:border-teal-400/40 hover:bg-[#151515] ${
                                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                                    }`}
                                    style={{ transitionDelay: isVisible ? `${450 + index * 80}ms` : "0ms" }}
                                  >
                                    <div className="flex-shrink-0 mt-0.5">
                                      {getUseCaseIcon(useCase.icon)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-sm font-semibold text-white mb-0.5">{useCase.title}</h4>
                                      <p className="text-xs text-neutral-400 leading-relaxed">{useCase.description}</p>
                                    </div>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent 
                                  side="left" 
                                  className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-gray-300 max-w-xs"
                                  sideOffset={8}
                                >
                                  {tooltipContent[useCase.title] || ""}
                                </TooltipContent>
                              </Tooltip>
                            )
                          })}
                        </div>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </div>
          ) : slide.type === "business-case" ? (
            <div className="slide-container">
              {/* Section label */}
              <div 
                className={`slide-section-label transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                {slide.sectionLabel}
              </div>

              {/* Title */}
              <h2 
                className={`slide-title transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
              >
                {slide.title}
              </h2>

              {/* Subtitle */}
              <p 
                className={`text-sm text-neutral-400 mb-4 leading-relaxed max-w-3xl transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                {slide.subtitle}
              </p>

              {/* Business case rows */}
              <div className="flex flex-col gap-3">
                {slide.rows.map((row, index) => {
                  const getRowIcon = (iconType: string) => {
                    switch (iconType) {
case "analytics":
  return <BarChart3 className="text-amber-400 w-[18px] h-[18px]" />
  case "fluid":
  return <Activity className="text-amber-400 w-[18px] h-[18px]" />
  case "terminal":
  return <Terminal className="text-amber-400 w-[18px] h-[18px]" />
  case "sparkles":
  return <Sparkles className="text-amber-400 w-[18px] h-[18px]" />
  default:
  return <BarChart3 className="text-amber-400 w-[18px] h-[18px]" />
                    }
                  }

                  return (
                    <div
                      key={index}
                      className={`bg-[#111111] border border-[#222222] rounded-lg p-3 lg:p-4 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
                    >
                      {/* Metric name row on mobile, inline on desktop */}
                      <div className="flex items-center gap-2 mb-2 lg:mb-0 lg:hidden">
                        <div>{getRowIcon(row.icon)}</div>
                        <span className="text-sm font-semibold text-white">{row.metric}</span>
                      </div>
                      
                      {/* Desktop layout */}
                      <div className="hidden lg:flex gap-4">
                        {/* Metric name column */}
                        <div className="w-[18%] flex items-start gap-2 flex-shrink-0">
                          <div className="mt-0.5">{getRowIcon(row.icon)}</div>
                          <span className="text-sm font-semibold text-white">{row.metric}</span>
                        </div>

                        {/* Current state column */}
                        <div className="w-[40%] flex-shrink-0">
                          <span className="text-[10px] tracking-widest text-amber-400 font-mono uppercase block mb-1">CURRENT STATE</span>
                          <p className="text-xs text-neutral-400 leading-relaxed">{row.current}</p>
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center px-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neutral-600">
                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>

                        {/* Goal state column */}
                        <div className="flex-1">
                          <span className="text-[10px] tracking-widest text-teal-400 font-mono uppercase block mb-1">GOAL STATE</span>
                          <p className="text-xs text-white leading-relaxed">
                            {row.goal}
                            {row.proofPoint && (
                              <span className="text-teal-400 ml-1">{row.proofPoint}</span>
                            )}
                          </p>
                        </div>
                      </div>
                      
                      {/* Mobile layout - stacked */}
                      <div className="lg:hidden grid grid-cols-2 gap-3">
                        <div>
                          <span className="text-[10px] tracking-widest text-amber-400 font-mono uppercase block mb-1">CURRENT</span>
                          <p className="text-xs text-neutral-400 leading-relaxed">{row.current}</p>
                        </div>
                        <div>
                          <span className="text-[10px] tracking-widest text-teal-400 font-mono uppercase block mb-1">GOAL</span>
                          <p className="text-xs text-white leading-relaxed">
                            {row.goal}
                            {row.proofPoint && (
                              <span className="text-teal-400 ml-1">{row.proofPoint}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
) : slide.type === "reveal" ? (
            <div className="slide-container">
              {/* Section label */}
              <div
                className={`flex items-center justify-between mb-2 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                <span className="slide-section-label mb-0">{slide.sectionLabel}</span>
                <svg width="18" height="18" viewBox="0 0 76 65" fill="currentColor" className="text-white"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/></svg>
              </div>

              {/* Title */}
              <h2
                className={`slide-title transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
              >
                {slide.title}
              </h2>

    {/* Subtitle */}
    <p
      className={`text-sm text-neutral-400 mb-4 max-w-3xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
    >
      {slide.subtitle}
    </p>

    {/* Lighthouse Comparison - Fixed height approach */}
    <div
      className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-6 items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
    >
      {/* Current Site */}
      <div className="flex flex-col">
        <span className="text-[10px] tracking-widest text-amber-400 font-mono uppercase mb-2">CURRENT SITE</span>
        {/* Browser Frame */}
        <div className="rounded-lg overflow-hidden border border-amber-500/30 bg-[#141414]">
          {/* Browser Chrome */}
          <div className="bg-[#1a1a1a] px-3 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>
            <div className="flex items-center gap-2 text-neutral-600">
              <span className="text-sm">←</span>
              <span className="text-sm">→</span>
            </div>
            <div className="flex-1 bg-[#0a0a0a] rounded px-3 py-1 text-sm text-neutral-500">
              Lighthouse Report
            </div>
          </div>
          {/* Screenshot - fixed height */}
          <div className="h-[160px] sm:h-[200px] lg:h-[280px] overflow-hidden">
            <img 
              src={slide.lighthouseOldImage} 
              alt="Current site Lighthouse scores" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-3 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500"></span>Perf: 38</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span>A11y: 91</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500"></span>BP: 54</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span>SEO: 92</span>
        </div>
        <p className="text-xs text-neutral-500 mt-1">FCP 3.5s · LCP 4.1s · TBT 2,020ms</p>
      </div>

      {/* Arrow */}
      <div className="hidden sm:flex items-center justify-center text-teal-400 text-3xl lg:text-4xl font-light">→</div>

      {/* On Vercel */}
      <div className="flex flex-col">
        <span className="text-[10px] tracking-widest text-teal-400 font-mono uppercase mb-2">ON VERCEL</span>
        {/* Browser Frame */}
        <a 
          href={slide.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg overflow-hidden border border-teal-400/30 hover:border-teal-400 transition-colors bg-[#141414]"
        >
          {/* Browser Chrome */}
          <div className="bg-[#1a1a1a] px-3 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>
            <div className="flex items-center gap-2 text-neutral-600">
              <span className="text-sm">←</span>
              <span className="text-sm">→</span>
            </div>
            <div className="flex-1 bg-[#0a0a0a] rounded px-3 py-1 text-sm text-neutral-400">
              waymarktravel.vercel.app
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-500">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
          {/* Screenshot - fixed height */}
          <div className="h-[160px] sm:h-[200px] lg:h-[280px] overflow-hidden">
            <img 
              src={slide.lighthouseNewImage} 
              alt="Vercel site Lighthouse scores" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </a>
        <div className="flex flex-wrap gap-3 mt-3 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span>Perf: 85</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span>A11y: 91</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span>BP: 100</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span>SEO: 100</span>
        </div>
        <p className="text-xs text-neutral-500 mt-1">Built with v0 · Deployed to Vercel's edge</p>
      </div>
    </div>

    {/* Callouts */}
    <div
      className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-10 mt-4 sm:mt-6 text-sm text-teal-400 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
    >
      <span className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        2.2x faster performance
      </span>
      <span className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Built in hours, not weeks
      </span>
      <span className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        AI agent included
      </span>
    </div>

    {/* Footer */}
    <p 
      className={`text-sm text-neutral-500 text-center mt-4 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
    >
      {slide.footer}
    </p>
  </div>
) : slide.type === "next-steps" ? (
            <div className="slide-container">
              {/* Section label */}
              <div
                className={`slide-section-label transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                {slide.sectionLabel}
              </div>
              
              {/* Title */}
              <h2
                className={`slide-title transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
              >
                {slide.title}
              </h2>

              {/* Subtitle */}
              <p 
                className={`text-sm text-neutral-400 mb-4 leading-relaxed transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                {slide.subtitle}
              </p>

{/* Full-width stacked layout */}
              <div className="flex flex-col gap-3 flex-1 lg:overflow-hidden">
                
                {/* SECTION 1: Scope Card */}
                <div 
                  className={`bg-[#111] border border-[#222] rounded-lg p-4 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
                >
                  <span className="text-xs tracking-widest text-teal-400 font-mono uppercase">SCOPE</span>
                  <p className="text-sm text-white mt-2">Rebuild the frontend rendering of one high-traffic booking page in Next.js on Vercel, connected to existing booking APIs.</p>
                  <p className="text-sm text-white mt-1">Half-day AI workshop where we build the support agent with your engineering team against a staging environment.</p>
                </div>

                {/* SECTION 2: Timeline (3 cards - stack on mobile) */}
                <div 
                  className={`grid grid-cols-1 sm:grid-cols-3 gap-3 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "350ms" : "0ms" }}
                >
                  <div className="bg-[#111] border border-[#222] rounded-lg p-3">
                    <span className="text-xl font-bold text-teal-400">01</span>
                    <span className="text-xs text-teal-400 ml-2">WEEK 1</span>
                    <p className="text-sm font-semibold text-white mt-1">Build</p>
                    <p className="text-xs text-neutral-400 mt-1">Frontend rebuild and instrumentation. AI workshop with the engineering team.</p>
                  </div>
                  <div className="bg-[#111] border border-[#222] rounded-lg p-3">
                    <span className="text-xl font-bold text-teal-400">02</span>
                    <span className="text-xs text-teal-400 ml-2">WEEK 2</span>
                    <p className="text-sm font-semibold text-white mt-1">Measure</p>
                    <p className="text-xs text-neutral-400 mt-1">Route traffic via Edge Middleware. Collect real-user performance data through Speed Insights.</p>
                  </div>
                  <div className="bg-[#111] border border-[#222] rounded-lg p-3">
                    <span className="text-xl font-bold text-teal-400">03</span>
                    <span className="text-xs text-teal-400 ml-2">WEEK 3</span>
                    <p className="text-sm font-semibold text-white mt-1">Prove</p>
                    <p className="text-xs text-neutral-400 mt-1">Analysis and readout. Compare performance, measure conversion delta, present findings.</p>
                  </div>
                </div>

                {/* SECTION 3: Success Criteria */}
                <div 
                  className={`bg-[#111] border border-[#222] rounded-lg p-3 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
                >
                  <span className="text-xs tracking-widest text-teal-400 font-mono uppercase flex items-center gap-2">
                    <Target size={14} className="text-teal-400" />
                    SUCCESS CRITERIA
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3">
                    <div className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      <p className="text-sm text-neutral-400">LCP under 2.5s (from 4.1s) with real-user data</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      <p className="text-sm text-neutral-400">Lighthouse Performance above 80 (from 38)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      <p className="text-sm text-neutral-400">AI agent resolves 3/5 sample support scenarios</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
                      <p className="text-sm text-neutral-400">More iterations shipped vs 3-week monolith sprint</p>
                    </div>
                  </div>
                </div>

                {/* SECTION 4: Commitments (2 cards - stack on mobile) */}
                <div 
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
                >
                  <div className="bg-[#111] border border-amber-500/30 rounded-lg p-3">
                    <span className="text-xs tracking-widest text-amber-400 font-mono uppercase flex items-center gap-2">
                      <Users size={14} className="text-amber-400" />
                      WAYMARK COMMITS
                    </span>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-neutral-400 flex items-start gap-2"><span className="text-amber-400">•</span>1-2 frontend engineers for the rebuild</p>
                      <p className="text-sm text-neutral-400 flex items-start gap-2"><span className="text-amber-400">•</span>API access to booking system</p>
                      <p className="text-sm text-neutral-400 flex items-start gap-2"><span className="text-amber-400">•</span>Approval to route test traffic</p>
                      <p className="text-sm text-neutral-400 flex items-start gap-2"><span className="text-amber-400">•</span>1 engineering lead for AI workshop</p>
                    </div>
                  </div>
                  <div className="bg-[#111] border border-teal-400/30 rounded-lg p-3">
                    <span className="text-xs tracking-widest text-teal-400 font-mono uppercase flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 76 65" fill="currentColor" className="text-teal-400"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/></svg>
                      VERCEL PROVIDES
                    </span>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-neutral-400 flex items-start gap-2"><span className="text-teal-400">•</span>Enterprise evaluation access</p>
                      <p className="text-sm text-neutral-400 flex items-start gap-2"><span className="text-teal-400">•</span>Dedicated SE support throughout</p>
                      <p className="text-sm text-neutral-400 flex items-start gap-2"><span className="text-teal-400">•</span>AI SDK implementation guidance</p>
                      <p className="text-sm text-neutral-400 flex items-start gap-2"><span className="text-teal-400">•</span>Compute credits for POV period</p>
                    </div>
                  </div>
                </div>

                {/* Footer quote */}
                <p 
                  className={`text-sm text-neutral-500 italic text-center mt-auto transition-all duration-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
                >
                  {slide.footer}
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Content slide title */}
              <h2 
                className={`text-3xl md:text-4xl font-semibold tracking-tight text-white font-sans mb-8 transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
              >
                {slide.title}
              </h2>

              {/* Bullet points */}
              <ul className="space-y-4 text-left">
                {slide.bullets?.map((bullet, index) => (
                  <li
                    key={index}
                    className={`text-lg md:text-xl text-neutral-400 font-sans flex items-start gap-4 transition-all duration-700 ease-out ${
                      isVisible 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" }}
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

{/* Navigation bar - arrows + dots */}
      <div
        className="fixed left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 bg-neutral-900/90 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border border-neutral-800/50 z-50"
        style={{ bottom: "max(1rem, env(safe-area-inset-bottom, 0px))" }}
      >
        {/* Previous arrow */}
        <button
          onClick={goToPrev}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
          className={`p-1.5 sm:p-2 rounded-full transition-all duration-200 touch-manipulation ${
            currentSlide === 0 
              ? "text-neutral-600 cursor-not-allowed" 
              : "text-neutral-400 hover:text-white hover:bg-white/10"
          }`}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="p-1.5 sm:p-1 -m-0.5 sm:m-0 touch-manipulation"
            >
              <span className={`block rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-4 sm:w-6 h-1.5 sm:h-2 bg-white"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-neutral-600 hover:bg-neutral-400"
              }`} />
            </button>
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={goToNext}
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
          className={`p-1.5 sm:p-2 rounded-full transition-all duration-200 touch-manipulation ${
            currentSlide === slides.length - 1 
              ? "text-neutral-600 cursor-not-allowed" 
              : "text-neutral-400 hover:text-white hover:bg-white/10"
          }`}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Keyboard hint - hidden on mobile */}
      <div
        className="hidden sm:block fixed right-4 sm:right-6 text-neutral-600 text-[10px] sm:text-xs font-mono"
        style={{ bottom: "max(1rem, env(safe-area-inset-bottom, 0px))" }}
      >
        Use arrow keys to navigate
      </div>

    </main>
  )
}
