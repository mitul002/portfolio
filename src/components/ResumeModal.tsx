import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./styles/ContactModal.css";

// Configure the PDF.js worker using standard Vite syntax
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate generic modal inner width for PDF scaling
  const viewerWidth = Math.min(window.innerWidth * 0.95, 900) - 20;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 100000, padding: '20px' }}>
      <div 
        className="modal-content resume-modal" 
        onClick={(e) => e.stopPropagation()} 
        style={{ height: '90vh', width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', padding: '0', position: 'relative', overflow: 'hidden', backgroundColor: '#09090b', borderRadius: '16px', border: '1px solid #27272a' }}
      >
        <button 
          onClick={onClose} 
          style={{ 
            position: 'absolute', top: '16px', left: '16px', zIndex: 10, 
            backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(5px)', 
            color: '#71717a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', 
            width: '40px', height: '40px', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', cursor: 'pointer', fontSize: '24px', transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.color = '#71717a';
          }}
        >
          &times;
        </button>

        <style dangerouslySetInnerHTML={{__html: `
          .resume-viewer::-webkit-scrollbar { width: 4px; }
          .resume-viewer::-webkit-scrollbar-track { background: transparent; }
          .resume-viewer::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
          .resume-viewer::-webkit-scrollbar-thumb:hover { background: #52525b; }
        `}} />

        <div className="resume-viewer" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
          <Document 
            file={`${import.meta.env.BASE_URL}Resume/resume_data.bin`}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div style={{padding: '40px', color: '#a1a1aa', fontWeight: 500}}>Loading Digital Preview...</div>}
            error={<div style={{padding: '40px', color: '#ef4444', fontWeight: 500}}>Failed to load preview. Please download directly.</div>}
          >
            {Array.from(new Array(numPages || 0), (_, index) => (
              <div key={`page_${index + 1}`} style={{ marginBottom: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', borderRadius: '8px', overflow: 'hidden' }}>
                <Page 
                  pageNumber={index + 1} 
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={viewerWidth}
                  className="pdf-page"
                />
              </div>
            ))}
          </Document>
        </div>

        {/* Premium Floating Download Icon */}
        <a 
          href={`${import.meta.env.BASE_URL}Resume/resume.pdf`}
          download="Md_Hasin_Almas_Mitul_Resume.pdf" 
          style={{ 
            position: 'absolute', bottom: '30px', right: '30px', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            color: '#fff', padding: '16px', borderRadius: '50%', 
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, { transform: 'translateY(-5px) scale(1.05)', boxShadow: '0 15px 35px rgba(102, 126, 234, 0.6)' })}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, { transform: 'translateY(0) scale(1)', boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)' })}
          title="Download PDF"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ResumeModal;
