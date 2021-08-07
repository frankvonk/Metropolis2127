let grassColor = 'lightgreen';
let curbColor = 'grey';
let asphaltColor = 'silver';
let colorLaneMarkings = 'white';
/*
grassColor = 'purple';
curbColor = 'hotpink';
asphaltColor = 'aqua';
colorLaneMarkings = 'cornflowerblue';
*/

function road2Lane(c, x, y, i, j, exampleInBuildOptions = false){
  c.globalAlpha = 1;
  c.fillStyle = grassColor;
  c.fillRect(x, y, plot, plot);
  c.fillStyle = asphaltColor; //

  let sdirection = aRoads[i][j].direction;
  if(sdirection == 'dead'){
    // outter path circle
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, plot, plot);
    c.fillStyle = 'limegreen';
    c.fillRect(x+5, y+5, 90, 90);
    c.fillStyle = grassColor;
    c.fillRect(x+6, y+6, 88, 88);

    // outter path driveways
    if (aRoads[i][j].exitTop) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+24, y+5, 12, 14);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+25, y+5, 10, 14);
    }
    if (aRoads[i][j].exitRight) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+84, y+24, 10, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+84, y+25, 11, 10);
    }
    if (aRoads[i][j].exitBottom) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+64, y+84, 12, 10);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+65, y+84, 10, 11);
    }
    if (aRoads[i][j].exitLeft) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+6, y+64, 12, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+5, y+65, 12, 10);
    }

    // Curb outer corner
    c.fillStyle = curbColor;
    c.fillRect(x+14, y+14, 72, 72);
    // Asphalt outer corner
    c.fillStyle = asphaltColor;
    c.fillRect(x+15, y+15, 70, 70);
    // Curb inner corner
    c.fillStyle = curbColor;
    c.fillRect(x+36, y+36, 28, 28);
    // Grass inner corner
    c.fillStyle = grassColor;
    c.fillRect(x+37, y+37, 26, 26);

    // 'Rounding' square corners (sharp corners) of inner curb
    for(k=0; k<6; k++) {
      c.fillStyle = asphaltColor;
      c.fillRect(x+k+36, y-k+36, 1, 6);
      c.fillRect(x-k+63, y-k+36, 1, 6);
      c.fillRect(x+k+36, y+k+58, 1, 6);
      c.fillRect(x-k+63, y+k+58, 1, 6);

      c.fillStyle = curbColor;
      c.fillRect(x+k+36, y-k+42, 1, 1);
      c.fillRect(x-k+62, y-k+41, 1, 1);
      c.fillRect(x-k+41, y-k+62, 1, 1);
      c.fillRect(x+k+58, y-k+62, 1, 1);
    }

    // 'Rounding' square corners (sharp corners) of outer curb
    for(k=0; k<10; k++) {
      c.fillStyle = grassColor;
      c.fillRect(x+k+76, y-k+85, 1, k+1);
      c.fillRect(x-k+85, y-k+23, 1+k, 1);
      c.fillRect(x+14, y+k+76, 1+k, 1);
      c.fillRect(x-k+23, y+14, 1, 1+k);

      c.fillStyle = curbColor;
      c.fillRect(x+k+76, y-k+84, 1, 1);
      c.fillRect(x-k+85, y-k+24, 1, 1);
      c.fillRect(x-k+23, y-k+84, 1, 1);
      c.fillRect(x+k+15, y-k+23, 1, 1);
    }

    // Lane markings
    c.fillStyle = colorLaneMarkings;
    c.fillRect(x+45, y+25, 2, 1);
    c.fillRect(x+53, y+25, 2, 1);

    c.fillRect(x+45, y+74, 2, 1);
    c.fillRect(x+53, y+74, 2, 1);

    c.fillRect(x+25, y+45, 1, 2);
    c.fillRect(x+25, y+53, 1, 2);

    c.fillRect(x+74, y+45, 1, 2);
    c.fillRect(x+74, y+53, 1, 2);

    // Trees & flowers
    treeLarge(c, x+38, y+33)
    treeLarge(c, x+76, y+74)

    flowerbedHor(c, x+77, y+9, 'yellow', 'gold')
    flowerbedHor(c, x+37, y+9, 'yellow', 'gold')
    flowerbedVert(c, x+7, y+49, 'yellow', 'gold')
    fnFlower(c, x+8, y+44, 'yellow', 'gold');
    fnFlower(c, x+8, y+84, 'yellow', 'gold');
    fnFlower(c, x+14, y+87, 'yellow', 'gold');
    flowerbedVert(c, x+88, y+47, 'yellow', 'gold');
    fnBush(c, x+10, y+89)
    treeMedium(c, x+7, y+13)
    treeMedium(c, x+50, y+83)
    treeXSmall(c, x+86, y+63)
    treeSmall(c, x+26, y+83)

    fnBush(c, x+9, y+29)
    fnBush(c, x+8, y+34)
    fnBush(c, x+59, y+9)
    fnBush(c, x+88, y+15)
    fnBush(c, x+88, y+38)

  }
  else if(sdirection == 'intersection'){
    // Curb
    c.fillStyle = curbColor;
    c.fillRect(x, y+14, plot, 1);
    c.fillRect(x, y+36, plot, 1);
    c.fillRect(x, y+63, plot, 1);
    c.fillRect(x, y+85, plot, 1);
    c.fillRect(x+14, y, 1, plot);
    c.fillRect(x+36, y, 1, plot);
    c.fillRect(x+63, y, 1, plot);
    c.fillRect(x+85, y, 1, plot);
    // Asphalt 4 lanes
    c.fillStyle = asphaltColor;
    c.fillRect(x, y+15, plot, 21);
    c.fillRect(x, y+64, plot, 21);
    c.fillRect(x+15, y, 21, plot);
    c.fillRect(x+64, y, 21, plot);
    // Ashphalt patchwork
    for(i=0;i<7;i++){
      c.fillRect(x+79+i, y+8+i, 6, 1);
      c.fillRect(x+30+i, y+57+i, 6, 1);
      c.fillRect(x+57+i, y+63-i, 7, 1);
      c.fillRect(x+9+i, y+14-i, 6, 1);
      c.fillRect(x+30+i, y+41-i, 7, 1);
      c.fillRect(x+79+i, y+91-i, 7, 1);
      c.fillRect(x+9+i, y+85+i, 6, 1);
      c.fillRect(x+57+i, y+36+i, 7, 1);
    }

    // CornerCurb
    for(i=0;i<7;i++){
      c.fillStyle = curbColor
      c.fillRect(x+8+i, y+14-i, 1, 1);
      c.fillRect(x+36+i, y+57+i, 1, 1);
      c.fillRect(x+57+i, y+63-i, 1, 1);
      c.fillRect(x+85+i, y+8+i, 1, 1);
      c.fillRect(x+36+i, y+42-i, 1, 1);
      c.fillRect(x+85+i, y+91-i, 1, 1);
      c.fillRect(x+8+i, y+85+i, 1, 1);
      c.fillRect(x+57+i, y+36+i, 1, 1);
    }
    // Lane markings
    c.fillStyle = colorLaneMarkings;
    c.fillRect(x+25, y+1, 1, 2);
    c.fillRect(x+74, y+1, 1, 2);
    c.fillRect(x+25, y+44, 1, 2);
    c.fillRect(x+74, y+44, 1, 2);
    c.fillRect(x+25, y+52, 1, 2);
    c.fillRect(x+74, y+52, 1, 2);
    c.fillRect(x+25, y+93, 1, 2);
    c.fillRect(x+74, y+93, 1, 2);

    c.fillRect(x+1, y+25, 2, 1);
    c.fillRect(x+1, y+74, 2, 1);
    c.fillRect(x+44, y+25, 2, 1);
    c.fillRect(x+44, y+74, 2, 1);
    c.fillRect(x+52, y+25, 2, 1);
    c.fillRect(x+52, y+74, 2, 1);
    c.fillRect(x+93, y+25, 2, 1);
    c.fillRect(x+93, y+74, 2, 1);

    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x, y, 6, 6);
    c.fillRect(x+94, y, 6, 6);
    c.fillRect(x+94, y+94, 6, 6);
    c.fillRect(x, y+94, 6, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, 5, 5);
    c.fillRect(x+95, y, 5, 5);
    c.fillRect(x, y+95, 5, 5);
    c.fillRect(x+95, y+95, 5, 5);

    // Plants & Trees
    treeLarge(c, x+39, y+39)
    flowerbedHor(c, x+47, y+9, 'yellow', 'gold')
    flowerbedVert(c, x+88, y+41, 'yellow', 'gold')
    fnFlower(c, x+38, y+91, 'yellow', 'gold');
    fnFlower(c, x+44, y+89, 'yellow', 'gold');

    flowerbedVert(c, x+7, y+48, 'yellow', 'gold')
    treeSmall(c, x+39, y-2)
    treeXSmall(c, x+1, y+39)
    treeMedium(c, x+49, y+87)

    fnBush(c, x+88, y)
    fnBush(c, x+92, y+55)

    fnFlower(c, x+3, y+10, 'yellow', 'gold');
    treeXSmall(c, x+91, y+6)
    fnFlower(c, x+93, y+90, 'yellow', 'gold');
    fnBush(c, x+8, y+3)
    fnFlower(c, x+88, y+95, 'yellow', 'gold');
    treeXSmall(c, x+6, y+90)
    fnBush(c, x+1, y+88)

  }

  else if(sdirection == 'tsplit_12_3_6'){
    // Curb
    c.fillStyle = curbColor;
    c.fillRect(x+14, y, 1, plot);
    c.fillRect(x+36, y, 1, plot);
    c.fillRect(x+63, y, 1, plot);
    c.fillRect(x+85, y, 1, plot);
    // Asphalt 4 lanes
    c.fillStyle = asphaltColor;
    c.fillRect(x+15, y, 21, plot);
    c.fillRect(x+64, y, 21, plot);
    // Ashphalt patchwork
    c.fillRect(x+85, y+15, 15, 21);
    c.fillRect(x+85, y+64, 15, 21);
    c.fillRect(x+36, y+15, 28, 21);
    c.fillRect(x+36, y+64, 28, 21);
    for(ii=0;ii<7;ii++){
      c.fillRect(x+80+ii, y+9+ii, 6, 1);
      c.fillRect(x+30+ii, y+41-ii, 7, 1);
      c.fillRect(x+31+ii, y+58+ii, 6, 1);
      c.fillRect(x+79+ii, y+91-ii, 7, 1);
    }
    // Curb patchwork
    c.fillStyle = curbColor
    c.fillRect(x+92, y+14, 8, 1);
    c.fillRect(x+86, y+36, 14, 1);
    c.fillRect(x+86, y+63, 14, 1);
    c.fillRect(x+92, y+85, 8, 1);
    c.fillRect(x+36, y+14, 27, 1);
    c.fillRect(x+42, y+36, 21, 1);
    c.fillRect(x+42, y+63, 21, 1);
    c.fillRect(x+36, y+85, 27, 1);

    // CornerCurb
    c.fillStyle = curbColor
    for(ii=0;ii<7;ii++){
      c.fillStyle = curbColor
      c.fillRect(x+85+ii, y+8+ii, 1, 1);
      c.fillRect(x+36+ii, y+42-ii, 1, 1);
      c.fillRect(x+36+ii, y+57+ii, 1, 1);
      c.fillRect(x+85+ii, y+91-ii, 1, 1);
    }

    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x, y, 6, plot);
    c.fillRect(x+94, y, 6, 6);
    c.fillRect(x+94, y+94, 6, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, 5, plot);
    c.fillRect(x+95, y, 5, 5);
    c.fillRect(x+95, y+95, 5, 5);
    if (aRoads[i][j].exitLeft) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+6, y+64, 8, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+5, y+65, 9, 10);
    }

    // Plants & Trees
    treeLarge(c, x+39, y+39)
    flowerbedHor(c, x+47, y+9, 'yellow', 'gold')
    flowerbedVert(c, x+88, y+41, 'yellow', 'gold')
    fnFlower(c, x+38, y+91, 'yellow', 'gold');
    fnFlower(c, x+44, y+89, 'yellow', 'gold');

    flowerbedVert(c, x+7, y+48, 'yellow', 'gold')
    treeSmall(c, x+39, y-2)
    treeXSmall(c, x+6, y+36)
    treeMedium(c, x+49, y+87)

    fnBush(c, x+88, y)
    fnBush(c, x+92, y+55)

    fnFlower(c, x+7, y+13, 'yellow', 'gold');
    flowerbedVert(c, x+7, y+18, 'yellow', 'gold')
    fnBush(c, x+8, y+3)
    treeXSmall(c, x+91, y+6)
    fnFlower(c, x+93, y+90, 'yellow', 'gold');
    fnFlower(c, x+88, y+95, 'yellow', 'gold');
    treeXSmall(c, x+6, y+90)
    fnBush(c, x+8, y+78)
    fnFlower(c, x+8, y+85, 'yellow', 'gold');
    
  }

  else if(sdirection == 'tsplit_3_6_9'){
    // Curb
    c.fillStyle = curbColor;
    c.fillRect(x, y+14, plot, 1);
    c.fillRect(x, y+36, plot, 1);
    c.fillRect(x, y+63, plot, 1);
    c.fillRect(x, y+85, plot, 1);
    // Asphalt 4 lanes
    c.fillStyle = asphaltColor;
    c.fillRect(x, y+15, plot, 21);
    c.fillRect(x, y+64, plot, 21);
    // Ashphalt patchwork
    c.fillRect(x+15, y+84, 21, 20);
    c.fillRect(x+64, y+84, 21, 20);
    c.fillRect(x+15, y+35, 21, 30);
    c.fillRect(x+64, y+35, 21, 30);
    for(i=0;i<7;i++){
      c.fillRect(x+9+i, y+85+i, 6, 1);
      c.fillRect(x+30+i, y+42-i, 6, 1);
      c.fillRect(x+57+i, y+36+i, 7, 1);
      c.fillRect(x+79+i, y+91-i, 6, 1);
    }

    // Curb patchwork
    c.fillStyle = curbColor
    c.fillRect(x+14, y+36, 1, 27);
    c.fillRect(x+14, y+91, 1, 10);
    c.fillRect(x+36, y+42, 1, 21);
    c.fillRect(x+36, y+85, 1, 20);
    c.fillRect(x+63, y+85, 1, 20);
    c.fillRect(x+63, y+42, 1, 21);
    c.fillRect(x+85, y+36, 1, 27);
    c.fillRect(x+85, y+91, 1, 20);

    // CornerCurb
    c.fillStyle = curbColor
    for(i=0;i<7;i++){
      c.fillRect(x+8+i, y+85+i, 1, 1);
      c.fillRect(x+36+i, y+42-i, 1, 1);
      c.fillRect(x+57+i, y+36+i, 1, 1);
      c.fillRect(x+85+i, y+91-i, 1, 1);
    }

    // Lane markings
    c.fillStyle = colorLaneMarkings;
    for (let i = 0; i < 13; i++) {
  //    c.fillRect(x+2+i*9, y+25, 2, 1);
//      c.fillRect(x+2+i*9, y+74, 2, 1);
    }

    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x, y, plot, 6);
    c.fillRect(x+94, y+94, 6, 6);
    c.fillRect(x, y+94, 6, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, plot, 5);
    c.fillRect(x+95, y+95, 5, 5);
    c.fillRect(x, y+95, 5, 5);

    // outter path driveways
    if (aRoads[i][j].exitTop) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+24, y+5, 12, 9);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+25, y+5, 10, 9);
    }
      
    // Trees & flowers
    treeLarge(c, x+39, y+39)
    flowerbedHor(c, x+47, y+9, 'yellow', 'gold')
    flowerbedVert(c, x+88, y+41, 'yellow', 'gold')
    fnFlower(c, x+38, y+91, 'yellow', 'gold');
    fnFlower(c, x+44, y+89, 'yellow', 'gold');

    flowerbedVert(c, x+7, y+48, 'yellow', 'gold')
    treeSmall(c, x+37, y+5)
    treeXSmall(c, x+1, y+39)
    treeMedium(c, x+49, y+87)

    fnBush(c, x+85, y+8)
    fnBush(c, x+68, y+7)
    fnFlower(c, x+76, y+10, 'yellow', 'gold');
    fnBush(c, x+92, y+55)

    fnFlower(c, x+3, y+10, 'yellow', 'gold');
    fnBush(c, x+11, y+9)
    fnBush(c, x+17, y+8)
    treeXSmall(c, x+91, y+6)
    fnFlower(c, x+93, y+90, 'yellow', 'gold');
    fnFlower(c, x+88, y+95, 'yellow', 'gold');
    treeXSmall(c, x+6, y+90)
    fnBush(c, x+1, y+88)

