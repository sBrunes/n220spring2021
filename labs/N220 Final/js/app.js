function setup() {
    createCanvas(700, 600);
    background("#c7c7c7");
}

let responseDiv = document.getElementById("response");
let guessDiv = document.getElementById("guessdiv");
//Getting the response div and guess div elements from the document

guessDiv.innerHTML = "Guessed Letters:"
//Adding starting text to the inside of the guessed letters div

var buttonLetter;
//Variable to store the attribute of the button pressed

var correctGuess = 0;
var wrongGuess = 0;
//Variables for the amount of correct and wrong guesses

let previousLetters = [];
//Array to store the letters guessed so the same one can't be guessed twice

let wordArray = [
"panda",
"ramen",
"space",
"code",
"leaves",
"quick",
"brown",
"fox",
"jumped",
"zealous"];
//Array of 10 words to choose from

var randomWord = wordArray[Math.floor(Math.random() * 10)];
//Variable for a random word out of the 10 that has been chosen

let letterArray = [];
//Array to store the empty divs for the random word letters

//console.log(randomWord);
//console.log(wordArray[1]);
//^^^^^^Here for debugging purposes


//For loop that takes the length of the random word chosen, and makes as many divs as there are letters to append to the "wordHolder" div on the HTML
for(i = 0; i < randomWord.length; i++) {
    let newLetter = document.createElement("div");
    //Creates the element
    
    newLetter.style.width = "60px";
    newLetter.style.height = "60px";
    newLetter.style.float = "left";
    newLetter.style.margin = "10px";
    newLetter.style.marginTop = "50px";
    newLetter.style.backgroundColor = "#858585";
    newLetter.style.fontSize = "300%";
    newLetter.style.textAlign = "center";
    //Styling for the element

    newLetter.innerHTML = "_";
    //Sets its default inner text to "_" to indicate an unguessed letter

    letterArray.push(newLetter);
    //Pushes the created element into the array, so that it can be accessed later

    document.getElementById("wordHolder").appendChild(newLetter);
    //Appends the element to the wordHolder div on the HTML
}

//console.log(letterArray[2]);
//letterArray[2].innerHTML = "a";
//^^^^^^^^Here for debugging purposes


//The function that is called whenever any of the letter buttons are pressed
function addLetter(event) {
    buttonLetter = event.target.getAttribute("letter-value");
    //sets the value of buttonLetter to whatever the letter-value attribute of that specific button is

    let notIt = 0;
    //Variable to determing if the guessed letter attribute matches any of the letters in the random word

    for(i=0; i < randomWord.length; i++) {
        //For loop to determine if the guessed letter is in the word

        let letter = randomWord.charAt(i);
        //variable that stores the value of whatever character is at the i index in the string

        //Checks if the character at the i index is the same as the guessed letter
        if(letter == buttonLetter) {

            //Checks if the guessed letter is not included in the previousLetters array, and if the player has not lost
            if((!previousLetters.includes(buttonLetter)) && (wrongGuess < 6)) {
                previousLetters.push(buttonLetter);
                //Puts the guessed letter into the previousLetters array so it can't be used again
                
                guessDiv.innerHTML += buttonLetter + ", ";
                console.log("found " + buttonLetter + " at " + i);

                letterArray[i].innerHTML = buttonLetter;
                //Sets the innerHTML of the letter div corresponsing to the i index of the randomWord character to the guessed letter
                correctGuess += 1;
                //Increments correctGuess by 1
                responseDiv.innerHTML = "Correct guess!"
                //Makes the responseDiv display "Correct guess!" so you have more visual feedback that your guess was right
            }
        } else {
            notIt += 1;
            //If the character at the i index of the random word does not equal the guessed letter, increments this variable by 1
        }
    }

    //Checks if the guessed letter is not included in the previousLetters array, and if the player has not lost
    if((!previousLetters.includes(buttonLetter)) && (wrongGuess < 6)) {
        
        //if the notIt variable is equal to the length of the random word, it means that the guessed letter did not equal any of the random word letters
        if((notIt == randomWord.length) && (correctGuess != randomWord.length)) {
            previousLetters.push(buttonLetter);
            //Puts the guessed letter in the previousLetters array
            
            guessDiv.innerHTML += buttonLetter + ", ";
            wrongGuess += 1;
            //Increments wrongGuess by 1

            responseDiv.innerHTML = "Wrong guess..";
            //Makes the responseDiv display "Wrong guess.." so you have more visual feedback that your guess was wrong
        }
    }

    //Checks if all the letters of the random word have been guessed
    if(correctGuess == randomWord.length) {
        responseDiv.innerHTML = "You win!"
        responseDiv.style.color = "#00c210";
        //Makes the response div say "you win!" and makes the text green

    //checks if the player has lost
    } else if(wrongGuess >= 6) {
        responseDiv.innerHTML = "Game Over. Try again Maybe?"
        responseDiv.style.color = "#c20000";
        //Makes the response div say game over, and sets the text to red

    }

    console.log(correctGuess);
    console.log(wrongGuess);
    //Logs the amount of correct and wrong guesses in the console
}

