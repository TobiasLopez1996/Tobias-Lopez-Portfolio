let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "player's name",
    chips: 200
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {  
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum === 21) {
        message = "You've got BlackJack !"
        hasBlackJack = true
    } else if (sum < 21) {
        message = "Do you want a new card ?"
        isAlive = true
    } else {
        message = "You are out of the game !"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum : " + sum

    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " - "
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}