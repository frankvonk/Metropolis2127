


function house1x1_04(c, x, y){
  c.globalAlpha = 1;

 

  // Ground or grass
  c.fillStyle = "lightgreen";
  c.fillRect(x, y, plot, plot);
  
  // paths
  c.fillStyle = "darkgrey";
  //  c.fillRect(x+p28,y+p23,p16,p6);

  // Roof
  color = '#ccc';
  c.fillStyle = color;
  c.fillRect(x+2, y+2, 84, 40);
  c.fillRect(x+2, y+2, 30, 54);
  color = '#aaa';
  c.fillStyle = color;
  c.fillRect(x+3, y+3, 82, 38);
  c.fillRect(x+3, y+3, 28, 52);
  c.fillStyle = '#eee'
  c.fillRect(x+4, y+4, 80, 36);
  c.fillRect(x+4, y+4, 26, 50);

  // windows
  color = 'grey';
  c.fillStyle = color;
  c.fillRect(x+40, y+10, 10, 4);
  c.fillRect(x+40, y+20, 10, 4);
  c.fillRect(x+40, y+30, 10, 4);
  color= "aqua"
  c.fillStyle = color;
  c.fillRect(x+41, y+11, 8, 2);
  c.fillRect(x+41, y+21, 8, 2);
  c.fillRect(x+41, y+31, 8, 2);

  // Lines on road
  c.fillStyle = 'white';
  c.fillRect(x+70, y+86, 1, 12);
  c.fillRect(x+80, y+86, 1, 12);
  c.fillRect(x+90, y+86, 1, 12);

  // Flowers
  for (let i = 0; i < 8; i++){
    treeXSmall(c, x+92, y+22+i*6);
  }
  for (let i = 0; i < 9; i++){
    treeXSmall(c, x+6+i*6, y+70);
  }
  
  vehicleFamilyCar1(c, x+83, y+87, "cornflowerblue", "down");
  vehicleFamilyCar1(c, x+72, y+87, "green", "up");


}
