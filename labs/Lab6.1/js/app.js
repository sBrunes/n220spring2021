function setup() {
    createCanvas(800,800);
}

//Circle object
var myCircle = {
    x: 1,
    y: 1,
    r: 5,
}

let speed = 1;
//Velocity

function draw() {
    background("#d1d1d1");
    fill("#bd3c3c");
    circle(myCircle.x, myCircle.y, myCircle.r);
    //draws the circle object
    myCircle.x += speed;
    myCircle.y += speed;
    myCircle.r += (speed / 10);
    //increments the location and the radius

    if ((myCircle.x >= 800) || (myCircle.x <= 0)) {
        //if the circle hits the bottom right corner, reverses the velocity
        speed = speed * -1;
    }
}