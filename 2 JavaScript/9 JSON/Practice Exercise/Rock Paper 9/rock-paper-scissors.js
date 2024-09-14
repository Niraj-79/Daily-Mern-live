let score = {
  computer: 0,
  user: 0,
  tie: 0,
  updateScore: function() { 
    this.saveScore();
    document.querySelector("#score").innerHTML = 
    `Score: Computer Won: ${this.computer}, User Won: ${this.user}, Tie:${this.tie}`;
  },
  saveScore: function() {
    let scoreStr = JSON.stringify(this);
    localStorage.setItem('score', scoreStr);
    console.log(`Score Saved: ${scoreStr}`);
  }
};

function resetScore() {
  console.log("Resetting Score");  
  score.computer = 0;
  score.user = 0;
  score.tie = 0;
  score.updateScore();
}

function initialize() {
  let scoreStr = localStorage.getItem('score');
  if (scoreStr) {
    let scoreVal = JSON.parse(scoreStr);
    console.log(`Previous Score Found: ${scoreStr}`);
    score.computer = scoreVal.computer;
    score.user = scoreVal.user;
    score.tie = scoreVal.tie;
    score.updateScore();
  }
}


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

function computerResult(userChoice, computerChoice) {
  let result = "Unknown";
  if (userChoice === computerChoice) {
    result = "Tie";
    score.tie++;
  } else if (
    (computerChoice === "👊 Rock" && userChoice === "✌️ Scissors") ||
    (computerChoice === "✌️ Scissors" && userChoice === "✋ Paper") ||
    (computerChoice === "✋ Paper" && userChoice === "👊 Rock")
  ) {
    result = "Computer win";
    score.computer++;
  } else {
    result = "User win";
    score.user++;
  }
  score.updateScore();
  return result;
}

// Rock Button
function rockClicked() {
  const userChoice = "👊 Rock";
  let computerChoice = getComputerChoice();
  let result = computerResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

// Paper Button
function paperClicked() {
  const userChoice = "✋ Paper";
  let computerChoice = getComputerChoice();
  let result = computerResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

// Scissors Button
function scissorsClicked() {
  const userChoice = "✌️ Scissors";
  let computerChoice = getComputerChoice();
  let result = computerResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

initialize();