// import gsap from "gsap";

// gsap.to("#box", {
//     x: 800,
//     y: 500,
//     duration: 5,
//     delay: 1,
//     rotate: 270,
//     scale: 1.5,
//     backgroundColor: "pink",
//     borderRadius: "100%" 

// })

// gsap.from("#box2", {
//     x: 800,
//     y: 500,
//     duration: 5,
//     delay: 1,
//     rotate: 270,
//     scale: 1.5,
//     backgroundColor: "pink",
//     borderRadius: "100%",
//     repeat: 2, // -1 for infinite
//     yoyo: true // reversing
// })

// gsap.from('h1', {
//     opacity: 0,
//     y: 500,
//     duration: 5,
//     delay: 1,
//     stagger: 2,
// })

var t = gsap.timeline()

t.from("h1", {
    opacity: 0,
    y: -12,
    duration: 1,
    delay: 1
})

t.from("h4", {
    opacity: 0,
    y: -12,
    duration: 1,
    stagger: 0.3
})
t.from("h2", {
    opacity: 0,
    y: 12,
    duration: 1,
    stagger: 0.3,
    scale: 1.5

})
