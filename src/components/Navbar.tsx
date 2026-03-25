import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MdArrowRight, MdMenu, MdClose } from "react-icons/md";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

interface NavbarProps {
  openModal: () => void;
}

const Navbar = ({ openModal }: NavbarProps) => {
  const baseUrl = import.meta.env.BASE_URL;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
        // Close mobile menu on link click
        setIsMobileMenuOpen(false);
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  const navLinks = [
    { href: "#about", text: "ABOUT" },
    { href: "#whatido", text: "WHAT I DO" },
    { href: "#services", text: "SERVICES" },
    { href: "#work", text: "WORK" },
    { href: "#process", text: "PROCESS" },
    { href: "#pricing", text: "PRICING" },
    { href: "#ai-lab", text: "AI LAB" },
    { href: "#reviews", text: "REVIEWS" },
    { href: "#contact", text: "CONTACT" },
  ];

  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="/#" className="navbar-title" data-cursor="disable">
            <img src={`${baseUrl}images/M-logo.jpg`} alt="Mitul Logo" style={{height:32, width:32, borderRadius:'50%'}} />
          </a>
        </div>

        <ul className="nav-desktop">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a data-href={link.href} href={link.href}>
                <HoverLinks text={link.text} />
              </a>
            </li>
          ))}
        </ul>

        <div className="header-right">
          <button className="btn-lets-talk desktop-only" onClick={openModal} data-cursor="pointer">
            Let's Talk <MdArrowRight style={{marginLeft:'4px', fontSize:'14px'}} />
          </button>
          
          {/* Hamburger Menu Button */}
          <button 
            className="hamburger-btn mobile-only"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-cursor="disable"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.text}
                </a>
              </li>
            ))}
            <li>
              <button className="btn-lets-talk mobile-lets-talk" onClick={() => { openModal(); setIsMobileMenuOpen(false); }}>
                Let's Talk <MdArrowRight style={{marginLeft:'4px', fontSize:'14px'}} />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
