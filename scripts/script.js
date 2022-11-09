// for (let i = 1; i < 11; i++) {
//     console.log(2**i)
// }

// let i = 1;
// while (i < 11) {
//     console.log(Math.pow(2, i)); //2**i
//     i++;
// }

let userInput;
let numberedInput;
do{
    userInput = prompt("what is your name?");
    numberedInput = Number(userInput)
    console.log(Number (userInput));
} while (!isNaN(numberedInput));

alert(`Hello ${userInput}`)








