
let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let b5 = document.querySelector("#b5");
let b6 = document.querySelector("#b6");
let b7 = document.querySelector("#b7");
let b8 = document.querySelector("#b8");
let b9 = document.querySelector("#b9");
let arena = document.querySelector("#arena");
let audio = document.querySelector("#audio");
let allBoxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let playBtn = document.querySelector("#play");
let pauseBtn = document.querySelector("#pause");
const timerOption = document.querySelector("#timerOpt");
const timerDisplay = document.querySelector("#timerDisplay");
const counterSpeed = 1000;
const pin = [ "O", "X"];
audio.src = 'bgsong.mp3';
const isplaying = arena.classList.contains('play');

// function for the timer
const startTime = () => {
    const target = +timerDisplay.getAttribute('data-target');
    const timerDisplayStore = +timerDisplay.innerHTML;

    const increment = target/counterSpeed;

    if(timerDisplayStore < target) {
        timerDisplay.innerHTML = timerDisplayStore + increment;
        setTimeout(startTime, 1)
    } else {
        timerDisplayStore.innerHTML = target;
    }
}



const checkTime = () => {
//     switch(timerOption.value){
// 	case 5:
//         target = 300000;
//         counterSpeed = 1000;
//         startTime();
//         break;
// 	case 10:
//         break;
// 	case 15:
//         break;
// 	default: 
//             alert('TRUE');
// }

if(timerOption.value = 5) {
    timerDisplay.setAttribute('data-target', '300000')
    startTime();
} else if (timerOption.value = 10) {
    timerDisplay.setAttribute('data-target', '600000')
    startTime();
} else if (timerOption.value = 15) {
    timerDisplay.setAttribute('data-target', '900000')
    startTime();
}
};

// checkTime();

const goGame = () => {

//Event listener for button 1

b1.addEventListener('click', () => {
    b1.innerHTML = pin[0];
    setTimeout(() => {if(!b2.innerHTML && !b3.innerHTML) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (!b2.innerHTML && b3.innerHTML == pin[0]) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b2.innerHTML == pin[0] && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b2.innerHTML !==" " && b3.innerHTML !== " " && !b4.innerHTML) {
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b2.innerHTML !==" " && b3.innerHTML !== " " && b4.innerHTML !==" " && !b7.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b2.innerHTML !==" " && b3.innerHTML !== " "  && b4.innerHTML == pin[0] && !b7.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b2.innerHTML !==" " && b3.innerHTML !== " " && !b4.innerHTML && b7.innerHTML == pin[0]){
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b2.innerHTML !==" " && b3.innerHTML !== " " && b4.innerHTML !==" " && b7.innerHTML !==" " && !b5.innerHTML){
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b2.innerHTML !==" " && b3.innerHTML !== " " && b4.innerHTML !==" " && b7.innerHTML !==" " && b5.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("such is life") }})
    }
}, 1000)

})

//Event listener for button 2

b2.addEventListener('click', () => {
    b2.innerHTML = pin[0];
    setTimeout(() => {if(!b1.innerHTML && !b3.innerHTML) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (!b1.innerHTML && b3.innerHTML == pin[0]) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML == pin[0] && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML !==" " && b3.innerHTML !== " " && !b5.innerHTML) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML !==" " && b3.innerHTML !== " " && b5.innerHTML !==" " && !b8.innerHTML) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML !==" " && b3.innerHTML !== " "  && b5.innerHTML == pin[0] && !b8.innerHTML) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML !==" " && b3.innerHTML !== " " && !b5.innerHTML && b8.innerHTML == pin[0]){
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("such is life") }})
    }
}, 1000)

})

//Event listener for button 3

b3.addEventListener('click', () => {
    b3.innerHTML = pin[0];
    setTimeout(() => {if(!b1.innerHTML && !b2.innerHTML) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (!b1.innerHTML && b2.innerHTML == pin[0]) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML == pin[0] && !b2.innerHTML) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML !==" " && b2.innerHTML !== " " && !b6.innerHTML) {
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML !==" " && b2.innerHTML !== " " && b6.innerHTML !==" " && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML !==" " && b2.innerHTML !== " "  && b6.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML !==" " && b2.innerHTML !== " " && !b6.innerHTML && b9.innerHTML == pin[0]){
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML !==" " && b2.innerHTML !== " " && b6.innerHTML !==" " && b9.innerHTML !==" " && !b5.innerHTML){
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b1.innerHTML !==" " && b2.innerHTML !== " " && b6.innerHTML !==" " && b9.innerHTML !==" " && b5.innerHTML == pin[0] && !b1.innerHTML) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("such is life") }})
    }
}, 1000)

})

