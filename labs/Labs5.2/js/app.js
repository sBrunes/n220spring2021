function setup() {
    createCanvas(800, 800);
    background("#ababab");
}

function ballColor(x, y) {
    //Function to set the circle color
    var xside = mouseX - x;
    //calculates the x distance between the circle and the cursor
    var yside = mouseY - y;
    //calculates the y distance between the circle and the cursor
    var distance = sqrt((xside * xside) + (yside * yside)); 
    //pythagorean theorem
    if(distance > 7) {
        fill("#000000");
    } else if(distance <= 7) {
        fill("#bd0000");
    } 
    console.log(distance);
}

let ballX = 400;
//X location for the circle
let ballY = 400;
//Y location for the circle
let ballSpeed = 3;
//Speed of the circle

function draw() {
    background("#ababab");
    ballColor(ballX, ballY);
    //sets the fill of the circle
    circle(ballX, ballY, 20);
    if(mouseX < ballX) {
        //if cursor is to the left
        ballX -= ballSpeed;
    } else if(mouseX > ballX) {
        //if cursor is to the right
        ballX += ballSpeed;
    } else {
        //if cursor is on top of it
        ballX = mouseX;
    }
    if(mouseY < ballY) {
        //if cursor is above
        ballY -= ballSpeed;
    } else if(mouseY > ballY) {
        //if cursor is below
        ballY += ballSpeed;
    } else {
        //if cursor is on top of it
        ballY = mouseY;
    }
}