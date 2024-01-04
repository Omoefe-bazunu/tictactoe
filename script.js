
// let b1 = document.querySelector("#b1").innerHTML;
// let b2 = document.querySelector("#b2").innerHTML;
// let b3 = document.querySelector("#b3").innerHTML;
// let b4 = document.querySelector("#b4").innerHTML;
// let b5 = document.querySelector("#b5").innerHTML;
// let b6 = document.querySelector("#b6").innerHTML;
// let b7 = document.querySelector("#b7").innerHTML;
// let b8 = document.querySelector("#b8").innerHTML;
// let b9 = document.querySelector("#b9").innerHTML;
// let allBoxes = document.querySelector(".box").innerHTML;
// let resetBtn = document.querySelector("#reset");
let playBtn = document.querySelector("#play");
let pauseBtn = document.querySelector("#pause");
// const timerOption = document.querySelector("#timerOpt");
const timerDisplay = document.querySelector("#timerDisplay");
const counterSpeed = 80000; //60 seconds ~ 1 minutes
const playing = false;
const pin = [ "O", "X"];


playBtn.addEventListener('click', startTime = () => {
    const target = +timerDisplay.getAttribute('data-target');
    const timerDisplayStore = +timerDisplay.innerHTML;

    const increment = target/counterSpeed;

    if(timerDisplayStore < target) {
        timerDisplay.innerHTML = timerDisplayStore + increment;
        setTimeout(startTime, 1)
    } else {
        timerDisplayStore.innerHTML = target;
    }
});





// playBtn.addEventListener('click', goGame());

// const goGame = () => {

// // playing = true;
// Switch(timerOption) {
// // 	case 5;
// // 		const increment = timer/counter = ;
//         break;
// // 	case 10;
// // 		timerDisplay = 
//         break;
// // 	case 15;
// // 		timerDisplay = ;
//         break;
// // 	default: timerDisplay = ;
// };

// //Event listener for button 1

// b1.addEventListener('click', () => {
// If(!b2 && !b3) {
// b2 = pin[1];
// alert("your turn");
// } else if (!b2 && b3 == pin[0]) {
// b2 = pin[1];
// alert("your turn");
// } else if (b2 == pin[0] && !b3) {
// b3 = pin[1];
// alert("your turn");
// } else if (b2 !==" " && b3 !== " " && !b4) {
// b4 = pin[1];
// alert("your turn");
// } else if (b2 !==" " && b3 !== " " && b4 !==" " && !b7) {
// b7 = pin[1];
// alert("your turn");
// } else if (b2 !==" " && b3 !== " "  && b4 == pin[0] && !b7) {
// b7 = pin[1];
// alert("your turn");
// } else if (b2 !==" " && b3 !== " " && !b4 && b7 == pin[0]) {
// b4 = pin[1];
// alert("your turn"); 
// } else if (b2 !==" " && b3 !== " " && b4 !==" " && b7 !==" " && !b5)  {
// b5 = pin[1];
// alert("your turn");
// } else if (b2 !==" " && b3 !== " " && b4 !==" " && b7 !==" " && b5 == pin[0] && !b9) {
// b9 = pin[1];
// alert("your turn");
// } else {
// allBoxes.forEach(box => { if(!box) { box = pin[1];
// alert("your turn");}});
// }
// });

// //Event listener for button 2

// b2.addEventListener('click', () => {
// If(!b1 && !b3) {
// b1 = pin[1];
// alert("your turn");
// } else if (!b1 && b3 == pin[0]) {
// b1 = pin[1];
// alert("your turn");
// } else if (b1 == pin[0] && !b3) {
// b3 = pin[1];
// alert("your turn");
// } else if (b1 !==" " && b3 !== " " && !b5) {
// b5 = pin[1];
// alert("your turn");
// } else if (b1 !==" " && b3 !== " " && b5 !==" " && !b8) {
// b8 = pin[1];
// alert("your turn");
// } else if (b1 !==" " && b3 !== " "  && b5 == pin[0] && !b8) {
// b8 = pin[1];
// alert("your turn");
// } else {
// allBoxes.forEach(box => { if(!box) { box = pin[1];
// alert("your turn");}});
// }
// });

// //Event listener for button 3

