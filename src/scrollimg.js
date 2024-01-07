import Lenis from "./../node_modules/@studio-freight/lenis/dist/lenis.mjs";
import gsap from "./../node_modules/gsap/index.js";
import { ScrollTrigger } from "./../node_modules/gsap/ScrollTrigger.js";


const videoCamara = document.getElementById("video-camara");
const images = document.querySelectorAll("#video-camara img");
const imageTimeline = gsap.timeline();


export default function revealImages(videoCamara, imageTimeline) {
    // Loop through each image
    images.forEach((img, index) => {
        ScrollTrigger.create({
          trigger: img,
          start: "top 80%", // Adjust the trigger point as needed
          end: "top 20%", // Adjust the end point as needed
          markers: true, // Optional: Show trigger markers for debugging
          toggleActions: "play none none reverse", // Play animation when entering trigger, reverse when leaving
          onToggle: ({ isActive }) => {
            if (isActive) {
              // Calculate the indices of the previous and next images
              const prevIndex = index - 1;
              const nextIndex = index + 1;
    
              // Set opacity for the previous image
              if (images[prevIndex]) {
                imageTimeline.set(images[prevIndex], { opacity: 0 });
              }
    
              // Set opacity for the next image
              if (images[nextIndex]) {
                imageTimeline.set(images[nextIndex], { opacity: 0 });
              }
            }
          },
        });
      });
    }