function setup() {
  createCanvas(600, 350);
  frameRate(16);
}

//interactive coordinates with mouse
function draw() {
  background(255);
  
  //pool
  fill(137, 207, 240)
  noStroke();
  //rect(top-left corner x, top-left corner y, width, height)
  ellipse(200, 200, 300, 200)
  
  //text("string" + value, x-coordinate, y-coordinate)
  fill(17, 32, 49);
  text("X: " + mouseX, 20, 30);
  text("Y: " + mouseY, 70, 30);
  
  push();
  textSize(25);
  text("don't move the tadpole!", 300, 60);
  pop();


  //create tadpole
  if (dist(mouseX, mouseY, 200, 200) < 90) {
    strokeWeight(8)
    stroke(17, 32, 49);
    //fill(0);
    circle(mouseX, mouseY, 15);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}