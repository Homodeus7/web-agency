# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for a web development agency built with Next.js 15 + Sanity CMS. Uses SSG with ISR (60s revalidation) for content updates.

## Commands

```bash
npm run dev      # Start development server (Next.js + Sanity Studio)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

Sanity Studio is embedded at `/studio` route.

## Architecture

**FSD (Feature-Sliced Design) structure:**

```
src/
├── app/                    # Next.js App Router
│   ├── api/telegram/       # Form submission endpoint
│   └── studio/[[...tool]]/ # Embedded Sanity Studio
├── widgets/                # Page sections (Hero, Pricing, FAQ, etc.)
│   └── {widget}/
│       ├── ui/{Widget}.tsx
│       └── index.ts
├── shared/
│   ├── ui/                 # Button, Container, SectionHeading, AnimatedSection
│   └── lib/
│       ├── cn.ts           # clsx + tailwind-merge utility
│       └── sanity/client.ts
└── sanity/
    └── schemas/            # Sanity content schemas
        ├── documents/      # siteSettings, homePage, submission
        └── objects/        # Section schemas (heroSection, pricingPlan, etc.)
```

**Path alias:** `@/*` maps to `./src/*`

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **CMS:** Sanity v3 (next-sanity integration)
- **Styling:** Tailwind CSS v4 (CSS-first config in `globals.css` via `@theme`)
- **UI:** Radix UI (Accordion), Lucide React (icons)
- **Validation:** Zod (form validation)

## Key Patterns

**Sanity Data Flow:**
- Client configured in `src/sanity/lib/client.ts`
- Schemas in `src/sanity/schemas/` (Russian field titles for Studio UI)
- Root config in `sanity.config.ts`

**Form Handling:**
- POST to `/api/telegram` with Zod validation
- Sends to Telegram bot via `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`

**Animations:**
- CSS-based (no Framer Motion)
- Use `data-animate` attribute for scroll-triggered animations
- Animation keyframes defined in `globals.css` `@theme` block

## Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```
