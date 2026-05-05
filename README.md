<div align="center">

# Quality of Mind

**A new way to unlock peace of mind — and see how the mind truly works for real and lasting change.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](#license)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)

</div>

---

## ✨ Overview

**Quality of Mind** is a modern, single-page marketing site built with React 19 and Vite. It pairs smooth scroll-triggered animations with a clean, responsive aesthetic — designed around the brand's *"Before Psychology"* approach.

> Performance-first. Accessible by default. Built to feel calm.

---

## 🛠 Tech Stack

| Layer | Tool |
|---|---|
| UI Library | **React 19** |
| Build Tool | **Vite 7** |
| Performance | **React Compiler** (automatic memoization) |
| Styling | **CSS3** with custom properties & GPU-accelerated animations |
| Interactions | **Intersection Observer API** |
| Quality | **ESLint** |

---

## 📁 Project Structure

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

---

## 🎯 Features

- 🌀 **Fade in / up animations** on scroll
- 🎬 **Staggered card reveals** for natural rhythm
- ⚡ **GPU-accelerated** hover transitions
- 🌗 **Light / dark theme toggle**
- 📱 **Fully responsive** — desktop, tablet, mobile
- 🖼 **Lazy-loaded images** for fast initial paint
- 🎯 Single primary CTA per section
- ♿ **Accessible** focus states and semantic HTML

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm**

### Setup

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be live at `http://localhost:5173` with hot module replacement.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 📐 Responsive Design

| Breakpoint | Behavior |
|---|---|
| 🖥 **Desktop** | Full grid layouts, side-by-side content |
| 📱 **Tablet** | Adjusted grids, maintained spacing |
| 📲 **Mobile** | Single column, stacked layouts, mobile menu |

---

## 🎨 Brand Palette

| Token | Hex | Preview |
|---|---|---|
| Primary background | `#0F1419` | ![#0F1419](https://placehold.co/15x15/0F1419/0F1419.png) dark navy |
| Secondary background | `#1A1D2E` | ![#1A1D2E](https://placehold.co/15x15/1A1D2E/1A1D2E.png) deeper navy |
| Accent red | `#C9574E` | ![#C9574E](https://placehold.co/15x15/C9574E/C9574E.png) |
| Accent cream | `#F5F1E8` | ![#F5F1E8](https://placehold.co/15x15/F5F1E8/F5F1E8.png) |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a PR or start a discussion.

---

<div align="center">

Built with focus on **performance**, **accessibility**, and **modern web design**.

</div>
