function getRandomChoice() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  return randomChoice;
}

function getComputerChoice() {
  let randomChoice = getRandomChoice();
  let computerChoice;
  if (randomChoice === 1) {
    computerChoice = `👊 Rock`;
  } else if (randomChoice === 2) {
    computerChoice = `✋ Paper`;
  } else {
    computerChoice = `✌️ Scissors`;
  }
  return computerChoice;
}

function updateResult(userChoice, computerChoice, result) {
  document.querySelector("#result").innerHTML = `You choose ${userChoice}. <br>
  Computer Chose ${computerChoice}. <br>
  And the result is: ${result}`;
}

function getResult(userChoice, computerChoice) {
  let result = "Unknown";
  if (userChoice === computerChoice) {
    result = "Tie";
  } else if (
    (computerChoice === "👊 Rock" && userChoice === "✌️ Scissors") ||
    (computerChoice === "✌️ Scissors" && userChoice === "✋ Paper") ||
    (computerChoice === "✋ Paper" && userChoice === "👊 Rock")
  ) {
    result = "Computer win";
  } else {
    result = "User win";
  }
  return result;
}

// Rock Button
function rockClicked() {
  const userChoice = "👊 Rock";
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

// Paper Button
function paperClicked() {
  const userChoice = "✋ Paper";
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

// Scissors Button
function scissorsClicked() {
  const userChoice = "✌️ Scissors";
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}