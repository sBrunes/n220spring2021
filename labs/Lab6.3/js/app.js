function setup() {
    createCanvas(800, 600);
}

let myBall = {
    xSpeed: 5,
    ySpeed: 5,
    x: 400,
    y: 300,
    r: 30,
    update: function() {
        //Method to update the velocity direction and increment the location
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x == 0 || this.x == 800) {
            this.xSpeed = -this.xSpeed;
        } else if (this.y == 0 || this.y == 600) {
            this.ySpeed = -this.ySpeed;
        }
    }
}

function draw() {
    background("#c2c2c2");
    fill("#3a4094");
    circle(myBall.x,myBall.y,myBall.r);
    myBall.update();
    //Calls the myBall method
}