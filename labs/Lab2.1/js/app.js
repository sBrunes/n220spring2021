function setup() {
    createCanvas(400, 300);
}

function draw() {
    
    if (mouseX >= 200) {
        fill("#ab2020");
    } else {
        fill("#2157b5");
    }

    background("#c2c2c2");
    ellipse(mouseX, mouseY, 50, 50);
}