//setup
let points = [];

function setup() {

    createCanvas(800, 800);
    frameRate(16);
    noStroke();

}

//main draw function
function draw() {

    background(75, 82, 126, 90);

    //cat head
    fill(17, 32, 49);
    ellipse(400, 450, 400, 300)


    //cat ears
    fill(17, 32, 49);
    triangle(200, 197, 206, 416, 315, 315);
    triangle(600, 197, 593, 416, 481, 315);


    //cat nose
    fill(124, 129, 173);
    triangle(370, 480, 430, 480, 400, 500);


    //delete later, x and y coordinates
    fill(255);
    text("x:" + mouseX, 0, 30, 30);
    text("y:" + mouseY, 0, 60, 30);


    //text
    fill(240, 232, 199);
    textSize(15);
    text("dont wake Mr. Whiskers", 320, 200);
    
    
    //if 'o' key is pressed, open cat eyes and mouth
    if ((keyIsPressed == true) && (key == 'o')) {
        

        //open eyes
        fill(242, 247, 161);
        ellipse(300, 370, 50, 50);
        ellipse(500, 370, 50, 50);


        //pupils
        fill(39, 55, 77);
        ellipse(300, 370, 20, 50);
        ellipse(500, 370, 20, 50);


        //mouth
        fill(102, 37, 73);
        ellipse(400, 480, 120, 170);

        
        //aftermath nose
        fill(124, 129, 173);
        triangle(370, 375, 430, 375, 400, 395);
    

    }


      //default to closed eyes  
      else { 
        
        push();

        stroke(4, 3, 18); // Set stroke color to white
        strokeWeight(5);
        noFill();    // Disable fill
        
        //left eye
        arc(320, 420, 50, 20, 0, PI / 1.0);

        //right eye
        arc(480, 420, 50, 20, 0, PI / 1.0); 
        
        pop();
    }

    // Draw the curve
    push();
    strokeWeight(8);
    stroke(255, 49, 49);
    noFill();

    beginShape();
    for (let i = 0; i < points.length; i++) {
        curveVertex(points[i].x, points[i].y);
    }
    endShape();
    pop();

    // Add the current mouse position to the points array
    points.push({ x: mouseX, y: mouseY });

    // Limit the number of points to avoid performance issues
    if (points.length > 5) {
        points.shift();
    }


}