import { smoother } from "./Navbar";
import "./styles/WhatIDo.css";

interface PricingProps {
  openModal: () => void;
}

const Pricing = ({ openModal }: PricingProps) => {
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
    <section id="pricing" className="pricing-section">
      <div className="section-container">
        <div className="pricing-header">
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">
            No hidden fees. Choose a monthly retainer that fits your growth
            stage.
          </p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Essential Design</h3>
            <p className="pricing-desc">For startups needing branding & UI.</p>
            <div className="pricing-amount" style={{ fontSize: '32px' }}>
              Starts at $499
            </div>
            <button
              className="pricing-btn"
              onClick={() => scrollToSection("contact")}
            >
              Choose Essential
            </button>
            <ul className="pricing-features">
              <li>✓ Graphic Design & Branding</li>
              <li>✓ UI/UX Web Design</li>
              <li className="disabled">✕ Web Development</li>
            </ul>
          </div>
          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <h3>Pro Full-Stack</h3>
            <p className="pricing-desc">
              For scaling brands needing design + code.
            </p>
            <div className="pricing-amount" style={{ fontSize: '32px' }}>
              Starts at $999
            </div>
            <button
              className="pricing-btn primary"
              onClick={() => scrollToSection("contact")}
            >
              Choose Pro
            </button>
            <ul className="pricing-features">
              <li>✓ Everything in Essential</li>
              <li>✓ Full Frontend & Backend Dev</li>
              <li>✓ Basic Video Editing</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="pricing-desc">Full digital transformation & AI.</p>
            <div className="pricing-amount" style={{ fontSize: '32px' }}>Custom</div>
            <button
              className="pricing-btn"
              onClick={() => scrollToSection("contact")}
            >
              Contact Sales
            </button>
            <ul className="pricing-features">
              <li>✓ Everything in Pro</li>
              <li>✓ Custom AI Agents & LLMs</li>
              <li>✓ Cinema-grade Video</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
