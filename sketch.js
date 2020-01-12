function preload() {
  instructions = loadImage("assets/texture.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  //sety controls to orbit around the model
  orbitControl(2, 2, 0);

  //set the background so that it changes upon moving your mouse
  background(
    map(mouseX, 0, width, 255, 0),
    map(mouseY, 0, height, 0, 255),
    map(mouseX, 0, height, 0, 255)
  );

  //set an ambient light
  ambientLight(30, 10, 50);

  // set a directional light that changes depending on your mouse position
  directionalLight(
    map(mouseY, 0, height, 255, 0),
    map(mouseX, 0, width, 255, 0),
    map(mouseX, 0, height, 0, 255),
    -(width / 5 ) * 2,
    -(height / 5) * 2,
    map(mouseY, 0, height, 1000, -1000));

  //do the same for a poin light
  pointLight(
    map(mouseX, 0, width, 255, 0),
    map(mouseX, 0, width, 255, 0),
    map(mouseY, 0, height, 0, 255),
    0,
    mouseY,
    1000,
  );

  noStroke(255);
  rotateX(90);

  //create a sphere that moves on the rails
  push();
  translate(350 * cos(frameCount), 350 * sin(frameCount), 0);
  fill(100);
  sphere(100);
  pop();

  //create a rotating panel with instructions
  push();
  rotateZ(frameCount-90);
  rotateX(-90);
  translate(0, -200, 1)
  texture(instructions);
  plane(200);
  pop();

  //make it so that it is correctly visible from both sizes
  push();
  rotateZ(frameCount-270);
  rotateX(-90);
  translate(0, -200, 1)
  texture(instructions);
  plane(200);
  pop();

  //create rails for the sphere
  translate(0, 0, -95)
  torus(300, 10);
  torus(400, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
