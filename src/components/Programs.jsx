import { useEffect, useRef, useState } from 'react';
import './Programs.css';

function Programs() {
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

  const programs = [
    {
      title: 'Open-Programmes',
      subtitle: 'Personalised. Profound. Proven.',
      description: 'Immersive programmes designed to create deep, lasting transformation through personalised guidance and proven methodologies.',
      icon: '✦',
    },
    {
      title: 'Bespoke Corporate',
      subtitle: 'Three Days That Can Change Your Life',
      description: 'Tailored corporate programmes that bring transformative insights to your entire organisation in just three powerful days.',
      icon: '◈',
    },
    {
      title: 'Individual Coaching',
      subtitle: 'For Individuals Wanting More',
      description: 'One-on-one coaching for those ready to unlock their full potential and experience profound personal transformation.',
      icon: '◆',
    },
    {
      title: 'Online Learning',
      subtitle: 'Self-Learn. Your Pace',
      description: 'Flexible online courses that let you discover the principles of Quality of Mind at your own pace, from anywhere.',
      icon: '◉',
    },
  ];

  return (
    <section id="programs" className="programs" ref={sectionRef}>
      <div className="container">
        <div className={`programs-header ${isVisible ? 'animate-in' : 'loading'}`}>
          <span className="section-tag">Programmes</span>
          <h2>Discover the programme that fits you</h2>
          <p>Choose the path that resonates with where you are and where you want to go</p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`program-card ${isVisible ? 'animate-in' : 'loading'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <h4>{program.subtitle}</h4>
              <p>{program.description}</p>
              <button className="program-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
