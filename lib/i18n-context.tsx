"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("tubestr-language") as Language | null
    if (savedLang) {
      setLanguageState(savedLang)
    } else {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith("es")) {
        setLanguageState("es")
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("tubestr-language", lang)
  }

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero
    "hero.title": "A Safe, Private Video Space Where Kids Can Create and Shine",
    "hero.subtitle":
      "Tubestr lets kids record fun videos and share them in small, parent-approved circles — not with the whole internet.",
    "hero.joinBeta": "Join the Beta",
    "hero.learnMore": "Learn More",

    // What Makes Different
    "different.title": "The Internet Wasn't Built for Kids — And Parents Feel It",
    "different.subtitle": "Tubestr is different by design",
    "different.connections.title": "Small, Trusted Circles",
    "different.connections.desc":
      "Every connection must be parent-approved. No random strangers, no public feeds — just close friends and family.",
    "different.nostr.title": "Private by Design",
    "different.nostr.desc":
      "Built on modern privacy-first technology. Your family owns their content and identity, not a corporation.",
    "different.noAds.title": "No Ads. No Tracking. No Algorithms.",
    "different.noAds.desc":
      "Kids create things, not chase views. No endless scrolling, no engagement tricks, no data mining.",
    "different.storage.title": "Creation-First, Not Algorithm-First",
    "different.storage.desc":
      "Tubestr encourages kids to make videos, not passively consume them. Real creativity, not screen addiction.",

    // Screenshots
    "screenshots.title": "See Tubestr in Action",
    "screenshots.subtitle": "Simple for families. Safe for kids. Fun for everyone.",
    "screenshots.parentDashboard": "Parent Dashboard",
    "screenshots.parentDashboard.desc": "Total control and peace of mind",
    "screenshots.familyConnections": "Family Connections",
    "screenshots.familyConnections.desc": "Easy setup with trusted contacts",
    "screenshots.creativeEditor": "Creative Tools",
    "screenshots.creativeEditor.desc": "Fun, simple recording and editing",
    "screenshots.safeSharing": "Safe Sharing",
    "screenshots.safeSharing.desc": "Videos stay in your trusted circle",

    // How It Works
    "howItWorks.title": "How It Works",
    "howItWorks.subtitle": "Simple for families. Safe for kids. Fun for everyone.",
    "howItWorks.create.title": "Kids Create",
    "howItWorks.create.desc": "Record a quick clip, add a little flair, hit post. Easy tools, big fun.",
    "howItWorks.approve.title": "Parents Approve",
    "howItWorks.approve.desc": "You choose exactly who your child can connect with. Every connection needs your OK.",
    "howItWorks.share.title": "Share in Tiny Circles",
    "howItWorks.share.desc":
      "Kids see videos only from their trusted group — like cousins, classmates, or close friends. No public feed, ever.",

    // For Parents
    "forParents.badge": "For Parents",
    "forParents.title": "You Stay in Control. Easily.",
    "forParents.desc":
      "Tubestr gives kids freedom to create while giving parents peace of mind. You approve every connection, review all videos, and decide where content lives.",
    "forParents.check1": "Approve or deny every connection",
    "forParents.check2": "Review all shared videos",
    "forParents.check3": "Set content boundaries your way",
    "forParents.check4": "Safe by default — nothing escapes the circle",
    "forParents.imageCaption": "Full parental control dashboard",

    // For Kids
    "forKids.badge": "For Kids",
    "forKids.title": "A Place to Make Stuff — Not Just Watch Stuff",
    "forKids.desc":
      "Fun, simple tools to create your own videos. Share with your friends and see what they made. No pressure. No 'perfect content.' Just play.",
    "forKids.feature1": "Easy video recording and editing",
    "forKids.feature2": "Fun effects, stickers, and filters",
    "forKids.feature3": "Share with friends and cousins",
    "forKids.feature4": "Express yourself your way",
    "forKids.imageCaption": "Kid-friendly creative tools",

    // Built on Nostr
    "nostr.title": "Built with Privacy-First Technology",
    "nostr.desc":
      "Your videos stored privately. No third-party tracking. Not built on ad tech or engagement scoring. Encrypted by design, parent-controlled access.",
    "nostr.stat1": "100%",
    "nostr.stat1.label": "Family Owned",
    "nostr.stat2": "0",
    "nostr.stat2.label": "Ads or Trackers",
    "nostr.stat3": "∞",
    "nostr.stat3.label": "Safe Creativity",

    // Storage Options
    "storage.title": "Your Videos, Your Choice",
    "storage.subtitle": "Simple, affordable, family-friendly storage",
    "storage.private.title": "Bring Your Own Storage",
    "storage.private.price": "Free with Your Cloud",
    "storage.private.desc":
      "Connect your preferred cloud service for total control. You own your data completely, no recurring fees from us.",
    "storage.private.feature1": "Complete data ownership",
    "storage.private.feature2": "Use existing cloud storage",
    "storage.private.feature3": "No subscription needed",
    "storage.managed.title": "Tubestr Managed Storage",
    "storage.managed.price": "Simple & Encrypted",
    "storage.managed.desc":
      "We handle the technical details with encrypted storage and automatic backups. Easy setup, total security.",
    "storage.managed.feature1": "Encrypted and secure",
    "storage.managed.feature2": "Automatic backups included",
    "storage.managed.feature3": "Hassle-free management",

    // Join the Movement
    "join.title": "Give Your Kids a Safer, More Creative Digital World",
    "join.desc":
      "Let them express themselves without the noise of the internet. Join our beta and help shape the future of family media.",
    "join.beta": "Try Tubestr Free",
    "join.nostr": "Learn About Our Tech",

    // Download Page
    "download.badge": "Get the App",
    "download.title": "Download Tubestr",
    "download.subtitle": "We're in early beta — pick the option that works best for your device and let us know what you think.",
    "download.testflight.platform": "iOS & iPadOS",
    "download.testflight.title": "Apple TestFlight",
    "download.testflight.desc": "The easiest way to try Tubestr on your iPhone or iPad. Install TestFlight first, then tap our link to join the beta.",
    "download.testflight.button": "Open in TestFlight",
    "download.zapstore.platform": "Android",
    "download.zapstore.title": "Zapstore",
    "download.zapstore.desc": "A privacy-respecting app store built on Nostr. If you're already in the Nostr world, this is the recommended way to install on Android.",
    "download.zapstore.button": "Get on Zapstore",
    "download.apk.platform": "Android",
    "download.apk.title": "Direct APK",
    "download.apk.desc": "Download the APK directly from our GitHub releases page. You'll need to allow installs from unknown sources in your Android settings.",
    "download.apk.button": "Download APK",
    "download.help": "Need help getting set up? Reach out to us — we're happy to walk you through it.",
    "download.backHome": "Back to Home",

    // Footer
    "footer.copyright": "© 2025 Tubestr. Built with love for families.",
    "footer.tagline": "Safe by design • Parent-guided • Kid-approved",

    // Tech Page
    "tech.badge": "Our Technology",
    "tech.hero.title": "Built Different. Built Safe.",
    "tech.hero.subtitle":
      "Tubestr uses cutting-edge, privacy-first technology to keep your family safe. Here's how it works — in plain English.",
    "tech.backHome": "Back to Home",

    "tech.overview.title": "Privacy-First, Family-Second Never",
    "tech.overview.desc":
      "We use modern, proven technologies designed for security and privacy. No tracking. No ads. No data mining. Just safe, fun video sharing for families.",

    // Nostr
    "tech.nostr.title": "Nostr: Your Family's Digital Identity",
    "tech.nostr.desc":
      "Nostr is an open protocol that gives your family true ownership of their digital identity and content. No corporation owns your data — you do.",
    "tech.nostr.feature1.title": "Your Keys, Your Identity",
    "tech.nostr.feature1.desc":
      "Each family member has unique cryptographic keys that prove who they are without needing usernames or passwords stored on our servers.",
    "tech.nostr.feature2.title": "No Central Control",
    "tech.nostr.feature2.desc":
      "Unlike traditional social media, there's no single company that can censor, delete, or control your content. Your family's memories belong to you.",
    "tech.nostr.feature3.title": "Simple Connections",
    "tech.nostr.feature3.desc":
      "Connect with trusted family and friends using secure keys. Only approved connections can see shared content.",
    "tech.nostr.simple.title": "What Does This Mean for You?",
    "tech.nostr.simple.desc": "You don't need to understand the technical details. Here's what matters:",
    "tech.nostr.simple.step1": "Your family owns their identity forever",
    "tech.nostr.simple.step2": "No corporation can lock you out or sell your data",
    "tech.nostr.simple.step3": "Content stays private to your trusted circle",

    // MLS
    "tech.mls.title": "MLS: Secure Group Messaging",
    "tech.mls.desc":
      "Messaging Layer Security (MLS) is the industry-standard protocol for securing group communications. It's the same technology used by major messaging apps to protect billions of messages every day.",
    "tech.mls.simple.title": "What This Means",
    "tech.mls.simple.desc":
      "MLS ensures that when kids share videos in their trusted groups, those communications are encrypted and secure. Even we can't read them.",
    "tech.mls.simple.benefit1": "Military-grade encryption for all group sharing",
    "tech.mls.simple.benefit2": "Proven security used by major tech companies",
    "tech.mls.simple.benefit3": "Seamless experience for all family members",

    // Marmot
    "tech.marmot.title": "Marmot: Lightning-Fast, Super Secure",
    "tech.marmot.desc":
      "Marmot is our implementation of MLS optimized for families. It makes group encryption fast and easy, so kids can share instantly without any technical complexity.",
    "tech.marmot.feature1.title": "Instant Sharing",
    "tech.marmot.feature1.desc":
      "Videos and messages are encrypted and shared in real-time with zero delay. Kids click share, family sees it — all completely secure.",
    "tech.marmot.feature2.title": "Automatic Security",
    "tech.marmot.feature2.desc":
      "All the encryption happens automatically in the background. Kids and parents never need to think about it — it just works.",
    "tech.marmot.simple.title": "The Simple Version",
    "tech.marmot.simple.desc":
      "Think of Marmot as the invisible shield that keeps your family's videos safe while making sure everything works smoothly and quickly.",

    // E2E
    "tech.e2e.title": "End-to-End Encryption: Total Privacy",
    "tech.e2e.desc":
      "End-to-end encryption means that only the people in your trusted circle can see the videos. Not us, not hackers, not anyone. It's mathematically impossible for anyone else to decrypt your family's content.",
    "tech.e2e.feature1.title": "Only You Can See It",
    "tech.e2e.feature1.desc":
      "Videos are encrypted on the device before they leave, and only decrypted on trusted family devices. Nobody in between can peek.",
    "tech.e2e.feature2.title": "Protected from Everyone",
    "tech.e2e.feature2.desc":
      "Even if someone intercepts the data, it's just scrambled gibberish without the encryption keys held by your family members.",
    "tech.e2e.feature3.title": "Industry Standard",
    "tech.e2e.feature3.desc":
      "We use the same encryption standards trusted by banks, governments, and security experts worldwide.",

    // CTA
    "tech.cta.title": "Ready to Try the Safest Family Video App?",
    "tech.cta.desc": "Join our beta and experience peace of mind while your kids create and share safely.",
    "tech.cta.button": "Join the Beta",
  },
  es: {
    // Hero
    "hero.title": "Un Espacio de Video Seguro y Privado Donde los Niños Pueden Crear y Brillar",
    "hero.subtitle":
      "Tubestr permite a los niños grabar videos divertidos y compartirlos en pequeños círculos aprobados por padres — no con todo internet.",
    "hero.joinBeta": "Únete a la Beta",
    "hero.learnMore": "Saber Más",

    // What Makes Different
    "different.title": "Internet No Fue Construido para Niños — Y los Padres lo Sienten",
    "different.subtitle": "Tubestr es diferente por diseño",
    "different.connections.title": "Círculos Pequeños y Confiables",
    "different.connections.desc":
      "Cada conexión debe ser aprobada por padres. Sin extraños aleatorios, sin feeds públicos — solo amigos cercanos y familia.",
    "different.nostr.title": "Privado por Diseño",
    "different.nostr.desc":
      "Construido con tecnología moderna que prioriza la privacidad. Tu familia posee su contenido e identidad, no una corporación.",
    "different.noAds.title": "Sin Anuncios. Sin Rastreo. Sin Algoritmos.",
    "different.noAds.desc":
      "Los niños crean cosas, no persiguen vistas. Sin desplazamiento infinito, sin trucos de engagement, sin minería de datos.",
    "different.storage.title": "Creación Primero, No Algoritmos",
    "different.storage.desc":
      "Tubestr anima a los niños a hacer videos, no a consumirlos pasivamente. Creatividad real, no adicción a pantallas.",

    // Screenshots
    "screenshots.title": "Ve Tubestr en Acción",
    "screenshots.subtitle": "Simple para familias. Seguro para niños. Divertido para todos.",
    "screenshots.parentDashboard": "Panel de Padres",
    "screenshots.parentDashboard.desc": "Control total y tranquilidad",
    "screenshots.familyConnections": "Conexiones Familiares",
    "screenshots.familyConnections.desc": "Configuración fácil con contactos de confianza",
    "screenshots.creativeEditor": "Herramientas Creativas",
    "screenshots.creativeEditor.desc": "Grabación y edición divertida y simple",
    "screenshots.safeSharing": "Compartir Seguro",
    "screenshots.safeSharing.desc": "Los videos quedan en tu círculo de confianza",

    // How It Works
    "howItWorks.title": "Cómo Funciona",
    "howItWorks.subtitle": "Simple para familias. Seguro para niños. Divertido para todos.",
    "howItWorks.create.title": "Los Niños Crean",
    "howItWorks.create.desc":
      "Graba un clip rápido, añade un toque especial, publica. Herramientas fáciles, mucha diversión.",
    "howItWorks.approve.title": "Los Padres Aprueban",
    "howItWorks.approve.desc":
      "Tú eliges exactamente con quién puede conectarse tu hijo. Cada conexión necesita tu aprobación.",
    "howItWorks.share.title": "Comparte en Círculos Pequeños",
    "howItWorks.share.desc":
      "Los niños ven videos solo de su grupo de confianza — como primos, compañeros de clase o amigos cercanos. Sin feed público, nunca.",

    // For Parents
    "forParents.badge": "Para Padres",
    "forParents.title": "Tú Mantienes el Control. Fácilmente.",
    "forParents.desc":
      "Tubestr da a los niños libertad para crear mientras da a los padres tranquilidad. Apruebas cada conexión, revisas todos los videos y decides dónde vive el contenido.",
    "forParents.check1": "Aprueba o rechaza cada conexión",
    "forParents.check2": "Revisa todos los videos compartidos",
    "forParents.check3": "Establece límites de contenido a tu manera",
    "forParents.check4": "Seguro por defecto — nada escapa del círculo",
    "forParents.imageCaption": "Panel de control parental completo",

    // For Kids
    "forKids.badge": "Para Niños",
    "forKids.title": "Un Lugar para Hacer Cosas — No Solo Ver Cosas",
    "forKids.desc":
      "Herramientas divertidas y simples para crear tus propios videos. Comparte con tus amigos y ve lo que hicieron. Sin presión. Sin 'contenido perfecto.' Solo juega.",
    "forKids.feature1": "Grabación y edición de video fácil",
    "forKids.feature2": "Efectos, stickers y filtros divertidos",
    "forKids.feature3": "Comparte con amigos y primos",
    "forKids.feature4": "Exprésate a tu manera",
    "forKids.imageCaption": "Herramientas creativas amigables para niños",

    // Built on Nostr
    "nostr.title": "Construido con Tecnología que Prioriza la Privacidad",
    "nostr.desc":
      "Tus videos almacenados privadamente. Sin rastreo de terceros. No construido con tecnología de anuncios o puntuación de engagement. Encriptado por diseño, acceso controlado por padres.",
    "nostr.stat1": "100%",
    "nostr.stat1.label": "Propiedad Familiar",
    "nostr.stat2": "0",
    "nostr.stat2.label": "Anuncios o Rastreadores",
    "nostr.stat3": "∞",
    "nostr.stat3.label": "Creatividad Segura",

    // Storage Options
    "storage.title": "Tus Videos, Tu Elección",
    "storage.subtitle": "Almacenamiento simple, asequible y familiar",
    "storage.private.title": "Trae Tu Propio Almacenamiento",
    "storage.private.price": "Gratis con Tu Nube",
    "storage.private.desc":
      "Conecta tu servicio de nube preferido para control total. Tú posees tus datos completamente, sin tarifas recurrentes de nuestra parte.",
    "storage.private.feature1": "Propiedad completa de datos",
    "storage.private.feature2": "Usa almacenamiento en nube existente",
    "storage.private.feature3": "No se necesita suscripción",
    "storage.managed.title": "Almacenamiento Gestionado Tubestr",
    "storage.managed.price": "Simple y Encriptado",
    "storage.managed.desc":
      "Manejamos los detalles técnicos con almacenamiento encriptado y copias de seguridad automáticas. Configuración fácil, seguridad total.",
    "storage.managed.feature1": "Encriptado y seguro",
    "storage.managed.feature2": "Copias de seguridad automáticas incluidas",
    "storage.managed.feature3": "Gestión sin complicaciones",

    // Join the Movement
    "join.title": "Dale a Tus Hijos un Mundo Digital Más Seguro y Creativo",
    "join.desc":
      "Déjalos expresarse sin el ruido de internet. Únete a nuestra beta y ayuda a dar forma al futuro de los medios familiares.",
    "join.beta": "Prueba Tubestr Gratis",
    "join.nostr": "Conoce Nuestra Tecnología",

    // Download Page
    "download.badge": "Obtén la App",
    "download.title": "Descarga Tubestr",
    "download.subtitle": "Estamos en beta temprana — elige la opción que mejor funcione para tu dispositivo y cuéntanos qué piensas.",
    "download.testflight.platform": "iOS y iPadOS",
    "download.testflight.title": "Apple TestFlight",
    "download.testflight.desc": "La forma más fácil de probar Tubestr en tu iPhone o iPad. Instala TestFlight primero, luego toca nuestro enlace para unirte a la beta.",
    "download.testflight.button": "Abrir en TestFlight",
    "download.zapstore.platform": "Android",
    "download.zapstore.title": "Zapstore",
    "download.zapstore.desc": "Una tienda de apps que respeta la privacidad, construida sobre Nostr. Si ya estás en el mundo Nostr, esta es la forma recomendada de instalar en Android.",
    "download.zapstore.button": "Obtener en Zapstore",
    "download.apk.platform": "Android",
    "download.apk.title": "APK Directo",
    "download.apk.desc": "Descarga el APK directamente desde nuestra página de lanzamientos en GitHub. Necesitarás permitir instalaciones de fuentes desconocidas en tu configuración de Android.",
    "download.apk.button": "Descargar APK",
    "download.help": "¿Necesitas ayuda para configurarlo? Contáctanos — con gusto te guiamos.",
    "download.backHome": "Volver al Inicio",

    // Footer
    "footer.copyright": "© 2025 Tubestr. Construido con amor para familias.",
    "footer.tagline": "Seguro por diseño • Guiado por padres • Aprobado por niños",

    // Tech Page
    "tech.badge": "Nuestra Tecnología",
    "tech.hero.title": "Construido Diferente. Construido Seguro.",
    "tech.hero.subtitle":
      "Tubestr usa tecnología de vanguardia que prioriza la privacidad para mantener a tu familia segura. Así es como funciona — en español simple.",
    "tech.backHome": "Volver al Inicio",

    "tech.overview.title": "Privacidad Primero, Familia Nunca Segundo",
    "tech.overview.desc":
      "Usamos tecnologías modernas y probadas diseñadas para seguridad y privacidad. Sin rastreo. Sin anuncios. Sin minería de datos. Solo compartir videos seguros y divertidos para familias.",

    // Nostr
    "tech.nostr.title": "Nostr: La Identidad Digital de Tu Familia",
    "tech.nostr.desc":
      "Nostr es un protocolo abierto que da a tu familia verdadera propiedad de su identidad digital y contenido. Ninguna corporación posee tus datos — tú sí.",
    "tech.nostr.feature1.title": "Tus Llaves, Tu Identidad",
    "tech.nostr.feature1.desc":
      "Cada miembro de la familia tiene llaves criptográficas únicas que prueban quiénes son sin necesidad de nombres de usuario o contraseñas almacenadas en nuestros servidores.",
    "tech.nostr.feature2.title": "Sin Control Central",
    "tech.nostr.feature2.desc":
      "A diferencia de las redes sociales tradicionales, no hay una sola empresa que pueda censurar, eliminar o controlar tu contenido. Los recuerdos de tu familia te pertenecen.",
    "tech.nostr.feature3.title": "Conexiones Simples",
    "tech.nostr.feature3.desc":
      "Conéctate con familia y amigos de confianza usando llaves seguras. Solo las conexiones aprobadas pueden ver el contenido compartido.",
    "tech.nostr.simple.title": "¿Qué Significa Esto para Ti?",
    "tech.nostr.simple.desc": "No necesitas entender los detalles técnicos. Esto es lo que importa:",
    "tech.nostr.simple.step1": "Tu familia posee su identidad para siempre",
    "tech.nostr.simple.step2": "Ninguna corporación puede bloquearte o vender tus datos",
    "tech.nostr.simple.step3": "El contenido permanece privado para tu círculo de confianza",

    // MLS
    "tech.mls.title": "MLS: Mensajería Grupal Segura",
    "tech.mls.desc":
      "Messaging Layer Security (MLS) es el protocolo estándar de la industria para asegurar comunicaciones grupales. Es la misma tecnología usada por aplicaciones de mensajería importantes para proteger miles de millones de mensajes cada día.",
    "tech.mls.simple.title": "Qué Significa Esto",
    "tech.mls.simple.desc":
      "MLS asegura que cuando los niños comparten videos en sus grupos de confianza, esas comunicaciones están encriptadas y seguras. Ni siquiera nosotros podemos leerlas.",
    "tech.mls.simple.benefit1": "Encriptación de grado militar para todo compartir grupal",
    "tech.mls.simple.benefit2": "Seguridad probada usada por grandes empresas tecnológicas",
    "tech.mls.simple.benefit3": "Experiencia fluida para todos los miembros de la familia",

    // Marmot
    "tech.marmot.title": "Marmot: Súper Rápido, Súper Seguro",
    "tech.marmot.desc":
      "Marmot es nuestra implementación de MLS optimizada para familias. Hace que la encriptación grupal sea rápida y fácil, para que los niños puedan compartir instantáneamente sin ninguna complejidad técnica.",
    "tech.marmot.feature1.title": "Compartir Instantáneo",
    "tech.marmot.feature1.desc":
      "Los videos y mensajes se encriptan y comparten en tiempo real sin demora. Los niños hacen clic en compartir, la familia lo ve — todo completamente seguro.",
    "tech.marmot.feature2.title": "Seguridad Automática",
    "tech.marmot.feature2.desc":
      "Toda la encriptación sucede automáticamente en segundo plano. Los niños y padres nunca necesitan pensar en ello — simplemente funciona.",
    "tech.marmot.simple.title": "La Versión Simple",
    "tech.marmot.simple.desc":
      "Piensa en Marmot como el escudo invisible que mantiene los videos de tu familia seguros mientras se asegura de que todo funcione sin problemas y rápidamente.",

    // E2E
    "tech.e2e.title": "Encriptación de Extremo a Extremo: Privacidad Total",
    "tech.e2e.desc":
      "La encriptación de extremo a extremo significa que solo las personas en tu círculo de confianza pueden ver los videos. Ni nosotros, ni hackers, ni nadie. Es matemáticamente imposible que alguien más descifre el contenido de tu familia.",
    "tech.e2e.feature1.title": "Solo Tú Puedes Verlo",
    "tech.e2e.feature1.desc":
      "Los videos se encriptan en el dispositivo antes de salir, y solo se descifran en dispositivos familiares de confianza. Nadie en el medio puede mirar.",
    "tech.e2e.feature2.title": "Protegido de Todos",
    "tech.e2e.feature2.desc":
      "Incluso si alguien intercepta los datos, es solo galimatías revuelto sin las llaves de encriptación en posesión de los miembros de tu familia.",
    "tech.e2e.feature3.title": "Estándar de la Industria",
    "tech.e2e.feature3.desc":
      "Usamos los mismos estándares de encriptación confiados por bancos, gobiernos y expertos en seguridad en todo el mundo.",

    // CTA
    "tech.cta.title": "¿Listo para Probar la App de Video Familiar Más Segura?",
    "tech.cta.desc":
      "Únete a nuestra beta y experimenta tranquilidad mientras tus hijos crean y comparten de forma segura.",
    "tech.cta.button": "Únete a la Beta",
  },
}
