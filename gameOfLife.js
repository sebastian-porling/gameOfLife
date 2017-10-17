function update() {
for(var x = 0; x < 72; x++){
  for(var y = 0; y < 36; y++){
    var count = checkNeighbors(x, y);
    
    if(count < 2 && cells[x][y]){
      // Any live cell with fewer than two live neighbours dies, (underpopulation).
      cells[x][y] = false;
      
    } else if(count == 2 || count == 3 && cells[x][y]){
      // Any live cell with two or three live neighbours lives on to the next generation.
      
    } else if(count > 3 && cells[x][y]){
      // Any live cell with more than three live neighbours dies (overpopulation).
      cells[x][y] = false;
    } else if(count == 3 && cells[x][y] == false){
      // Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
      cells[x][y] = true;
    }
  }
}
}

function checkNeighbors(x, y){
  var count = 0;
      if(x != 0 && cells[x-1][y]){
        count++;
      }
      if(x != 0 && y < 35 && cells[x-1][y+1]){
        count++;
      }
      if(x != 0 && y != 0 && cells[x-1][y-1]){
        count++;
      }
      if(x < 71 && y != 0 && cells[x+1][y-1]){
        count++;
      }
      if(y != 0 && cells[x][y-1]){
        count++;
      }
    if(x < 71 && cells[x+1][y]){
      count++;
    }
    if(y < 35 && cells[x][y+1]){
      count++;
    }
    if(x < 71 && y < 35 && cells[x+1][y+1]){
      count++;
    }
    return count;
}