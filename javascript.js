let numberRandom = Math.random();
let compChoice;
let userChoice;

if(numberRandom >= 0 && numberRandom <= 0.3)
{
    compChoice = "Rock";
}

else if( numberRandom >= 0.3 && numberRandom <= 0.6)
{
 compChoice = "Paper";
}

else{
    compChoice = "Scissor";
}

userChoice = prompt("Choice");

console.log(numberRandom);
console.log(compChoice);
console.log(userChoice);