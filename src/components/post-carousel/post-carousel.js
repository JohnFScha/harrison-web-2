import Lenis from "../../../node_modules/@studio-freight/lenis/dist/lenis.mjs";
import gsap from "../../../node_modules/gsap/index.js";
import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger.js";

const svgFlip = document.getElementById("init");
const textFlip = document.getElementById("textAllCtn");
const socialEndCtn = document.getElementById("subTextContainer");
const svgArr = gsap.utils.toArray("svgSocial");
/* gsap config */
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

setTimeout(() => {
  svgFlip.style.visibility = "hidden";
  textFlip.style.visibility = "visible";
  textFlip.style.animation = "text-flip-animate 0.5s";
}, 5000);

const outroAnim = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "center center",
    end: "bottom+=100% center+=100%",
    markers: true,
    scrub: true,
    toggleActions: "play complete reverse restart",
  },
  stagger: 2,
});

outroAnim.fromTo('#init', {
  y: -1000
}, {
  y: 0, duration: 10
})

outroAnim.staggerTo(
  [".charSpan"],
  1,
  {
    color: "#D1D821",
    stagger: 1,
    duration: 2,
  },
  2
);

outroAnim.staggerTo(
  [textFlip],
  3,
  {
    scale: 0.6,
    y: -200,
  },
  1
);

outroAnim.to(socialEndCtn, {
  visibility: "visible",
});
outroAnim.fromTo(
  ".svgSocial",
  { scale: 0, duration: 5 },
  { scale: 1, duration: 5 }
);

outroAnim.staggerTo(
  [".charSpan2"],
  3,
  {
    color: "#D1D821",
    opacity: 1,
    duration: 2,
  },
  0.5
);
// svgArr.forEach((svg) => {
//   outroAnim.fromTo(svg, { scale: 0 }, { scale: 1 });
// });
