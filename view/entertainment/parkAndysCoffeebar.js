// Design for futuristic office building


function parkAndysCoffeebar(c, x, y){
  c.globalAlpha = 1;
  c.fillStyle = "lightgrey";
  c.fillRect(x, y, plot, plot);
  // grass
  c.fillStyle = "lightgreen";
  c.fillRect(x+98, y+2, -46, 96);








  // Bushes Maze
  let mazeTopX = x+52;
  let mazeTopY = y+2
  c.fillStyle = "#3a3";
  // Top hor
  c.fillRect(mazeTopX,mazeTopY,46,3);
  // Left vert
  c.fillRect(mazeTopX,mazeTopY,3,39);
  // Right vert
  c.fillRect(mazeTopX+43,mazeTopY,3,39);
  // inner Left hor
  c.fillRect(mazeTopX+4,mazeTopY+16,15,3);
  // inner Right hor
  c.fillRect(mazeTopX+27,mazeTopY+16,15,3);
  // center Left vert
  c.fillRect(mazeTopX+16,mazeTopY+16,3,24);
  // center Right vert
  c.fillRect(mazeTopX+27,mazeTopY+16,3,24);
  // Lower hori
  c.fillRect(mazeTopX,mazeTopY+37,19,3);
  c.fillRect(mazeTopX+27,mazeTopY+37,19,3);
  
  c.fillStyle = "limegreen"
  // top hor
  c.fillRect(mazeTopX+1,mazeTopY+1,43,1);
  // top inner hor
  c.fillRect(mazeTopX+5,mazeTopY+17,13,1);
  c.fillRect(mazeTopX+28,mazeTopY+17,13,1);
  // outter vert
  c.fillRect(mazeTopX+1,mazeTopY+1,1, 38);
  c.fillRect(mazeTopX+44,mazeTopY+1,1, 38);
  // inner vert
  c.fillRect(mazeTopX+17,mazeTopY+18,1, 20);
  c.fillRect(mazeTopX+28,mazeTopY+18,1, 20);
  // hor down
  c.fillRect(mazeTopX+1,mazeTopY+38,17,1);
  c.fillRect(mazeTopX+28,mazeTopY+38,17,1);

  fnFlower(c, mazeTopX+4, mazeTopY+22,  'pink', 'violet');
  fnBush(c, mazeTopX+10, mazeTopY+20)
  fnBush(c, mazeTopX+4, mazeTopY+26)
  fnFlower(c, mazeTopX+10, mazeTopY+27,  'pink', 'violet');
  fnFlower(c, mazeTopX+4, mazeTopY+33,  'pink', 'violet');
  fnBush(c, mazeTopX+10, mazeTopY+32)

  fnBush(c, mazeTopX+32, mazeTopY+20)
  fnFlower(c, mazeTopX+37, mazeTopY+22,  'pink', 'violet');
  fnFlower(c, mazeTopX+31, mazeTopY+27,  'pink', 'violet');
  fnBush(c, mazeTopX+38, mazeTopY+26)
  fnBush(c, mazeTopX+32, mazeTopY+32)
  fnFlower(c, mazeTopX+37, mazeTopY+33,  'pink', 'violet');

  // Pond
  c.fillStyle = "#bbb"
  c.fillRect(mazeTopX+4,mazeTopY+4,38,11);
  c.fillRect(mazeTopX+20,mazeTopY+4,6,46);
  c.fillStyle = "aqua"
  c.fillRect(mazeTopX+5,mazeTopY+5,36,9);
  c.fillRect(mazeTopX+21,mazeTopY+5,4,45);
  c.fillStyle = "aqua"
  c.fillStyle = "darkturquoise"
  c.fillStyle = "mediumturquoise"
  c.fillStyle = "turquoise"
 
  // Bushes Maze
  mazeTopX = x+52;
  mazeTopY = y+98
  c.fillStyle = "#3a3";
  // Top hor
  c.fillRect(mazeTopX,mazeTopY,46,-3);
  // Left vert
  c.fillRect(mazeTopX,mazeTopY,3,-39);
  // Right vert
  c.fillRect(mazeTopX+43,mazeTopY,3,-39);
  // inner Left hor
  c.fillRect(mazeTopX+4,mazeTopY-16,15,-3);
  // inner Right hor
  c.fillRect(mazeTopX+27,mazeTopY-16,15,-3);
  // center Left vert
  c.fillRect(mazeTopX+16,mazeTopY-16,3,-24);
  // center Right vert
  c.fillRect(mazeTopX+27,mazeTopY-16,3,-24);
  // Lower hori
  c.fillRect(mazeTopX,mazeTopY-37,19,-3);
  c.fillRect(mazeTopX+27,mazeTopY-37,19,-3);
  

  c.fillStyle = "limegreen"
  // top hor
  c.fillRect(mazeTopX+1,mazeTopY-1,43,-1);
  // top inner hor
  c.fillRect(mazeTopX+5,mazeTopY-17,13,-1);
  c.fillRect(mazeTopX+28,mazeTopY-17,13,-1);
  // outter vert
  c.fillRect(mazeTopX+1,mazeTopY-1,1, -38);
  c.fillRect(mazeTopX+44,mazeTopY-1,1, -38);
  // inner vert
  c.fillRect(mazeTopX+17,mazeTopY-18,1, -20);
  c.fillRect(mazeTopX+28,mazeTopY-18,1, -20);
  // hor down
  c.fillRect(mazeTopX+1,mazeTopY-38,17,-1);
  c.fillRect(mazeTopX+28,mazeTopY-38,17,-1);

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

  // Pond
  c.fillStyle = "#bbb"
  c.fillRect(mazeTopX+42,mazeTopY-4,-38,-11);
  c.fillRect(mazeTopX+20,mazeTopY-6,6,-46);
  c.fillStyle = "aqua"
  c.fillRect(mazeTopX+5,mazeTopY-5,36,-9);
  c.fillRect(mazeTopX+21,mazeTopY-5,4,-55);
 





var today = new Date();
var second = today.getSeconds();

let color1 = 'darkturquoise';
color1 = 'aqua';
//color1 = 'blue';
let color2 = 'turquoise'
//color2 = 'red'
let fountain1x = x+60;
let fountain1y = y+11;
let fountain2x = x+72;
let fountain2y = y+11;
let fountain3x = x+84;
let fountain3y = y+11;
if(second % 2 === 0){
  firstFountainRing(c, fountain1x, fountain1y-1, color2)
  secondFountainRing(c, fountain1x-1, fountain1y-2, color1)

  firstFountainRing(c, fountain2x, fountain2y-1, color2)
  secondFountainRing(c, fountain2x-1, fountain2y-2, color1)

  firstFountainRing(c, fountain3x, fountain3y-1, color2)
  secondFountainRing(c, fountain3x-1, fountain3y-2, color1)

  firstFountainRing(c, fountain1x, fountain1y+76, color1)
  secondFountainRing(c, fountain1x-1, fountain1y+75, color2)

  firstFountainRing(c, fountain2x, fountain2y+76, color1)
  secondFountainRing(c, fountain2x-1, fountain2y+75, color2)

  firstFountainRing(c, fountain3x, fountain3y+76, color1)
  secondFountainRing(c, fountain3x-1, fountain3y+75, color2)
  
  //  thirdFountainRing(c, mazeTopX+6, mazeTopY+6, color2)
} else {
  firstFountainRing(c, fountain1x, fountain1y-1, color1)
  secondFountainRing(c, fountain1x-1, fountain1y-2, color2)

  firstFountainRing(c, fountain2x, fountain2y-1, color1)
  secondFountainRing(c, fountain2x-1, fountain2y-2, color2)

  firstFountainRing(c, fountain3x, fountain3y-1, color1)
  secondFountainRing(c, fountain3x-1, fountain3y-2, color2)

  firstFountainRing(c, fountain1x, fountain1y+76, color2)
  secondFountainRing(c, fountain1x-1, fountain1y+75, color1)

  firstFountainRing(c, fountain2x, fountain2y+76, color2)
  secondFountainRing(c, fountain2x-1, fountain2y+75, color1)

  firstFountainRing(c, fountain3x, fountain3y+76, color2)
  secondFountainRing(c, fountain3x-1, fountain3y+75, color1)
  //  thirdFountainRing(c, mazeTopX+6, mazeTopY+6, color1)
}

function fountain(c, x, y, color1, color2){
}
function firstFountainRing(c, x, y, color) {
  c.fillStyle = color;
  c.fillRect(x+2,y,2,1);
  c.fillRect(x+4,y+1,1,1);
  c.fillRect(x+2,y+2,2,1);
  c.fillRect(x+1,y+1,1,1);
}
function secondFountainRing(c, x, y, color) {
  c.fillStyle = color;
//  c.fillStyle = 'red';
  c.fillRect(x+3,y,2,1);
  c.fillRect(x+5,y+1,1,1);
  c.fillRect(x+6,y+2,1,1);
  c.fillRect(x+5,y+3,1,1);
  c.fillRect(x+3,y+4,2,1);
  c.fillRect(x+2,y+3,1,1);
  c.fillRect(x+1,y+2,1,1);
  c.fillRect(x+2,y+1,1,1);
}
function thirdFountainRing(c, x, y, color) {
  c.fillStyle = color;
  c.fillStyle = 'red';
  c.fillRect(x-1,y-1,1,3);
}






  // Road with bridge over water
  c.fillStyle = "limegreen";
  c.fillRect(x+97,y+42,1,16);
  c.fillRect(x+52,y+46,46,8);
  c.fillRect(x+52,y+42,1,16);
  c.fillStyle = "lightgrey";
  c.fillRect(x+52,y+47,46,6);
  // Bridge sides
  c.fillStyle = "grey";
  c.fillRect(x+65,y+46,20,1);
  c.fillRect(x+65,y+53,20,1);

  stairsVert(c, x+64, y+47, '#aaa', 'lightgrey', 6, 8);
  stairsVert(c, x+78, y+47, 'lightgrey', '#aaa', 6, 8);





  // Grass rightside
  c.fillStyle = "limegreen"
  // c.fillRect(x+2,y+2,23,14);
  // c.fillRect(x+2,y+2,14,23);
  c.fillRect(x+2,y+35,15,63);
  c.fillStyle = "lightgreen"
  // c.fillRect(x+3,y+3,21,12);
  // c.fillRect(x+3,y+3,12,21);
  c.fillRect(x+3,y+36,13,61);



  // Terrace 
  c.fillStyle = "silver"
//  c.fillRect(x+76,y+64,21,12);


  // Cafe
  c.fillStyle = "#bbb";
  c.fillStyle = "#aaa";
  c.fillRect(x+2,y+2,39,23);
  c.fillStyle = "#aaa";
  c.fillStyle = "#999";
  c.fillRect(x+2,y+2,39,7);
  let colorsign = '#666'
  colorsign = 'pink'
  colorsign = '#eee'
  colorsign = '#666'
  let colorletters = '#f66'
   colorletters = '#fbb'
  //colorletters = 'hotpink'
  // colorletters = 'magenta'
  andysSign(c, x+10, y+10, '#666', colorletters)
  coffeeSign(c, x+3, y+17, '#666', colorletters)

  // Seats & chairs
  let arrSeatColors1 = ["turquoise", "lightgreen", "aqua", "paleturquoise"];
  let arrSeatColors2 = ["violet", "lightgreen", "grey", "turquoise"];
  let arrSeatColors3 = ["paleturquoise", "#f66", "lightgreen", "turquoise"];
  let arrSeatColors4 = ["darkturquoise", "aqua", "hotpink", "turquoise"];

  tableWithChairsV(c, x+19, y+87, "#aaa", arrSeatColors1);
  tableWithChairsV(c, x+27, y+87, "#aaa", arrSeatColors2);
  tableWithChairsV(c, x+37, y+87, "#aaa", arrSeatColors3);
  tableWithChairsV(c, x+45, y+87, "#aaa", arrSeatColors4);

  tableWithChairsV(c, x+19, y+72, "#aaa", arrSeatColors2);
  tableWithChairsV(c, x+27, y+72, "#aaa", arrSeatColors1);
  tableWithChairsV(c, x+37, y+72, "#aaa", arrSeatColors3);
  tableWithChairsV(c, x+45, y+72, "#aaa", arrSeatColors4);

  tableWithChairsV(c, x+19, y+57, "#aaa", arrSeatColors4);
  tableWithChairsV(c, x+27, y+57, "#aaa", arrSeatColors3);
  tableWithChairsV(c, x+37, y+57, "#aaa", arrSeatColors1);
  tableWithChairsV(c, x+45, y+57, "#aaa", arrSeatColors2);


  tableWithChairsH(c, x+19, y+39, "#aaa", arrSeatColors3);
  tableWithChairsH(c, x+34, y+39, "#aaa", arrSeatColors2);

  tableWithChairsH(c, x+19, y+47, "#aaa", arrSeatColors4);
  tableWithChairsH(c, x+34, y+47, "#aaa", arrSeatColors1);




  // Trees & flowers
  fnFlower(c, x+4, y+92, 'pink', 'violet');
  fnFlower(c, x+10, y+93, 'pink', 'violet');
  fnFlower(c, x+4, y+40, 'pink', 'violet');
  fnFlower(c, x+10, y+39, 'pink', 'violet');
  fnBush(c, x+41, y+3)
  fnBush(c, x+41, y+8)
  fnBush(c, x+41, y+13)
  fnBush(c, x+41, y+18)

  fnBush(c, x+2, y+30)
  fnBush(c, x+7, y+30)
  fnBush(c, x+12, y+30)
  
  // trees in park
  treeXSmall(c, x+54, y+40);
  treeXSmall(c, x+62, y+40);
  treeXSmall(c, x+81, y+40);
  treeXSmall(c, x+89, y+40);
  treeXSmall(c, x+54, y+53);
  treeXSmall(c, x+62, y+53);
  treeXSmall(c, x+81, y+53);
  treeXSmall(c, x+89, y+53);

  // trees on terrace
  treeMedium(c, x+18, y+27);
  treeSmall(c, x+22, y+61);
  treeMedium(c, x+41, y+27);
  treeMedium(c, x+41, y+60);

  treeMedium(c, x+28, y+79);

  treeXSmall(c, x+47, y+3);
  treeXSmall(c, x+47, y+11);
  treeXSmall(c, x+47, y+19);

  // greenHouse(c, x+49, y+2, 5, 18, 8, 5, 'white', "rgba(175,238,238, 0.5)");
  greenHouse(c, x+25, y+25, 7, 22, 3, 2, 'white', "rgba(175,238,238, 0.5)");
  greenHouse(c, x+41, y+2, 7, 22, 1, 1, 'white', "rgba(175,238,238, 0.5)");
  andysBushes(c, x+4, y+88, '#3a3', 'limegreen');
}








function coffeeSign(c, x, y, color1, color2) {
  c.fillStyle = color1;
//  c.fillRect(x,y,37,7);
  coffeeLetters(c,x+1,y+1, color2)
}
function coffeeLetters(c,x,y,color){
  charN_C(c,x,y, color)
  charN_O(c,x+4,y, color)
  charN_F(c,x+8,y, color)
  charN_F(c,x+12,y, color)
  charN_E(c,x+16,y, color)
  charN_E(c,x+20,y, color)
  charN_B(c,x+24,y, color)
  charN_A(c,x+28,y, color)
  charN_R(c,x+32,y, color)
}

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