/*
    // Asphalt 6 lanes
    c.fillStyle = asphaltColor;
    c.fillRect(x+15, y, 70, plot);
    // Middle of highway
    c.fillStyle = grassColor;
    c.fillRect(x+47, y, 6, plot);
    // Lane markings
    c.fillStyle = colorLaneMarkings;
    for (let i = 0; i < 13; i++) {
      c.fillRect(x+25, y+2+i*9, 1, 2);
      c.fillRect(x+36, y+2+i*9, 1, 2);
      c.fillRect(x+63, y+2+i*9, 1, 2);
      c.fillRect(x+74, y+2+i*9, 1, 2);
    }
    c.fillStyle='blue'
    c.fillRect(x+15, y+2, 10, 1);
    c.fillRect(x+26, y+2, 10, 1);
    c.fillRect(x+37, y+2, 10, 1);
    c.fillRect(x+53, y+2, 10, 1);
    c.fillRect(x+64, y+2, 10, 1);
    c.fillRect(x+75, y+2, 10, 1);
*/
  }

  else if(sdirection == 'tsplit_6_9_12'){
    // Curb
    c.fillStyle = curbColor;
    c.fillRect(x+14, y, 1, plot);
    c.fillRect(x+36, y, 1, plot);
    c.fillRect(x+63, y, 1, plot);
    c.fillRect(x+85, y, 1, plot);
    // Asphalt 4 lanes
    c.fillStyle = asphaltColor;
    c.fillRect(x+15, y, 21, plot);
    c.fillRect(x+64, y, 21, plot);
    // Ashphalt patchwork
    c.fillRect(x, y+15, 15, 21);
    c.fillRect(x, y+64, 15, 21);
    c.fillRect(x+36, y+15, 28, 21);
    c.fillRect(x+36, y+64, 28, 21);
    for(ii=0;ii<7;ii++){
      c.fillRect(x+9+ii, y+14-ii, 6, 1);
      c.fillRect(x+9+ii, y+80+ii, 1, 6);
      c.fillRect(x+58+ii, y+36+ii, 7, 1);
      c.fillRect(x+58+ii, y+63-ii, 6, 1);
    }
    // Curb patchwork
    c.fillStyle = curbColor
    c.fillRect(x, y+14, 8, 1);
    c.fillRect(x, y+36, 14, 1);
    c.fillRect(x, y+63, 14, 1);
    c.fillRect(x, y+85, 8, 1);
    c.fillRect(x+14, y+36, 1, 27);
    c.fillRect(x+36, y+14, 27, 1);
    c.fillRect(x+36, y+36, 21, 1);
    c.fillRect(x+36, y+63, 21, 1);
    c.fillRect(x+36, y+85, 27, 1);

    // CornerCurb
    c.fillStyle = curbColor
    for(ii=0;ii<7;ii++){
      c.fillStyle = curbColor
      c.fillRect(x+8+ii, y+85+ii, 1, 1);
      c.fillRect(x+57+ii, y+36+ii, 1, 1);
      c.fillRect(x+57+ii, y+63-ii, 1, 1);
      c.fillRect(x+8+ii, y+14-ii, 1, 1);
    }

    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x, y, 6, 6);
    c.fillRect(x+94, y, 6, plot);
    c.fillRect(x, y+94, 6, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, 5, 5);
    c.fillRect(x+95, y, 5, plot);
    c.fillRect(x, y+95, 5, 5);

    // outter path driveways
    if (aRoads[i][j].exitRight) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+86, y+24, 9, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+86, y+25, 11, 10);
    }

    // Trees & flowers
    treeLarge(c, x+39, y+39)
    flowerbedHor(c, x+47, y+9, 'yellow', 'gold')
    flowerbedVert(c, x+88, y+41, 'yellow', 'gold')
    fnFlower(c, x+38, y+91, 'yellow', 'gold');
    fnFlower(c, x+44, y+89, 'yellow', 'gold');
    fnFlower(c, x+87, y+19, 'yellow', 'gold')
    fnBush(c, x+88, y+63)

    flowerbedVert(c, x+7, y+48, 'yellow', 'gold')
    treeSmall(c, x+39, y-2)
    treeXSmall(c, x+1, y+39)
    treeMedium(c, x+49, y+87)
    treeMedium(c, x+83, y+71)

    fnBush(c, x+88, y)
    fnBush(c, x+89, y+56)

    fnFlower(c, x+3, y+10, 'yellow', 'gold');
    treeXSmall(c, x+86, y+8)
    fnFlower(c, x+87, y+88, 'yellow', 'gold');
    fnBush(c, x+8, y+3)
    fnFlower(c, x+88, y+95, 'yellow', 'gold');
    treeXSmall(c, x+6, y+90)
    fnBush(c, x+1, y+88)

  }
  else if(sdirection == 'tsplit_9_12_3'){
    // Curb
    c.fillStyle = curbColor;
    c.fillRect(x, y+14, plot, 1);
    c.fillRect(x, y+36, plot, 1);
    c.fillRect(x, y+63, plot, 1);
    c.fillRect(x, y+85, plot, 1);
    // Asphalt 4 lanes
    c.fillStyle = asphaltColor;
    c.fillRect(x, y+15, plot, 21);
    c.fillRect(x, y+64, plot, 21);
    // Ashphalt patchwork
    c.fillRect(x+15, y, 21, 20);
    c.fillRect(x+64, y, 21, 20);
    c.fillRect(x+15, y+35, 21, 30);
    c.fillRect(x+64, y+35, 21, 30);
    for(ii=0;ii<7;ii++){
      c.fillRect(x+79+ii, y+8+ii, 6, 1);
      c.fillRect(x+30+ii, y+57+ii, 6, 1);
      c.fillRect(x+57+ii, y+63-ii, 7, 1);
      c.fillRect(x+9+ii, y+14-ii, 6, 1);
    }

    // Curb patchwork
    c.fillStyle = curbColor
    c.fillRect(x+14, y+36, 1, 27);
    c.fillRect(x+14, y, 1, 9);
    c.fillRect(x+36, y+36, 1, 21);
    c.fillRect(x+63, y+36, 1, 21);
    c.fillRect(x+85, y+36, 1, 27);
    c.fillRect(x+85, y, 1, 9);
    c.fillRect(x+36, y, 1, 14);
    c.fillRect(x+63, y, 1, 14);

    // CornerCurb
    c.fillStyle = curbColor
    for(ii=0;ii<7;ii++){
      c.fillRect(x+8+ii, y+14-ii, 1, 1);
      c.fillRect(x+36+ii, y+57+ii, 1, 1);
      c.fillRect(x+57+ii, y+63-ii, 1, 1);
      c.fillRect(x+85+ii, y+8+ii, 1, 1);
    }

    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x, y, 6, 6);
    c.fillRect(x+94, y, 6, 6);
    c.fillRect(x, y+94, plot, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, 5, 5);
    c.fillRect(x+95, y, 5, 5);
    c.fillRect(x, y+95, plot, 5);

    if (aRoads[i][j].exitBottom) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+64, y+86, 12, 8);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+65, y+86, 10, 11);
    }

    // Plants & Trees
    treeLarge(c, x+39, y+39)
    flowerbedHor(c, x+47, y+9, 'yellow', 'gold')
    flowerbedVert(c, x+88, y+41, 'yellow', 'gold')
    fnFlower(c, x+38, y+91, 'yellow', 'gold');
    fnFlower(c, x+44, y+89, 'yellow', 'gold');

    flowerbedVert(c, x+7, y+48, 'yellow', 'gold')
    treeSmall(c, x+39, y-2)
    treeXSmall(c, x+1, y+39)
    treeMedium(c, x+53, y+83)
    flowerbedHor(c, x+19, y+89, 'yellow', 'gold')

    fnBush(c, x+88, y)
    fnBush(c, x+92, y+55)

    fnFlower(c, x+3, y+10, 'yellow', 'gold');
    treeXSmall(c, x+91, y+6)
    fnFlower(c, x+93, y+90, 'yellow', 'gold');
    fnBush(c, x+8, y+3)
    fnBush(c, x+69, y+88)
    fnBush(c, x+75, y+89)
    fnFlower(c, x+85, y+90, 'yellow', 'gold');
    treeXSmall(c, x+9, y+87)
    fnBush(c, x+1, y+88)
    
  }
  else if(sdirection == 'corner_12_3'){
    road2LaneCorner(c, x, y, 1, -1);
  }
  else if(sdirection == 'corner_3_6'){
    road2LaneCorner(c, x, y, 1, 1);
  }
  else if(sdirection == 'corner_6_9'){
    road2LaneCorner(c, x, y, -1, 1);
  }
  else if(sdirection == 'corner_9_12'){
    road2LaneCorner(c, x, y, -1, -1);
  }
  else if(sdirection == 'straight_12_6'){
    road2LaneStraight(c, x, y, 'vert');
  }
  else if(sdirection == 'straight_3_9' || exampleInBuildOptions){
    road2LaneStraight(c, x, y, 'hor', exampleInBuildOptions);
  }
  else if(sdirection == 'dead_12'){
    road2LaneDead(c, x, y, 1, 1, 'vert', '12');
  }
  else if(sdirection == 'dead_6'){
    road2LaneDead(c, x, y, -1, -1, 'vert', '6');
  }
  else if(sdirection == 'dead_3'){
    road2LaneDead(c, x, y, -1, -1, 'hor', '3');
  }
  else if(sdirection == 'dead_9'){
    road2LaneDead(c, x, y, 1, 1, 'hor', '9');
  }
}
















