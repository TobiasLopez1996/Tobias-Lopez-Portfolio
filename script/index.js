

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

// Fonction pour activer ou désactiver le mode sombre et enregistrer son état
function toggleDarkMode() {
    darkMode.classList.toggle("dark");
    bodyElement.classList.toggle("dark");
    darkElement.forEach(element => element.classList.toggle("dark"));

    // Enregistrement de l'état du mode sombre dans le stockage local
    const isDarkModeEnabled = bodyElement.classList.contains("dark");
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
}

// Ajouter un écouteur d'événement sur le bouton darkMode
darkMode.addEventListener("click", toggleDarkMode);

// Vérifier l'état du mode sombre lors du chargement de la page
function checkDarkMode() {
    const isDarkModeEnabled = localStorage.getItem("darkModeEnabled");
    if (isDarkModeEnabled === "true") {
    toggleDarkMode();
    }
}

// Appeler la fonction checkDarkMode() lorsque la page a fini de charger
window.addEventListener("DOMContentLoaded", checkDarkMode);

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
