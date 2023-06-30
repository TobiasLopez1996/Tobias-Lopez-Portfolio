// anim home
const animRight = document.querySelectorAll(".anim-right")
const animLeft = document.querySelectorAll(".anim-left")
function setAnimTranslate() {
    gsap.from(animRight, { x: -2000, stagger: .5, duration: 5, ease: "power3" })
    gsap.from(animLeft, { x: 2000, stagger: .5, duration: 5, ease: "power3" })
}
window.addEventListener("DOMContentLoaded", setAnimTranslate)

// anim images
const imgAnim = document.querySelectorAll(".img_appear")
gsap.registerPlugin(ScrollTrigger)
imgAnim.forEach((element) => {
gsap.fromTo(
    element,
    { rotationY: 90 },
    {
    rotationY: 0,
    duration: 1,
    scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true
    }
    }
);
});

// anim text
const textAnim = document.querySelectorAll(".text_appear")
gsap.registerPlugin(ScrollTrigger)
textAnim.forEach((element) => {
    gsap.fromTo(element, { opacity: 0 }, { opacity: 1, filter: "drop-shadow(0 0 5px)",
    scrollTrigger: {
        trigger: element,
        start: "top 60%",
        end: "bottom 70%",
        scrub: true
    } })
})


