"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { StickyHeader } from "@/components/sticky-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n-context"
import {
  ArrowRight,
  Check,
  EyeOff,
  KeyRound,
  Lock,
  Shield,
  Sparkles,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const content = {
  en: {
    badge: "Private family video beta",
    title: "Let kids make and share videos without handing them the public internet.",
    subtitle:
      "Tubestr is the private video app for kids and parents. Kids create, parents approve every relationship, and videos stay inside trusted family circles.",
    primaryCta: "Download the beta",
    secondaryCta: "See how parent approval works",
    proof: ["Parent-approved connections", "No public feed", "No ads or tracking", "Private by default"],
    tensionTitle: "Parents already know the problem.",
    tensionBody:
      "Kids want to make videos for cousins, classmates, and grandparents. Most apps force parents to choose between unsafe public sharing and clunky family messaging. Tubestr is built for the space in between.",
    tensionPoints: [
      "Creation-first tools for kids instead of an attention feed",
      "Every child relationship is approved by a parent before sharing starts",
      "Family videos stay with trusted people, not a public audience",
    ],
    trustTitle: "Trust proof before install",
    trustSubtitle: "The product promise is simple, and the controls are concrete.",
    trustCards: [
      {
        title: "Parent approval on every relationship",
        body: "Children do not add random followers. Parents decide which family and friends are allowed into a child’s circle.",
      },
      {
        title: "No public audience to chase",
        body: "There is no public feed, no creator leaderboard, and no algorithm pushing kids toward strangers.",
      },
      {
        title: "No ads, no tracking incentives",
        body: "Tubestr is not designed around attention capture. Kids make videos instead of being optimized into scrolling.",
      },
      {
        title: "Private sharing built into the stack",
        body: "Identity and sharing are built around family ownership and encrypted delivery, not ad-tech profiles.",
      },
    ],
    approvalTitle: "How parent approval works",
    approvalSubtitle: "One clear flow from setup to sharing.",
    approvalSteps: [
      {
        title: "1. Set up a child profile",
        body: "A parent creates the account, picks the child profile, and starts the trusted circle from the parent side.",
      },
      {
        title: "2. Approve each connection",
        body: "Parents review who the child can connect with before any sharing happens across families.",
      },
      {
        title: "3. Kids create and share inside that circle",
        body: "Once approved, kids can post short videos to people the family already knows and trusts.",
      },
    ],
    screenshotTitle: "Product mockups built from the real app",
    screenshotSubtitle:
      "We reframed the live screens inside clearer device mockups so parents can scan the experience faster without losing product truth.",
    screenshotCards: [
      {
        title: "Parent Zone",
        body: "Connection approvals and family oversight live in one place.",
        image: "/images/IMG_0439.webp",
      },
      {
        title: "Trusted circles",
        body: "Children share with people their parents have explicitly allowed.",
        image: "/images/IMG_0437.webp",
      },
      {
        title: "Creation tools",
        body: "Kids record and remix instead of disappearing into a passive feed.",
        image: "/images/IMG_0438.webp",
      },
      {
        title: "Private playback",
        body: "Shared videos are meant for family and friends, not the whole internet.",
        image: "/images/IMG_0440.webp",
      },
    ],
    compareTitle: "Where Tubestr fits",
    compareSubtitle: "A clearer category picture for parents deciding what to trust.",
    compareRows: [
      {
        label: "Primary experience",
        values: ["Public viewing and discovery", "Social participation with moderation", "Chat and calls", "Private video creation and sharing"],
      },
      {
        label: "Audience model",
        values: ["Broad or platform-managed", "App-managed social graph", "Known contacts", "Parent-approved family circles"],
      },
      {
        label: "Parent control",
        values: ["Varies by mode", "Strong but product-wide", "Strong for messaging", "Built into every child relationship"],
      },
      {
        label: "Business pressure",
        values: ["Attention and content volume", "Engagement and retention", "Communication utility", "Family trust and safe creativity"],
      },
    ],
    compareColumns: ["Public video apps", "Kids social apps", "Family messaging apps", "Tubestr"],
    finalTitle: "A safer way to let kids share what they make.",
    finalBody:
      "Install the beta if you want a private family video app that treats parent approval as a product rule, not a settings page afterthought.",
    finalPrimary: "Go to download",
    finalSecondary: "Read the trust tech",
  },
  es: {
    badge: "Beta privada de video familiar",
    title: "Deja que los niños hagan y compartan videos sin entregarlos al internet público.",
    subtitle:
      "Tubestr es la app privada de video para niños y padres. Los niños crean, los padres aprueban cada relación y los videos permanecen dentro de círculos familiares de confianza.",
    primaryCta: "Descargar la beta",
    secondaryCta: "Ver cómo funciona la aprobación parental",
    proof: ["Conexiones aprobadas por padres", "Sin feed público", "Sin anuncios ni rastreo", "Privado por defecto"],
    tensionTitle: "Los padres ya conocen el problema.",
    tensionBody:
      "Los niños quieren hacer videos para primos, compañeros y abuelos. La mayoría de apps obliga a elegir entre compartir en público o usar mensajería familiar torpe. Tubestr está hecha para ese punto intermedio.",
    tensionPoints: [
      "Herramientas de creación para niños en vez de un feed de atención",
      "Cada relación infantil es aprobada por un padre antes de compartir",
      "Los videos familiares se quedan con personas de confianza, no con una audiencia pública",
    ],
    trustTitle: "Pruebas de confianza antes de instalar",
    trustSubtitle: "La promesa del producto es simple y los controles son concretos.",
    trustCards: [
      {
        title: "Aprobación parental en cada relación",
        body: "Los niños no agregan seguidores al azar. Los padres deciden qué familiares y amigos entran al círculo del niño.",
      },
      {
        title: "Sin audiencia pública que perseguir",
        body: "No existe un feed público, ni ranking de creadores, ni algoritmo empujando a los niños hacia desconocidos.",
      },
      {
        title: "Sin anuncios ni incentivos de rastreo",
        body: "Tubestr no está diseñada para capturar atención. Los niños hacen videos en lugar de ser optimizados para seguir deslizando.",
      },
      {
        title: "Compartir en privado desde la base",
        body: "La identidad y el intercambio están construidos alrededor de la propiedad familiar y la entrega cifrada, no de perfiles publicitarios.",
      },
    ],
    approvalTitle: "Cómo funciona la aprobación parental",
    approvalSubtitle: "Un flujo claro desde la configuración hasta compartir.",
    approvalSteps: [
      {
        title: "1. Crea un perfil infantil",
        body: "Un padre crea la cuenta, elige el perfil del niño y comienza el círculo de confianza desde la zona parental.",
      },
      {
        title: "2. Aprueba cada conexión",
        body: "Los padres revisan con quién puede conectarse el niño antes de que exista cualquier intercambio entre familias.",
      },
      {
        title: "3. Los niños crean y comparten dentro de ese círculo",
        body: "Una vez aprobado, el niño puede publicar videos cortos para personas que la familia ya conoce y en quienes confía.",
      },
    ],
    screenshotTitle: "Mockups del producto construidos con la app real",
    screenshotSubtitle:
      "Reencuadramos las pantallas reales dentro de mockups más claros para que los padres entiendan la experiencia más rápido sin perder verdad del producto.",
    screenshotCards: [
      {
        title: "Zona Parental",
        body: "Las aprobaciones de conexiones y la supervisión familiar viven en un solo lugar.",
        image: "/images/IMG_0439.webp",
      },
      {
        title: "Círculos de confianza",
        body: "Los niños comparten con personas que sus padres permitieron explícitamente.",
        image: "/images/IMG_0437.webp",
      },
      {
        title: "Herramientas creativas",
        body: "Los niños graban y editan en vez de perderse en un feed pasivo.",
        image: "/images/IMG_0438.webp",
      },
      {
        title: "Reproducción privada",
        body: "Los videos compartidos son para familia y amigos, no para todo internet.",
        image: "/images/IMG_0440.webp",
      },
    ],
    compareTitle: "Dónde encaja Tubestr",
    compareSubtitle: "Una imagen de categoría más clara para padres que están decidiendo en qué confiar.",
    compareRows: [
      {
        label: "Experiencia principal",
        values: ["Visualización y descubrimiento públicos", "Participación social con moderación", "Chat y llamadas", "Creación y compartición privada de videos"],
      },
      {
        label: "Modelo de audiencia",
        values: ["Amplio o gestionado por la plataforma", "Grafo social gestionado por la app", "Contactos conocidos", "Círculos familiares aprobados por padres"],
      },
      {
        label: "Control parental",
        values: ["Varía según el modo", "Fuerte pero en todo el producto", "Fuerte para mensajería", "Integrado en cada relación infantil"],
      },
      {
        label: "Presión de negocio",
        values: ["Atención y volumen de contenido", "Engagement y retención", "Utilidad de comunicación", "Confianza familiar y creatividad segura"],
      },
    ],
    compareColumns: ["Apps públicas de video", "Apps sociales para niños", "Apps de mensajería familiar", "Tubestr"],
    finalTitle: "Una forma más segura de dejar que los niños compartan lo que hacen.",
    finalBody:
      "Instala la beta si quieres una app privada de video familiar que trate la aprobación parental como una regla del producto, no como una configuración secundaria.",
    finalPrimary: "Ir a descargas",
    finalSecondary: "Leer la base técnica de confianza",
  },
} as const

const mockupTones = [
  {
    shell: "from-sky-100 via-white to-blue-50",
    glow: "from-primary/25 via-primary/8 to-transparent",
    chip: "bg-blue-100 text-blue-700",
  },
  {
    shell: "from-emerald-100 via-white to-teal-50",
    glow: "from-emerald-400/20 via-emerald-200/10 to-transparent",
    chip: "bg-emerald-100 text-emerald-700",
  },
  {
    shell: "from-amber-100 via-white to-rose-50",
    glow: "from-amber-300/20 via-orange-100/10 to-transparent",
    chip: "bg-amber-100 text-amber-700",
  },
  {
    shell: "from-violet-100 via-white to-fuchsia-50",
    glow: "from-violet-300/20 via-fuchsia-100/10 to-transparent",
    chip: "bg-violet-100 text-violet-700",
  },
] as const

export default function TubestrLanding() {
  const { language, t } = useI18n()
  const copy = content[language]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_32%),linear-gradient(180deg,_#f8fbff_0%,_#eef6ff_38%,_#f7f3ea_100%)]">
      <StickyHeader />

      <section className="container mx-auto px-4 pt-24 pb-18 md:pt-32 md:pb-24">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/90 px-5 py-2 text-sm font-semibold text-primary shadow-lg">
                <Shield className="h-4 w-4" />
                <span>{copy.badge}</span>
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] text-primary md:text-7xl font-[family-name:var(--font-display)]">
                  {copy.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-foreground/80 md:text-2xl">{copy.subtitle}</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="rounded-full bg-primary px-8 py-7 text-lg font-bold text-primary-foreground shadow-2xl transition-all hover:scale-[1.02] hover:bg-primary/90"
                  asChild
                >
                  <Link href="/download">{copy.primaryCta}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-primary/20 bg-white/80 px-8 py-7 text-lg font-bold text-primary shadow-lg"
                  asChild
                >
                  <Link href="#approval">{copy.secondaryCta}</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                {copy.proof.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-foreground/75 shadow-sm"
                  >
                    <Check className="h-4 w-4 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-white to-accent/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-4 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.45)] backdrop-blur">
                <div className="space-y-3">
                  {/* iPad mini landscape mockup */}
                  <div className="relative">
                    <div className="rounded-[1rem] bg-slate-950 p-[6px] shadow-[0_22px_50px_-24px_rgba(15,23,42,0.8)] ring-1 ring-white/20">
                      <div className="relative aspect-[3/2] overflow-hidden rounded-[0.6rem] bg-slate-900">
                        <div className="absolute right-2.5 top-1/2 z-10 h-2 w-2 -translate-y-1/2 rounded-full bg-slate-700/80" />
                        <Image src="/images/IMG_0437.webp" alt="Tubestr home feed" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="absolute -top-[3px] right-1/3 h-[3px] w-6 rounded-full bg-white/55" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Card className="border-primary/15 bg-blue-50/80 shadow-sm">
                      <CardContent className="space-y-2 p-4">
                        <div className="flex items-center gap-3">
                          <Users className="h-4 w-4 text-primary" />
                          <p className="text-sm font-semibold text-primary">
                            {language === "en" ? "Trusted family circle" : "Círculo familiar de confianza"}
                          </p>
                        </div>
                        <p className="text-xs leading-5 text-foreground/75">
                          {language === "en"
                            ? "Parent-approved contacts before a child ever shares."
                            : "Contactos aprobados por padres antes de que un niño comparta."}
                        </p>
                      </CardContent>
                    </Card>
                    <div className="grid grid-cols-2 gap-2">
                      <Card className="border-accent/15 bg-emerald-50/80 shadow-sm">
                        <CardContent className="space-y-2 p-4">
                          <div className="flex items-center gap-2">
                            <EyeOff className="h-4 w-4 text-accent" />
                            <p className="text-xs font-semibold text-primary">
                              {language === "en" ? "No public audience" : "Sin audiencia pública"}
                            </p>
                          </div>
                          <p className="text-xs leading-5 text-foreground/75">
                            {language === "en" ? "No feed of strangers." : "Sin feed de desconocidos."}
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-amber-200 bg-amber-50/80 shadow-sm">
                        <CardContent className="space-y-2 p-4">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-amber-500" />
                            <p className="text-xs font-semibold text-primary">
                              {language === "en" ? "Creation first" : "Primero crear"}
                            </p>
                          </div>
                          <p className="text-xs leading-5 text-foreground/75">
                            {language === "en" ? "Make, don't scroll." : "Crear, no deslizar."}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-16">
        <ScrollReveal>
          <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-200/70 bg-white/75 p-8 shadow-xl backdrop-blur md:grid-cols-[0.95fr_1.05fr] md:p-12">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">
                {language === "en" ? "Parent job to be done" : "Trabajo real para padres"}
              </p>
              <h2 className="text-4xl font-bold text-primary md:text-5xl font-[family-name:var(--font-display)]">
                {copy.tensionTitle}
              </h2>
              <p className="text-lg leading-8 text-foreground/75">{copy.tensionBody}</p>
            </div>
            <div className="space-y-4">
              {copy.tensionPoints.map((point) => (
                <div key={point} className="flex gap-4 rounded-[1.5rem] bg-slate-50 px-5 py-5">
                  <div className="mt-1 rounded-full bg-primary p-2 text-white">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="text-base leading-7 text-foreground/80">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl space-y-6">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl font-bold text-primary md:text-5xl font-[family-name:var(--font-display)]">
                {copy.trustTitle}
              </h2>
              <p className="text-lg leading-8 text-foreground/75">{copy.trustSubtitle}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {copy.trustCards.map((card, index) => {
                const icon = [Users, EyeOff, Shield, KeyRound][index]
                const Icon = icon
                return (
                  <Card key={card.title} className="border-white/60 bg-white/85 shadow-lg">
                    <CardContent className="space-y-4 p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                        {card.title}
                      </h3>
                      <p className="text-base leading-7 text-foreground/75">{card.body}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section id="approval" className="container mx-auto px-4 py-14 md:py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[linear-gradient(135deg,_rgba(37,99,235,0.08),_rgba(255,255,255,0.92)_35%,_rgba(16,185,129,0.08))] p-8 shadow-xl md:p-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl font-bold text-primary md:text-5xl font-[family-name:var(--font-display)]">
                {copy.approvalTitle}
              </h2>
              <p className="text-lg leading-8 text-foreground/75">{copy.approvalSubtitle}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {copy.approvalSteps.map((step, index) => (
                <Card key={step.title} className="border-white/70 bg-white/90 shadow-lg">
                  <CardContent className="space-y-5 p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {step.title}
                    </h3>
                    <p className="text-base leading-7 text-foreground/75">{step.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl space-y-6">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl font-bold text-primary md:text-5xl font-[family-name:var(--font-display)]">
                {copy.screenshotTitle}
              </h2>
              <p className="text-lg leading-8 text-foreground/75">{copy.screenshotSubtitle}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {copy.screenshotCards.map((card, index) => {
                const tone = mockupTones[index % mockupTones.length]
                return (
                  <Card
                    key={card.title}
                    className={`overflow-hidden border-white/60 bg-gradient-to-br ${tone.shell} shadow-[0_28px_70px_-40px_rgba(15,23,42,0.45)]`}
                  >
                    <div className="relative p-4 pb-3">
                      <div className={`absolute inset-x-4 top-4 h-24 rounded-full bg-gradient-to-br ${tone.glow} blur-3xl`} />
                      <div className="relative">
                        <div className="rounded-[1rem] bg-slate-950 p-[5px] shadow-[0_22px_50px_-24px_rgba(15,23,42,0.8)] ring-1 ring-white/20">
                          <div className="relative aspect-[3/2] overflow-hidden rounded-[0.6rem] border border-slate-800 bg-slate-900">
                            <div className="absolute right-2 top-1/2 z-10 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-slate-700/80" />
                            <Image src={card.image} alt={card.title} fill className="object-cover" />
                          </div>
                        </div>
                        <div className="absolute -top-[3px] right-1/3 h-[3px] w-5 rounded-full bg-white/55" />
                        <div
                          className={`absolute -bottom-3 right-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow-lg ${tone.chip}`}
                        >
                          {language === "en" ? "Mockup" : "Mockup"}
                        </div>
                      </div>
                    </div>
                    <CardContent className="space-y-3 px-6 pb-6 pt-3">
                      <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                        {card.title}
                      </h3>
                      <p className="text-base leading-7 text-foreground/75">{card.body}</p>
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
          <div className="mx-auto max-w-6xl space-y-6 rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-xl md:p-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl font-bold text-primary md:text-5xl font-[family-name:var(--font-display)]">
                {copy.compareTitle}
              </h2>
              <p className="text-lg leading-8 text-foreground/75">{copy.compareSubtitle}</p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200">
              <div className="grid grid-cols-2 bg-slate-100 text-sm font-semibold text-primary md:grid-cols-5">
                <div className="border-b border-slate-200 px-4 py-4 md:px-6">
                  {language === "en" ? "Dimension" : "Dimensión"}
                </div>
                {copy.compareColumns.map((column) => (
                  <div key={column} className="border-b border-l border-slate-200 px-4 py-4 md:px-6">
                    {column}
                  </div>
                ))}
              </div>
              {copy.compareRows.map((row, rowIndex) => (
                <div key={row.label} className="grid grid-cols-2 bg-white md:grid-cols-5">
                  <div
                    className={`px-4 py-5 text-sm font-semibold text-primary md:px-6 ${
                      rowIndex < copy.compareRows.length - 1 ? "border-b border-slate-200" : ""
                    }`}
                  >
                    {row.label}
                  </div>
                  {row.values.map((value, valueIndex) => (
                    <div
                      key={`${row.label}-${valueIndex}`}
                      className={`border-l border-slate-200 px-4 py-5 text-sm leading-6 text-foreground/75 md:px-6 ${
                        rowIndex < copy.compareRows.length - 1 ? "border-b border-slate-200" : ""
                      } ${valueIndex === 3 ? "bg-emerald-50/70 font-medium text-foreground/90" : ""}`}
                    >
                      {value}
                    </div>
                  ))}
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
                  {copy.finalTitle}
                </h2>
                <p className="max-w-3xl text-lg leading-8 text-white/90">{copy.finalBody}</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-8 py-7 text-base font-bold text-primary shadow-xl hover:bg-white/90"
                  asChild
                >
                  <Link href="/download">{copy.finalPrimary}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white/40 bg-transparent px-8 py-7 text-base font-bold text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/tech">{copy.finalSecondary}</Link>
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
