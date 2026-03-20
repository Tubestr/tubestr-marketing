"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { StickyHeader } from "@/components/sticky-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n-context"
import { Apple, ArrowUpRight, Download, Github, MessageCircleMore, Package, Shield } from "lucide-react"
import Link from "next/link"

const content = {
  en: {
    badge: "Tubestr beta install",
    title: "Choose the easiest install path for your family’s device.",
    subtitle:
      "Tubestr is in private beta for parents testing the app with their kids. Install on iPhone or Android, then tell us where the setup or sharing flow still feels rough.",
    cards: [
      {
        platform: "iOS and iPadOS",
        title: "Apple TestFlight",
        body: "Best for most families on Apple devices. Install TestFlight first, then join the beta from Apple’s standard preview flow.",
        detail: "What to expect: fastest onboarding path, easiest updates, good for parent-led household testing.",
        cta: "Open TestFlight",
        href: "https://testflight.apple.com/join/8jZ2GuxV",
        icon: Apple,
        tone: "blue",
      },
      {
        platform: "Android",
        title: "Zapstore",
        body: "Recommended if you are already comfortable with the Nostr ecosystem and want a straightforward Android app-store install.",
        detail: "What to expect: cleaner Android install path if Zapstore is already part of your setup.",
        cta: "Open Zapstore",
        href: "https://zapstore.dev/apps/app.tubestr.mobile",
        icon: Package,
        tone: "purple",
      },
      {
        platform: "Android",
        title: "Direct APK",
        body: "Use this if you want the release artifact directly. Android will ask you to allow installs from unknown sources.",
        detail: "What to expect: most flexible path, but also the most manual one.",
        cta: "View GitHub releases",
        href: "https://github.com/Tubestr/tubestr-v2/releases",
        icon: Download,
        tone: "green",
      },
    ],
    betaTitle: "Who this beta is for",
    betaPoints: [
      "Parents testing Tubestr with children in real family sharing scenarios",
      "Families comfortable trying early product flows and reporting friction",
      "Households that want private video sharing instead of a public audience",
    ],
    afterTitle: "What happens after install",
    afterSteps: [
      "Open the app and create or recover the parent identity.",
      "Set up a child profile and start building the trusted family circle.",
      "Test recording, connection approval, and private sharing with real family members.",
    ],
    legalTitle: "Need the launch and review links?",
    legalBody:
      "Use these public URLs for TestFlight and App Store metadata while the beta is still private: support, privacy policy, and terms.",
    legalLinks: [
      { label: "Support", href: "/support" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
    feedbackTitle: "Need help or want to send feedback?",
    feedbackBody:
      "The beta is still being tightened. If install, onboarding, or sharing gets confusing, send us a concrete report so we can fix the right thing next.",
    feedbackPrimary: "Open feedback issue",
    feedbackSecondary: "Back to home",
    feedbackHref: "https://github.com/Tubestr/tubestr-v2/issues/new",
  },
  es: {
    badge: "Instalación beta de Tubestr",
    title: "Elige la ruta de instalación más simple para el dispositivo de tu familia.",
    subtitle:
      "Tubestr está en beta privada para padres que prueban la app con sus hijos. Instálala en iPhone o Android y cuéntanos dónde la configuración o el flujo de compartir todavía se siente áspero.",
    cards: [
      {
        platform: "iOS y iPadOS",
        title: "Apple TestFlight",
        body: "La mejor opción para la mayoría de familias con dispositivos Apple. Instala TestFlight primero y luego entra a la beta con el flujo estándar de Apple.",
        detail: "Qué esperar: ruta de inicio más rápida, actualizaciones sencillas, ideal para pruebas dirigidas por padres.",
        cta: "Abrir TestFlight",
        href: "https://testflight.apple.com/join/8jZ2GuxV",
        icon: Apple,
        tone: "blue",
      },
      {
        platform: "Android",
        title: "Zapstore",
        body: "Recomendado si ya te sientes cómodo con el ecosistema Nostr y quieres una instalación de Android más parecida a una tienda.",
        detail: "Qué esperar: una ruta más limpia en Android si ya usas Zapstore.",
        cta: "Abrir Zapstore",
        href: "https://zapstore.dev/apps/app.tubestr.mobile",
        icon: Package,
        tone: "purple",
      },
      {
        platform: "Android",
        title: "APK directo",
        body: "Úsalo si quieres el artefacto de release directamente. Android te pedirá permitir instalaciones desde fuentes desconocidas.",
        detail: "Qué esperar: la ruta más flexible, pero también la más manual.",
        cta: "Ver releases en GitHub",
        href: "https://github.com/Tubestr/tubestr-v2/releases",
        icon: Download,
        tone: "green",
      },
    ],
    betaTitle: "Para quién es esta beta",
    betaPoints: [
      "Padres probando Tubestr con niños en escenarios reales de compartición familiar",
      "Familias dispuestas a probar flujos tempranos y reportar fricción",
      "Hogares que quieren compartir videos en privado en lugar de exponerlos al público",
    ],
    afterTitle: "Qué pasa después de instalar",
    afterSteps: [
      "Abre la app y crea o recupera la identidad parental.",
      "Configura un perfil infantil y comienza a construir el círculo familiar de confianza.",
      "Prueba grabación, aprobación de conexiones y compartición privada con familiares reales.",
    ],
    legalTitle: "¿Necesitas los enlaces para launch y review?",
    legalBody:
      "Usa estas URLs públicas para los metadatos de TestFlight y App Store mientras la beta sigue privada: soporte, política de privacidad y términos.",
    legalLinks: [
      { label: "Soporte", href: "/support" },
      { label: "Política de privacidad", href: "/privacy" },
      { label: "Términos de uso", href: "/terms" },
    ],
    feedbackTitle: "¿Necesitas ayuda o quieres enviar feedback?",
    feedbackBody:
      "La beta todavía se está ajustando. Si instalar, el onboarding o compartir se vuelve confuso, envíanos un reporte concreto para corregir lo correcto primero.",
    feedbackPrimary: "Abrir issue de feedback",
    feedbackSecondary: "Volver al inicio",
    feedbackHref: "https://github.com/Tubestr/tubestr-v2/issues/new",
  },
} as const

const toneClasses = {
  blue: {
    card: "border-primary/20 bg-blue-50/80",
    chip: "bg-blue-100 text-blue-700",
    button: "bg-primary text-primary-foreground hover:bg-primary/90",
    icon: "bg-primary text-white",
  },
  purple: {
    card: "border-purple-200 bg-purple-50/80",
    chip: "bg-purple-100 text-purple-700",
    button: "bg-purple-600 text-white hover:bg-purple-700",
    icon: "bg-purple-600 text-white",
  },
  green: {
    card: "border-emerald-200 bg-emerald-50/80",
    chip: "bg-emerald-100 text-emerald-700",
    button: "bg-emerald-600 text-white hover:bg-emerald-700",
    icon: "bg-emerald-600 text-white",
  },
} as const

export default function DownloadPage() {
  const { language, t } = useI18n()
  const copy = content[language]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(180deg,_#f8fbff_0%,_#eef6ff_35%,_#f6f7ec_100%)]">
      <StickyHeader />

      <section className="container mx-auto px-4 pt-24 pb-14 md:pt-32 md:pb-20">
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

      <section className="container mx-auto px-4 pb-14 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {copy.cards.map((card, index) => {
            const tone = toneClasses[card.tone]
            const Icon = card.icon
            return (
              <ScrollReveal key={card.title} delay={index * 120}>
                <Card className={`h-full border ${tone.card} shadow-xl`}>
                  <CardContent className="flex h-full flex-col space-y-6 p-8">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${tone.icon}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className={`inline-flex w-fit rounded-full px-3 py-1 text-sm font-bold ${tone.chip}`}>
                      {card.platform}
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                        {card.title}
                      </h2>
                      <p className="text-base leading-7 text-foreground/75">{card.body}</p>
                      <p className="text-sm leading-6 text-foreground/65">{card.detail}</p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Button size="lg" className={`w-full rounded-full py-6 text-base font-bold ${tone.button}`} asChild>
                        <a href={card.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="mr-2 h-5 w-5" />
                          {card.cta}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            <Card className="border-white/70 bg-white/88 shadow-lg">
              <CardContent className="space-y-5 p-8">
                <h2 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                  {copy.betaTitle}
                </h2>
                <div className="space-y-4">
                  {copy.betaPoints.map((point) => (
                    <div key={point} className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-primary p-2 text-white">
                        <Shield className="h-4 w-4" />
                      </div>
                      <p className="text-base leading-7 text-foreground/75">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/70 bg-white/88 shadow-lg">
              <CardContent className="space-y-5 p-8">
                <h2 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                  {copy.afterTitle}
                </h2>
                <div className="space-y-4">
                  {copy.afterSteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="text-base leading-7 text-foreground/75">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl">
            <Card className="border-white/70 bg-white/88 shadow-lg">
              <CardContent className="space-y-5 p-8">
                <h2 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                  {copy.legalTitle}
                </h2>
                <p className="max-w-3xl text-base leading-7 text-foreground/75">{copy.legalBody}</p>
                <div className="flex flex-wrap gap-3">
                  {copy.legalLinks.map((link) => (
                    <Button
                      key={link.href}
                      variant="outline"
                      className="rounded-full border-primary/20 bg-white text-primary hover:bg-primary/5"
                      asChild
                    >
                      <Link href={link.href}>
                        {link.label}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[linear-gradient(135deg,_#ffffff,_#eef6ff_48%,_#ecfdf5)] p-8 shadow-xl md:p-12">
            <div className="space-y-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MessageCircleMore className="h-7 w-7" />
              </div>
              <h2 className="text-4xl font-bold text-primary md:text-5xl font-[family-name:var(--font-display)]">
                {copy.feedbackTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-foreground/75">{copy.feedbackBody}</p>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full bg-primary px-8 py-7 text-base font-bold text-primary-foreground" asChild>
                <a href={copy.feedbackHref} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  {copy.feedbackPrimary}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-primary/15 bg-white px-8 py-7 text-base font-bold text-primary"
                asChild
              >
                <Link href="/">{copy.feedbackSecondary}</Link>
              </Button>
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
