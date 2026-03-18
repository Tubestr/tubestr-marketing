"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n-context"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StickyHeader } from "@/components/sticky-header"
import { Apple, Download, Package } from "lucide-react"
import Link from "next/link"

export default function DownloadPage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-green-50">
      <StickyHeader />

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-lg shadow-md">
              {t("download.badge")}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance text-primary font-[family-name:var(--font-display)] leading-tight">
              {t("download.title")}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 text-balance max-w-xl mx-auto leading-relaxed">
              {t("download.subtitle")}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Download Options */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

          {/* TestFlight */}
          <ScrollReveal delay={100}>
            <Card className="border-3 border-primary/30 bg-gradient-to-br from-white to-blue-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
              <CardContent className="p-10 space-y-6 flex flex-col flex-1">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl">
                  <Apple className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
                    {t("download.testflight.platform")}
                  </div>
                  <h2 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                    {t("download.testflight.title")}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed">
                    {t("download.testflight.desc")}
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-full text-lg py-6 shadow-xl font-bold transition-all hover:scale-105"
                  asChild
                >
                  <a href="https://testflight.apple.com/join/8jZ2GuxV" target="_blank" rel="noopener noreferrer">
                    <Apple className="w-5 h-5 mr-2" />
                    {t("download.testflight.button")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Zapstore */}
          <ScrollReveal delay={200}>
            <Card className="border-3 border-purple-300 bg-gradient-to-br from-white to-purple-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
              <CardContent className="p-10 space-y-6 flex flex-col flex-1">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-xl">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-bold rounded-full">
                    {t("download.zapstore.platform")}
                  </div>
                  <h2 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                    {t("download.zapstore.title")}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed">
                    {t("download.zapstore.desc")}
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white rounded-full text-lg py-6 shadow-xl font-bold transition-all hover:scale-105"
                  asChild
                >
                  <a href="https://zapstore.dev/apps/app.tubestr.mobile" target="_blank" rel="noopener noreferrer">
                    <Package className="w-5 h-5 mr-2" />
                    {t("download.zapstore.button")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Direct APK */}
          <ScrollReveal delay={300}>
            <Card className="border-3 border-accent/30 bg-gradient-to-br from-white to-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
              <CardContent className="p-10 space-y-6 flex flex-col flex-1">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                    {t("download.apk.platform")}
                  </div>
                  <h2 className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                    {t("download.apk.title")}
                  </h2>
                  <p className="text-foreground/70 leading-relaxed">
                    {t("download.apk.desc")}
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground rounded-full text-lg py-6 shadow-xl font-bold transition-all hover:scale-105"
                  asChild
                >
                  <a href="https://github.com/Tubestr/tubestr-v2/releases" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    {t("download.apk.button")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Help Note */}
      <section className="container mx-auto px-4 pb-20">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur rounded-3xl p-8 shadow-lg border border-primary/10 text-center space-y-4">
            <p className="text-foreground/70 leading-relaxed text-lg">
              {t("download.help")}
            </p>
            <Button variant="outline" className="border-2 border-primary/30 text-primary rounded-full" asChild>
              <Link href="/">{t("download.backHome")}</Link>
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