//Event listener for button 4

b4.addEventListener('click', () => {
    b4.innerHTML = pin[0];
    setTimeout(() => {if(!b5.innerHTML && !b6.innerHTML) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (!b5.innerHTML && b6.innerHTML == pin[0]) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b5.innerHTML == pin[0] && !b6.innerHTML) {
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b5.innerHTML !==" " && b6.innerHTML !== " " && !b1.innerHTML) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b5.innerHTML !==" " && b6.innerHTML !== " " && b1.innerHTML !==" " && !b7.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b5.innerHTML !==" " && b6.innerHTML !== " "  && b1.innerHTML == pin[0] && !b7.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b5.innerHTML !==" " && b6.innerHTML !== " " && !b1.innerHTML && b7.innerHTML == pin[0]){
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("such is life") }})
    }
}, 1000)

})

//Event listener for button 5

b5.addEventListener('click', () => {
    b5.innerHTML = pin[0];
    setTimeout(() => {if(!b4.innerHTML && !b6.innerHTML) {
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (!b4.innerHTML && b6.innerHTML == pin[0]) {
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b4.innerHTML == pin[0] && !b6.innerHTML) {
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b4.innerHTML !==" " && b6.innerHTML !== " " && !b2.innerHTML) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b4.innerHTML !==" " && b6.innerHTML !== " " && b2.innerHTML !==" " && !b8.innerHTML) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b4.innerHTML !==" " && b6.innerHTML !== " "  && b2.innerHTML == pin[0] && !b8.innerHTML) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b4.innerHTML !==" " && b6.innerHTML !== " " && !b2.innerHTML && b8.innerHTML == pin[0]){
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("such is life") }})
    }
}, 1000)

})

//Event listener for button 6

b6.addEventListener('click', () => {
    b6.innerHTML = pin[0];
    setTimeout(() => {if(!b4.innerHTML && !b5.innerHTML) {
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (!b4.innerHTML && b5.innerHTML == pin[0]) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b4.innerHTML == pin[0] && !b5.innerHTML) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b4.innerHTML !==" " && b5.innerHTML !== " " && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b4.innerHTML !==" " && b5.innerHTML !== " " && b3.innerHTML !==" " && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b4.innerHTML !==" " && b5.innerHTML !== " "  && b3.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b4.innerHTML !==" " && b5.innerHTML !== " " && !b3.innerHTML && b9.innerHTML == pin[0]){
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("such is life") }})
    }
}, 1000)

})

//Event listener for button 7

b7.addEventListener('click', () => {
    b7.innerHTML = pin[0];
    setTimeout(() => {if(!b8.innerHTML && !b9.innerHTML) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (!b8.innerHTML && b9.innerHTML == pin[0]) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b8.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b8.innerHTML !==" " && b9.innerHTML !== " " && !b4.innerHTML) {
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b8.innerHTML !==" " && b9.innerHTML !== " " && b4.innerHTML !==" " && !b1.innerHTML) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b8.innerHTML !==" " && b9.innerHTML !== " "  && b4.innerHTML == pin[0] && !b1.innerHTML) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b8.innerHTML !==" " && b9.innerHTML !== " " && !b4.innerHTML && b1.innerHTML == pin[0]){
        b4.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b8.innerHTML !==" " && b9.innerHTML !== " " && b4.innerHTML !==" " && b1.innerHTML !==" " && !b5.innerHTML){
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b8.innerHTML !==" " && b9.innerHTML !== " " && b4.innerHTML !==" " && b1.innerHTML !==" " && b5.innerHTML == pin[0] && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("such is life") }})
    }
}, 1000)

})

//Event listener for button 8

