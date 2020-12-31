// Residential tower


function house1x1_03(c, x, y){

  c.globalAlpha = 1;
  // pavement
  c.fillStyle = "lightgrey"
  c.fillRect(x, y, plot, plot);



  let color = 'red'
  charN_T(c,x,y, color)
  charN_O(c,x+4,y, color)
  charN_W(c,x+9,y, color)
  charN_E(c,x+14,y, color)
  charN_R(c,x+18,y, color)

  charN_B(c,x+26,y, color)
  charN_O(c,x+30,y, color)
  charN_I(c,x+34,y, color)
  charN_L(c,x+38,y, color)
  charN_D(c,x+42,y, color)
  charN_I(c,x+46,y, color)
  charN_N(c,x+50,y, color)




  // grass
  c.fillStyle = "lightgreen";
  // c.fillRect(x+5, y+5, 90, 90);
  // c.fillRect(x+2, y+2, 96, 96);


  
  
}