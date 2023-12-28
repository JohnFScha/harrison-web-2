// ========================= GLOBAL CONSTANTS / [dirty, dirty...] INIT/RESET =========================

const frameCount = 149;
const sliderStep = 0.0000000000000001;
/* let scrollPos = 0; */

/* gsap.set(window, { scrollTo: 0 });
gsap.set(window, { scrollTo: scrollPos });
window.scrollTo(0, 0); */


// ========================= IMAGES =========================

const canvas = document.getElementById("animContainerID");
const context = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 540;

const currentFrame = index => (
  `./src/assets/camara-frames/ezgif-frame-${(index + 1)
    .toString()
    .padStart(3, "0")}.jpg`
);

const images = []

const anim = {
    frame: 0,
    lastFrame: -1,
    totalFrames: frameCount,
    images: []
};

for (let i = 0; i <= frameCount; i++) {

    const img = new Image();

    img.src = currentFrame(i);
    images.push(img);
}


// ========================= FUNCTION: updateStats(thisFrame, thisProgress, thisScrollPos) =========================

function updateStats(thisFrame, thisProgress, thisScrollPos) {
    $(".framecount").html('frame: ' + thisFrame);
    $(".scrollProgress").html('scrollProgress: ' + thisProgress);
    $(".scrollPosition").html('scrollPosition: ' + thisScrollPos);
}


// ========================= FUNCTION: drawSprite() =========================

function drawSprite() {

    if (anim.frame === anim.lastFrame) {
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[anim.frame], 0, 0);

    anim.lastFrame = anim.frame;

    const thisProgress = anim.frame / frameCount;
    scrollPos = (document.body.offsetHeight - window.innerHeight) * thisProgress;

    gsap.set(window, { scrollTo: (document.body.offsetHeight - window.innerHeight) * thisProgress });

    $("#slider").slider("value", thisProgress);

    updateStats(anim.frame, thisProgress, scrollPos);
}


// ========================= SCROLLTRIGGER ANIM: TIMELINE =========================

var animTimeline = gsap.timeline({

    paused: true,

    onUpdate: drawSprite,

    scrollTrigger: {
        scrub: true,
    },
});

animTimeline
    .to(anim, {
        duration: 1,
        frame: frameCount,
        ease: "none",
        snap: "frame",
});


// ========================= CONTROLS: SCRUBBER / SLIDER =========================

$("#slider").slider({
    range: false,
    min: 0,
    max: 1,
    step: sliderStep,

    slide: function (event, ui) {

        const thisProgress = ui.value;

        gsap.set(window, { scrollTo: (document.body.offsetHeight - window.innerHeight) * thisProgress });

        animTimeline.pause();
    }
});


// ========================= CONTROLS: JUMP BUTTONS =========================

$('.jumpBtn').each(function () {

    thisButton = $(this);

    thisButton.click(function () {

        const thisProgress = this.value / frameCount;

        gsap.set(window, { scrollTo: (document.body.offsetHeight - window.innerHeight) * thisProgress });

        animTimeline.pause();
    });

})


// ========================= CONTROLS: TIMELINE BUTTONS  =========================

$(document).ready(function () {
    $('#play').click(function () { animTimeline.play(); });
    $('#pause').click(function () { animTimeline.pause(); });
    $('#resume').click(function () { animTimeline.resume(); });
    $('#reverse').click(function () { animTimeline.reverse(); });
    $('#restart').click(function () { animTimeline.restart(); });
});
