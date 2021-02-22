function setup() {
    createCanvas(400, 400);
    background("#b5b5b5");
    //Creates canvas on setup
}

function stoplights(colors, y) {
    //Function for making the lights
    for(let i = 0; i < lights.length; i++) {
        fill(colors[i]);
        //changes the color of each circle
        circle(200, y, 30);
        y += 70;
    }
}

let lights = ["#ff0000", "#ffd500", "#04ff00"];
//Array for the light colors
let yLocation = 135;
//Variable for the Y location of the lights

function draw() {
    background("#b5b5b5");
    fill("#c99d0c");
    rect(150, 80,100,250);
    //Draws the stoplight frame
    stoplights(lights, yLocation);
    //Calls the stoplights function
}