


function fnDrawHouse1x1_02(c, y, x){
  c.globalAlpha = 1;
// green hedge outside
c.fillStyle = "forestgreen";
c.fillStyle = "limegreen";
// grass
c.fillStyle = "lightgreen";
c.fillRect(y, x, plot, plot);
// trees
c.fillStyle = "green";
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
c.fillRect(y+plot50Perc,x+plot10Perc,plot15Perc,plot80Perc);
c.fillStyle = "dimgrey" // house right half
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
c.fillRect(y+plot90Perc,x+plot45Perc,plot10Perc,plot10Perc);
c.fillRect(y+plot55Perc,x,plot10Perc,plot10Perc);
c.fillRect(y+plot70Perc,x+plot90Perc,plot10Perc,plot10Perc);

c.fillRect(y,x+plot70Perc,plot50Perc,plot10Perc);
}

