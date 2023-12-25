//cat sound
let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('catscream.mp3');
}


//setup
let points = [];

function setup() {

    createCanvas(800, 800);
    frameRate(16);
    noStroke();

    // Play the sound once when the sketch is set up
    if (mySound.isLoaded()) {
        mySound.play();
    }


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
    fill(75, 82, 126, 90);
    text("x:" + mouseX, 0, 30, 30);
    text("y:" + mouseY, 0, 60, 30);


    //text
    fill(235, 232, 199);
    textSize(15);
    text("click Mr. Whiskers' mouth", 315, 200);
    
    
    //left eye
    if (dist(mouseX, mouseY, 320, 430) < 30) {
        
        //sclera
        fill(242, 247, 161);
        ellipse(320, 420, 50, 50);
        

        //pupil
        fill(39, 55, 77);
        ellipse(320, 420, 20, 50);

        //closed right eye
        push();

        stroke(4, 3, 18);
        strokeWeight(5);
        noFill(); 

        //right eye
        arc(480, 420, 50, 20, 0, PI / 1.0); 
        pop();

    }

    //right eye
    else if (dist(mouseX, mouseY, 480, 430) < 30) {
        
        //sclera 
        fill(242, 247, 161);
        ellipse(480, 420, 50, 50);
        

        //pupil
        fill(39, 55, 77);
        ellipse(480, 420, 20, 50);

        //closed left eye
        push();

        stroke(4, 3, 18); 
        strokeWeight(5);
        noFill();    

        //left eye
        arc(320, 420, 50, 20, 0, PI / 1.0);
        
        pop();

    }
    

    //around nose -> cat is awake
    else if (dist(mouseX, mouseY, 400, 488) < 10) {
        
        //sclera
        fill(242, 247, 161);
        ellipse(300, 370, 50, 50);
        ellipse(500, 370, 50, 50);
        
        
        //pupil
        fill(39, 55, 77);
        ellipse(300, 370, 20, 50);
        ellipse(500, 370, 20, 50);
        
        
        //aftermath nose 
        fill(124, 129, 173);
        triangle(370, 375, 430, 375, 400, 395);
        

        //open mouth
        fill(102, 37, 73);
        ellipse(400, 480, 120, 170);

        //sound
        mySound.play();
        
    }


    //default
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
