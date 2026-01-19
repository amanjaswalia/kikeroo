# Kikeroo - Group Travel Planning Platform

A modern, SEO-friendly travel booking platform built with Next.js 16, designed to make group trip planning easy and enjoyable.

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
- [Developer Guide](#developer-guide)
- [Component Architecture](#component-architecture)
- [Styling Guide](#styling-guide)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Performance](#performance)
- [Security](#security)
- [Accessibility](#accessibility)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
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
| User Authentication | Secure login and registration |
| Responsive Design | Optimized for mobile, tablet, and desktop |
| SEO Optimized | Full metadata, sitemap, and structured data |
| PWA Ready | Progressive Web App manifest included |

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.x | React framework with App Router & Turbopack |
| [React](https://react.dev/) | 19.1 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | 5.8 | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1 | Utility-first CSS framework |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.5 | Icon library (Feather icons) |

---

## Quick Start

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | 18.18+ (24.x supported) |
| npm / yarn / pnpm | Latest |
| Git | Latest |

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/kikeroo.git
cd kikeroo

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

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
│
├── 📁 public/                    # Static assets
│   ├── 📁 images/                # Image files
│   └── 📄 manifest.json          # PWA manifest
│
├── 📁 src/
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── 📁 (routes)/          # Page routes
│   │   │   ├── 📁 about/
│   │   │   ├── 📁 activities/
│   │   │   ├── 📁 careers/
│   │   │   ├── 📁 events/
│   │   │   ├── 📁 hotels/
│   │   │   ├── 📁 login/
│   │   │   ├── 📁 places/
│   │   │   ├── 📁 privacy/
│   │   │   ├── 📁 signup/
│   │   │   ├── 📁 support/
│   │   │   └── 📁 terms/
│   │   │
│   │   ├── 📄 globals.css        # Global styles
│   │   ├── 📄 layout.tsx         # Root layout + SEO
│   │   ├── 📄 page.tsx           # Home page
│   │   ├── 📄 robots.ts          # Robots.txt generator
│   │   └── 📄 sitemap.ts         # Sitemap generator
│   │
│   ├── 📁 components/            # Reusable components
│   │   ├── 📄 Header.tsx         # Navigation header
│   │   ├── 📄 Footer.tsx         # Site footer
│   │   ├── 📄 SearchFilters.tsx  # Search & filter UI
│   │   ├── 📄 PageLayout.tsx     # Page wrapper
│   │   ├── 📄 HotelCard.tsx      # Hotel display card
│   │   ├── 📄 EventCard.tsx      # Event display card
│   │   ├── 📄 ActivityCard.tsx   # Activity display card
│   │   ├── 📄 PlaceCard.tsx      # Place display card
│   │   ├── 📄 SectionHeader.tsx  # Section title
│   │   └── 📄 GroupTripBanner.tsx # CTA banner
│   │
│   └── 📁 lib/                   # Utilities
│       └── 📄 data.ts            # Data & types
│
├── 📄 .env.example               # Environment template
├── 📄 .gitignore                 # Git ignore rules
├── 📄 eslint.config.mjs          # ESLint 9 flat config
├── 📄 next.config.js             # Next.js config
├── 📄 package.json               # Dependencies
├── 📄 postcss.config.js          # PostCSS config (Tailwind 4)
├── 📄 tsconfig.json              # TypeScript config
└── 📄 vercel.json                # Vercel config
```

---

## Developer Guide

### Creating a New Page

**Step 1:** Create route folder

```bash
mkdir -p src/app/new-page
```

**Step 2:** Create page component (`src/app/new-page/page.tsx`)

```tsx
import PageLayout from '@/components/PageLayout'

export default function NewPage() {
  return (
    <PageLayout>
      <div className="bg-[#0d1b2a] min-h-screen py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-4xl font-bold mb-8">Page Title</h1>
          {/* Content */}
        </div>
      </div>
    </PageLayout>
  )
}
```

**Step 3:** Add SEO metadata (`src/app/new-page/layout.tsx`)

```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for search engines.',
  openGraph: {
    title: 'Page Title | Kikeroo',
    description: 'Page description for social sharing.',
  },
  alternates: {
    canonical: 'https://kikeroo.com/new-page',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
```

**Step 4:** Add to sitemap (`src/app/sitemap.ts`)

```tsx
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.7,
},
```

**Step 5:** Add navigation link (Header/Footer if needed)

---

### Creating a New Component

**Step 1:** Create component file (`src/components/NewComponent.tsx`)

```tsx
// Define props interface
interface NewComponentProps {
  title: string
  subtitle?: string
  onClick?: () => void
}

// Export component
export default function NewComponent({
  title,
  subtitle,
  onClick
}: NewComponentProps) {
  return (
    <div
      className="bg-kik-dark rounded-lg p-6 hover:bg-opacity-80 transition cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      {subtitle && (
        <p className="text-gray-400 mt-2">{subtitle}</p>
      )}
    </div>
  )
}
```

**Step 2:** For interactive components, add `'use client'`

```tsx
'use client'

import { useState } from 'react'

export default function InteractiveComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? 'Close' : 'Open'}
    </button>
  )
}
```

---

### Adding New Data

Edit `src/lib/data.ts`:

```tsx
// 1. Define interface
export interface Restaurant {
  id: number
  name: string
  cuisine: string
  location: string
  rating: number
  image: string
}

// 2. Add data array
export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'La Maison',
    cuisine: 'French',
    location: 'Paris, France',
    rating: 4.8,
    image: '/images/restaurant-1.png',
  },
  // ... more items
]
```

---

## Component Architecture

### Component Hierarchy

```
App
├── Layout (SEO, global styles)
│   ├── Header (navigation)
│   ├── Page Content
│   │   ├── PageLayout (wrapper with search)
│   │   │   ├── SearchFilters
│   │   │   └── Content Grid
│   │   │       ├── HotelCard
│   │   │       ├── EventCard
│   │   │       ├── ActivityCard
│   │   │       └── PlaceCard
│   │   └── GroupTripBanner
│   └── Footer (links, slogan)
```

### Component Types

| Type | Directive | Use Case |
|------|-----------|----------|
| Server Component | (default) | Static content, data fetching |
| Client Component | `'use client'` | Interactivity, hooks, browser APIs |

### When to Use `'use client'`

```tsx
// ✅ USE 'use client' for:
- useState, useEffect, useRef hooks
- onClick, onChange event handlers
- Browser APIs (localStorage, window)
- Third-party client libraries