//Draws the stick man and gallows
function draw() {
    fill("#c7c7c7");
    rect(0, 0, 700, 600);
    fill("#57330c");
    noStroke();
    rect(150, 500, 400, 100);
    rect(470, 70, 30, 430);
    rect(400, 130,80,30);  
    quad(370, 150, 440, 70, 470, 70, 370, 200);
    rect(440, 50, 60, 20);
    //Draws the gallows

    fill("#336b67");
    if(wrongGuess >= 1) {
        ellipse(370, 220, 80, 80);
        //Draws the head
        if(wrongGuess >= 2) {
            rect(350, 250, 30, 130);
            //Draws the body
            if(wrongGuess >= 3) {
                quad(350, 250, 350, 280, 300, 380, 300, 350);
                //Draws the left arm
                if(wrongGuess >= 4) {
                    quad(380, 250, 380, 280, 430, 380, 430, 350);
                    //Draws the right arm
                    if(wrongGuess >= 5) {
                        quad(350,350, 350, 380, 300, 460, 300, 430);
                        //Draws the left leg
                        if(wrongGuess >= 6) {
                            quad(380, 350, 380, 380, 430, 460, 430, 430)
                            //Draws the right leg   
                        }
                    }
                }
            }
        }
    }
}

function reset() {
    correctGuess = 0;
    wrongGuess = 0;
    //Resets the wrong and correct guesses to 0

    randomWord = wordArray[Math.floor(Math.random() * 10)];
    //Puts a new random word into the randomWord variable

    //removes all the elements from the previousLetter array
    while(previousLetters.length > 0) {
        previousLetters.pop();
    }

    //removes all the letterArray divs from the HTML
    for(i = 0; i < letterArray.length; i++) {
        letterArray[i].remove();
    }
    
    //removes all the elements form the letter array
    while(letterArray.length > 0) {
        letterArray.pop();
    }

    console.log(previousLetters.length);

    //Creates new letter divs based on the new random word
    for(i = 0; i < randomWord.length; i++) {
        let newLetter = document.createElement("div");
        
        newLetter.style.width = "60px";
        newLetter.style.height = "60px";
        newLetter.style.float = "left";
        newLetter.style.margin = "10px";
        newLetter.style.marginTop = "50px";
        newLetter.style.backgroundColor = "#858585";
        newLetter.style.fontSize = "300%";
        newLetter.style.textAlign = "center";
        newLetter.innerHTML = "_";
        letterArray.push(newLetter);
    
        document.getElementById("wordHolder").appendChild(newLetter);
    }

    //Resets the innerHTML of the divs back to their original states
    guessDiv.innerHTML = "Guessed Letters:";
    responseDiv.innerHTML = " ";
    responseDiv.style.color = "black";
}