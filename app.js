console.log(`mr. hammond, i think we're back in business`);


let start = document.querySelector('.navigation')
let restart = document.querySelector('.reset')
let colors = document.querySelectorAll('#shape');
console.log(colors);
let squareOne = document.querySelector('.color-one')
let squareTwo = document.querySelector('.color-two')
let squareThree = document.querySelector('.color-three')
let squareFour = document.querySelector('.color-four')
let shapes = [squareOne, squareTwo, squareThree, squareFour];
let currentStreak = document.querySelector('.currentScore')
let currentStreakCount = Number(document.querySelector('.currentScore').innerText);
console.log(currentStreak);

const modal = document.getElementById('modal')
const close = document.getElementById('close')



const openModal = () => {
    modal.style.display = 'block';
}
const closeModal = () => {
    modal.style.display = 'none'
}


const blink = (square) => {
    const lightUp = () => 
    square.style.opacity = 1;
    
    const lightOut = () => square.style.opacity = 0.5;
    for (let i = 1000; i < 2000; i += 1000) {
        setTimeout(lightUp, i)
        setTimeout(lightOut, i + 600)
    }
}
const userBlink = (square) => {
    const lightUp = () => square.style.opacity = 1;
    const lightOut = () => square.style.opacity = 0.5;
    lightUp()
    setTimeout(lightOut, 500) 
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

let computerChoices = [];
const computersTurn = () => {
    let randomIndex = Math.floor(Math.random() * 4);
    computerChoices.push(shapes[randomIndex])
    if (computerChoices.length === 1) {
        blink(computerChoices[0])
        start.innerText = 'HIT ME'
    } else {
        console.log(computerChoices);
        blink(computerChoices[0])
        createSequence(computerChoices)
    }
    return computerChoices;
}
const addBlinkToUserClicks = () => {
    colors.forEach(function(color) {
        color.addEventListener('click', function() { userBlink(color) })
    })
}
let userChoices = [];

const checkForMatchingClicks = (square) => {
    for (let j = 0; j < computerChoices.length; j++) {
        console.log(computerChoices[j]);
        if (square.classList.value === computerChoices[j].classList.value) {
            userChoices.push(square)
            currentStreakCount += 1;
            let count = document.createTextNode(currentStreakCount)
            console.log(typeof count)
            currentStreak.appendChild(count);
            console.log(userChoices);
            console.log('right');

        } else {
            console.log('wrong')
            start.style.opacity = 0;
            break;
        }
    }
}

const playAgain = () => {
    computerChoices = [];
    start.style.opacity = 1;
    computersTurn();
}

//currentStreak.appendChild(currentStreakCount);
setTimeout(openModal, 1000);
addBlinkToUserClicks();
start.addEventListener('click', computersTurn)
restart.addEventListener('click', playAgain)
squareOne.addEventListener('click',function() {checkForMatchingClicks(squareOne)});
//squareOne.addEventListener('click', blink)
squareTwo.addEventListener('click',function() {checkForMatchingClicks(squareTwo)});
squareThree.addEventListener('click',function() {checkForMatchingClicks(squareThree)});
squareFour.addEventListener('click',function() {checkForMatchingClicks(squareFour)});
close.addEventListener('click', closeModal);
    

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




