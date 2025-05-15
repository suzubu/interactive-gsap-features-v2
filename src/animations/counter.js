import gsap from "gsap";
import { revealLandingPage } from "./revealLanding";

// Function to animate a numerical counter on the page
export function animateCounter() {
  // Select the paragraph element inside the counter container where the number will be displayed
  const counterElement = document.querySelector(".counter p");

  // Initialize the current counter value to zero
  let currentValue = 0;

  // Time interval (in milliseconds) between each counter update
  const updateInterval = 300;

  // Maximum duration (in milliseconds) for the counter animation before stopping
  const maxDuration = 2000;

  // The final value the counter should reach
  const endValue = 100;

  // Record the starting time to calculate elapsed time during updates
  const startTime = Date.now();

  // Function to update the counter value periodically
  const updateCounter = () => {
    // Calculate how much time has passed since the animation started
    const elapsedTime = Date.now() - startTime;

    // Continue updating the counter if the elapsed time is less than the max duration
    if (elapsedTime < maxDuration) {
      // Increase the current value by a random amount between 5 and 34, but do not exceed the end value
      currentValue = Math.min(
        currentValue + Math.floor(Math.random() * 30) + 5,
        endValue
      );

      // Update the displayed text content with the new current value
      counterElement.textContent = currentValue;

      // Schedule the next update after the specified interval
      setTimeout(updateCounter, updateInterval);
    } else {
      // Once max duration is reached, set the counter to the final value explicitly
      counterElement.textContent = endValue;

      // After a short delay (negative delay here likely intended as immediate or slight timing adjustment),
      // animate the counter element upwards and trigger the revealLandingPage animation
      setTimeout(() => {
        gsap.to(counterElement, {
          y: -20,               // Move the element 20 pixels up
          duration: 1,          // Animate over 1 second
          ease: "power3.inOut", // Use a smooth easing for natural movement
          onStart: () => revealLandingPage(), // Start revealing the landing page as the counter moves up
        });
      }, -500);
    }
  };

  // Start the counter animation loop
  updateCounter();
}