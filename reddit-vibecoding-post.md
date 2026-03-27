# Reddit Post for r/vibecoding

## Title

I vibecoded a private YouTube for kids — built on a decentralized protocol most people haven't heard of

## Body

My kid wants to make videos. Like every kid. But I'm not putting a 7-year-old on YouTube or TikTok, and family group chats are where videos go to die.

So I vibecoded **Tubestr** — a private video sharing app where kids create and share videos only inside parent-approved circles. Think "YouTube for your family" but with no public feed, no algorithm, no strangers.

**What makes this different from yet another kid-safe app:**

The whole thing runs on **nostr** — an open, decentralized protocol where identity is based on cryptographic keys instead of usernames and passwords stored on some company's server. Your family's identity isn't locked into a corporate silo. There's no central authority that controls who can post or who gets banned. You own your keys, you own your identity.

For the non-technical parents: it just means nobody — not even me — can access your family's stuff. For the technical crowd: it's end-to-end encrypted video sharing using MLS (Messaging Layer Security) over nostr relays.

**The vibecoding stack:**

- Native iOS/Android app (the actual video creation + sharing)
- Next.js + React 19 + Tailwind + Radix UI for the marketing site
- Nostr protocol for decentralized identity and relay-based sharing
- MLS protocol for group encryption
- Custom encryption layer called Marmot that makes E2E encryption invisible to users

**How it works:**

1. Parent creates an account and sets up child profiles
2. Parent approves every single connection before any sharing happens
3. Kids record, remix, and share inside those approved circles
4. Videos are encrypted before they leave the device — only trusted family devices can decrypt

There's a Parent Zone dashboard where you see connection approvals, family health status, and manage everything. Kids get a creative space called the "Nook" with capture and studio tools for making videos.

**The vibe part:**

I'm a parent first, developer second. A lot of this was built by describing what I wanted — a safe place for my kids to be creative with people we trust — and iterating from there. The nostr/crypto layer was the hardest part but also the most rewarding because it means the privacy isn't just a policy, it's baked into the architecture. No server-side decryption. No "trust us" privacy policy. Math.

Currently in private beta with families testing it. Available on iOS (TestFlight) and Android.

Site: [tubestr.com](https://tubestr.com)

Happy to answer questions about building on nostr, the E2E encryption approach, or the parenting-driven design decisions.
