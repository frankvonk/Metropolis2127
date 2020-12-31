




function flowerbedHor(c, x, y, col1, col2){
  fnFlower(c, x, y, col1, col2);
  fnFlower(c, x+5, y+1, col1, col2);
  fnFlower(c, x+10, y, col1, col2);
}
function flowerbedVert(c, x, y, col1, col2){
  fnFlower(c, x, y, col1, col2);
  fnFlower(c, x+1, y+5, col1, col2);
  fnFlower(c, x, y+10, col1, col2);
}

function fnFlower(c, x, y, col1, col2){
  c.fillStyle = "#3a3";
  c.fillRect(x+1,y,3,1);
  c.fillRect(x+2,y-1,1,3);
  c.fillStyle = col2;
  c.fillRect(x,y,1,2);
  c.fillRect(x+1,y-2,2,1);
  c.fillRect(x+4,y-1,1,2);
  c.fillRect(x+2,y+2,2,1);
  c.fillStyle = col1;
  c.fillRect(x+1,y+1,1,2);
  c.fillRect(x,y-1,2,1);
  c.fillRect(x+3,y-2,1,2);
  c.fillRect(x+3,y+1,2,1);
}

function fnBush(c, x, y){
  c.fillStyle = "green";
  c.fillRect(x+1,y,2,4);
  c.fillRect(x,y+1,4,2);
  c.fillStyle = "#3a3";
  c.fillRect(x+1,y+1,2,2);
}

function treeXSmall(c, x, y){
  fnTreeTop(c, x, y);
}

function treeSmall(c, x, y){
  fnTreeTop(c, x, y);
  fnTreeTop(c, x+2, y+3);
  fnTreeTop(c, x-2, y+3);
}

function treeMedium(c, x, y){
  fnTreeTop(c, x, y);
  fnTreeTop(c, x, y+6);
  fnTreeTop(c, x+6, y);
  fnTreeTop(c, x+6, y+6);
  fnTreeTop(c, x+3, y+3);
}

function treeLarge(c, x, y){ 
  // corners
  fnTreeTop(c, x+2, y+2);
  fnTreeTop(c, x+2, y+14);
  fnTreeTop(c, x+14, y+2);
  fnTreeTop(c, x+14, y+14);
  // outsides  
  fnTreeTop(c, x, y+8);
  fnTreeTop(c, x+16, y+8);
  fnTreeTop(c, x+8, y+16);
  fnTreeTop(c, x+8, y);
  // center
  fnTreeTop(c, x+5, y+5);
  fnTreeTop(c, x+5, y+11);
  fnTreeTop(c, x+11, y+5);
  fnTreeTop(c, x+11, y+11);
  fnTreeTop(c, x+8, y+8);  
}

function fnTreeTop(c, x, y){
  c.fillStyle = "green";
  c.fillRect(x+2,y,3,1);
  c.fillRect(x+1,y+1,5,5);
  c.fillRect(x,y+2,1,3);
  c.fillRect(x+6,y+2,1,3);
  c.fillRect(x+2,y+6,3,1);
  c.fillStyle = "#3a3";
  c.fillRect(x+1,y+2,5,3);
  c.fillRect(x+2,y+1,3,5);
}
