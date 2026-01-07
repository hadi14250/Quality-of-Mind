import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = ['home', 'approach', 'programs', 'testimonials', 'faq', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            <img src="/images/Quality Of Mind Transparent logo.svg" alt="Quality of Mind" />
            <span>Quality of Mind</span>
          </div>

          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</button>
            <button onClick={() => scrollToSection('approach')} className={`nav-link ${activeSection === 'approach' ? 'active' : ''}`}>Our Approach</button>
            <button onClick={() => scrollToSection('programs')} className={`nav-link ${activeSection === 'programs' ? 'active' : ''}`}>Programs</button>
            <button onClick={() => scrollToSection('testimonials')} className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}>Testimonials</button>
            <button onClick={() => scrollToSection('faq')} className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}>FAQ</button>
            <button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</button>
            <button onClick={() => scrollToSection('contact')} className="cta-button">Book a Call</button>
          </div>

          <div className="navbar-actions">
            <ThemeToggle />
            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
