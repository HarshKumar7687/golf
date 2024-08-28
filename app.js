var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
//dets give position of the mouse on x dets.x and on y dets.y
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
     blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y-200+"px"
})
/*
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x+"px"
    blur.style.top = dets.y+"px"
})
*/

gsap.to("#nav",{
    backgroundColor:"#000",
     height:"110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //to mark location of start and end
       // markers: true,
        start: "top -10%",
        end:"top -11%",
        //scrub is for restoring transparent and black color
        scrub: 1,
    }
})


gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub: 2,
    }
})


//increase size of cursor on nav bar elements
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent"
    })
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e"
    })
})

//no use as such bring about us in animation
gsap.from("#about-us img , #about-us-in",{
    y:90,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 55%",
        scrub: 1,
      },
})

//animate card if this is there cards will not tilt
/*
gsap.from(".card",{
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
      },
});
*/
//animate colons
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });


gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
});
  