"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Users, Lock, Cloud, Key, Sparkles, Heart, Star, Smile, Zap } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StickyHeader } from "@/components/sticky-header"
import Link from "next/link"

export default function TubestrLanding() {
  const { t, language } = useI18n()

  const screenshots = {
    parentDashboard: "/images/IMG_0439.webp",
    familyConnections: "/images/IMG_4223.webp",
    editor: "/images/IMG_0438.webp",
    viewing: "/images/IMG_0440.webp",
    home: "/images/IMG_0437.webp",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-green-50">
      <StickyHeader />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center gap-4 mb-6">
              <Star className="w-10 h-10 text-yellow-400 fill-yellow-400 animate-pulse" />
              <Sparkles className="w-12 h-12 text-purple-400 fill-purple-400 animate-bounce" />
              <Star className="w-10 h-10 text-yellow-400 fill-yellow-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-balance text-primary font-[family-name:var(--font-display)] leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-2xl text-foreground/80 text-balance max-w-2xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-full text-xl px-10 py-7 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 font-bold"
                asChild
              >
                <Link href="/download">
                  {t("hero.joinBeta")} 🎉
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full text-xl px-10 py-7 bg-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-bold"
              >
                <Link href="/tech">{t("hero.learnMore")}</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <div className="w-full h-16 bg-gradient-to-b from-transparent to-white/50" />

      {/* What Makes Tubestr Different */}
      <section className="container mx-auto px-4 py-20 bg-white/50 backdrop-blur">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-primary font-[family-name:var(--font-display)]">
              {t("different.title")}
            </h2>
            <p className="text-center text-xl text-foreground/70 mb-16 max-w-2xl mx-auto leading-relaxed">
              {t("different.subtitle")}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={100}>
                <Card className="border-3 border-primary/30 bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                  <CardContent className="p-10 space-y-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("different.connections.title")}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-lg">{t("different.connections.desc")}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="border-3 border-purple-300 bg-gradient-to-br from-white to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                  <CardContent className="p-10 space-y-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-xl">
                      <Key className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("different.nostr.title")}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-lg">{t("different.nostr.desc")}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="border-3 border-accent/30 bg-gradient-to-br from-white to-green-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                  <CardContent className="p-10 space-y-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("different.noAds.title")}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-lg">{t("different.noAds.desc")}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="border-3 border-yellow-300 bg-gradient-to-br from-white to-yellow-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                  <CardContent className="p-10 space-y-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-xl">
                      <Lock className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("different.storage.title")}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-lg">{t("different.storage.desc")}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <div className="w-full h-16 bg-gradient-to-b from-white/50 to-transparent" />

      {/* App Screenshots Section */}
      <section className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-primary font-[family-name:var(--font-display)]">
              {t("screenshots.title")}
            </h2>
            <p className="text-center text-xl text-foreground/70 mb-16 leading-relaxed">{t("screenshots.subtitle")}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal delay={100}>
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl border-3 border-primary/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
                  <div className="relative aspect-[19/9] rounded-3xl overflow-hidden shadow-2xl mb-6 bg-gray-100 border-4 border-gray-800">
                    <Image
                      src={screenshots.parentDashboard || "/placeholder.svg"}
                      alt={t("screenshots.parentDashboard")}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary text-center font-[family-name:var(--font-display)] mb-2">
                    {t("screenshots.parentDashboard")}
                  </h3>
                  <p className="text-sm text-foreground/70 text-center leading-relaxed">
                    {t("screenshots.parentDashboard.desc")}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-2xl border-3 border-purple-200 hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
                  <div className="relative aspect-[19/9] rounded-3xl overflow-hidden shadow-2xl mb-6 bg-gray-100 border-4 border-gray-800">
                    <Image
                      src={screenshots.familyConnections || "/placeholder.svg"}
                      alt={t("screenshots.familyConnections")}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary text-center font-[family-name:var(--font-display)] mb-2">
                    {t("screenshots.familyConnections")}
                  </h3>
                  <p className="text-sm text-foreground/70 text-center leading-relaxed">
                    {t("screenshots.familyConnections.desc")}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 shadow-2xl border-3 border-accent/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
                  <div className="relative aspect-[19/9] rounded-3xl overflow-hidden shadow-2xl mb-6 bg-gray-100 border-4 border-gray-800">
                    <Image
                      src={screenshots.editor || "/placeholder.svg"}
                      alt={t("screenshots.creativeEditor")}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary text-center font-[family-name:var(--font-display)] mb-2">
                    {t("screenshots.creativeEditor")}
                  </h3>
                  <p className="text-sm text-foreground/70 text-center leading-relaxed">
                    {t("screenshots.creativeEditor.desc")}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-8 shadow-2xl border-3 border-yellow-200 hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
                  <div className="relative aspect-[19/9] rounded-3xl overflow-hidden shadow-2xl mb-6 bg-gray-100 border-4 border-gray-800">
                    <Image
                      src={screenshots.viewing || "/placeholder.svg"}
                      alt={t("screenshots.safeSharing")}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary text-center font-[family-name:var(--font-display)] mb-2">
                    {t("screenshots.safeSharing")}
                  </h3>
                  <p className="text-sm text-foreground/70 text-center leading-relaxed">
                    {t("screenshots.safeSharing.desc")}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-white/80 to-purple-100/50 backdrop-blur rounded-[3rem] my-12 shadow-xl">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-primary font-[family-name:var(--font-display)]">
              {t("howItWorks.title")}
            </h2>
            <p className="text-center text-xl text-foreground/70 mb-16 leading-relaxed">{t("howItWorks.subtitle")}</p>
            <div className="grid md:grid-cols-3 gap-12">
              <ScrollReveal delay={100}>
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-4xl font-bold mx-auto shadow-2xl animate-pulse">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                    {t("howItWorks.create.title")}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-lg">{t("howItWorks.create.desc")}</p>
                  <Smile className="w-10 h-10 text-yellow-500 mx-auto" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center text-4xl font-bold mx-auto shadow-2xl animate-pulse">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                    {t("howItWorks.approve.title")}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-lg">{t("howItWorks.approve.desc")}</p>
                  <Heart className="w-10 h-10 text-pink-500 mx-auto fill-pink-500" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center text-4xl font-bold mx-auto shadow-2xl animate-pulse">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                    {t("howItWorks.share.title")}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-lg">{t("howItWorks.share.desc")}</p>
                  <Zap className="w-10 h-10 text-green-500 mx-auto" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* For Parents */}
      <section className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-bold mb-4 text-lg shadow-md">
                  {t("forParents.badge")}
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-primary font-[family-name:var(--font-display)] leading-tight">
                  {t("forParents.title")}
                </h2>
                <p className="text-xl text-foreground/80 leading-relaxed">{t("forParents.desc")}</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-foreground/80 text-xl leading-relaxed">{t("forParents.check1")}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-foreground/80 text-xl leading-relaxed">{t("forParents.check2")}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-foreground/80 text-xl leading-relaxed">{t("forParents.check3")}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-foreground/80 text-xl leading-relaxed">{t("forParents.check4")}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-[3rem] p-10 shadow-2xl border-3 border-primary/30 hover:shadow-3xl transition-all hover:-translate-y-2">
                <div className="relative aspect-[19/9] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-gray-800">
                  <Image
                    src={screenshots.parentDashboard || "/placeholder.svg"}
                    alt={t("forParents.imageCaption")}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-base text-foreground/60 mt-6 font-semibold">
                  {t("forParents.imageCaption")}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* For Kids */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-[3rem] my-12 shadow-xl">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-white to-green-50 rounded-[3rem] p-10 shadow-2xl border-3 border-accent/30 hover:shadow-3xl transition-all hover:-translate-y-2">
                <div className="relative aspect-[19/9] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-gray-800">
                  <Image
                    src={screenshots.home || "/placeholder.svg"}
                    alt={t("forKids.imageCaption")}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-base text-foreground/60 mt-6 font-semibold">
                  {t("forKids.imageCaption")}
                </p>
              </div>
              <div className="space-y-8 order-1 md:order-2">
                <div className="inline-block px-6 py-3 bg-accent/10 rounded-full text-accent font-bold mb-4 text-lg shadow-md">
                  {t("forKids.badge")}
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-primary font-[family-name:var(--font-display)] leading-tight">
                  {t("forKids.title")}
                </h2>
                <p className="text-xl text-foreground/80 leading-relaxed">{t("forKids.desc")}</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <Sparkles className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-xl leading-relaxed">{t("forKids.feature1")}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Sparkles className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-xl leading-relaxed">{t("forKids.feature2")}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Sparkles className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-xl leading-relaxed">{t("forKids.feature3")}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Sparkles className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-xl leading-relaxed">{t("forKids.feature4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Built on Nostr */}
      <section className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="w-28 h-28 rounded-[2rem] bg-gradient-to-br from-primary via-purple-500 to-accent flex items-center justify-center mx-auto shadow-2xl animate-pulse">
              <Key className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary font-[family-name:var(--font-display)] leading-tight">
              {t("nostr.title")}
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">{t("nostr.desc")}</p>
            <div className="grid sm:grid-cols-3 gap-8 pt-12">
              <ScrollReveal delay={100}>
                <div className="space-y-4 bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl border-3 border-primary/20 hover:shadow-3xl transition-all hover:-translate-y-2">
                  <div className="text-6xl font-bold text-primary font-[family-name:var(--font-display)]">
                    {t("nostr.stat1")}
                  </div>
                  <div className="text-lg text-foreground/70 font-semibold">{t("nostr.stat1.label")}</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="space-y-4 bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-2xl border-3 border-purple-200 hover:shadow-3xl transition-all hover:-translate-y-2">
                  <div className="text-6xl font-bold text-accent font-[family-name:var(--font-display)]">
                    {t("nostr.stat2")}
                  </div>
                  <div className="text-lg text-foreground/70 font-semibold">{t("nostr.stat2.label")}</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="space-y-4 bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-8 shadow-2xl border-3 border-yellow-200 hover:shadow-3xl transition-all hover:-translate-y-2">
                  <div className="text-6xl font-bold text-purple-600 font-[family-name:var(--font-display)]">
                    {t("nostr.stat3")}
                  </div>
                  <div className="text-lg text-foreground/70 font-semibold">{t("nostr.stat3.label")}</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Storage Options */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-white/80 to-blue-100/50 backdrop-blur rounded-[3rem] my-12 shadow-xl">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-primary font-[family-name:var(--font-display)]">
              {t("storage.title")}
            </h2>
            <p className="text-center text-xl text-foreground/70 mb-16 leading-relaxed">{t("storage.subtitle")}</p>
            <div className="grid md:grid-cols-2 gap-10">
              <ScrollReveal delay={100}>
                <Card className="border-4 border-primary/40 bg-gradient-to-br from-white to-blue-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                  <CardContent className="p-10 space-y-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl">
                      <Cloud className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("storage.private.title")}
                    </h3>
                    <p className="text-accent text-2xl font-bold">{t("storage.private.price")}</p>
                    <p className="text-foreground/80 leading-relaxed text-lg">{t("storage.private.desc")}</p>
                    <ul className="space-y-4 pt-6">
                      <li className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 text-lg">{t("storage.private.feature1")}</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 text-lg">{t("storage.private.feature2")}</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 text-lg">{t("storage.private.feature3")}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="border-4 border-accent/40 bg-gradient-to-br from-white to-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                  <CardContent className="p-10 space-y-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
                      <Lock className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("storage.managed.title")}
                    </h3>
                    <p className="text-primary text-2xl font-bold">{t("storage.managed.price")}</p>
                    <p className="text-foreground/80 leading-relaxed text-lg">{t("storage.managed.desc")}</p>
                    <ul className="space-y-4 pt-6">
                      <li className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 text-lg">{t("storage.managed.feature1")}</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 text-lg">{t("storage.managed.feature2")}</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 text-lg">{t("storage.managed.feature3")}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Join the Movement */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-primary via-purple-600 to-accent text-white rounded-[3rem] my-12 shadow-3xl">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <div className="flex justify-center gap-4">
              <Heart className="w-14 h-14 text-white fill-white/30 animate-pulse" />
              <Star className="w-14 h-14 text-yellow-300 fill-yellow-300 animate-bounce" />
              <Heart className="w-14 h-14 text-white fill-white/30 animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-balance font-[family-name:var(--font-display)] leading-tight">
              {t("join.title")}
            </h2>
            <p className="text-xl md:text-3xl text-white/95 text-balance leading-relaxed">{t("join.desc")}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all font-bold hover:scale-110"
                asChild
              >
                <Link href="/download">
                  {t("join.beta")} 🚀
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-white text-white hover:bg-white/20 rounded-full text-xl px-12 py-8 bg-transparent font-bold hover:scale-110 transition-all shadow-xl"
              >
                <Link href="/tech">{t("join.nostr")}</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 text-center text-foreground/60">
        <div className="flex justify-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-pink-500 fill-pink-500 animate-pulse" />
        </div>
        <p className="text-lg font-bold">{t("footer.copyright")}</p>
        <p className="mt-3 text-base">{t("footer.tagline")}</p>
      </footer>
    </div>
  )
}
