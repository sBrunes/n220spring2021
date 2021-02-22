function setup() {
    createCanvas(400, 400);
    background("#adadad");
    //creates the canvas on setup
}

function lightTouch(boundaryX, boundaryY) {
    //This function determines whether or not the cursor is in the space directly under the lampshade
    if(((boundaryX[0] < mouseX) && (boundaryX[1] > mouseX)) && ((boundaryY[0] < mouseY) && (boundaryY[1] > mouseY))) {
        //determines if the mouse is within the x and y boundaries
        return true;
    } else {
        return false;
    }
}

let lineTopX = 130;
let lineBottomX = 110;
//variables for the lines on the lampshade

let yLocation = 200;
//y location of the circles forming the string hanging under the lampshade

let lightBoundaryX = [110,290];
let lightBoundaryY = [200,320];
//Arrays for the x and y boundaries directly under the lampshade


function draw() {
    background("#adadad");
    fill("#787878");
    noStroke();
    rect(190,200,20,100);
    rect(150,300,100,20);
    //Draws the lamp stand

    fill("#5c2d0b");
    rect(0,320,400,80);
    //Draws the desk

    fill("#787878");
    for(let i = 0; i < 6; i++) {
        //Draws the circles hanging under the lampshade
        circle(240,yLocation, 5);
        yLocation += 10;
        //increases the y value of each circle in the loop
    }
    yLocation = 200;
    //resets the y value for the circles

    fill("#ebe9d8");
    stroke("#c2bfab");
    strokeWeight(5);
    quad(130,100,110,200,290,200,270,100);
    //Draws the lampshade shape

    for(let i = 0; i < 8; i++) {
        //This loop draws the  equally spaced lines on the lampshade
        line(lineTopX,100,lineBottomX,200);
        lineTopX += 17.5;
        //space between each line on the top of the shade
        lineBottomX += 22.5;
        //space between each line on the bottom of the shade
    }
    lineTopX = 130;
    lineBottomX = 110;
    //Resets the variables to their starting positions

    //Calls the lightTouch function to determine if the cursor is within the space directly under the lampshade
    if(lightTouch(lightBoundaryX,lightBoundaryY)) {
        //if the function returns true, draws the light under the shade
        fill(255, 200, 0, 50);
        noStroke()
        quad(lightBoundaryX[0],lightBoundaryY[0],70,lightBoundaryY[1],330,lightBoundaryY[1],lightBoundaryX[1],lightBoundaryY[0]);        
    } else {
        //if the function returns false, draws the tinted "night" square across the composition
        fill(0, 9, 105, 90);
        noStroke()
        square(0,0,400);
    }
}