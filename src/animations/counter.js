// src/animations/counter.js

import gsap from "gsap";
import { revealLandingPage } from "./revealLanding";

export function animateCounter() {
  const counterElement = document.querySelector(".counter p");
  let currentValue = 0;
  const updateInterval = 300;
  const maxDuration = 2000;
  const endValue = 100;
  const startTime = Date.now();

  const updateCounter = () => {
    const elapsedTime = Date.now() - startTime;
    if (elapsedTime < maxDuration) {
      currentValue = Math.min(
        currentValue + Math.floor(Math.random() * 30) + 5,
        endValue
      );
      counterElement.textContent = currentValue;
      setTimeout(updateCounter, updateInterval);
    } else {
      counterElement.textContent = endValue;
      setTimeout(() => {
        gsap.to(counterElement, {
          y: -20,
          duration: 1,
          ease: "power3.inOut",
          onStart: () => revealLandingPage(),
        });
      }, -500);
    }
  };

  updateCounter();
}