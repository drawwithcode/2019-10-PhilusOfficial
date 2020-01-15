var onOff = 0;

function preload() {
  instructions = loadImage("assets/texture.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {

  //create variables for the position of the mouse
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;

  //create variables for changing r, g, b values (in a loop)
  var rBackground = 50 * cos(frameCount - 50);
  var gBackground = 50 * cos(frameCount - 170);
  var bBackground = 50 * cos(frameCount - 230);

  //create position1 variables that change in a loop
  var locX1 = width * cos(frameCount);
  var locY1 = height * cos(frameCount);
  var locZ1 = height * cos(frameCount);

  //create variables for changing r1, g1, b1 values (in a loop)
  var r1 = 255 * cos(frameCount);
  var g1 = 255 * cos(frameCount - 90);
  var b1 = 255 * cos(frameCount - 180);

  //create position2 variables that change in a loop
  var locX2 = width * cos(frameCount);
  var locY2 = height * cos(frameCount);
  var locZ2 = height * cos(frameCount);

  //create variables for changing r2, g2, b2 values (in a loop)
  var r2 = 255 * cos(frameCount - 180);
  var g2 = 255 * cos(frameCount - 90);
  var b2 = 255 * cos(frameCount);

  //sety controls to orbit around the model
  orbitControl(2, 2, 0);

  //set an ambient light
  ambientLight(30, 10, 50);

  //change background on click
  if (onOff == 0) {
    background(0);
  } else if (onOff == 1) {
    background(rBackground, gBackground, bBackground);
  }

  //change lights on click
  if (onOff == 0) {
    // set a point light that changes depending on the previously set position values
    pointLight(250, 250, 250, locX, locY, 50);
  } else if (onOff ==1) {
    // set a point light that changes depending on the previously set position and rgb values
    pointLight(250, 250, 250, locX, locY, 50);
    pointLight(r1, g1, b1, locX1, locY1, locZ1);
    pointLight(r2, g2, b2, locX2, locY2, locZ2);
  }


  noStroke(255);
  rotateX(90);

  //create a sphere that moves on the rails
  push();
  translate(180 * cos(frameCount), 180 * sin(frameCount), 0);
  fill(100);
  sphere(60);
  pop();

  //createdecoration rotating boxes
  push();
  fill(100);
  translate(350 * cos(frameCount), 350 * sin(frameCount-180), 350 * cos(frameCount));
  rotateX(frameCount*0.3)
  rotateY(frameCount*0.3)
  rotateZ(frameCount*0.3)
  box(70);

  translate(380 * cos(frameCount-30), 380 * sin(frameCount-90), 380 * cos(frameCount));
  rotateX(frameCount*0.3)
  rotateY(frameCount*0.3)
  rotateZ(frameCount*0.3)
  box(100);

  translate(260 * cos(frameCount-90), 260 * sin(frameCount-60), 260 * cos(frameCount));
  rotateX(frameCount*0.3)
  rotateY(frameCount*0.3)
  rotateZ(frameCount*0.3)
  box(60);

  translate(290 * cos(frameCount-150), 290 * sin(frameCount-30), 390 * cos(frameCount));
  rotateX(frameCount*0.3)
  rotateY(frameCount*0.3)
  rotateZ(frameCount*0.3)
  box(50);

  translate(320 * cos(frameCount-270), 320 * sin(frameCount), 320 * cos(frameCount));
  rotateX(frameCount*0.3)
  rotateY(frameCount*0.3)
  rotateZ(frameCount*0.3)
  box(120);

  pop();

  //create a rotating panel with instructions
  push();
  rotateZ(frameCount - 90);
  rotateX(-90);
  translate(0, -200, 1)
  texture(instructions);
  plane(200);
  pop();

  //make it so that it is correctly visible from both sizes
  push();
  rotateZ(frameCount - 270);
  rotateX(-90);
  translate(0, -200, 1)
  texture(instructions);
  plane(200);
  pop();

  //create rails for the sphere
  translate(0, 0, -60)
  torus(150, 6);
  torus(210, 6);
}

function mouseClicked() {
  if (onOff == 0) {
    onOff = 1;
  } else if (onOff == 1) {
    onOff = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
