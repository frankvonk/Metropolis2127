



function mediumPoliceOffice(c, x, y, i, j) {
  c.globalAlpha = 1;

  // Ground or grass
  c.fillStyle = "#777";
  c.fillStyle = "blue";
  c.fillStyle = "#ccc";
  c.fillStyle = "silver";
  c.fillStyle = "lightgrey";
  c.fillRect(x, y, plot, plot);

  darkWall = 'grey'
  darkWall = 'grey'
  darkWall = '#888'
  darkWall = '#999'
  lightWall = '#aaa'
  lightWall = '#bbb'

  // Roof
  c.fillStyle = darkWall;
  c.fillRect(x+22, y+22, 56, 56);
  c.fillRect(x+38, y+71, 24, 7);
  c.fillStyle = lightWall
  c.fillRect(x+23, y+23, 54, 54);

  c.fillStyle = darkWall;
  c.fillRect(x+24, y+24, 52, 52);
  c.fillStyle = lightWall
  c.fillRect(x+26, y+26, 48, 48);

  // Roof structure
  c.fillStyle = darkWall;
  c.fillRect(x+22, y+42, 9, 16);
  c.fillRect(x+46, y+42, 8, 6);
  c.fillRect(x+46, y+52, 8, 6);
  c.fillRect(x+37, y+70, 26, 8);
  c.fillRect(x+70, y+37, 8, 26);
  c.fillStyle = lightWall
  c.fillRect(x+23, y+43, 7, 14);
  c.fillRect(x+47, y+43, 6, 4);
  c.fillRect(x+47, y+53, 6, 4);
  c.fillRect(x+38, y+71, 24, 7);
  c.fillRect(x+71, y+38, 7, 24);

  // windows
  c.fillStyle = darkWall;
  c.fillRect(x+31, y+31, 6, 6);
  c.fillRect(x+47, y+31, 6, 6);
  c.fillRect(x+63, y+31, 6, 6);

  c.fillRect(x+31, y+63, 6, 6);
  c.fillRect(x+47, y+63, 6, 6);
  c.fillRect(x+63, y+63, 6, 6);
  color = "aqua"
  c.fillStyle = color;
  c.fillRect(x+32, y+32, 4, 4);
  c.fillRect(x+48, y+32, 4, 4);
  c.fillRect(x+64, y+32, 4, 4);

  c.fillRect(x+32, y+64, 4, 4);
  c.fillRect(x+48, y+64, 4, 4);
  c.fillRect(x+64, y+64, 4, 4);

  // Lines on road
  c.fillStyle = 'white';
  c.fillRect(x+70, y+86, 1, 12);
  c.fillRect(x+80, y+86, 1, 12);
  c.fillRect(x+90, y+86, 1, 12);

  // Flowers
  treeLarge(c, x+1, y+1);
  treeLarge(c, x+76, y+1);
  treeLarge(c, x+1, y+76);
  treeLarge(c, x+76, y+76);


  for (let i = 0; i < 6; i++){
    // treeMedium(c, x+1, y+1+i*14);
    // fnBush(c, x+96, y+2+i*6);
  }
  

  c.fillStyle = 'white';

  // vehicleFamilyCar2(c, x+92, y+86, "silver", "down");
  // vehicleFamilyCar2(c, x+82, y+87, "antiquewhite", "up");
  // vehicleFamilyCar2(c, x+72, y+87, "blue", "up");

  // PoliceSign
  c.fillStyle = 'silver'
  c.fillStyle = 'red'
  policeSignX = x + 37;
  policeSignY = y + 71;
  // c.fillRect(policeSignX, policeSignY, 25, 7);  
  policeSignN(c, policeSignX+2, policeSignY+1, 'blue');

  policeSignS(c, x+72, y+58, 'blue');



  let target = c.getImageData(x+50, y+35, 1, 1).data;
  c.fillStyle = 'rgba(' + (1.2*target[0]) + ',' + (1.2*target[1]) + ',' + (1.2*target[2]) + ',' + 0.82 + ')';
}

function policeSignN(c, x, y, color) {
  charN_P(c, x, y, color)  
  charN_O(c, x+4, y, color)
  charN_L(c, x+8, y, color)
  charN_I(c, x+12, y, color)
  charN_C(c, x+14, y, color)
  charN_E(c, x+18, y, color)
}




function policeSignS(c, x, y, color) {
  charW_P(c, x, y, color)  
  charW_O(c, x, y-4, color)
  charW_L(c, x, y-8, color)
  charW_I(c, x, y-10, color)
  charW_C(c, x, y-14, color)
  charW_E(c, x, y-18, color)
}

