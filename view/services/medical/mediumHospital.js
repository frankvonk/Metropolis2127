



function hospital(c, x, y, i, j, exampleInBuildOptions = false) {

  c.globalAlpha = 1;

  // Ground or grass
  c.fillStyle = "#777";
  c.fillStyle = "#bbb";
  c.fillStyle = "#aaa";
  c.fillStyle = "silver";
  c.fillStyle = "lightgrey";
  c.fillRect(x, y, plot, plot);
  
  // Roof
  color = '#aaa';
  c.fillStyle = color;
  c.fillRect(x+2, y+35, 96, 30);
  c.fillRect(x+35, y+2, 30, 96);
  c.fillStyle = '#eee'
  c.fillRect(x+3, y+36, 94, 28);
  c.fillRect(x+36, y+3, 28, 94);

  // Windows
  colorFrame = 'transparent'
  colorFrame = '#aaa'
  colorGlass = "aqua"
  colorGlass = "rgba(175,238,260, 0.5)"
  //                       l  h  x  y
  greenHouse(c, x+64, y+35, 3, 3, 7, 2, colorFrame, colorGlass);
  greenHouse(c, x+56, y+64, 3, 3, 2, 7, colorFrame, colorGlass);
  greenHouse(c, x+7, y+56, 3, 3, 7, 2, colorFrame, colorGlass);
  greenHouse(c, x+35, y+7, 3, 3, 2, 7, colorFrame, colorGlass);


  // HospitalSign
  c.fillStyle = 'silver';
  hospitalSignN(c, x+67, y+58, 'red');
  hospitalSignE(c, x+58, y+30, 'red');

  heliPad(c, x+40, y+40)


  // NIGHTTIME HospitalSign
  //c.fillStyle = '#666'
  //c.fillRect(x+47, y+11, 35, 7);  
//  hospitalSign(c, x+50, y+12, '#500');
  // let target = c.getImageData(x+50, y+35, 1, 1).data;
  // c.fillStyle = 'rgba(' + (1.2*target[0]) + ',' + (1.2*target[1]) + ',' + (1.2*target[2]) + ',' + 0.82 + ')';
/*  const searchLight = (hor, ver) => {
    factor = 2.5
    for(i=0; i<8; i++){
      lumen(hor+i, ver, factor);
      lumen(hor+i, ver+1, factor);
      lumen(hor+i, ver+2, factor);
    }
    for(i=0; i<6; i++){
      lumen(hor+i+1, ver+3, factor);
      lumen(hor+i+1, ver+4, factor);
      lumen(hor+i+1, ver+5, factor);
    }
    lumen(hor+3, ver+6, factor);
    lumen(hor+4, ver+6, factor);
  }
  hor = x+10+ seconds
  ver = y+ 51
  searchLight(hor, ver);
  searchLight(hor+10, ver);
  searchLight(hor+20, ver);
  // NIGHT WILL MAKE IT DARKER, A SPOTLIGHT WILL TURN IT BACK TO NORMAL COLOR TO 
  // MAKE IT LOOK LIKE DAYLIGHT
//  console.log(pixelData);
// c.filter = "brightness(0.5)";
// c.filter = "saturate(1)"
// c.filter = "grayscale(100%)"
// c.fillRect(x+50, y+35, 1, 1);  
// console.log(target);
// c.filter = "none";  
  c.strokeStyle = color;
  c.beginPath();
  c.arc(x+51, y+33, 2, 0, 2 * Math.PI);
  c.stroke();
  */

  // Connection to road / garage - driveway location
  if (exampleInBuildOptions || aGrid[i][j].carAccesRight) {
    // Top right without driveway
    mediumHospitalTopRight(c, x, y)
    // Bottom right with driveway
    mediumHospitalBottomRightWithDriveway(c, x, y)
    // Bottom left without driveway    
    mediumHospitalBottomLeft(c, x, y)    
    // Top left without driveway
    mediumHospitalTopLeft(c, x, y)
  }
  else if (aGrid[i][j].carAccesLeft) {
    // Top right without driveway
    mediumHospitalTopRight(c, x, y)
    // Bottom right without driveway
    mediumHospitalBottomRight(c, x, y)
    // Bottom left without driveway    
    mediumHospitalBottomLeft(c, x, y)
    // Top left with driveway
    mediumHospitalTopLeftWithDriveway(c, x, y)
  }
  else if (aGrid[i][j].carAccesTop) {
    // Top right with driveway
    mediumHospitalTopRightWithDriveway(c, x, y)
    // Bottom right without driveway
    mediumHospitalBottomRight(c, x, y)
    // Bottom left withhout driveway    
    mediumHospitalBottomLeft(c, x, y) 
    // Top left without driveway
    mediumHospitalTopLeft(c, x, y)
  }
  else if (aGrid[i][j].carAccesBottom) {
    // Top right without driveway
    mediumHospitalTopRight(c, x, y)
    // Bottom right without driveway
    mediumHospitalBottomRight(c, x, y)
    // Bottom left with driveway    
    mediumHospitalBottomLeftWithDriveway(c, x, y) 
    // Top left without driveway
    mediumHospitalTopLeft(c, x, y)
  }
  else { 
    // No connection to road

    // Top right without driveway
    mediumHospitalTopRight(c, x, y)
    // Bottom right without driveway
    mediumHospitalBottomRight(c, x, y)
    // Bottom left withhout driveway    
    mediumHospitalBottomLeft(c, x, y) 
    // Top left without driveway
    mediumHospitalTopLeft(c, x, y)
  }
}




