//psychic game

//game variables

var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0; //total wins
var losses = 0; //total losses
var chances = 9 //max chances
var guessed = [] // letter choses

//write vars to html
document.getElementById("chances").innerHTML = chances;
document.getElementById("countLosses").innerHTML = losses;
document.getElementById("countWins").innerHTML = wins;

//start game trigger

document.onkeyup = function (event) {
    //found this one online, think we talked about it in brief in class to recognize characters
    var playerGuess = event.key;
    //defining a variable and getting a random  letter
    var computerGuess = letterArray[Math.floor(Math.random() * letterArray.length)];
    //creating a guessed array index
    guessed.push(" " + playerGuess);
    document.getElementById("guesses").innerHTML = guessed;

    //winner

    if (playerGuess == computerGuess) {
        alert("You are a winner! Click here to play again");
        wins++; //increment win var
        chances = 9; //reset the chances for next game
        guessed.length = 0; //clear guessed tracker
        document.getElementById("chances").innerHTML = chances;
        document.getElementById("countLosses").innerHTML = losses;
        document.getElementById("countWins").innerHTML = wins;
        document.getElementById("guesses").innerHTML = guessed;

    }

    else if (chances == 0) {
        alert("You lose! Click here to play again");
        losses++; //increment loser var
        chances = 9; //reset the chances for next game
        guessed.length = 0; //clear guessed tracker
        document.getElementById("guesses").innerHTML = guessed;
        document.getElementById("chances").innerHTML = chances;
        document.getElementById("countLosses").innerHTML = losses;
        document.getElementById("countWins").innerHTML = wins;
    }

    else {
        chances--;
        document.getElementById("chances").innerHTML = chances;
    }
}