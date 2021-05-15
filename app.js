let start = document.querySelector('#start')
let restart = document.querySelector('#reset')
let check = document.querySelector('#checker')
let colors = document.querySelectorAll('#shape')
let squareOne = document.querySelector('.color-one')
let squareTwo = document.querySelector('.color-two')
let squareThree = document.querySelector('.color-three')
let squareFour = document.querySelector('.color-four')
let shapes = [squareOne, squareTwo, squareThree, squareFour]
let currentScore = document.querySelector('.score')
let currentStreak = document.querySelector('.running-score')
let highScore = document.querySelector('.h-score')
let gameOver = document.querySelector('.game-over')
let computerChoices = []
let userChoices = []
let time = 1000
let count = 0


const modal = document.getElementById('modal')
const close = document.getElementById('close')


const openModal = () => {
    modal.style.display = 'block'
}
const closeModal = () => {
    modal.style.display = 'none'
}

const blink = (square) => {
    const lightUp = () => 
        square.style.opacity = 1
    const lightOut = () => square.style.opacity = 0.5
        for (let i = 1000; i < 2000; i += 1000) {
            setTimeout(lightUp, i)
            setTimeout(lightOut, i + 600)
    }
}

const userBlink = (square) => {
    const lightUp = () => square.style.opacity = 1
    const lightOut = () => square.style.opacity = 0.5
    lightUp()
    setTimeout(lightOut, 500) 
}

const addBlinkToUserClicks = () => {
    colors.forEach(function(color) {
        color.addEventListener('click', function() { userBlink(color) })   
        
    })
}

const pause = (milliseconds) => {
    return new Promise(resolve => setTimeout (resolve, milliseconds))
}

const createSequence = async (array) => {
    for (let i = 1; i < array.length; i++) {
        await pause(1000)
        blink(array[i]);
    }
    
}

const computersTurn = () => {
    let randomIndex = Math.floor(Math.random() * 4);
    computerChoices.push(shapes[randomIndex])
    console.log(computerChoices);
    start.innerText = 'HIT ME'
    start.style.background = 'none'
    userChoices = []
    if (computerChoices.length === 1) {
        blink(computerChoices[0])
    } else {
        blink(computerChoices[0])
        createSequence(computerChoices)
        keepScore()
        start.style.background = 'none'
    }
}

const userClicks = (square) => {
    userChoices.push(square)
    if (userChoices.length === computerChoices.length) {
        check.style.backgroundColor = 'rgb(255, 0, 212)'
    } 
}

const keepScore = () => {
    count += 1;
    currentScore.textContent = `${count}`
}

const checkClicks = (arr1, arr2) => {
    if (arr1.every((choice, index) => choice === arr2[index])) {
        start.innerText = 'HIT ME'
        start.style.opacity = 1
        start.style.backgroundColor = 'rgb(255, 0, 212)'
        check.style.background = 'none'
        alert(`You're radical! Click 'Hit Me' to keep this streak goin'`)
    } else {
        currentStreak.style.display = 'none'
        gameOver.style.display = 'block'
        gameOver.style.marginTop = "40px"
        restart.style.display = 'inline'
        start.style.display = 'none'
        alert('Better luck next time')
    }
    
}

const updateLongestStreak = () => {
    if (Number(highScore.textContent) < `${count}`) {
        highScore.textContent = `${count}`
    }
}

const playAgain = () => {
    computerChoices = []
    gameOver.style.display = 'none'
    restart.style.display = 'none'
    check.style.background = 'none'
    start.innerText = "START"
    start.style.backgroundColor = 'rgb(255, 0, 212)'
    updateLongestStreak();
    count = 0;
    currentScore.textContent = `${count}`
    currentStreak.style.display = 'inline'
    start.style.display = 'inline'
}

//setTimeout(openModal, 1000);
addBlinkToUserClicks()
start.addEventListener('click', computersTurn)
restart.addEventListener('click', playAgain)
squareOne.addEventListener('click', function() {userClicks(squareOne)})
squareTwo.addEventListener('click',function() {userClicks(squareTwo)})
squareThree.addEventListener('click',function() {userClicks(squareThree)})
squareFour.addEventListener('click',function() {userClicks(squareFour)})
check.addEventListener('click', function() {checkClicks(computerChoices, userChoices)})
close.addEventListener('click', closeModal)
    

