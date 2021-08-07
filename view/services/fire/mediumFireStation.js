



function mediumFireStation(c, x, y, i, j) {

  c.globalAlpha = 1;

  // Ground or grass
  c.fillStyle = "#777";
  c.fillStyle = "#aaa";
  c.fillStyle = "blue";
  c.fillStyle = "silver";
  c.fillStyle = "lightgrey";
  c.fillRect(x+1, y+1, 98, 98);
  // c.fillRect(x+1, y+1, plot, plot);
  
  // Roof
  color = '#ccc';
  color = "#777";
  color = "#aaa";
  color = '#999';
  c.fillStyle = color;
  c.fillRect(x+20, y+20, 60, 44);
  // c.fillRect(x+2, y+2, 30, 84);
  color = '#999';
  color = "#aaa";
  c.fillStyle = color;
  c.fillRect(x+21, y+21, 58, 42);

  // windows
  color = 'grey';
  c.fillStyle = color;
  c.fillRect(x+31, y+34, 28, 4);
  c.fillRect(x+31, y+39, 28, 4);
  color = 'lightblue';
  color= "aqua"
  c.fillStyle = color;
  c.fillRect(x+32, y+35, 8, 2);
  c.fillRect(x+41, y+35, 8, 2);
  c.fillRect(x+50, y+35, 8, 2);

  // Lines on road
  c.fillStyle = 'white';
  c.fillRect(x+70, y+86, 1, 12);
  c.fillRect(x+80, y+86, 1, 12);
  c.fillRect(x+90, y+86, 1, 12);

  // Flowers
  for (let i = 0; i < 9; i++){
    fnBush(c, x+1+i*6, y+1);
    if(i<3)
    fnBush(c, x+1, y+7+i*6);
    fnBush(c, x+1, y+40+i*6);
  }
  
  charW_E(c, x+45, y+78, 'white')
  charW_R(c, x+45, y+74, 'white')


  vehicleFamilyCar2(c, x+62, y+86, "silver", "down");
  vehicleFamilyCar2(c, x+52, y+87, "antiquewhite", "up");

  vehicleAmbulance(c, x+92, y+85, 'up');


  c.fillStyle = 'silver'
  c.fillStyle = '#eee'
  const fireStationSignX = x+28
  const fireStationSignY = y+55
  c.fillRect(fireStationSignX+1, fireStationSignY, 46, 7);  
  fireStationSign(c, fireStationSignX+3, fireStationSignY+1, 'red');
}


function fireStationSign(c, x, y, color) {
  charN_F(c, x, y, color)  
  charN_I(c, x+4, y, color)
  charN_R(c, x+6, y, color)
  charN_E(c, x+10, y, color)
  const space = 3
  charN_S(c, x+space+14, y, color)
  charN_T(c, x+space+18, y, color)
  charN_A(c, x+space+22, y, color)
  charN_T(c, x+space+26, y, color)
  charN_I(c, x+space+30, y, color)
  charN_O(c, x+space+32, y, color)
  charN_N(c, x+space+36, y, color)
}