import { notFound } from "next/navigation"
import { slides } from "@/lib/slides"
import { SlideRenderer } from "@/components/slide-renderer"

export function generateStaticParams() {
  return slides.map((slide) => ({ id: String(slide.id) }))
}

export const dynamicParams = false

export default async function SlidePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const slideId = Number(id)
  if (!Number.isInteger(slideId)) notFound()

  const slide = slides.find((s) => s.id === slideId)
  if (!slide) notFound()

  return <SlideRenderer slide={slide} />
}
