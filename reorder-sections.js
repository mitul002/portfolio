import { readFileSync, writeFileSync } from 'fs';

const filePath = 'src/components/WhatIDo.tsx';
let content = readFileSync(filePath, 'utf-8');

// Remove the Get Started section from its current position (before Services)
const getStartedSectionRegex = /(\s+<section id="get_started" className="cta-section" ref=\{ctaRef\}>[\s\S]*?<\/section>\n)/;
const getStartedMatch = content.match(getStartedSectionRegex);

if (getStartedMatch) {
  const getStartedSection = getStartedMatch[1];
  
  // Remove from current position
  content = content.replace(getStartedSectionRegex, '');
  
  // Find the AI Lab section end and insert Get Started after it
  const aiLabStart = content.lastIndexOf('<section id="ai-lab"');
  const aiLabEnd = content.indexOf('</section>', aiLabStart);
  
  if (aiLabEnd !== -1) {
    // Find closing div after AI Lab section
    const afterAiLab = content.slice(aiLabEnd + 10);
    const closingDivMatch = afterAiLab.match(/(\s+<\/div>\s+<\/section>)/);
    
    if (closingDivMatch) {
      const insertPosition = aiLabEnd + 10 + closingDivMatch.index + closingDivMatch[0].length;
      
      const newGetStarted = `
      <section id="get_started" className="cta-section" ref={ctaRef}>
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Get Started</h2>
            <p className="section-subtitle">Ready to transform your vision into reality? Let's create something amazing together.</p>
            <button className="cta-button" onClick={openModal}>Start Project<span className="button-icon">↗</span></button>
          </div>
        </div>
      </section>
`;
      
      content = content.slice(0, insertPosition) + newGetStarted + content.slice(insertPosition);
    }
  }
}

writeFileSync(filePath, content);
console.log('WhatIDo.tsx updated - Get Started section moved to optimal position!');
