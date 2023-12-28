const circles = document.querySelectorAll(".interactive");
const coords = { x: 0, y: 0 };

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
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
      circle.style.opacity = index > 0 ? (circles.length - index) / circles.length : 0;
      circle.style.animate = "opacity(0) 2s ease-in-out";
      circle.style.transform = ``;

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
