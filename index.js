const gameWinner = document.getElementById("gameWinner");

//Get a reference to the img element
const diceImageLeftElement = document.getElementById("diceImageLeft");
const diceImageRightElement = document.getElementById("diceImageRight");

//Get the roll button element
const rollDiceButton = document.getElementById("rollButton");

rollDiceButton.addEventListener("click", function () {
  // generate a random number between 1 and 6
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  //construct the image based on the random number result
  const imageFilenameLeft = "images/dice" + randomNumber1 + ".png";
  diceImageLeftElement.setAttribute("src", imageFilenameLeft);

  const imageFilenameRight = "images/dice" + randomNumber2 + ".png";
  diceImageRightElement.setAttribute("src", imageFilenameRight);

  if (randomNumber1 > randomNumber2) {
    gameWinner.innerHTML = "Player 1 Wins!🎉";
  } else if (randomNumber1 < randomNumber2) {
    gameWinner.innerHTML = "Player 2 Wins!🎉";
  } else {
    gameWinner.innerHTML = "It's a Draw!🎃";
  }
});
