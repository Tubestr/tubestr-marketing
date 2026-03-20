"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { StickyHeader } from "@/components/sticky-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n-context"
import { Globe, KeyRound, Lock, Shield, Users, Zap } from "lucide-react"
import Link from "next/link"

const content = {
  en: {
    badge: "Trust stack",
    title: "Private by default, explained in parent language first.",
    subtitle:
      "Tubestr uses modern identity and encryption protocols, but the point is not the buzzwords. The point is that kids share only with approved people and family videos are not turned into ad-targeting data.",
    outcomesTitle: "What the technology is supposed to do for your family",
    outcomes: [
      {
        title: "Keep identity in the family’s hands",
        body: "Your family controls the keys and access model instead of depending on a platform-owned follower graph.",
        icon: KeyRound,
      },
      {
        title: "Keep sharing private by default",
        body: "Tubestr is built so family videos move inside trusted groups rather than toward a public audience.",
        icon: Lock,
      },
      {
        title: "Keep incentives aligned with trust",
        body: "No ad or algorithm business model means less pressure to maximize attention at the expense of safety.",
        icon: Shield,
      },
    ],
    systemsTitle: "The underlying systems",
    systemsSubtitle: "Protocols second, parent outcomes first.",
    systems: [
      {
        title: "Nostr",
        summary: "An open identity and relay protocol that helps Tubestr avoid building family identity around a single corporate silo.",
        parentMeaning: "For parents: your family’s access model is not tied to an ad-network account.",
        detail: "Tubestr uses Nostr primitives so identity and routing can stay portable and family-owned.",
        icon: Globe,
      },
      {
        title: "MLS",
        summary: "A modern group-encryption protocol used to secure communication inside trusted circles.",
        parentMeaning: "For parents: approved group sharing can stay encrypted while still feeling fast in the app.",
        detail: "MLS gives Tubestr a standard way to manage changing family groups without dropping privacy.",
        icon: Users,
      },
      {
        title: "Marmot",
        summary: "Tubestr’s implementation work that makes encrypted family sharing practical for the actual product experience.",
        parentMeaning: "For parents: the privacy layer is meant to work in the background instead of becoming homework.",
        detail: "This is where protocol choices are turned into the sending, receiving, and syncing experience families actually touch.",
        icon: Zap,
      },
    ],
    e2eTitle: "End-to-end encryption is the rule, not the upgrade path",
    e2eBody:
      "Videos are protected so the intended family group can access them. That reduces exposure to platform operators, network intermediaries, and the usual ad-tech profile building that comes with mainstream social products.",
    e2ePoints: [
      "Private groups are meant to stay private even as families add or remove approved members.",
      "Security work happens under the product instead of asking parents or kids to manage crypto concepts manually.",
      "The architecture is designed around trusted distribution, not public virality.",
    ],
    ctaTitle: "Read the positioning, then install the beta.",
    ctaBody: "If the product promise fits your family, the download page has the current install paths and beta expectations.",
    ctaPrimary: "Go to download",
    ctaSecondary: "Back to home",
  },
  es: {
    badge: "Base de confianza",
    title: "Privado por defecto, explicado primero en lenguaje para padres.",
    subtitle:
      "Tubestr usa protocolos modernos de identidad y cifrado, pero el punto no son las palabras técnicas. El punto es que los niños compartan solo con personas aprobadas y que los videos familiares no se conviertan en datos para publicidad.",
    outcomesTitle: "Lo que la tecnología debe hacer por tu familia",
    outcomes: [
      {
        title: "Mantener la identidad en manos de la familia",
        body: "Tu familia controla las llaves y el modelo de acceso en lugar de depender de un grafo social propiedad de una plataforma.",
        icon: KeyRound,
      },
      {
        title: "Mantener el compartir privado por defecto",
        body: "Tubestr está construida para que los videos familiares se muevan dentro de grupos de confianza y no hacia una audiencia pública.",
        icon: Lock,
      },
      {
        title: "Mantener incentivos alineados con la confianza",
        body: "Sin anuncios ni modelo algorítmico, hay menos presión para maximizar atención a costa de la seguridad.",
        icon: Shield,
      },
    ],
    systemsTitle: "Los sistemas que están debajo",
    systemsSubtitle: "Primero los resultados para padres, después los protocolos.",
    systems: [
      {
        title: "Nostr",
        summary: "Un protocolo abierto de identidad y relés que ayuda a que Tubestr no construya la identidad familiar dentro de un silo corporativo.",
        parentMeaning: "Para padres: el modelo de acceso de tu familia no depende de una cuenta de una red publicitaria.",
        detail: "Tubestr usa primitivas de Nostr para que la identidad y el enrutamiento puedan seguir siendo portables y propiedad de la familia.",
        icon: Globe,
      },
      {
        title: "MLS",
        summary: "Un protocolo moderno de cifrado grupal usado para asegurar la comunicación dentro de círculos de confianza.",
        parentMeaning: "Para padres: compartir dentro de grupos aprobados puede seguir cifrado sin sentirse lento en la app.",
        detail: "MLS le da a Tubestr una forma estándar de manejar cambios en los grupos familiares sin perder privacidad.",
        icon: Users,
      },
      {
        title: "Marmot",
        summary: "El trabajo de implementación de Tubestr que vuelve práctica la compartición cifrada para la experiencia real del producto.",
        parentMeaning: "Para padres: la capa de privacidad debe funcionar en segundo plano y no convertirse en tarea extra.",
        detail: "Aquí es donde las decisiones de protocolo se convierten en la experiencia de enviar, recibir y sincronizar que las familias realmente usan.",
        icon: Zap,
      },
    ],
    e2eTitle: "El cifrado de extremo a extremo es la regla, no una mejora opcional",
    e2eBody:
      "Los videos se protegen para que el grupo familiar previsto pueda acceder a ellos. Eso reduce la exposición frente a operadores de plataforma, intermediarios de red y la construcción de perfiles publicitarios típica de productos sociales masivos.",
    e2ePoints: [
      "Los grupos privados deben seguir siendo privados incluso cuando las familias agregan o eliminan miembros aprobados.",
      "El trabajo de seguridad ocurre debajo del producto en lugar de pedir a padres o niños gestionar conceptos cripto manualmente.",
      "La arquitectura está diseñada para distribución de confianza, no para viralidad pública.",
    ],
    ctaTitle: "Lee el posicionamiento y luego instala la beta.",
    ctaBody: "Si la promesa del producto encaja con tu familia, la página de descarga tiene las rutas actuales de instalación y las expectativas de la beta.",
    ctaPrimary: "Ir a descargas",
    ctaSecondary: "Volver al inicio",
  },
} as const

