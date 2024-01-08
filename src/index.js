// Function to check if the screen width is 900px or less
function isMobile() {
  return window.innerWidth <= 900;
}

let countdownStarted = false;
let countdownInterval;

function startCountdown() {
  // Check if the countdown has already started
  if (!countdownStarted) {
    countdownStarted = true;

    // Clear any existing interval before starting a new one
    clearInterval(countdownInterval);

    let minutes = 1;
    let seconds = 30;
    let milliseconds = 1000;

    countdownInterval = setInterval(function () {
      milliseconds -= 100;

      if (milliseconds <= 0) {
        milliseconds = 1000;
        seconds--;

        if (seconds <= 0) {
          minutes--;

          if (minutes === 0 && seconds === 0) {
            minutes = 1;
            seconds = 30;
            milliseconds = 1000;
            startCountdown();
          } else {
            seconds = 59;
          }
        }
      }

      // Format the time as 00:00:00:00
      const formattedTime = `00:${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}:${String(Math.floor(milliseconds / 100)).padStart(
        2,
        "0"
      )}`;

      // Render the formatted time
      renderCountdown(formattedTime);
    }, 100);
  }
}

function renderCountdown(time) {
  // Assuming countdown is the ID of your container
  const countdownContainer = document.getElementById("countdown-timer");
  if (countdownContainer) {
    countdownContainer.innerText = time;
  }
}

/* gsap config */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* Lenis config */

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.onload = () => {
  const init = document.getElementById("init");
  init.style.animation = "fadeOutAnimation 1s";
  setTimeout(() => {
    init.style.display = "none";
  }, 1000);
};

if (isMobile()) {
  const timeout = setTimeout(() => {
    window.location.href = "/error"; // Adjust the path as needed
  }, 20000); // 10 seconds in milliseconds  
  // Clear the timeout if the content loads before the timeout triggers
  window.addEventListener("load", () => {
    clearTimeout(timeout);
  });
} else {
  const timeout = setTimeout(() => {
    window.location.href = "/error"; // Adjust the path as needed
  }, 10000); // 10 seconds in milliseconds  
  // Clear the timeout if the content loads before the timeout triggers
  window.addEventListener("load", () => {
    clearTimeout(timeout);
  });
}


/* ********* Timeline ********* */

const mainTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "main.wrapper",
    start: "top top",
    end: "bottom+=3000% bottom",
    scrub: true,
    pin: true,
    inertia: true,
  },
});

/* ************* DOM elements ************ */
const html = document.querySelector("html");
const body = document.getElementById("body");
const collapse = document.getElementById("collapse");
const menu = document.getElementById("menu");
const navItems = document.getElementsByClassName("nav-item");
const separators = document.getElementsByClassName("separator");
const icon = document.getElementById("buttonIcon");
const social = document.querySelectorAll(".social-img");
const wrapperCtn = document.querySelector(".wrapper");
const expandBtns = document.querySelectorAll(".expand");
const expandBtnImgs = document.querySelectorAll(".btn-img");
const textCtn2 = document.getElementById("txt-container-2");
const desliza = document.getElementById("desliza");
const subir = document.querySelector("#subir #subirbtn");

/* ********* CURSOR *********** */

body.addEventListener("mousemove", (e) => {
  if (isMobile()) {
    return;
  }

  let bubbles = document.createElement("bubbles");
  let x = e.pageX;
  let y = e.pageY;

  bubbles.style.left = x + "px";
  bubbles.style.top = y + "px";
  bubbles.style.width = 25 + "px";
  bubbles.style.height = 25 + "px";

  if (document.body.className.match("open")) {
    bubbles.style.background = "rgb(29, 62, 78)";
    bubbles.style.boxShadow =
      "10px 10px 30px rgb(29, 62, 78), -10px -10px 30px rgb(29, 62, 78)";
  } else {
    bubbles.style.background = "#D1D821";
    bubbles.style.boxShadow =
      "10px 10px 30px #D1D821, -10px -10px 30px #D1D821";
  }

  document.body.appendChild(bubbles);

  setTimeout(function () {
    bubbles.remove();
  }, 500);
});

/* ********* end CURSOR *********** */

/****** menu ***** */

const menuTl = gsap.timeline({ paused: true });

if (isMobile()) {
  menuTl.fromTo(
    menu,
    {
      y: 1000,
      opacity: 0,
      background: "transparent",
      display: "none",
      ease: "power2.inOut",
    },
    {
      y: 0,
      duration: 0.5,
      opacity: 1,
      background: "rgb(203, 219, 67)",
      display: "block",
      ease: "power2.inOut",
    }
  );

  menuTl.fromTo(
    separators,
    {
      y: 1000,
    },
    {
      y: 0,
      transformOrigin: "100% 50%",
      duration: 0.5,
    }
  );
} else {
  menuTl.fromTo(
    menu,
    {
      x: 1000,
      opacity: 0,
      background: "transparent",
      display: "none",
      ease: "power2.inOut",
    },
    {
      x: 0,
      duration: 0.5,
      opacity: 1,
      background: "rgb(203, 219, 67)",
      display: "block",
      ease: "power2.inOut",
    }
  );

  menuTl.fromTo(
    separators,
    {
      x: 1000,
    },
    {
      x: 0,
      transformOrigin: "100% 50%",
      duration: 0.5,
    }
  );
}

menuTl.fromTo(
  navItems,
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
  }
);

let isRotated = false;

collapse.addEventListener("click", () => {
  // Check if the timeline is reversing
  const isReversing = menuTl.isActive() && menuTl.reversed();

  // Disable the button if the timeline is reversing
  if (isReversing) {
    return;
  }

  isRotated = !isRotated;
  icon.src = isRotated ? "src/assets/x-dark.webp" : "src/assets/Menu.webp";
  collapse.style.transform = isRotated ? "rotate(90deg)" : "rotate(0deg)";

  if (body.className.match("close")) {
    body.className = "open";
    social[0].src = "src/assets/mail-dark.webp";
    social[1].src = "src/assets/whatsapp-dark.webp";
    social[2].src = "src/assets/ig-dark.webp";
    social[3].src = "src/assets/Linkedin-dark.webp";
  } else if (body.className.includes("open")) {
    body.className = "close";
    social[0].src = "src/assets/mail.webp";
    social[1].src = "src/assets/wsp.webp";
    social[2].src = "src/assets/ig.webp";
    social[3].src = "src/assets/Linkedin.webp";
  }
  if (menuTl.totalProgress() === 0) {
    menuTl.play();
  } else if (menuTl.totalProgress() > 0) {
    menuTl.reverse();
  }
});

let links = gsap.utils.toArray(".nav-link");