// ❌ DON'T USE for:
- Static content display
- Server-side data fetching
- SEO metadata
```

---

## Styling Guide

### Custom Colors

```css
/* Defined in src/app/globals.css using Tailwind CSS 4 @theme */
@theme {
  --color-kik-blue: rgb(15, 84, 115);    /* Primary blue */
  --color-kik-gold: rgb(238, 188, 73);   /* Accent gold */
  --color-kik-dark: rgba(18, 24, 44, 0.8); /* Dark background */
}
```

### Usage Examples

```tsx
// Buttons
<button className="bg-kik-gold text-black font-semibold px-6 py-3 rounded hover:bg-opacity-80 transition">
  Primary Button
</button>

<button className="bg-kik-blue text-white font-semibold px-6 py-3 rounded hover:bg-opacity-80 transition">
  Secondary Button
</button>

// Cards
<div className="bg-kik-dark rounded-lg p-6">
  Card Content
</div>

// Text
<h1 className="text-white text-4xl font-bold">Heading</h1>
<p className="text-gray-400">Body text</p>
<span className="text-kik-gold">Highlighted text</span>
```

### Responsive Breakpoints

```tsx
// Mobile first approach
<div className="
  text-sm          // Mobile (default)
  md:text-base     // Tablet (768px+)
  lg:text-lg       // Desktop (1024px+)
  xl:text-xl       // Large (1280px+)
">

// Grid layouts
<div className="
  grid
  grid-cols-1      // Mobile: 1 column
  sm:grid-cols-2   // Small: 2 columns
  lg:grid-cols-3   // Desktop: 3 columns
  xl:grid-cols-4   // Large: 4 columns
  gap-6
">
```

---

## State Management

### Local State (useState)

```tsx
'use client'
import { useState } from 'react'

export default function SearchFilters() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<string[]>([])

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}
```

### URL State (searchParams)

```tsx
'use client'
import { useSearchParams, useRouter } from 'next/navigation'

export default function FilteredList() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const location = searchParams.get('location') || ''

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(key, value)
    router.push(`?${params.toString()}`)
  }
}
```

### Form State

```tsx
'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit logic
  }
}
```

---

## API Integration

### Future API Structure

```tsx
// src/lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL

export async function fetchHotels(params?: {
  location?: string
  checkIn?: string
  checkOut?: string
}) {
  const searchParams = new URLSearchParams(params as Record<string, string>)
  const response = await fetch(`${API_BASE}/hotels?${searchParams}`)

  if (!response.ok) {
    throw new Error('Failed to fetch hotels')
  }

  return response.json()
}
```

### Server Component Data Fetching

```tsx
// src/app/hotels/page.tsx
async function getHotels() {
  const res = await fetch('https://api.kikeroo.com/hotels', {
    next: { revalidate: 3600 } // Cache for 1 hour
  })
  return res.json()
}

