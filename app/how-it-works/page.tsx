"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { StickyHeader } from "@/components/sticky-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";
import { track } from "@vercel/analytics";
import {
  ArrowRight,
  Check,
  Download,
  EyeOff,
  KeyRound,
  Lock,
  Shield,
  Smartphone,
  Sparkles,
  UserPlus,
  Users,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const content = {
  en: {
    badge: "How Tubestr works",
    title: "From install to sharing in five clear steps.",
    subtitle:
      "Tubestr keeps parents in control at every stage. Here is the full flow from downloading the app to kids sharing videos inside trusted family circles.",
    steps: [
      {
        number: "1",
        title: "Download and create your parent identity",
        body: "Install Tubestr from TestFlight (iOS) or Zapstore / APK (Android). When you open the app for the first time, you create a parent identity — a private key pair that belongs to you, not to Tubestr. This identity is the foundation of everything: approvals, circles, and encryption all start here.",
        detail:
          "Your identity is built on Nostr, an open protocol. You own your keys, which means no company can lock you out or delete your account.",
        icon: Smartphone,
        image: null,
        color: "blue",
      },
      {
        number: "2",
        title: "Set up a child profile",
        body: "From the Parent Zone, create a profile for each child. The child profile is linked to and managed by your parent identity. Children never need an email address, phone number, or password — their profile exists under your control.",
        detail:
          "You can create multiple child profiles for siblings. Each child gets their own space, but every profile is governed by your parent account.",
        icon: UserPlus,
        image: "/images/IMG_0439.webp",
        color: "purple",
      },
      {
        number: "3",
        title: "Build the trusted circle",
        body: "Before your child can share anything, you decide who they connect with. Send connection requests to other families. Both parents must approve the relationship before kids can see each other. No random followers, no friend-of-a-friend discovery, no algorithm suggestions.",
        detail:
          "Every connection is a two-way parent approval. If grandma wants to see your child's videos, both you and grandma's family approve the link first.",
        icon: Users,
        image: "/images/IMG_0437.webp",
        color: "teal",
      },
      {
        number: "4",
        title: "Kids create videos",
        body: "Once the circle is set, kids switch to their profile and start creating. Record a short video, add effects, and get ready to share. The creative tools are designed for kids — simple, fun, and focused on making rather than consuming.",
        detail:
          "There is no public feed to scroll, no trending page, and no engagement metrics. The experience is creation-first: kids open the app to make something, not to get lost in content.",
        icon: Video,
        image: "/images/IMG_0438.webp",
        color: "amber",
      },
      {
        number: "5",
        title: "Share privately inside the circle",
        body: "When a child posts a video, it goes only to the people in their parent-approved circle. Videos are encrypted end-to-end, which means only trusted family devices can play them back. Not Tubestr, not anyone on the internet — just the people you chose.",
        detail:
          "Shared videos stay private by default. There is no way for content to leak to a public audience because there is no public audience in Tubestr.",
        icon: Lock,
        image: "/images/IMG_0440.webp",
        color: "green",
      },
    ],
    principlesTitle: "What stays true at every step",
    principles: [
      {
        title: "Parents approve every relationship",
        body: "No child connection exists without explicit parent consent on both sides.",
        icon: Shield,
      },
      {
        title: "No public exposure",
        body: "There is no feed, no discovery page, and no way for strangers to find your child.",
        icon: EyeOff,
      },
      {
        title: "Family-owned identity",
        body: "Your keys, your data. No corporation owns your family's content or can revoke access.",
        icon: KeyRound,
      },
      {
        title: "Encrypted by default",
        body: "Videos are encrypted before leaving the device and only decrypted by trusted family members.",
        icon: Lock,
      },
    ],
    ctaTitle: "Ready to try it with your family?",
    ctaBody:
      "Tubestr is in private beta. Install the app, set up your first child profile, and see how parent-approved sharing works in practice.",
    ctaPrimary: "Download the beta",
    ctaSecondary: "Read the trust tech",
  },
  es: {
    badge: "Cómo funciona Tubestr",
    title: "De la instalación a compartir en cinco pasos claros.",
    subtitle:
      "Tubestr mantiene a los padres en control en cada etapa. Aquí está el flujo completo desde descargar la app hasta que los niños compartan videos dentro de círculos familiares de confianza.",
    steps: [
      {
        number: "1",
        title: "Descarga y crea tu identidad de padre",
        body: "Instala Tubestr desde TestFlight (iOS) o Zapstore / APK (Android). Cuando abres la app por primera vez, creas una identidad parental — un par de claves privadas que te pertenece a ti, no a Tubestr. Esta identidad es la base de todo: aprobaciones, círculos y cifrado comienzan aquí.",
        detail:
          "Tu identidad está construida sobre Nostr, un protocolo abierto. Tú posees tus claves, lo que significa que ninguna empresa puede bloquearte o eliminar tu cuenta.",
        icon: Smartphone,
        image: null,
        color: "blue",
      },
      {
        number: "2",
        title: "Configura un perfil infantil",
        body: "Desde la Zona Parental, crea un perfil para cada niño. El perfil infantil está vinculado y gestionado por tu identidad parental. Los niños nunca necesitan un correo electrónico, número de teléfono ni contraseña — su perfil existe bajo tu control.",
        detail:
          "Puedes crear múltiples perfiles infantiles para hermanos. Cada niño tiene su propio espacio, pero cada perfil está gobernado por tu cuenta parental.",
        icon: UserPlus,
        image: "/images/IMG_0439.webp",
        color: "purple",
      },
      {
        number: "3",
        title: "Construye el círculo de confianza",
        body: "Antes de que tu hijo pueda compartir algo, tú decides con quién se conecta. Envía solicitudes de conexión a otras familias. Ambos padres deben aprobar la relación antes de que los niños puedan verse. Sin seguidores aleatorios, sin descubrimiento de amigos-de-amigos, sin sugerencias algorítmicas.",
        detail:
          "Cada conexión es una aprobación bilateral de padres. Si la abuela quiere ver los videos de tu hijo, tanto tú como la familia de la abuela aprueban el vínculo primero.",
        icon: Users,
        image: "/images/IMG_0437.webp",
        color: "teal",
      },
      {
        number: "4",
        title: "Los niños crean videos",
        body: "Una vez que el círculo está configurado, los niños cambian a su perfil y comienzan a crear. Graba un video corto, agrega efectos y prepárate para compartir. Las herramientas creativas están diseñadas para niños — simples, divertidas y enfocadas en crear en lugar de consumir.",
        detail:
          "No hay un feed público para deslizar, ni una página de tendencias, ni métricas de engagement. La experiencia prioriza la creación: los niños abren la app para hacer algo, no para perderse en contenido.",
        icon: Video,
        image: "/images/IMG_0438.webp",
        color: "amber",
      },
      {
        number: "5",
        title: "Comparte en privado dentro del círculo",
        body: "Cuando un niño publica un video, solo llega a las personas en su círculo aprobado por padres. Los videos están cifrados de extremo a extremo, lo que significa que solo los dispositivos familiares de confianza pueden reproducirlos. Ni Tubestr, ni nadie en internet — solo las personas que elegiste.",
        detail:
          "Los videos compartidos permanecen privados por defecto. No hay forma de que el contenido se filtre a una audiencia pública porque no existe audiencia pública en Tubestr.",
        icon: Lock,
        image: "/images/IMG_0440.webp",
        color: "green",
      },
    ],
    principlesTitle: "Lo que se mantiene en cada paso",
    principles: [
      {
        title: "Los padres aprueban cada relación",
        body: "Ninguna conexión infantil existe sin el consentimiento explícito de los padres de ambos lados.",
        icon: Shield,
      },
      {
        title: "Sin exposición pública",
        body: "No hay feed, ni página de descubrimiento, ni forma de que extraños encuentren a tu hijo.",
        icon: EyeOff,
      },
      {
        title: "Identidad de propiedad familiar",
        body: "Tus claves, tus datos. Ninguna corporación posee el contenido de tu familia ni puede revocar el acceso.",
        icon: KeyRound,
      },
      {
        title: "Cifrado por defecto",
        body: "Los videos se cifran antes de salir del dispositivo y solo se descifran por miembros familiares de confianza.",
        icon: Lock,
      },
    ],
    ctaTitle: "¿Listo para probarlo con tu familia?",
    ctaBody:
      "Tubestr está en beta privada. Instala la app, configura tu primer perfil infantil y ve cómo funciona la compartición aprobada por padres en la práctica.",
    ctaPrimary: "Descargar la beta",
    ctaSecondary: "Leer la base técnica",
  },
} as const;

const colorClasses = {
  blue: {
    step: "bg-primary text-white",
    card: "border-primary/15 bg-blue-50/60",
    iconBg: "bg-primary/10 text-primary",
    accent: "from-primary/10 via-transparent to-transparent",
  },
  purple: {
    step: "bg-purple-600 text-white",
    card: "border-purple-200/60 bg-purple-50/60",
    iconBg: "bg-purple-100 text-purple-600",
    accent: "from-purple-400/10 via-transparent to-transparent",
  },
  teal: {
    step: "bg-teal-600 text-white",
    card: "border-teal-200/60 bg-teal-50/60",
    iconBg: "bg-teal-100 text-teal-600",
    accent: "from-teal-400/10 via-transparent to-transparent",
  },
  amber: {
    step: "bg-amber-500 text-white",
    card: "border-amber-200/60 bg-amber-50/60",
    iconBg: "bg-amber-100 text-amber-600",
    accent: "from-amber-300/10 via-transparent to-transparent",
  },
  green: {
    step: "bg-emerald-600 text-white",
    card: "border-emerald-200/60 bg-emerald-50/60",
    iconBg: "bg-emerald-100 text-emerald-600",
    accent: "from-emerald-400/10 via-transparent to-transparent",
  },
} as const;

export default function HowItWorksPage() {
  const { language } = useI18n();
  const copy = content[language];

  const trackCta = () => {
    track("beta_download_cta_clicked", {
      location: "how-it-works",
      language,
      page: "how-it-works",
    });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(180deg,_#f8fbff_0%,_#eef6ff_35%,_#f7f3ea_100%)]">
      <StickyHeader />

      {/* Hero */}
      <section className="container mx-auto px-4 pt-24 pb-14 md:pt-32 md:pb-20">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/90 px-5 py-2 text-sm font-semibold text-primary shadow-md">
              <Sparkles className="h-4 w-4" />
              <span>{copy.badge}</span>
            </div>
            <h1 className="text-5xl font-bold leading-[0.96] text-primary md:text-7xl font-[family-name:var(--font-display)]">
              {copy.title}
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-foreground/80 md:text-2xl">
              {copy.subtitle}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-4 pb-14 md:pb-20">
        <div className="mx-auto max-w-5xl space-y-8">
          {copy.steps.map((step, index) => {
            const colors =
              colorClasses[step.color as keyof typeof colorClasses];
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={step.number} delay={index * 80}>
                <div
                  className={`relative rounded-[2.5rem] border bg-gradient-to-br ${colors.accent} ${colors.card} p-8 shadow-lg md:p-10`}
                >
                  <div
                    className={`grid gap-8 ${step.image ? "lg:grid-cols-[1.2fr_0.8fr]" : ""} lg:items-center ${!isEven && step.image ? "lg:grid-cols-[0.8fr_1.2fr]" : ""}`}
                  >
                    <div
                      className={`space-y-5 ${!isEven && step.image ? "lg:order-2" : ""}`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold shadow-lg ${colors.step}`}
                        >
                          {step.number}
                        </div>
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg}`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-primary md:text-4xl font-[family-name:var(--font-display)]">
                        {step.title}
                      </h2>
                      <p className="text-base leading-8 text-foreground/80 md:text-lg">
                        {step.body}
                      </p>
                      <div className="rounded-2xl bg-white/70 px-5 py-4 backdrop-blur-sm">
                        <p className="text-sm leading-7 text-foreground/70">
                          {step.detail}
                        </p>
                      </div>
                    </div>

                    {step.image && (
                      <div
                        className={`${!isEven ? "lg:order-1" : ""}`}
                      >
                        <div className="relative mx-auto max-w-sm">
                          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-white/40 to-white/10 blur-xl" />
                          <div className="relative rounded-[1.5rem] bg-slate-950 p-[5px] shadow-[0_22px_50px_-24px_rgba(15,23,42,0.7)] ring-1 ring-white/20">
                            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.1rem] bg-slate-900">
                              <div className="absolute right-2.5 top-1/2 z-10 h-2 w-2 -translate-y-1/2 rounded-full bg-slate-700/80" />
                              <Image
                                src={step.image}
                                alt={step.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="absolute -top-[3px] right-1/3 h-[3px] w-6 rounded-full bg-white/55" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Connector line between steps */}
                  {index < copy.steps.length - 1 && (
                    <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
                      <div className="h-8 w-px bg-gradient-to-b from-slate-300 to-transparent" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Principles */}
      <section className="container mx-auto px-4 py-14 md:py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-5xl space-y-8">
            <h2 className="text-center text-4xl font-bold text-primary md:text-5xl font-[family-name:var(--font-display)]">
              {copy.principlesTitle}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {copy.principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <Card
                    key={principle.title}
                    className="border-white/60 bg-white/85 shadow-lg"
                  >
                    <CardContent className="space-y-4 p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-display)]">
                        {principle.title}
                      </h3>
                      <p className="text-base leading-7 text-foreground/75">
                        {principle.body}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <ScrollReveal>
          <div className="mx-auto max-w-5xl rounded-[2.75rem] bg-[linear-gradient(135deg,_#1d4ed8,_#0f766e_110%)] p-10 text-white shadow-[0_40px_90px_-35px_rgba(29,78,216,0.7)] md:p-14">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div className="space-y-5">
                <h2 className="text-4xl font-bold leading-tight md:text-5xl font-[family-name:var(--font-display)]">
                  {copy.ctaTitle}
                </h2>
                <p className="max-w-3xl text-lg leading-8 text-white/90">
                  {copy.ctaBody}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-8 py-7 text-base font-bold text-primary shadow-xl hover:bg-white/90"
                  asChild
                >
                  <Link href="/download" onClick={trackCta}>
                    <Download className="mr-2 h-5 w-5" />
                    {copy.ctaPrimary}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white/40 bg-transparent px-8 py-7 text-base font-bold text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/tech">{copy.ctaSecondary}</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <footer className="container mx-auto px-4 py-16 text-center text-foreground/60">
        <p className="text-lg font-bold">
          {language === "en"
            ? "\u00a9 2025 Tubestr. Built with love for families."
            : "\u00a9 2025 Tubestr. Construido con amor para familias."}
        </p>
        <p className="mt-3 text-base">
          {language === "en"
            ? "Safe by design \u2022 Parent-guided \u2022 Kid-approved"
            : "Seguro por dise\u00f1o \u2022 Guiado por padres \u2022 Aprobado por ni\u00f1os"}
        </p>
      </footer>
    </div>
  );
}
