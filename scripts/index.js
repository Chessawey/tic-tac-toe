let playerText = document.querySelector('#playerText');
let restartBtn = document.querySelector('#restartBtn');
let boxes = document.querySelectorAll('.box');

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-clocks');

console.log(boxes);

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach(box => addEventListener('click', boxClicked));
}

function boxClicked(e) {
  const id = e.target.id

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon() !== false) {
      playerText = `${currentPlayer} has Won!`;
      let winning_blocks = playerHasWon();

      winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator);
      return
    }

    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
  }
}