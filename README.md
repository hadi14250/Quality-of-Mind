# Quality of Mind

A modern, performant React website for **Quality of Mind** — helping people discover a new way to unlock peace of mind and see how the mind truly works for real and lasting change.

## Overview

Quality of Mind is a single-page marketing site built with React 19 and Vite. It features smooth scroll-triggered animations, a responsive design, and a clean, modern aesthetic centered around the brand's "Before Psychology" approach.

## Tech Stack

- **React 19** — UI library
- **Vite 7** — build tool & dev server
- **React Compiler** — automatic memoization for performance
- **CSS3** — custom properties, GPU-accelerated animations
- **Intersection Observer API** — scroll-triggered effects
- **ESLint** — code linting

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed navigation with smooth scroll
│   ├── Hero.jsx          # Hero section with CTA
│   ├── Approach.jsx      # "Before Psychology" approach
│   ├── Programs.jsx      # Programme cards
│   ├── Testimonials.jsx  # Client testimonials
│   ├── FAQ.jsx           # Accordion FAQ section
│   ├── Contact.jsx       # Contact section
│   ├── Footer.jsx        # Footer with CTA
│   └── ThemeToggle.jsx   # Light/dark theme switch
├── context/              # React context providers
├── App.jsx               # Main app component
├── index.css             # Root CSS variables & reset
└── main.jsx              # Entry point

public/
├── images/               # Logos, illustrations, video assets
└── clients/              # Client-related media
```

## Features

- Fade in / up animations on scroll
- Staggered card reveals
- Smooth, GPU-accelerated hover transitions
- Light/dark theme toggle
- Fully responsive (desktop, tablet, mobile)
- Lazy-loaded images
- Single primary CTA per section
- Accessible focus states and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement.

### Build

```bash
npm run build
```

Outputs an optimized production build to `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally.

### Lint

```bash
npm run lint
```

## Responsive Design

- **Desktop** — full grid layouts, side-by-side content
- **Tablet** — adjusted grids, maintained spacing
- **Mobile** — single column, stacked layouts, mobile menu

## Brand

- Primary background: dark navy (`#0F1419`)
- Secondary background: deeper navy (`#1A1D2E`)
- Accent red: `#C9574E`
- Accent cream: `#F5F1E8`

---

Built with focus on performance, accessibility, and modern web design.
