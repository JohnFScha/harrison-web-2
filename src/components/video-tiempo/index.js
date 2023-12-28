import Lenis from "../../../node_modules/@studio-freight/lenis/dist/lenis.mjs";
import gsap from "../../../node_modules/gsap/index.js";
import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger.js";

/* gsap config */
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let urls2 = new Array(130)
  .fill()
  .map(
    (_, i) =>
      `../../assets/tiempo-frames/ezgif-frame-${(i + 1)
        .toString()
        .padStart(3, "0")}.jpg`
  );

function imageSequence(config) {
  let playhead = { frame: 0 },
    canvas =
      gsap.utils.toArray(config.canvas)[0] ||
      console.warn("canvas not defined"),
    ctx = canvas.getContext("2d"),
    curFrame = -1,
    onUpdate = config.onUpdate,
    images,
    updateImage = function () {
      let frame = Math.round(playhead.frame);
      if (frame !== curFrame) {
        config.clear && ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[Math.round(playhead.frame)], 0, 0);
        curFrame = frame;
        onUpdate && onUpdate.call(this, frame, images[frame]);
      }
    };
  images = config.urls.map((url, i) => {
    let img = new Image();
    img.src = url;
    i || (img.onload = updateImage);
    return img;
  });
  return gsap.to(playhead, {
    frame: images.length - 1,
    ease: "none",
    onUpdate: updateImage,
    duration: images.length / (config.fps || 30),
    paused: !!config.paused,
    onComplete: () => {
      canvas.style.visibility = "hidden";
    },
    onReverseComplete: () => {
      canvas.style.visibility = "visible";
    },
    scrollTrigger: config.scrollTrigger,
  });
}

imageSequence({
  urls: urls2,
  canvas: "#image-sequence-3",
  scrollTrigger: {
    scrub: true,
    markers: true,
    id: "video-tiempo",
  },
});

const textTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#body",
    start: "center bottom",
    end: "center top",
    scrub: true,
  },
});

textTl.fromTo(
  ".text",
  {
    y: 1000,
  },
  {
    y: 0,
    stagger: 0.5,
  }
);


textTl.to('.letter', {
  color: 'rgb(203, 219, 67)',
  stagger: 0.5
})