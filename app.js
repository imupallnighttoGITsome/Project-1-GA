let start = document.querySelector('#start')
let restart = document.querySelector('#reset')
let check = document.querySelector('#checker')
let colors = document.querySelectorAll('#shape')
let squareOne = document.querySelector('.color-one')
let squareTwo = document.querySelector('.color-two')
let squareThree = document.querySelector('.color-three')
let squareFour = document.querySelector('.color-four')
let shapes = [squareOne, squareTwo, squareThree, squareFour]
let currentStreakCount = document.querySelector('.score')
let currentStreak = document.querySelector('.running-score')
let highScore = document.querySelector('.h-score')
let gameOver = document.querySelector('.game-over')
let pointer2 = document.querySelector('#pointer-2')
let computerChoices = []
let userChoices = []
let time = 1000;
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

const computersTurn = async() => {
    let randomIndex = Math.floor(Math.random() * 4);
    computerChoices.push(shapes[randomIndex])
    userChoices = [];
    start.style.opacity = 0;
    console.log(computerChoices);
    if (computerChoices.length === 1) {
        start.innerText = 'HIT ME'
        blink(computerChoices[0])
    } else {
        keepScore()
        currentStreak.style.opacity = 1
        currentStreakCount.style.opacity = 1
        blink(computerChoices[0])
        createSequence(computerChoices)
        await pause(time)
    }
    return computerChoices;
}

const userClicks = (square) => {
    userChoices.push(square)
    if (userChoices.length === computerChoices.length) {
        check.style.backgroundColor = 'rgb(255, 0, 212)'
    } 
}

const keepScore = () => {
    count += 1;
    currentStreakCount.textContent = `${count}`
}

const checkClicks = (arr1, arr2) => {
    check.style.boxShadow = 'none'
    if (arr1.every((choice, index) => choice === arr2[index])) {
        alert(`You're radical! Click 'Hit Me' to keep this streak goin'`)
        start.style.opacity = 1
        start.style.backgroundColor = 'rgb(255, 0, 212)'
        check.style.background = 'none'
    } else {
        check.style.opacity = 0
        currentStreak.style.opacity = 0
        currentStreakCount.style.opacity = 0
        gameOver.style.display = 'block'
        gameOver.style.marginTop = "40px"
        start.style.opacity = 0
        restart.style.opacity = 1
        alert('Better luck next time')
    }

}

const updateLongestStreak = () => {
    if (Number(highScore.textContent) < `${count}`) {
        highScore.textContent = `${count}`
    }
}

const playAgain = () => {
    updateLongestStreak();
    gameOver.style.display = 'none'
    computerChoices = []
    count = 0;
    currentStreak.textContent = `${count}`
    check.style.opacity = 1
    start.style.opacity = 1
    currentStreak.style.opacity = 0
    start.innerText = "START"
    restart.style.opacity = 0
    computersTurn()
}

setTimeout(openModal, 1000);
addBlinkToUserClicks()
start.addEventListener('click', computersTurn)
restart.addEventListener('click', playAgain)
squareOne.addEventListener('click', function() {userClicks(squareOne)})
squareTwo.addEventListener('click',function() {userClicks(squareTwo)})
squareThree.addEventListener('click',function() {userClicks(squareThree)})
squareFour.addEventListener('click',function() {userClicks(squareFour)})
check.addEventListener('click', function() {checkClicks(computerChoices, userChoices)})
close.addEventListener('click', closeModal)
    