links.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();

    if (a.innerText.toLowerCase() === `inicio`) {
      gsap.to(window, {
        scrollTo: mainTimeline.scrollTrigger.labelToScroll("intro"),
        duration: 0,
      });
    } else if (a.innerText.toLowerCase() === `portfolio`) {
      gsap.to(window, {
        scrollTo: mainTimeline.scrollTrigger.labelToScroll("portfolio"),
        duration: 3,
      });
    } else if (a.innerText.toLowerCase() === `servicios`) {
      gsap.to(window, {
        scrollTo: mainTimeline.scrollTrigger.labelToScroll("servicios"),
        duration: 3,
      });
    } else if (a.innerText.toLowerCase() === `clientes`) {
      gsap.to(window, {
        scrollTo: mainTimeline.scrollTrigger.labelToScroll("clientes"),
        duration: 3,
      });
    }

    isRotated = !isRotated;
    icon.src = isRotated ? "src/assets/x-dark.webp" : "src/assets/Menu.webp";
    collapse.style.transform = isRotated ? "rotate(90deg)" : "rotate(0deg)";
    if (body.className.match("close")) {
      body.className = "open";
      social[0].src = "src/assets/mail-dark.webp";
      social[1].src = "src/assets/whatsapp-dark.webp";
      social[2].src = "src/assets/ig-dark.webp";
      social[3].src = "src/assets/Linkedin-dark.webp";
    } else if (body.className.includes("open")) {
      body.className = "close";
      social[0].src = "src/assets/mail.webp";
      social[1].src = "src/assets/wsp.webp";
      social[2].src = "src/assets/ig.webp";
      social[3].src = "src/assets/Linkedin.webp";
    }

    if (menuTl.paused() || menuTl.totalProgress() === 0) {
      menuTl.play();
    } else if (menuTl) {
      menuTl.reverse();
    }
  });
});

/* ****************** Intro dom ****************** */

const logoCtn = document.getElementById("init");
const scrollCtn = document.getElementById("scrollea");
const videoCamara = document.getElementById("video-camara");
const middleVideo = document.getElementById("middleVidCtn");
const tiempoVideo = document.getElementById("tiempoVidCtn");
const progressBar = document.getElementById("progressbar-ctn");
const nav = document.querySelector("nav");
const intro = document.getElementById('intro')

/* ****************** end intro dom ****************** */

/* ****************** Portfolio dom ****************** */

let txtCtn = document.querySelectorAll(".text-ctn-1");
let titleOuterCtn = document.querySelectorAll("section.portfolio fieldset");
let titleCtn = document.querySelectorAll("section.portfolio li h2");
let hoveredTitleCtn = document.querySelectorAll(
  "section.portfolio li h2:hover"
);
let descCtn = document.querySelectorAll(".desc-ctn");
let ctnHr = document.querySelectorAll("hr.ctn-line");
let previewVideos = document.querySelectorAll(".preview-video");
let logoPortfolio = document.querySelector(".logo-box");
let videoOverlay = document.querySelector(".vid-overlay");
let videoTiempo = document.querySelector("#tiempoVidCtn");
let videoTiempoSection = document.querySelector("section#video-tiempo");
let txtContainers = document.querySelectorAll(".child .text-ctn");
let txtInnerCtn = document.querySelectorAll(".child .text-ctn ol");

// modals
const liElements = [];
liElements.push(document.querySelector("#eugenie h2"));
liElements.push(document.querySelector("#delsud h2"));
liElements.push(document.querySelector("#flexy h2"));

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const videoEl = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");
const middleVidSection = document.getElementById("middleVidCtn");
const portfolioSection = document.getElementById("portfolio");
const bgVideo = document.getElementById("bg-video");

const videos = [
  "src/assets/casos/eugenie-comp.webm",
  "src/assets/casos/delsud-comp.webm",
  "src/assets/casos/flexy-comp.webm",
];
let currentVideo = null;

