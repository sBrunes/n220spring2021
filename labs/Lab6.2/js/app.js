function setup() {
    createCanvas(800, 400);
}

//Objects to fill the circle array
let myCircle1 = {
    x: 20+60,
    y: 5,
    r: 30,
}

let myCircle2 = {
    x: 200+60,
    y: 5,
    r: 30,
}

let myCircle3 = {
    x: 380+60,
    y: 5,
    r: 30,
}

let myCircle4 = {
    x: 560+60,
    y: 5,
    r: 30,
}

let circleArray = [myCircle1, myCircle2, myCircle3, myCircle4];
//Array to store the circle objects

let speed = 1;
//velocity

function draw() {
    background("#ababab");
    //Changes the fill based on velocity
    if(speed == -1) {
        fill("#ab9037");
    } else {
        fill("#3756ab");
    }
    for(i = 0; i < 4; i++) {
        circle(circleArray[i].x, circleArray[i].y, circleArray[i].r);
        //draws the circles in the array
        circleArray[i].y += speed;
        //increments the location
        if((circleArray[i].y >= 400) || (circleArray[i].y <= 0)) {
            //if the circles hit the bottom, reverses the velocity
            speed = speed * -1;
        }
    }
}