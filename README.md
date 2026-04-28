# Accredian Enterprise — Partial Clone

A production-grade Next.js implementation of the [Accredian Enterprise](https://enterprise.accredian.com/) website, built as part of a Full Stack Developer Intern assignment.

**Live Demo:** [https://accredian-enterprise.vercel.app](https://accredian-enterprises-gules.vercel.app/)  
**Tech Stack:** Next.js 16 (App Router + Turbopack) · React 19 · TypeScript · Tailwind CSS · Next.js API Routes

---

## 📸 Sections Built

| Section | Description |
|---|---|
| **Navbar** | Sticky nav with scroll-aware styling, active section highlighting, mobile hamburger menu with animated X icon |
| **Hero** | Full-screen gradient hero with animated dashboard mockup, stats |
| **Trusted By** | Auto-scrolling marquee of university partner logos |
| **Features** | 8-card grid of platform capabilities with SVG icons |
| **Programs** | Filterable program cards (by category) |
| **How It Works** | 4-step process with animated connectors |
| **Stats** | Count-up animated impact numbers |
| **Testimonials** | Auto-rotating carousel with dot navigation |
| **Partners** | Certification partner grid with trust indicators |
| **Contact Form** | Lead capture form with full validation + API route |
| **Footer** | Multi-column footer with newsletter subscription |

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts — Vercel auto-detects Next.js
```

Or use the Vercel dashboard:
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — no configuration needed

---

## 🏗️ Project Structure

```
accredian-enterprise/
├── app/
│   ├── globals.css          # Design tokens, animations, global styles
│   ├── layout.tsx           # Root layout with next/font, metadata
│   ├── loading.tsx          # Global loading state
│   ├── not-found.tsx        # 404 page
│   ├── page.tsx             # Main page — assembles all sections
│   └── api/
│       └── leads/
│           └── route.ts     # POST /api/leads — lead capture endpoint
├── components/
│   ├── Navbar.tsx           # Sticky responsive navigation with active section
│   ├── Hero.tsx             # Full-screen hero with dashboard mockup
│   ├── TrustedBy.tsx        # Auto-scrolling university logos
│   ├── Features.tsx         # Platform features grid with SVG icons
│   ├── Programs.tsx         # Filterable programs section
│   ├── HowItWorks.tsx       # 4-step process + CTA
│   ├── Stats.tsx            # Animated count-up statistics
│   ├── Testimonials.tsx     # Auto-rotating testimonial carousel
│   ├── Partners.tsx         # Certification partners grid
│   ├── ContactForm.tsx      # Lead capture form with a11y labels
│   └── Footer.tsx           # Multi-column footer with SVG social icons
├── hooks/
│   └── useScrollReveal.ts   # Reusable IntersectionObserver hook
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🧠 Approach Taken

### 1. Reference Analysis
The Accredian Enterprise site was analyzed via web search to identify all key sections, content themes, and the brand's visual language — deep blue, professional enterprise aesthetic, IIT/IIM credentialing.

### 2. Design System
Established a consistent design system with:
- **Typography:** Sora (display/headings) + DM Sans (body) via `next/font/google`
- **Color Palette:** Deep blue primary (`#1a56db`), navy dark, amber accent for urgency
- **Animation:** CSS IntersectionObserver-based scroll reveals, count-up numbers, marquee, auto-carousel

### 3. Component Architecture
All components are:
- **`'use client'`** where interactivity is needed (forms, carousels, scroll state)
- Server components by default (Navbar data, Footer, Partners)
- Fully typed with TypeScript
- Self-contained with their own animation logic
- Using a **reusable `useScrollReveal` hook** instead of duplicated IntersectionObserver code

### 4. Accessibility (a11y)
- All form inputs have associated `<label>` elements with `htmlFor`
- Error states use `aria-invalid` and `aria-describedby`
- Hamburger button uses `aria-expanded`, `aria-controls`, `aria-label`
- Testimonial dots use `aria-label` and `aria-current`
- Marquee respects `prefers-reduced-motion`
- Decorative elements use `aria-hidden="true"`
- Focus states visible on all interactive elements

### 5. API Integration
Built a real Next.js API route (`/api/leads`) that:
- Validates required fields
- Stores leads in-memory + persists to `/tmp/leads.json` on Vercel
- Returns proper HTTP status codes
- Can be extended with a database (Prisma + PostgreSQL, Supabase, etc.)

---

## 🤖 AI Usage (Claude)

This project was built with significant assistance from **Claude (Anthropic)**:

### Where AI Helped
- **Initial component scaffolding** — generating boilerplate for each section (Navbar, Hero, Features, etc.) based on site research
- **Tailwind class composition** — suggesting responsive class combinations and animation utilities
- **TypeScript interfaces** — defining `FormData`, component prop types
- **API route structure** — the leads endpoint pattern and error handling
- **SEO metadata** — generating relevant keywords and Open Graph tags
- **Animation logic** — `IntersectionObserver` pattern (later refactored into reusable hook)
- **SVG icons** — generating feature icons to replace emoji placeholders

### What I Modified / Improved Manually
- **Design decisions** — font pairing (Sora + DM Sans), color values, spacing scale, component layout choices
- **Component data** — all mock content (programs, testimonials, stats, features) crafted to match Accredian's real brand
- **Business logic** — form validation rules, error state handling, lead capture persistence strategy
- **Accessibility** — added `aria-label` attributes, keyboard navigation, focus states, `htmlFor` labels, `aria-invalid`
- **Performance** — extracted reusable hook, `next/font` for optimal font loading, `loading.tsx` + `not-found.tsx`
- **UX polish** — toast-style success state, loading spinner, auto-rotating carousel timing, marquee fade edges, active section tracking in navbar

---

## ✅ Functional Requirements Checklist

- [x] Fully responsive — mobile, tablet, desktop
- [x] Clean, structured, reusable components
- [x] Smooth anchor navigation between sections
- [x] Lead capture form with validation
- [x] API route (`POST /api/leads`) stores form data
- [x] Deployed on Vercel
- [x] Accessibility: labels, ARIA attributes, focus management, reduced-motion support
- [x] Loading state (`loading.tsx`)
- [x] 404 page (`not-found.tsx`)
- [x] Active section highlighting in navbar
- [x] Reusable scroll-reveal hook (DRY principle)

---

## 🔧 Improvements With More Time

1. **Real database integration** — Replace in-memory storage with Prisma + PostgreSQL or Supabase for durable lead persistence
2. **Email notifications** — Send confirmation emails on lead submission (Resend or SendGrid)
3. **CMS integration** — Connect programs/testimonials to a headless CMS (Sanity, Contentful) for non-dev content updates
4. **Authentication** — Add a basic admin dashboard to view and export captured leads
5. **Real images** — Replace emoji/text avatars with actual institution logos and team photos
6. **SEO optimization** — Add `sitemap.xml`, `robots.txt`, structured data (JSON-LD)
7. **Analytics** — Integrate Vercel Analytics or PostHog for conversion tracking
8. **A/B testing** — Test different CTA copy and hero variants
9. **i18n** — Add multi-language support for regional enterprise clients
10. **Accessibility audit** — Full WCAG 2.1 AA compliance review with axe-core

---

## 📄 License

Built for evaluation purposes as part of a Full Stack Internship assignment.
