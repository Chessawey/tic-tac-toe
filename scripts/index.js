const playerText = document.querySelector('#playerText');
const restartBtn = document.querySelector('#restartBtn');
const boxes = document.querySelectorAll('.box');
// const history = document.querySelector('#history');
const newGameBtn = document.querySelector('.new-game');
const moveHistory = document.querySelector('#moves > ol');
// const moves = document.querySelector('#moves');
const xScore = document.querySelector(".xScore")
const oScore = document.querySelector(".oScore")


let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');

console.log(boxes);

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);
let scoreOfX = 0
let scoreOfO = 0
let gameOver = false
let historyList = []
let counter = 0

const startGame = () => {
  boxes.forEach(box => box.addEventListener('click', boxClicked));
}


function boxClicked(e) {
  const id = e.target.id
  counter++;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    historyList.push(JSON.parse(JSON.stringify(spaces)))
    // if 

    if (playerHasWon() !== false) {
      playerText.textContent = `${currentPlayer} has Won!`;
      let winning_blocks = playerHasWon();
      winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator);
      boxes.forEach((box) => {
        box.style.pointerEvents = "none"
      })
      if (currentPlayer === X_TEXT) {
        scoreOfX++
      } else {
        scoreOfO++
      }
      xScore.textContent = `X-SCORE: ${scoreOfX}`
      oScore.textContent = `O-SCORE: ${scoreOfO}`
      return
    }

  }
  currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function playerHasWon() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;

    if (spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {
      return [a, b, c];
    }
  }
  return false;
}

restartBtn.addEventListener('click', restart);

function restart() {
  spaces.fill(null);

  boxes.forEach(box => {
    box.innerText = '';
    box.style.backgroundColor = '';
    box.style.pointerEvents = "auto"
  })

  gameOver = false
  historyList = []
  counter = 0

  playerText = 'Tic Tac Toe';

  currentPlayer = X_TEXT;
}

startGame()

const previous = document.querySelector(".previous")
const next = document.querySelector(".next")

previous.addEventListener("click", () => {
  counter--;
  // boxes.forEach((box) => {
  //   spaces.forEach((space) => {
  //     box.textContent = historyList[counter -1][box]
  //   })
  // })
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = historyList[counter - 1][i]
  }
})

next.addEventListener("click", () => {
  counter++;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = historyList[counter - 1][i]
  }
})

function showButtons() {
  if (playerHasWon() === true) {
    previous.classList.add('show');
    next.classList.add('show');
  }
}

showButtons();