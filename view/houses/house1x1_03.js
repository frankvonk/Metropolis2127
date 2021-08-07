// Residential tower


function house1x1_03(c, x, y){

  c.globalAlpha = 1;
  // pavement
  c.fillStyle = "lightgrey"
  c.fillRect(x, y, plot, plot);



  c.fillStyle = "#bbb"
  c.fillRect(x+20, y+20, 60, 60);
  c.fillStyle = "#ccc"
  c.fillRect(x+21, y+21, 58, 58);
  c.fillStyle = "#bbb"
  c.fillRect(x+22, y+22, 56, 56);
  c.fillStyle = "#ccc"
  c.fillRect(x+23, y+23, 54, 54);
  c.fillStyle = "#bbb"
  c.fillRect(x+24, y+24, 52, 52);
  c.fillStyle = "#ccc"
  c.fillRect(x+25, y+25, 50, 50);
  c.fillStyle = "#bbb"
  c.fillRect(x+26, y+26, 48, 48);
  c.fillStyle = "#ccc"
  c.fillRect(x+27, y+27, 46, 46);

  c.fillStyle = "#aaa"
  c.fillRect(x+30, y+30, 40, 40);
  c.fillStyle = "#bbb"
  c.fillRect(x+31, y+31, 38, 38);

  c.fillStyle = "#aaa"
  c.fillRect(x+33, y+33, 34, 34);
  c.fillStyle = "#bbb"
  c.fillRect(x+34, y+34, 32, 32);



  // grass
  c.fillStyle = "lightgreen";
  // c.fillRect(x+5, y+5, 90, 90);
  // c.fillRect(x+2, y+2, 96, 96);
  let colorSign = '#999'
  let colorLetters = 'black'
  metroTowerSign(c, x+25, y+71, colorSign, colorLetters);  
}


function metroTowerSign(c, x, y, color1, color2) {
  c.fillStyle = color1;
  c.fillRect(x,y,50,7);
  metroTowerLetters(c,x+1,y+1, color2)
}
function metroTowerLetters(c,x,y,color){
  charN_M(c,x+2,y, color)
  charN_E(c,x+7,y, color)
  charN_T(c,x+11,y, color)
  charN_R(c,x+15,y, color)
  charN_O(c,x+19,y, color)

  charN_T(c,x+26,y, color)
  charN_O(c,x+30,y, color)
  charN_W(c,x+35,y, color)
  charN_E(c,x+40,y, color)
  charN_R(c,x+44,y, color)
}
