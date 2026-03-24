$(document).ready(function(){//시작

  AOS.init();

  /*header*/
  
const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


   const skillItems = document.querySelectorAll('.item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.3
  });

  skillItems.forEach((item) => {
    observer.observe(item);
  });


 const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

function setDot(x, y) {
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
}

function setRing(x, y) {
  ring.style.left = `${x}px`;
  ring.style.top = `${y}px`;
}

setDot(mouseX, mouseY);
setRing(ringX, ringY);

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  setDot(mouseX, mouseY);
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  setRing(ringX, ringY);
  requestAnimationFrame(animateRing);
}
animateRing();

window.addEventListener('resize', () => {
  mouseX = Math.min(mouseX, window.innerWidth);
  mouseY = Math.min(mouseY, window.innerHeight);
  ringX = mouseX;
  ringY = mouseY;
  setDot(mouseX, mouseY);
  setRing(ringX, ringY);
});

/* hover */
const hoverTargets = document.querySelectorAll('a, button, .port-btn a, .gnb li a');

hoverTargets.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    dot.classList.add('hover');
    ring.classList.add('hover');
  });

  el.addEventListener('mouseleave', () => {
    dot.classList.remove('hover');
    ring.classList.remove('hover');
  });
});

});


   //끝