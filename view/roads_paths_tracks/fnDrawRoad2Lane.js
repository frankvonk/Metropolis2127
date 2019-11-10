function fnDrawRoad2Lane(c, x, y,i,j){
  c.globalAlpha = 1;
  

//  c.fillStyle = "silver";
c.fillStyle = "aqua";
//c.fillStyle = "turquoise";
//  c.fillStyle = '#0d0221';  // blackest purple
//  c.fillStyle = '#241734'; // black purple
//  c.fillStyle = 'transparent';
  
// WHOLE PLOT
//c.fillRect(x, y, plot, plot);



c.fillStyle = "grey";
c.fillStyle = "#920075"; // grid pink dark
c.fillStyle = "#f6019d"; // hot pink
c.fillStyle = "lightgreen";
c.fillStyle = "#19d865"; // lightgreen rich

//c.fillStyle = "#d40078"; // hot pink
//c.fillStyle = '#241734'; // black purple
//c.fillRect(x+plot2Perc, y+plot2Perc, plot96Perc, plot96Perc);
  c.fillStyle = '#241734'; // black purple
  c.fillStyle = "lightgreen";

  
c.fillRect(x, y, plot, plot);
//c.fillRect(x+plot2Perc, y+plot2Perc, plot96Perc, plot96Perc);


c.fillStyle = "white";
// white border of empty plot
//c.fillRect(x+plot18Perc, y+plot18Perc, plot64Perc, plot64Perc);



c.fillStyle = "#791e94"; // med purpink
c.fillStyle = "aqua";
c.fillStyle = "#d865ff"; // lightpink
//c.fillRect(x+plot18Perc, y+plot18Perc, plot60Perc, plot60Perc);

c.fillStyle = '#241734'; // black purple
c.fillStyle = "silver"; // 

// middle of empty plot
//c.fillRect(x+plot20Perc, y+plot20Perc, plot60Perc, plot60Perc);

c.fillStyle = "lightgreen";
//c.fillRect(x+plot47Perc, y+plot47Perc, plot5Perc, plot10Perc);

c.fillStyle = 'transparent';
c.fillStyle = '#241734'; // black purple
c.fillStyle = "#6519d8"; // synthwave blue
c.fillStyle = "#d865ff"; // lightpink
c.fillStyle = "white";
//dot middle of road
//c.fillRect(x+plot47Perc, y+plot47Perc, plot5Perc, plot5Perc);


////////////lightgreen +!!!!!!!!!
////////////SILVER!!!!!!!!!
c.fillStyle = "silver"; // 
c.globalAlpha = 1;



c.fillStyle = 'transparent';
c.fillStyle = "silver"; // 

let sdirection = aRoads[i][j].direction; 

//  console.log('!!!!'+sdirection);
//  console.log('!!!!');
  if(sdirection == 'dead'){
    c.fillRect(x+plot10Perc, y+plot10Perc, plot80Perc, plot80Perc);
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot45Perc, y+plot45Perc, plot10Perc, plot10Perc);
  }

  else if(sdirection == 'intersection'){
    c.fillStyle = "silver"; // 
    c.fillRect(x+plot10Perc, y, plot80Perc, plot);
    c.fillRect(x, y+plot10Perc, plot, plot80Perc);
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot45Perc, y, plot10Perc, plot10Perc);
    c.fillRect(x+plot45Perc, y+plot90Perc, plot10Perc, plot10Perc);
    c.fillRect(x, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillRect(x+plot90Perc, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot90Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot90Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot5Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot5Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }

  else if(sdirection == 'tsplit_12_3_6'){
    c.fillStyle = "silver"; // 
    c.fillRect(x+plot10Perc, y, plot80Perc, plot);
    c.fillRect(x+plot10Perc, y+plot10Perc, plot90Perc, plot80Perc);
    // Vertical top to down blocks
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot45Perc, y, plot10Perc, plot10Perc);
    c.fillRect(x+plot45Perc, y+plot90Perc, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot90Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot90Perc, plot5Perc, plot5Perc);
    // Horizontal left to right blocks
    c.fillStyle = "lightgreen";
    c.fillRect(x, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillRect(x+plot90Perc, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot90Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }

  else if(sdirection == 'tsplit_3_6_9'){
    c.fillStyle = "silver"; // 
    c.fillRect(x, y+plot10Perc, plot, plot80Perc);
    c.fillRect(x+plot10Perc, y+plot10Perc, plot80Perc, plot90Perc);
    // Vertical top to down blocks
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot45Perc, y+plot90Perc, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot90Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot90Perc, plot5Perc, plot5Perc);
    // Horizontal left to right blocks
    c.fillStyle = "lightgreen";
    c.fillRect(x, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillRect(x+plot90Perc, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot5Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot5Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }

  else if(sdirection == 'tsplit_6_9_12'){
    c.fillStyle = "silver"; // 
    c.fillRect(x+plot10Perc, y, plot80Perc, plot);
    c.fillRect(x, y+plot10Perc, plot90Perc, plot80Perc);
    // Vertical top to down blocks
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot45Perc, y, plot10Perc, plot10Perc);
    c.fillRect(x+plot45Perc, y+plot90Perc, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot90Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot90Perc, plot5Perc, plot5Perc);
    // Horizontal left to right blocks
    c.fillStyle = "lightgreen";
    c.fillRect(x, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillRect(x+plot90Perc, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot5Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot5Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }

  else if(sdirection == 'tsplit_9_12_3'){
    c.fillStyle = "silver"; // 
    c.fillRect(x+plot10Perc, y, plot80Perc, plot90Perc );
    c.fillRect(x, y+plot10Perc, plot, plot80Perc);
    // Vertical top to down blocks
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot5Perc, plot5Perc, plot5Perc);
    // Horizontal left to right blocks
    c.fillStyle = "lightgreen";
    c.fillRect(x, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillRect(x+plot90Perc, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillRect(x+plot45Perc, y, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot5Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot5Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }

  else if(sdirection == 'corner_12_3'){
    c.fillRect(x+plot10Perc, y, plot80Perc, plot80Perc);
    c.fillRect(x+plot10Perc, y+plot10Perc, plot90Perc, plot80Perc);
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot90Perc, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillRect(x+plot45Perc, y, plot10Perc, plot10Perc); 
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }

  else if(sdirection == 'corner_3_6'){
    c.fillRect(x+plot10Perc, y+plot10Perc, plot90Perc, plot80Perc);
    c.fillRect(x+plot10Perc, y+plot10Perc, plot80Perc, plot90Perc); 
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot90Perc, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillRect(x+plot45Perc, y+plot90Perc, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot90Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot90Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot90Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }

  else if(sdirection == 'corner_6_9'){
    c.fillRect(x+plot10Perc, y+plot10Perc, plot80Perc, plot90Perc);
    c.fillRect(x, y+plot10Perc, plot80Perc, plot80Perc); 
    c.fillStyle = "lightgreen";
    c.fillRect(x, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillRect(x+plot45Perc, y+plot90Perc, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot90Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot90Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot5Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot5Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }

  else if(sdirection == 'corner_9_12'){
    c.fillRect(x+plot10Perc, y, plot80Perc, plot80Perc);
    c.fillRect(x, y+plot10Perc, plot90Perc, plot80Perc); 
    c.fillStyle = "lightgreen";
    c.fillRect(x, y+plot45Perc, plot10Perc, plot10Perc);
    c.fillRect(x+plot45Perc, y, plot10Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot5Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot5Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }

  else if(sdirection == 'straight_12_6'){ 
    c.fillStyle = "silver"; // 
    c.fillRect(x+plot10Perc, y, plot80Perc, plot);
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot45Perc, y, plot10Perc, plot);
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot45Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot65Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot85Perc, plot5Perc, plot5Perc);

    c.fillRect(x+plot70Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot45Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot65Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot85Perc, plot5Perc, plot5Perc);
  }

  else if(sdirection == 'straight_3_9'){ 
    c.fillStyle = "silver"; // 
    c.fillRect(x, y+plot10Perc, plot, plot80Perc);  
    c.fillStyle = "lightgreen";
    c.fillRect(x, y+plot45Perc, plot, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot5Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot45Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot65Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot85Perc, y+plot25Perc, plot5Perc, plot5Perc);

    c.fillRect(x+plot5Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot45Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot65Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot85Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }
  else if(sdirection == 'dead_12'){
    c.fillRect(x+plot10Perc, y, plot80Perc, plot90Perc);
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot45Perc, y, plot10Perc, plot50Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot45Perc, plot5Perc, plot5Perc);

    c.fillRect(x+plot70Perc, y+plot5Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot45Perc, plot5Perc, plot5Perc);

  }
  else if(sdirection == 'dead_3'){
    c.fillRect(x+plot10Perc, y+plot10Perc, plot90Perc, plot80Perc);
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot45Perc, y+plot45Perc, plot55Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot45Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot65Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot85Perc, y+plot25Perc, plot5Perc, plot5Perc);

    c.fillRect(x+plot45Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot65Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot85Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }
  else if(sdirection == 'dead_6'){
    c.fillRect(x+plot10Perc, y+plot10Perc, plot80Perc, plot90Perc);
    c.fillStyle = "lightgreen";
    c.fillRect(x+plot45Perc, y+plot45Perc, plot10Perc, plot55Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot25Perc, y+plot45Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot65Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot85Perc, plot5Perc, plot5Perc);

    c.fillRect(x+plot70Perc, y+plot45Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot65Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot70Perc, y+plot85Perc, plot5Perc, plot5Perc);
  }
  else if(sdirection == 'dead_9'){
    c.fillRect(x, y+plot10Perc, plot90Perc, plot80Perc);
    c.fillStyle = "lightgreen";
    c.fillRect(x, y+plot45Perc, plot50Perc, plot10Perc);
    c.fillStyle = "white";
    c.fillRect(x+plot5Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot25Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot45Perc, y+plot25Perc, plot5Perc, plot5Perc);

    c.fillRect(x+plot5Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot25Perc, y+plot70Perc, plot5Perc, plot5Perc);
    c.fillRect(x+plot45Perc, y+plot70Perc, plot5Perc, plot5Perc);
  }
}