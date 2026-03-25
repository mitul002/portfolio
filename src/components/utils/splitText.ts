import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import SplitType from "split-type";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitType;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");
  
  // New scroll targets
  const photos = document.querySelectorAll(".about-photo");
  const whatCards = document.querySelectorAll(".what-content");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
    }

    // Custom split logically preserves <b> tags unlike SplitType
    if (!para.dataset.split) {
      para.innerHTML = para.innerHTML.replace(/(<[^>]+>)|([^\s<>\n]+)/g, (_match, tag, word) => {
        if (tag) return tag;
        // The space outside the span is maintained by the regex's natural gap handling
        return `<span style="display:inline-block; opacity:0;" class="word">${word}</span>`;
      });
      para.dataset.split = "true";
    }

    const words = para.querySelectorAll(".word");

    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }
    title.split = new SplitType(title, { types: "chars,lines" });
    title.split.lines?.forEach((line: HTMLElement) => line.classList.add("split-line"));

    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title,
          toggleActions: ToggleAction,
          start: window.innerWidth <= 1024 ? "top 80%" : "top 85%", // Triggers when the top of the element hits 80%-85% down the screen, much earlier
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  // Animate About Photo
  photos.forEach((photo) => {
    gsap.fromTo(
      photo,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: photo,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // Animate What I Do Cards
  whatCards.forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          toggleActions: ToggleAction,
          start: "top 85%", // Trigger slightly earlier for cards so they don't pop too late
        },
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
