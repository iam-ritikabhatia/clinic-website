# Gleuhr - Premium Dermatology & Wellness Clinic Website

A modern, premium website for Gleuhr dermatology clinic built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Premium aesthetic with smooth animations and clean layouts
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations throughout for a polished experience
- **SEO Optimized**: Proper metadata and semantic HTML
- **Fast Performance**: Optimized with Next.js 14 App Router

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── locations/      # Locations page
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/       # Reusable sections
│   └── ui/             # UI components
└── public/             # Static assets
```

## Brand Colors

- **Primary**: #4da7ae (Teal/Turquoise)
- **Secondary**: #ffffff (White)
- **Text**: Slate-700/800 (Dark Gray)

## Key Pages

- **Home** (`/`): Hero, About, Services overview, Why Choose, Testimonials, Locations, CTA
- **Services** (`/services`): Detailed treatment information, consultation process, FAQ
- **About** (`/about`): Our story, founders, approach, team
- **Locations** (`/locations`): All 4 clinic locations with addresses
- **Contact** (`/contact`): Contact form and information

## Important Notes

- No pricing information is displayed anywhere on the site
- Focus on personalized care, daily follow-ups, and doctor guidance
- Gleuhr is a clinic + wellness brand (not a product/serum seller)
- All treatments emphasize results and science-backed approaches

## Customization

### Colors

Edit `tailwind.config.ts` to modify brand colors:

```typescript
colors: {
  primary: {
    DEFAULT: "#4da7ae",
    dark: "#3d8a90",
    light: "#6bb8be",
  },
}
```

### Content

All content is in the respective page files in the `app/` directory. Update text, images, and information as needed.

## License

This project is proprietary and confidential.

# clinic-website
