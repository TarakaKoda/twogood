function videoConAnimation() {
    var videoCon = document.querySelector(".video-container");
var playBtn = document.querySelector(".play");

videoCon.addEventListener("mouseenter", function() {
    gsap.to(playBtn, {
        scale: 1,
        opacity: 1,
    })
})

videoCon.addEventListener("mouseleave", function() {
    gsap.to(playBtn, {
        scale: 0,
        opacity: 0,
    })
})

videoCon.addEventListener("mousemove", function(dets) {
    gsap.to(playBtn, {
        left: dets.x - 45,
        top: dets.y - 45,
    })
})
}
videoConAnimation();

function loadingAnimation() {
    gsap.from(".title-container .change", {
        y: 100,
        opacity: 0,
        delay: 0.6,
        duration: 0.4
    }); 
    gsap.from(".title-container .the", {
        y: 100,
        opacity: 0,
        delay: 0.8,
        duration: 0.4
    }); 
    gsap.from(".title-container .course", {
        y: 100,
        opacity: 0,
        delay: 1,
        duration: 0.4
    });

    gsap.from(".title-course .video-container video", {
        scale: 0.9,
        opacity: 0,
        delay: 1.2,
        duration: 0.4
    });

    gsap.from(".image-container img", {
        y:100,
        opacity:0,
        delay: 1.2,
        duration: 0.4
    });

    gsap.from(".svg-container", {
        scale: 0.4,
        rotate: 360,
        opacity: 0,
        delay: 1.4,
        duration: 0.4
    })
}
loadingAnimation();