// b3.addEventListener('click', () => {
// If(!b1 && !b2) {
// b1 = pin[1];
// alert("your turn");
// } else if (!b1 && b2 == pin[0]) {
// b1 = pin[1];
// alert("your turn");
// } else if (b1 = pin[0] && !b2) {
// b2 = pin[1];
// alert("your turn");
// } else if (b1 !==" " && b2 !== " " && !b6) {
// b6 = pin[1];
// alert("your turn");
// } else if (b1 !==" " && b2 !== " " && b6 !==" " && !b9) {
// b9 = pin[1];
// alert("your turn");
// } else if (b1 !==" " && b2 !== " "  && b6 == pin[0] && !b9) {
// b9 = pin[1];
// alert("your turn");
// } else if (b1 !==" " && b2 !== " " && !b6 && b9 == pin[0]) {
// b6 = pin[1];
// alert("your turn"); 
// } else if (b1 !==" " && b2 !== " " && b6 !==" " && b9 !==" " && !b5)  {
// b5 = pin[1];
// alert("your turn");
// } else if (b1 !==" " && b2 !== " " && b6 !==" " && b9 !==" " && b5 == pin[0] && !b1) {
// b1 = pin[1];
// alert("your turn");
// } else {
// allBoxes.forEach(box => { if(!box) { box = pin[1];
// alert("your turn");}});
// }
// });

// //Event Listener for box 4

// b4.addEventListener('click', () => {
// If(!b5 && !b6) {
// b5 = pin[1];
// alert("your turn");
// } else if (!b5 && b6 == pin[0]) {
// b5 = pin[1];
// alert("your turn");
// } else if (b5 = pin[0] && !b6) {
// b6 = pin[1];
// alert("your turn");
// } else if (b5 !==" " && b6 !== " " && !b1 && !b7) {
// b1 = pin[1];
// alert("your turn");
// } else if (b5 !==" " && b6 !== " " && b1 !==" " && !b7) {
// b7 = pin[1];
// alert("your turn");
// } else if (b5 !==" " && b6 !== " "  && b1 == pin[0] && !b7) {
// b7 = pin[1];
// alert("your turn");
// } else if (b5 !==" " && b6 !== " " && !b1 && !b7 !==" ") {
// b1 = pin[1];
// alert("your turn"); 
// } else if (b5 !==" " && b6 !== " " && !b1 && b7 == pin[0]) {
// b1 = pin[1];
// alert("your turn"); 
// } else {
// allBoxes.forEach(box => { if(!box) { box = pin[1];
// alert("your turn");}});
// }
// });

// //Event Listener for box 5

// b5.addEventListener('click', () => {
// If(!b2 && !b8) {
// b2 = pin[1];
// alert("your turn");
// } else if (!b2 && b8 == pin[0]) {
// b2 = pin[1];
// alert("your turn");
// } else if (b2 = pin[0] && !b8) {
// b8 = pin[1];
// alert("your turn");
// } else if (b2 !==" " && b8 !== " " && !b4 && !b6) {
// b4 = pin[1];
// alert("your turn");
// } else if (b2 !==" " && b8 !== " " && b4 !==" " && !b6) {
// b6 = pin[1];
// alert("your turn");
// } else if (b2 !==" " && b8 !== " "  && b4 == pin[0] && !b6) {
// b6 = pin[1];
// alert("your turn");
// } else if (b2 !==" " && b8 !== " " && !b4 && !b6 !==" ") {
// b4 = pin[1];
// alert("your turn"); 
// } else if (b2 !==" " && b8 !== " " && !b4 && b6 == pin[0]) {
// b4 = pin[1];
// alert("your turn"); 
// } else {
// allBoxes.forEach(box => { if(!box) { box = pin[1];
// alert("your turn");}});
// }
// });


// //Event Listener for box 6

// b6.addEventListener('click', () => {
// If(!b4 && !b5) {
// b4 = pin[1];
// alert("your turn");
// } else if (!b4 && b5 == pin[0]) {
// b4 = pin[1];
// alert("your turn");
// } else if (b4 = pin[0] && !b5) {
// b5 = pin[1];
// alert("your turn");
// } else if (b4 !==" " && b5 !== " " && !b3 && !b9) {
// b3 = pin[1];
// alert("your turn");
// } else if (b4 !==" " && b5 !== " " && b3 !==" " && !b9) {
// b9 = pin[1];
// alert("your turn");
// } else if (b4 !==" " && b5 !== " "  && b3 == pin[0] && !b9) {
// b9 = pin[1];
// alert("your turn");
// } else if (b4 !==" " && b5 !== " " && !b3 && !b9 !==" ") {
// b3 = pin[1];
// alert("your turn"); 
// } else if (b4 !==" " && b5 !== " " && !b3 && b9 == pin[0]) {
// b3 = pin[1];
// alert("your turn"); 
// } else {
// allBoxes.forEach(box => { if(!box) { box = pin[1];
// alert("your turn");}});
// }
// });

// //Event listener for button 7

