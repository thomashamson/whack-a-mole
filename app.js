const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
  // Remove mole from square
  square.forEach(className => {
    className.classList.remove('mole')
  })
  // Add mole to square and assign id
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')
  hitPosition = randomPosition.id
}

// Add to score if mole hit
square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if (id.id === hitPosition){
      result = result + 1
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countdown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime === 0 ) {
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
  }
}

let timerId = setInterval(countdown, 1000)