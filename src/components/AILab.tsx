import { useState } from "react";
import "./styles/WhatIDo.css";

const AILab = () => {
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [paletteInput, setPaletteInput] = useState("");
  const [paletteColors, setPaletteColors] = useState<string[]>([]);

  const handleGenerateBrief = async () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setAiResponse(
        `## Project Strategy for "${aiPrompt}"\n\n**Target Audience:** Modern, tech-savvy users seeking innovative solutions\n\n**Key Features:**\n- Clean, intuitive UI with ${
          aiPrompt.includes("dark") ? "dark" : "light"
        } theme\n- Responsive design for all devices\n- Fast loading with optimized performance\n\n**Recommended Tech Stack:**\n- Frontend: React + TypeScript\n- Backend: Node.js/Python\n- Database: PostgreSQL/MongoDB\n\n**Timeline Estimate:** 4-6 weeks`
      );
      setIsGenerating(false);
    }, 1500);
  };

  const handleGeneratePalette = () => {
    if (!paletteInput.trim()) return;
    const colors = [
      `hsl(${Math.random() * 360}, 70%, 50%)`,
      `hsl(${Math.random() * 360}, 70%, 50%)`,
      `hsl(${Math.random() * 360}, 70%, 50%)`,
      `hsl(${Math.random() * 360}, 70%, 50%)`,
      `hsl(${Math.random() * 360}, 70%, 50%)`,
    ];
    setPaletteColors(colors);
  };

  return (
    <section id="ai-lab" className="ai-lab-section">
      <div className="section-container">
        <div className="ai-lab-header">
          <div className="ai-badge">
            <span>✨</span> AI Labs
          </div>
          <h2 className="section-title">Experience our AI Capabilities</h2>
          <p className="section-subtitle">
            Test drive our custom AI-powered micro-tools designed to accelerate
            the creative process.
          </p>
        </div>
        <div className="ai-tools-grid">
          <div className="ai-tool-card">
            <div className="ai-tool-header">
              <h3>Project Strategist</h3>
              <span>🧠</span>
            </div>
            <textarea
              className="ai-input"
              rows={3}
              placeholder="e.g., A vegan coffee shop that feels cyberpunk..."
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
            />
            <button
              className="ai-btn"
              onClick={handleGenerateBrief}
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Generate Brief ✨"}
            </button>
            {aiResponse && (
              <div className="ai-output">
                <pre>{aiResponse}</pre>
              </div>
            )}
          </div>
          <div className="ai-tool-card">
            <div className="ai-tool-header">
              <h3>Vibe-to-Palette</h3>
              <span>🎨</span>
            </div>
            <input
              type="text"
              className="ai-input-single"
              placeholder="e.g., Rainy neon Tokyo night"
              value={paletteInput}
              onChange={(e) => setPaletteInput(e.target.value)}
            />
            <button className="ai-btn" onClick={handleGeneratePalette}>
              Mix Colors ✨
            </button>
            {paletteColors.length > 0 && (
              <div className="palette-output">
                {paletteColors.map((color, index) => (
                  <div
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILab;
