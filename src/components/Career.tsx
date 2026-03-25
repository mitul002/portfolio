import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" style={{ marginBottom: '120px' }}>
      <div className="career-container">
        <h2>
          My career <span>&</span> experience
        </h2>

        {/* Stats Box */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginTop: '40px', marginBottom: '60px', paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', width: '100%' }}>
          <div>
            <h4 style={{ color: 'var(--accentColor)', fontSize: 'clamp(32px, 8vw, 64px)', fontWeight: 700, margin: '0 0 5px 0', fontFamily: 'Geist, sans-serif', lineHeight: 1 }}>5+</h4>
            <p style={{ margin: 0, fontSize: 'clamp(11px, 3.5vw, 16px)', color: '#a1a1aa', letterSpacing: '1px' }}>Years Experience</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--accentColor)', fontSize: 'clamp(32px, 8vw, 64px)', fontWeight: 700, margin: '0 0 5px 0', fontFamily: 'Geist, sans-serif', lineHeight: 1 }}>50+</h4>
            <p style={{ margin: 0, fontSize: 'clamp(11px, 3.5vw, 16px)', color: '#a1a1aa', letterSpacing: '1px' }}>Projects Completed</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--accentColor)', fontSize: 'clamp(32px, 8vw, 64px)', fontWeight: 700, margin: '0 0 5px 0', fontFamily: 'Geist, sans-serif', lineHeight: 1 }}>5+</h4>
            <p style={{ margin: 0, fontSize: 'clamp(11px, 3.5vw, 16px)', color: '#a1a1aa', letterSpacing: '1px' }}>Microstock Platforms</p>
          </div>
        </div>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Designer</h4>
                <h5>Mojaru</h5>
              </div>
              <h3>May 2024 - Oct 2024</h3>
            </div>
            <p>
              Designed engaging educational content for Class 5–7 students on an EdTech platform, enhancing comprehension and learning outcomes. Collaborated with the content team to create interactive, visually appealing learning materials using content strategy, visual storytelling, and design principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer (Microstock Contributor)</h4>
                <h5>Shutterstock, iStock, Adobe Stock, Freepik</h5>
              </div>
              <h3>Jan 2020 - Present</h3>
            </div>
            <p>
              5 years of experience creating branding designs (logo, flyer, brochure, t-shirt, etc.) and contributing commercial design assets to Shutterstock, iStock, Adobe Stock, Freepik. Skilled in Adobe Photoshop & Illustrator with a focus on modern, high-quality visual design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer</h4>
                <h5>Freelancer.com</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>
            <p>
              Provided freelance services in branding design, for various clients worldwide. Delivered creative designs and maintained client satisfaction through effective communication and timely delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;