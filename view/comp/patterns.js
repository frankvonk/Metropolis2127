


// Note to self, this is not efficient as a greenhouse,
// each window is calculated and places individually,
// while you can make 1 huge window and just use the loops for the borders between
// so they can overlap the huge single glass part.
// However, keeping it like this i can also use this for floortiles etc...
// Yet not efficient as way to many calculations.
// Greenhouse, 1px borders with set size window panes in between
function greenHouse(c, x, y, windowWidth, windowHeight, numberOfWindowsHorizontal, numberOfWindowsVertical, colorBorders, colorWindows) {

  for(w=0; w<numberOfWindowsVertical; w++){
    let yPos = y+w*(windowHeight+1);
    
    for(z=0; z<numberOfWindowsHorizontal; z++){
      let xPos = x+z*(windowWidth+1);
      c.fillStyle = colorBorders;
      c.fillRect(xPos,y,1,numberOfWindowsVertical*(windowHeight+1));
    }
  
    for(vert=0; vert<numberOfWindowsHorizontal; vert++) {
      c.fillStyle = colorBorders;
      c.fillRect(x,yPos,numberOfWindowsHorizontal*(windowWidth+1),1);
  
      c.fillStyle = colorWindows;
      c.fillRect(x+1+vert*(windowWidth+1),yPos+1,windowWidth,windowHeight);
    }
  }
  
  c.fillStyle = colorBorders;
  c.fillRect(x+numberOfWindowsHorizontal*(windowWidth+1),y,1,numberOfWindowsVertical*(windowHeight+1));
  c.fillRect(x,y+numberOfWindowsVertical*(windowHeight+1),numberOfWindowsHorizontal*(windowWidth+1)+1,1);
}  






// Furniture
function tableWithChairsH(c, x, y, tableColor, arrSeatColors) {   
  chairW(c,x,y, tableColor, arrSeatColors[0]);
  chairW(c,x,y+3, tableColor, arrSeatColors[1]);  

  c.fillStyle = tableColor;
  c.fillRect(x+4,y,3,5);

  chairE(c,x+8,y, tableColor, arrSeatColors[2]);
  chairE(c,x+8,y+3, tableColor, arrSeatColors[3]);
}

function tableWithChairsV(c, x, y, tableColor, arrSeatColors) {   
  chairN(c,x,y, tableColor, arrSeatColors[0]);
  chairN(c,x+3,y, tableColor, arrSeatColors[1]);

  c.fillStyle = tableColor;
  c.fillRect(x,y+4,5,3);

  chairS(c,x,y+8, tableColor, arrSeatColors[2]);
  chairS(c,x+3,y+8, tableColor, arrSeatColors[3]);
}

function chairN(c, x, y, backColor, seatColor) {
  c.fillStyle = backColor;
  c.fillRect(x,y,2,1);    
  c.fillStyle = seatColor;
  c.fillRect(x,y+1,2,2);
}
function chairE(c, x, y, backColor, seatColor) {
  c.fillStyle = seatColor;
  c.fillRect(x,y,2,2);
  c.fillStyle = backColor;
  c.fillRect(x+2,y,1,2);    
}
function chairS(c, x, y, backColor, seatColor) {
  c.fillStyle = seatColor;
  c.fillRect(x,y,2,2);
  c.fillStyle = backColor;
  c.fillRect(x,y+2,2,1);    
}
function chairW(c, x, y, backColor, seatColor) {
  c.fillStyle = backColor;
  c.fillRect(x,y,1,2);    
  c.fillStyle = seatColor;
  c.fillRect(x+1,y,2,2);
}










function stairsHor(c, x, y, color1, color2, width, height) {
  for(let s=0; s<height; s++){
    if(s % 2 === 0) {
      c.fillStyle = color1;
      c.fillRect(x, y+s, width, 1);    
    } else {
      c.fillStyle = color2;
      c.fillRect(x, y+s, width, 1);    
    }
  }
}

function stairsVert(c, x, y, color1, color2, width, height) {
  for(let s=0; s<height; s++){
    if(s % 2 === 0) {
      c.fillStyle = color1;
      c.fillRect(x+s, y, 1, width);    
    } else {
      c.fillStyle = color2;
      c.fillRect(x+s, y, 1, width);    
    }
  }
}
