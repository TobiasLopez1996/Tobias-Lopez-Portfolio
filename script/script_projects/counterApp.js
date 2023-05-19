const countEl = document.querySelector("#count-el")
let count = 0

function add() {
    count++
    countEl.textContent = count
}

function subtract() {
    count--
    countEl.textContent = count
}

let saveEl = document.querySelector("#save-el")
function save() {
    saveEl.textContent += " " + count + " ; "
    count = 0
    countEl.textContent = 0
}