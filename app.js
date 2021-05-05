console.log(`mr. hammond, i think we're back in business`);

//make button to start pattern
//once play has begun change start button to say hit me
//if computer has lit up one shape, then start button text changes
//otherwise the button says start

//run over all buttons
let start = document.querySelector('.navigation')
let shape = document.querySelector('.color-one');
let colors = document.querySelectorAll('#shape');
console.log(colors);
const lightUpSequence = () => {
   


    for (let i = 0; i < colors.length; i+= 0.5) {
        let button = colors[i];
        console.log(button);
        function lightUp() { 
            button.style.opacity = 1
        }
        function lightOut() { button.style.opacity = 0.5 }
        fade(button);
        
    }
    function fade(button) {
        for (let j = 900; j < 1800; j += 900) {
        setTimeout(function() { lightUp(button) }, j)
        setTimeout(function() { lightOut(button) }, j + 600)
        }
    }
}
//make button change appearance for one second at a time
    //select current button
    //make action to change appearance  
    //if opacity is low  change opacity to full

//keep count of how many lights in the pattern




//change change shape to full opacity 
//const lightUp = () => 
    //colors[i].style.opacity = 1;
//change shape to original opacity
//const lightOut = () => buttonOne.style.opacity = 0.5;
//creates a blink effect once over 2 seconds
// const fade = (button) => {
//     for (let i = 900; i < 1800; i += 900) {
//     setTimeout(lightUp, i)
//     setTimeout(lightOut, i + 600)
//     }
// }


start.addEventListener('click', lightUpSequence);





// function fade() {
//     setInterval(light, 150)
// }


// function light() {
//     let startingOpacity = Number(buttonOne.style.opacity);
//     if (startingOpacity < 1) {
//         startingOpacity += 0.2;
//         buttonOne.style.opacity = startingOpacity;  
//     } else if (startingOpacity === 1) {
//        startingOpacity -= 0.2;
//        buttonOne.style.opacity = 0.2;
       
//     } 
//     clearInterval();
// }