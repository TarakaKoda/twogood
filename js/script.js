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