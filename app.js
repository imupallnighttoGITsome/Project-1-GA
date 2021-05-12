console.log(`mr. hammond, i think we're back in business`);


let start = document.querySelector('.navigation')
let restart = document.querySelector('.reset')
let check = document.querySelector('.checker')
let colors = document.querySelectorAll('#shape')
let squareOne = document.querySelector('.color-one')
let squareTwo = document.querySelector('.color-two')
let squareThree = document.querySelector('.color-three')
let squareFour = document.querySelector('.color-four')
let shapes = [squareOne, squareTwo, squareThree, squareFour]
let currentStreak = document.querySelector('.currentScore')
let highScore = document.querySelector('.highScore')
let gameOver = document.querySelector('.game-over')
let computerChoices = []
let userChoices = []
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
    userChoices = [];
    start.style.opacity = 0;
    console.log(computerChoices);
    keepScore()
    if (computerChoices.length === 1) {
        start.innerText = 'HIT ME'
        blink(computerChoices[0])
    } else {
        blink(computerChoices[0])
        createSequence(computerChoices)
    }
    return computerChoices;
}

let time = 2000;
const userClicks = async(square) => {
    userChoices.push(square)
    await pause(time)
    time += 1000
    checkClicks(computerChoices, userChoices)
}

const keepScore = () => {
    count += 1;
    currentStreak.textContent = `${count}`
}

const checkClicks = (arr1, arr2) => {
    if (arr1.every((choice, index) => choice === arr2[index])) {
        //alert(`You're radical! Click 'Hit Me' to keep this streak goin'`)
        start.style.opacity = 1
    } else {
        gameOver.style.display = 'block'
        gameOver.style.marginTop = "40px"
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
    count = 0
    computersTurn()
    start.style.opacity = 1
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
    

//change shape to full opacity
//change shape to original opacity
//creates a blink effect once over 2 seconds


//make button to start pattern
//once play has begun change start button to say hit me
//if computer has lit up one shape, then start button text changes
//otherwise the button says start

//run over all buttons
//make button change appearance for one second at a time
//select current button
//make action to change appearance  
//if opacity is low  change opacity to full

//keep count of how many lights in the pattern

// if (square.classList.value !== computerChoices[j].classList.value) {
//     console.log(false)
// } else {
//     console.log(true)
//  //start.style.opacity = 0;
// //         break;

//}  



    // let currentCompClicks = JSON.stringify(computerChoices.classList);
    // console.log(currentCompClicks)
    // let currentUserClicks = JSON.stringify(userChoices);
    // console.log(currentUserClicks)
    // if (currentCompClicks !== currentUserClicks) {
    //     start.style.opacity = 0;
    //     console.log('betterlucknexttime')
    // } else {
    //     console.log('uonamadstreak')
    // }
    // for (let j = 0; j < computerChoices.length; j++) {
    //     if (computerChoices[j].classList.value !== userChoices[j].classList.value) {
    //         console.log('sorry')
    //         break;
    //     }
    //     if (computerChoices[j].classList.value === userChoices[j].classList.value) { 
    //             console.log('look at you, push hit me to keep on truckin')
    //             return true;
    //         }
    //     }