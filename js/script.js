const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// function videoConAnimation() {
//     var videoCon = document.querySelector(".video-container");
//     var playBtn = document.querySelector(".play");

//     videoCon.addEventListener("mouseenter", function() {
//         gsap.to(playBtn, {
//             scale: 1,
//             opacity: 1,
//         })
//     })

//     videoCon.addEventListener("mouseleave", function() {
//         gsap.to(playBtn, {
//             scale: 0,
//             opacity: 0,
//         })
//     })

    // videoCon.addEventListener("mousemove", function(dets) {
    //     gsap.to(playBtn, {
    //         left: dets.x - 45,
    //         top: dets.y - 45,
    //     })
//     })
// }
// videoConAnimation();

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

    // gsap.from(".title-course .video-container video", {
    //     scale: 0.9,
    //     opacity: 0,
    //     delay: 1.2,
    //     duration: 0.4
    // });

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

    gsap.from(".product .shop-container", {
        y:100,
        opacity: 0,
        duration: 0.4
    })
}
loadingAnimation();

function scrollTrigger(element, scale, opacity, delay, duration, y) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Execute your GSAP animation when the element is in the viewport
            gsap.from(element, {
              scale,
              opacity,
              delay,
              duration,
              y
            });
            // Once the animation is triggered, you may want to unobserve the element
            observer.unobserve(entry.target);
          }
        });
      });
      
    const elementToObserve = document.querySelector(element);
    if (elementToObserve) {
    observer.observe(elementToObserve);
    }
}

scrollTrigger("#product1", scale=1.1, opacity=0, delay=0.2, duration=0.4);
scrollTrigger("#product2", scale=1.1, opacity=0, delay=0.4, duration=0.4);
scrollTrigger("#product3", scale=1.1, opacity=0, delay=0.6, duration=0.4);
scrollTrigger("#g-products1", scale=1.1, opacity=0, delay=0.6, duration=0.4);
scrollTrigger("#g-products2", scale=1.1, opacity=0, delay=0.8, duration=0.4);
scrollTrigger("#g-products3", scale=1.1, opacity=0, delay=0.6, duration=0.4);
scrollTrigger("#g-products4", scale=1.1, opacity=0, delay=0.8, duration=0.4);
scrollTrigger("#g-products5", scale=1.1, opacity=0, delay=0.6, duration=0.4);
scrollTrigger("#g-products6", scale=1.1, opacity=0, delay=0.8, duration=0.4);


function cursorAnimation(cursorType, element) {
    document.addEventListener("mousemove", function(dets) {
        gsap.to(cursorType, {
            left:dets.x,
            top:dets.y
        })
    })
    
    document.querySelector(element).addEventListener("mouseenter", function() {
        gsap.to(cursorType, {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 0.1,
        })
    
    })
    
    document.querySelector(element).addEventListener("mouseleave", function() {
        gsap.to(cursorType, {
            transform: "translate(-50%, -50%) scale(0)"
        })
    })
}

cursorAnimation(".cursor.almond","#g-products1");
cursorAnimation(".cursor.gray","#g-products2");
cursorAnimation(".cursor.brown","#g-products3");
cursorAnimation(".cursor.orange","#g-products4");
cursorAnimation(".cursor.orange","#g-products5");
cursorAnimation(".cursor.red","#g-products6");

const buttonContainer = document.querySelector('.button-container');

let isScrolling = false;
let startX;
let scrollLeft;

buttonContainer.addEventListener('mousedown', (e) => {
  isScrolling = true;
  startX = e.pageX - buttonContainer.offsetLeft;
  scrollLeft = buttonContainer.scrollLeft;
});

buttonContainer.addEventListener('mouseleave', () => {
  isScrolling = false;
});

buttonContainer.addEventListener('mouseup', () => {
  isScrolling = false;
});

buttonContainer.addEventListener('mousemove', (e) => {
  if (!isScrolling) return;
  e.preventDefault();
  const x = e.pageX - buttonContainer.offsetLeft;
  const walk = (x - startX) * 2;
  
  requestAnimationFrame(() => {
    buttonContainer.scrollLeft = scrollLeft - walk;
  });
});

// New: Scroll to the middle when clicking a button
const buttons = document.querySelectorAll('.button-container button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonRect = button.getBoundingClientRect();
    const containerRect = buttonContainer.getBoundingClientRect();
    const scrollAmount = buttonRect.left + buttonRect.width / 2 - containerRect.left - containerRect.width / 2;
    buttonContainer.scrollLeft += scrollAmount;

    buttonContainer.scrollTo({
      left: buttonContainer.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  });
});

function resetButtonAnimation() {
  const buttons = document.querySelectorAll('.button-container button');
  const circles = document.querySelectorAll('.circle');

  let currentActiveButton = null;

  buttons.forEach((button, index) => {
    button.addEventListener('mousedown', () => {
      const circle = circles[index];
      if (currentActiveButton !== button) {
        if (currentActiveButton) {
          const previousIndex = Array.from(buttons).indexOf(currentActiveButton);
          const previousActiveCircle = circles[previousIndex];
          gsap.to(previousActiveCircle, {
            backgroundColor: "white"
          });
        }
        gsap.to(circle, {
          backgroundColor: "black"
        });
        currentActiveButton = button;
      }
    });
  });
}

resetButtonAnimation();


