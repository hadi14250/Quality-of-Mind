import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>let's talk and discuss with us!</h2>
            <p>
              Ready to experience transformation? Book a call with us and discover
              how Quality of Mind can help you unlock clarity, performance, and inner peace.
            </p>
            <button className="cta-button-large">
              <span>Book a Call Today</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/images/Quality Of Mind Transparent logo.svg" alt="Quality of Mind" />
                <span>Quality of Mind</span>
              </div>
              <p>Discover clarity, performance & inner peace through understanding how the mind truly works.</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#approach">Our Approach</a></li>
                  <li><a href="#programs">Programs</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Blog</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Podcast</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <ul>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Twitter</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>Instagram</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()}>YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Quality of Mind. All Rights Reserved.</p>
            <div className="footer-legal">
              <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <span>•</span>
              <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