function road2LaneCorner(c, x, y, hor, vert) {
  // determine middle of plot, to rotate image.
  let midX = x+50;
  let midY = y+50;
  // outter sidewalk
  c.fillStyle = 'lightgrey';
  c.fillRect(x, y, plot, plot);
  c.fillStyle = 'limegreen';
  c.fillRect(midX-45*hor, midY-45*vert, 95*hor, 95*vert);
  c.fillStyle = grassColor;
  c.fillRect(midX-44*hor, midY-44*vert, 94*hor, 94*vert);



  // Curb
  c.fillStyle = curbColor;
  c.fillRect(midX-36*hor, midY-36*vert, 86*hor, 1*vert);
  c.fillRect(midX-36*hor, midY-36*vert, 1*hor, 86*vert);
  // Asphalt
  c.fillStyle = asphaltColor;
  c.fillRect(midX-35*hor, midY-35*vert, 85*hor, 85*vert);
  // Curb
  c.fillStyle = curbColor;
  c.fillRect(midX-8*hor, midY-14*vert, 58*hor, 1*vert);
  c.fillRect(midX-14*hor, midY-8*vert, 1*hor, 58*vert);
  c.fillStyle = grassColor;
  c.fillRect(midX-13*hor, midY-13*vert, 63*hor, 63*vert);

  c.fillStyle = curbColor;
  c.fillRect(midX+13*hor, midY+13*vert, 37*hor, 37*vert);
  c.fillStyle = asphaltColor;
  c.fillRect(midX+14*hor, midY+14*vert, 36*hor, 36*vert);
  c.fillStyle = curbColor;
  c.fillRect(midX+35*hor, midY+35*vert, 15*hor, 15*vert);
  c.fillStyle = grassColor;
  c.fillRect(midX+36*hor, midY+36*vert, 14*hor, 14*vert);

  // 'Rounding' square corners (sharp corners)
  for(k=0; k<6; k++) {
    c.fillStyle = curbColor;
    // Inner curb
    c.fillRect(midX+(36+k)*hor, midY+(40-k)*vert, 1*hor, 1*vert);
    // Outer curb
    c.fillRect(midX-(13-k)*hor, midY-(9+k)*vert, 1*hor, 1*vert);

    c.fillStyle = asphaltColor;
    // Inner corner
    c.fillRect(midX+(35+k)*hor, midY+35*vert, 1*hor, (6-k)*vert);
    // Outer corner
    c.fillRect(midX-(14-k)*hor, midY-14*vert, 1*hor, (6-k)*vert);
  }

  // 'Rounding' square corners (wide corners)
  for(k=0; k<10; k++) {
    c.fillStyle = curbColor;
    // Inner curb
    c.fillRect(midX+(-35+k)*hor, midY+(-27-k)*vert, 1*hor, 1*vert);
    // Outer curb
    c.fillRect(midX+(13+k)*hor, midY+(23-k)*vert, 1*hor, 1*vert);

    c.fillStyle = grassColor;
    // Inner corner
    c.fillRect(midX+(13+k)*hor, midY+13*vert, 1*hor, (10-k)*vert);
    // Outer corner
    c.fillRect(midX+(-36+k)*hor, midY-36*vert, 1*hor, (10-k)*vert);
  } 

  // Lane markings & driveways & plantlife
  c.fillStyle = colorLaneMarkings;
  if(hor == 1 && vert == 1) {
    // 6/3 corner

    if (aRoads[i][j].exitLeft) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+6, y+64, 8, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+5, y+65, 9, 10);
    }
    if (aRoads[i][j].exitTop) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+24, y+5, 12, 9);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+25, y+5, 10, 9);
    }

    // Trees & flowers
    treeLarge(c, x+75, y+46)
    treeLarge(c, x+31, y+50)
    treeLarge(c, x+50, y+31)
    treeLarge(c, x+46, y+75)

    treeMedium(c, x+7, y+13)
    treeMedium(c, x+87, y+3)
    treeXSmall(c, x+87, y+92)
    treeSmall(c, x+45, y+5)
    fnFlower(c, x+94, y+89, 'yellow', 'gold');
    fnFlower(c, x+37, y+9, 'yellow', 'gold');
    fnFlower(c, x+7, y+9, 'yellow', 'gold');
    flowerbedHor(c, x+56 ,y+9, 'yellow', 'gold')
    flowerbedVert(c, x+7 ,y+29, 'yellow', 'gold')
    fnFlower(c, x+81, y+9, 'yellow', 'gold');
    fnBush(c, x+14, y+7)
    fnBush(c, x+19, y+8)
    fnBush(c, x+74, y+9)
    treeSmall(c, x+6, y+45)
    treeXSmall(c, x+7, y+77)
    fnBush(c, x+7, y+89)
    fnFlower(c, x+7, y+59, 'yellow', 'gold');
    fnFlower(c, x+8, y+96, 'yellow', 'gold');

    c.fillStyle = colorLaneMarkings;
    // innerlane
    c.fillRect(x+74, y+93, 1, 2);
    c.fillRect(x+93, y+74, 2, 1);
    // outterlane
    for (let ii = 0; ii < 6; ii++) {
      c.fillRect(midX-3+(ii*9)*hor, midY-25*vert, 2, 1);
      c.fillRect(midX-25*hor, midY-2+(ii*9)*vert, 1, 2);
    }
  }
  if(hor == 1 && vert == -1) {
    // 12/3 corner

    // outter path driveways
    if (aRoads[i][j].exitBottom) {
      c.fillStyle = 'limegreen';
      // c.fillStyle = 'red';
      c.fillRect(x+64, y+86, 12, 9);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+65, y+86, 10, 11);
    }
    if (aRoads[i][j].exitLeft) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+6, y+64, 8, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+5, y+65, 9, 10);
    }
   
    // Trees & flowers
    treeLarge(c, x+31, y+1)
    treeLarge(c, x+46, y+31)
    treeLarge(c, x+75, y+46)

    treeMedium(c, x+4, y+2)
    treeSmall(c, x+9, y+83)
    treeXSmall(c, x+91, y+6)
    treeXSmall(c, x+91, y+87)
    fnBush(c,x+89,y+1)
    fnBush(c,x+85,y+87)
    fnFlower(c, x+78, y+89, 'yellow', 'gold');
    fnFlower(c, x+8, y+19, 'yellow', 'gold');
    flowerbedVert(c, x+8, y+24, 'yellow', 'gold');
    treeXSmall(c, x+6, y+41)
    fnBush(c,x+7,y+58)
    fnFlower(c, x+8, y+53, 'yellow', 'gold');
    fnFlower(c, x+8, y+79, 'yellow', 'gold');
    flowerbedHor(c, x+21, y+89, 'yellow', 'gold')
    treeMedium(c, x+38, y+83)
    fnFlower(c, x+52, y+90, 'yellow', 'gold');
    fnFlower(c, x+58, y+89, 'yellow', 'gold');



    
    c.fillStyle = colorLaneMarkings;
    // innerlane
    c.fillRect(x+74, y+1, 1, 2);
    c.fillRect(x+93, y+25, 2, 1);
    // outterlane
    for (let ii = 0; ii < 6; ii++) {
      c.fillRect(midX-2+(ii*9)*hor, midY-24*vert, 2, 1);
      c.fillRect(midX-25*hor, midY-4+(ii*9)*vert, 1, 2);
    }
  }
  if(hor == -1 && vert == 1) {
    // 6/9 corner

    // outter path driveways
    if (aRoads[i][j].exitTop) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+24, y+5, 12, 9);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+25, y+5, 10, 9);
    }
    if (aRoads[i][j].exitRight) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+86, y+24, 8, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+86, y+25, 11, 10);
    }

    // Trees & flowers
    treeLarge(c, x+1, y+31)
    treeLarge(c, x+31, y+46)
    treeLarge(c, x+46, y+76)

    treeXSmall(c, x+5, y+88)
    fnBush(c,x+9,y+96)

    treeMedium(c, x+2, y+3)
    fnFlower(c, x+17, y+9, 'yellow', 'gold');
    flowerbedHor(c, x+37, y+9, 'yellow', 'gold')
    fnFlower(c, x+52, y+10, 'yellow', 'gold');
    fnBush(c,x+59,y+7)
    treeSmall(c, x+65, y+5)
    fnFlower(c, x+79, y+10, 'yellow', 'gold');
    fnFlower(c, x+87, y+10, 'yellow', 'gold');
    treeXSmall(c, x+85, y+15)
    fnFlower(c, x+87, y+39, 'yellow', 'gold');
    treeMedium(c, x+82, y+43)
    fnBush(c,x+89,y+59)
    fnBush(c,x+87,y+64)
    flowerbedVert(c, x+87, y+74, 'yellow', 'gold');
    treeXSmall(c, x+86, y+89)

    c.fillStyle = colorLaneMarkings;
    // innerlane
    c.fillRect(x+25, y+93, 1, 2);
    c.fillRect(x+2, y+74, 2, 1);
    // outterlane
    for (let ii = 0; ii < 6; ii++) {
      c.fillRect(midX-3+(ii*9)*hor, midY-25*vert, 2, 1);
      c.fillRect(midX-24*hor, midY-2+(ii*9)*vert, 1, 2);
    }
  }
  if(hor == -1 && vert == -1) {
    // 12/9 corner

    if (aRoads[i][j].exitRight) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+86, y+24, 8, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+86, y+25, 11, 10);
    }
    if (aRoads[i][j].exitBottom) {
      c.fillStyle = 'limegreen';
      // c.fillStyle = 'red';
      c.fillRect(x+64, y+86, 12, 9);
      c.fillStyle = 'lightgrey';
      // c.fillStyle = 'blue';
      c.fillRect(x+65, y+86, 10, 9);
    }

    // Trees & flowers
    treeLarge(c, x+31, y+2)
    treeLarge(c, x+46, y+28)
    treeLarge(c, x+25, y+46)
    treeLarge(c, x, y+31)

    fnBush(c,x+5,y+8)
    fnFlower(c, x+8, y+4, 'yellow', 'gold');

    treeXSmall(c, x+87, y+1)
    fnBush(c,x+87,y+12)
    fnFlower(c, x+88, y+19, 'yellow', 'gold');
    flowerbedVert(c, x+87, y+39, 'yellow', 'gold');
    fnBush(c,x+89,y+53)
    treeMedium(c, x+83, y+61)
    fnBush(c,x+89,y+76)
    fnBush(c,x+88,y+82)
    treeSmall(c, x+79, y+83)
    fnFlower(c, x+57, y+90, 'yellow', 'gold');
    flowerbedHor(c, x+42, y+89, 'yellow', 'gold')
    fnBush(c,x+35,y+88)
    treeXSmall(c, x+26, y+87)
    fnFlower(c, x+16, y+90, 'yellow', 'gold');
    fnFlower(c, x+10, y+89, 'yellow', 'gold');
    fnBush(c,x+3,y+88)

    
    c.fillStyle = colorLaneMarkings;
    // innerlane
    c.fillRect(x+25, y+1, 1, 2);
    c.fillRect(x+1, y+25, 2, 1);
    // outterlane
    for (let ii = 0; ii < 6; ii++) {
      c.fillRect(midX-4+(ii*9)*hor, midY-24*vert, 2, 1);
      c.fillRect(midX-24*hor, midY-4+(ii*9)*vert, 1, 2);
    }
  }

  // Sidewalks
  c.fillStyle = 'limegreen';
  c.fillRect(midX+44*hor, midY+44*vert, 6*hor, 6*vert);
  c.fillStyle = 'lightgrey';
  c.fillRect(midX+45*hor, midY+45*vert, 5*hor, 5*vert);  
}

















