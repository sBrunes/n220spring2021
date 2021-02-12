function setup() {
    createCanvas(400,400);
    noLoop();
    //Prevents the draw function from looping again
}

var yLocation = 200;
//Variable for the y coordinate
var xLocation = 200;
//Variable for the x coordinate

function draw() {
    fill("#ff001e");
    noStroke();
    for(let i = 1; i < 5; i++) {
        //Creates 4 rows
        for(let t = 1; t < i+1; t++) {
            //Creates collumns based on the value of i
            square(xLocation, yLocation, 20, 20);
            xLocation += 22;
            //Moves the square to the right
        }
        xLocation = 200;
        //Resets x coordinate after each row is finished
        yLocation += 22;
        //Increments the y location downward
    }
}