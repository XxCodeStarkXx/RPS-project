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
    let choice = prompt("Roshambo? Type rock, paper, scissors");
    if (choice === "rock" || choice === "paper" || choice === "scissors")
        return choice;
    else {
        alert("Please enter a valid choice");
        return getHumanChoice();
    }
}

//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    console.log(`You picked ${humanChoice}`);
    console.log(`Computer picked ${computerChoice}`);
    if (humanChoice === computerChoice) {
        return "Its a tie";
    } else if ((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice == "rock") || (humanChoice === "scissors" && computerChoice == "paper")) {
        humanScore++
        return "Player wins";
    } else {
        computerScore++
        return "Computer wins";
    }
    
}

const humanSelection = getHumanChoice();

function  playGame() {
    for(let i = 0; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
}
    if (humanScore > computerScore) {
        return "you win"
    } else if (computerScore > humanScore) {
        return "you loose" 
    } else {
        return "you tied"
    }
}

console.log(playGame());
