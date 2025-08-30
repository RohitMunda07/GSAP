document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".ticker").forEach(ticker => {
        const inner = ticker.querySelector('.ticker-wrap')
        const content = inner.querySelector('.ticker-text')
        const duration = ticker.getAttribute('data-duration')

        inner.append(content.cloneNode(true))

        const animations = []
        inner.querySelectorAll(".ticker-text").forEach((element) => {
            const animation = gsap.to(element, {
                x: -200,
                duration: duration,
                repeat: -1,
                ease: "linear",
            })
            animations.push(animation)
        })

        ticker.addEventListener("mouseenter", () => {
            animations.forEach((ani) => ani.pause())
        })
        ticker.addEventListener("mouseleave", () => {
            animations.forEach((ani) => ani.play())
        })
    });

})