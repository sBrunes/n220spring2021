function setup() {
    createCanvas(400,400);
    background("#bdbdbd");
}

var radius = 400;
//Variable to change the radius

function draw() {
    fill("#ffffff");
    strokeWeight(2);
    stroke("#000000");

    while(radius >= 10) {
        //Decreases the radius and draws a new circle until it is 10
        ellipse(200, 200, radius, radius);
        //Only draw command
        radius -= 10;
        //Decreases the radius by 10
    }
}