import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal-page-shell"

export const metadata: Metadata = {
  title: "Tubestr Terms of Use",
  description: "Terms of use for the Tubestr private family video beta.",
}

const sections = [
  {
    title: "Beta service",
    paragraphs: [
      "Tubestr is currently offered as a beta product. Features may change, break, or be removed while we tighten the product and the encrypted sharing stack.",
      "By using Tubestr, you agree to use the app only for lawful family or friend sharing and only when you have the authority to record, upload, and share the people and content involved.",
    ],
  },
  {
    title: "Parent responsibility",
    bullets: [
      "The parent or guardian controlling the family account is responsible for approving child profiles, trusted contacts, and outbound sharing.",
      "You must keep account recovery materials, invite links, and any exported private keys confidential.",
      "You must not use Tubestr to expose children to strangers, harassment, exploitation, or public distribution outside the approved sharing model.",
    ],
  },
  {
    title: "Acceptable use",
    bullets: [
      "Do not upload unlawful, abusive, exploitative, or infringing content.",
      "Do not attempt to defeat parental controls, moderation features, encryption, or service rate limits.",
      "Do not probe, scrape, reverse engineer, or interfere with infrastructure that stores or relays Tubestr content.",
      "Do not use Tubestr to impersonate another family, child, or organization.",
    ],
  },
  {
    title: "Safety and moderation",
    paragraphs: [
      "Tubestr may provide reporting, blocking, review, and family-approval tools. We may restrict, suspend, or remove access when we believe that is necessary to protect children, parents, other families, or the service itself.",
      "If we receive a credible report involving child safety, unlawful content, or abuse of the platform, we may preserve relevant records and cooperate with lawful requests or emergency responses.",
    ],
  },
  {
    title: "Availability and warranty",
    paragraphs: [
      "The beta is provided on an as-is and as-available basis. We do not guarantee uninterrupted service, perfect delivery, or permanent retention of any media.",
      "Families should keep independent copies of important media and should not treat the beta as their sole archive of family memories.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "We may update these terms as the product, legal posture, or launch plan changes. Material updates will be posted at this URL with a new effective date.",
    ],
  },
] as const

export default function TermsPage() {
  return (
    <LegalPageShell
      eyebrow="Tubestr terms of use"
      title="Terms for a parent-managed family beta."
      intro="These terms set the operating rules for the current Tubestr beta and reflect the child-safety bar the product is intended to enforce."
      effectiveDate="March 19, 2026"
      sections={sections}
    />
  )
}
