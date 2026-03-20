import type { Metadata } from "next"
import { LegalPageShell } from "@/components/legal-page-shell"

export const metadata: Metadata = {
  title: "Tubestr Privacy Policy",
  description: "Privacy policy for Tubestr, the private video app for kids and parents.",
}

const sections = [
  {
    title: "What Tubestr is",
    paragraphs: [
      "Tubestr is a private video app built for parent-managed family sharing. Children create videos inside trusted circles that a parent sets up and approves.",
      "This policy covers the Tubestr mobile app, our beta download pages, and the service infrastructure we operate to help families deliver and sync private content.",
    ],
  },
  {
    title: "What information we handle",
    bullets: [
      "Parent account and device setup data, such as cryptographic account identifiers, relay settings, and device state needed to sign in, sync, and restore the family account.",
      "Child profile information that a parent enters, such as display names, profile themes, approval settings, and family-space relationships.",
      "Media and sharing data, including videos, thumbnails, captions, encrypted group messages, invite links, moderation reports, and delivery metadata needed to send content to approved family contacts.",
      "Purchase and entitlement records when managed storage or subscriptions are enabled, including transaction identifiers and subscription status shared by Apple or Google through their billing systems.",
      "Support information you send us directly through GitHub issues, TestFlight feedback, or other support channels.",
    ],
  },
  {
    title: "How we use information",
    bullets: [
      "To create and recover the parent-managed account.",
      "To let parents approve connections, child profiles, and sharing behavior.",
      "To encrypt, upload, deliver, sync, and play back private family media.",
      "To investigate abuse reports, reliability incidents, and support requests.",
      "To meet legal, security, billing, and child-safety obligations.",
    ],
  },
  {
    title: "How sharing works",
    paragraphs: [
      "Tubestr is designed so family media is shared only with the family members and contacts a parent has approved. Media may be stored as encrypted blobs on Tubestr-operated infrastructure or on storage chosen by the family, depending on the deployment model in use.",
      "Service providers may process limited operational metadata so delivery, storage, billing, and abuse handling can work. We do not run third-party advertising SDKs in the mobile app, and the product is not built around behavioral advertising.",
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      "Tubestr is built around parent control. A parent creates the family account, approves each child profile, and controls which other families or contacts can participate.",
      "Because the app can handle videos, photos, and other content connected to minors, we treat child safety and data minimization as product requirements. Families should only use Tubestr where they have the authority to share a child's information and media.",
    ],
  },
  {
    title: "Retention and deletion",
    paragraphs: [
      "Child profiles and local media stored on a device can be removed by the parent inside the app. Copies already delivered to approved family contacts may remain available on those recipient devices or storage providers until those parties delete them.",
      "Operational logs, encrypted blobs, billing records, and abuse reports may be retained for as long as needed to run the service, resolve disputes, enforce safety controls, comply with law, or protect the platform.",
      "If you need a deletion or privacy request handled for beta use, contact us through the support page and include enough detail to identify the family account involved.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Support and privacy requests for the current beta are handled through the Tubestr support page and the linked GitHub issue flow. If we add a dedicated support email or in-app privacy inbox, this policy will be updated to reflect that contact path.",
    ],
  },
] as const

export default function PrivacyPage() {
  return (
    <LegalPageShell
      eyebrow="Tubestr privacy policy"
      title="Privacy policy for private family video sharing."
      intro="This page explains what Tubestr handles, why it handles it, and where parents still need to make careful decisions before sharing media involving children."
      effectiveDate="March 19, 2026"
      sections={sections}
    />
  )
}
