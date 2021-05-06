console.log(`mr. hammond, i think we're back in business`);

//make button to start pattern
//once play has begun change start button to say hit me
//if computer has lit up one shape, then start button text changes
//otherwise the button says start

//run over all buttons

let start = document.querySelector('.navigation')
//let shape = document.querySelector('.color-one');
let colors = document.querySelectorAll('#shape');
let squareOne = document.querySelector('.color-one')
let squareTwo = document.querySelector('.color-two')
let squareThree = document.querySelector('.color-three')
let squareFour = document.querySelector('.color-four')
let shapes = [squareOne, squareTwo, squareThree, squareFour];
console.log(colors);




//console.log(shapes.indexOf( squareTwo));



//make button change appearance for one second at a time
//select current button
//make action to change appearance  
//if opacity is low  change opacity to full

//keep count of how many lights in the pattern




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
const computersTurn = () => {
    let randomIndex = Math.floor(Math.random() * 4);
    computerChoices.push(randomIndex);
    console.log(computerChoices);
    //console.log(randomIndex);
    if (computerChoices.length === 1) {
        blink(shapes[randomIndex]);
    } else {
    //randomIndex = Math.floor(Math.random() * 4);
    //console.log(randomIndex);
    let startingLight = shapes.indexOf()
    blink(computerCho[0])
    setTimeout(function() {blink(shapes[randomIndex])}, time);
    }
    //randomIndex = Math.floor(Math.random() * 4);
    //setTimeout(function() {blink(shapes[randomIndex])}, time + 1000);

}
//let squareOneBlink = fade(lightUp(buttonOne), lightOut(buttonOne));



//fade(lightUp(buttonOne), lightOut(buttonOne));
//start.addEventListener('click', squareOneBlink);
start.addEventListener('click', computersTurn);

// blink(squareOne);
// setTimeout(function() { blink(squareTwo)}, 1000);
// setTimeout(function() { blink(squareThree)}, 2000);
// setTimeout(function() { blink(squareFour)}, 3000);




