// TypeScript declarations for GSAP modules
declare module 'gsap' {
  export interface GSAP {
    registerPlugin(...plugins: any[]): void;
  }
}

declare module 'gsap/ScrollTrigger';
declare module 'gsap/ScrollSmoother';
declare module 'gsap/SplitText';
