const box = document.querySelector("#box")
const h1 = document.querySelector("h1")

var splitedText = h1.textContent.split("")
var clutter = ""

splitedText.forEach((element, idx) => {
    if (idx < (Math.floor(splitedText.length / 2))) {
        clutter += `<span class="first">${element}</span>`
    }
    else {
        clutter += `<span class="second">${element}</span>`
    }
});

h1.innerHTML = clutter

console.log(h1);

console.log(clutter);


gsap.from("h1 .first", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 3,
    stagger: 0.05,
   ease: "elastic.out(1,0.3)",

})

gsap.from("h1 .second", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 3,
    stagger: -0.05,
    ease: "elastic.out(1,0.3)",
})