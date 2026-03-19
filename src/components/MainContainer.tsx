import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";

import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Services from "./Services";
import Process from "./Process";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import AILab from "./AILab";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import ContactModal from "./ContactModal";
import ResumeModal from "./ResumeModal";
import { smoother } from "./Navbar";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };

    const scrollTracker = () => {
      setShowScrollTop(window.scrollY > 800);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("scroll", scrollTracker);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", scrollTracker);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
      <Cursor />
      <Navbar openModal={openModal} />
      <SocialIcons openResumeModal={openResumeModal} />

      {showScrollTop && (
        <button
          onClick={() => smoother?.scrollTo(0, true)}
          style={{
            position: "fixed", bottom: "110px", right: "35px", zIndex: 99,
            background: "rgba(255,255,255,0.05)", backdropFilter: "blur(5px)",
            color: "#fff", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%", width: "50px", height: "50px",
            cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, {
              backgroundColor: "rgba(255,255,255,0.15)",
              transform: "translateY(-5px)",
              borderColor: "#667eea",
            })
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, {
              backgroundColor: "rgba(255,255,255,0.05)",
              transform: "translateY(0)",
              borderColor: "rgba(255,255,255,0.1)",
            })
          }
          title="Back to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}

      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Services openModal={openModal} />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Work />
            <Career />
            <Process />
            <Pricing openModal={openModal} />
            <AILab />
            <Testimonials />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
