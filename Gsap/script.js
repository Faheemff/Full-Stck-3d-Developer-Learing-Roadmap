var heading =  document.querySelector('.heading');

gsap.fromTo(heading, 
    // duration: 3,
    // x: -100,
    // opacity: 0,
    // scale: 0.5,
    // ease: "bounce",
    // stagger: 0.2,
    { x: 100, opacity: 1 },
    { duration: 3, x: 400, opacity: 0 }
);