"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n-context"
import { Globe } from "lucide-react"
import Link from "next/link"

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, language, setLanguage } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b-2 border-primary/10 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <a href="/">
              <span className="text-white font-bold text-lg">T</span>
            </a>
          </div>
          <a href="/">
            <span className="text-2xl font-bold text-primary font-[family-name:var(--font-display)]">Tubestr</span>
          </a>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-2 bg-white/50 rounded-full px-2 md:px-3 py-1.5 border border-primary/10">
            <Globe className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className="rounded-full h-6 md:h-7 px-2 md:px-3 text-xs md:text-sm"
            >
              EN
            </Button>
            <Button
              variant={language === "es" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("es")}
              className="rounded-full h-6 md:h-7 px-2 md:px-3 text-xs md:text-sm"
            >
              ES
            </Button>
          </div>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg text-xs md:text-sm px-3 md:px-4"
            asChild
          >
            <Link href="/download">
              {t("hero.joinBeta")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