if (isMobile()) {
  middleVidSection.src = "src/assets/calidad-vertical.webm";
  desliza.innerHTML = ``;
} else {
  desliza.innerHTML = `<path class="st0"
  d="M89.8,306c1.8-0.8,3.2-1.9,4.2-3.4c1-1.5,1.5-3.3,1.5-5.4c0-2.1-0.5-3.9-1.5-5.4c-1-1.5-2.4-2.7-4.2-3.5 c-1.8-0.8-4-1.2-6.5-1.2H71.2v28h6.5v-7.8h5.6c0.1,0,0.2,0,0.3,0L89,315h7L89.8,306C89.7,306,89.7,306,89.8,306z M87.4,293.6 c1,0.9,1.5,2.1,1.5,3.6c0,1.5-0.5,2.7-1.5,3.6c-1,0.9-2.5,1.3-4.5,1.3h-5.3v-9.8h5.3C84.9,292.3,86.4,292.7,87.4,293.6z" />
<path class="st0"
  d="M34.2,300.8c-1-0.6-2-1.1-3.2-1.4c-1.1-0.3-2.3-0.7-3.5-0.9c-1.1-0.3-2.2-0.5-3.2-0.8c-1-0.3-1.7-0.6-2.3-1 c-0.6-0.5-0.9-1-0.9-1.8c0-0.6,0.2-1.1,0.5-1.6c0.3-0.5,0.9-0.9,1.7-1.2c0.8-0.3,1.8-0.4,3.1-0.4s2.5,0.2,3.8,0.6 c1.3,0.3,2.6,0.9,3.9,1.6l2-4.9c-1.3-0.8-2.8-1.4-4.5-1.8c-1.7-0.4-3.4-0.6-5.2-0.6c-2.6,0-4.8,0.4-6.6,1.2c-1.7,0.8-3,1.8-3.9,3.2 c-0.9,1.3-1.3,2.8-1.3,4.4c0,1.5,0.3,2.7,0.9,3.7c0.6,1,1.4,1.7,2.4,2.3c1,0.6,2,1.1,3.2,1.4c1.2,0.4,2.3,0.7,3.5,1 c1.2,0.2,2.2,0.5,3.2,0.8c1,0.3,1.7,0.6,2.3,1.1c0.6,0.4,0.9,1,0.9,1.8c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.5-1,0.8-1.8,1.1 c-0.8,0.2-1.8,0.4-3.1,0.4c-1.7,0-3.3-0.3-5-0.8c-1.6-0.6-3-1.3-4.2-2.1l-2.2,4.9c1.3,1,2.9,1.7,5,2.4c2.1,0.6,4.2,0.9,6.4,0.9 c2.7,0,4.9-0.4,6.6-1.2c1.8-0.8,3.1-1.9,4-3.2s1.3-2.7,1.3-4.3c0-1.5-0.3-2.7-0.9-3.6C35.9,302.2,35.1,301.4,34.2,300.8z" />
<polygon class="st0" points="229.9,279 223.2,279 217.8,284.7 222.7,284.7 	" />
<path class="st0"
  d="M49.1,294.5c0.8-0.8,1.7-1.4,2.8-1.8c1.1-0.4,2.3-0.6,3.6-0.6c1.4,0,2.7,0.3,3.8,0.8c1.2,0.5,2.2,1.3,3.2,2.4 l4.2-3.8c-1.3-1.6-3-2.9-5-3.7c-1.9-0.9-4.1-1.3-6.6-1.3c-2.2,0-4.2,0.4-6,1.1c-1.8,0.7-3.5,1.7-4.8,3c-1.4,1.3-2.4,2.8-3.2,4.6 c-0.7,1.8-1.1,3.7-1.1,5.8s0.4,4,1.1,5.8c0.8,1.8,1.8,3.3,3.2,4.6s3,2.3,4.8,3c1.9,0.7,3.9,1,6,1c2.5,0,4.7-0.4,6.6-1.3 c2-0.9,3.6-2.1,5-3.7l-4.2-3.8c-1,1.1-2,2-3.2,2.5c-1.2,0.5-2.5,0.8-3.8,0.8c-1.3,0-2.5-0.2-3.6-0.6c-1.1-0.4-2-1-2.8-1.8 c-0.8-0.8-1.4-1.7-1.9-2.8c-0.4-1.1-0.6-2.3-0.6-3.6s0.2-2.5,0.6-3.6C47.7,296.3,48.3,295.3,49.1,294.5z" />
<polygon class="st0" points="189,303.3 202,303.3 202,298.3 189,298.3 189,292.2 203.8,292.2 203.8,287 182.6,287 182.6,315 204.3,315 204.3,309.8 189,309.8 	" />
<path class="st0"
  d="M125.1,290.6c-1.4-1.3-3-2.3-4.8-3c-1.8-0.7-3.9-1.1-6.1-1.1c-2.2,0-4.2,0.4-6.1,1.1c-1.9,0.7-3.5,1.7-4.9,3 c-1.4,1.3-2.5,2.8-3.2,4.6c-0.7,1.8-1.1,3.7-1.1,5.8c0,2.1,0.4,4,1.1,5.8c0.8,1.8,1.8,3.3,3.2,4.6c1.4,1.3,3,2.3,4.9,3 c1.9,0.7,3.9,1.1,6.2,1.1c2.2,0,4.2-0.4,6-1.1c1.9-0.7,3.5-1.7,4.8-3c1.4-1.3,2.5-2.8,3.2-4.6c0.8-1.8,1.2-3.7,1.2-5.8 c0-2.1-0.4-4-1.2-5.8C127.5,293.5,126.4,291.9,125.1,290.6z M122.2,304.6c-0.4,1.1-1,2-1.8,2.8s-1.7,1.4-2.8,1.8 c-1,0.4-2.2,0.6-3.4,0.6c-1.3,0-2.4-0.2-3.5-0.6c-1.1-0.4-2-1-2.8-1.8c-0.8-0.8-1.4-1.7-1.8-2.8c-0.4-1.1-0.6-2.3-0.6-3.6 c0-1.3,0.2-2.5,0.6-3.6c0.5-1.1,1.1-2,1.9-2.8c0.8-0.8,1.7-1.4,2.8-1.8c1.1-0.4,2.2-0.6,3.5-0.6c1.3,0,2.4,0.2,3.5,0.6 c1.1,0.4,2,1,2.8,1.8c0.8,0.8,1.4,1.7,1.8,2.8c0.5,1.1,0.7,2.3,0.7,3.6S122.7,303.5,122.2,304.6z" />
<path class="st0"
  d="M230.4,315h6.8l-12.5-28h-6.4l-12.5,28h6.6l2.5-6h13L230.4,315z M216.9,304.1l4.5-10.7l4.4,10.7H216.9z" />
<polygon class="st0" points="140.8,287 134.3,287 134.3,315 154.8,315 154.8,309.7 140.8,309.7 	" />
<polygon class="st0" points="164.9,287 158.5,287 158.5,315 179,315 179,309.7 164.9,309.7 	" />`;
  middleVidSection.src = "src/assets/calidad.webm";
}

if (isMobile()) {
  videoTiempo.src = "src/assets/Video-tiempo_v.webm";
} else {
  videoTiempo.src = "src/assets/video-tiempo.webm";
}

/* ****************** end Portfolio dom ****************** */

/* ****************** Middle dom ****************** */

middleVideo.addEventListener("ended", () => {
  middleVideo.style.display = "none";
  gsap.to(window, {
    scrollTo: mainTimeline.scrollTrigger.labelToScroll("start-tiempo"),
    duration: 3,
  });
  middleVideo.currentTime = 0;
  middleVideo.load();
});

subir.addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: mainTimeline.scrollTrigger.labelToScroll("intro"),
    duration: 2,
  });
});

let ctn = document.querySelectorAll(".child");
let childTitleCtn = document.querySelectorAll(".child .title-ctn");

