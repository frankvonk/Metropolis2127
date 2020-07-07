


function house1x1_02(c, x, y){
  c.globalAlpha = 1;
// green hedge outside
c.fillStyle = "forestgreen";
c.fillStyle = "limegreen";
// grass
c.fillStyle = "lightgreen";
c.fillRect(x, y, plot, plot);
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
c.fillStyle = "magenta";
c.fillRect(x+plot20Perc,y+plot15Perc,plot5Perc,plot5Perc);
c.fillRect(x+plot30Perc,y+plot15Perc,plot5Perc,plot5Perc);
c.fillRect(x+plot25Perc,y+plot20Perc,plot5Perc,plot5Perc);
//
c.fillRect(x+plot35Perc,y+plot40Perc,plot5Perc,plot5Perc);
c.fillRect(x+plot40Perc,y+plot45Perc,plot5Perc,plot5Perc);
//
c.fillRect(x+plot45Perc,y+plot95Perc,plot5Perc,plot5Perc);
c.fillRect(x+plot35Perc,y+plot95Perc,plot5Perc,plot5Perc);
c.fillRect(x+plot40Perc,y+plot90Perc,plot5Perc,plot5Perc);




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
}

