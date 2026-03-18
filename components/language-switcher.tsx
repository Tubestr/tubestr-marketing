"use client"

import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-lg border-2 border-primary/10">
      <Globe className="w-4 h-4 text-primary" />
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="rounded-full h-8 px-3 text-sm"
      >
        EN
      </Button>
      <Button
        variant={language === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("es")}
        className="rounded-full h-8 px-3 text-sm"
      >
        ES
      </Button>
    </div>
  )
}
