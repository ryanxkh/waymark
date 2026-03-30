// Geist Icons - SVG icons matching Vercel's official Geist Design System
// Reference: vercel.com/geist/icons

import { forwardRef, SVGProps } from "react"

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

// Globe icon - matches vercel.com/geist/icons "globe"
export const Globe = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 8H14.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.5C9.60635 3.23444 10.5168 5.5667 10.55 8C10.5168 10.4333 9.60635 12.7656 8 14.5C6.39365 12.7656 5.48323 10.4333 5.45 8C5.48323 5.5667 6.39365 3.23444 8 1.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
)
Globe.displayName = "Globe"

// Sparkles icon - matches vercel.com/geist/icons "sparkles"
export const Sparkles = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M3.5 2V5M2 3.5H5M4 11.5V14M2.75 12.75H5.25M9.5 1.5L10.7 5.1L14.5 6L10.7 6.9L9.5 10.5L8.3 6.9L4.5 6L8.3 5.1L9.5 1.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10.5L10.3 13.1L13 14L10.3 14.9L9.5 17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-2, -4) scale(0.85)"
      />
    </svg>
  )
)
Sparkles.displayName = "Sparkles"

// Terminal Window icon - matches vercel.com/geist/icons terminal style
export const TerminalWindow = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      {...props}
    >
      <rect
        x="1.5"
        y="2.5"
        width="13"
        height="11"
        rx="1.5"
        stroke="currentColor"
      />
      <path d="M1.5 5.5H14.5" stroke="currentColor" />
      <path
        d="M4.5 8.5L6.5 10L4.5 11.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 11.5H11" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
)
TerminalWindow.displayName = "TerminalWindow"

// Agent/Robot icon - matches vercel.com/geist/icons "agent"
export const Robot = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      {...props}
    >
      <rect
        x="2.5"
        y="5.5"
        width="11"
        height="8"
        rx="2"
        stroke="currentColor"
      />
      <circle cx="5.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="10.5" cy="9.5" r="1" fill="currentColor" />
      <path d="M8 2.5V5.5" stroke="currentColor" strokeLinecap="round" />
      <circle cx="8" cy="2" r="1" stroke="currentColor" />
      <path d="M6 12V13.5" stroke="currentColor" strokeLinecap="round" />
      <path d="M10 12V13.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  )
)
Robot.displayName = "Robot"

// Refresh Clockwise icon - matches vercel.com/geist/icons "refresh-clockwise"
export const RefreshClockwise = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12.5 6.5H14.5V2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.05 5.55C3.55 4.35 4.55 3.35 5.85 2.85C8.35 1.85 11.15 3.05 12.15 5.55L14.5 6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 9.5H1.5V13.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.95 10.45C12.45 11.65 11.45 12.65 10.15 13.15C7.65 14.15 4.85 12.95 3.85 10.45L1.5 9.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
)
RefreshClockwise.displayName = "RefreshClockwise"

// Analytics icon - matches vercel.com/geist/icons "analytics"
export const Analytics = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M5 14V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 14V2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
)
Analytics.displayName = "Analytics"

// Sandbox icon - matches vercel.com/geist/icons "sandbox" (stacked squares)
export const Sandbox = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="1.5" y="8.5" width="6" height="6" rx="1" stroke="currentColor" />
      <rect x="5" y="5" width="6" height="6" rx="1" stroke="currentColor" />
      <rect x="8.5" y="1.5" width="6" height="6" rx="1" stroke="currentColor" />
    </svg>
  )
)
Sandbox.displayName = "Sandbox"

// Fluid icon - matches vercel.com/geist/icons "fluid" (flow/compute)
export const Fluid = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="3" cy="3" r="1.5" stroke="currentColor" />
      <circle cx="3" cy="13" r="1.5" stroke="currentColor" />
      <circle cx="13" cy="8" r="1.5" stroke="currentColor" />
      <path d="M3 4.5V11.5" stroke="currentColor" />
      <path
        d="M4.5 3H9C10.1046 3 11 3.89543 11 5V6.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M4.5 13H9C10.1046 13 11 12.1046 11 11V9.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  )
)
Fluid.displayName = "Fluid"

// LogoV0 icon - matches vercel.com/geist/icons "logo-v0"
export const LogoV0 = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, className, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      {...props}
    >
      <rect
        x="1.5"
        y="1.5"
        width="13"
        height="13"
        rx="2"
        stroke="currentColor"
      />
      <path
        d="M4.5 5L6.5 11L8.5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11.5" cy="8" r="2" stroke="currentColor" />
    </svg>
  )
)
LogoV0.displayName = "LogoV0"
