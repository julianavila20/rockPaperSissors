const choices = ["rock", "paper", "sissors"]
const winners = []

function game() {
    for (let i = 0; i <= 5; i++){
    playRound();
    }
    logWins();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);
}

function playerChoice() {
    let input = prompt("Please input either: rock, paper, sissors");
    while (input == null) {
        input = prompt("type rock, paper, or sissors.'");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
       input = prompt(
           "Please type rock, paper, or sissors while spelling needd to be exact. Caps does not matter"
       );
       
       while (input == null) {
        input = prompt("type rock, paper, or sissors.'");
    }
       input = input.toLowerCase();
       check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(input) {
    if (choices.includes(input)) {
    return true;
    } 
    return false;
    
}

function checkWinner(choiceP,choiceC) {
    if(choiceP === choiceC) {
        return 'tie';
    } else if (
    ( choiceP === "rock " &&  choiceC === "sissors" ) || 
    (choiceP === "paper "&& choiceC === "rock" ) || 
    (choiceP === "sissors "&& choiceC === "paper" )
    ) {
        return "Player";
    } else {
        return "computer"
    }
}


function logWins() {
let playerWins = winners.filter((item) => item == "Player").length;
let computerWins = winners.filter((item) => item == "Computer").length;
let ties = winners.filter((item) => item == "Tie").length;
console.log('Results:')
console.log('Player Wins:', playerWins);
console.log ('Computer Wins:', computerWins);
console.log('ties: ', tie);

}

game();