function road2LaneDead(c, x, y, hor, vert, dir, time) {
// determine middle of plot, to rotate image.
  let midX = x+50;
  let midY = y+50;

  if(dir == 'vert') {
    // Curb
    c.fillStyle = curbColor;
    c.fillRect(midX+36*hor, midY-50*vert, -72*hor, 86*vert);
    // Asphalt
    c.fillStyle = asphaltColor;
    c.fillRect(midX+35*hor, midY-50*vert, -70*hor, 85*vert);

    // Inner curb on outter lane
    c.fillStyle = curbColor;
    c.fillRect(midX+14*hor, midY+14*vert, -28*vert, -64*vert);
    c.fillStyle = grassColor;
    c.fillRect(midX+13*hor, midY+13*vert, -26*vert, -63*vert);

    // 'Rounding' square corners (sharp corners)
    for(k=0; k<6; k++) {
      c.fillStyle = curbColor;
      // Inner curb
      c.fillRect(midX+(7+k)*hor, midY+(13-k)*vert, 1*hor, 1*vert);
      // Outer curb
      c.fillRect(midX-(13-k)*hor, midY+(8+k)*vert, 1*hor, 1*vert);

      c.fillStyle = asphaltColor;
      // Inner corner
      c.fillRect(midX+(-14+k)*hor, midY+(8+k)*vert, 1*hor, (6-k)*vert);
      // Outer corner
      c.fillRect(midX-(-13+k)*hor, midY-(-8-k)*vert, 1*hor, (6-k)*vert);
    }

    // 'Rounding' square corners (wide corners)
    for(k=0; k<10; k++) {
      c.fillStyle = curbColor;
      // Inner curb
      c.fillRect(midX+(-35+k)*hor, midY+(26+k)*vert, 1*hor, 1*vert);
      // Outer curb
      c.fillRect(midX+(25+k)*hor, midY+(35-k)*vert, 1*hor, 1*vert);

      c.fillStyle = grassColor;
      // Inner corner
      c.fillRect(midX+(-36+k)*hor, midY+(26+k)*vert, 1*hor, (10-k)*vert);
      // Outer corner
      c.fillRect(midX+(35-k)*hor, midY-(-26-k)*vert, 1*hor, (10-k)*vert);
    }

    // Lane markings
    c.fillStyle = colorLaneMarkings;
    for (let i = 0; i < 7; i++) {
      c.fillRect(midX+(24)*hor, midY+(9)*hor*-i+3, vert, 2*hor);
      c.fillRect(midX+(-25)*hor, midY+(9)*hor*-i+3, vert, 2*vert);
    }
    c.fillRect(midX+(+3)*hor, midY+(24)*vert, 2*hor, 1*hor);
    c.fillRect(midX+(-5)*hor, midY+(24)*vert, 2*hor, 1*hor);

  }
  else {
    // Curb
    c.fillStyle = curbColor;
    c.fillRect(midX+36*hor, midY-36*vert, -86*hor, 72*vert);
    // Asphalt
    c.fillStyle = asphaltColor;
    c.fillRect(midX+35*hor, midY-35*vert, -85*hor, 70*vert);
    // Inner curb on outter lane
    c.fillStyle = curbColor;
    c.fillRect(midX+14*hor, midY+14*vert, -64*vert, -28*vert);
    c.fillStyle = grassColor;
    c.fillRect(midX+13*hor, midY+13*vert, -63*vert, -26*vert);

    // 'Rounding' square corners (sharp corners)
    for(k=0; k<6; k++) {
      c.fillStyle = curbColor;
      // Inner curb
      c.fillRect(midX+(7+k)*hor, midY+(13-k)*vert, 1*hor, 1*vert);
      // Outer curb
      c.fillRect(midX+(8+k)*vert, midY-(13-k)*hor, 1*hor, 1*vert);

      c.fillStyle = asphaltColor;
      // Inner corner
      c.fillRect(midX+(8+k)*vert, midY+(-14+k)*hor, (6-k)*vert, 1*hor);
      // Outer corner
      c.fillRect(midX-(-8-k)*vert, midY-(-13+k)*hor, (6-k)*vert, 1*hor);
    }

    // 'Rounding' square corners (wide corners)
    for(k=0; k<10; k++) {
      c.fillStyle = curbColor;
      // Inner curb
      c.fillRect(midX+(26+k)*vert, midY+(-35+k)*hor, 1*hor, 1*vert);
      // Outer curb
      c.fillRect(midX+(35-k)*vert, midY+(25+k)*hor, 1*hor, 1*vert);

      c.fillStyle = grassColor;
      // Inner corner
      c.fillRect(midX+(26+k)*vert, midY+(-36+k)*hor, (10-k)*vert, 1*hor);
      // Outer corner
      c.fillRect(midX-(-26-k)*vert, midY+(35-k)*hor, (10-k)*vert, 1*hor);
    }

    // Lane markings
    c.fillStyle = colorLaneMarkings;
    for (let i = 0; i < 7; i++) {
      c.fillRect(midX+(9)*vert*-i+3, midY+(24)*hor, 2*hor, vert);
      c.fillRect(midX+(9)*vert*-i+3, midY+(-25)*hor, 2*vert, vert);
    }
    c.fillRect(midX+(24)*vert, midY+(+3)*hor, 1*hor, 2*hor);
    c.fillRect(midX+(24)*vert, midY+(-5)*hor, 1*hor, 2*hor);

  }

  if(time == '12') {
    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x, y, 6, plot);
    c.fillRect(x+94, y, 6, plot);
    c.fillRect(x, y+94, plot, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, 5, plot);
    c.fillRect(x+95, y, 5, plot);
    c.fillRect(x, y+95, plot, 5);

    // outter path driveways
    if (aRoads[i][j].exitRight) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+86, y+24, 8, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+86, y+25, 11, 10);
    }
    if (aRoads[i][j].exitBottom) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+64, y+86, 12, 8);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+65, y+86, 10, 11);
    }
    if (aRoads[i][j].exitLeft) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+6, y+64, 8, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+5, y+65, 9, 10);
    }

    // Trees & flowers
    treeLarge(c, x+31, y+1)
    treeLarge(c, x+46, y+26)
    treeLarge(c, x+76, y+74)

    flowerbedVert(c, x+7, y+49, 'yellow', 'gold')
    fnFlower(c, x+8, y+44, 'yellow', 'gold');
    fnFlower(c, x+8, y+84, 'yellow', 'gold');
    fnFlower(c, x+14, y+87, 'yellow', 'gold');
    fnFlower(c, x+8, y+5, 'yellow', 'gold');
    fnFlower(c, x+38, y+90, 'yellow', 'gold');
    flowerbedVert(c, x+88, y+47, 'yellow', 'gold');
    fnBush(c, x+10, y+89)
    treeMedium(c, x+4, y+13)
    treeMedium(c, x+50, y+83)
    treeXSmall(c, x+86, y+63)
    treeXSmall(c, x+87, y+3)
    treeSmall(c, x+26, y+83)
    fnBush(c, x+9, y+29)
    fnBush(c, x+8, y+34)
    fnBush(c, x+88, y+15)
    fnBush(c, x+88, y+38)    

  }
  if(time == '3') {
    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x, y, 6, plot);
    c.fillRect(x, y, plot, 6);
    c.fillRect(x, y+94, plot, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, 5, plot);
    c.fillRect(x, y, plot, 5);
    c.fillRect(x, y+95, plot, 5);

    // outter path driveways
    if (aRoads[i][j].exitTop) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+24, y+5, 12, 9);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+25, y+5, 10, 9);
    }
    if (aRoads[i][j].exitBottom) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+64, y+86, 12, 8);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+65, y+86, 10, 9);
    }
    if (aRoads[i][j].exitLeft) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+6, y+64, 8, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+5, y+65, 9, 10);
    }

    // Trees & flowers
    treeLarge(c, x+52, y+31)
    treeLarge(c, x+76, y+46)

    flowerbedVert(c, x+7, y+49, 'yellow', 'gold')
    fnFlower(c, x+8, y+44, 'yellow', 'gold');
    fnFlower(c, x+8, y+84, 'yellow', 'gold');
    fnFlower(c, x+14, y+87, 'yellow', 'gold');
    fnFlower(c, x+8, y+9, 'yellow', 'gold');
    fnFlower(c, x+16, y+10, 'yellow', 'gold');
    fnFlower(c, x+38, y+90, 'yellow', 'gold');
    fnFlower(c, x+78, y+89, 'yellow', 'gold');
    fnBush(c, x+10, y+89)
    treeMedium(c, x+4, y+13)
    treeMedium(c, x+50, y+83)
    treeXSmall(c, x+86, y+85)
    treeXSmall(c, x+87, y+6)
    treeSmall(c, x+26, y+83)
    fnBush(c, x+9, y+29)
    fnBush(c, x+8, y+34)
    fnBush(c, x+95, y+9)
    fnBush(c, x+39, y+9)
    flowerbedHor(c, x+45, y+9, 'yellow', 'gold')
    treeMedium(c, x+64, y+4)
    fnBush(c, x+79, y+7)

  }
  if(time == '6') {
    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x, y, 6, plot);
    c.fillRect(x+94, y, 6, plot);
    c.fillRect(x, y, plot, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, 5, plot);
    c.fillRect(x+95, y, 5, plot);
    c.fillRect(x, y, plot, 5);

    // outter path driveways
    if (aRoads[i][j].exitTop) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+24, y+5, 12, 9);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+25, y+5, 10, 9);
    }
    if (aRoads[i][j].exitRight) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+86, y+24, 9, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+86, y+25, 11, 10);
    }
    if (aRoads[i][j].exitLeft) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+6, y+64, 8, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+5, y+65, 9, 10);
    }

    // Trees & flowers
    treeMedium(c, x+49, y+35)
    treeLarge(c, x+75, y+2)
    treeLarge(c, x+31, y+52)

    flowerbedVert(c, x+87, y+77, 'yellow', 'gold')
    fnFlower(c, x+8, y+44, 'yellow', 'gold');
    fnFlower(c, x+8, y+84, 'yellow', 'gold');
    fnFlower(c, x+7, y+89, 'yellow', 'gold');
    fnFlower(c, x+8, y+20, 'yellow', 'gold');
    fnFlower(c, x+88, y+94, 'yellow', 'gold');
    fnFlower(c, x+51, y+9, 'yellow', 'gold');
    flowerbedVert(c, x+87, y+47, 'yellow', 'gold');
    fnBush(c, x+9, y+95)
    treeMedium(c, x+10, y+3)
    treeMedium(c, x+51, y+81)
    treeXSmall(c, x+86, y+63)
    treeXSmall(c, x+67, y+6)
    treeXSmall(c, x+6, y+54)
    treeSmall(c, x+39, y+5)
    fnBush(c, x+9, y+29)
    fnBush(c, x+8, y+34)
    fnBush(c, x+58, y+9)
    fnBush(c, x+88, y+38)    

  }
  if(time == '9') {    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x+94, y, 6, plot);
    c.fillRect(x, y, plot, 6);
    c.fillRect(x, y+94, plot, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x+95, y, 5, plot);
    c.fillRect(x, y, plot, 5);
    c.fillRect(x, y+95, plot, 5);

    // outter path driveways
    if (aRoads[i][j].exitTop) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+24, y+5, 12, 9);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+25, y+5, 10, 9);
    }
    if (aRoads[i][j].exitRight) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+86, y+24, 9, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+86, y+25, 11, 10);
    }
    if (aRoads[i][j].exitBottom) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+64, y+86, 12, 8);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+65, y+86, 10, 9);
    }

    // Trees & flowers
    treeLarge(c, x+1, y+31)
    treeLarge(c, x+26, y+46)
    treeLarge(c, x+75, y+2)

    fnFlower(c, x+8, y+89, 'yellow', 'gold');
    fnFlower(c, x+88, y+90, 'yellow', 'gold');
    fnFlower(c, x+82, y+84, 'yellow', 'gold');
    fnFlower(c, x+51, y+9, 'yellow', 'gold');
    flowerbedVert(c, x+87, y+47, 'yellow', 'gold');
    fnBush(c, x+2, y+88)
    fnBush(c, x+88, y+75)
    fnBush(c, x+80, y+88)
    treeMedium(c, x+10, y+3)
    treeMedium(c, x+50, y+83)
    treeXSmall(c, x+86, y+63)
    treeXSmall(c, x+67, y+6)
    treeXSmall(c, x+16, y+87)
    treeSmall(c, x+39, y+5)
    fnBush(c, x+1, y+6)
    fnBush(c, x+5, y+9)
    fnBush(c, x+58, y+9)
    fnBush(c, x+88, y+38)    
    flowerbedHor(c, x+25, y+90, 'yellow', 'gold')
    fnFlower(c, x+42, y+90, 'yellow', 'gold');
  }

}
















