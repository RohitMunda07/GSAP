// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});

const t = gsap.timeline({
    defaults: {
        ease: "none"
    },
    scrollTrigger: {
        trigger: ".main",
        markers: true,
        start: "50% 50%",
        end: "60% 30%",
        scrub: 2,
        pin: ".main"
    }
})

t.
    to(".top", {
        top: "-100%"
    }, "g")
    .to(".top .h-top", {
        top: "100%",
    }, "g")
    .to(".center h1", {
        marginTop: "0%",
    }, "g")
    .to(".bottom", {
        bottom: "-100%"
    }, "g")
    .to(".bottom .h-bottom", {
        bottom: "100%"
    }, "g")