import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { MdArrowRight } from "react-icons/md";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

interface NavbarProps {
  openModal: () => void;
}

const Navbar = ({ openModal }: NavbarProps) => {
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
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="/#" className="navbar-title" data-cursor="disable">
            <img src="/images/M-logo.jpg" alt="Mitul Logo" style={{height:32, width:32, borderRadius:'50%'}} />
          </a>
        </div>
        
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#whatido" href="#whatido">
              <HoverLinks text="WHAT I DO" />
            </a>
          </li>
          <li>
            <a data-href="#services" href="#services">
              <HoverLinks text="SERVICES" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#process" href="#process">
              <HoverLinks text="PROCESS" />
            </a>
          </li>
          <li>
            <a data-href="#pricing" href="#pricing">
              <HoverLinks text="PRICING" />
            </a>
          </li>
          <li>
            <a data-href="#ai-lab" href="#ai-lab">
              <HoverLinks text="AI LAB" />
            </a>
          </li>
          <li>
            <a data-href="#reviews" href="#reviews">
              <HoverLinks text="REVIEWS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

        <div className="header-right">
          <button className="btn-lets-talk" onClick={openModal} data-cursor="pointer">
            Let's Talk <MdArrowRight style={{marginLeft:'4px', fontSize:'14px'}} />
          </button>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
