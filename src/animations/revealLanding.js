// src/animations/revealLanding.js

import gsap from "gsap";

export function revealLandingPage() {
  gsap.to(".hero", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    duration: 2,
    ease: "hop",
    onStart: () => {
      gsap.to(".hero", {
        transform: "translate(-50%, -50%) scale(1)",
        duration: 2.25,
        ease: "power3.inOut",
        delay: 0.25,
      });

      gsap.to(".overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 2,
        delay: 0.5,
        ease: "hop",
      });

      gsap.to(".hero-img img", {
        transform: "scale(1)",
        duration: 2.25,
        ease: "power3.inOut",
        delay: 0.25,
      });

      gsap.to(".header h1 span", {
        y: 0,
        stagger: 0.1,
        duration: 2,
        ease: "power4.inOut",
        delay: 0.75,
      });
    },
  });
}
