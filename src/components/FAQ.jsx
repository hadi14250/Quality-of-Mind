import { useEffect, useRef, useState } from 'react';
import './FAQ.css';

function FAQ() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

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

  const faqs = [
    {
      question: 'What exactly is Quality of Mind (QoM)?',
      answer: 'Quality of Mind is a transformative approach that helps you understand how your mind actually works—before psychology, before conditioning. It\'s about seeing the principles behind thought, consciousness, and the human experience, leading to lasting change from the inside out.',
    },
    {
      question: 'How is Quality of Mind different from mindset or performance coaching?',
      answer: 'While traditional coaching works on changing content (what you think), Quality of Mind works on understanding context (how thought works). This creates deeper, more sustainable transformation because you\'re addressing the source rather than the symptoms.',
    },
    {
      question: 'Who is Quality of Mind for?',
      answer: 'Quality of Mind is for anyone seeking genuine, lasting change—from high-performing leaders and entrepreneurs to individuals experiencing stress or feeling stuck. It\'s for those ready to move beyond temporary fixes to fundamental transformation.',
    },
    {
      question: 'What is Before Psychology?',
      answer: 'Before Psychology refers to the understanding that comes before learned psychological patterns. It\'s about recognizing the principles of how all humans create their experience, independent of content, circumstance, or history.',
    },
    {
      question: 'Is this \'Spiritual\' or \'Psychological\'?',
      answer: 'Neither and both. Quality of Mind transcends these categories by pointing to the fundamental principles of human experience. It\'s practical, evidence-based, and immediately applicable, while also addressing the deeper nature of consciousness.',
    },
    {
      question: 'Is this for when things are going wrong—or when they\'re going well?',
      answer: 'Both. Quality of Mind is equally powerful for those facing challenges and those looking to elevate their already high performance. Many of our most successful clients come to us when things are going well, seeking the next level.',
    },
    {
      question: 'Can this really improve performance?',
      answer: 'Yes. When you understand how your mind works, you naturally experience less interference, more clarity, better decision-making, and greater resilience. Our clients consistently report significant improvements in both performance and wellbeing.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq" ref={sectionRef}>
      <div className="container">
        <div className={`faq-header ${isVisible ? 'animate-in' : 'loading'}`}>
          <span className="section-tag">FAQ</span>
          <h2>Going beyond traditional psychology</h2>
          <p>Common questions about the Quality of Mind approach</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''} ${isVisible ? 'animate-in' : 'loading'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className={openIndex === index ? 'hide-horizontal' : ''}
                    />
                  </svg>
                </div>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