// b7.addEventListener('click', () => {
// If(!b8 && !b9) {
// b8 = pin[1];
// alert("your turn");
// } else if (!b8 && b9 == pin[0]) {
// b8 = pin[1];
// alert("your turn");
// } else if (b8 = pin[0] && !b9) {
// b9 = pin[1];
// alert("your turn");
// } else if (b8 !==" " && b9 !== " " && !b4) {
// b4 = pin[1];
// alert("your turn");
// } else if (b8 !==" " && b9 !== " " && b4 !==" " && !b1) {
// b1 = pin[1];
// alert("your turn");
// } else if (b8 !==" " && b9 !== " "  && b4 == pin[0] && !b1) {
// b1 = pin[1];
// alert("your turn");
// } else if (b8 !==" " && b9 !== " " && !b4 && b1 == pin[0]) {
// b4 = pin[1];
// alert("your turn"); 
// } else if (b8 !==" " && b9 !== " " && b4 !==" " && b1 !==" " && !b5)  {
// b5 = pin[1];
// alert("your turn");
// } else if (b8 !==" " && b9 !== " " && b4 !==" " && b1 !==" " && b5 == pin[0] && !b3) {
// b3 = pin[1];
// alert("your turn");
// } else {
// allBoxes.forEach(box => { if(!box) { box = pin[1];
// alert("your turn");}});
// }
// });

// //Event listener for button 8

// b8.addEventListener('click', () => {
// If(!b7 && !b9) {
// b7 = pin[1];
// alert("your turn");
// } else if (!b7 && b9 == pin[0]) {
// b7 = pin[1];
// alert("your turn");
// } else if (b7 = pin[0] && !b9) {
// b9 = pin[1];
// alert("your turn");
// } else if (b7 !==" " && b9 !== " " && !b5) {
// b5 = pin[1];
// alert("your turn");
// } else if (b7 !==" " && b9 !== " " && b5 !==" " && !b2) {
// b2 = pin[1];
// alert("your turn");
// } else if (b7 !==" " && b8 !== " "  && b5 == pin[0] && !b2) {
// b2 = pin[1];
// alert("your turn");
// } else {
// allBoxes.forEach(box => { if(!box) { box = pin[1];
// alert("your turn");}});
// }
// });

// //Event listener for button 9

// b9.addEventListener('click', () => {
// If(!b7 && !b8) {
// b7 = pin[1];
// alert("your turn");
// } else if (!b7 && b8 == pin[0]) {
// b7 = pin[1];
// alert("your turn");
// } else if (b7 = pin[0] && !b8) {
// b8 = pin[1];
// alert("your turn");
// } else if (b7 !==" " && b8 !== " " && !b6) {
// b6 = pin[1];
// alert("your turn");
// } else if (b7 !==" " && b8 !== " " && b6 !==" " && !b3) {
// b3 = pin[1];
// alert("your turn");
// } else if (b7 !==" " && b8 !== " "  && b6 == pin[0] && !b3) {
// b3 = pin[1];
// alert("your turn");
// } else if (b7 !==" " && b8 !== " " && !b6 && b3 == pin[0]) {
// b6 = pin[1];
// alert("your turn"); 
// } else if (b7 !==" " && b8 !== " " && b6 !==" " && b3 !==" " && !b5)  {
// b5 = pin[1];
// alert("your turn");
// } else if (b7 !==" " && b8 !== " " && b6 !==" " && b3 !==" " && b5 == pin[0] && !b1) {
// b1 = pin[1];
// alert("your turn");
// } else {
// allBoxes.forEach(box => { if(!box) { box = pin[1];
// alert("your turn");}});
// }
// });


// If(b1 == pin[0] && b2 == pin[0] && b3 == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b1 == pin[0] && b5 == pin[0] && b9 == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b1 == pin[0] && b4 == pin[0] && b7 == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b2 == pin[0] && b5 == pin[0] && b8 == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b3 == pin[0] && b5 == pin[0] && b7 == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b7 == pin[0] && b8 == pin[0] && b9 == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b4 == pin[0] && b5 == pin[0] && b6 == pin[0]) {
// alert ("Congratulations! you win");
// } else if (b3 == pin[0] && b6 == pin[0] && b9 == pin[0]) {
// alert ("Congratulations! you win");
// }; else { 
// 	If(b1 == pin[1] && b2 == pin[1] && b3 == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b1 == pin[1] && b5 == pin[1] && b9 == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b1 == pin[1] && b4 == pin[1] && b7 == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b2 == pin[1] && b5 == pin[1] && b8 == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b3 == pin[1] && b5 == pin[1] && b7 == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b7 == pin[1] && b8 == pin[1] && b9 == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b4 == pin[1] && b5 == pin[1] && b6 == pin[1]) {
// 		alert ("Sorry, you lose");
// 	} else if (b3 = pin[1] && b6 = pin[1] && b9 = pin[1]) {
// 		alert ("Sorry, you lose");
// 	}; else { 
// 		alert ("Its a TIE");
// 		playing = false };
// };

// }; //closing parenthesis for the goGame function


// // pauseBtn.addEventListerner('click', () => {
// // if(playing) {
// // timerDisplay =
// // playing = false;
// // }});





        