import { useEffect, useState, useRef } from 'react';
import './Hero.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ transformation: 0, companies: 0 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000; // 2 seconds
    const transformationTarget = 3;
    const companiesTarget = 200;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        transformation: Math.floor(easeOutQuart * transformationTarget),
        companies: Math.floor(easeOutQuart * companiesTarget),
      });

      if (frame >= totalFrames) {
        setCounters({
          transformation: transformationTarget,
          companies: companiesTarget,
        });
        clearInterval(interval);
      }
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="home" className="hero">
      {/* Animated Background Shapes */}
      <div className="hero-background">
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
              <button
                className="cta-secondary"
                onClick={() => window.open('https://www.youtube.com/watch?v=ogYADo1WXyg', '_blank')}
              >
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
                  <span className="counter">{counters.transformation}</span>
                  <span className="stat-x">X</span>
                </div>
                <div className="stat-label">Deeper transformation in half the time</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">
                  <span className="counter">{counters.companies}</span>
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
