function setup() {
    createCanvas(800, 600);
}

var xspeed = 5;
var yspeed = 5;
var x = 400;
var y = 300;

function draw() {
    x += -xspeed;
    y += yspeed;

    background("#c2c2c2");
    fill("#3a4094");
    ellipse(x, y, 50, 50);

    if (x == 0 || x == 800) {
        xspeed = -xspeed;
    }
    if (y == 0 || y == 600) {
        yspeed = -yspeed;
    }
}