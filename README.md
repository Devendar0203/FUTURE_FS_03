# 💄 Glamour Studio — Professional Salon Website

> A modern, fully responsive business website for **Glamour Studio**, a premier Salon & Beauty Parlour based in Hyderabad, India.

![Glamour Studio](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4) ![Vite](https://img.shields.io/badge/Vite-Latest-646CFF) ![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

---

## 🔗 Live Demo

> 🚀 [https://glamourstudio.vercel.app](https://task3-sable-eta.vercel.app/) *(replace with your actual link)*

---

## ✨ Features

- **8 fully-coded sections**: Navbar, Hero, About, Services, Gallery, Testimonials, Contact, Footer
- **Dark luxury theme** with deep rose `#C2185B` + gold `#F9A825` palette
- **Glassmorphism design** with backdrop blur cards and gradient accents
- **Smooth animations** — fade-in, slide-up, intersection observer triggered
- **Sticky Navbar** with active section highlighting and mobile hamburger menu
- **Services grid** with 8 service cards, prices, badges, and book CTAs
- **Masonry Gallery** with hover zoom & label overlays
- **Auto-playing Testimonials Carousel** with arrow navigation and dot indicators
- **Validated Contact Form** with submission state and loading indicator
- **Embedded Google Maps** showing MG Road, Hyderabad location
- **Floating WhatsApp Button** with pulse animation and tooltip
- **SEO optimized** — proper meta tags, semantic HTML, heading hierarchy
- **Fully responsive** — mobile-first design with breakpoints for all screen sizes
- **WCAG AA accessible** — proper contrast ratios, aria labels, focus states

---

## 🗂️ Project Structure

```
/src
  /components
    Navbar.jsx          # Sticky nav with mobile hamburger
    Hero.jsx            # Full-screen hero with CTA buttons
    About.jsx           # Business story + highlights + owner card
    Services.jsx        # 8 service cards with pricing
    Gallery.jsx         # Masonry image grid with hover effects
    Testimonials.jsx    # Auto-playing carousel with 6 reviews
    Contact.jsx         # Form + map + contact info sidebar
    Footer.jsx          # Full footer with links and social media
    WhatsAppButton.jsx  # Floating WhatsApp CTA
  App.jsx               # Main app assembling all components
  index.css             # Global styles, Tailwind directives, utilities
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/glamour-studio.git
cd glamour-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18+ | UI Framework |
| Vite | Latest | Build tool & dev server |
| Tailwind CSS | 3.x | Utility-first styling |
| PostCSS | 8+ | CSS processing |
| Autoprefixer | 10+ | CSS vendor prefixes |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Primary Color | `#C2185B` (Deep Rose) | CTAs, accents, highlights |
| Secondary Color | `#F9A825` (Gold) | Gradients, badges, icons |
| Dark BG | `#0d0d0d` | Main background |
| Card BG | `rgba(255,255,255,0.05)` | Glass cards |
| Heading Font | Playfair Display | All headings |
| Body Font | Inter | Body text |

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px – 1024px
- **Desktop**: > 1024px

---

## 🔍 SEO

- ✅ `<title>` and `<meta name="description">` configured
- ✅ Open Graph meta tags
- ✅ Semantic HTML5 (`header`, `main`, `section`, `footer`, `article`)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Alt text on all images
- ✅ Canonical URL

---

## 📦 Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

---

## 📋 Business Information

| Detail | Value |
|---|---|
| Business Name | Glamour Studio |
| Type | Salon & Beauty Parlour |
| Tagline | "Look Good • Feel Great • Every Day" |
| Phone | +91 98765 43210 |
| Email | glamourstudio@gmail.com |
| Address | 12, MG Road, Hyderabad, Telangana — 500001 |
| Hours | Mon–Sat, 9:00 AM – 8:00 PM |

---

## 📄 License

© 2026 Glamour Studio. All Rights Reserved.
