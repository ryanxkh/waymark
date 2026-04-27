// Slide data for the Waymark presentation.
// All copy is preserved verbatim from the original deck.

export interface TitleSlide {
  id: number
  type: "title"
  logo: boolean
  title: string
  subtitle: string
  author: string
}

export interface DiscoverySlide {
  id: number
  type: "discovery"
  sectionLabel: string
  title: string
  assumptions: string[]
  cards: {
    id: string
    question: string
    revealTitle: string
    bullets: string[]
  }[]
}

export interface FDILayerItem {
  step: string
  title: string
  description: string
  icon: "globe" | "cpu" | "database" | "rocket" | "sparkles"
}

export interface OrbitNode {
  name: string
  icon: string
}

export interface FDISlide {
  id: number
  type: "fdi"
  sectionLabel: string
  title: string
  subtitle: string
  layers: FDILayerItem[]
  orbitNodes: OrbitNode[]
  footer?: string
}

export interface EdgeDeliveryListItem {
  step: string
  icon: string
  title: string
  description: string
}

export interface EdgeDeliverySlide {
  id: number
  type: "edge-delivery"
  sectionLabel: string
  title: string
  subtitle: string
  listItems: EdgeDeliveryListItem[]
  footerText: string
}

export interface AppComputeListItem {
  step: string
  icon: string
  title: string
  description: string
}

