var cells = [];
var spacer;
var gameStart = false;
var cellsH;
var cellsW;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellsH = windowHeight/10;
  cellsW = windowWidth/10;
  for (var x = 0; x < cellsW; x++) {
  cells[x] = []; // create nested array
}
  spacer = 10;
  frameRate(10);
}

function mouseDragged() {
  cells[floor(mouseX/10)][floor(mouseY/10)] = true;
}
function clearCells() {
  for (var x = 0; x < cellsW; x++) {
    for (var y = 0; y < cellsH; y++) {
      cells[x][y] = false;
    }
  }
}
function randomCells() {
  for (var x = 0; x < cellsW; x++) {
    for (var y = 0; y < cellsH; y++) {
      var rdm = random(50)
      if(rdm > 45){
        cells[x][y] = true;
      }
    }
  }
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    gameStart = true;
  } else if (keyCode === LEFT_ARROW) {
    gameStart = false;
  } else if (keyCode === 67){
    print(key);
    clear();
    clearCells()
  } else if (keyCode == 82){
    print(key);
    clear();
    randomCells();
  }
}

function draw() {
  background(0);

  for (var x = 0; x < cellsW; x++) {
    for (var y = 0; y < cellsH; y++) {
      if (cells[x][y]) {
        rect(x*10 + spacer/2, y*10 + spacer/2, 10, 10);
      }
    }
  }
  if (gameStart) {
    update();
  }
}