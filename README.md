# Kikeroo - Group Travel Planning Platform

A modern, multilingual travel booking platform built with Next.js 16, designed to make group trip planning easy and enjoyable. Supports 6 languages, light/dark themes, Stripe payments, and GDPR-compliant cookie consent.

> **"Travel Together, Create Memories Forever"**

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Internationalization (i18n)](#internationalization-i18n)
- [Theme System](#theme-system)
- [Stripe Payments](#stripe-payments)
- [Cookie Consent](#cookie-consent)
- [Environment Variables](#environment-variables)
- [Pages Reference](#pages-reference)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Features

| Feature | Description |
|---------|-------------|
| Group Trip Planning | Coordinate travel with friends and family |
| Hotel Booking | Browse and book accommodations worldwide |
| Event Discovery | Find concerts, shows, and live events |
| Activity Booking | Book adventure experiences and activities |
| Place Exploration | Discover amazing travel destinations |
| Multi-Language | 6 languages: English, French, German, Spanish, Dutch, Italian |
| Light/Dark Theme | Toggle between light and dark mode |
| Stripe Payments | Secure checkout via Stripe |
| Cookie Consent | GDPR-compliant cookie banner with granular controls |
| WhatsApp Support | Floating WhatsApp button for quick contact |
| Emergency Banner | Dismissible travel advisory banner |
| Testimonials | Customer review showcase |
| Image Gallery | Travel photo gallery with hover effects |
| Contact Page | Contact form with Google Maps embed |
| SEO Optimized | Full metadata, sitemap with hreflang, structured data |
| PWA Ready | Progressive Web App manifest included |
| Responsive Design | Optimized for mobile, tablet, and desktop |

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.x | React framework with App Router & Turbopack |
| [React](https://react.dev/) | 19.1 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | 5.8 | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1 | Utility-first CSS framework |
| [next-intl](https://next-intl.dev/) | 4.x | Internationalization for Next.js |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4 | Light/dark theme management |
| [Stripe](https://stripe.com/) | 17.x | Payment processing |
| [js-cookie](https://github.com/js-cookie/js-cookie) | 3.x | Cookie management for consent |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.5 | Icon library |

---

## Quick Start

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | 18.18+ |
| npm / yarn / pnpm | Latest |

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/kikeroo.git
cd kikeroo

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your keys (see Environment Variables)

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

### Available Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Project Structure

```
kikeroo/
├── messages/                     # Translation files
│   ├── en.json                   # English (default)
│   ├── fr.json                   # French
│   ├── de.json                   # German
│   ├── es.json                   # Spanish
│   ├── nl.json                   # Dutch
│   └── it.json                   # Italian
│
├── public/
│   ├── images/                   # Static images
│   └── manifest.json             # PWA manifest
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Minimal root layout
│   │   ├── globals.css           # Global styles + theme variables
│   │   ├── robots.ts             # Robots.txt generator
│   │   ├── sitemap.ts            # Sitemap generator (all locales)
│   │   │
│   │   ├── api/
│   │   │   ├── checkout/route.ts        # Stripe checkout API
│   │   │   └── webhooks/stripe/route.ts # Stripe webhook handler
│   │   │
│   │   └── [locale]/             # Locale-based routing
│   │       ├── layout.tsx        # Main layout (providers, SEO)
│   │       ├── page.tsx          # Home page
│   │       ├── about/
│   │       ├── activities/
│   │       ├── careers/
│   │       ├── checkout/         # Stripe checkout page
│   │       ├── contact/          # Contact form + map
│   │       ├── cookie-policy/    # Cookie policy
│   │       ├── events/
│   │       ├── hotels/
│   │       ├── login/
│   │       ├── places/
│   │       ├── privacy/
│   │       ├── signup/
│   │       ├── support/
│   │       └── terms/
│   │
│   ├── components/
│   │   ├── Header.tsx            # Navigation with theme toggle + language switcher
│   │   ├── Footer.tsx            # Site footer with links
│   │   ├── SearchFilters.tsx     # Search & filter UI
│   │   ├── PageLayout.tsx        # Page wrapper
│   │   ├── HotelCard.tsx         # Hotel display card
│   │   ├── EventCard.tsx         # Event display card
│   │   ├── ActivityCard.tsx      # Activity display card
│   │   ├── PlaceCard.tsx         # Place display card
│   │   ├── SectionHeader.tsx     # Section title with "See all" link
│   │   ├── GroupTripBanner.tsx    # CTA banner
│   │   ├── ThemeToggle.tsx       # Light/dark mode toggle
│   │   ├── LanguageSwitcher.tsx  # Language dropdown
│   │   ├── CookieConsent.tsx     # GDPR cookie banner
│   │   ├── WhatsAppButton.tsx    # Floating WhatsApp button
│   │   ├── EmergencyBanner.tsx   # Travel advisory banner
│   │   ├── Testimonials.tsx      # Customer reviews section
│   │   ├── Gallery.tsx           # Image gallery section
│   │   ├── GoogleMap.tsx         # Google Maps embed
│   │   └── StripeProvider.tsx    # Stripe Elements wrapper
│   │
│   ├── i18n/
│   │   ├── routing.ts            # Locale config (locales, default, prefix)
│   │   ├── request.ts            # Server request config
│   │   └── navigation.ts         # Locale-aware Link, useRouter, etc.
│   │
│   ├── lib/
│   │   ├── data.ts               # Data types & mock data
│   │   └── stripe.ts             # Stripe server instance
│   │
│   └── middleware.ts             # next-intl locale routing middleware
│
├── .env.example                  # Environment variable template
├── next.config.mjs               # Next.js config with next-intl plugin
├── package.json
├── tsconfig.json
└── vercel.json                   # Vercel deployment config
```

---

## Internationalization (i18n)

Kikeroo uses [next-intl](https://next-intl.dev/) for internationalization with 6 supported locales.

### Supported Languages

| Code | Language | URL Pattern |
|------|----------|-------------|
| `en` | English | `/` (default, no prefix) |
| `fr` | French | `/fr/...` |
| `de` | German | `/de/...` |
| `es` | Spanish | `/es/...` |
| `nl` | Dutch | `/nl/...` |
| `it` | Italian | `/it/...` |

English is the default locale and uses `localePrefix: 'as-needed'`, meaning English URLs have no `/en/` prefix.

### Translation Files

Translation files are located in `messages/{locale}.json`. Each file contains namespaced translations:

```json
{
  "Header": {
    "hotels": "Hotels",
    "events": "Events",
    "activities": "Activities"
  },
  "Home": {
    "heroTitle": "Travel Together, Create Memories Forever",
    "heroSubtitle": "Plan unforgettable group trips..."
  }
}
```

### Using Translations

**In client components:**
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('Header');
  return <h1>{t('hotels')}</h1>;
}
```

**In server components / metadata:**
```tsx
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('Home');
  return { title: t('heroTitle') };
}
```

### Locale-Aware Navigation

Always use navigation utilities from `@/i18n/navigation` instead of `next/link` or `next/navigation`:

```tsx
import { Link, useRouter, usePathname } from '@/i18n/navigation';

// Links automatically include locale prefix
<Link href="/hotels">Hotels</Link>
```

### Adding a New Language

1. Add the locale code to `src/i18n/routing.ts`
2. Create `messages/{locale}.json` with all namespaces translated
3. Rebuild — the new locale is automatically available

---

## Theme System

Kikeroo supports light and dark themes using [next-themes](https://github.com/pacocoursey/next-themes) with Tailwind CSS 4's class-based dark mode.

### How It Works

- `globals.css` defines `@custom-variant dark (&:where(.dark, .dark *));` for Tailwind 4
- `next-themes` manages the `dark` class on `<html>`
- `ThemeToggle` component in the Header lets users switch themes
- Default theme is dark

### Theme-Aware Classes

```tsx
// Background
className="bg-gray-50 dark:bg-kik-darker"

// Text
className="text-slate-900 dark:text-white"

// Borders
className="border-slate-200 dark:border-white/10"

// Cards
className="bg-white dark:bg-white/5 shadow-sm dark:shadow-none"
```

### Always-Dark Sections

Some sections stay dark in both themes for visual consistency:
- Header (over dark background/hero image)
- Login/Signup pages (over background image)
- Hero section on the home page
- GroupTripBanner (over background image)

---

## Stripe Payments

Kikeroo integrates [Stripe](https://stripe.com/) for payment processing via Checkout Sessions.

### Setup

1. Create a [Stripe account](https://dashboard.stripe.com/register)
2. Get your API keys from the Stripe Dashboard
3. Set environment variables:
   ```bash
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

### Flow

1. User clicks "Pay Now" on the checkout page
2. Frontend calls `POST /api/checkout` with item details
3. Server creates a Stripe Checkout Session and returns the URL
4. User is redirected to Stripe's hosted checkout page
5. After payment, user returns to `/checkout?status=success` or `?status=cancelled`
6. Stripe sends webhook events to `POST /api/webhooks/stripe`

### Testing

Use Stripe's [test card numbers](https://docs.stripe.com/testing):
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

### Webhook Setup (Local)

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## Cookie Consent

Kikeroo includes a GDPR-compliant cookie consent banner.

### Features

- Three equal-weight buttons: Customize, Reject All, Accept All
- Granular cookie categories: Essential (always on), Analytics, Marketing, Personalization
- Consent stored in a `kikeroo-consent` cookie via `js-cookie`
- Banner only appears when no consent cookie exists
- Fully translated in all 6 languages

### Cookie Policy

A dedicated cookie policy page at `/cookie-policy` explains each cookie category in detail.

---

## Environment Variables

Create a `.env.local` file from the template:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Your site URL (e.g., `https://kikeroo.com`) |
| `STRIPE_SECRET_KEY` | No | Stripe secret key (server-side) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | No | Stripe publishable key (client-side) |
| `STRIPE_WEBHOOK_SECRET` | No | Stripe webhook signing secret |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | No | Google Maps Embed API key |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | No | WhatsApp number for floating button |

Stripe and Google Maps features degrade gracefully when keys are not set.

---

## Pages Reference

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with search, listings, testimonials, gallery |
| Hotels | `/hotels` | Hotel listings |
| Events | `/events` | Event listings |
| Activities | `/activities` | Activity listings |
| Places | `/places` | Travel destinations |
| About | `/about` | Company info |
| Contact | `/contact` | Contact form with Google Maps |
| Support | `/support` | Help center |
| Careers | `/careers` | Job listings |
| Checkout | `/checkout` | Stripe payment page |
| Login | `/login` | Authentication |
| Sign Up | `/signup` | Registration |
| Terms | `/terms` | Terms of service |
| Privacy | `/privacy` | Privacy policy |
| Cookie Policy | `/cookie-policy` | Cookie usage details |

All routes are available in all 6 locales (e.g., `/fr/hotels`, `/de/events`).

---

## Deployment

### Vercel (Recommended)

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Git Integration
# Push to GitHub -> Auto-deploy
```

### Environment Variables on Vercel

1. Go to Vercel Dashboard > Project > Settings > Environment Variables
2. Add all variables from the [Environment Variables](#environment-variables) section

### Build Output

The production build generates 96 static pages (16 pages x 6 locales):

```
Route (app)                                    Size
/[locale]                                      ...
/[locale]/about                                ...
/[locale]/hotels                               ...
... (96 total static pages)
/sitemap.xml
/robots.txt
```

---

## Contributing

### Git Workflow

```bash
# 1. Fork & clone
git clone https://github.com/YOUR_USERNAME/kikeroo.git

# 2. Create branch
git checkout -b feature/your-feature

# 3. Make changes & commit
git add .
git commit -m "feat(scope): description"

# 4. Push & create PR
git push origin feature/your-feature
```

### Commit Convention

```
type(scope): description

Types: feat, fix, docs, style, refactor, test, chore

Examples:
feat(i18n): add Portuguese translations
fix(theme): resolve flash of unstyled content
docs(readme): update deployment guide
```

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>"Travel Together, Create Memories Forever"</strong>
  <br><br>
  Made with love for travelers worldwide
</p>
