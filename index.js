"use strict";

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
    if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", ""); // unchanged
  const left = parseInt(leftNumbers, 10); // unchanged

    if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < 360) {
    dodger.style.bottom = `${bottom + 1}px`;
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
  }
}

const moveSound = document.getElementById("move-sound");