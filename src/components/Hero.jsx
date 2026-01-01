import { useEffect, useState, useRef } from 'react';
import './Hero.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="hero">
      {/* Video Background with Modern Overlay */}
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="video-gradient"></div>
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-left' : 'loading'}`}>
            <div className="hero-badge animate-badge">
              <span className="badge-dot"></span>
              <span>Before Psychology</span>
            </div>

            <h1 className="hero-title">
              <span className="line line-1">what if we've been</span>
              <span className="line line-2">solving the</span>
              <span className="line line-3 highlight">wrong problem...</span>
            </h1>

            <p className="hero-subtitle">
              Discover a new way to unlock peace of mind. Quality of Mind helps you see how the mind truly works for real and lasting change.
            </p>

            <div className="hero-cta-group">
              <button className="cta-primary">
                <span>Book a Call</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="arrow-icon">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="cta-secondary">
                <div className="play-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 2L13 8L3 14V2Z" fill="currentColor"/>
                  </svg>
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">
                  <span className="counter" data-target="3">0</span>
                  <span className="stat-x">X</span>
                </div>
                <div className="stat-label">Deeper transformation in half the time</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">
                  <span className="counter" data-target="200">0</span>
                  <span className="stat-plus">+</span>
                </div>
                <div className="stat-label">Companies transformed</div>
              </div>
            </div>
          </div>

          <div className={`hero-image-wrapper ${isVisible ? 'animate-right' : 'loading'}`}>
            <div className="image-frame">
              <div className="frame-border"></div>
              <div className="image-container">
                <img src="/images/The missing upstream shift.png" alt="The missing upstream shift" />
                <div className="image-glow"></div>
              </div>
              <div className="floating-card card-1">
                <div className="card-icon">✦</div>
                <div className="card-text">Before Psychology</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">◈</div>
                <div className="card-text">Lasting Change</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

export default Hero;
