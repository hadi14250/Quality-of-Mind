import { useEffect, useRef, useState } from 'react';
import './Approach.css';

function Approach() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id="approach" className="approach" ref={sectionRef}>
      <div className="container">
        <div className={`approach-header ${isVisible ? 'animate-in' : 'loading'}`}>
          <span className="section-tag">Our Approach</span>
          <h2>before psychology</h2>
          <p>
            It's not a technique. It's a shift in perception. Understanding how the mind
            works creates lasting transformation from the inside out.
          </p>
        </div>

        <div className="approach-content">
          <div className={`approach-image ${isVisible ? 'animate-left' : 'loading'}`}>
            <img src="/images/3 X Deeper transformation in half the time of conventional methods.png" alt="Deeper transformation" />
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
