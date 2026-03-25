import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1 style={{ whiteSpace: 'nowrap', marginBottom: '15px' }}>
              Md. Hasin Almas
              <br />
              <span style={{ color: '#5eead4', fontWeight: 'bold' }}>MITUL</span>
            </h1>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '50px', marginBottom: '20px', backdropFilter: 'blur(5px)' }}>
              <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }}></span>
              <span style={{ color: '#10b981', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>AVAILABLE FOR FREELANCE</span>
            </div>
          </div>
          <div className="landing-info">
            <h3>A</h3>
            <h2 className="landing-info-h2">
              <div className="skill-prefix-item">Graphic</div>
              <div className="skill-prefix-item" style={{ position: 'absolute', top: 0, opacity: 0 }}>Web</div>
              <div className="skill-prefix-item" style={{ position: 'absolute', top: 0, opacity: 0 }}>UI/UX</div>
              <div className="skill-prefix-item" style={{ position: 'absolute', top: 0, opacity: 0 }}>Video</div>
              <div className="skill-prefix-item" style={{ position: 'absolute', top: 0, opacity: 0 }}>Automation</div>
              <div className="skill-prefix-item" style={{ position: 'absolute', top: 0, opacity: 0 }}>Sound</div>
            </h2>
            <h2>
              <div className="skill-suffix-item">Designer</div>
              <div className="skill-suffix-item" style={{ position: 'absolute', top: 0, opacity: 0 }}>Developer</div>
              <div className="skill-suffix-item" style={{ position: 'absolute', top: 0, opacity: 0 }}>Designer</div>
              <div className="skill-suffix-item" style={{ position: 'absolute', top: 0, opacity: 0 }}>Editor</div>
              <div className="skill-suffix-item" style={{ position: 'absolute', top: 0, opacity: 0 }}>Engineer</div>
              <div className="skill-suffix-item" style={{ position: 'absolute', top: 0, opacity: 0 }}>Designer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