if (isMobile()) {
  let isOpen = false;

  expandBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      isOpen = !isOpen; // Toggle the isOpen variable

      if (isOpen) {
        expandBtnImgs[index].src = "src/assets/contract.webp";

        for (let i = 0; i < txtInnerCtn.length; i++) {
          if (index === 0) {
            txtInnerCtn[0].classList.add("reveal");
          } else if (index === 1) {
            txtInnerCtn[1].classList.add("reveal");
            txtInnerCtn[2].classList.add("reveal");
            gsap.to(ctn[2], 0.3, {
              y: 100,
            });
          } else if (index === 2) {
            txtInnerCtn[3].classList.add("reveal");
          }
        }

        gsap.to(childTitleCtn[index], 0.3, {
          y: -160,
        });

        if (index === 1) {
          gsap.to(expandBtns[1], 0.3, {
            y: 350,
          });
        } else {
          gsap.to(expandBtns[index], 0.3, {
            y: 130,
          });
        }
      } else {
        expandBtnImgs[index].src = "src/assets/expand.webp";

        for (let i = 0; i < txtInnerCtn.length; i++) {
          if (index === 0) {
            txtInnerCtn[0].classList.remove("reveal");
          } else if (index === 1) {
            txtInnerCtn[1].classList.remove("reveal");
            txtInnerCtn[2].classList.remove("reveal");
            gsap.to(ctn[2], 0.3, {
              y: 0,
            });
          } else if (index === 2) {
            txtInnerCtn[3].classList.remove("reveal");
          }
        }

        gsap.to(childTitleCtn[index], 0.5, {
          y: 0,
        });

        gsap.to(expandBtns[index], 0.5, {
          y: 0,
        });

        gsap.to(expandBtns[1], 0.3, {
          y: 0,
        });
      }
    });
  });
} else {
  ctn.forEach((element, index) => {
    element.addEventListener("mouseover", (event) => hoverAcc(event, index));
    element.addEventListener("mouseout", (event) => outAcc(event, index));
  });

  function hoverAcc(event, index) {
    // Calculate the original width dynamically
    // let originalWidth = getComputedStyle(event.currentTarget).width;

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

  function outAcc(event, index) {
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
}

/* ****************** End Middle dom ****************** */

/* ******************  dom manipulation ****************** */
if (isMobile()) {
  // bgVideo.src = "";
  textCtn2.innerHTML = `
  <p id="p1">Y DESDE AHÍ NACEN</p>
  <p id="p2">NUESTROS VÍNCULOS</p>
  <div id="mobileBrandsCtn">
  <img src="/src/assets/logo-eugenie.webp" alt="logo de Eugenie" class="mobileBrands">
  <img src="/src/assets/logo-flexy.webp" alt="logo de Flexy" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logos_La_Caja.webp" alt="logo de La Caja" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logo_Desarrollos.webp" alt="logo de Delsud" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logos_PBA.webp" alt="logo de PBA" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logos_NBA.webp" alt="logo de Jr. NBA" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logos_Yacoub.webp" alt="logo de Jr. NBA" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logo_FCE.webp" alt="logo de Jr. NBA" class="mobileBrands">
  <img src="src/assets/marcas/Marcas_Logos_Sancor.webp" alt="logo de Jr. NBA" class="mobileBrands">
</div>
  `;
} else {
  // bgVideo.src = "src/assets/fondo-verde.webm";
  textCtn2.innerHTML = `
  <p id="p1">Y DESDE AHÍ NACEN</p>
  <p id="p2">NUESTROS VÍNCULOS</p>
  <div class="carousel-container" id="carousel-container">
    <div class="carousel">
      <figure id="carouselFig">
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logo_Desarrollos.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_verde.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logo_FCE.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_azul.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logos_La_Caja.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_verde.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logos_NBA.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_azul.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logos_PBA.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_verde.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logos_Sancor.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_azul.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="card-ctn">
          <img src="src/assets/marcas/Marcas_Logos_Yacoub.webp" alt="" />
          <video autoplay muted loop>
            <source src="src/assets/fondo_tarjetas_verde.mp4" type="video/mp4" />
          </video>
        </div>
      </figure>
    </div>
  </div>
  `;
}

if (isMobile()) {
  titleOuterCtn.forEach((element, index) => {
    element.addEventListener("click", (event) => {
      element.disabled = true;
      event.stopPropagation();
      toggleClickCtn(index);
    });
  });

  // Add click event listener to the document
  document.addEventListener("click", (event) => {
    // Convert titleOuterCtn to an array
    const titleOuterArray = Array.from(titleOuterCtn);

    // Check if the clicked element is not inside any fieldset
    if (!titleOuterArray.some((fieldset) => fieldset.contains(event.target))) {
      // Trigger animateOut for each element
      titleOuterArray.forEach((element, index) => {
        element.disabled = true;
        animateOut(index);
        titleCtn[index].style.zIndex = -1;
      });
    }
  });

  function toggleClickCtn(index) {
    titleOuterCtn.forEach((element, i) => {
      if (i !== index) {
        element.disabled = true;
        titleCtn[i].style.zIndex = -1;
        animateOut(i);
      }
    });

    titleCtn[index].style.zIndex = 10;

    gsap.to(ctnHr[index], 0.5, {
      margin: "20 0 10 0",
    });
    gsap.to(descCtn[index], 0.3, {
      y: 0,
      opacity: 1,
    });
    gsap.to(titleCtn[index], 0.3, {
      color: "rgb(203, 219, 67)",
    });
    gsap.to(titleCtn[(0, 2)], 0.7, {
      height: 70,
    });
    gsap.to(titleCtn[1], 0.7, {
      height: 120,
    });
    gsap.to(previewVideos[index], 0.4, {
      opacity: 1,
    });
    gsap.to(videoOverlay, 0.4, {
      opacity: 0.4,
    });
    gsap.to(logoPortfolio, 0.4, {
      opacity: 0,
    });
  }

  function animateOut(index) {
    // Your existing out function code
    gsap.to(ctnHr[index], 0.5, {
      margin: "-12 0",
    });
    gsap.to(descCtn[index], 0.3, {
      y: -100,
      opacity: 0,
    });
    gsap.to(titleCtn[index], 0.3, {
      color: "transparent",
      height: "auto",
    });
    gsap.to(previewVideos[index], 0.4, {
      opacity: 0,
    });
    gsap.to(videoOverlay, 0.4, {
      opacity: 1,
    });
    gsap.to(logoPortfolio, 0.4, {
      opacity: 0.4,
    });
  }
} else {
  titleCtn.forEach((element, index) => {
    element.addEventListener("mouseover", (event) => hover(event, index));
    element.addEventListener("mouseout", (event) => out(event, index));
  });

  function hover(event, index) {
    gsap.to(ctnHr[index], 0.5, {
      margin: "20 0 10 0",
    });
    gsap.to(descCtn[index], 0.3, {
      y: 0,
      opacity: 1,
    });
    gsap.to(titleCtn[index], 0.3, {
      color: "rgb(203, 219, 67)",
      height: 100,
    });
    gsap.to(titleCtn[1], 0.7, {
      height: 190,
    });
    gsap.to(previewVideos[index], 0.4, {
      opacity: 1,
    });
    gsap.to(videoOverlay, 0.4, {
      opacity: 0.4,
    });
    gsap.to(logoPortfolio, 0.4, {
      opacity: 0,
    });
  }

  function out(event, index) {
    gsap.to(ctnHr[index], 0.5, {
      margin: "-12 0",
    });
    gsap.to(descCtn[index], 0.3, {
      y: -100,
      opacity: 0,
    });
    gsap.to(titleCtn[index], 0.3, {
      color: "transparent",
      height: "auto",
    });
    gsap.to(previewVideos[index], 0.4, {
      opacity: 0,
    });
    gsap.to(videoOverlay, 0.4, {
      opacity: 1,
    });
    gsap.to(logoPortfolio, 0.4, {
      opacity: 0.4,
    });
  }
}

liElements.forEach((liElement, index) =>
  liElement.addEventListener("click", () => {
    if (currentVideo && currentVideo.parentNode) {
      currentVideo.parentNode.removeChild(currentVideo);
    }
    // Save the current scroll position
    // const scrollPosition = window.scrollY;

    // Disable body scrolling
    // wrapperCtn.style.overflow = "hidden";
    let newVideo = document.createElement("video");
    newVideo.id = "modalVideo";
    let swapSrc = document.createElement("source");
    swapSrc.src = videos[index];
    newVideo.appendChild(swapSrc);
    modalContent.appendChild(newVideo);
    modal.classList.remove("hidden");
    modal.classList.add("shown");
    // wrapperCtn.style.top = `-${scrollPosition}px`;
    newVideo.play();
    currentVideo = newVideo;
    // mainTimeline.scrub = 0;
    // mainTimeline.scrollTrigger.pause();
    mainTimeline.seek("portfolio");
    body.style.position = "fixed";
    gsap.to(window, {
      scrollTo: mainTimeline.scrollTrigger.labelToScroll("portfolio"),
    });
    // wrapperCtn.style.zIndex = "500 !important";

    // mainTimeline.scrollTrigger.disable(false);
  })
);

closeModal.addEventListener("click", () => {
  if (currentVideo) {
    setTimeout(() => {
      currentVideo.pause();
      currentVideo.parentNode.removeChild(currentVideo);
      currentVideo = null;
      modal.classList.remove("shown");
      modal.classList.add("hidden");
    }, 500);

    // progress.style.zIndex = "0 !important";
  }
  wrapperCtn.style.overflow = "";
  // const scrollPosition = parseInt(document.body.style.top || "0", 10);
  wrapperCtn.style.top = "";
  // window.scrollTo(0, -scrollPosition);

  mainTimeline.seek("portfolio");
  body.style.position = "absolute";
  gsap.to(window, {
    scrollTo: mainTimeline.scrollTrigger.labelToScroll("portfolio"),
  });

  // mainTimeline.scrollTrigger.enable(true);
});

/* ****************** end dom manipulation ****************** */

/* ******** Video frames ******** */

let urls1 = new Array(380)
  .fill()
  .map(
    (_, i) => `src/assets/camara-frames/introframes(${(i + 1).toString()}).webp`
  );

urls1.forEach((url) => {
  let img = new Image();
  img.src = url;
  img.class = "camara";
  videoCamara.appendChild(img);
});

/* *********** END TIMELINE ********** */

/* *********** INTRO SCROLLING ********** */

mainTimeline
  .fromTo(
    "#scrollea",
    {
      display: "none",
    },
    {
      display: "flex",
    }
  )
  .addLabel("intro");

mainTimeline.fromTo(
  "#scrollea",
  {
    opacity: 1,
    duration: 8,
    x: 0,
  },
  {
    opacity: 0,
    duration: 8,
    x: -100,
  }
);

mainTimeline.fromTo(
  "#scrollea",
  {
    display: "flex",
  },
  {
    display: "none",
  }
);

mainTimeline.fromTo(
  "#video",
  {
    display: "none",
  },
  {
    display: "flex",
  }
);

mainTimeline.fromTo(
  "#video-camara",
  {
    opacity: 0,
    duration: 5,
  },
  {
    opacity: 1,
    duration: 5,
  }
);

const cameraFrames = gsap.utils.toArray("#video-camara img");

cameraFrames.forEach((img, index) => {
  mainTimeline.fromTo(
    img,
    {
      display: "none",
    },
    {
      display: "block",
      stagger: 0.3,
      duration: 0.2,
    }
  );
  if (index < cameraFrames.length - 1) {
    mainTimeline.set(img, { display: "none" });
  }
});

/* mainTimeline.to("#video-camara", {
  delay: 10,
}); */

mainTimeline.fromTo(
  "#texto",
  {
    transform: "scale(0)",
    opacity: 0,
    duration: 10,
  },
  {
    transform: "scale(1)",
    opacity: 1,
    duration: 20,
    delay: -30,
  }
);

mainTimeline.to(".fill", {
  color: "#D1D821",
  stagger: 3,
  duration: 10,
  delay: -20,
});

mainTimeline.to("#texto", {
  y: -800,
  duration: 30,
  delay: -1,
});

mainTimeline.to("#intro", {
  opacity: 0,
  duration: 20,
  delay: 20,
});

mainTimeline.fromTo(
  "#intro",
  {
    display: "flex",
    duration: 0,
  },
  {
    display: "none",
    duration: 0,
  }
);

/* *********** END INTRO SCROLLING ********** */

/* *********** PORTFOLIO SCROLLING ********** */

mainTimeline.fromTo(
  "#portfolio",
  {
    display: "none",
    delay: -50,
  },
  {
    display: "block",
    delay: -50,
  }
);

mainTimeline.fromTo(
  "#nav button",
  {
    opacity: 0,
    scale: 0,
    duration: 5,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 5,
    scrollTrigger: "#nav .social-ctn .social-nav",
  }
);

mainTimeline.fromTo(
  "#nav .social-ctn .social-nav",
  {
    opacity: 0,
    scale: 0,
    duration: 5,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 5,
    scrollTrigger: "#nav button",
  }
);

mainTimeline.fromTo(
  ".portfolio",
  {
    opacity: 0,
    zIndex: -1,
    delay: -30,
  },
  {
    opacity: 1,
    delay: -30,
    duration: 10,
    zIndex: 2,
  }
);

mainTimeline.fromTo(
  "#intro",
  {
    zIndex: 1,
    visibility: "visible",
  },
  {
    zIndex: -1,
    visibility: "hidden",
  }
);

// Conditional tweens based on screen width
if (isMobile()) {
  // If the screen width is 900px or less
  mainTimeline.fromTo(
    ".bg-rodaje",
    {
      yPercent: 40,
      duration: 25,
      opacity: 0.8,
      scrollTrigger: ".sup-rodaje",
      ease: "power1.inOut",
    },
    {
      yPercent: 0,
      duration: 25,
      opacity: 0.8,
      scrollTrigger: ".sup-rodaje",
      ease: "power1.inOut",
    }
  );

  mainTimeline.fromTo(
    ".sup-rodaje",
    {
      delay: 3,
      duration: 23,
      yPercent: 50,
      ease: "power1.inOut",
    },
    {
      delay: 3,
      duration: 23,
      yPercent: 0,
      ease: "power1.inOut",
    }
  );
} else {
  // If the screen width is greater than 900px
  mainTimeline.to(".bg-rodaje", {
    yPercent: -66,
    duration: 25,
    opacity: 0.8,
    scrollTrigger: ".sup-rodaje",
    ease: "power1.inOut",
  });

  mainTimeline.to(".sup-rodaje", {
    delay: 3,
    duration: 23,
    yPercent: -66,
    ease: "power1.inOut",
  });
}

mainTimeline.fromTo(
  "#progressbar-ctn",
  {
    opacity: 0,
    y: 200,
  },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    delay: -5,
  }
);

mainTimeline.to(".txt-ctn-1 .txt-row h2", {
  opacity: 1,
  duration: 5,
});

mainTimeline.to(".txt-ctn-1 .dup-ctn span", {
  opacity: 1,
  stagger: 1,
  duration: 3,
  scrollTrigger: ".dup-ctn span",
});

mainTimeline
  .to(".txt-ctn-1 .dup-ctn span", {
    color: "#D1D821",
    stagger: 1,
    duration: 3,
    delay: 5,
  })
  .addLabel("initPortolio");

mainTimeline.to(".sup-rodaje.zoomed", {
  duration: 3,
  opacity: 1,
  delay: 10,
});

mainTimeline.to(".txt-ctn-1", {
  duration: 5,
  opacity: 0,
});

mainTimeline.to("#rect1", {
  attr: { rx: "8.5", y: "34", width: "17", height: "43.4444" },
  fill: "#D9D9D9",
  duration: 1,
});

mainTimeline.to("#rect2", {
  attr: { rx: "12.2778", y: "0", width: "24.5556", height: "86.8889" },
  fill: "#CBDB43",
  duration: 1,
});

if (isMobile()) {
  mainTimeline.to(".sup-rodaje", {
    duration: 10,
    scale: 2.5,
    transformOrigin: "49% bottom",
    scrollTrigger: ".txt-ctn-2 .txt-row h2, .bg-overlay",
  });
} else {
  mainTimeline.to(".sup-rodaje", {
    duration: 10,
    scale: 2.5,
    transformOrigin: "32% bottom",
    scrollTrigger: ".txt-ctn-2 .txt-row h2, .bg-overlay",
  });
}

mainTimeline.to(".bg-overlay", {
  duration: 5,
  opacity: 0.3,
});

mainTimeline.to(".txt-ctn-2 .txt-row h2", {
  opacity: 1,
  duration: 4,
});

mainTimeline.to(".txt-ctn-2 .dup-ctn span", {
  opacity: 1,
  stagger: 1,
  duration: 2,
  scrollTrigger: ".dup-ctn span",
});

mainTimeline.to(".txt-ctn-2 .dup-ctn span", {
  color: "#D1D821",
  stagger: 1,
  duration: 2,
  delay: 4,
});

mainTimeline.to(".txt-ctn-2", {
  opacity: 0,
  duration: 4,
  delay: 4,
});

if (isMobile()) {
  // Additional animations from animateOut()
  mainTimeline.to(
    ".ctn-line",
    {
      margin: "-12 0",
      duration: 0.5,
    },
    "-=0.5"
  );

  mainTimeline.to(
    ".desc-ctn",
    {
      y: -100,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  );

  mainTimeline.to(
    "section.portfolio li h2",
    {
      color: "transparent",
      height: "auto",
      duration: 0.5,
      zIndex: -1,
    },
    "-=0.5"
  );

  mainTimeline.to(
    ".preview-video",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  );

  mainTimeline.to(
    ".vid-overlay",
    {
      opacity: 1,
      duration: 0.5,
    },
    "-=0.5"
  );

  mainTimeline.to(
    ".logo-box",
    {
      opacity: 0.4,
      duration: 0.5,
    },
    "-=0.5"
  );
}

mainTimeline.to(".pf-accordion-outer", {
  opacity: 1,
  duration: 4,
  scrollTrigger: ".bg-overlay",
  zIndex: 20,
});

mainTimeline.to(".bg-overlay", {
  duration: 4,
  opacity: 0.5,
  scrollTrigger: ".pf-accordion-outer ol li h2",
});

mainTimeline.to(".pf-accordion-outer ol li h2", {
  y: 0,
  opacity: 1,
  stagger: 1,
  duration: 3,
  delay: 2,
  // zIndex: -1
});

mainTimeline
  .to(".pf-accordion", {
    delay: 10,
    opacity: 1,
    duration: 2,
  })
  .addLabel("portfolio");

mainTimeline.to(".pf-accordion", {
  delay: 5,
  opacity: 0,
  duration: 6,
  scrollTrigger: ".pf-accordion",
});

mainTimeline.to(".pf-accordion-outer ol li h2", {
  y: 30,
  opacity: 0,
  stagger: 1,
  delay: 4,
  duration: 5,
});

mainTimeline.to(".pf-accordion-outer ol li h2", {
  duration: 0,
  display: "none",
});

if (isMobile()) {
  // Additional animations from animateOut()
  mainTimeline.to(
    ".ctn-line",
    {
      margin: "-12 0",
      duration: 0.5,
    },
    "-=0.5"
  );

  mainTimeline.to(
    ".desc-ctn",
    {
      y: -100,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  );

  mainTimeline.to(
    "section.portfolio li h2",
    {
      color: "transparent",
      height: "auto",
      duration: 0.5,
      zIndex: -1,
    },
    "-=0.5"
  );

  mainTimeline.to(
    ".preview-video",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.5"
  );

  mainTimeline.to(
    ".vid-overlay",
    {
      opacity: 1,
      duration: 0.5,
    },
    "-=0.5"
  );

  mainTimeline.to(
    ".logo-box",
    {
      opacity: 0.4,
      duration: 0.5,
    },
    "-=0.5"
  );
}

if (isMobile()) {
  mainTimeline.fromTo(
    ".sup-rodaje.zoomed, .sup-rodaje",
    {
      transformOrigin: "49% 100%",
      scale: 2.5,
      duration: 5,
      y: 0,
    },
    {
      delay: 4,
      duration: 5,
      scale: 30,
      y: 1300,
      transformOrigin: "50% 100%",
      scrollTrigger: ".box-ctn",
    }
  );
  mainTimeline.to("#portfolio", {
    filter: "blur(100px)",
    duration: 5,
    delay: 5
  });
} else {
  mainTimeline.to(".sup-rodaje", {
    backgroundColor: "transparent",
    duration: 0,
    scrollTrigger: ".box-ctn",
  });
  mainTimeline.to(".sup-rodaje", {
    delay: 4,
    duration: 10,
    width: "450%",
    left: "-290%",
    top: "-200%",
    scrollTrigger: ".box-ctn",
  });
  /* mainTimeline.to(".box-ctn", {
    delay: 4,
    duration: 10,
    transform: "scale(4)",
    opacity: 0,
    xPercent: -100,
    top: "30%",
  });
  mainTimeline.to('#portfolio', {
    filter: 'blur(100px)',
    duration: 1
  }) */
}

if (isMobile()) {
  mainTimeline.fromTo(
    ".vid-overlay",
    {
      opacity: 1,
      duration: 1,
    },
    {
      opacity: 0,
      duration: 1,
    }
  );
  mainTimeline.fromTo(
    ".box-ctn",
    {
      backgroundColor: "transparent",
      duration: 5,
    },
    {
      backgroundColor: "transparent",
      duration: 5,
    }
  );
  mainTimeline.to(".box-ctn", {
    delay: -2,
    duration: 9,
    transform: "scale(4.1)",
    top: "50%",
  });
} else {
  mainTimeline.to(".box-ctn", {
    delay: 4,
    duration: 10,
    transform: "scale(4)",
    opacity: 0,
    xPercent: -100,
    top: "30%",
  });
  mainTimeline.to("#portfolio", {
    filter: "blur(100px)",
    duration: 10,
    delay: -8,
  });
}

mainTimeline.fromTo(
  "#progressbar-ctn",
  {
    opacity: 1,
    y: 0,
  },
  {
    opacity: 0,
    y: 200,
    duration: 5,
    delay: 0,
  }
);

mainTimeline.to(".portfolio", {
  opacity: 0,
  duration: 8,
});

/* *********** END PORTFOLIO SCROLLING ********** */

/* *********** MIDDLE SCROLLING ********** */

mainTimeline.fromTo(
  "#middle",
  {
    opacity: 0,
    zIndex: -1,
  },
  {
    opacity: 1,
    duration: 8,
    delay: -10,
    zIndex: 3,
  }
);

mainTimeline.fromTo(
  "#middleVidCtn",
  {
    display: "none",
    duration: 0,
  },
  {
    display: "block",
    duration: 0,
  }
);

mainTimeline.fromTo(
  "#middleVidCtn",
  {
    opacity: 0,
    duration: 4,
  },
  {
    opacity: 1,
    duration: 4,
    onStart: () => {
      middleVideo.play();
    },
  }
);

mainTimeline.fromTo(
  "#portfolio",
  {
    display: "block",
    delay: 0,
  },
  {
    display: "none",
    delay: 0,
  }
);

mainTimeline.fromTo(
  "#middleVidCtn",
  {
    opacity: 1,
    duration: 10,
    delay: -10,
  },
  {
    opacity: 0,
    duration: 10,
    delay: 20,
    onComplete: () => {
      middleVideo.pause();
    },
  }
);

mainTimeline.fromTo(
  "#middleVidCtn",
  {
    display: "block",
    duration: 0,
  },
  {
    display: "none",
    duration: 0,
  }
);

mainTimeline.fromTo(
  ".bg-video",
  {
    delay: -10,
    opacity: 0,
    duration: 5,
  },
  {
    delay: -10,
    opacity: 0.1,
    duration: 5,
  }
);

mainTimeline.fromTo(
  "#progressbar-ctn",
  {
    opacity: 0,
    delay: 5,
    y: 200,
  },
  {
    opacity: 1,
    y: 0,
    duration: 4,
    delay: 5,
  }
);

mainTimeline.fromTo(
  ".accordion",
  {
    display: "none",
    duration: 0,
  },
  {
    display: "flex",
    duration: 0,
  }
);

mainTimeline
  .fromTo(
    "#middle .text",
    {
      y: 1000,
      duration: 10,
    },
    {
      y: 0,
      stagger: 1,
      duration: 10,
    }
  )
  .addLabel("start-tiempo");

mainTimeline.to("#rect2", {
  attr: { rx: "8.5", y: "34", width: "17", height: "43.4444" },
  fill: "#D9D9D9",
  duration: 1,
});

mainTimeline
  .to("#rect3", {
    attr: { rx: "12.2778", y: "0", width: "24.5556", height: "86.8889" },
    fill: "#CBDB43",
    duration: 1,
  })
  .addLabel("servicios");

mainTimeline.to("#middle #text-container .letter", {
  color: "#D1D821",
  stagger: 1.5,
  duration: 3,
});

if (isMobile()) {
  mainTimeline.fromTo(
    "#middle .text",
    {
      y: 0,
    },
    {
      y: -2000,
      delay: 3,
      duration: 50,
      scrollTrigger: ".acc-borders",
    }
  );
  mainTimeline.fromTo(
    ".acc-borders",
    {
      opacity: 1,
      x: 1000,
      duration: 20,
      width: "0vw",
      delay: -10,
      scrollTrigger: ".accordion #parent",
    },
    {
      opacity: 1,
      x: 0,
      duration: 20,
      width: "400vw",
      delay: -10,
      scrollTrigger: ".accordion #parent",
    }
  );
  mainTimeline
    .fromTo(
      ".accordion #parent",
      {
        y: 2000,
        duration: 20,
        delay: -5,
      },
      {
        y: 0,
        duration: 20,
        delay: -5,
      }
    )
    .addLabel("servicios");
} else {
  mainTimeline.fromTo(
    "#middle #text-container",
    {
      x: 0,
    },
    {
      x: -2000,
      delay: 3,
      duration: 30,
    }
  );
  mainTimeline.to(".acc-borders", {
    opacity: 1,
    x: 0,
    duration: 20,
    width: "400vw",
    delay: -30,
  });

  mainTimeline
    .fromTo(
      ".accordion",
      {
        x: 2000,
        delay: -20,
        duration: 20,
      },
      {
        x: 0,
        delay: -20,
        duration: 20,
      }
    )
    .addLabel("servicios");
}

mainTimeline.to(".accordion", {
  rotateX: -69.3,
  duration: 10,
  delay: 30,
});

mainTimeline.to(".accordion", {
  opacity: 0,
  duration: 2,
  delay: -4,
});

mainTimeline.to(".bg-video", {
  opacity: 0,
  duration: 10,
  delay: -10,
});

/* *********** END MIDDLE SCROLLING ********** */

/* *********** TIEMPO SCROLLING ********** */

mainTimeline.fromTo(
  "#progressbar-ctn",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 16,
    delay: 0,
  }
);

mainTimeline.fromTo(
  "#video-tiempo",
  {
    opacity: 0,
    duration: 0,
  },
  {
    opacity: 1,
    duration: 0,
  }
);

mainTimeline.fromTo(
  ".bg-video",
  {
    rotateX: "0",
    duration: 0,
  },
  {
    rotateX: "-65deg",
    duration: 0,
  }
);

mainTimeline.fromTo(
  ".accordion",
  {
    display: "flex",
    duration: 0,
  },
  {
    display: "none",
    duration: 0,
  }
);

/* mainTimeline.fromTo("svg#TEXT", {
  opacity: 0,
  duration: 0
}, {
  opacity: 1,
  duration: 0
}); */

// mainTimeline.to("#video-tiempo", {
//   scrollTrigger: {
//     trigger: "#video-tiempo",
//     onEnter: () => {
//       startCountdown();
//     },
//     onLeave: () => {
//       stopCountdown();
//     }
//   }
// });

mainTimeline.fromTo(
  "#video-tiempo",
  {
    zIndex: -1,
    rotateX: 115.3,
  },
  {
    zIndex: 4,
    rotateX: 0,
    // translateY: -90,
    duration: 10,
    scrollTrigger: ".accordion",
    onStart: () => {
      startCountdown();
    },
  }
);

mainTimeline.to("#video-tiempo #text-container-2 .text", {
  y: 1500,
  duration: 0,
});

mainTimeline.fromTo(
  "#tiempoVidCtn",
  {
    opacity: 0,
    delay: -10,
  },
  {
    opacity: 1,
    duration: 6,
  }
);

mainTimeline.fromTo(
  "#video-tiempo #text-container-2",
  {
    x: -2000,
    duration: 0,
    delay: -10,
  },
  {
    x: 0,
    duration: 0,
    delay: -10,
  }
);

mainTimeline.fromTo(
  "#video-tiempo #text-container-2 .text",
  {
    y: 1500,
    delay: 15,
  },
  {
    y: 0,
    stagger: 0.5,
    duration: 8,
    delay: 10,
  }
);

mainTimeline.fromTo(
  "#video-tiempo #text-container-2 .letter",
  {
    color: "transparent",
    duration: 4,
    delay: 15,
  },
  {
    color: "rgb(203, 219, 67)",
    stagger: 4,
    duration: 4,
    delay: 15,
  }
);

mainTimeline.fromTo(
  "#video-tiempo",
  {
    rotateX: 0,
    duration: 20,
  },
  {
    rotateX: 110,
    duration: 20,
    scrollTrigger: ".accordion",
  }
);

mainTimeline.fromTo(
  "#video-tiempo",
  {
    opacity: 1,
    duration: 20,
    scrollTrigger: ".accordion",
  },
  {
    opacity: 0,
    // delay: 12,
    duration: 20,
  }
);

mainTimeline.fromTo(
  "#video-tiempo",
  {
    display: "flex",
    duration: 0,
  },
  {
    display: "none",
    duration: 0,
  }
);

mainTimeline.fromTo(
  "#txt-container-2",
  {
    display: "none",
    duration: 0,
  },
  {
    display: "flex",
    duration: 0,
  }
);

mainTimeline.fromTo(
  ".bg-video",
  {
    opacity: 0,
    duration: 0,
  },
  {
    opacity: 0.1,
    duration: 0,
  }
);

mainTimeline.fromTo(
  ".bg-video",
  {
    rotateX: -65,
    duration: 20,
  },
  {
    rotateX: 0,
    duration: 20,
  }
);

/* *********** TIEMPO SCROLLING ********** */

/* **************** SECCION FINAL ***************** */

/* const carouselCtn = document.getElementById("carousel-container");
const carousel = document.getElementById("carouselFig");

if (carouselCtn.style.transform === "scale(1)") {
  carousel.style.animation = "rotateAnim 30s infinite forwards";
} */

mainTimeline.fromTo(
  "#txt-container-2",
  {
    zIndex: -1,
    opacity: 0,
    duration: 10,
    delay: -20,
  },
  {
    zIndex: 5,
    opacity: 1,
    duration: 10,
    delay: -20,
  }
);

if (isMobile()) {
  mainTimeline.fromTo(
    "#p1",
    {
      y: 2000,
      x: 0,
    },
    {
      y: 150,
      x: 0,
      duration: 25,
    }
  );

  mainTimeline.fromTo(
    "#p2",
    {
      y: 2000,
      x: 0,
    },
    {
      y: 150,
      x: 0,
      duration: 30,
      delay: -18,
    }
  );

  mainTimeline.to("#p1", {
    delay: 20,
    duration: 30,
    y: -2000,
  });

  mainTimeline.to("#p2", {
    delay: -30,
    duration: 20,
    y: -50,
    // scrollTrigger: '#mobileBrandsCtn'
  });

  mainTimeline.fromTo(
    "#progressbar-ctn",
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 16,
      delay: -2,
    }
  );

  mainTimeline.to("#rect3", {
    attr: { rx: "8.5", y: "34", width: "17", height: "43.4444" },
    fill: "#D9D9D9",
    duration: 1,
  });

  mainTimeline.to("#rect4", {
    attr: { rx: "12.2778", y: "0", width: "24.5556", height: "86.8889" },
    fill: "#CBDB43",
    duration: 1,
  });

  mainTimeline.fromTo(
    "#mobileBrandsCtn",
    {
      visibility: "hidden",
      y: 200,
      x: 0,
    },
    {
      visibility: "visible",
      y: 0,
      x: 0,
      duration: 5,
      // scrollTrigger: '#p2'
    }
  ).addLabel('clientes');
} else {
  mainTimeline.fromTo(
    "#p1",
    {
      x: 2000,
    },
    {
      x: 0,
      duration: 25,
    }
  );

  mainTimeline.fromTo(
    "#p2",
    {
      x: 2000,
    },
    {
      x: 0,
      duration: 30,
      delay: -18,
    }
  );

  mainTimeline.to("#p1", {
    delay: 20,
    duration: 30,
    x: -2000,
  });

  mainTimeline.fromTo(
    "#progressbar-ctn",
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 16,
      delay: -2,
    }
  );

  mainTimeline.to("#p1", {
    opacity: 0,
    duration: 0,
  });

  mainTimeline.to("#rect3", {
    attr: { rx: "8.5", y: "34", width: "17", height: "43.4444" },
    fill: "#D9D9D9",
    duration: 1,
  });

  mainTimeline.to("#rect4", {
    attr: { rx: "12.2778", y: "0", width: "24.5556", height: "86.8889" },
    fill: "#CBDB43",
    duration: 1,
  });

  mainTimeline.to("#p2", {
    delay: -30,
    duration: 20,
    y: 150,
  });
}

