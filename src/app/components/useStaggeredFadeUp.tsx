import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useStaggeredFadeUp<T extends HTMLElement>(ref: React.RefObject<T>) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Split text content into words wrapped in span
    const words = element.textContent?.split(" ") || [];
    element.innerHTML = words
      .map(
        (word) =>
          `<span style="display:inline-block; opacity:0; transform: translateY(40px); margin-right: 4px">${word}</span>`
      )
      .join(" ");

    // Select all word spans
    const wordSpans = element.querySelectorAll("span");

    // GSAP timeline with stagger and scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    });

    tl.to(wordSpans, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
    });

    return () => {
      // Cleanup animation & ScrollTrigger instance correctly
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [ref]);
}