export default function TechPage() {
  const { language, t } = useI18n()
  const copy = content[language]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(180deg,_#f8fbff_0%,_#eef4ff_36%,_#f4f7ef_100%)]">
      <StickyHeader />

      <section className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/90 px-5 py-2 text-sm font-semibold text-primary shadow-md">
              <Shield className="h-4 w-4" />
              <span>{copy.badge}</span>
            </div>
            <h1 className="text-5xl font-bold leading-[0.96] text-primary md:text-7xl font-[family-name:var(--font-display)]">
              {copy.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-foreground/80 md:text-2xl">{copy.subtitle}</p>
          </div>
        </ScrollReveal>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-16">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl space-y-6">
            <h2 className="text-4xl font-bold text-primary md:text-5xl font-[family-name:var(--font-display)]">
              {copy.outcomesTitle}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {copy.outcomes.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="border-white/70 bg-white/88 shadow-lg">
                    <CardContent className="space-y-4 p-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                        {item.title}
                      </h3>
                      <p className="text-base leading-7 text-foreground/75">{item.body}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[linear-gradient(135deg,_rgba(37,99,235,0.07),_rgba(255,255,255,0.94)_32%,_rgba(16,185,129,0.07))] p-8 shadow-xl md:p-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl font-bold text-primary md:text-5xl font-[family-name:var(--font-display)]">
                {copy.systemsTitle}
              </h2>
              <p className="text-lg leading-8 text-foreground/75">{copy.systemsSubtitle}</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {copy.systems.map((system) => {
                const Icon = system.icon
                return (
                  <Card key={system.title} className="border-white/70 bg-white/92 shadow-lg">
                    <CardContent className="space-y-5 p-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                          {system.title}
                        </h3>
                        <p className="text-base leading-7 text-foreground/75">{system.summary}</p>
                      </div>
                      <div className="rounded-[1.5rem] bg-slate-50 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/65">
                          {language === "en" ? "Parent meaning" : "Lo que significa para padres"}
                        </p>
                        <p className="mt-2 text-base leading-7 text-foreground/80">{system.parentMeaning}</p>
                      </div>
                      <p className="text-sm leading-6 text-foreground/65">{system.detail}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[2.5rem] border border-slate-200/70 bg-white/85 p-8 shadow-xl md:grid-cols-[0.95fr_1.05fr] md:p-12">
            <div className="space-y-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                <Lock className="h-7 w-7" />
              </div>
              <h2 className="text-4xl font-bold text-primary md:text-5xl font-[family-name:var(--font-display)]">
                {copy.e2eTitle}
              </h2>
              <p className="text-lg leading-8 text-foreground/75">{copy.e2eBody}</p>
            </div>
            <div className="space-y-4">
              {copy.e2ePoints.map((point) => (
                <div key={point} className="flex gap-4 rounded-[1.5rem] bg-slate-50 px-5 py-5">
                  <div className="mt-1 rounded-full bg-accent p-2 text-white">
                    <Shield className="h-4 w-4" />
                  </div>
                  <p className="text-base leading-7 text-foreground/75">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <div className="mx-auto max-w-5xl rounded-[2.75rem] bg-[linear-gradient(135deg,_#1d4ed8,_#0f766e_110%)] p-10 text-white shadow-[0_40px_90px_-35px_rgba(29,78,216,0.7)] md:p-14">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div className="space-y-5">
                <h2 className="text-4xl font-bold leading-tight md:text-5xl font-[family-name:var(--font-display)]">
                  {copy.ctaTitle}
                </h2>
                <p className="max-w-3xl text-lg leading-8 text-white/90">{copy.ctaBody}</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-8 py-7 text-base font-bold text-primary shadow-xl hover:bg-white/90"
                  asChild
                >
                  <Link href="/download">{copy.ctaPrimary}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white/40 bg-transparent px-8 py-7 text-base font-bold text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/">{copy.ctaSecondary}</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <footer className="container mx-auto px-4 py-16 text-center text-foreground/60">
        <p className="text-lg font-bold">{t("footer.copyright")}</p>
        <p className="mt-3 text-base">{t("footer.tagline")}</p>
      </footer>
    </div>
  )
}
