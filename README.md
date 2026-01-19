# Kikeroo - Group Travel Planning Platform

A modern, SEO-friendly travel booking platform built with Next.js 14, designed to make group trip planning easy and enjoyable.

## Features

- **Group Trip Planning** - Coordinate travel with friends and family
- **Hotel Booking** - Browse and book accommodations worldwide
- **Event Discovery** - Find concerts, shows, and live events
- **Activity Booking** - Book adventure experiences and activities
- **Place Exploration** - Discover amazing travel destinations
- **User Authentication** - Secure login and registration
- **Responsive Design** - Optimized for all devices
- **SEO Optimized** - Full metadata, sitemap, and structured data

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Font**: [Montserrat](https://fonts.google.com/specimen/Montserrat)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kikeroo.git
cd kikeroo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
kikeroo/
├── public/
│   ├── images/          # Static images and assets
│   └── manifest.json    # PWA manifest
├── src/
│   ├── app/
│   │   ├── about/       # About page
│   │   ├── activities/  # Activities listing
│   │   ├── careers/     # Careers page
│   │   ├── events/      # Events listing
│   │   ├── hotels/      # Hotels listing
│   │   ├── login/       # Login page
│   │   ├── places/      # Places listing
│   │   ├── privacy/     # Privacy policy
│   │   ├── signup/      # Registration page
│   │   ├── support/     # Support center
│   │   ├── terms/       # Terms and conditions
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout with SEO
│   │   ├── page.tsx     # Home page
│   │   ├── robots.ts    # Robots.txt generator
│   │   └── sitemap.ts   # Sitemap generator
│   ├── components/
│   │   ├── ActivityCard.tsx
│   │   ├── EventCard.tsx
│   │   ├── Footer.tsx
│   │   ├── GroupTripBanner.tsx
│   │   ├── Header.tsx
│   │   ├── HotelCard.tsx
│   │   ├── PageLayout.tsx
│   │   ├── PlaceCard.tsx
│   │   ├── SearchFilters.tsx
│   │   └── SectionHeader.tsx
│   └── lib/
│       └── data.ts      # Static data and types
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with search and featured content |
| Hotels | `/hotels` | Hotel listings with filtering |
| Events | `/events` | Event and concert listings |
| Activities | `/activities` | Adventure activity listings |
| Places | `/places` | Destination exploration |
| About | `/about` | Company information |
| Support | `/support` | Help center with FAQ |
| Careers | `/careers` | Job openings |
| Login | `/login` | User authentication |
| Sign Up | `/signup` | User registration |
| Terms | `/terms` | Terms and conditions |
| Privacy | `/privacy` | Privacy policy |

## SEO Features

- **Meta Tags**: Title, description, keywords for all pages
- **Open Graph**: Social sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling rules
- **Structured Data**: JSON-LD schema markup
- **Canonical URLs**: Prevent duplicate content
- **Semantic HTML**: Proper heading hierarchy and landmarks

## Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Site URL (for sitemap and meta tags)
NEXT_PUBLIC_SITE_URL=https://kikeroo.com

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Site Verification (optional)
GOOGLE_SITE_VERIFICATION=your-verification-code
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/kikeroo)

### Other Platforms

Build the project and deploy the output:

```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [https://kikeroo.com](https://kikeroo.com)
- **Email**: support@kikeroo.com
- **Twitter**: [@kikeroo](https://twitter.com/kikeroo)

---

Made with love for travelers worldwide
