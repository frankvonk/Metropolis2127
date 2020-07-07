


function house1x1_03(c, x, y){

  c.globalAlpha = 1;
  // pavement
  c.fillStyle = "gainsboro"
  c.fillRect(x, y, plot, plot);
  // grass
  c.fillStyle = "lightgreen";
  c.fillRect(x+plot20Perc, y, plot15Perc, plot);
  // trees
  c.fillStyle = "green";
  // frontgarden
  c.fillRect(x+plot85Perc,y+plot65Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot90Perc,y+plot80Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot85Perc,y+plot5Perc,plot10Perc,plot10Perc);
  // treelines
  c.fillRect(x+plot5Perc,y,plot5Perc,plot5Perc);
  c.fillRect(x+plot5Perc,y+plot15Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot5Perc,y+plot25Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot5Perc,y+plot35Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot5Perc,y+plot45Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot5Perc,y+plot55Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot5Perc,y+plot80Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot5Perc,y+plot65Perc,plot5Perc,plot5Perc);

  // flowers
  c.fillStyle = "red";
  c.fillRect(x+plot85Perc,y+plot25Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot90Perc,y+plot30Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot85Perc,y+plot35Perc,plot5Perc,plot5Perc);
  //
  c.fillRect(x+plot65Perc,y,plot5Perc,plot5Perc);
  c.fillRect(x+plot70Perc,y+plot5Perc,plot5Perc,plot5Perc);
  //
  c.fillRect(x+plot85Perc,y+plot95Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot90Perc,y+plot95Perc,plot5Perc,plot5Perc);
  c.fillRect(x+plot95Perc,y+plot90Perc,plot5Perc,plot5Perc);

  // house
  c.fillStyle = "grey" // house left half
  c.fillRect(x+plot50Perc,y+plot10Perc,plot15Perc,plot80Perc);
  c.fillStyle = "dimgrey" // house right half
  c.fillRect(x+plot65Perc,y+plot10Perc,plot15Perc,plot80Perc);
  c.fillRect(x+plot65Perc,y+plot40Perc,plot25Perc,plot20Perc);
  // attick windows
  c.fillStyle = "grey" // house left half
  c.fillRect(x+plot70Perc,y+plot25Perc,plot5Perc,plot10Perc);
  c.fillRect(x+plot70Perc,y+plot65Perc,plot5Perc,plot10Perc);

  // chimney
  c.fillStyle = "#4d4d4d"
  c.fillRect(x+plot60Perc,y+plot10Perc,plot10Perc,plot5Perc);
  // path    
  c.fillStyle = "lightgrey"
  c.fillRect(x+plot90Perc,y+plot45Perc,plot10Perc,plot10Perc);
  c.fillRect(x+plot55Perc,y,plot10Perc,plot10Perc);
  c.fillRect(x+plot70Perc,y+plot90Perc,plot10Perc,plot10Perc);

  c.fillRect(x,y+plot70Perc,plot50Perc,plot10Perc);

/*
  c.globalAlpha = 1;
  // pavement
  c.fillStyle = "gainsboro"
  c.fillRect(x, y, plot, plot);
  // grass
  c.fillStyle = "lightgreen";

  // front door wall
  c.fillStyle = "grey";
  for(ii=40; ii>23; ii--) {
    c.fillRect(x+p1-arrSizes[39-ii], y+plot-arrSizes[39-ii], plot, p1);
  }

  // front door black stiles
  c.fillStyle = "black";
  for(ii=40; ii>30; ii--) {
    c.fillRect(x+p4-arrSizes[40-ii], y+plot-arrSizes[40-ii], p1, p1);
    c.fillRect(x+p14-arrSizes[40-ii], y+plot-arrSizes[40-ii], p1, p1);
  }
  c.fillRect(x-p5, y+p30, p10, p1);

  // front door blue door inside
  c.fillStyle = "lightblue";
  for(ii=40; ii>30; ii--) {
    c.fillRect(x+p6-arrSizes[40-ii], y+plot-arrSizes[39-ii], p9, p1);
  }

  // side door wall
  c.fillStyle = "pink";
  for(ii=40; ii>24; ii--) {
    c.fillRect(x+plot-arrSizes[40-ii], y-arrSizes[40-ii], p1, plot);
  }

  // corner wall
  c.fillStyle = "hotpink";
  for(ii=40; ii>24; ii--) {
    c.fillRect(x+plot-arrSizes[40-ii], y+plot-arrSizes[40-ii], p1, p1);
  }
  
  // Roof
  c.fillStyle = "#666";
  c.fillRect(x-p16, y-p16, plot, plot);
*/


}