b8.addEventListener('click', () => {
    b8.innerHTML = pin[0];
    setTimeout(() => {if(!b7.innerHTML && !b9.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (!b7.innerHTML && b9.innerHTML == pin[0]) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML == pin[0] && !b9.innerHTML) {
        b9.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML !==" " && b9.innerHTML !== " " && !b5.innerHTML) {
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML !==" " && b9.innerHTML !== " " && b5.innerHTML !==" " && !b2.innerHTML) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML !==" " && b9.innerHTML !== " "  && b5.innerHTML == pin[0] && !b2.innerHTML) {
        b2.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML !==" " && b9.innerHTML !== " " && !b5.innerHTML && b2.innerHTML == pin[0]){
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("such is life") }})
    }
}, 1000)

})

//Event listener for button 9

b9.addEventListener('click', () => {
    b9.innerHTML = pin[0];
    setTimeout(() => {if(!b7.innerHTML && !b8.innerHTML) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (!b7.innerHTML && b8.innerHTML == pin[0]) {
        b7.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML == pin[0] && !b8.innerHTML) {
        b8.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML !==" " && b8.innerHTML !== " " && !b6.innerHTML) {
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML !==" " && b8.innerHTML !== " " && b6.innerHTML !==" " && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML !==" " && b8.innerHTML !== " "  && b6.innerHTML == pin[0] && !b3.innerHTML) {
        b3.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML !==" " && b8.innerHTML !== " " && !b6.innerHTML && b3.innerHTML == pin[0]){
        b6.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML !==" " && b8.innerHTML !== " " && b6.innerHTML !==" " && b3.innerHTML !==" " && !b5.innerHTML){
        b5.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else if (b7.innerHTML !==" " && b8.innerHTML !== " " && b6.innerHTML !==" " && b3.innerHTML !==" " && b5.innerHTML == pin[0] && !b1.innerHTML) {
        b1.innerHTML = pin[1];
        setTimeout(() => {alert("your turn")}, 1000);
    } else {
        allBoxes.forEach(box => { 
            if(!box.innerHTML) { 
                box.innerHTML = pin[1];
                alert("such is life") }})
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
    if(isplaying) {
        arena.classList.remove('play');
        audio.pause();
    }
})

resetBtn.addEventListener('click', () => {
    location.reload();
})


// const winOrTie = () => {if(b1.innerHTML == pin[0] && b2.innerHTML == pin[0] && b3.innerHTML == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b1.innerHTML == pin[0] && b5.innerHTML == pin[0] && b9.innerHTML == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b1.innerHTML == pin[0] && b4.innerHTML == pin[0] && b7.innerHTML == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b2.innerHTML == pin[0] && b5.innerHTML == pin[0] && b8.innerHTML == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b3.innerHTML == pin[0] && b5.innerHTML == pin[0] && b7.innerHTML == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b7.innerHTML == pin[0] && b8.innerHTML == pin[0] && b9.innerHTML == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b4.innerHTML == pin[0] && b5.innerHTML == pin[0] && b6.innerHTML == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b3.innerHTML == pin[0] && b6.innerHTML == pin[0] && b9.innerHTML == pin[0]) {
// alert ("Congratulations! you win");
// } else { 
// 	if(b1.innerHTML == pin[1] && b2.innerHTML == pin[1] && b3.innerHTML == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b1.innerHTML == pin[1] && b5.innerHTML == pin[1] && b9.innerHTML == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b1.innerHTML == pin[1] && b4.innerHTML == pin[1] && b7.innerHTML == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b2.innerHTML == pin[1] && b5.innerHTML == pin[1] && b8.innerHTML == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b3.innerHTML == pin[1] && b5.innerHTML == pin[1] && b7.innerHTML == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b7.innerHTML == pin[1] && b8.innerHTML == pin[1] && b9.innerHTML == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b4.innerHTML == pin[1] && b5.innerHTML == pin[1] && b6.innerHTML == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b3.innerHTML == pin[1] && b6.innerHTML == pin[1] && b9.innerHTML == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else { 
// 		alert ("Its a TIE");
// 		}
// }

// };

// winOrTie();

// }; //closing parenthesis for the goGame function






        