export default async function HotelsPage() {
  const hotels = await getHotels()

  return (
    <div>
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </div>
  )
}
```

---

## Performance

### Image Optimization

```tsx
import Image from 'next/image'

// ✅ Use Next.js Image component
<Image
  src="/images/hotel.png"
  alt="Hotel description"
  width={400}
  height={300}
  className="object-cover"
  priority={isAboveFold} // Add for LCP images
/>
```

### Code Splitting

```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false // Disable SSR if needed
})
```

### Suspense Boundaries

```tsx
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <AsyncComponent />
    </Suspense>
  )
}
```

---

## Security

### Environment Variables

```bash
# .env.local (never commit!)
NEXT_PUBLIC_SITE_URL=https://kikeroo.com  # Public (exposed to browser)
API_SECRET_KEY=xxx                         # Private (server only)
```

### Input Validation

```tsx
// Always validate user input
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  // Validate email
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    setError('Invalid email address')
    return
  }

  // Validate password
  if (password.length < 8) {
    setError('Password must be at least 8 characters')
    return
  }
}
```

### Security Headers (vercel.json)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

---

## Accessibility

### Semantic HTML

```tsx
// ✅ Use proper elements
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<footer>...</footer>

// ✅ Use heading hierarchy
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
```

### ARIA Labels

```tsx
// ✅ Add labels for screen readers
<button aria-label="Close menu">
  <FiX />
</button>

<input
  type="search"
  aria-label="Search hotels"
  placeholder="Search..."
/>
```

### Keyboard Navigation

```tsx
// ✅ Ensure focusable elements
<button onClick={handleClick}>Clickable</button>

// ✅ Handle keyboard events
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
```

---

## Testing

### Manual Testing Checklist

```
Before deployment, verify:

□ All pages load without console errors
□ Navigation links work correctly
□ Search filters function properly
□ Dropdowns open/close correctly
□ Forms validate input
□ Mobile responsive design works
□ Images load with proper alt text
□ SEO meta tags present (view source)
□ Sitemap accessible at /sitemap.xml
□ Robots.txt accessible at /robots.txt
```

### Build Validation

```bash
# Check for linting errors
npm run lint

# Check TypeScript types
npx tsc --noEmit

# Build for production
npm run build

# Test production build
npm start
```

---

## Deployment

### Vercel (Recommended)

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Git Integration
# Push to GitHub → Auto-deploy
```

### Environment Variables on Vercel

1. Go to Vercel Dashboard
2. Select Project → Settings → Environment Variables
3. Add variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GA_ID` (optional)

### Build Output

```
Route                    Size      First Load JS
─────────────────────────────────────────────────
/                        189 B     116 kB
/hotels                  2.11 kB   118 kB
/events                  2.06 kB   118 kB
/activities              2.07 kB   118 kB
/careers                 1.16 kB   117 kB
/sitemap.xml             154 B     102 kB
/robots.txt              154 B     102 kB
```

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `lsof -ti:3000 \| xargs kill -9` |
| Module not found | `rm -rf node_modules .next && npm install` |
| TypeScript errors | `npx tsc --noEmit` to check |
| Tailwind not working | Restart dev server |
| Build fails | Check console for specific error |

### Debug Tools

```tsx
// Debug component renders
useEffect(() => {
  console.log('Component mounted')
  return () => console.log('Component unmounted')
}, [])

// Debug state changes
useEffect(() => {
  console.log('State updated:', state)
}, [state])
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

Types:
- feat:     New feature
- fix:      Bug fix
- docs:     Documentation
- style:    Formatting
- refactor: Code restructuring
- test:     Adding tests
- chore:    Maintenance

Examples:
feat(hotels): add price filter
fix(search): resolve dropdown issue
docs(readme): update setup guide
```

---

## Pages Reference

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing with search |
| Hotels | `/hotels` | Hotel listings |
| Events | `/events` | Event listings |
| Activities | `/activities` | Activity listings |
| Places | `/places` | Destinations |
| About | `/about` | Company info |
| Support | `/support` | Help center |
| Careers | `/careers` | Job listings |
| Login | `/login` | Authentication |
| Sign Up | `/signup` | Registration |
| Terms | `/terms` | Legal terms |
| Privacy | `/privacy` | Privacy policy |

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

## Contact

| Channel | Link |
|---------|------|
| Website | [kikeroo.com](https://kikeroo.com) |
| Email | support@kikeroo.com |
| Twitter | [@kikeroo](https://twitter.com/kikeroo) |

---

<p align="center">
  <strong>"Travel Together, Create Memories Forever"</strong>
  <br><br>
  Made with ❤️ for travelers worldwide
</p>
