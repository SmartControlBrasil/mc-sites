 

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AnimationProvider() {
  const followerRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // -----------------------------
    // TILT ANIMATION
    // -----------------------------
    const tiltElements = document.getElementsByClassName("tilt");

    if (tiltElements.length > 0) {
      VanillaTilt.init(Array.from(tiltElements) as HTMLElement[], {
        reverse: true,
        max: 15,
        speed: 400,
        scale: 1.01,
        glare: true,
        reset: true,
        perspective: 800,
        transition: true,
        "max-glare": 0.45,
        "glare-prerender": false,
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
      });
    }

    // -----------------------------
    // CUSTOM CURSOR
    // -----------------------------
    const handleMouseMove = (e: MouseEvent) => {
      if (!outlineRef.current || !dotRef.current) return;

      gsap.to(outlineRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });

      gsap.to(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // -----------------------------
    // CURSOR HOVER EFFECT
    // -----------------------------
    const hoverElements = Array.from(
      document.querySelectorAll("a, button")
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        followerRef.current?.classList.add("hide-cursor");
      });

      el.addEventListener("mouseleave", () => {
        followerRef.current?.classList.remove("hide-cursor");
      });
    });

    // -----------------------------
    // HEADINGS HOVER
    // -----------------------------
    const headingElements = Array.from(
      document.querySelectorAll(
        "h1, h2, h3, h4, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six"
      )
    );

    headingElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        followerRef.current?.classList.add("highlight-cursor-head");
      });

      el.addEventListener("mouseleave", () => {
        followerRef.current?.classList.remove("highlight-cursor-head");
      });
    });

    // -----------------------------
    // PARAGRAPH HOVER
    // -----------------------------
    const paragraphElements = Array.from(
      document.getElementsByTagName("p")
    );

    paragraphElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        followerRef.current?.classList.add("highlight-cursor-para");
      });

      el.addEventListener("mouseleave", () => {
        followerRef.current?.classList.remove("highlight-cursor-para");
      });
    });

    // -----------------------------
    // VISIBLE FROM RIGHT
    // -----------------------------
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const split = new SplitText(entry.target as HTMLElement, {
              type: "chars,words",
            });

            gsap.from(split.chars, {
              duration: 0.4,
              x: 45,
              autoAlpha: 0,
              stagger: 0.05,
            });

            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const rightElements = document.getElementsByClassName(
      "visible-from-right"
    );

    Array.from(rightElements).forEach((el) => {
      observer.observe(el);
    });

    // -----------------------------
    // VISIBLE SLOWLY RIGHT
    // -----------------------------
    gsap.utils
      .toArray<HTMLElement>(".visible-slowly-right")
      .forEach((item) => {
        const split = new SplitText(item, {
          type: "chars,words",
          lineThreshold: 0.5,
        });

        gsap.from(split.chars, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none play none",
          },
          duration: 0.8,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03,
        });
      });

    // -----------------------------
    // VISIBLE FROM BOTTOM
    // -----------------------------
    gsap.utils
      .toArray<HTMLElement>(".visible-from-bottom")
      .forEach((item) => {
        const split = new SplitText(item, {
          type: "words,lines",
        });

        gsap.set(item, {
          perspective: 400,
        });

        gsap.from(split.lines, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 60%",
          },
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -75,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
      });

    // -----------------------------
    // VISIBLE SLOWLY BOTTOM
    // -----------------------------
    gsap.utils
      .toArray<HTMLElement>(".visible-slowly-bottom")
      .forEach((item) => {
        const split = new SplitText(item, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });

        gsap.from(split.chars, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "restart pause resume reverse",
          },
          duration: 0.8,
          ease: "circ.out",
          y: 70,
          stagger: 0.02,
        });
      });

    // -----------------------------
    // BUTTON TILT
    // -----------------------------
    const btnVivacity =
      document.getElementsByClassName("btn-vivacity");

    if (btnVivacity.length > 0) {
      VanillaTilt.init(Array.from(btnVivacity) as HTMLElement[], {
        max: 14,
        speed: 2800,
        perspective: 500,
      });
    }

    // -----------------------------
    // BOX STYLE
    // -----------------------------
    const boxStyles =
      document.getElementsByClassName("box-style");

    Array.from(boxStyles).forEach((element) => {
      element.addEventListener("mousemove", (event: Event) => {
        const mouseEvent = event as MouseEvent;
        const target = event.currentTarget as HTMLElement;
        target.setAttribute(
          "style",
          `--x:${mouseEvent.offsetX}px; --y:${mouseEvent.offsetY}px`
        );
      });
    });

    // -----------------------------
    // IMAGE REVEAL
    // -----------------------------
    const revealAnimation = (
      selector: string,
      axis: "x" | "y",
      percent: number,
      scale: number
    ) => {
      gsap.utils
        .toArray<HTMLElement>(selector)
        .forEach((item) => {
          const image = item.querySelector("img");

          if (!image) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              toggleActions: "play none none reverse",
            },
          });

          tl.set(item, { autoAlpha: 1 })
            .from(item, {
              duration: 1.5,
              [`${axis}Percent`]: -percent,
              ease: "power2.out",
            })
            .from(
              image,
              {
                duration: 1.5,
                [`${axis}Percent`]: percent,
                scale,
                ease: "power2.out",
              },
              "-=1.5"
            );
        });
    };

    revealAnimation(".reveal-left", "x", 100, 1.3);
    revealAnimation(".reveal-bottom", "y", 10, 1.3);

    // -----------------------------
    // CLEANUP
    // -----------------------------
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div ref={followerRef} className="mouse-follower">
      <span
        ref={outlineRef}
        className="cursor-outline"
      ></span>

      <span
        ref={dotRef}
        className="cursor-dot"
      ></span>
    </div>
  );
}