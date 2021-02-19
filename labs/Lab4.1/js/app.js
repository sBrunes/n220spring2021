function setup() {
    createCanvas(400, 400);
    background("#b0b0b0");
    //Creates canvas and sets background color
}

let colors = ["#e3948d", "#feffe3", "#8B4513"];
//Array for ice cream colors
var xLocation = 0;
//Variable to change the x location

function draw() {
    for(var i = 0; i < colors.length; i++) {
        //Creates a rectangle with and cycles through the array strings for the colors.
        fill(colors[i]);
        rect(xLocation, 180, 20, 40);
        xLocation += 20;
    }
}