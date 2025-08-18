const main = document.querySelector("#main")
const cursor = document.querySelector("#cursor")
const image = document.querySelector("#image")

main.addEventListener("mousemove", (delt) => {
    // console.log(delt.x, delt.y);
    gsap.to(cursor, {
        x: delt.x,
        y: delt.y,
        duration: 1,
        ease: "back.out",
    })
})

image.addEventListener("mouseenter", () => {
    cursor.innerHTML = "view more"
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#ffffffa8",
        cursor: "pointer"
    })
})

image.addEventListener("mouseleave", () => {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "",
        cursor: ""
    })
})