mainTimeline.fromTo(
  ".flipLogoContainer",
  {
    display: "none",
    duration: 0,
  },
  {
    display: "flex",
    duration: 0,
  }
);

if(!isMobile()) {
  mainTimeline.fromTo(
    "#carousel-container",
    {
      display: "none",
      duration: 0,
      delay: -20,
    },
    {
      display: "block",
      duration: 0,
      delay: -20,
    }
  );
  
  mainTimeline
    .fromTo(
      "#carousel-container",
      {
        transform: "scale(0)",
        duration: 10,
        delay: -20,
      },
      {
        transform: "scale(1.3)",
        duration: 10,
        delay: -20,
      }
    )
    .addLabel("clientes");
  
}

mainTimeline.to("#txt-container-2", {
  delay: 30,
  y: 800,
  duration: 30,
  transform: "scale(0.5)",
  opacity: 0,
});

mainTimeline.fromTo(
  "#txt-container-2",
  {
    display: "flex",
    duration: 0,
  },
  {
    display: "none",
    duration: 0,
  }
);

mainTimeline.fromTo(
  "#progressbar-ctn",
  {
    opacity: 1,
    duration: 100,
  },
  {
    opacity: 0,
    duration: 2,
    delay: 20,
  }
);

mainTimeline.to("#progressbar-ctn", {
  display: "none",
});