function mediumHospitalTopRight(c, x, y) {
  // Bushes
  for (let i = 0; i < 6; i++){
    fnBush(c, x+69+i*5, y+31);
  }
  // Grass
  c.fillStyle = 'limegreen';
  c.fillRect(x+98, y+2, -10, 25);
  c.fillStyle = grassColor;
  c.fillRect(x+97, y+3, -8, 23);
  // Flowers
  flowerbedVert(c, x+90, y+12, 'yellow', 'gold')
  fnBush(c, x+92, y+4);
  
  // Seats & chairs
  let arrSeatColors1 = ["turquoise", "lightgreen", "aqua", "paleturquoise"];
  let arrSeatColors3 = ["paleturquoise", "#f66", "lightgreen", "turquoise"];
  let arrSeatColors4 = ["darkturquoise", "aqua", "hotpink", "turquoise"];
  tableWithChairsV(c, x+73, y+2, "#aaa", arrSeatColors3);
  tableWithChairsV(c, x+73, y+16, "#aaa", arrSeatColors1);
  tableWithChairsV(c, x+82, y+16, "#aaa", arrSeatColors4);
  
  treeMedium(c, x+77, y+2)
}
function mediumHospitalTopRightWithDriveway(c, x, y) {
  // Lines on road
  c.fillStyle = 'white';
  c.fillRect(x+86, y+9, 12, 1);
  c.fillRect(x+86, y+19, 12, 1);
  c.fillRect(x+86, y+29, 12, 1);

  // Flowers
  for (let i = 0; i < 4; i++){
    fnBush(c, x+79+i*5, y+30);
  }
  
  charS_R(c, x+67, y+1, 'white')
  charS_E(c, x+71, y+1, 'white')

  charS_Arrow(c, x+68, y+11)
  charS_Arrow(c, x+68, y+24)
  
  vehicleAmbulance(c, x+85, y+1, 'east');
  vehicleFamilyCar1(c, x+87, y+11, "cornflowerblue", "east");
  vehicleAmbulance(c, x+85, y+21, 'west');
}
function mediumHospitalBottomRight(c, x, y) {
  // Flowers
  for (let i = 0; i < 6; i++){
    fnBush(c, x+65, y+69+i*5);
  }
  // Grass
  c.fillStyle = 'limegreen';
  c.fillRect(x+98, y+98, -10, -25);
  c.fillRect(x+98, y+98, -25, -10);
  c.fillStyle = grassColor;
  c.fillRect(x+97, y+97, -8, -23);
  c.fillRect(x+97, y+97, -23, -8);
  // Flowers
  flowerbedVert(c, x+90, y+84, 'yellow', 'gold')
  treeSmall(c, x+90, y+72)    
  treeMedium(c, x+73, y+73)
  fnFlower(c, x+74, y+92, 'yellow', 'gold')
  fnBush(c, x+80, y+89)
  fnBush(c, x+84, y+92)
}
function mediumHospitalBottomRightWithDriveway(c, x, y) {
  // Lines on road
  c.fillStyle = 'white';
  c.fillRect(x+70, y+86, 1, 12);
  c.fillRect(x+80, y+86, 1, 12);
  c.fillRect(x+90, y+86, 1, 12);

  // Flowers
  for (let i = 0; i < 4; i++){
     fnBush(c, x+65, y+79+i*5);
  }
  
  charW_R(c, x+94, y+67, 'white')
  charW_E(c, x+94, y+71, 'white')

  charW_Arrow(c, x+83, y+68)
  charW_Arrow(c, x+69, y+68)
  
  vehicleAmbulance(c, x+72, y+85, 'south');
  vehicleFamilyCar1(c, x+82, y+86, "cornflowerblue", "north");
  vehicleAmbulance(c, x+92, y+85, 'north');
}
function mediumHospitalBottomLeft(c, x, y) {
  // Bushes
  for (let i = 0; i < 6; i++){
    fnBush(c, x+31, y+69+i*5);
  }
  // Grass
  c.fillStyle = 'limegreen';
  c.fillRect(x+2, y+98, 10, -25);
  c.fillStyle = grassColor;
  c.fillRect(x+3, y+97, 8, -23);
  // Flowers
  flowerbedVert(c, x+4, y+83, 'yellow', 'gold')
  fnBush(c, x+3, y+75);
  fnBush(c, x+7, y+77);
  
  treeLarge(c, x+9, y+72)
}
function mediumHospitalBottomLeftWithDriveway(c, x, y) {
  // Lines on road
  c.fillStyle = 'white';
  c.fillRect(x+2, y+9, 12, 1);
  c.fillRect(x+2, y+80, 12, 1);
  c.fillRect(x+2, y+90, 12, 1);

  // Flowers
  for (let i = 0; i < 4; i++){
    fnBush(c, x+2+i*5, y+65);
  }
  
  charN_E(c, x+26, y+94, 'white')
  charN_R(c, x+30, y+94, 'white')

  charN_Arrow(c, x+27, y+69)
  charN_Arrow(c, x+27, y+83)
  
  vehicleAmbulance(c, x+1, y+72, 'east');
  vehicleFamilyCar1(c, x+3, y+83, "cornflowerblue", "east");
  vehicleAmbulance(c, x+1, y+92, 'west');
}
function mediumHospitalTopLeft(c, x, y) {
  // Bushes
  for (let i = 0; i < 6; i++){
    fnBush(c, x+2+i*5, y+31);
  }
  // Grass
  c.fillStyle = 'limegreen';
  c.fillRect(x+2, y+2, 10, 25);
  c.fillRect(x+2, y+2, 25, 10);
  c.fillStyle = grassColor;
  c.fillRect(x+3, y+3, 8, 23);
  c.fillRect(x+3, y+3, 23, 8);
  // Flowers
  flowerbedVert(c, x+4, y+6, 'yellow', 'gold')
  fnBush(c, x+10, y+3);
  fnBush(c, x+6, y+21);
  
  treeSmall(c, x+16, y+2)
  treeMedium(c, x+14, y+14)
}
function mediumHospitalTopLeftWithDriveway(c, x, y) {
  // Lines on road
  c.fillStyle = 'white';
  c.fillRect(x+9, y+2, 1, 12);
  c.fillRect(x+19, y+2, 1, 12);
  c.fillRect(x+29, y+2, 1, 12);

  // Flowers
  for (let i = 0; i < 4; i++){
     fnBush(c, x+31, y+2+i*5);
  }
  
  charE_E(c, x+4, y+26, 'white')
  charE_R(c, x+4, y+30, 'white')

  charE_Arrow(c, x+13, y+27)
  charE_Arrow(c, x+24, y+27)
  
  vehicleAmbulance(c, x+1, y+1, 'south');
  vehicleFamilyCar1(c, x+11, y+3, "cornflowerblue", "north");
  vehicleAmbulance(c, x+21, y+1, 'north');
}











function heliPad(c, x, y) {
  c.fillStyle = 'red';
  c.fillStyle = 'grey';
  c.fillStyle = '#aaa';
  // c.fillRect(x, y, 20, 20);
  c.fillRect(x+2, y+2, 16, 16);
  c.fillStyle = 'yellow';
  c.fillRect(x+6, y+5, 2, 10);
  c.fillRect(x+8, y+9, 4, 2);
  c.fillRect(x+12, y+5, 2, 10);

}


function hospitalSignN(c, x, y, color) {
  charN_H(c, x, y, color)  
  charN_O(c, x+4, y, color)
  charN_S(c, x+8, y, color)
  charN_P(c, x+12, y, color)
  charN_I(c, x+16, y, color)
  charN_T(c, x+18, y, color)
  charN_A(c, x+22, y, color)
  charN_L(c, x+26, y, color)
}

function hospitalSignE(c, x, y, color) {
  charE_H(c, x, y, color)  
  charE_O(c, x, y-4, color)
  charE_S(c, x, y-8, color)
  charE_P(c, x, y-12, color)
  charE_I(c, x, y-14, color)
  charE_T(c, x, y-18, color)
  charE_A(c, x, y-22, color)
  charE_L(c, x, y-26, color)
}