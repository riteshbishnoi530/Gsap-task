gsap.registerPlugin(ScrollTrigger);
gsap.set(".line", {
  width: "0", 
  background: "linear-gradient(59.9deg, #DF2BFF 4.63%, #00B7FF 97.56%)",
});

gsap.set(".image-one", {
  scale: 1, 
  opacity: 1,
},0.1
);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".parent",
    start: 'top 30%',
    end: '+=700%', 
    pin: true,
    scrub: 1,
  }
});

tl
  .to(
    ".image-one", 
    { 
      scale: 0, 
      opacity: 0, 
      duration: 0.6 
    }, 
    0.8
  )

  .to(
    ".line", 
    { 
      width: "20%" 
    }, 
    0.8
  )
  .to(
    ".image-two", 
    { 
      scale: 1, 
      opacity: 1, 
      duration: 0.6 
    }, 
    0.8
  )
  .to(
    ".image-two", 
    { 
      scale: 0, 
      opacity: 0, 
      duration: 0.6 
    }, 
    1.4
  )
  .to(
    ".line", 
    { 
      width: "40%" 
    }, 
    1.4 
  )
  .to(
    ".image-three", 
    { 
      scale: 1, 
      opacity: 1, 
      duration: 0.6 
    }, 
    1.4
  )
  .to(
    ".image-three", 
    { 
      scale: 0, 
      opacity: 0, 
      duration: 0.6 
    }, 
    2 
  )

  .to(
    ".line", 
    { 
      width: "60%" 
    }, 
    2 
  )
  .to(
    ".image-four", 
    { 
      scale: 1, 
      opacity: 1, 
      duration: 0.6 
    }, 
    2
  )
  .to(
    ".image-four", 
    { 
      scale: 0, 
      opacity: 0, 
      duration: 0.6 
    }, 
    2.6
  )

  .to(
    ".line", 
    { 
      width: "80%" 
    }, 
    2.6 
  )
  .to(
    ".image-five", 
    { 
      scale: 1, 
      opacity: 1, 
      duration: 0.6 
    }, 
    2.6  
  )
  .to(
    ".image-five", 
    { 
      scale: 0, 
      opacity: 0, 
      duration: 0.6 
    }, 
    3.2  
  )

  .to(
    ".line", 
    { 
      width: "100%" 
    }, 
    2.6 
  )

  .to(
    ".image-six", 
    { 
      scale: 1, 
      opacity: 1, 
      duration: 0.6 
    }, 
    3.2  
  );
