let rules = {
    //berry plant 1
    //X: "F[+X][-BX]",
    
    //berry plant 2
    //X: "F[+X][-X]XXA",

    
    //tree 1
    //X: "F[-X+F-]+[-X+X][X-X][X--X]-F",

    //tree 2
    //X: "F[-X+X][-X-X][-X+X][X+X]",

    //tree 3
    //X: "F[-X++F-]+[-X+X-][X---X-][--X-X-]F",


    F: "FF",
  }
  
  let len = 4;
  let ang;
  
  
  let drawRules;
  
  let word = "X";
  
  function setup() {
    createCanvas(400, 400);
    ang = (PI/180 * 25); 
    drawRules = {
      "F": () => {
        stroke(100, 50, 0);
        line(0, 0, 0, -len); 
        translate(0, -len); 
      },
      /*
      "f": () => {
        stroke(100, 50, 0);
        line(0, 0, 0, -len); 
        translate(0, -len); 
      },
*/
      "B": () => {
        noStroke();
        fill("#E5CEDC");
        circle(0, 0, 20);
      },  
      "A": () => {
        noStroke();
        fill("#FCA17D");
        circle(0, 0, 20);
      },
        
      "+": () => {
        rotate(-ang); 
      },
            
      "-": () => {
        rotate(ang);
      },

  
      "[": () => {
        push();
      },
        
      "]": () => {
        pop();
      }
    }
    noLoop();
  }
  
  function draw() {
    background(220);
    push();
    translate(200, 400);
    for(let i = 0; i < word.length; i ++) {
      let c = word[i];
      if(c in drawRules) {
        drawRules[c]();
      }  
    }
    pop();
  }
  
  function mouseReleased() {
    word = generate();
    draw();
    console.log(word);
  }
  
  function generate() {
    let next = ""
    
    for(let i = 0; i < word.length; i ++) {
      let c = word[i];
      if(c in rules) {
        next += rules[c];
      } else {
        next += c;
      }
    }
    
    return next;
  }