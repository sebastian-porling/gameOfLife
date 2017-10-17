function update() {
  cellsCopy = [];
  for (var x = 0; x < cellsW; x++) {
    cellsCopy[x] = [];
    for (var y = 0; y < cellsH; y++) {
      var count = checkNeighbors(x, y);
      if (cells[x][y]) {
        if (count < 2) {
          // Any live cell with fewer than two live neighbours dies, (underpopulation).
          cellsCopy[x][y] = false;
        } else if (count === 2 || count === 3) {
          // Any live cell with two or three live neighbours lives on to the next generation.
          cellsCopy[x][y] = true;
        } else if (count > 3) {
          // Any live cell with more than three live neighbours dies (overpopulation).
          cellsCopy[x][y] = false;
        }
      } else {
        if (count === 3) {
          // Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
          cellsCopy[x][y] = true;
        }
      }
    }
  }
  // Copy new array
  for (var x = 0; x < cellsW; x++) {
    for (var y = 0; y < cellsH; y++) {
      cells[x][y] = cellsCopy[x][y];
    }
  }
}

function checkNeighbors(x, y) {
  var count = 0;
  if (x != 0 && cells[x-1][y]) {
    count++;
  }
  if (x != 0 && y < cellsH-1 && cells[x-1][y+1]) {
    count++;
  }
  if (x != 0 && y != 0 && cells[x-1][y-1]) {
    count++;
  }
  if (x < cellsW-1 && y != 0 && cells[x+1][y-1]) {
    count++;
  }
  if (y != 0 && cells[x][y-1]) {
    count++;
  }
  if (x < cellsW-1 && cells[x+1][y]) {
    count++;
  }
  if (y < cellsH-1 && cells[x][y+1]) {
    count++;
  }
  if (x < cellsW-1 && y < cellsH-1 && cells[x+1][y+1]) {
    count++;
  }
  return count;
}
