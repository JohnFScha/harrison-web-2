export default function loadImages(container, pin, urls) {
  const scrollPosition = window.scrollY;

  // Calculate the index of the image to show based on the scroll position within the pinned section
  const indexToShow = Math.floor(scrollPosition / pin.clientHeight);

  // Only load the images within a certain range of the current index
  const startIndex = Math.max(0, indexToShow - 1);
  const endIndex = Math.min(urls.length - 1, indexToShow + 1);

  container.innerHTML = '';

  for (let i = startIndex; i <= endIndex; i++) {
    const img = new Image();
    img.src = urls[i];
    img.className = 'camara';
    container.appendChild(img);
  }
}
