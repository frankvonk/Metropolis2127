


function fnDrawHouse1x1_04(c, y, x){
  c.globalAlpha = 1;
// green hedge outside
c.fillStyle = "silver";
c.fillStyle = "cornflowerblue";
c.fillStyle = "forestgreen";
c.fillStyle = "limegreen";
// grass
c.fillStyle = "lightgreen";
c.fillStyle = "cornflowerblue";
c.fillRect(y, x, plot, plot);
// trees
c.fillStyle = "green";
c.fillStyle = "silver";
// frontgarden
c.fillRect(y+plot85Perc,x+plot65Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot90Perc,x+plot80Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot85Perc,x+plot5Perc,plot10Perc,plot10Perc);
// treelines
c.fillRect(y+plot5Perc,x,plot5Perc,plot5Perc);
c.fillRect(y+plot5Perc,x+plot15Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot5Perc,x+plot25Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot5Perc,x+plot35Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot5Perc,x+plot45Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot5Perc,x+plot55Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot5Perc,x+plot80Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot5Perc,x+plot65Perc,plot5Perc,plot5Perc);
// flowers
c.fillStyle = "magenta";
c.fillStyle = "cornflowerblue";
c.fillRect(y+plot20Perc,x+plot15Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot30Perc,x+plot15Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot25Perc,x+plot20Perc,plot5Perc,plot5Perc);
//
c.fillRect(y+plot35Perc,x+plot40Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot40Perc,x+plot45Perc,plot5Perc,plot5Perc);
//
c.fillRect(y+plot45Perc,x+plot95Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot35Perc,x+plot95Perc,plot5Perc,plot5Perc);
c.fillRect(y+plot40Perc,x+plot90Perc,plot5Perc,plot5Perc);
// house
c.fillStyle = "grey" // house left half
c.fillStyle = "silver";
c.fillRect(y+plot50Perc,x+plot10Perc,plot15Perc,plot80Perc);
c.fillStyle = "dimgrey" // house right half
c.fillStyle = "cornflowerblue";
c.fillRect(y+plot65Perc,x+plot10Perc,plot15Perc,plot80Perc);
c.fillRect(y+plot65Perc,x+plot40Perc,plot25Perc,plot20Perc);
// attick windows
c.fillStyle = "grey" // house left half
c.fillStyle = "silver";
c.fillRect(y+plot70Perc,x+plot25Perc,plot5Perc,plot10Perc);
c.fillRect(y+plot70Perc,x+plot65Perc,plot5Perc,plot10Perc);

// chimney
c.fillStyle = "#4d4d4d"
c.fillStyle = "cornflowerblue";
c.fillRect(y+plot60Perc,x+plot10Perc,plot10Perc,plot5Perc);
// path    
c.fillStyle = "lightgrey"
c.fillStyle = "silver";
c.fillRect(y+plot90Perc,x+plot45Perc,plot10Perc,plot10Perc);
c.fillRect(y+plot55Perc,x,plot10Perc,plot10Perc);
c.fillRect(y+plot70Perc,x+plot90Perc,plot10Perc,plot10Perc);

c.fillRect(y,x+plot70Perc,plot50Perc,plot10Perc);

  c.globalAlpha = 1;
  // pavement
  c.fillStyle = "gainsboro"
  c.fillStyle = "silver";
  c.fillRect(y, x, plot, plot);
  // grass
  c.fillStyle = "lightgreen";
  c.fillStyle = "silver";
  c.fillRect(y+plot20Perc, x, plot15Perc, plot);
  // trees
  c.fillStyle = "green";
  c.fillStyle = "silver";
  // frontgarden
  c.fillRect(y+plot85Perc,x+plot65Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot90Perc,x+plot80Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot85Perc,x+plot5Perc,plot10Perc,plot10Perc);
  // treelines
  c.fillRect(y+plot5Perc,x,plot5Perc,plot5Perc);
  c.fillRect(y+plot5Perc,x+plot15Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot5Perc,x+plot25Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot5Perc,x+plot35Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot5Perc,x+plot45Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot5Perc,x+plot55Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot5Perc,x+plot80Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot5Perc,x+plot65Perc,plot5Perc,plot5Perc);

  // flowers
  c.fillStyle = "red";
  c.fillStyle = "silver";
  c.fillRect(y+plot85Perc,x+plot25Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot90Perc,x+plot30Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot85Perc,x+plot35Perc,plot5Perc,plot5Perc);
  //
  c.fillRect(y+plot65Perc,x,plot5Perc,plot5Perc);
  c.fillRect(y+plot70Perc,x+plot5Perc,plot5Perc,plot5Perc);
  //
  c.fillRect(y+plot85Perc,x+plot95Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot90Perc,x+plot95Perc,plot5Perc,plot5Perc);
  c.fillRect(y+plot95Perc,x+plot90Perc,plot5Perc,plot5Perc);

  // house
  c.fillStyle = "grey" // house left half
  c.fillStyle = "silver";
  c.fillRect(y+plot50Perc,x+plot10Perc,plot15Perc,plot80Perc);
  c.fillStyle = "dimgrey" // house right half
  c.fillStyle = "silver";
  c.fillRect(y+plot65Perc,x+plot10Perc,plot15Perc,plot80Perc);
  c.fillRect(y+plot65Perc,x+plot40Perc,plot25Perc,plot20Perc);
  // attick windows
  c.fillStyle = "grey" // house left half
  c.fillRect(y+plot70Perc,x+plot25Perc,plot5Perc,plot10Perc);
  c.fillRect(y+plot70Perc,x+plot65Perc,plot5Perc,plot10Perc);

  // chimney
  c.fillStyle = "#4d4d4d"
  c.fillRect(y+plot60Perc,x+plot10Perc,plot10Perc,plot5Perc);
  // path    
  c.fillStyle = "lightgrey"
  c.fillStyle = "silver";
  c.fillRect(y+plot90Perc,x+plot45Perc,plot10Perc,plot10Perc);
  c.fillRect(y+plot55Perc,x,plot10Perc,plot10Perc);
  c.fillRect(y+plot70Perc,x+plot90Perc,plot10Perc,plot10Perc);

  c.fillRect(y,x+plot70Perc,plot50Perc,plot10Perc);

















  


}

