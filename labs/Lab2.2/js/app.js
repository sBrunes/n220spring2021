function setup() {
    createCanvas(800,600);
}

var x = 0;

function draw() {    
    background("#c2c2c2");
    fill("#2157b5");

    x = x + 5;

    ellipse(x, 300, 50, 50);

    if (x >= 800) {
        x = -50;
    }
}

// var radius = 40;
// var x = -radius;
// var speed = 0.5;

// function setup() {
//   createCanvas(240, 120);
//   ellipseMode(RADIUS);
// }

// function draw() {
//   background(0);
//   x += speed;  // Increase the value of x
//   if (x > width+radius) {  // If the shape is off screen
//     x = -radius;  // move to the left edge
//   }
//   ellipse(x,60,50,50);
// }