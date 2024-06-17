function setup() {
    createCanvas(1000, 1000);
    background("gray");
    
  }
  
  function draw() {
    
    stroke("blue");
    fill ("cyan");
    
    if(mouseIsPressed){
      circle(mouseX, mouseY, 30, 15);
    }
  }