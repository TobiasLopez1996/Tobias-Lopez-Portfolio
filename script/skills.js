const sliders = document.querySelectorAll(".slider")

sliders.forEach((slider) => {
const slides = slider.querySelectorAll(".slides")
const slideLength = slides.length;
const prevBtns = slider.querySelectorAll(".prev-btn")
const nextBtns = slider.querySelectorAll(".next-btn")

let currentSlide = 0;

function nextSlide() {
slides[currentSlide].classList.remove("active")

if (currentSlide < slideLength - 1) {
    currentSlide++;
} else {
    currentSlide = 0;
}

slides[currentSlide].classList.add("active")
}

nextBtns.forEach((nextBtn) => {
nextBtn.addEventListener("click", nextSlide)
});

function prevSlide() {
slides[currentSlide].classList.remove("active")

if (currentSlide > 0) {
    currentSlide--;
} else {
    currentSlide = slideLength - 1
}

slides[currentSlide].classList.add("active")
}

prevBtns.forEach((prevBtn) => {
prevBtn.addEventListener("click", prevSlide)
});
});



