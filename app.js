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
let buttonOne = document.querySelector('.color-one');

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

const lightUp = () => 
    buttonOne.style.opacity = 1;

const lightOut = () => buttonOne.style.opacity = 0.2;

const fade = () => {
    setTimeout(lightUp, 200)
    //setTimeout(lightOut, 200)
}


start.addEventListener('click', fade)