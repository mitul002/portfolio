import { useRef } from "react";
import "./styles/WhatIDo.css";
const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    container.classList.remove("what-noTouch");
    container.classList.toggle("what-content-active");
    container.classList.remove("what-sibling");
    if (container.parentElement) {
      const siblings = Array.from(container.parentElement.children);
      siblings.forEach((sibling) => {
        if (sibling !== container && sibling.classList.contains("what-content")) {
          sibling.classList.remove("what-content-active");
          sibling.classList.add("what-sibling");
        }
      });
    }
  };

  return (
    <div className="whatIDO-wrapper">
      <section id="whatido" className="whatIDO">
        <div className="what-box">
          <h2 className="title what-title">
            <span className="what-desktop-only">
              <span className="what-line">WHAT</span>
              <span className="what-line">I <span className="accent-text">DO</span></span>
            </span>
            <span className="what-mobile-only">WHAT I <span className="accent-text">DO</span></span>
          </h2>
        </div>
        <div className="what-box">
          <div className="what-box-in">
            <div className="what-border2">
              <svg width="100%">
                <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
                <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              </svg>
            </div>
            <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)} onClick={handleCardClick}>
              <div className="what-border1">
                <svg height="100%">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>GRAPHIC DESIGN</h3>
                <h4>Visual Identity & Creative Design</h4>
                <p>Crafting compelling visual narratives through thoughtful design. With expertise in Adobe Creative Suite, I transform concepts into stunning visuals that capture brand essence and engage audiences.</p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">Adobe Photoshop</div>
                  <div className="what-tags">Adobe Illustrator</div>
                  <div className="what-tags">Canva</div>
                  <div className="what-tags">Brand Identity</div>
                  <div className="what-tags">Logo Design</div>
                  <div className="what-tags">Print Design</div>
                  <div className="what-tags">Color Theory</div>
                  <div className="what-tags">Visual Storytelling</div>
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
            <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)} onClick={handleCardClick}>
              <div className="what-border1">
                <svg height="100%">
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>WEB DEVELOPMENT</h3>
                <h4>Full-Stack Development & UI/UX</h4>
                <p>Building modern, responsive websites with clean, maintainable code. Proficient in HTML, CSS, JavaScript, PHP, and Python, delivering seamless user experiences with database management and API integration.</p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">HTML</div>
                  <div className="what-tags">CSS</div>
                  <div className="what-tags">JavaScript</div>
                  <div className="what-tags">PHP</div>
                  <div className="what-tags">Python</div>
                  <div className="what-tags">MySQL</div>
                  <div className="what-tags">Firebase</div>
                  <div className="what-tags">REST API</div>
                  <div className="what-tags">Git</div>
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIDo;

