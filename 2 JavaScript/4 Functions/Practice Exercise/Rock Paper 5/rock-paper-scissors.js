let randomChoice;

function assignRandomChoice() {
  randomChoice = Math.floor(Math.random() * 3 + 1);
}

// Rock Button
function rockClicked() {
  assignRandomChoice();
  let computerChoiceTex;
  if (randomChoice === 1) {
    computerChoiceTex = `👊 Rock`;
  } else if (randomChoice === 2) {
    computerChoiceTex = `✋ Paper`;
  } else {
    computerChoiceTex = `✌️ Scissors`;
  }

  let result;
  if (computerChoiceTex == `👊 Rock`) {
    result = "Tie";
  } else if (computerChoiceTex == `✋ Paper`) {
    result = "Computer Won";
  } else {
    result = "User Won";
  }

  document.querySelector("#result").innerHTML = `You choose 👊 Rock. <br>
  Computer Chose ${computerChoiceTex}. <br>
  And the result is: ${result}`;
}

// Paper Button
function paperClicked() {
  assignRandomChoice();
  let computerChoiceTex;
  if (randomChoice === 1) {
    computerChoiceTex = `👊 Rock`;
  } else if (randomChoice === 2) {
    computerChoiceTex = `✋ Paper`;
  } else {
    computerChoiceTex = `✌️ Scissors` 
  }
  
  let result;
  if (computerChoiceTex == `👊 Rock`) {
    result = 'User Won';
  } else if (computerChoiceTex == `✋ Paper`) {
    result = 'Tie';
  } else {
    result = 'Computer Won';
  }

 document.querySelector('#result').innerHTML = `You choose ✋ Paper. <br>  
 Computer Chose ${computerChoiceTex}. <br>
 And Result is: ${result}`;
};

  
// Scissors Button
function scissorsClicked() {  
  assignRandomChoice();
  let computerChoiceTex;
  if (randomChoice === 1) {
    computerChoiceTex = `👊 Rock`;
  } else if (randomChoice === 2) {
    computerChoiceTex = `✋ Paper`;
  } else {
    computerChoiceTex = `✌️ Scissors` 
  }
       
  let result;
  if (computerChoiceTex == `👊 Rock`) {
    result = 'Computer Won';
  } else if (computerChoiceTex == `✋ Paper`) {
    result = 'User Won';
  } else {
    result = 'Tie';
  }
  
 document.querySelector('#result').innerHTML = `You choose ✌️ Scissors. <br>  
 Computer Chose ${computerChoiceTex}. <br>
 And Result is: ${result}`;
}