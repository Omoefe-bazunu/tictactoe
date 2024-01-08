

let arena = document.querySelector("#arena");
let audio = document.querySelector("#audio");
let allBoxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let playBtn = document.querySelector("#play");
let pauseBtn = document.querySelector("#pause");
const timerOption = document.querySelector("#timer");
const timerDisplay = document.querySelector("#timerDisplay");
const counterSpeed = 1000;
const pin = [ "O", "X"];
audio.src = 'bgsong.mp3';
const isplaying = arena.classList.contains('play');



function startTime(setTime) {
    const currentTime = new Date().getTime();     // Get the current time in milliseconds
    const targetTime = currentTime + (setTime * 60 * 1000);    // Calculate the time 5 minutes from now (in milliseconds)
   // Update timer display every second
   const timerInterval = setInterval(function() {
    const timeRemaining = targetTime - new Date().getTime();     // Calculate the remaining time
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));     // Convert remaining time to minutes and seconds
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    timerDisplay.innerHTML = `${minutes} : ${seconds}`;     // Display the remaining time

    // Check if the countdown is finished
    if (timeRemaining <= 0) {
        clearInterval(timerInterval); // Stop the timer
        timerDisplay.innerHTML = "00:00";
        alert("TIME IS OVER");
        setTimeout(() => {
            location.reload()}, 1000);      
    }
}, 1000); // Update every second
}

const checkTime = () => {
if(timerOption.value == 5) {
    startTime(5);
} else if (timerOption.value == 10) {
    startTime(10);
} else if (timerOption.value == 15) {
    startTime(15);
}
};

const clearArena = () => {
    allBoxes.forEach(box => {
        box.innerHTML = '';
    })
};

const goGame = () => {

let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let b5 = document.querySelector("#b5");
let b6 = document.querySelector("#b6");
let b7 = document.querySelector("#b7");
let b8 = document.querySelector("#b8");
let b9 = document.querySelector("#b9");

//Event listener for button 1

b1.addEventListener('click', () => {
    b1.innerHTML = pin[0];
    setTimeout(() => {if(b2.innerHTML == pin[0] && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b2.innerHTML && b3.innerHTML == pin[0]) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b4.innerHTML == pin[0] && !b7.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b4.innerHTML && b7.innerHTML == pin[0]) {
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && b9.innerHTML == pin[0]) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b5.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && !b9.innerHTML) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b2.innerHTML && !b3.innerHTML){
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b4.innerHTML && !b7.innerHTML){
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("CONGRATULATIONS PAL! YOU WIN") }})
    }
}, 1000)

})

//Event listener for button 2

b2.addEventListener('click', () => {
    b2.innerHTML = pin[0];
    setTimeout(() => {if(b1.innerHTML == pin[0] && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b1.innerHTML && b3.innerHTML == pin[0]) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b5.innerHTML == pin[0] && !b8.innerHTML) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && b8.innerHTML == pin[0]) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b1.innerHTML && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && !b8.innerHTML) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("CONGRATULATIONS PAL! YOU WIN") }})
    }
}, 1000)

})

//Event listener for button 3

b3.addEventListener('click', () => {
    b3.innerHTML = pin[0];
    setTimeout(() => {if(!b1.innerHTML && b2.innerHTML == pin[0]) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b1.innerHTML == pin[0] && !b2.innerHTML) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b6.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b6.innerHTML && b9.innerHTML == pin[0]) {
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && b7.innerHTML == pin[0]) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b5.innerHTML == pin[0] && !b7.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b1.innerHTML && !b2.innerHTML){
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b6.innerHTML && !b9.innerHTML){
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && !b7.innerHTML) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("CONGRATULATIONS PAL! YOU WIN") }})
    }
}, 1000)

});

//Event listener for button 4

b4.addEventListener('click', () => {
    b4.innerHTML = pin[0];
    setTimeout(() => {if(b1.innerHTML == pin[0] && !b7.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b1.innerHTML && b7.innerHTML == pin[0]) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b5.innerHTML == pin[0] && !b6.innerHTML) {
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && b6.innerHTML ==  pin[0]) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && !b6.innerHTML) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b1.innerHTML && !b7.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("CONGRATULATIONS PAL! YOU WIN") }})
    }
}, 1000)

})

