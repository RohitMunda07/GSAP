// import gsap from 'gsap'

gsap.from("#page-1 #box", {
    rotate: 360,
    duration: 2,
    delay: 1,
    scale: 0
})

gsap.from("#page-2 #box2", {
    rotate: 360,
    duration: 2,
    scale: 0,
    // scrollTrigger: "#page-2 #box2" // simple way
    scrollTrigger: {
        trigger: "#page-2 #box2", // what to trigger
        scroller: "body", // what are we scrolling
        markers: true, // show location of start/end points
        start: "top 80%", // when to start
        end: "top 45%", // scrub works in between start and end
        // scrub: true // one way
        scrub: 2.5 // value between 1-9
    }
})

// Text Animation

// gsap.from("#page-2 h1", {
//     opacity: 0,
//     x: 500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page-2 h1",
//         markers: true,
//         start: "top 50%"
//     }
// })

// gsap.from("#page-2 h2", {
//     opacity: 0,
//     x: -500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page-2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 30%"
//     }
// })

gsap.to("#page-3 h1", {
    transform: "translateX(-35%)",
    scrollTrigger: {
        trigger: "#page-3", // pin is applied to parent
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})