// Motel


function house1x1_04(c, x, y){
  c.globalAlpha = 1;

 

  // Ground or grass
  c.fillStyle = "lightgrey";
  c.fillRect(x, y, plot, plot);
  

  // Roof
  color = '#bbb';
  c.fillStyle = color;
  c.fillStyle = "#aaa";
  c.fillStyle = "#999";
  c.fillRect(x+2, y+2, 63, 23);

  c.fillRect(x+2, y+35, 25, 63);
  c.fillRect(x+7, y+75, 91, 23);

  c.fillStyle = "#aaa";
  c.fillStyle = "#bbb";
  c.fillStyle = "#aaa";
  c.fillRect(x+3, y+3, 61, 21);

  c.fillRect(x+3, y+36, 23, 61);
  c.fillRect(x+20, y+76, 77, 21);



  stairsHor(c, x+40, y+30, '#bbb', '#999', 4, 8);
  stairsHor(c, x+44, y+30, '#999', '#bbb', 4, 8);
  
  stairsVert(c, x+60, y+65, '#bbb', '#999', 5, 8);
  stairsVert(c, x+60, y+60, '#999', '#bbb', 5, 8);
  
  color = '#aaa';
  c.fillStyle = color;
  // c.fillRect(x+3, y+3, 82, 38);
  // c.fillRect(x+3, y+3, 28, 52);
  c.fillStyle = '#eee'
  // c.fillRect(x+4, y+4, 80, 36);
  // c.fillRect(x+4, y+4, 26, 50);

  // windows
  color = 'grey';
  c.fillStyle = color;
  // c.fillRect(x+40, y+10, 10, 4);
  // c.fillRect(x+40, y+20, 10, 4);
  // c.fillRect(x+40, y+30, 10, 4);
  color= "aqua"
  c.fillStyle = color;
  // c.fillRect(x+41, y+11, 8, 2);
  // c.fillRect(x+41, y+21, 8, 2);
  // c.fillRect(x+41, y+31, 8, 2);

  // Lines on road
  c.fillStyle = 'white';
  c.fillRect(x+90, y+6, 9, 1);
  c.fillRect(x+90, y+16, 9, 1);
  c.fillRect(x+90, y+26, 9, 1);
  c.fillRect(x+90, y+36, 9, 1);

  // Flowers
  for (let i = 0; i < 8; i++){
//    fnBush(c, x+92, y+22+i*6);
  }
  for (let i = 0; i < 9; i++){
//    fnBush(c, x+6+i*6, y+70);
  }
  
  vehicleFamilyCar1(c, x+83, y+7, "cornflowerblue", "down");
  vehicleFamilyCar1(c, x+72, y+7, "green", "up");
  motelSign(c, x+3, y+3)
}













function motelSign(c, x, y) {
  c.fillStyle = '#777'
  c.fillRect(x, y, 25, 9);
  c.fillStyle = 'cornflowerblue'
  c.fillStyle = '#999'
  c.fillRect(x+1, y+1, 23, 7);
  motelLetters(c, x+3, y+1, 'white');
}
function motelLetters(c, x, y, color){
  c.fillStyle = color;
  charN_M(c,x,y+1)
  charN_O(c,x+5,y+1)
  charN_T(c,x+9, y+1)
  charN_E(c,x+13, y+1)
  charN_L(c,x+17, y+1)
}