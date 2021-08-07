// Design for luxury villa

// i + j are for swimmer in pool
function house1x1_01(c, x, y, i, j, exampleInBuildOptions = false){
  c.globalAlpha = 1;

  c.fillStyle = "lightgrey";
  c.fillRect(x, y, plot, plot);

  // green hedge outside
  c.fillStyle = "#3a3";
  c.fillRect(x+2, y+2, 96, 96);
  c.fillStyle = "limegreen";
  c.fillRect(x+3,y+3,94,94);
  c.fillStyle = "#3a3";
  c.fillRect(x+4,y+4,92,92);

  // grass
  c.fillStyle = "lightgreen";
  c.fillRect(x+5,y+5,90,90);

  // house
  let houseX = x+33;
  let houseY = y+14;
  c.fillStyle = "grey" // left half
  c.fillStyle = "#aaa" // left half
  c.fillRect(houseX,houseY,20,72);
  c.fillStyle = "dimgrey" // right half
  c.fillStyle = "#888"
  c.fillRect(houseX+20,houseY,19,72);
  c.fillRect(houseX+22,houseY+24,28,22);
  // attic windows
  c.fillStyle = "grey" // right half attick windows
  c.fillStyle = "#aaa" // right half attick windows
  c.fillRect(houseX+28,houseY+12,6,8);
  c.fillRect(houseX+28,houseY+50,6,8);
  // skylight
  c.fillStyle = "dimgrey"
  c.fillRect(houseX+8,houseY+10,5,8);
  c.fillRect(houseX+8,houseY+32,5,8);
  c.fillRect(houseX+8,houseY+53,5,8);
  c.fillStyle = "skyblue"
  c.fillRect(houseX+9,houseY+11,3,6);
  c.fillRect(houseX+9,houseY+33,3,6);
  c.fillRect(houseX+9,houseY+54,3,6);
  // chimney
  c.fillStyle = "#555"
  c.fillRect(houseX+16,houseY,8,3);
  c.fillStyle = "#666"
  c.fillRect(houseX+17,houseY+1,6,1);

  // Pool
  let poolX = x + 10;
  let poolY = y + 44;
  c.fillStyle ="skyblue"
  c.fillRect(poolX,poolY,15,36);
  c.fillStyle = "aqua"
  c.fillRect(poolX+1,poolY+1,13,34);
  // poolpaths
  c.fillStyle = "silver"
  c.fillRect(x+25,y+45,3,42);
  c.fillRect(x+10,y+80,15,7);
  c.fillStyle = "lightgrey"
  c.fillRect(x+25,y+45,2,41);
  c.fillRect(x+11,y+80,15,6);

  // front side entrance & terrace
  c.fillStyle = 'silver';
  c.fillRect(x+83, y+45, 15, 8);
  c.fillRect(x+72, y+64, 16, 17);
  c.fillRect(x+50, y+86, 8, 9);
  c.fillStyle = 'lightgrey';
  c.fillRect(x+83, y+46, 15, 6);
  c.fillRect(x+72, y+65, 15, 15);
  c.fillRect(x+51, y+86, 6, 12);
  // refill outer hedge after path went over it
  c.fillStyle = "#3a3";
  c.fillRect(x+95, y+45, 3, 1);
  c.fillRect(x+95, y+52, 3, 1);
  c.fillRect(x+50, y+96, 1, 1);
  c.fillRect(x+57, y+96, 1, 1);

  // pool diving board
  c.fillStyle = "silver"
  c.fillRect(x+15,y+76,2,5);

  // Connection to road / garage - driveway location
  if (exampleInBuildOptions || aGrid[i][j].carAccesRight) {
    c.fillStyle = 'silver';
    c.fillRect(x+72, y+64, 26, 17);
    c.fillStyle = 'lightgrey';
    c.fillRect(x+72, y+65, 26, 15);
    // refill outer hedge after path went over it
    c.fillStyle = "#3a3";
    c.fillRect(x+95, y+64, 3, 1);
    c.fillRect(x+95, y+80, 3, 1);

    vehicleFamilyCar1(c, x+80, y+66, "cornflowerblue", "west");
    vehicleFamilyCar1(c, x+80, y+73, "limegreen", "west");
  }
  else if (aGrid[i][j].carAccesLeft) {
    c.fillStyle = 'silver';
    c.fillRect(x+2, y+19, 31, 17);
    c.fillStyle = 'lightgrey';
    c.fillRect(x+2, y+20, 31, 15);
    c.fillStyle = "#3a3";
    // refill outer hedge after path went over it
    c.fillRect(x+2, y+19, 3, 1);

    // bushes around cars
    c.fillStyle = "#3a3";
    c.fillRect(x+2, y+35, 23, 3);
    c.fillStyle = "limegreen";
    c.fillRect(x+3,y+36,21,1);
    c.fillRect(x+3, y+37, 1, 1);

    vehicleFamilyCar1(c, x+10, y+21, "turquoise", "west");
    vehicleFamilyCar1(c, x+10, y+28, "lightblue", "west");
  }
  else if (aGrid[i][j].carAccesTop) {
    c.fillStyle = 'silver';
    c.fillRect(x+59, y+2, 17, 12);
    c.fillRect(x+75, y+12, 6, 26);
    c.fillStyle = 'lightgrey';
    c.fillRect(x+60, y+2, 20, 12);
    c.fillRect(x+76, y+12, 4, 26);
    // refill outer hedge after path went over it
    c.fillStyle = "#3a3";
    c.fillRect(x+59, y+2, 1, 3);
    c.fillRect(x+80, y+2, 1, 3);

    vehicleFamilyCar1(c, x+61, y+2, "cornflowerblue", "up");
    vehicleFamilyCar1(c, x+68, y+2, "yellow", "down");  
  }
  else if (aGrid[i][j].carAccesBottom) {

    // bushes around cars    
    c.fillStyle = "#3a3";
    c.fillRect(x+22, y+83,11, 13);
    c.fillStyle = "limegreen";
    c.fillRect(x+23,y+84,10,12);
    c.fillStyle = "#3a3";
    c.fillRect(x+24, y+85, 9, 13);
    // refill outer hedge after path went over it
    c.fillStyle = "#3a3";
    c.fillRect(x+40, y+96, 1, 1);

    c.fillStyle = 'silver';
    c.fillRect(x+40, y+86, 1, 9);
    c.fillStyle = 'lightgrey';
    c.fillRect(x+25, y+86, 15, 12);    

    vehicleFamilyCar1(c, x+26, y+87, "hotpink", "up");
    vehicleFamilyCar1(c, x+33, y+87, "turquoise", "down");  
  }
  else { 
    // No connection to road

    c.fillStyle = 'silver';
    c.fillRect(x+2, y+19, 31, 8);
    c.fillRect(x+75, y+2, 6, 36);
    c.fillStyle = 'lightgrey';
    c.fillRect(x+2, y+20, 31, 6);
    c.fillRect(x+76, y+2, 4, 36);
    // refill outer hedge after path went over it
    c.fillStyle = "#3a3";
    c.fillRect(x+75, y+2, 1, 3);
    c.fillRect(x+80, y+2, 1, 3);
    c.fillRect(x+2, y+19, 3, 1);
    c.fillRect(x+2, y+26, 3, 1);
  }

  // Trees & Flowers
  for(ii=0; ii<6; ii++){
    treeXSmall(c, x+3, y+40+ii*10);
  }
  fnBush(c, x+21, y+6);
  fnBush(c, x+26, y+8);
  fnBush(c, x+31, y+6);
  fnBush(c, x+89, y+59);
  fnBush(c, x+90, y+39);
  fnFlower(c, x+20, y+14, 'pink', 'cornflowerblue');
  fnFlower(c, x+26, y+15,  'pink', 'hotpink');
  fnFlower(c, x+37,  y+9,  'pink', 'violet');
  flowerbedHor(c, x+43, y+8, 'pink', '#b99');
  
  flowerbedHor(c, x+73, y+84, 'pink', 'violet');
  fnFlower(c, x+42, y+90,  'pink', 'violet');
  fnFlower(c, x+59, y+91,  'pink', 'violet');
  
  fnFlower(c, x+27, y+69, 'yellow', 'gold');
  fnFlower(c, x+27, y+60, 'yellow', 'gold');
  fnFlower(c, x+28, y+64, 'yellow', 'gold');
  
  fnFlower(c, x+89, y+34, 'yellow', 'gold');
  treeSmall(c, x+79, y+30);
  treeSmall(c, x+88, y+87);
  treeMedium(c, x+6, y+7);
  treeLarge(c, x+18, y+32);
  treeLarge(c, x+74, y+3);

/*
  // Swimmer in pool
  // TURNAROUND X AND Y, ITS A MISTAKE
  c.fillStyle = "pink";
  let nSwimSpeed = 0.05;

  c.fillRect(poolX+p6, poolY + aAnimation[i][j].pedestrianLevel.swimmer.animationY, p1, p1);
  if(aAnimation[i][j].pedestrianLevel.swimmer.swimDirection == 'down'){
     aAnimation[i][j].pedestrianLevel.swimmer.animationY += nSwimSpeed;
    }
  if(aAnimation[i][j].pedestrianLevel.swimmer.swimDirection == 'up'){
     aAnimation[i][j].pedestrianLevel.swimmer.animationY -= nSwimSpeed; 
  }
  if(aAnimation[i][j].pedestrianLevel.swimmer.animationY > (aAnimation[i][j].pedestrianLevel.swimmer.animationYConst+p19)){
     aAnimation[i][j].pedestrianLevel.swimmer.swimDirection = 'up'
  }
  if(aAnimation[i][j].pedestrianLevel.swimmer.animationY < (aAnimation[i][j].pedestrianLevel.swimmer.animationYConst+p1)){
     aAnimation[i][j].pedestrianLevel.swimmer.swimDirection = 'down'
  }
*/
}
