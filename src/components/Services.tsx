import { smoother } from "./Navbar";
import "./styles/WhatIDo.css";

interface ServicesProps {
  openModal: () => void;
}

const Services = ({ openModal }: ServicesProps) => {
  const scrollToSection = (id: string) => {
    if (id === "contact") {
      openModal();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      if (window.innerWidth > 1024 && smoother) {
        smoother.scrollTo(element, true, "top top");
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">✏️</div>
            <h3>Graphic Design</h3>
            <p>Brand identity and visual storytelling.</p>
            <button className="service-btn" onClick={() => scrollToSection('contact')}>Book Service →</button>
          </div>
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Frictionless user journeys and stunning interfaces.</p>
            <button className="service-btn" onClick={() => scrollToSection('contact')}>Book Service →</button>
          </div>
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>High-performance React & TypeScript applications.</p>
            <button className="service-btn" onClick={() => scrollToSection('contact')}>Book Service →</button>
          </div>
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>AI Automation</h3>
            <p>Custom LLM agents and workflow automation.</p>
            <button className="service-btn" onClick={() => scrollToSection('contact')}>Book Service →</button>
          </div>
          <div className="service-card">
            <div className="service-icon">🎬</div>
            <h3>Video Editing</h3>
            <p>Cinematic cuts and motion graphics.</p>
            <button className="service-btn" onClick={() => scrollToSection('contact')}>Book Service →</button>
          </div>
          <div className="service-card">
            <div className="service-icon">🎵</div>
            <h3>Sound Design</h3>
            <p>Immersive audio landscapes and foley.</p>
            <button className="service-btn" onClick={() => scrollToSection('contact')}>Book Service →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
