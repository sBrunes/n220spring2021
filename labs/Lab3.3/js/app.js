function setup() {
    createCanvas(2000,400);
    noLoop();
    //Stops the draw function from looping over again
}

var xLocation = 10;
//Variable to change the x coordinate in the for loop

function draw() {
    for(let i = 1; i < 26; i++) {
        if((i % 5 == 0) && (i % 3 == 0)) {
            //If i is divisible by both 5 and 3
            fill("blue");
            rect(xLocation-10, 190, 20, 20);
            xLocation += 25;
        } else if (i % 5 == 0) {
            //If i is divisible by only 5
            fill("green");
            rect(xLocation-10, 190, 20, 20);
            xLocation += 25;
        } else if (i % 3 == 0) {
            //If i is divisible by only 3
            fill("purple");
            ellipse(xLocation, 200, 20, 20);
            xLocation += 25;
        } else {
            //If i is not divisible by any of the required numbers
            fill("black");
            ellipse(xLocation, 200, 20, 20);
            xLocation += 25;
        }
    }
}