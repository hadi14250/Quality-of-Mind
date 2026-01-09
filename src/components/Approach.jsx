import { useEffect, useRef, useState } from 'react';
import './Approach.css';

function Approach() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Ensure video plays when visible
          if (videoRef.current) {
            videoRef.current.play().catch(error => {
              console.log("Video autoplay prevented:", error);
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      title: 'Break Through',
      description: 'Move past limiting beliefs and mental barriers that have held you back.',
    },
    {
      title: 'Pure Leadership',
      description: 'Lead from clarity and wisdom rather than fear and insecurity.',
    },
    {
      title: 'Team Synergy',
      description: 'Create high-performing teams through shared understanding.',
    },
    {
      title: 'Less Is More',
      description: 'Achieve more by doing less—work from insight, not effort.',
    },
    {
      title: 'Liberating',
      description: 'Experience true freedom from unnecessary psychological suffering.',
    },
  ];

  return (
    <section className="approach" ref={sectionRef}>
      {/* Video Feature Section */}
      <div id="our-story" className="video-showcase">
        <div className="container">
          <div className={`video-showcase-content ${isVisible ? 'animate-in' : 'loading'}`}>
            <div className="video-info">
              <span className="section-tag">Our Story</span>
              <h3>Discover How the Mind Truly Works</h3>
              <p>
                Watch this short video to understand the fundamental principles that create
                lasting transformation from the inside out.
              </p>
            </div>
            <div className="video-frame">
              <div className="video-decorative-border"></div>
              <div className="video-container">
                <video
                  ref={videoRef}
                  className="showcase-video"
                  muted
                  loop
                  playsInline
                >
                  <source src="/images/video-to-put.mp4" type="video/mp4" />
                </video>
                <div className="video-play-overlay">
                  <button
                    className="play-button"
                    onClick={() => window.open('https://www.youtube.com/watch?v=ogYADo1WXyg', '_blank')}
                    title="Watch on YouTube"
                  >
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="32" fill="rgba(201, 87, 78, 0.9)"/>
                      <path d="M26 20L44 32L26 44V20Z" fill="white"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="video-glow"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="approach" className="container">
        <div className={`approach-header ${isVisible ? 'animate-in' : 'loading'}`}>
          <span className="section-tag">Our Approach</span>
          <h2 style={{ textTransform: 'none' }}>Before Psychology</h2>
          <p>
            It's not a technique. It's a shift in perception. Understanding how the mind
            works creates lasting transformation from the inside out.
          </p>
        </div>

        <div className="approach-content">
          <div className={`approach-image ${isVisible ? 'animate-left' : 'loading'}`}>
            <img src="/images/super-piers.png" alt="Deeper transformation" />
            <div className="floating-logo">
              <img src="/images/Quality Of Mind Transparent logo.svg" alt="Quality of Mind" />
            </div>
          </div>

          <div className={`approach-benefits ${isVisible ? 'animate-right' : 'loading'}`}>
            <h3>From 'Good' to 'Great'</h3>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`approach-comparison ${isVisible ? 'animate-in' : 'loading'}`}>
          <h3>Traditional Approaches vs Quality of Mind</h3>
          <div className="comparison-grid">
            <div className="comparison-column">
              <h4>Traditional Approaches</h4>
              <ul>
                <li>Focus on managing symptoms</li>
                <li>Requires continuous effort</li>
                <li>Temporary relief</li>
                <li>Works on content (what you think)</li>
                <li>Multiple techniques to learn</li>
              </ul>
            </div>
            <div className="comparison-column highlight">
              <h4>Quality of Mind Approach</h4>
              <ul>
                <li>Addresses the root cause</li>
                <li>Natural, effortless change</li>
                <li>Lasting transformation</li>
                <li>Works on context (how thought works)</li>
                <li>One fundamental understanding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Approach;
