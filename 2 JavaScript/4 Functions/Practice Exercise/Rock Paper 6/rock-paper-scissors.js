let randomChoice;
let computerChoiceText;

function assignRandomChoice() {
  randomChoice = Math.floor(Math.random() * 3 + 1);
}

function computeComputerChoice() {
  if (randomChoice === 1) {
    computerChoiceText = `👊 Rock`;
  } else if (randomChoice === 2) {
    computerChoiceText = `✋ Paper`;
  } else {
    computerChoiceText = `✌️ Scissors`;
  }
}

// Rock Button
function rockClicked() {
  assignRandomChoice();
  computeComputerChoice();

  let result;
  if (computerChoiceText == `👊 Rock`) {
    result = "Tie";
  } else if (computerChoiceText == `✋ Paper`) {
    result = "Computer Won";
  } else {
    result = "User Won";
  }

  document.querySelector("#result").innerHTML = `You choose 👊 Rock. <br>
  Computer Chose ${computerChoiceText}. <br>
  And the result is: ${result}`;
}

// Paper Button
function paperClicked() {
  assignRandomChoice();
  computeComputerChoice();

  let result;
  if (computerChoiceText == `👊 Rock`) {
    result = "User Won";
  } else if (computerChoiceText == `✋ Paper`) {
    result = "Tie";
  } else {
    result = "Computer Won";
  }

  document.querySelector("#result").innerHTML = `You choose ✋ Paper. <br>  
 Computer Chose ${computerChoiceText}. <br>
 And Result is: ${result}`;
}

// Scissors Button
function scissorsClicked() {
  assignRandomChoice();
  computeComputerChoice();

  let result;
  if (computerChoiceText == `👊 Rock`) {
    result = "Computer Won";
  } else if (computerChoiceText == `✋ Paper`) {
    result = "User Won";
  } else {
    result = "Tie";
  }

  document.querySelector("#result").innerHTML = `You choose ✌️ Scissors. <br>  
 Computer Chose ${computerChoiceText}. <br>
 And Result is: ${result}`;}
