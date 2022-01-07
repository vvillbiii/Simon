const squares = document.getElementsByClassName("square");
const green = document.getElementById("green");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const startBtn = document.getElementById("start");
const gameScore = document.getElementById("score");
const scoreBoard = document.getElementById("score-board");
const colors = ["green", "red", "yellow", "blue"];
const playerSubmit = document.querySelector(".player-submit");
const patternMode = document.querySelector(".pattern-mode");
const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");
//jQuery elements
$blue = $("#blue");
$red = $("#red");
$yellow = $("#yellow");
$green = $("#green");
//game variables
let playerPattern = [];
let computerPattern = [];
let score = 0;
let level = 1;

green.addEventListener("click", function () {
  $green.fadeOut(100).fadeIn(200);
  playerPattern.push("green");
});

red.addEventListener("click", function () {
  $red.fadeOut(100).fadeIn(200);
  playerPattern.push("red");
});

yellow.addEventListener("click", function () {
  $yellow.fadeOut(100).fadeIn(200);
  playerPattern.push("yellow");
});

blue.addEventListener("click", function () {
  $blue.fadeOut(100).fadeIn(200);
  playerPattern.push("blue");
});

startBtn.addEventListener("click", function () {
  level = 1;
  score = 0;
  gameScore.innerText = `Score: ${score}`;
  playerPattern = [];
  computerPattern = [];
  computerPattern.push(colorPattern());
});

playerSubmit.addEventListener("click", function () {
  for (let i = 0; i < computerPattern.length; i++) {
    if (
      playerPattern[i] === computerPattern[i] &&
      playerPattern.length === computerPattern.length
    ) {
      level++;
    } else {
      return (gameScore.innerText = "Game Over! Start Again");
    }
  }
  computerPattern.push(colors[Math.floor(Math.random() * colors.length)]);
  score++;
  gameScore.innerText = `Score: ${score}`;
  winner();
  playerPattern = [];
});

function colorPattern() {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  if (randomColor === "green") {
    $green.fadeOut(100).fadeIn(200);
    return "green";
  } else if (randomColor === "red") {
    $red.fadeOut(100).fadeIn(200);
    return "red";
  } else if (randomColor === "yellow") {
    $yellow.fadeOut(100).fadeIn(200);
    return "yellow";
  } else if (randomColor === "blue") {
    $blue.fadeOut(100).fadeIn(200);
    return "blue";
  }
}

function winner() {
  if (gameScore.innerText === "Score: 10") {
    gameScore.innerText = "You Win! 🎉";
  } else {
    repeatComputerPattern();
  }
}

function repeatComputerPattern() {
  computerPattern.forEach(function (element, index) {
    setTimeout(() => {
      if (element === "green") {
        $green.fadeOut(100).fadeIn(200);
      } else if (element === "red") {
        $red.fadeOut(100).fadeIn(200);
      } else if (element === "yellow") {
        $yellow.fadeOut(100).fadeIn(200);
      } else if (element === "blue") {
        $blue.fadeOut(100).fadeIn(200);
      }
    }, 750 * (index + 0.8));
  });
}

lightMode.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  startBtn.style.border = "2px solid black";
  playerSubmit.style.border = "2px solid black";
  darkMode.style.visibility = "visible";
  lightMode.style.visibility = "hidden";
  green.style.background = "green";
  red.style.background = "red";
  yellow.style.background = "#ffff00";
  blue.style.background = "blue";
});

darkMode.addEventListener("click", function () {
  document.body.style.backgroundColor = "#191a19";
  document.body.style.color = "white";
  startBtn.style.border = "2px solid transparent";
  playerSubmit.style.border = "2px solid transparent";
  lightMode.style.visibility = "visible";
  darkMode.style.visibility = "hidden";
  green.style.background = "#486a47";
  red.style.background = "#B33F40";
  yellow.style.background = "#F9C70C";
  blue.style.background = "#3b3e79";
});
