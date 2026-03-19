import "./styles/WhatIDo.css";

interface CallToActionProps {
  openModal: () => void;
}

const CallToAction = ({ openModal }: CallToActionProps) => {
  return (
    <section id="get_started" className="cta-section">
      <div className="section-container">
        <div className="cta-content">
          <h2 className="cta-title">Get Started</h2>
          <p className="section-subtitle">
            Ready to transform your vision into reality? Let's create something
            amazing together.
          </p>
          <button className="cta-button" onClick={openModal}>
            Start Project<span className="button-icon">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
