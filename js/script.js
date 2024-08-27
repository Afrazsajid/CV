

const scroll = new LocomotiveScroll({
  el: document.getElementById('body'),
  smooth: true
});

let timer










let xprev = 0;
let yprev = 0;
let xscale = 1;
let yscale = 1;

function setall() {
  document.getElementById("circle").style.transform = "scale(1,1)"
  // console.log("late")
}

function mouseskew() {
  clearTimeout(timer)
  window.addEventListener('mousemove', (e) => {
    const xdiff = e.clientX - xprev;
    const ydiff = e.clientY - yprev;
    // console.log(xdiff,ydiff)
    xscale = gsap.utils.clamp(0.7, 1.3, xscale - (xdiff / 100));
    yscale = gsap.utils.clamp(0.7, 1.2, yscale + (ydiff / 100));
    // console.log(xscale,yscale)
    xprev = e.clientX;
    yprev = e.clientY;
    moveCircleWithMouse(xscale, yscale, e);

    timer = setTimeout(setall, 1000)
  });
}


function moveCircleWithMouse(xscale, yscale, ev) {
  const circle = document.getElementById('circle');
  gsap.to("#circle", {

    duration: 0.5,
    top: ev.clientY,
    left: ev.clientX,

    ease: "power2.out",
    overwrite: true


  })
  circle.style.transform = `scale(${xscale},${yscale})`




}
















function firstpagefunc() {
  let tl = gsap.timeline()

  // tl.from('#nav', {
  //   y: -10,
  //   opacity: 0,
  //   duration: 1.2,
  //   ease: Expo.easeInOut

  // })
  tl.from(".img-div", {duration: 1, 
    opacity:0
  })
  tl.to('.l', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: Expo.easeInOut,
    stagger: 0.2,
    delay:-0.5

  })
  tl.to('.el', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: Expo.easeInOut,
    stagger: 0.2,
    delay: -1,

  })

  tl.from('#info-nav', {
    y: -10,
    opacity: 0,
    ease: Expo.easeIn,
    delay: -0.4

  })
  tl.from("#listCont",{
    opacity:0
  })


}


function itemhoverhandle() {
  document.querySelectorAll(".item").forEach(function (elem) {
    let rotate = 0;
    let diffrot = 0;

    circle = document.getElementById("circle")
    let p = elem.querySelector('p')

    elem.addEventListener("mouseleave", function (dets) {

      if (window.innerWidth<480){
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          left:240,
          ease: Power3,
  
          duration: 0.2,
        })

      }

      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,

        duration: 0.5,
      });

      circle.style.width = "18px"
      circle.style.height = "18px"
      circle.innerHTML = "";
      p.style.opacity = 0.7
    });

   

    elem.addEventListener("mousemove", function (dets) {

      p.style.opacity = 0.4
      p.style.paddingLeft="18px"

      circle.style.width = '130px';
      circle.style.height = '130px';
      circle.innerHTML = "Show Project";
      console.log(p)
      let diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;


      rotate = dets.clientX;
      let img=elem.querySelector("img")
      if (window.innerWidth > 480) {
        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: (diff)-(elem.getBoundingClientRect().height)/2,
          left: dets.clientX+(img.getBoundingClientRect().width/3),
          
          rotate: gsap.utils.clamp(-25, 25, diffrot * 0.5),
          duration: 0.2
        });
      }
    else {
   
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        left:1,

       
        duration: 0.2
      });

     

      }




    });
  });
}

function aboutmehandle() {
  document.getElementById("aboutme-cont").addEventListener("mousemove", (e) => {
    gsap.to("#ab-cont", {
      opacity: 1.1,
      duration: 0.7,
      scale: 1.2,
      left: -90
    })
    circle = document.getElementById("circle")
    circle.style.width = '100px';
    circle.style.height = '100px';

    circle.innerHTML = "View";
  }



  )


  document.getElementById("aboutme-cont").addEventListener("mouseleave", (e) => {
    gsap.to("#ab-cont", {
      opacity: 0.6,
      duration: 0.7,
      scale: 1,
      left: 0
    })

    circle = document.getElementById("circle")
    circle.style.width = '20px';
    circle.style.height = '20px';

    circle.innerHTML = "";


  })
}

document.addEventListener("DOMContentLoaded", function() {
  aboutmehandle()




  // ScrollTrigger.create({
  //   animation: tl2,
  //   trigger:document.getElementById("ab-cont"),
  //   start: 'top 75%', // trigger when the top of the element reaches 75% from the top of the viewport
  //   end: 'bottom 25%', // end when the bottom of the element reaches 25% from the top of the viewport
  //   scrub: true, // scrub the animation when the user scrolls
  // });
  
  
  
  
  
  
  
  updateFooterTime()
  mouseskew()
  

  
  firstpagefunc()
  
  itemhoverhandle()
  
  
  
  
});


