function setup() {
    createCanvas(800, 800);
}
//Create Canvas

//Object for the circles
var myCircle = {
    x: 50,
    r: 20,
}

//Make an array to store the objects
let circleArray = [];

//Fill the array with the objects
for (i = 0; i < 10; i++) {
    circleArray.push(myCircle);
}

//draw function
function draw() {
    background("#ababab");
    //For loop to draw all the circles
    for(i=0;i<10;i++) {
        //set the x location for the circles
        circleArray[i].x = 70 * i + 50;
        
        //Calculate the distance between the mouse and circle[i], and make it bigger if it's closer
        circleArray[i].r = (circleArray[i].x - mouseX) / 10;
        
        //Calculate distance from circle[i] and mouse, and make the color more red if it's closer
        if((circleArray[i].x - mouseX <= 300) || (-(circleArray[i].x - mouseX) <= 300)) {
            if(circleArray[i].x - mouseX <= 300 && circleArray[i].x - mouseX >= 0) {
                fill(circleArray[i].x - mouseX, 0, 0);
            } else {
                fill(-(circleArray[i].x - mouseX), 0, 0);
            }
            
        }
        //Determine whether mouse is pressed, and animate circle[i] downward if it is
        if(mouseIsPressed) {
            circleArray[i].y += 5;
        }
        
        //Determine whether mouse is released, and set y location back to mouseY
        // function mouseReleased() {
        //     circleArray[i].y = mouseY;
        // }

        //set y to canvas border at bottom if it is equal to or greater than the border
        // if(circleArray[i].y >= 800) {
        //     circleArray[i].y = 800;
        // }
        
        //Draw the circle
        circle(circleArray[i].x,mouseY,circleArray[i].r);
        
    }
    // console.log(circleArray[1].x - mouseX);
    
}