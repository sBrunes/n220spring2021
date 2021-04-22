let colorDisplay = document.getElementById("colorDisplay");
let currentRGB = document.getElementById("currentRGB");

var redAmount = 0;
var greenAmount = 0;
var blueAmount = 0;
//variables for the rbg values, set to 0 by default so they're black

colorDisplay.style.backgroundColor = "rgb(" + redAmount + ", " + greenAmount + "," + blueAmount + ")";
currentRGB.innerHTML = "Current Color: rgb(" + redAmount + "," + greenAmount + "," + blueAmount + ")";
//sets the default states of the text and the color display

function addColor(event) {
    console.log(event.target.getAttribute("button-color"));

    let addedAmount = Number(event.target.getAttribute("added-amount"));
    let buttonColor = event.target.getAttribute("button-color");
    //gets the button color and value attributes

    if(buttonColor == "red") {
        redAmount += addedAmount;
    } else if(buttonColor == "green") {
        greenAmount += addedAmount;
    } else if(buttonColor == "blue") {
        blueAmount += addedAmount;
    }
    //checks which color is being changed

    colorDisplay.style.backgroundColor = "rgb(" + redAmount + ", " + greenAmount + "," + blueAmount + ")";

    currentRGB.innerHTML = "Current Color: rgb(" + redAmount + "," + greenAmount + "," + blueAmount + ")";
    //displays the changed color and rgb value

    console.log(redAmount, greenAmount, blueAmount);
}