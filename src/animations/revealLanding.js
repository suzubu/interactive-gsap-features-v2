import gsap from "gsap";

export function revealLandingPage() {
  // Animate the '.hero' element's clipPath to reveal the full section over 2 seconds
  // 'clipPath' changes from a bottom clipped polygon to fully visible rectangle
  // 'ease: "hop"' creates a bouncy effect during the reveal
  gsap.to(".hero", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    duration: 2,
    ease: "hop",
    onStart: () => {
      // Scale and center the '.hero' element smoothly with a slight delay
      // Transform moves element to center (-50%, -50%) and scales to original size (1)
      // Duration is 2.25 seconds with 'power3.inOut' easing for smooth acceleration and deceleration
      gsap.to(".hero", {
        transform: "translate(-50%, -50%) scale(1)",
        duration: 2.25,
        ease: "power3.inOut",
        delay: 0.25,
      });

      // Animate the '.overlay' clipPath to collapse it to nothing, effectively hiding it
      // This happens with a slight delay and uses the same 'hop' easing for consistency
      gsap.to(".overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 2,
        delay: 0.5,
        ease: "hop",
      });

      // Scale the image inside '.hero-img' to its original size, creating a zoom-in effect
      // Uses the same timing and easing as the '.hero' transform for a coordinated animation
      gsap.to(".hero-img img", {
        transform: "scale(1)",
        duration: 2.25,
        ease: "power3.inOut",
        delay: 0.25,
      });

      // Animate each span inside the header h1 to move vertically into place (y: 0)
      // Staggered by 0.1 seconds for a cascading text reveal effect
      // Uses 'power4.inOut' easing for a smooth and polished entrance
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
