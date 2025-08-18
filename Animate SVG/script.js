var initialPath = `M 10 150 Q 550 150 900 150`

var finalPath = `M 10 150 Q 550 150 900 150`

const parent = document.querySelector("#parent")
parent.addEventListener("mousemove", (delt) => {
    console.log(delt);
    initialPath = `M 10 150 Q ${delt.x} ${delt.y} 900 150`
    gsap.to("svg path", {
        duration: 1.5,
        ease: "elastic.out(1,0.3)",
        attr: {
            d: initialPath
        }
    })
})

parent.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        duration: 1.5,
        ease: "elastic.out(1,0.3)",
        attr: {
            d: finalPath
        }
    })
})