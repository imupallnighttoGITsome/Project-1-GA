console.log(`mr. hammond, i think we're back in business`);

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

let start = document.querySelector('.navigation')
let colors = document.querySelectorAll('#shape');
let squareOne = document.querySelector('.color-one')
let squareTwo = document.querySelector('.color-two')
let squareThree = document.querySelector('.color-three')
let squareFour = document.querySelector('.color-four')
let shapes = [squareOne, squareTwo, squareThree, squareFour];
console.log(colors);

const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')
const close = document.getElementById('close')



const openModal = () => {
    modal.style.display = 'block';
  }
  const closeModal = () => {
    modal.style.display = 'none'
  }
  







//change shape to full opacity 
const blink = (square) => {
    //change shape to original opacity
    const lightUp = () => 
    square.style.opacity = 1;
    
    const lightOut = () => square.style.opacity = 0.2;
    //creates a blink effect once over 2 seconds
    for (let i = 1000; i < 2000; i += 1000) {
        setTimeout(lightUp, i)
        setTimeout(lightOut, i + 600)
    }
}

let computerChoices = [];
let time = 1000;
//let num = 5;
const computersTurn = () => {
        //num -= 1;
    let randomIndex = Math.floor(Math.random() * 4);
    computerChoices.push(randomIndex);
    console.log(computerChoices);
    //console.log(randomIndex);
    if (computerChoices.length === 1) {
        blink(shapes[randomIndex]);
    } else { 
        for (let i = 0; i < computerChoices.length; i++) {
            if (shapes.indexOf(squareOne) === computerChoices[i]) {
                setTimeout(function() {blink(squareOne)}, 1000)
                continue;
            }
            if (shapes.indexOf(squareTwo) === computerChoices[i]) {
                setTimeout(function() {blink(squareOne)}, 1000)
            }
            if (shapes.indexOf(squareThree) === computerChoices[i]) {
                setTimeout(function() {blink(squareOne)}, 1000)
            }
            if (shapes.indexOf(squareFour) === computerChoices[i]) {
                setTimeout(function() {blink(squareOne)}, 1000)
            }
        }
        //blink(computerCho[0])
        //setTimeout(function() {blink(shapes[randomIndex])}, time);
    }
}



start.addEventListener('click', computersTurn);
openBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);






//fade(lightUp(buttonOne), lightOut(buttonOne));
//start.addEventListener('click', squareOneBlink);


// blink(squareOne);
// setTimeout(function() { blink(squareTwo)}, 1000);
// setTimeout(function() { blink(squareThree)}, 2000);
// setTimeout(function() { blink(squareFour)}, 3000);