//Event listener for button 5

b5.addEventListener('click', () => {
    b5.innerHTML = pin[0];
    setTimeout(() => {if(b2.innerHTML == pin[0] && !b8.innerHTML) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b2.innerHTML && b8.innerHTML == pin[0]) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b1.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b1.innerHTML && b9.innerHTML == pin[0]) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b4.innerHTML == pin[0] && !b6.innerHTML) {
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b4.innerHTML && b6.innerHTML == pin[0]) {
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b7.innerHTML && b3.innerHTML == pin[0]) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b7.innerHTML == pin[0] && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    }  else if (!b2.innerHTML && !b8.innerHTML){
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b1.innerHTML && !b9.innerHTML){
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b4.innerHTML && !b6.innerHTML){
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b7.innerHTML && !b3.innerHTML){
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("CONGRATULATIONS PAL! YOU WIN") }})
    }
}, 1000)

})

//Event listener for button 6

b6.addEventListener('click', () => {
    b6.innerHTML = pin[0];
    setTimeout(() => {if(b3.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b3.innerHTML && b9.innerHTML == pin[0]) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b4.innerHTML == pin[0] && !b5.innerHTML) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b4.innerHTML && b5.innerHTML == pin[0]) {
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b3.innerHTML && !b9.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b4.innerHTML && !b5.innerHTML) {
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    }  else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("CONGRATULATIONS PAL! YOU WIN") }})
    }
}, 1000)

})

//Event listener for button 7

b7.addEventListener('click', () => {
    b7.innerHTML = pin[0];
    setTimeout(() => {if(b4.innerHTML == pin[0] && !b1.innerHTML) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b4.innerHTML && b1.innerHTML == pin[0]) {
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b8.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b8.innerHTML && b9.innerHTML == pin[0]) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b5.innerHTML == pin[0] && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && b3.innerHTML == pin[0]) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b4.innerHTML && !b1.innerHTML){
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b8.innerHTML && !b9.innerHTML){
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("CONGRATULATIONS PAL! YOU WIN") }})
    }
}, 1000)

})

//Event listener for button 8

b8.addEventListener('click', () => {
    b8.innerHTML = pin[0];
    setTimeout(() => {if(b7.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b7.innerHTML && b9.innerHTML == pin[0]) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b2.innerHTML == pin[0] && !b5.innerHTML) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b2.innerHTML && b5.innerHTML == pin[0]) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b7.innerHTML && !b9.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b2.innerHTML && !b5.innerHTML) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    }  else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("CONGRATULATIONS PAL! YOU WIN") }})
    }
}, 1000)

})

//Event listener for button 9

b9.addEventListener('click', () => {
    b9.innerHTML = pin[0];
    setTimeout(() => {if(b3.innerHTML == pin[0] && !b6.innerHTML) {
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b3.innerHTML && b6.innerHTML == pin[0]) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b7.innerHTML == pin[0] && !b8.innerHTML) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b7.innerHTML && b8.innerHTML == pin[0]) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (b5.innerHTML == pin[0] && !b1.innerHTML) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b5.innerHTML && b1.innerHTML == pin[0]) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b3.innerHTML && !b6.innerHTML){
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b7.innerHTML && !b8.innerHTML){
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else if (!b1.innerHTML  && !b5.innerHTML) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("YOUR TURN PAL")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("CONGRATULATIONS PAL! YOU WIN") }})
    }
}, 1000)

})

 };


playBtn.addEventListener('click', () => {
    if(!isplaying) {
        arena.classList.add('play');
        audio.play();
        checkTime();
        goGame();
    }
});

pauseBtn.addEventListener('click', () => {
        arena.classList.remove('play');
        audio.pause();

    
})

resetBtn.addEventListener('click', () => {
    clearArena();
})





// winOrTie();

// }; //closing parenthesis for the goGame function






        