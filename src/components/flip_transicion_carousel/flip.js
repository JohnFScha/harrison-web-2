import gsap from "../../../node_modules/gsap/index.js";
import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger.js";
import Lenis from "../../../node_modules/@studio-freight/lenis/dist/lenis.mjs";

const carouselCtn = document.getElementById("carousel-container");
const carousel = document.getElementById("carouselFig");

if (carouselCtn.style.transform === "scale(1)") {
  carousel.style.animation = "rotateAnim 30s infinite forwards";
}

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let textTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#text-container",
    start: "top top",
    end: "bottom+=200%",
    scrub: true,
    pin: true,
  },
});
textTl.staggerTo(["#p1", "#p2"], 1.1, { x: 0 }, 0.2);
textTl.staggerTo(["#p1"], 1.5, { x: -2000 }, 0);
textTl.to("#p2", { y: 48 }, "-=1");
textTl
  .to("#carousel-container", { transform: "scale(0.75)" }, "-=1")
  .timeScale(1.5);
