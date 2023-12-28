import Lenis from "../../../node_modules/@studio-freight/lenis/dist/lenis.mjs";
import gsap from "../../../node_modules/gsap/index.js";
import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger.js";

const observedSection = document.getElementById('image-section-2')

/* gsap config */
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// First video section with 87 frames
let urls1 = new Array(102)
  .fill()
  .map(
    (_, i) =>
      `../../assets/middle-frames/ezgif-frame-${(i + 1)
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

let ctn = document.querySelectorAll(".child");

ctn.forEach((element, index) => {
  element.addEventListener("mouseover", (event) => hover(event, index));
  element.addEventListener("mouseout", (event) => out(event, index));
});

function hover(event, index) {
  // Calculate the original width dynamically
  let originalWidth = getComputedStyle(event.currentTarget).width;

  gsap.to(event.currentTarget, 0.7, {
    width: "2000px",
  });

  // Use forEach to iterate over siblings
  event.currentTarget.parentNode.childNodes.forEach((sibling) => {
    if (sibling !== event.currentTarget && sibling.nodeType === 1) {
      gsap.to(sibling, 0.7, {
        width: "1000px",
      });
    }
  });

  // Check if the hovered element is the second or third
  if (index === 1 || index === 2) {
    gsap.to(ctn[0], 0.7, {
      marginLeft: "-100px",
    });
  }

  if (index === 1) {
    gsap.to(ctn[1], 0.7, {
      width: "3000px",
    });

    gsap.to(ctn[0], 0.7, {
      marginLeft: "-200px",
    });
  }
}

function out(event, index) {
  // Retrieve the dynamically calculated original width
  let originalWidth = getComputedStyle(event.currentTarget).width;

  gsap.to(event.currentTarget, 0.7, {
    width: originalWidth,
  });

  // Use forEach to iterate over siblings
  event.currentTarget.parentNode.childNodes.forEach((sibling) => {
    if (sibling !== event.currentTarget && sibling.nodeType === 1) {
      gsap.to(sibling, 0.7, {
        width: originalWidth,
      });
    }
  });

  // Check if the hovered element is the second or third
  if (index === 1 || index === 2) {
    gsap.to(ctn[0], 0.7, {
      marginLeft: "0",
    });
  }

  if (index === 1) {
    gsap.to(ctn[1], 0.7, {
      width: originalWidth,
    });
  }
}
const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      imageSequence({
        urls: urls1,
        canvas: "#image-sequence",
        scrollTrigger: {
          start: "top top",
          end: "center center",
          scrub: true,
        },
      });
    }
  })
})
observer.observe(observedSection)


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "center center",
    end: "bottom bottom",
    scrub: true,
    toggleActions: "play complete reverse restart",
  },
});

tl.fromTo(
  ".text",
  {
    y: 500,
  },
  {
    y: 0,
    stagger: 1,
    duration: 5,
  }
);

tl.to(".letter", {
  color: "#D1D821",
  stagger: 1,
  duration: 2,
});

tl.to("#text-container", {
  x: -2000,
  duration: 2,
});

tl.fromTo(
  ".white",
  {
    x: 2000,
  },
  {
    x: 0,
    duration: 2,
  }
);

tl.fromTo(
  ".accordion",
  {
    x: 2000,
  },
  {
    x: 0,
    duration: 10
  }
);

tl.to(".accordion", {
  rotateX: -90,
  transformOrigin: "center",
  perspective: 0,
  duration: 10
});


