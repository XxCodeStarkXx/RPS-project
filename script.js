function getComputerChoice() {
    const strings = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

console.log(getComputerChoice());

