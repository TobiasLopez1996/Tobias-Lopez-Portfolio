import { gsap } from "./node_modules/gsap/src/index.js";

const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")
const navList = document.querySelectorAll(".nav-list")

hamburgerButton.addEventListener("click", display)

function display() {
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
    navList.forEach(item => item.classList.toggle("active"))
}

const darkMode = document.querySelector(".dark-mode")
const bodyElement = document.querySelector("body")
const darkElement = document.querySelectorAll(".dark-el")

darkMode.addEventListener("click", setDark)

function setDark() {
    darkMode.classList.toggle("dark")
    bodyElement.classList.toggle("dark")
    darkElement.forEach(element => element.classList.toggle("dark"))
}

function animOnLoad() {
    gsap.fromTo(".transfRight", { x: -100 }, { x: 0, duration: 1, ease: "back", stagger: .1 })
    gsap.fromTo(".transfLeft", { x: 100 }, { x: 0, duration: 1, ease: "back" })
}
window.addEventListener("DOMContentLoaded", animOnLoad)

const tapingAnimation = document.querySelector(".taping-animation")

window.addEventListener("load", tapingFunction)

function tapingFunction() {
    let textContent = tapingAnimation.textContent
    let index = 0
    let direction = 1

    function animate() {
        tapingAnimation.innerHTML = textContent.substring(0, index)

        index += direction

        if (index > textContent.length) {
            index = textContent.length
            direction = -1
        } else if (index < 0) {
            index = 0;
            direction = 1
        }

        setTimeout(() => {
            animate()
        }, 200)
    }

    animate()
}
