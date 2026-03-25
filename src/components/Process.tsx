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
            <p>High Quality Branding design (Logo, Banner, etc) based on your brand identity and UI/UX design to make your website attractive and user friendly.</p>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-icon">⚙️</div>
            <h3>Development</h3>
            <p>I write clean, scalable code so that your website can run smoothly & efficiently. I also integrate AI and automation tools to enhance functionality if needed.</p>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <div className="step-icon">🚀</div>
            <h3>Launch</h3>
            <p>After testing & QA, I deploy your website. I also provide ongoing support and maintenance if needed. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
