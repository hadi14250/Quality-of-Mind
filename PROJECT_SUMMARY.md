# Quality of Mind Website

A modern, performant React website for Quality of Mind with smooth animations inspired by contemporary web design patterns.

## 🎨 Design Overview

### Color Theme
- **Primary Background**: Dark navy (#0F1419)
- **Secondary Background**: Deeper navy (#1A1D2E)
- **Accent Red**: Quality of Mind brand red (#C9574E)
- **Accent Cream**: Light cream background (#F5F1E8)
- **Text**: White primary, gray secondary

### Animation Style
Inspired by the reference video with smooth, professional animations:
- Fade in/up animations on scroll
- Staggered card animations
- Smooth hover transitions
- Scroll-triggered effects using Intersection Observer

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx/css       # Fixed navigation with smooth scroll
│   ├── Hero.jsx/css         # Hero section with CTA
│   ├── Approach.jsx/css     # Our approach & comparison
│   ├── Programs.jsx/css     # Programme cards
│   ├── Testimonials.jsx/css # Client testimonials
│   ├── FAQ.jsx/css          # Accordion FAQ section
│   └── Footer.jsx/css       # Footer with CTA
├── App.jsx                  # Main app component
├── App.css                  # Global app styles
└── index.css                # Root CSS variables & reset
```

## 🚀 Features

### Performance Optimizations (Addressing Audit Issues)
- ✅ Lazy loading for images
- ✅ Optimized animations (GPU-accelerated transforms)
- ✅ No hidden refresh links
- ✅ Fast, responsive navigation (no slow menu transitions)
- ✅ Smooth scrolling without performance impact
- ✅ Proper hover states (no layout shift)
- ✅ Single primary CTA (reduced CTA clutter)

### Key Sections
1. **Hero** - Main headline with image and stats
2. **Approach** - Before Psychology concept with benefits
3. **Programs** - Card-based programme showcase
4. **Testimonials** - Client success stories
5. **FAQ** - Accordion-style questions
6. **Footer** - Final CTA and footer links

### Animations
- Fade in up on scroll
- Staggered card reveals
- Smooth hover effects
- Intersection Observer for performance
- No layout shift on hover

## 🛠️ Development

### Run Development Server
```bash
npm run dev
```
Server runs on: http://localhost:5176/

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 Responsive Design
- Desktop: Full grid layouts, side-by-side content
- Tablet: Adjusted grids, maintained spacing
- Mobile: Single column, stacked layouts, mobile menu

## 🎯 Key Improvements Over Original

1. **Performance**: Much faster load times, optimized animations
2. **UX**: Clear navigation, single CTA focus, no hidden links
3. **Design**: Modern card-based layout, consistent spacing
4. **Animations**: Smooth, professional, GPU-accelerated
5. **Accessibility**: Proper focus states, semantic HTML
6. **Mobile**: Fully responsive with mobile-first approach

## 🎨 Design Inspiration

The design combines:
- Animation style from the reference video (smooth, professional)
- Quality of Mind brand colors (red theme)
- Modern card-based layouts
- Lowercase typography for hero headlines
- Clean, minimal aesthetic

## 📦 Technologies
- React 19
- Vite
- CSS3 (Custom Properties)
- Intersection Observer API
- Modern JavaScript (ES6+)

## 🔄 Hot Module Replacement
The development server supports HMR for instant updates without page refresh.

---

Built with focus on performance, accessibility, and modern web design principles.