export interface AppComputeSlide {
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

export interface DevExListItem {
  step: string
  icon: string
  title: string
  description: string
}

export interface DevExSlide {
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

export interface AIProductItem {
  step: string
  icon: string
  title: string
  description: string
}

export interface AIUseCaseItem {
  icon: string
  title: string
  description: string
  highlight?: boolean
}

export interface AISlide {
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

export interface BusinessCaseRow {
  icon: string
  metric: string
  current: string
  goal: string
  proofPoint?: string
}

export interface BusinessCaseSlide {
  id: number
  type: "business-case"
  sectionLabel: string
  title: string
  subtitle: string
  rows: BusinessCaseRow[]
}

export interface NextStepsSlide {
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

export interface RevealSlide {
  id: number
  type: "reveal"
  sectionLabel: string
  title: string
  subtitle: string
  demoLinkText: string
  demoUrl: string
  lighthouseOldImage: string
  lighthouseNewImage: string
  demoScreenshot: string
  footer: string
}

export type Slide =
  | TitleSlide
  | DiscoverySlide
  | FDISlide
  | EdgeDeliverySlide
  | AppComputeSlide
  | DevExSlide
  | AISlide
  | BusinessCaseSlide
  | NextStepsSlide
  | RevealSlide

export const slides: Slide[] = [
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
        question:
          "When you report to the board on how the site is performing, what are the three or four numbers you lead with? Which one is under the most pressure?",
        revealTitle: "What this reveals:",
        bullets: [
          "Establishes Current State",
          "Defines Negative Consequences",
          "Surfaces Goal State",
        ],
      },
      {
        id: "desired-state",
        question:
          "You mentioned wanting AI in trip management and customer service. How are those being handled today, and what does it look like when AI is actually working?",
        revealTitle: "What this reveals:",
        bullets: [
          "Establishes Current State of AI",
          "Defines Negative Consequences of not having AI",
          "Surfaces Goal State and leads to Required Capabilities",
        ],
      },
      {
        id: "held-back",
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
      {
        step: "01",
        title: "Edge + Delivery",
        description: "Vercel CDN, ISR, Edge Middleware, Image Optimization, Vercel Firewall",
        icon: "globe",
      },
      {
        step: "02",
        title: "Application + Compute",
        description: "Next.js, Vercel Functions, Fluid Compute, Streaming SSR",
        icon: "cpu",
      },
      {
        step: "03",
        title: "Developer Experience",
        description:
          "Preview Deployments, Instant Rollback, Rolling Releases, Vercel Toolbar, Observability, Vercel Agent",
        icon: "rocket",
      },
      {
        step: "04",
        title: "AI Platform",
        description: "AI SDK, AI Gateway, Vercel Sandbox, v0",
        icon: "sparkles",
      },
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
    subtitle:
      "Today CloudFront caches your static assets and everything dynamic bypasses it, hitting the origin on every request. Vercel's CDN reads the Build Output API at deploy time and knows which routes are static, which use ISR, and which are dynamic before a single request arrives.",
    listItems: [
      {
        step: "01",
        icon: "globe",
        title: "Vercel CDN",
        description:
          "Framework-aware caching across 126 PoPs. The CDN knows which routes to cache because it reads the Build Output API at deploy time.",
      },
      {
        step: "02",
        icon: "refresh",
        title: "ISR + Request Collapsing",
        description:
          "Cached pages with 300ms global purge. 1,000 concurrent requests to the same page become 1 origin call per region.",
      },
      {
        step: "03",
        icon: "arrows",
        title: "Edge Middleware",
        description:
          "Runs at every PoP before the cache layer. Locale detection, migration routing, A/B testing with built-in geolocation.",
      },
      {
        step: "04",
        icon: "image",
        title: "Image Optimization",
        description:
          "Auto WebP/AVIF conversion, lazy loading, layout shift prevention. Cached at CDN for up to 31 days.",
      },
      {
        step: "05",
        icon: "shield",
        title: "Vercel Firewall",
        description:
          "Automatic DDoS mitigation on all plans. WAF custom rules and bot management at the edge, before routing.",
      },
    ],
    footerText: "",
  },
  {
    id: 5,
    type: "app-compute",
    sectionLabel: "APPLICATION + COMPUTE",
    title: "Optimized Routing",
    subtitle:
      "Every request funnels through one PHP monolith today. With Next.js on Vercel, the framework classifies each route and the platform provisions the right compute automatically.",
    listItems: [
      {
        step: "01",
        icon: "code",
        title: "Next.js (Server Components)",
        description:
          "Server-rendered HTML sent directly to the browser. No blank page waiting for JavaScript to load.",
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
        description:
          "Response streams to the browser as it renders. The traveler sees the page building in real-time instead of waiting for a blank screen to fully load.",
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
    subtitle:
      "Deploys are infrequent because the risk is high and coordination is heavy. When shipping is fast and rollback is instant, frequency becomes a safe default.",
    listItems: [
      {
        step: "01",
        icon: "eye",
        title: "Preview Deployments",
        description:
          "Every git push creates a live, production-identical URL in 30-90 seconds. Stakeholders review the real thing.",
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
        description:
          "Visual comments pinned to elements, feature flag toggling, and draft mode for editors on the live URL.",
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
    subtitle:
      "The AI SDK, AI Gateway, and Sandbox give your team the tools to ship AI features in a fast, and secure way.",
    products: [
      {
        step: "01",
        icon: "code",
        title: "AI SDK",
        description:
          "Tool calling, multi-step agent loops, and human-in-the-loop approval built into the framework. 20M+ monthly downloads.",
      },
      {
        step: "02",
        icon: "gitbranch",
        title: "AI Gateway",
        description:
          "One API key, hundreds of models, automatic failover, zero token markup. Spend monitoring per agent.",
      },
      {
        step: "03",
        icon: "shield",
        title: "Vercel Sandbox",
        description:
          "Secure Firecracker microVMs for running AI-generated code. Credentials brokering means API keys never enter the execution environment.",
      },
      {
        step: "04",
        icon: "sparkles",
        title: "v0",
        description:
          "AI-powered app builder. Prototype the customer service chat UI or internal dashboards in hours, deploy to Vercel in one click.",
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
    subtitle: "Everything in this architecture maps back to something you told me in discovery.",
    rows: [
      {
        icon: "analytics",
        metric: "Booking Conversion",
        current:
          "1% today. Slow booking flows lead to abandoned bookings because every page rebuilds from scratch on every request.",
        goal: "Faster pages through Server Components, streaming, and ISR. Travelers see the booking form instantly.",
        proofPoint: "PAIGE: 76% conversion improvement after migrating.",
      },
      {
        icon: "fluid",
        metric: "Peak Uptime",
        current:
          "Capacity planning meetings before every peak season. Monolith buckles under concurrent load, pre-provisioning is educated guessing.",
        goal: "Request collapsing and Fluid Compute handle spikes automatically. No pre-provisioning.",
        proofPoint: "Sportswear brand: 125K visitors/hour, zero downtime.",
      },
      {
        icon: "terminal",
        metric: "Dev Velocity",
        current:
          "Weekly batched deploys through a staging environment that drifts from production. Engineers maintaining Terraform and CloudFront rules.",
        goal: "80% reduction in build-to-production time (Forrester TEI). More features are shipped per year. Helly Hansen's CDO 3x'd ad spend mid-campaign because faster A/B testing proved the ROI.",
      },
      {
        icon: "sparkles",
        metric: "AI in Production",
        current:
          "Nothing shipped. Manual customer service (5-10 min per inquiry), no trip management automation.",
        goal: "Four use cases ready to build to reduce spend on SEO content creation, increase booking conversion percentage, and reduce support interactions.",
      },
    ],
  },
  {
    id: 9,
    type: "reveal",
    sectionLabel: "NEXT STEPS",
    title: "A Quick Demo",
    subtitle:
      "Before our conversation, I built a version of your site on Vercel using v0 to see what the performance delta looks like and what the AI agent feels like in production. View the demo at:",
    demoLinkText: "waymarktravel.vercel.app",
    demoUrl: "https://waymarktravel.vercel.app/",
    lighthouseOldImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldsitenotonvercel2-Tx1bUsaeu9iJwjKvZbpmMeTlP1MLWF.png",
    lighthouseNewImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-22%20at%2011.36.24%E2%80%AFPM-2npsiNb4jFdPZYPG7cMgiroUGlyyEc.png",
    demoScreenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-22%20at%2010.24.50%E2%80%AFPM.png-4lpeGpScYiycPTjZAfexKYQ1sKSc4k.jpeg",
    footer: "",
  },
  {
    id: 10,
    type: "next-steps",
    sectionLabel: "NEXT STEPS",
    title: "Proof of Value and Workshop",
    subtitle: "",
    lighthouseOldImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oldsitenotonvercel2-Tx1bUsaeu9iJwjKvZbpmMeTlP1MLWF.png",
    lighthouseNewImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-22%20at%2011.36.24%E2%80%AFPM-2npsiNb4jFdPZYPG7cMgiroUGlyyEc.png",
    siteScreenshot:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-22%20at%2010.24.50%E2%80%AFPM.png-4lpeGpScYiycPTjZAfexKYQ1sKSc4k.jpeg",
    povScope:
      "Rebuild the frontend rendering of one high-traffic booking page in Next.js on Vercel, connected to existing booking APIs. Half-day AI workshop where we build the support agent with the CTO's team against a staging environment.",
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
    waymarkCommits:
      "1-2 frontend engineers for the rebuild, API access to booking system, approval to route test traffic, 1 engineering lead for the AI workshop.",
    vercelProvides:
      "Enterprise evaluation access, dedicated SE support throughout, AI SDK implementation guidance, compute credits for the POV period.",
    footer: "",
  },
]
