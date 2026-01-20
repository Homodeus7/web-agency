<p align="center">
  <img src="/src/shared//assets/hero.png" alt="Next.js + Sanity Лендинг Агентства" width="900" />
</p>

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Sanity](https://img.shields.io/badge/Sanity-3.67-F03E2F?logo=sanity)](https://www.sanity.io/)

# Studio Landing

**Landing page for a web development agency**

---

## Overview

A modern, performant landing page built with **Next.js 15** and **Sanity CMS**. Uses Static Site Generation (SSG) with Incremental Static Regeneration (ISR) for optimal performance while keeping content fresh (60s revalidation).

Built following **Feature-Sliced Design (FSD)** architecture principles for maintainable and scalable codebase.

## Features

- **Sanity CMS Integration** — Content management with embedded Sanity Studio at `/studio` route
- **ISR Support** — Static generation with 60-second revalidation for near-instant page loads
- **Telegram Notifications** — Form submissions sent directly to Telegram via bot API
- **CSS Animations** — Scroll-triggered animations without heavy JS libraries
- **Responsive Design** — Mobile-first approach with Tailwind CSS

### Landing Sections

- Hero
- Pricing Plans
- FAQ (Radix Accordion)
- Contact Form

## Tech Stack

| Category       | Technologies                       |
| -------------- | ---------------------------------- |
| **Framework**  | Next.js 15 (App Router)            |
| **UI**         | React 19, Radix UI, Lucide React   |
| **Styling**    | Tailwind CSS v4 (CSS-first config) |
| **CMS**        | Sanity v3 (next-sanity)            |
| **Validation** | Zod                                |
| **Language**   | TypeScript 5.8                     |

## Quick Start

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- Sanity account

### Installation

```bash
# Clone repository
git clone <repository-url>
cd next.js+sanity

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — Landing page
Open [http://localhost:3000/studio](http://localhost:3000/studio) — Sanity Studio

## Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── api/telegram/         # Form submission endpoint
│   ├── studio/[[...tool]]/   # Embedded Sanity Studio
│   ├── layout.tsx
│   └── page.tsx
│
├── widgets/                  # Page sections (FSD layer)
│   └── {widget}/
│       ├── ui/{Widget}.tsx
│       └── index.ts
│
├── shared/                   # Shared code (FSD layer)
│   ├── ui/                   # Button, Container, SectionHeading, AnimatedSection
│   └── lib/
│       ├── cn.ts             # clsx + tailwind-merge utility
│       └── sanity/client.ts
│
└── sanity/
    └── schemas/              # Sanity content schemas
        ├── documents/        # siteSettings, homePage, submission
        └── objects/          # heroSection, pricingPlan, faqItem, etc.
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
npm run seed     # Seed Sanity with initial data
```

## Environment Variables

Create `.env.local` file:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Telegram Bot
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

## License

Proprietary Software — All rights reserved.
