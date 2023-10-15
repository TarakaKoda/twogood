function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

locomotiveAnimation();

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
        delay: 0.1,
        duration: 0.4
    }); 
    gsap.from(".title-container .the", {
        y: 100,
        opacity: 0,
        delay: 0.2,
        duration: 0.4
    }); 
    gsap.from(".title-container .course", {
        y: 100,
        opacity: 0,
        delay: 0.3,
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
        delay: 0.4,
        duration: 0.4
    });

    gsap.from(".svg-container", {
        scale: 0.4,
        rotate: 360,
        opacity: 0,
        delay: 0.5,
        duration: 0.4
    })

    gsap.from(".product .shop-container", {
        y:100,
        opacity: 0,
        duration: 0.4
    })

    gsap.from(".do-good", {
      opacity: 0,
      width: 0,
      delay: .2,
      duration: 0.4,
    });
    gsap.from("#product1", {
      opacity:0,
      delay: 0.5,
      duration: 0.4,
    });
}
loadingAnimation();

gsap.to('.nav-left svg', {
  transform: "translateY(-100%)",
  scrollTrigger: {
    trigger: "#page-1",
    scroller: ".main",
    start: "top 0",
    end: "top -5%",
    scrub: true,
  }
})
gsap.to('.nav-right .nav-links', {
  transform: "translateY(-100%)",
  scrollTrigger: {
    trigger: "#page-1",
    opacity: 0,
    scroller: ".main",
    start: "top 0",
    end: "top -5%",
    scrub: true,
  }
})

function scrollTrigger(element, scale, opacity, delay, duration, y, width, rotate) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Execute your GSAP animation when the element is in the viewport
            gsap.from(element, {
              scale,
              opacity,
              delay,
              duration,
              y,
              width,
              rotate
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
};
scrollTrigger("#product1", scale=1.1, opacity=0, delay=0.1, duration=0.4);
scrollTrigger("#product2", scale=1.1, opacity=0, delay=0.2, duration=0.4);
scrollTrigger("#product3", scale=1.1, opacity=0, delay=0.3, duration=0.4);
scrollTrigger("#g-products1", scale=1.1, opacity=0, delay=0.4, duration=0.4);
scrollTrigger("#g-products2", scale=1.1, opacity=0, delay=0.5, duration=0.4);
scrollTrigger("#g-products3", scale=1.1, opacity=0, delay=0.4, duration=0.4);
scrollTrigger("#g-products4", scale=1.1, opacity=0, delay=0.5, duration=0.4);
scrollTrigger("#g-products5", scale=1.1, opacity=0, delay=0.4, duration=0.4);
scrollTrigger("#g-products6", scale=1.1, opacity=0, delay=0.5, duration=0.4);
scrollTrigger(".buy-good.love-support", scale=1.1, opacity=0, delay=0.4, duration=0.5, width=0);
scrollTrigger(element=".line-1", scale=1, opacity=0, delay=0.1, duration=0.2, y=100)
scrollTrigger(element=".line-2", scale=1, opacity=0, delay=0.2, duration=0.2, y=100)
scrollTrigger(element=".line-3", scale=1, opacity=0, delay=0.3, duration=0.2, y=100)
scrollTrigger(element=".line-4", scale=1, opacity=0, delay=0.4, duration=0.2, y=100)
scrollTrigger(element=".line-5", scale=1, opacity=0, delay=0.5, duration=0.2, y=100)
scrollTrigger(element=".impact-img1", scale=1.1, opacity=0, delay=0.1, duration=0.4, y=100)
scrollTrigger(element=".impact-img2", scale=1.1, opacity=0, delay=0.2, duration=0.4, y=100)
scrollTrigger(element=".email-container h3", scale=1, opacity=0, delay=0.1, duration=0.4, y=100)
scrollTrigger(element=".email-svg-container img", scale=0, opacity=0, delay=0.2, duration=0.4, 0, 0, rotate=360)
scrollTrigger(element=".logo-container", scale=1, opacity=0, delay=0.1, duration=0.1, y=100)



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
};

cursorAnimation(".cursor.almond","#g-products1");
cursorAnimation(".cursor.gray","#g-products2");
cursorAnimation(".cursor.brown","#g-products3");
cursorAnimation(".cursor.orange","#g-products4");
cursorAnimation(".cursor.orange","#g-products5");
cursorAnimation(".cursor.red","#g-products6");


function scrollDragButtonsAnimation() {
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

};

scrollDragButtonsAnimation();

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
};

resetButtonAnimation();

function UnderlineAnimation() {
  const buttons = document.querySelectorAll('.button-container button');
  const underlines = document.querySelectorAll('.underline-container')

  let currentActiveButton = null;

  buttons.forEach((button, index) => {
    button.addEventListener('mousedown', () => {
      const underline = underlines[index];
      if (currentActiveButton !== button) {
        if (currentActiveButton) {
          const previousIndex = Array.from(buttons).indexOf(currentActiveButton);
          const previousActiveUnderline = underlines[previousIndex];
          gsap.to(previousActiveUnderline, {
            width:0,
            overflow:"hidden"
          });
        }
        gsap.to(underline, {
          width:"auto",
          overflow: "normal"
        });
        currentActiveButton = button;
      }
    });
  });
};

UnderlineAnimation();



