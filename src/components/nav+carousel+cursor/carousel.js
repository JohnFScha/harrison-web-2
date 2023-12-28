import gsap from "../../../node_modules/gsap/index.js";

const body = document.getElementById("body");
const collapse = document.getElementById("collapse");
const menu = document.getElementById("menu");
const navItems = document.getElementsByClassName("nav-item");
const separators = document.getElementsByClassName("separator");

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const tl = gsap.timeline({ paused: true });

tl.from(menu, {
  xPercent: "100",
  duration: 2,
  background: "transparent",
  display: "none",
  ease: "power2.inOut",
});

tl.fromTo(
  navItems,
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
  }
);

tl.to(separators, {
  x: 0,
  transformOrigin: "100% 50%",
  duration: 0.5,
});

collapse.addEventListener("click", () => {
  if (body.className.match("close")) {
    body.className = "open";
  } else if (body.className.includes("open")) {
    body.className = "close";
  }

  circles.forEach(function (circle) {
    if (body.className.includes("close")) {
      setTimeout(() => {
        circle.style.background =
          "radial-gradient(circle, rgba(203,219,67,1) 0%, rgba(203,219,67,0) 100%)";
      }, 1500);
    } else if (body.className.includes("open")) {
      setTimeout(() => {
        circle.style.background = "radial-gradient(circle, rgba(29, 62, 78, 1) 0%, rgba(29, 62, 78, 1) 100%)";
      }, 1500);
    }
  });

  if (tl.paused()) {
    tl.play();
  } else if (tl.totalProgress() === 1) {
    tl.reverse();
  } else {
    tl.paused(true);
  }
});

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
  //circle.style.backgroundColor = colors[index % colors.length];
  if (body.className.includes("close")) {
    circle.style.background =
      "radial-gradient(circle, rgba(203,219,67,1) 0%, rgba(203,219,67,0) 100%)";
  } else if (body.className.includes("open")) {
    circle.style.background =
      "radial-gradient(circle, rgba(29, 62, 78, 1) 0%, rgba(29, 62, 78, 1) 100%)";
  }
  //circle.style.background = "radial-gradient(circle, rgba(203,219,67,1) 0%, rgba(203,219,67,0) 100%)";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  let lastX = 0;
  let lastY = 0;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 8 + "px";
    circle.style.top = y - 8 + "px";

    if (lastX !== x || lastY !== y) {
      circle.style.opacity =
        index > 0 ? (circles.length - index) / circles.length : 0;
      circle.style.filter = "blur(6px)";
      circle.style.animate = "opacity(0) 2s ease-in-out";

      // Update last position
      lastX = x;
      lastY = y;
    } else {
      // If no change, gradually reduce opacity
      circle.style.opacity *= 0.02; // You can adjust the rate of fading
    }

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.5;
    y += (nextCircle.y - y) * 0.5;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
