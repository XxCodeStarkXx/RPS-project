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
    } else if ((humanChoice === "rock" && computerChoice == "scissors") || 
               (humanChoice === "paper" && computerChoice == "rock") || 
               (humanChoice === "scissors" && computerChoice == "paper")) {
        humanScore++
        return `Player wins: Player Score is ${humanScore} Computer score is ${computerScore}`;
    } else {
        computerScore++
        return `Computer wins: Computer Score is ${computerScore} Player score is ${humanScore}`;
    }
    
    
}

function winner() {
    if (humanScore > computerScore) {
        return "you win best out of 5"
    } else if (computerScore > humanScore) {
        return "you loose best out of 5"
    } else {
        return "We tied best out of 5"
    }
}



function  playGame() {
    for(let i = 0; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
       
}
    console.log(winner());
}



playGame()
