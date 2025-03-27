var heading =  document.querySelector('.heading');

gsap.from(heading, {
    duration: 3,
    x: -100,
    opacity: 0,
    scale: 0.5,
    ease: "bounce",
    stagger: 0.2
})