var cells = [];
var spacer;
var gameStart = false;
for (var x = 0; x < 72; x++) {
  cells[x] = []; // create nested array
}

function setup() {
  createCanvas(720, 360);
  spacer = 10;
  frameRate(10);
}

function mouseDragged() {
  cells[floor(mouseX/10)][floor(mouseY/10)] = true;
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    gameStart = true;
  } else if (keyCode === LEFT_ARROW) {
    gameStart = false;
  } 
}

function draw() {
  background(0);

  for (var x = 0; x < 72; x++) {
    for (var y = 0; y < 36; y++) {
      if (cells[x][y]) {
        rect(x*10 + spacer/2, y*10 + spacer/2, 10, 10);
      }
    }
  }
  if (gameStart) {
    update();
  }
}
