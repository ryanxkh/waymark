import type { DiscoverySlide as DiscoverySlideType } from "@/lib/slides"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn, SectionLabel, SlideShell, SlideTitle } from "./atoms"

export function DiscoverySlide({ slide, isVisible }: { slide: DiscoverySlideType; isVisible: boolean }) {
  return (
    <SlideShell>
      <SectionLabel isVisible={isVisible}>{slide.sectionLabel}</SectionLabel>
      <SlideTitle isVisible={isVisible} className="mt-3 mb-6 lg:mb-8">
        {slide.title}
      </SlideTitle>

      <div className="flex flex-col gap-5 lg:flex-row lg:gap-8">
        {/* Assumptions */}
        <FadeIn isVisible={isVisible} delay={180} className="lg:w-2/5">
          <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Assumptions
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              {slide.assumptions.map((assumption, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-700"
                    aria-hidden
                  />
                  <span className="text-pretty">{assumption}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Discovery questions */}
        <div className="flex-1 lg:w-3/5">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {slide.cards.map((card, index) => (
              <FadeIn key={card.id} isVisible={isVisible} delay={260 + index * 80}>
                <AccordionItem
                  value={card.id}
                  className="overflow-hidden rounded-lg border border-border bg-card data-[state=open]:bg-gray-300"
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline sm:px-6 sm:py-5">
                    <div className="flex w-full flex-col gap-2 text-left">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Discovery Question {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-pretty text-sm font-normal leading-relaxed text-foreground sm:text-[15px]">
                        {card.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <div className="border-t border-border pt-4">
                      <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        {card.revealTitle}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {card.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span
                              className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-700"
                              aria-hidden
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </div>
      </div>
    </SlideShell>
  )
}
