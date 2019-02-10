//tscooby=doo word guess

//the game requirements

    //1. select a random word for the player
    //2. take a guess from the player
    //3. validate guess is right and replace _ in index of word.length
    //4. record bad guess values and decrement remaining attempts
    //5. limit players guesses to a number of tries
    //6. event for winning
    //7. event for failing
    //2-5 is a loop
    //1, 6, 7 is a singluar event that repeats after restarting game or getting a new word

//start the game, probably with an onclick.function() {}

//wihtin this function

    //define word variables

    var wordList = ["scooby", "fred", "daphne", "velma", "shaggy"];
    var word = []; //the random word
    var rightGuess = []; // matching guess values
    var wrongGuess = []; // bad guess values
    var counterChances; // remaining chances
    var counterRight; // number of correct entries
    var guess; //value of user's guess
    var chances = 10; // maximum attmptes to know word
    var wins // win counter - number of guessed words


    //generate a random word

    function getWord() {
        word = wordList[Math.floor(Math.random() * wordList.length)];
    }

    // geneate the mysteryWord conent

    var mysteryWord = [];

    function getArray() {
        for (i = 0; i < word.length; i++); {
            mysteryWord[i] = "_";
        }
    }

    // track how many letters are left in the word

    var remainingLetters = word.length;

    // push variables to html displays

        //document.getElementId(classname).innerhtml = var; (repeat for vars)

    // game code
    
    // if var.counterChances < 10 {}
        //THENDO onkeyup(event) 
            //if {}
                //var.guess isin var.rightGuess OR var.wrongGuess
                    //alert.("you've already guessed this letter!")
                    //return to var.counterChances <10 -- end if
            //else if {}
                //var.guess isIn var.mysteryWord;
                    //charAt var.word, replace underscore with var.guess value in index
                    //document.getElementByid(mysteryWord).innerhtml(i);
                    //increment var.counterRight,
                            //if var.counterRight = mysteryWord.length
                                //then fire WIN events -- end (show restart button?)
                            //return to var.counterChances <10 -- end else if --
            //else {}
                //var.guess isNotIn var.mysteryWord;
                    //then decrement var.counterChances
                        //if var.counterChances >= var.counterChaces 
                            //then fire loser events -- end (show restart button?)
                        //return to var.counterChances < 10 -- end else --
//else
        //THENDO fire loser events
        //present restart button

// logs and checks

    console.log("var word " + word);
    console.log("var wordList " + wordList);
    console.log("var remainingLetters " + remainingLetters);
    console.log("var mysterWord " + mysteryWord)