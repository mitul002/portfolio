import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const Work = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    {
      title: "Prayer Times",
      category: "Progressive Web App",
      tools: "HTML, CSS, JavaScript, REST API, Firebase",
      image: `${baseUrl}images/prayer-times.jpg`,
      link: "https://www.prayer-times.me/",
      github: "https://github.com/mitul002",
    },
    {
      title: "Xperts",
      category: "On-demand Service Platform",
      tools: "HTML, CSS, JavaScript, PHP, Firebase, PWA",
      image: `${baseUrl}images/xperts.jpg`,
      link: "https://mitul002.github.io/xperts_web",
      github: "https://github.com/mitul002/xperts_web",
    },
    {
      title: "Zedd Downloader",
      category: "Web Application",
      tools: "HTML, CSS, JavaScript, Backend Automation",
      image: `${baseUrl}images/zedd.jpg`,
      link: "https://zedd-downloader.onrender.com/",
      github: "https://github.com/mitul002",
    },
    {
      title: "Parkinson's Disease Detection System",
      category: "Machine Learning Based Web App",
      tools: "Python, Streamlit, OpenCV, scikit-image, ResNet18, Random Forest, SHAP, LIME",
      image: `${baseUrl}images/parkinson.jpg`,
      link: "https://parkinson-detection-system.streamlit.app/",
      github: "https://github.com/mitul002",
    },
    {
      title: "Aura AI Assistant",
      category: "AI Chatbot Web App",
      tools: "HTML5, CSS3, JavaScript, REST API, n8n, Google Sheets",
      image: `${baseUrl}images/aura.jpg`,
      link: "",
      github: "https://github.com/mitul002",
    },
  ];

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 style={{ textAlign: 'center', width: '100%' }}>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="disable"
                              className="carousel-btn"
                              style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                marginTop: '20px', padding: '10px 24px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: '#fff', borderRadius: '50px', textDecoration: 'none',
                                fontSize: '14px', fontWeight: 600,
                                boxShadow: '0 5px 20px rgba(102,126,234,0.35)',
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, { transform: 'translateY(-3px)', boxShadow: '0 8px 25px rgba(102,126,234,0.55)' })}
                              onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, { transform: 'translateY(0)', boxShadow: '0 5px 20px rgba(102,126,234,0.35)' })}
                            >
                              View Live
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                              </svg>
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="disable"
                              className="carousel-btn"
                              style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                marginTop: '20px', padding: '10px 24px',
                                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)',
                                color: '#fff', borderRadius: '50px', textDecoration: 'none',
                                fontSize: '14px', fontWeight: 600,
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, { transform: 'translateY(-3px)', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.4)' })}
                              onMouseLeave={(e) => Object.assign((e.currentTarget as HTMLAnchorElement).style, { transform: 'translateY(0)', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)' })}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
