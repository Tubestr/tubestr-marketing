# Reddit Post for r/vibecoding

## Title

I vibecoded a full video sharing app with zero backend code. No Express, no database, no auth system.

## Body

My kid wants to make videos. Like every kid. But I'm not putting him on YouTube or TikTok, and family group chats are where videos go to die.

So I vibecoded **Tubestr** — a private video sharing app where kids create and share videos only inside parent-approved family circles. Full video editor, encrypted sharing, parent controls — the works. And I never wrote a single line of server code.

The secret: a protocol called **Nostr** that most people haven't heard of. If you're vibecoding anything with users and data, this should be in your toolkit.

### What is Nostr in 30 seconds

Nostr is a protocol, not a platform. Two concepts:

1. **Keys.** Your identity is a cryptographic keypair. You generate it locally. No signup, no email, no OAuth. One function call gives you a user identity.
2. **Relays.** Dumb WebSocket servers that store and forward signed JSON events. Dozens of public ones already exist. You connect, publish events, subscribe to events. That's the entire API.

### Why this is vibecoding gold

Here's what I *didn't* have to build, prompt, or debug:

**No auth system.** Identity is a keypair generated on-device. No registration endpoint, no password hashing, no session tokens, no "forgot password" flow. Generate a keypair, store it. Done.

**No backend server.** Nostr relays are the backend and they're already running publicly for free. My app connects to relays, publishes signed events, and subscribes to events from other users. I didn't write a single line of server code.

**No database design.** Events *are* the database. Each event has a kind (integer), content, tags, and a timestamp. Need to store a video share? Publish a `kind:4543` event. A like? `kind:4546`. Query all shares from a user? Subscribe with a filter. The relay handles it. No schema, no migrations, no ORM.

**No API design.** No REST, no GraphQL, no endpoint versioning. The entire interaction model is publish/subscribe over WebSockets. Two operations. That's the whole API surface for your AI to learn.

**No file storage infra.** For videos, there's a companion system called Blossom — content-addressed blob storage over HTTP. Upload a file, get a SHA-256 hash. Download by hash. Public Blossom servers already exist. No S3, no CDN config.

**No DevOps.** No containers, no CI/CD for a backend, no AWS bill. The relays and Blossom servers handle it. My app is a pure client.

### What I actually spent my time on

Instead of fighting infrastructure, I vibecoded the things that matter:

- A kid-friendly camera and **video editor** (trim, filters, stickers, text overlays, audio)
- A **parent control panel** with content approval and moderation
- A **home feed** showing family videos with likes and emoji reactions
- **Encrypted group sharing** using MLS (an IETF standard for group encryption)
- An **offline queue** that syncs when connectivity returns
- **On-device content safety scanning** before parents approve shares

All Flutter. All product. All UX. Zero infrastructure.

### The AI prompting angle

Nostr is absurdly easy to explain to an AI coding assistant. The entire protocol is:

```
Publish: Create JSON event → sign with private key → send to relay
Read: Send filter to relay → receive matching events
```

Compare that to prompting an AI to set up Express routes, middleware chains, database schemas, connection pooling, JWT validation, CORS config, error handling... that's where vibecoded projects go to die. Every layer is another place for the AI to introduce a subtle bug you'll spend hours debugging.

I told my AI: "We're using Nostr. Users are keypairs. Data is signed JSON events on WebSocket relays. Use NDK for the client library." Then I vibecoded my actual product instead of plumbing.

### What I shipped

**Tubestr** — a private family video sharing app.

- Parents hold a Nostr keypair as their identity
- Family groups encrypted with MLS (RFC 9420) — forward secrecy, proper group crypto
- Videos encrypted on-device before upload, decryption keys shared through the encrypted group
- Kids get a full creative suite: capture, trim, stickers, filters, text, audio overlays
- Parents manage profiles, approve content, moderate, and control who connects
- Everything works offline, syncs when connected
- Live on Android and iOS (TestFlight)

The privacy isn't a policy — it's architecture. The server never sees plaintext video. Even the blob storage operator can't watch your kids' videos. Math, not trust.

I'm a parent first, developer second. Vibecoding let me build the thing I actually wanted for my family instead of spending months on backend boilerplate.

Site: [tubestr.app](https://tubestr.app)

Happy to answer questions about building on Nostr, the encryption approach, or vibecoding with Flutter.
