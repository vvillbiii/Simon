//check if playerPattern matches computerPattern
function patternMatch(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] === arr2[i]) {
      score++;
    } else if (arr1[i] !== arr2[i]) {
      gameScore.innerText = `Game Over! Start Again`;
    }
  }
  score++;
  gameScore.innerText = `Score: ${score}`;
  winner();
}

//on first move push computer move to computerPattern
//then loop over computerPattern to create next move
for (let i = 0; i <= computerPattern.length; i++) {}
//if computerPattern.length reaches 10 then stop pattern.

function winner() {
  if (gameScore.innerText === "Score: 10") {
    gameScore.innerText = "You Win!";
  }
}

let randomPattern = setInterval(colorPattern, 700);

let patternCount = 0;
function colorPattern() {
  const colors = ["green", "red", "yellow", "blue"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  if (randomColor === "green") {
    $green.fadeIn(200).fadeOut(200).fadeIn(200);
    computerPattern.push("green");
  } else if (randomColor === "red") {
    $red.fadeIn(200).fadeOut(200).fadeIn(200);
    computerPattern.push("red");
  } else if (randomColor === "yellow") {
    $yellow.fadeIn(200).fadeOut(200).fadeIn(200);
    computerPattern.push("yellow");
  } else if (randomColor === "blue") {
    $blue.fadeIn(200).fadeOut(200).fadeIn(200);
    computerPattern.push("blue");
  }
  if (patternCount === computerPattern.length) {
    clearInterval(randomPattern);
  }
}

//light verisons of colors
//   green.style.backgroundColor = "#47ff47";
//   red.style.backgroundColor = "#ff5c5c";
//   yellow.style.backgroundColor = "#fafa96";
//   blue.style.backgroundColor = "#a3a3ff";

//show new pattern
function colorPattern() {
  if (randomColor === "green") {
    $green.fadeOut(200).fadeIn(200);
    return "green";
  } else if (randomColor === "red") {
    $red.fadeOut(200).fadeIn(200);
    return "red";
  } else if (randomColor === "yellow") {
    $yellow.fadeOut(200).fadeIn(200);
    return "yellow";
  } else if (randomColor === "blue") {
    $blue.fadeOut(200).fadeIn(200);
    return "blue";
  }
}

function checkPattern() {
  // this function checks to see if the player pressed the right button after the computer
  if (computerPattern.length === playerPattern.length) {
    //run function that adds 1 to score and add 1 to the computerPattern
    score++;
  } else {
    gameScore.innerText = `Game Over! Start Again`;
  }
}

function increasePattern(num) {
  for (let i = 1; i <= num; i++) {
    i * colorPattern();
  }
}

function tryLoop() {
  for (let color of computerPattern) {
    setTimeout(() => {
      if (color === "green") {
        $green.fadeOut(200).fadeIn(200);
      } else if (color === "red") {
        $red.fadeOut(200).fadeIn(200);
      } else if (color === "yellow") {
        $yellow.fadeOut(200).fadeIn(200);
        return "yellow";
      } else if (color === "blue") {
        $blue.fadeOut(200).fadeIn(200);
      }
      setTimeout(() => {
        if (color === "green") {
          $green.fadeOut(200).fadeIn(200);
        } else if (color === "red") {
          $red.fadeOut(200).fadeIn(200);
        } else if (color === "yellow") {
          $yellow.fadeOut(200).fadeIn(200);
          return "yellow";
        } else if (color === "blue") {
          $blue.fadeOut(200).fadeIn(200);
        }
        setTimeout(() => {
          if (color === "green") {
            $green.fadeOut(200).fadeIn(200);
          } else if (color === "red") {
            $red.fadeOut(200).fadeIn(200);
          } else if (color === "yellow") {
            $yellow.fadeOut(200).fadeIn(200);
            return "yellow";
          } else if (color === "blue") {
            $blue.fadeOut(200).fadeIn(200);
          }
        }, 1000);
      }, 700);
    }, 400);
  }
}

function tryLoop() {
  for (let color of computerPattern) {
    setTimeout(() => {
      if (color === "green") {
        $green.fadeOut(100).fadeIn(100);
      }
      if (color === "red") {
        $red.fadeOut(100).fadeIn(100);
      }
      if (color === "yellow") {
        $yellow.fadeOut(100).fadeIn(100);
      }
      if (color === "blue") {
        $blue.fadeOut(100).fadeIn(100);
      }
    }, 500);
  }
}
