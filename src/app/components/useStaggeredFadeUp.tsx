import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function wrapWords(node: ChildNode): string {
  if (node.nodeType === Node.TEXT_NODE) {
    // Split text nodes by words and wrap each word in span with styles
    return (node.textContent || "")
      .split(/\s+/)
      .map(word => {
        if (!word) return "";
        return `<span style="display:inline-block;opacity:0;transform:translateY(40px);margin-right:4px">${word}</span>`;
      })
      .join(" ");
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    // Recursively process element children preserving tags
    const el = node as HTMLElement;
    const children = Array.from(el.childNodes).map(wrapWords).join(" ");
    return `<${el.tagName.toLowerCase()}${Array.from(el.attributes).map(attr => ` ${attr.name}="${attr.value}"`).join("")}>${children}</${el.tagName.toLowerCase()}>`;
  }
  return "";
}

export function useStaggeredFadeUp<T extends HTMLElement>(ref: React.RefObject<T>) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const originalHTML = element.innerHTML;

    // Wrap words preserving nested tags and styles
    const wrappedHTML = Array.from(element.childNodes).map(wrapWords).join(" ");
    element.innerHTML = wrappedHTML;

    const wordSpans = element.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    });

    tl.to(wordSpans, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: { each: 0.12 },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      element.innerHTML = originalHTML; // Restore original HTML on cleanup
    };
  }, [ref]);
}
