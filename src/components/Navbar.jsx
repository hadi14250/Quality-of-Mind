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

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar + some buffer
      
      // At the very top, always show Home
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }
      
      // Build section positions array with proper ordering
      // Note: our-story is nested inside approach, so we check it specifically
      const sectionIds = ['home', 'our-story', 'approach', 'programs', 'testimonials', 'faq', 'contact'];
      const sectionPositions = [];
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          sectionPositions.push({
            id: sectionId,
            top: offsetTop,
            bottom: offsetTop + rect.height
          });
        }
      }
      
      // Sort by top position
      sectionPositions.sort((a, b) => a.top - b.top);
      
      // Find the current section (last one whose top is above scroll position)
      let currentSection = 'home';
      
      for (const section of sectionPositions) {
        if (scrollPosition >= section.top) {
          currentSection = section.id;
        } else {
          break; // Stop once we pass the scroll position
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial check after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Larger offset on mobile to account for navbar + extra padding
      const isMobile = window.innerWidth <= 968;
      const navbarHeight = isMobile ? 100 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
            <button onClick={() => scrollToSection('our-story')} className={`nav-link ${activeSection === 'our-story' ? 'active' : ''}`}>Our Story</button>
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