mainTimeline.fromTo(
  ".bg-video",
  {
    opacity: 0.1,
    duration: 12,
    delay: -15,
  },
  {
    opacity: 0.2,
    duration: 12,
    delay: -15,
  }
);

mainTimeline.fromTo(
  "#svgOutro",
  {
    y: -1000,
    transform: "scale(2.5)",
    duration: 20,
    delay: -20,
    opacity: 0,
  },
  {
    delay: -20,
    y: 0,
    transform: "scale(1.6)",
    duration: 20,
    opacity: 1,
  }
);

mainTimeline.to("#svgOutro", {
  delay: 10,
  duration: 70,
  rotateY: 809,
});

mainTimeline.fromTo(
  "#txt-container-2",
  {
    display: "flex",
    duration: 0,
  },
  {
    display: "none",
    duration: 0,
  }
);

mainTimeline.to("#svgOutro", {
  visibility: "hidden",
});

mainTimeline.fromTo(
  "#textAllCtn",
  {
    visibility: "hidden",
    rotateY: -90,
    duration: 8,
  },
  {
    visibility: "visible",
    rotateY: 0,
    duration: 8,
    delay: 15,
  }
);

mainTimeline.staggerTo(
  [".charSpan"],
  1,
  {
    color: "#D1D821",
    stagger: 1,
    duration: 80,
  },
  2
);

mainTimeline.to(".charSpan", {
  delay: 10,
});

mainTimeline.to("#textAllCtn", {
  scale: 0.6,
  y: -100,
  duration: 15,
});

mainTimeline.to(".subTextContainer", {
  y: 0,
  visibility: "visible",
});

mainTimeline.fromTo(
  "nav .social-ctn a",
  {
    scale: 1,
    duration: 4,
  },
  {
    scale: 0,
    duration: 4,
  }
);

mainTimeline.fromTo(
  ".svgSocial",
  { scale: 0, duration: 10 },
  { scale: 1, duration: 10 }
);

mainTimeline.staggerTo(
  [".charSpan2"],
  3,
  {
    color: "#D1D821",
    opacity: 1,
    duration: 25,
  },
  0.5
);

mainTimeline.fromTo(
  "#subir",
  {
    y: 500,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
  }
);

/******** JS MEDIA QUERIES  ********/
