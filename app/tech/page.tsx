"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Key, Lock, Users, Zap, Globe, Server, Eye } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StickyHeader } from "@/components/sticky-header"
import Link from "next/link"

export default function TechPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-green-50">
      <StickyHeader />

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-bold mb-4 text-lg shadow-md">
              {t("tech.badge")}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance text-primary font-[family-name:var(--font-display)] leading-tight">
              {t("tech.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 text-balance max-w-2xl mx-auto leading-relaxed">
              {t("tech.hero.subtitle")}
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-lg px-8 py-6 bg-white shadow-lg mt-6"
              asChild
            >
              <Link href="/">{t("tech.backHome")}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Overview */}
      <section className="container mx-auto px-4 py-20 bg-white/50 backdrop-blur">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-display)]">
              {t("tech.overview.title")}
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">{t("tech.overview.desc")}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Nostr Protocol */}
      <section className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-xl">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-display)]">
                  {t("tech.nostr.title")}
                </h2>
                <p className="text-xl text-foreground/80 leading-relaxed">{t("tech.nostr.desc")}</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Key className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-primary">{t("tech.nostr.feature1.title")}</h3>
                      <p className="text-foreground/80">{t("tech.nostr.feature1.desc")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Server className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-primary">{t("tech.nostr.feature2.title")}</h3>
                      <p className="text-foreground/80">{t("tech.nostr.feature2.desc")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-primary">{t("tech.nostr.feature3.title")}</h3>
                      <p className="text-foreground/80">{t("tech.nostr.feature3.desc")}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <Card className="border-3 border-purple-300 bg-gradient-to-br from-white to-purple-50 shadow-2xl">
                <CardContent className="p-10">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("tech.nostr.simple.title")}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{t("tech.nostr.simple.desc")}</p>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="space-y-4 text-sm text-foreground/70">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-purple-500" />
                          <span>{t("tech.nostr.simple.step1")}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-purple-500" />
                          <span>{t("tech.nostr.simple.step2")}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-purple-500" />
                          <span>{t("tech.nostr.simple.step3")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* MLS */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-white/80 to-blue-100/50 backdrop-blur rounded-[3rem] my-12 shadow-xl">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <Card className="border-3 border-blue-300 bg-gradient-to-br from-white to-blue-50 shadow-2xl order-2 md:order-1">
                <CardContent className="p-10">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("tech.mls.simple.title")}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{t("tech.mls.simple.desc")}</p>
                    <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-foreground/70">{t("tech.mls.simple.benefit1")}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-foreground/70">{t("tech.mls.simple.benefit2")}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-sm text-foreground/70">{t("tech.mls.simple.benefit3")}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6 order-1 md:order-2">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-display)]">
                  {t("tech.mls.title")}
                </h2>
                <p className="text-xl text-foreground/80 leading-relaxed">{t("tech.mls.desc")}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Marmot */}
      <section className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-display)]">
                  {t("tech.marmot.title")}
                </h2>
                <p className="text-xl text-foreground/80 leading-relaxed">{t("tech.marmot.desc")}</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-primary">{t("tech.marmot.feature1.title")}</h3>
                      <p className="text-foreground/80">{t("tech.marmot.feature1.desc")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-primary">{t("tech.marmot.feature2.title")}</h3>
                      <p className="text-foreground/80">{t("tech.marmot.feature2.desc")}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <Card className="border-3 border-accent/30 bg-gradient-to-br from-white to-green-50 shadow-2xl">
                <CardContent className="p-10">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("tech.marmot.simple.title")}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{t("tech.marmot.simple.desc")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* E2E Encryption */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-white/80 to-purple-100/50 backdrop-blur rounded-[3rem] my-12 shadow-xl">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center shadow-xl mx-auto">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-display)]">
                {t("tech.e2e.title")}
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">{t("tech.e2e.desc")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <Card className="border-3 border-purple-200 bg-white shadow-xl hover:shadow-2xl transition-all">
                  <CardContent className="p-8 space-y-4">
                    <Eye className="w-10 h-10 text-purple-600" />
                    <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("tech.e2e.feature1.title")}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{t("tech.e2e.feature1.desc")}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="border-3 border-purple-200 bg-white shadow-xl hover:shadow-2xl transition-all">
                  <CardContent className="p-8 space-y-4">
                    <Shield className="w-10 h-10 text-purple-600" />
                    <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("tech.e2e.feature2.title")}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{t("tech.e2e.feature2.desc")}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="border-3 border-purple-200 bg-white shadow-xl hover:shadow-2xl transition-all">
                  <CardContent className="p-8 space-y-4">
                    <Key className="w-10 h-10 text-purple-600" />
                    <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {t("tech.e2e.feature3.title")}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">{t("tech.e2e.feature3.desc")}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary via-purple-600 to-accent text-white rounded-[3rem] p-12 md:p-16 text-center space-y-8 shadow-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-balance font-[family-name:var(--font-display)] leading-tight">
              {t("tech.cta.title")}
            </h2>
            <p className="text-xl text-white/95 text-balance leading-relaxed">{t("tech.cta.desc")}</p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full text-xl px-12 py-8 shadow-2xl font-bold hover:scale-110 transition-all"
              asChild
            >
              <a href="https://testflight.apple.com/join/8jZ2GuxV" target="_blank" rel="noopener noreferrer">
                {t("tech.cta.button")}
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 text-center text-foreground/60">
        <p className="text-lg font-bold">{t("footer.copyright")}</p>
        <p className="mt-3 text-base">{t("footer.tagline")}</p>
      </footer>
    </div>
  )
}
