/* Imports */

var paths = document.querySelectorAll("#intro #init svg .paths");

paths.forEach((path) => {
  var length = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = "none";
  path.style.strokeDasharray = length + " " + length;
  path.style.strokeDashoffset = length;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition =
    "stroke-dashoffset 2s ease-in-out";
  path.style.strokeDashoffset = "0";
});

/* window.addEventListener("scroll", function(event) {
  var top = this.scrollY,
      left =this.scrollX;

      console.log(top)
}, false); */

/* Lenis config */

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/* Lenis config */

window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /* **************** CURSOR **************** */

  document.addEventListener("mousemove", (e) => {
    let bubbles = document.createElement("bubbles");
    let x = e.pageX;
    let y = e.pageY;

    bubbles.style.left = x + "px";
    bubbles.style.top = y + "px";
    bubbles.style.width = 50 + "px";
    bubbles.style.height = 50 + "px";

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
    }, 200);
  });

  /* **************** CURSOR **************** */

  /************** observer **************** */

  const video = document.getElementById("middleVidCtn");

  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when 50% of the video is visible
  };

  // Callback function to handle intersection changes
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Video is in the viewport, add the autoplay attribute
        video.play();
      } else {
        // Video is not in the viewport, remove the autoplay attribute
        video.pause();
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, options);

  // Start observing the video
  observer.observe(video);

  /************** observer **************** */

  /* ************* DOM elements ************ */
  const body = document.getElementById("body");
  const collapse = document.getElementById("collapse");
  const menu = document.getElementById("menu");
  const navItems = document.getElementsByClassName("nav-item");
  const separators = document.getElementsByClassName("separator");
  const icon = document.getElementById("buttonIcon");
  const social = document.querySelectorAll(".social-img");
  const progress = document.getElementById("progressbar-ctn");

  const tl = gsap.timeline({ paused: true });

  tl.fromTo(
    menu,
    {
      xPercent: "100",
      opacity: 0,
      background: "transparent",
      display: "none",
      ease: "power2.inOut",
    },
    {
      xPercent: "0",
      duration: 0.5,
      opacity: 1,
      background: "rgb(203, 219, 67)",
      display: "block",
      ease: "power2.inOut",
    }
  );

  tl.fromTo(
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

  tl.to(separators, {
    x: 0,
    transformOrigin: "100% 50%",
    duration: 0.5,
  });

  let isRotated = false;

  collapse.addEventListener("click", () => {
    isRotated = !isRotated;
    icon.src = isRotated ? "src/assets/x-dark.png" : "src/assets/Menu.png";
    collapse.style.transform = isRotated ? "rotate(90deg)" : "rotate(0deg)";

    if (body.className.match("close")) {
      body.className = "open";
      social[0].src = "src/assets/mail-dark.png";
      social[1].src = "src/assets/whatsapp-dark.png";
      social[2].src = "src/assets/ig-dark.png";
      social[3].src = "src/assets/Linkedin-dark.png";
    } else if (body.className.includes("open")) {
      body.className = "close";
      social[0].src = "src/assets/mail.png";
      social[1].src = "src/assets/wsp.png";
      social[2].src = "src/assets/ig.png";
      social[3].src = "src/assets/Linkedin.png";
    }
    if (tl.paused() || tl.totalProgress() === 0) {
      tl.play();
    } else if (tl.totalProgress() !== 0) {
      tl.reverse();
    }
  });

  /* scroll test riido*/
  let links = gsap.utils.toArray(".nav-link");
  links.forEach((a) => {
    let element = document.querySelector(a.getAttribute("href")),
      linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top",
      });
    ScrollTrigger.create({
      trigger: element,
      start: "top center",
      end: "bottom bottom",
      onToggle: (self) => self.isActive && setActive(a),
    });
    a.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        scrollTo: linkST.start,
        overwrite: "auto",
      });

      isRotated = !isRotated;
      icon.src = isRotated ? "src/assets/x-dark.png" : "src/assets/Menu.png";
      collapse.style.transform = isRotated ? "rotate(90deg)" : "rotate(0deg)";
      if (body.className.match("close")) {
        body.className = "open";
        social[0].src = "src/assets/mail-dark.png";
        social[1].src = "src/assets/whatsapp-dark.png";
        social[2].src = "src/assets/ig-dark.png";
        social[3].src = "src/assets/Linkedin-dark.png";
      } else if (body.className.includes("open")) {
        body.className = "close";
        social[0].src = "src/assets/mail.png";
        social[1].src = "src/assets/wsp.png";
        social[2].src = "src/assets/ig.png";
        social[3].src = "src/assets/Linkedin.png";
      }
      if (tl.paused() || tl.totalProgress() === 0) {
        tl.play();
      } else if (tl) {
        tl.reverse();
      }
    });
  });

  function setActive(link) {
    links.forEach((el) => el.classList.remove("active"));
    link.classList.add("active");
  }

  /* ****************** Intro dom ****************** */

  const logoCtn = document.getElementById("init");
  const scrollCtn = document.getElementById("scrollea");
  const videoCamara = document.getElementById("video-camara");

  setTimeout(() => {
    logoCtn.style.display = "none";
    scrollCtn.style.display = "flex";
    scrollCtn.style.animation = "fadeInAnimation 1s";
  }, 3000);

  /* ****************** end intro dom ****************** */

  /* ****************** Portfolio dom ****************** */

  let txtCtn = document.querySelectorAll(".text-ctn-1");
  let titleCtn = document.querySelectorAll("section.portfolio li h2");
  let descCtn = document.querySelectorAll(".desc-ctn");
  let ctnHr = document.querySelectorAll("hr.ctn-line");
  let previewVideos = document.querySelectorAll(".preview-video");
  let logoPortfolio = document.querySelector(".logo-box");
  let videoOverlay = document.querySelector(".vid-overlay");
  const customCursor = document.createElement("div");
  customCursor.className = "hand-cursor";

  // modals
  const liElements = [];
  liElements.push(document.getElementById("eugenie"));
  liElements.push(document.getElementById("delsud"));
  liElements.push(document.getElementById("flexy"));

  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");

  const videos = [
    "src/assets/casos/eugenie-comp.mp4",
    "src/assets/casos/delsud-comp.mp4",
    "src/assets/casos/flexy-comp.mp4",
  ];
  let currentVideo = null;

  /* ****************** end Portfolio dom ****************** */

  /* ****************** Middle dom ****************** */

  let ctn = document.querySelectorAll(".child");

  ctn.forEach((element, index) => {
    element.addEventListener("mouseover", (event) => hoverAcc(event, index));
    element.addEventListener("mouseout", (event) => outAcc(event, index));
  });

  function hoverAcc(event, index) {
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

  /* ****************** End Middle dom ****************** */

  /* ******************  dom manipulation ****************** */

  // Append customCursor to the body
  document.body.appendChild(customCursor);

  titleCtn.forEach((element, index) => {
    element.addEventListener("mouseover", (event) => hover(event, index));
    element.addEventListener("mouseout", (event) => out(event, index));
    element.addEventListener("mousemove", (event) => {
      // Update the position of the custom cursor based on the mouse pointer
      customCursor.style.left = event.pageX + "px";
      customCursor.style.top = event.pageY + "px";
    });
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
    customCursor.style.display = "block";
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
    customCursor.style.display = "none";
  }

  liElements.forEach((liElement, index) =>
    liElement.addEventListener("click", () => {
      if (currentVideo && currentVideo.parentNode) {
        currentVideo.parentNode.removeChild(currentVideo);
      }
      let newVideo = document.createElement("video");
      newVideo.id = "modalVideo";
      let swapSrc = document.createElement("source");
      swapSrc.src = videos[index];
      newVideo.appendChild(swapSrc);
      modalContent.appendChild(newVideo);
      modal.classList.add("shown");
      newVideo.play();
      currentVideo = newVideo;
      progress.style.zIndex = "0 !important";
    })
  );

  closeModal.addEventListener("click", () => {
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.parentNode.removeChild(currentVideo);
      currentVideo = null;
      progress.style.zIndex = "500 !important";
    }
    modal.classList.remove("shown");
  });

  /* ******** Video frames ******** */

  let urls1 = new Array(380)
    .fill()
    .map(
      (_, i) =>
        `src/assets/camara_frames/introframes (` +
        `${i + 1}`.toString() +
        `)` +
        `.webp`
    );

  urls1.forEach((url) => {
    let img = new Image();
    img.src = url;
    img.class = "camara";
    videoCamara.appendChild(img);
  });

  /* ********* Timelines ********* */

  const vidCamaraTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      // markers: true,
      // id: "intro",
      pinSpacing: false,
    },
  });

  let portfolioTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#portfolio",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      // markers: true,
      // id: "portfolio",
      pinSpacing: false,
    },
  });

  const middleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#middleVidCtn",
      start: "top bottom",
      end: "bottom+=15% bottom",
      scrub: true,
      pin: true,
      // markers: true,
      // id: 'middle',
      pinSpacing: false,
    },
  });

  const tiempoTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#tiempo-acc",
      start: "top top",
      end: "bottom+=15% top",
      scrub: true,
      pin: true,
      /* markers: true,
      id: 'tiempo', */
      pinSpacing: false,
    },
  });

  const endTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#end",
      start: "top top",
      end: "bottom+=200% bottom",
      scrub: true,
      pin: true,
      /* markers: true,
      id: 'end' */
    },
  });

  /* *********** END TIMELINE SEQUENCE ********** */

  /* *********** INTRO SCROLLING ********** */

  vidCamaraTL.fromTo(
    "#scrollea",
    {
      opacity: 1,
      x: 0,
    },
    {
      opacity: 0,
      x: -100,
    }
  );

  vidCamaraTL.to("#first-frame", {
    opacity: 0,
  });

  const imgs = gsap.utils.toArray("#video-camara img");

  imgs.forEach((img, index) => {
    vidCamaraTL.fromTo(
      img,
      {
        display: "none",
      },
      {
        display: "block",
        stagger: 0.5,
        duration: 1,
      }
    );
    if (index < imgs.length - 1) {
      vidCamaraTL.set(img, { display: "none" });
    }
  });

  vidCamaraTL.fromTo(
    "#texto",
    {
      transform: "scale(0)",
      opacity: 0,
    },
    {
      transform: "scale(1)",
      opacity: 1,
      duration: 50,
      delay: -100,
    }
  );

  vidCamaraTL.to(".fill", {
    color: "#D1D821",
    stagger: 3,
    duration: 20,
    delay: -10,
  });

  vidCamaraTL.to("#texto", {
    y: -1000,
    duration: 20,
  });

  vidCamaraTL.to("#video-camara", {
    opacity: 0,
    duration: 90,
    delay: -10,
  });

  vidCamaraTL.set("#intro", {
    background: "none",
  });

  /* *********** END INTRO SCROLLING ********** */

  /* *********** PORTFOLIO SCROLLING ********** */

  portfolioTl
    .fromTo(
      ".portfolio",
      {
        visibility: "hidden",
      },
      {
        visibility: "visible",
        delay: -1,
        duration: 10,
      }
    )
    .addLabel("port");

  portfolioTl.to(".bg-rodaje", {
    yPercent: -66,
    duration: 50,
    opacity: 0.8,
    scrollTrigger: ".sup-rodaje",
  });

  portfolioTl.to(".sup-rodaje", {
    delay: 3,
    duration: 50,
    yPercent: -66,
  });

  portfolioTl.fromTo(
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

  portfolioTl.to(".txt-ctn-1 .txt-row h2", {
    opacity: 1,
    duration: 5,
  });

  portfolioTl.to(".txt-ctn-1 .dup-ctn span", {
    opacity: 1,
    stagger: 1,
    duration: 3,
    scrollTrigger: ".dup-ctn span",
  });

  portfolioTl.to(".txt-ctn-1 .dup-ctn span", {
    color: "#D1D821",
    stagger: 1,
    duration: 3,
    delay: 5,
  });

  portfolioTl.to(".sup-rodaje.zoomed", {
    duration: 3,
    opacity: 1,
    delay: 10,
  });

  portfolioTl.to(".txt-ctn-1", {
    duration: 5,
    opacity: 0,
  });

  portfolioTl.to("#rect1", {
    attr: { rx: "8.5", y: "34", width: "17", height: "43.4444" },
    fill: "#D9D9D9",
    duration: 1,
  });

  portfolioTl.to("#rect2", {
    attr: { rx: "12.2778", y: "0", width: "24.5556", height: "86.8889" },
    fill: "#CBDB43",
    duration: 1,
  });

  portfolioTl.to(".sup-rodaje", {
    duration: 10,
    scale: 2.5,
    transformOrigin: "32% bottom",
    scrollTrigger: ".txt-ctn-2 .txt-row h2, .bg-overlay",
  });

  portfolioTl.to(".bg-overlay", {
    duration: 5,
    opacity: 0.3,
  });

  portfolioTl.to(".txt-ctn-2 .txt-row h2", {
    opacity: 1,
    duration: 4,
  });

  portfolioTl.to(".txt-ctn-2 .dup-ctn span", {
    opacity: 1,
    stagger: 1,
    duration: 2,
    scrollTrigger: ".dup-ctn span",
  });

  portfolioTl.to(".txt-ctn-2 .dup-ctn span", {
    color: "#D1D821",
    stagger: 1,
    duration: 2,
    delay: 4,
  });

  portfolioTl.to(".txt-ctn-2", {
    opacity: 0,
    duration: 4,
    delay: 4,
  });

  portfolioTl.to(".pf-accordion-outer", {
    opacity: 1,
    duration: 4,
    scrollTrigger: ".bg-overlay",
    zIndex: 20,
  });

  portfolioTl.to(".bg-overlay", {
    duration: 4,
    opacity: 0.5,
    scrollTrigger: ".pf-accordion-outer ol li h2",
  });

  portfolioTl.to(".pf-accordion-outer ol li h2", {
    y: 0,
    opacity: 1,
    stagger: 1,
    duration: 3,
    delay: 2,
  });

  portfolioTl.to(".pf-accordion", {
    delay: 3,
    opacity: 1,
    duration: 2,
  });

  portfolioTl.to(".pf-accordion", {
    delay: 5,
    opacity: 0,
    duration: 6,
    scrollTrigger: ".pf-accordion",
  });

  portfolioTl.to(".pf-accordion-outer ol li h2", {
    y: 30,
    opacity: 0,
    stagger: 1,
    delay: 4,
    duration: 5,
  });

  portfolioTl.to(".sup-rodaje", {
    delay: 4,
    duration: 10,
    width: "450%",
    left: "-290%",
    top: "-55%",
    scrollTrigger: ".box-ctn",
  });

  portfolioTl.to(".box-ctn", {
    delay: 4,
    duration: 7.5,
    transform: "scale(4.1)",
    xPercent: -100,
    top: "30%",
  });

  portfolioTl.fromTo(
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

  portfolioTl.to(".portfolio", {
    opacity: 0,
    duration: 0,
  });

  portfolioTl.to(".sup-rodaje", {
    display: "none",
  });

  /* *********** END PORTFOLIO SCROLLING ********** */

  /* *********** MIDDLE SCROLLING ********** */

  /* middleTimeline.set("#middleVidCtn", {
    position: "fixed",
  }); */

  middleTimeline.fromTo(
    "#middleVidCtn",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    }
  );

  middleTimeline.fromTo(
    "#middleVidCtn",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 12,
      delay: 50,
    }
  );

  /* middleTimeline.to("#middleVidCtn", {
    position: "relative",
  }); */

  /****************************************/

  tiempoTimeline.fromTo(
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

  tiempoTimeline.fromTo(
    "#middle .text",
    {
      y: 1000,
      delay: 5,
      duration: 10,
    },
    {
      y: -500,
      stagger: 1,
      delay: 5,
      duration: 10,
    }
  );
  tiempoTimeline.to("#rect2", {
    attr: { rx: "8.5", y: "34", width: "17", height: "43.4444" },
    fill: "#D9D9D9",
    duration: 1,
  });

  tiempoTimeline.to("#rect3", {
    attr: { rx: "12.2778", y: "0", width: "24.5556", height: "86.8889" },
    fill: "#CBDB43",
    duration: 1,
  });

  tiempoTimeline.to("#middle #text-container .letter", {
    color: "#D1D821",
    stagger: 2,
    duration: 4,
  });

  tiempoTimeline.fromTo(
    "#middle #text-container",
    {
      x: 0,
      zIndex: 0,
    },
    {
      x: -2000,
      zIndex: 200,
      delay: 3,
      duration: 30,
    }
  );

  tiempoTimeline.to(".acc-borders", {
    opacity: 1,
    x: 0,
    duration: 20,
    width: "400vw",
  });

  tiempoTimeline.fromTo(
    ".accordion",
    {
      x: 2000,
      zIndex: 1,
      duration: 20,
    },
    {
      x: 0,
      zIndex: 0,
      duration: 20,
    }
  );

  tiempoTimeline.to(".accordion", {
    rotateX: -69.3,
    duration: 10,
    delay: 30,
    zIndex: 0,
    opacity: 0,
  });

  tiempoTimeline.fromTo(
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

  tiempoTimeline.fromTo(
    "#video-tiempo",
    {
      rotateX: 111.2,
      opacity: 0,
    },
    {
      rotateX: 0,
      duration: 10,
      opacity: 1,
      scrollTrigger: ".accordion",
    }
  );

  tiempoTimeline.fromTo(
    "#video-tiempo #text-container-tiempo .text",
    {
      y: 5000,
    },
    {
      y: 0,
      stagger: 0.5,
      duration: 30,
    }
  );

  tiempoTimeline.fromTo(
    "#video-tiempo .letter",
    {
      color: "transparent",
    },
    {
      color: "rgb(203, 219, 67)",
      stagger: 4,
      duration: 4,
      delay: 1,
    }
  );

  tiempoTimeline.fromTo(
    "#video-tiempo",
    {
      rotateX: 0,
      duration: 10,
      opacity: 1,
    },
    {
      rotateX: -69.3,
      opacity: 0,
      duration: 50,
    }
  );

  tiempoTimeline.to("#video-tiempo", {
    opacity: 0,
    duration: 30,
  });

  tiempoTimeline.to("#tiempo-acc", {
    display: "none",
  });

  /* *********** TIEMPO SCROLLING ********** */

  /* **************** SECCION FINAL ***************** */

  const carouselCtn = document.getElementById("carousel-container");
  const carousel = document.getElementById("carouselFig");

  if (carouselCtn.style.transform !== "scale(0, 0)") {
    carousel.style.animation = "rotateAnim 30s infinite forwards";
  } else {
    carousel.style.animation = "none";
  }

  endTimeline.fromTo(
    "#txt-container-2",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  );

  endTimeline.fromTo(
    "#p1",
    {
      x: 2000,
    },
    {
      x: 0,
      duration: 25,
    }
  );

  endTimeline.fromTo(
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

  endTimeline.to("#p1", {
    delay: 40,
    duration: 30,
    x: -2000,
  });

  endTimeline.fromTo(
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

  endTimeline.to("#p1", {
    opacity: 0,
    duration: 0,
  });

  endTimeline.to("#rect3", {
    attr: { rx: "8.5", y: "34", width: "17", height: "43.4444" },
    fill: "#D9D9D9",
    duration: 1,
  });

  endTimeline.to("#rect4", {
    attr: { rx: "12.2778", y: "0", width: "24.5556", height: "86.8889" },
    fill: "#CBDB43",
    duration: 1,
  });

  endTimeline.to("#p2", {
    delay: -30,
    duration: 20,
    y: 150,
  });

  endTimeline.to("#carousel-container", {
    transform: "scale(1.3)",
    duration: 10,
    delay: -20,
  });

  endTimeline.to("#txt-container-2", {
    delay: 30,
    y: 800,
    duration: 50,
    transform: "scale(0.5)",
    opacity: 0,
  });

  endTimeline.to("#txt-container-2", {
    display: "none",
  });

  endTimeline.fromTo(
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

  // middleTimeline.to("#p2", {
  //   opacity: 0,
  //   duration: 0,
  // });

  endTimeline.fromTo(
    "#svgOutro",
    {
      y: -1000,
      transform: "scale(2.5)",
      duration: 20,
      delay: -30,
      opacity: 0,
    },
    {
      y: 0,
      transform: "scale(1.6)",
      duration: 20,
      opacity: 1,
    }
  );

  endTimeline.to("#svgOutro", {
    delay: 10,
    duration: 70,
    rotateY: 809,
  });

  endTimeline.to("#svgOutro", {
    visibility: "hidden",
  });

  endTimeline.fromTo(
    "#textAllCtn",
    {
      visibility: "hidden",
      rotateY: -90,
      duration: 5,
    },
    {
      visibility: "visible",
      rotateY: 0,
      duration: 5,
    }
  );

  endTimeline.staggerTo(
    [".charSpan"],
    1,
    {
      color: "#D1D821",
      stagger: 1,
      duration: 10,
    },
    2
  );

  endTimeline.staggerTo(
    ["#textAllCtn"],
    3,
    {
      scale: 0.6,
      y: -200,
    },
    1
  );

  endTimeline.to(".subTextContainer", {
    y: 0,
    visibility: "visible",
  });

  endTimeline.fromTo(
    ".social-nav",
    {
      transform: "scale(1)",
      opacity: 1,
    },
    {
      transform: "scale(0)",
      opacity: 0,
      duration: 5,
    }
  );

  endTimeline.fromTo(
    ".svgSocial",
    { scale: 0, duration: 10 },
    { scale: 1, duration: 10 }
  );

  endTimeline.staggerTo(
    [".charSpan2"],
    3,
    {
      color: "#D1D821",
      opacity: 1,
      duration: 25,
    },
    0.5
  );
});
