let rules = {
    A: "[&FL!A]/////’[&FL!A]///////’[&FL!A]",
    F: "S ///// F",
    S: "F L",
    L: "[’’’∧∧{-f+f+f-|-f+f+f}]"
  }
  
  let len = 7;
  let ang;
  //let diameter = 10; // Initial diameter
  //let colorIndex = 0; // Initial color index
  
  
  let drawRules;
  
  let word = "A";
  
  function setup() {
    createCanvas(800, 800);
    ang = radians(22.5); 
    drawRules = {
      "F": () => {
        stroke(100, 50, 0);
        line(0, 0, 0, -len); 
        translate(0, -len); 
        //push();
        //translate(0, newLen / 2, 0); 
        //ellipse(0, 0, 1 * len, 5 * len);
        //pop();
      },

      "A": () => {
        // Draw circle at current location
        noStroke();
        fill("#E5CEDC");
        circle(0, 0, len*2);
      },  
      "L": () => {
        // Draw circle at current location
        noStroke();
        fill("#FCA17D");
        circle(0, 0, len*2);
      },
  
      
      /*
      "f": () => {
        translate(0, -len, 0);
      },
      */
      
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
        //noStroke();
        //fill(0, 200, 0);
        //ellipse(0, 0, 2 * len, 5 * len);
        pop();
      }
    }
    noLoop();

      
    /*
      "&": () => {
        rotate(-ang);
      },
    
      "∧": () => {
        rotate(ang); 
      },
    
      "\\": () => {
        rotate(-ang);
      },
  
      "/": () => {
        rotate(ang);
      },
    
      "|": () => {
        rotate(PI); 
      },
      
      "!": () => {
        diameter--;
        diameter = max(diameter, 1); 
      },
  
      "": () => {
        colorIndex++;
      }
    }
  */
  }
  
  function draw() {
    background(220);
    
    //rotateX(PI/2); // Adjust rotation for the 3D coordinate system
    push();
    translate(200, 200);
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