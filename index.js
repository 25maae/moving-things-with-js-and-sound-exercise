"use strict";

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left = "180px"; // Start i midten horisontalt
dodger.style.bottom = "180px"; // Start i midten vertikalt

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
  console.log(e.key); // Viser hvilken tast der er trykket
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    playSoundOnMovement();
    playSoundOnGameOver();
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", ""); // unchanged
  const left = parseInt(leftNumbers, 10); // unchanged

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
    playSoundOnMovement();
    playSoundOnGameOver();
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < 360) {
    dodger.style.bottom = `${bottom + 1}px`;
    playSoundOnMovement();
    playSoundOnGameOver
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
    playSoundOnMovement();
    playSoundOnGameOver();
  }
}

// Afspiller lyde ved bevægelse
const moveSound = document.getElementById("movementSound");

function playSoundOnMovement() {
  moveSound.currentTime = 0;
  moveSound.play();
}

// Afspiller lyde ved kollation med væg
const gameoverSound = document.getElementById("gameoverSound");

function playSoundOnGameOver() {
  gameoverSound.currentTime = 0;
  gameoverSound.play();
}
