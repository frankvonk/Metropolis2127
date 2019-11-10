

// i + j are for swimmer in pool
function fnDrawHouse1x1_01(c, y, x, i, j){  
  c.globalAlpha = 1;

// green hedge outside
  c.fillStyle = "forestgreen";
  c.fillStyle = "limegreen";
  c.fillRect(y, x, plot, plot);
// grass
  c.fillStyle = "lightgreen";
  c.fillRect(y+plot5Perc,x+plot5Perc,plot90Perc,plot90Perc);
// trees
  c.fillStyle = "green";
// frontgarden
  c.fillRect(y+plot85Perc,x+plot65Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot90Perc,x+plot20Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot85Perc,x+plot85Perc,plot10Perc,plot10Perc);
// treelines
  c.fillRect(y+plot5Perc,x+plot90Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot15Perc,x+plot90Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot25Perc,x+plot90Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot35Perc,x+plot90Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot45Perc,x+plot90Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot55Perc,x+plot90Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot5Perc,x+plot80Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot5Perc,x+plot65Perc,plot5Perc,plot5Perc);
// Pool
  c.fillStyle ="skyblue"
  c.fillRect(y+plot10Perc,x+plot10Perc,plot30Perc,plot60Perc);
  c.fillStyle = "aqua"
  c.fillRect(y+plot15Perc,x+plot15Perc,plot20Perc,plot50Perc);


// Swimmer in pool
// TURNAROUND X AND Y, ITS A MISTAKE
c.fillStyle = "pink";
let nSwimSpeed = 0.10;
swimmerXX = aStructures[i][j].animationY;

c.fillRect(y+plot20Perc, swimmerXX, 2, 2);  
if(aStructures[i][j].swimDirection == 'down'){
    aStructures[i][j].animationY += nSwimSpeed;
  }
  if(aStructures[i][j].swimDirection == 'up'){
    aStructures[i][j].animationY -= nSwimSpeed;
  }
  if(aStructures[i][j].animationY > (aStructures[i][j].animationYConst+plot60Perc)){
    aStructures[i][j].swimDirection = 'up'
  }
  if(aStructures[i][j].animationY < (aStructures[i][j].animationYConst+plot15Perc)){
    aStructures[i][j].swimDirection = 'down'
  }
    



// house
  c.fillStyle = "grey" // house left half
  c.fillRect(y+plot50Perc,x+plot10Perc,plot15Perc,plot80Perc);
  c.fillStyle = "dimgrey" // house right half
  c.fillRect(y+plot65Perc,x+plot10Perc,plot15Perc,plot80Perc);
  c.fillRect(y+plot65Perc,x+plot40Perc,plot25Perc,plot20Perc);
// attic windows
  c.fillStyle = "grey" // house left half
  c.fillRect(y+plot70Perc,x+plot25Perc,plot5Perc,plot10Perc);
  c.fillRect(y+plot70Perc,x+plot65Perc,plot5Perc,plot10Perc);
// chimney
  c.fillStyle = "#4d4d4d"
  c.fillRect(y+plot60Perc,x+plot10Perc,plot10Perc,plot5Perc);
// path    
  c.fillStyle = "lightgrey"
  c.fillRect(y+plot90Perc,x+plot45Perc,plot10Perc,plot10Perc);
  c.fillRect(y+plot55Perc,x,plot10Perc,plot10Perc);
  c.fillRect(y+plot70Perc,x+plot90Perc,plot10Perc,plot10Perc);
  c.fillRect(y,x+plot70Perc,plot50Perc,plot10Perc);
}
