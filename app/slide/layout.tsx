import { SlideShell } from "@/components/slide-shell"

export default function SlideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SlideShell>{children}</SlideShell>
}
