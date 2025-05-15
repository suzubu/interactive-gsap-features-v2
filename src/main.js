// src/main.js

import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { splitTextIntoSpans } from "./utils/splitTextIntoSpans";
import { animateCounter } from "./animations/counter";

gsap.registerPlugin(CustomEase);
CustomEase.create(
  "hop",
  "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1 "
);

document.addEventListener("DOMContentLoaded", () => {
  splitTextIntoSpans(".header h1");

  gsap.to(".counter p", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1,
    onComplete: () => {
      animateCounter();
    },
  });
});
