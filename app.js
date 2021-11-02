// Grab couple of things
const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

// Functions to add and remove mole
const randomSquare = () => {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    // Assign id of the randomposition to hitPosition to use later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

const moveMole = () => {
    let timerId = null
    timerId = setInterval(randomSquare, 400)
}

moveMole()

const countDown = ()=> {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert(`GAME OVER! Your final score is ${result}`)
    }
}

let timerId = setInterval(countDown, 1000)