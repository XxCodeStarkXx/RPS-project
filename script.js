let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const strings = ["Rock", "Paper", "Scissors"]
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

console.log(getComputerChoice());

//prompt("Rock, Paper, or Scissors?")

function getHumanChoice() {
     return prompt("Roshambo? Type: Rock, Paper, Scissors");
}

console.log(getHumanChoice());