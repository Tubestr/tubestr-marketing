import { StickyHeader } from "@/components/sticky-header"
import { ShieldCheck } from "lucide-react"
import Link from "next/link"

type LegalSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

type LegalPageShellProps = {
  eyebrow: string
  title: string
  intro: string
  effectiveDate: string
  sections: LegalSection[]
}

export function LegalPageShell({
  eyebrow,
  title,
  intro,
  effectiveDate,
  sections,
}: LegalPageShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_28%),linear-gradient(180deg,_#fbfdff_0%,_#eef6ff_42%,_#f8f4e9_100%)]">
      <StickyHeader />

      <section className="container mx-auto px-4 pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-md">
            <ShieldCheck className="h-4 w-4" />
            <span>{eyebrow}</span>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
              Effective {effectiveDate}
            </p>
            <h1 className="text-5xl font-bold leading-[0.96] text-primary md:text-7xl font-[family-name:var(--font-display)]">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-foreground/80 md:text-xl">{intro}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-2xl backdrop-blur md:p-10">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl font-bold text-primary md:text-3xl font-[family-name:var(--font-display)]">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-foreground/80">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="space-y-3 text-base leading-7 text-foreground/80">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/80" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap gap-3 text-sm font-medium text-primary">
          <Link className="rounded-full border border-primary/15 bg-white/90 px-4 py-2 shadow-sm transition hover:border-primary/30 hover:bg-white" href="/support">
            Support
          </Link>
          <Link className="rounded-full border border-primary/15 bg-white/90 px-4 py-2 shadow-sm transition hover:border-primary/30 hover:bg-white" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="rounded-full border border-primary/15 bg-white/90 px-4 py-2 shadow-sm transition hover:border-primary/30 hover:bg-white" href="/terms">
            Terms
          </Link>
          <Link className="rounded-full border border-primary/15 bg-white/90 px-4 py-2 shadow-sm transition hover:border-primary/30 hover:bg-white" href="/download">
            Download Beta
          </Link>
        </div>
      </section>
    </div>
  )
}
