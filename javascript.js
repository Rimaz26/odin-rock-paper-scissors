let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let numberRandom = Math.random();
    let compChoice;

    if (numberRandom >= 0 && numberRandom <= 0.3) {
       return compChoice = "rock";
    }

    else if (numberRandom >= 0.3 && numberRandom <= 0.6) {
       return compChoice = "paper";
    }

    else {
      return  compChoice = "scissor";
    }

    //return console.log(numberRandom) ;
}

function getHumanChoice() {

    let humanChoice;

    humanChoice = prompt("Choice");
    return humanChoice.toLowerCase();;

}

function playRound(compChoice, humanChoice) {

    if (humanChoice === compChoice) {
        console.log("It's a tie, Reload and try again!", "Good Luck");
        return;
    }
    if (
        (humanChoice === "rock" && compChoice === "scissor") || (humanChoice === "paper" && compChoice === "rock") || (humanChoice === "scissor" && compChoice === "paper")

    ) {
        humanScore++;
        console.log("Congratulations, you won", "Relaod to try again");
    }

    else{
        computerScore++;
        console.log("You Lose", "Reload to try again");
    }
}

let compChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(compChoice,humanChoice);


//console.log(numberRandom);
console.log(compChoice);
console.log(humanChoice);