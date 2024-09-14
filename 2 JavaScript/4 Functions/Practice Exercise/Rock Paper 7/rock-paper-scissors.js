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

// Rock Button
function rockClicked() {
  let computerChoice = getComputerChoice();

  let result;
  if (computerChoice == `👊 Rock`) {
    result = "Tie";
  } else if (computerChoice == `✋ Paper`) {
    result = "Computer Won";
  } else {
    result = "User Won";
  }

  document.querySelector("#result").innerHTML = `You choose 👊 Rock. <br>
  Computer Chose ${computerChoice}. <br>
  And the result is: ${result}`;
}

// Paper Button
function paperClicked() {
  let computerChoice = getComputerChoice();

  let result;
  if (computerChoice == `👊 Rock`) {
    result = "User Won";
  } else if (computerChoice == `✋ Paper`) {
    result = "Tie";
  } else {
    result = "Computer Won";
  }

  document.querySelector("#result").innerHTML = `You choose ✋ Paper. <br>  
 Computer Chose ${computerChoice}. <br>
 And Result is: ${result}`;
}

// Scissors Button
function scissorsClicked() {
  let computerChoice = getComputerChoice();

  let result;
  if (computerChoice == `👊 Rock`) {
    result = "Computer Won";
  } else if (computerChoice == `✋ Paper`) {
    result = "User Won";
  } else {
    result = "Tie";
  }

  document.querySelector("#result").innerHTML = `You choose ✌️ Scissors. <br>  
 Computer Chose ${computerChoice}. <br>
 And Result is: ${result}`;
}
