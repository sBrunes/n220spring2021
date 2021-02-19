function setup() {
    createCanvas(400,400);
    background("#c2c2c2");
}

let xLocations = [];
let yLocations = [];

function draw() {
    fill("#8a3434");
    if(mouseIsPressed) {
        xLocations.push(mouseX);
        yLocations.push(mouseY);
    }
    background("#c2c2c2");
    for(var i = 0; i < xLocations.length; i++) {
        rect(xLocations[i], yLocations[i], 40, 20);
        yLocations[i] += 5;
    }
}