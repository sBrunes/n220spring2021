function setup() {
    
    var iceCream = "#dedcce";
    var cone = "#bf8c65";
    
    createCanvas(800, 700);
    noStroke();

    background(59, 65, 102);
    //Navy blue background color

    fill("#a3a3a3");
    quad(250, 40, 280, 25, 400, 220, 390, 225);
    stroke("#787878");
    strokeWeight(7);
    strokeCap(ROUND);
    line(290, 70, 395, 222);
    noStroke();
    //Spoon

    fill(iceCream);
    ellipse(400, 220, 200, 200);
    //Main Ice Cream ball

    fill(cone);
    triangle(300, 240, 500, 240, 400, 600)
    //Main cone shape

    strokeWeight(1);
    noFill();
    stroke("#c9c2b5");
    curve(1,200,300,230,470,230,800,200);
    curve(1,180,300,210,470,210,800,180);
    curve(1,160,304,190,470,190,800,160);
    //Lines on ice cream ball

    noStroke();
    fill(iceCream);
    arc(305, 220, 40, 40, HALF_PI, PI + HALF_PI, OPEN);
    arc(495, 220, 40, 40, HALF_PI + PI, HALF_PI, OPEN);
    //Ice cream spilling over cone

    fill("#9c7151");
    triangle(480, 240, 500, 240, 400, 600)
    //Cone shadow

    noFill();
    stroke("#752f2f");
    strokeWeight(4);
    curve(490, 120, 400, 100, 421, 50, 490, 85);
    //Cherry Stem
    
    noStroke();
    fill("#a83838");
    ellipse(400, 120, 47, 44);
    //Cherry Itself
}