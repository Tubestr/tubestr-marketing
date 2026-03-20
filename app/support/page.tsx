import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal-page-shell"

export const metadata: Metadata = {
  title: "Tubestr Support",
  description: "Support and beta help for Tubestr families and testers.",
}

const sections = [
  {
    title: "How to get help",
    paragraphs: [
      "Tubestr is in private beta, so the fastest support path is a concrete bug report with the device, OS version, and exact step that failed.",
      "For account deletion, start inside the app at Parent Zone -> Account -> Delete Parent Account. Use support if that flow fails or if you need help with a privacy request that goes beyond the in-app deletion path.",
    ],
    bullets: [
      "Product bugs and install issues: https://github.com/Tubestr/tubestr-v2/issues/new",
      "TestFlight-specific feedback: use Apple's TestFlight feedback flow from the installed beta.",
      "Safety or sharing concerns: include the family-space context, affected clip, and what action you expected the app to take.",
    ],
  },
  {
    title: "What to include",
    bullets: [
      "Device type and OS version.",
      "Whether the issue happened during onboarding, recording, editing, parent approval, upload, playback, or reporting.",
      "Whether the issue reproduced on Wi-Fi, cellular, or both.",
      "Screenshots or screen recordings when that is safe to share.",
    ],
  },
  {
    title: "Beta expectations",
    paragraphs: [
      "The current beta is focused on real-family validation of onboarding, parent controls, encrypted sharing, playback, and moderation paths. Response times may vary, but concrete reports help us ship fixes faster.",
      "If you believe a child-safety control failed, mark that clearly in the report so it is triaged as a priority issue.",
    ],
  },
] as const

export default function SupportPage() {
  return (
    <LegalPageShell
      eyebrow="Tubestr support"
      title="Support for beta families and launch reviewers."
      intro="This URL is intended to work both as a public beta support page and as the support link required for TestFlight and App Store submission metadata."
      effectiveDate="March 19, 2026"
      sections={sections}
    />
  )
}
