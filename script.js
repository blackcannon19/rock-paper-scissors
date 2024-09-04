let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

getComputerChoice();

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = prompt('Rock? Paper? Scissors?');

  if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      alert('You Lose! Paper beats Rock');
    } else if (computerChoice === 'scissors') {
      alert("'You Win! Rock beats Scissors");
    } else {
      alert("It's a tie");
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'scissors') {
      alert('You Lose! Scissors beats Paper');
    } else if (computerChoice === 'rock') {
      alert('You Win! Paper beats Rock');
    } else {
      alert("It's a tie");
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      alert('You Lose! Rock beats Scissors');
    } else if (computerChoice === 'paper') {
      alert('You Win! Paper beats Rock');
    } else {
      alert("It's a tie");
    }
  }
}

playRound();

setInterval(playRound);
