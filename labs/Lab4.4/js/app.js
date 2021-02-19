function setup() {
    createCanvas(400,400);
    background("#c2c2c2");
}

let yLocations = [0];

function draw() {
    fill("#303b80");
    if((yLocations[0] % 50) == 0) {
        yLocations.push(0);
    }
    background("#c2c2c2");
    for(var i = 0; i < yLocations.length; i++) {
        circle(200, yLocations[i], 10);
        yLocations[i] += 5;
    }
}