function road2LaneStraight(c, x, y, dir, exampleInBuildOptions) {
  if(dir == 'vert' || exampleInBuildOptions) {
    // Curb
    c.fillStyle = curbColor;
    c.fillRect(x+14, y, 1, plot);
    c.fillRect(x+36, y, 1, plot);
    c.fillRect(x+63, y, 1, plot);
    c.fillRect(x+85, y, 1, plot);
    // Asphalt 4 lanes
    c.fillStyle = asphaltColor;
    c.fillRect(x+15, y, 21, plot);
    c.fillRect(x+64, y, 21, plot);

    // Lane markings
    c.fillStyle = colorLaneMarkings;
    for (let i = 0; i < 13; i++) {
      c.fillRect(x+25, y+2+i*9, 1, 2);
      c.fillRect(x+74, y+2+i*9, 1, 2);
    }
    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x, y, 6, plot);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, 5, plot);

    // Sidewalks other side
    c.fillStyle = 'limegreen';
    c.fillRect(x+94, y, 6, plot);
    c.fillStyle = 'lightgrey';
    c.fillRect(x+95, y, 5, plot);

    // outter path driveways
    if (aRoads[i][j].exitRight) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+86, y+24, 9, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+86, y+25, 11, 10);
    }
    if (aRoads[i][j].exitLeft) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+6, y+64, 8, 12);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+5, y+65, 9, 10);
    }

    // Testcar
    drivingSpeed = second * 1;
    drivingSpeed = second *2;
    drivingSpeed = nFrameCounter;
    drivingSpeed = nFrameCounter*1.8;
    // vehicleFamilyCar1(c, x+17, y+5+drivingSpeed, "cornflowerblue", "down");

    lane1= 65;
    lane2= 76;
    backwards = 0 - Math.abs(nFrameCounter)*2;
