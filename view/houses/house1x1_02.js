// Design for futuristic office building

function house1x1_02(c, x, y){
  c.globalAlpha = 1;
  c.fillStyle = "lightgrey";
  c.fillRect(x, y, plot, plot);

  // Grass hedge
  c.fillStyle = "limegreen"
  c.fillRect(x+2,y+2,96,96);
  c.fillStyle = "lightgreen"
  c.fillRect(x+3,y+3,94,94);
  c.fillStyle = "limegreen"
  c.fillRect(x+4,y+4,92,92);
  c.fillStyle = "lightgrey";
  c.fillStyle = "#aaa";
  c.fillRect(x+5, y+5, 90, 90);

  

  fnFlower(c, x+14, y+14,  'pink', 'violet');
  // treeMedium(c, x+12, y+75);
  treeMedium(c, x+14, y+73);
  treeLarge(c, x+70, y+70)
  /*
  // Trees & flowers
  fnFlower(c, x+4, y+92, 'pink', 'violet');
  fnBush(c, x+41, y+3)
  
  // trees in park
  treeXSmall(c, x+89, y+53);
  treeSmall(c, x+22, y+61);
  andysBushes(c, x+4, y+88, '#3a3', 'limegreen');
*/

  var grd = c.createLinearGradient(0, 50, 50, 0);
  grd.addColorStop(0, "rgba(200, 255, 255, 0.5)");
  grd.addColorStop(1, "rgba(20, 255, 255, 0.6)");
  c.fillStyle = grd;
  c.fillRect(x+19, y+19, 62, 62);

  let colorFrame = '#fff';
  greenHouse(c, x+18, y+18, 2, 2, 21, 21, colorFrame, 'transparent');

  // Main Building
  let colorBuilding = '#eee'
  c.fillStyle = colorBuilding;
  c.fillRect(x+18, y+18, 15, 12);
  c.fillRect(x+40, y+18, 20, 28);
  c.fillRect(x+67, y+18, 15, 12);

  c.fillRect(x+18, y+43, 64, 20);
  c.fillRect(x+22, y+63, 56, 6);



/*
  c.fillStyle = "limegreen"
  // top hor
  c.fillRect(mazeTopX+1,mazeTopY+1,43,1);

  fnFlower(c, mazeTopX+4, mazeTopY+22,  'pink', 'violet');
  fnBush(c, mazeTopX+10, mazeTopY+20)

*/
/*
 
  // Bushes Maze
  mazeTopX = x+52;
  mazeTopY = y+98
  c.fillStyle = "#3a3";
  // Top hor
  c.fillRect(mazeTopX,mazeTopY,46,-3);
  */
/*
  c.fillStyle = "limegreen"
  // top hor
  c.fillRect(mazeTopX+1,mazeTopY-1,43,-1);

  fnFlower(c, mazeTopX+4, mazeTopY-23,  'pink', 'violet');
  fnBush(c, mazeTopX+10, mazeTopY-24)
  fnBush(c, mazeTopX+4, mazeTopY-30)
  fnFlower(c, mazeTopX+10, mazeTopY-28,  'pink', 'violet');
  fnFlower(c, mazeTopX+4, mazeTopY-34,  'pink', 'violet');
  fnBush(c, mazeTopX+10, mazeTopY-36)

  fnBush(c, mazeTopX+32, mazeTopY-24)
  fnFlower(c, mazeTopX+37, mazeTopY-23,  'pink', 'violet');
  fnFlower(c, mazeTopX+31, mazeTopY-28,  'pink', 'violet');
  fnBush(c, mazeTopX+38, mazeTopY-30)
  fnBush(c, mazeTopX+32, mazeTopY-36)
  fnFlower(c, mazeTopX+37, mazeTopY-34,  'pink', 'violet');
*/


  // Grass rightside
  c.fillStyle = "limegreen"
  // c.fillRect(x+2,y+2,23,14);
  c.fillStyle = "lightgreen"
  // c.fillRect(x+3,y+3,21,12);


  // Terrace 
  c.fillStyle = "silver"
//  c.fillRect(x+76,y+64,21,12);

  let colorsign = '#bbb'
  let colorletters = 'black'
  officeSign(c, x+26, y+54, colorsign, colorletters)
  // andysSign(c, x+10, y+10, '#666', colorletters)
}




function officeSign(c, x, y, color1, color2) {
  c.fillStyle = color1;
  c.fillRect(x+3,y,41,7);
  officeLetters(c,x+1,y+1, color2)
}
function officeLetters(c,x,y,color){
  charN_O(c,x+4,y, color)
  charN_F(c,x+8,y, color)
  charN_F(c,x+12,y, color)
  charN_I(c,x+16,y, color)
  charN_C(c,x+18,y, 'cornflowerblue')
  charN_E(c,x+22,y, color)
  charN_N(c,x+26,y, color)
  charN_T(c,x+30,y, color)
  charN_E(c,x+34,y, color)
  charN_R(c,x+38,y, color)
}
/*
function andysSign(c, x, y, color1, color2) {
  c.fillStyle = color1;
//  c.fillRect(x,y,23,7);
  andysLetters(c,x+1,y+1, color2)
}
function andysLetters(c,x,y,color){
  charN_A(c,x,y, color)
  charN_N(c,x+4,y, color)
  charN_D(c,x+8,y, color)
  charN_Y(c,x+12,y, color)
  charN_Apos(c,x+16,y, color)
  charN_S(c,x+18,y, color)
}

function andysBushes(c, x, y, colorOutline, colorFill){
  l_CharW_A(c, x, y, colorOutline, colorFill) 
  l_CharW_N(c, x, y-8, colorOutline, colorFill) 
  l_CharW_D(c, x, y-16, colorOutline, colorFill) 
  l_CharW_Y(c, x, y-24, colorOutline, colorFill) 
  l_CharW_Apos(c, x, y-32, colorOutline, colorFill) 
  l_CharW_S(c, x, y-36, colorOutline, colorFill) 
}


*/
