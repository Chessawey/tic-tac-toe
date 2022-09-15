"use strict";

const boxes = document.querySelectorAll(".box");
const status = document.querySelector("#status");
const choices = document.querySelector(".choices");
const boxContainer = document.querySelector("#board");
const stats = document.querySelector("#stats");
const stat = document.querySelector('#status p')
const reset = document.querySelector("#stats");

let isPlayerX = true;
let board = [
  [],
  [],
  []
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (isPlayerX) {
      box.textContent = "X";
      isPlayerX = false;
    } else {
      box.textContent = "O";
      isPlayerX = true;
    }
  });
});