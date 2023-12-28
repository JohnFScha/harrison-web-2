const modal = document.getElementById("videoModal");
const modalCtn = document.querySelector(".modal-content");
const launchModal = document.getElementById("launchModal");
const closeModal = document.getElementById("closeModal");
const videos = document.getElementById("modalVideo");
const video = videos[0];

launchModal.onclick = function () {
  if (modal.className.includes("hidden")) {
    modal.classList.remove("hidden");
    modal.classList.add("shown");
    videos.play();
  }
};

closeModal.onclick = function () {
  modal.classList.remove("shown");
  modal.classList.add("hidden");
  videos.pause();
};

window.onclick = function (event) {
  if (event.target === modalCtn && event.target !== closeModal) {
    modal.classList.remove("shown");
    modal.classList.add("hidden");
    videos.pause();
  }
};
console.log(videos);
