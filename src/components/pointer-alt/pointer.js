document.addEventListener("mousemove", (e) => {
  let bubbles = document.createElement("bubbles");
  let x = e.pageX;
  let y = e.pageY;

  bubbles.style.left = x + "px";
  bubbles.style.top = y + "px";
  bubbles.style.width = 50 + "px";
  bubbles.style.height = 50 + "px";

  document.body.appendChild(bubbles);

  setTimeout(function () {
    bubbles.remove();
  }, 200);
});
