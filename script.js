let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length);
    const compChoice = choices[randomIndex]
    return compChoice
    
}

//console.log(getComputerChoice());


function getHumanChoice() {
    let choice = prompt("Roshambo? Type rock, paper, scissors")
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors")
        return choice;
    else {
        alert("Please enter a valid choice");
        return getHumanChoice();
    }
}

//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
    if (humanChoice === computerChoice) {
        return "Its a tie";
    } else if ((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice == "rock")) {
        return "Player wins";
    } else {
        return "Computer wins";
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

