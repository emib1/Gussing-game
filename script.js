const inputField = document.querySelector(".container input");
const submitBtn = document.querySelector(".submit");
const previousGuesses = document.querySelector(".previous");
const remainingGuesses = document.querySelector(".remaining");
const hints = document.querySelector(".hint");
const startOverBtn = document.querySelector(".new");
var random = parseInt((Math.random()*100)+1);
var numGusses =1;
var remaining =10;
var previous =[];

submitBtn.addEventListener("click", function handleClick(){
    guess = inputField.value;
    previous.push(guess);
    if (guess === ""){
        alert("Please provide a Valid number");
    }

    else if(guess > 100){
        alert("Please write a number less than or equal to 100");
    }
    else if (guess <1){
        alert("Please Write A Number Greater Than 1")
    }
    else{
        if(guess > random){
            hints.innerHTML ="Guess Lower";
            previousGuesses.innerHTML += ` ${previous[numGusses -1]}`;
            numGusses ++;
            remaining--;
        }
        else if(guess < random){
            hints.innerHTML ="Guess Higher";
            previousGuesses.innerHTML += ` ${previous[numGusses -1]}`;
            numGusses ++;
            remaining--;
        }

        else if (guess == random){
            hints.innerHTML = "YOU Guessed correctly";
           }
           remainingGuesses.innerHTML = `Remaining guesses: ${remaining}`
        if (numGusses === 11){
            hints.innerHTML = `Game Over, The number was ${random}`;
            function endGame(){
                //Clear user input
                inputField.value = "";
                //Disable user input button
                inputField.setAttribute('disabled', '');}
            endGame();}
    }
});



/////////// restart the game 

startOverBtn.addEventListener("click",function(){
    numGusses =1;
    remaining=10;
    previous = [];
    previousGuesses.innerHTML = `Previous guesses:`;
    remainingGuesses.innerHTML = ""
    random = parseInt((Math.random()*100) +1);
    inputField.removeAttribute('disabled', '');
})