/*    
    vehicleFamilyCar1(c, x+lane1+1, y+backwards, "green", "up");
    vehicleLargeTruck(c, x+lane1, y+55+backwards, 'pink', 'up');
    vehicleFamilyCar1(c, x+lane2, y+60+backwards,    "hotpink", "up");
    vehicleAmbulance(c, x+lane2, y+85+backwards, 'up');
//    let truckColor = `rgb(${255},0,0)`
    vehicleSmallTruck(c, x+lane2, y+4+backwards, 'purple', 'up');
    vehicleSmallTruck(c, x+lane2, y+34+backwards, 'lightblue', 'up');
//    vehicleLargeTruck(c, x+34, y+12, curbColor, 'up');
*/
    // Trees & flowers
    treeMedium(c, x+4, y+1)
    treeSmall(c, x+6, y+21)
    treeXSmall(c, x+6, y+55)
    treeSmall(c, x+7, y+77)

    fnFlower(c, x+8, y+17, 'yellow', 'gold');
    flowerbedVert(c, x+7, y+35, 'yellow', 'gold')
    fnFlower(c, x+7, y+95, 'yellow', 'gold');
    fnBush(c, x+9, y+88)
    fnFlower(c, x+8, y+50, 'yellow', 'gold');

    // center
    treeLarge(c, x+31, y+1)
    treeLarge(c, x+46, y+26)
    treeLarge(c, x+31, y+52)
    treeLarge(c, x+46, y+76)

    // other side
    treeMedium(c, x+84, y+71)

    treeSmall(c, x+86, y+1)
    treeSmall(c, x+87, y+37)
    treeXSmall(c, x+86, y+12)
    fnBush(c, x+89, y+20)

    flowerbedVert(c, x+88, y+51, 'yellow', 'gold');
    fnBush(c, x+87, y+66)
    fnFlower(c, x+88, y+88, 'yellow', 'gold');
    fnFlower(c, x+87, y+96, 'yellow', 'gold');
    }
  else {
    // Curb
    c.fillStyle = curbColor;
    c.fillRect(x, y+14, plot, 1);
    c.fillRect(x, y+36, plot, 1);
    c.fillRect(x, y+63, plot, 1);
    c.fillRect(x, y+85, plot, 1);
    // Asphalt 4 lanes
    c.fillStyle = asphaltColor;
    c.fillRect(x, y+15, plot, 21);
    c.fillRect(x, y+64, plot, 21);
    // Middle of highway

    // Lane markings
    c.fillStyle = colorLaneMarkings;
    for (let i = 0; i < 13; i++) {
      c.fillRect(x+2+i*9, y+25, 2, 1);
      c.fillRect(x+2+i*9, y+74, 2, 1);
    }


    // Sidewalks
    c.fillStyle = 'limegreen';
    c.fillRect(x, y, plot, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y, plot, 5);

    // Sidewalks other side
    c.fillStyle = 'limegreen';
    c.fillRect(x, y+94, plot, 6);
    c.fillStyle = 'lightgrey';
    c.fillRect(x, y+95, plot, 5);

    // outter path driveways
    if (aRoads[i][j].exitTop) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+24, y+5, 12, 9);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+25, y+5, 10, 9);
    }
    if (aRoads[i][j].exitBottom) {
      c.fillStyle = 'limegreen';
      c.fillRect(x+64, y+86, 12, 8);
      c.fillStyle = 'lightgrey';
      c.fillRect(x+65, y+86, 10, 9);
    }

    // Trees & flowers
    treeMedium(c, x+41, y+4)

    treeSmall(c, x+14, y+5)
    treeSmall(c, x+66, y+5)
    treeXSmall(c, x+93, y+6)

    fnFlower(c, x+1, y+10, 'yellow', 'gold');
    fnFlower(c, x+6, y+9, 'yellow', 'gold');
    fnFlower(c, x+36, y+10, 'yellow', 'gold');
    fnFlower(c, x+55, y+8, 'yellow', 'gold');
    flowerbedHor(c, x+77, y+9, 'yellow', 'gold')

    fnBush(c, x+59, y+9)

    // center
    treeLarge(c, x+1, y+31)
    treeLarge(c, x+52, y+31)
    treeLarge(c, x+26, y+46)
    treeLarge(c, x+76, y+46)

    // other side
    treeMedium(c, x+13, y+83)
    treeSmall(c, x+79, y+85)
    treeXSmall(c, x+44, y+86)

    fnFlower(c, x+1, y+90, 'yellow', 'gold');
    fnFlower(c, x+6, y+89, 'yellow', 'gold');
    flowerbedHor(c, x+27, y+89, 'yellow', 'gold')
    fnFlower(c, x+52, y+90, 'yellow', 'gold');
    fnFlower(c, x+89, y+89, 'yellow', 'gold');

    fnBush(c, x+59, y+87)
    fnBush(c, x+95, y+89)
  }
}






