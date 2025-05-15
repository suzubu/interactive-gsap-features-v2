import gsap from "gsap"; // Import GSAP animation library for creating animations
import CustomEase from "gsap/CustomEase"; // Import CustomEase plugin for defining custom easing curves
import { splitTextIntoSpans } from "./utils/splitTextIntoSpans"; // Utility to split text content into individual span elements for finer animation control
import { animateCounter } from "./animations/counter"; // Import the counter animation function

gsap.registerPlugin(CustomEase); // Register the CustomEase plugin with GSAP

// Define a custom easing curve named "hop" for use in animations
CustomEase.create(
  "hop",
  "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484,0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701,0.983 0.72,0.987 1,1 "
);

// Wait for the DOM content to be fully loaded before running animations
document.addEventListener("DOMContentLoaded", () => {
  // Split the text inside the header h1 element into spans for individual letter animation
  splitTextIntoSpans(".header h1");

  // Animate the vertical position of the paragraph inside the counter element to slide it into view
  gsap.to(".counter p", {
    y: 0, // Move to original y position (slide up)
    duration: 1, // Animation lasts 1 second
    ease: "power3.out", // Use an ease out curve for smooth deceleration
    delay: 1, // Start this animation after a 1-second delay
    onComplete: () => {
      // Once the slide-in animation completes, start the counter animation
      animateCounter();
    },
  });
});
