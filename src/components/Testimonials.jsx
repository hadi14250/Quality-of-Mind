import { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

function Testimonials() {
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

  const testimonials = [
    {
      quote: "This is bigger than just another 'course' or 'corporate training'. I genuinely felt that it could use this in all areas of my life and it would not only have a positive impact on me, but also on those around me.",
      name: "CEO",
      title: "Manufacturing & Engineering sector",
    },
    {
      quote: "I left the 3 days feeling like a different person, seeing the world in a new way. I'm more present. Thoughts emerge like bubbles, and don't stick. I am less in the way now. Can't wait to see what happens next...",
      name: "D.P.",
      title: "Partner in PSF Firm",
    },
    {
      quote: "I can clearly see how this enables business like ours to get a competitive edge. In a saturated, commoditised market; you'll get amazing talent, and they will benefit from being in the business too.",
      name: "UK MD",
      title: "Global Ransomes Jac...",
    },
  ];

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="testimonials-logo">
        <img src="/images/Quality Of Mind Transparent logo.svg" alt="Quality of Mind Logo" />
      </div>

      <div className="container">
        <div className={`testimonials-header ${isVisible ? 'animate-in' : 'loading'}`}>
          <span className="section-tag">Testimonials</span>
          <h2>the transformations speak for themselves</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${isVisible ? 'animate-in' : 'loading'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M10 20C10 15 12 10 18 8C15 12 15 15 15 17C15 19.2091 16.7909 21 19 21C21.2091 21 23 19.2091 23 17C23 14.7909 21.2091 13 19 13C18.5 13 18 13.1 17.5 13.3C17.8 8.5 20 6 25 5V7C22 8 20 10 20 13.5V17C20 20.866 16.866 24 13 24C10.2386 24 8 21.7614 8 19V15C8 11.6863 10.6863 9 14 9C14.3517 9 14.6977 9.02392 15.0357 9.07007C13.7853 11.0581 13 13.4389 13 16.5H10V20Z" fill="currentColor"/>
                  <path d="M25 20C25 15 27 10 33 8C30 12 30 15 30 17C30 19.2091 31.7909 21 34 21C36.2091 21 38 19.2091 38 17C38 14.7909 36.2091 13 34 13C33.5 13 33 13.1 32.5 13.3C32.8 8.5 35 6 40 5V7C37 8 35 10 35 13.5V17C35 20.866 31.866 24 28 24C25.2386 24 23 21.7614 23 19V15C23 11.6863 25.6863 9 29 9C29.3517 9 29.6977 9.02392 30.0357 9.07007C28.7853 11.0581 28 13.4389 28 16.5H25V20Z" fill="currentColor"/>
                </svg>
              </div>

              <p className="testimonial-quote">{testimonial.quote}</p>

              <div className="testimonial-footer">
                <div className="testimonial-logo">
                  <img src="/images/Quality Of Mind Transparent logo.svg" alt="Quality of Mind" />
                </div>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-title">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
