import { gsap } from "gsap";
import SplitType from "split-type";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (smoother && smoother.paused) smoother.paused(false);
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) mainEl.classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // Only create SplitType for selectors that have elements
  const exitingSelectors = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"].filter(
    (sel) => document.querySelector(sel)
  );
  
  let landingText: any = null;
  if (exitingSelectors.length > 0) {
    landingText = new SplitType(exitingSelectors.join(", "), {
      types: "chars,lines",
      lineClass: "split-line",
    });
    
    if (landingText?.chars && landingText.chars.length > 0) {
      gsap.fromTo(
        landingText.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
    }
  }

  let TextProps: any = { types: "chars,lines", lineClass: "split-h2" };

  const prefixItems = document.querySelectorAll(".skill-prefix-item");
  const suffixItems = document.querySelectorAll(".skill-suffix-item");

  const prefixTexts = Array.from(prefixItems).map((el) => new SplitType(el as HTMLElement, TextProps));
  const suffixTexts = Array.from(suffixItems).map((el) => new SplitType(el as HTMLElement, TextProps));

  // Make the parent containers fully visible now that SplitType has parsed them.
  gsap.set(".skill-prefix-item", { opacity: 1 });
  gsap.set(".skill-suffix-item", { opacity: 1 });

  // Explicitly hide all but the first item's characters so they don't stack visually
  prefixTexts.forEach((st, i) => {
    if (i > 0 && st.chars) gsap.set(st.chars, { opacity: 0, y: 80 });
  });
  suffixTexts.forEach((st, i) => {
    if (i > 0 && st.chars) gsap.set(st.chars, { opacity: 0, y: 80 });
  });

  if (prefixTexts.length > 0 && suffixTexts.length > 0) {
    const sChars = suffixTexts[0].chars;
    const pChars = prefixTexts[0].chars;
    if (sChars) {
      gsap.fromTo(
        sChars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
    }

    if (pChars) {
      gsap.fromTo(
        pChars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
    }
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  LoopSequence(prefixTexts, suffixTexts);
}

function LoopSequence(prefixArray: any[], suffixArray: any[]) {
  if (prefixArray.length === 0 || suffixArray.length === 0) return;
  
  var tl = gsap.timeline({ repeat: -1 });
  const delay = 4;

  const maxLength = Math.max(prefixArray.length, suffixArray.length);

  for (let i = 0; i < maxLength; i++) {
    const currentPrefix = prefixArray[i];
    const currentSuffix = suffixArray[i];
    const nextPrefix = prefixArray[(i + 1) % prefixArray.length];
    const nextSuffix = suffixArray[(i + 1) % suffixArray.length];

    // Only animate if chars exist and are not empty
    if (currentPrefix?.chars && currentPrefix.chars.length > 0) {
      tl.to(
        currentPrefix.chars,
        {
          y: -80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
        },
        `+=${delay}`
      );
    } else {
      tl.add(`+=${delay}`);
    }
    
    if (currentSuffix?.chars && currentSuffix.chars.length > 0) {
      tl.to(
        currentSuffix.chars,
        {
          y: -80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
        },
        "<"
      );
    }
    
    if (nextPrefix?.chars && nextPrefix.chars.length > 0) {
      tl.fromTo(
        nextPrefix.chars,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
        },
        "<"
      );
    }
    
    if (nextSuffix?.chars && nextSuffix.chars.length > 0) {
      tl.fromTo(
        nextSuffix.chars,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
        },
        "<"
      );
    }
  }
}
