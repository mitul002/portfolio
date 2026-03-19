import "./styles/WhatIDo.css";

const Process = () => {
  return (
    <section id="process" className="process-section">
      <div className="section-container">
        <div className="process-header">
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle">
            A streamlined, transparent process designed to take your project from
            concept to launch without friction.
          </p>
        </div>
        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-icon">🔍</div>
            <h3>Discovery</h3>
            <p>I audit your brand, analyze competitors, and define scope.</p>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-icon">🎨</div>
            <h3>Design</h3>
            <p>High-fidelity UI/UX design matching your exact vision.</p>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-icon">⚙️</div>
            <h3>Development</h3>
            <p>I write clean, scalable code and integrate LLMs safely.</p>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <div className="step-icon">🚀</div>
            <h3>Launch</h3>
            <p>Thorough QA testing, deployment, and ongoing support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
