let playerText = document.querySelector('#playerText');
let restartBtn = document.querySelector('#restartBtn');
let boxes = document.querySelectorAll('.box');

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-clocks');

console.log(boxes);

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);