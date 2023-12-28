/* Imports */
import gsap from "../../../../node_modules/gsap/index.js";
import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

// Function to animate the image section
function animateImageSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  tl.to(".image-container", { opacity: 1, transform: "translateY(0)" });
}

// Function to animate the text section
function animateTextSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  tl.to(".text-container", { opacity: 1, transform: "translateY(0)" });
}

// Function to animate the zoom section
function animateZoomSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  tl.to(".zoom-container", { opacity: 1, transform: "translateY(0)" });
}

// Call the functions to set up animations
animateImageSection();
animateTextSection();
animateZoomSection();