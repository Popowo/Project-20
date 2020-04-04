
var r = 0;
var g = 50;
var b = 255;


// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  r = map(mouseX,1200,400,0,255);
  g = map(mouseX,1200,400,200,50);
  b = map(mouseX,1200,400,150,50);

  background(r,g,b);

  fill("white");
  ellipse(mouseX,200,50,50);


  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}