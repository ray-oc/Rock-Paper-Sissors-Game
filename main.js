const game = () => {
  const userInput = prompt("Enter rock,paper,scissors: ");
  const computer = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const pc = computer[randomIndex];

  if (pc === userInput) {
    console.log("Tie Game!");
  } else if (
    (pc === "rock" && userInput === "paper") ||
    (pc === "scissors" && userInput === "rock") ||
    (pc === "paper" && userInput === "scissors")
  ) {
    console.log("You win the Game! Congrats.");
  } else {
    console.log("Computer Wins! I am sorry you luck is trash.");
  }

  const playAgain = prompt("Play Again?(yes/no) ");

  if (playAgain === "yes") {
    game();
  } else {
    console.log("Thanks for playing!");
  }
};

game();
