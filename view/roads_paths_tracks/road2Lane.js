let grassColor = 'lightgreen';

  
function road2Lane(c, x, y, i, j){
  c.globalAlpha = 1; 
  c.fillStyle = grassColor;
  c.fillRect(x, y, plot, plot);
  c.fillStyle = "silver"; // 

  let sdirection = aRoads[i][j].direction; 

  if(sdirection == 'dead'){
    c.fillRect(x+p2, y+p2, p36, p36);
    c.fillStyle = grassColor;
    c.fillRect(x+p19, y+p19, p2, p2);
  }
  else if(sdirection == 'intersection'){
    c.fillStyle = "silver";
    c.fillRect(x+p2, y, p36, plot);
    c.fillRect(x, y+p2, plot, p36);
    c.fillStyle = "white";
    c.fillRect(x+p2, y+p1, p17, p1);
    c.fillRect(x+p21, y+p38, p17, p1);
    c.fillRect(x+p1, y+p21, p1, p17);
    c.fillRect(x+p38, y+p2, p1, p17);
    c.fillStyle = grassColor;
    c.fillRect(x+p19, y, p2, p2);
    c.fillRect(x+p19, y+p38, p2, p2);
    c.fillRect(x+p38, y+p19, p2, p2);
    c.fillRect(x, y+p19, p2, p2);
  }

  else if(sdirection == 'tsplit_12_3_6'){
    c.fillStyle = "silver";
    c.fillRect(x+p2, y, p36, plot);
    c.fillRect(x+p2, y+p2, p38, p36);
    c.fillStyle = grassColor;
    c.fillRect(x+p19, y, p2, p2);
    c.fillRect(x+p38, y+p19, p2, p2);
    c.fillRect(x+p19, y+p38, p2, p2);
    c.fillStyle = "white";
    c.fillRect(x+p2, y+p1, p17, p1);
    c.fillRect(x+p21, y+p38, p17, p1);
    c.fillRect(x+p38, y+p2, p1, p17);
  }

  else if(sdirection == 'tsplit_3_6_9'){
/*
    c.fillStyle = "silver";
    //c.fillStyle = "red";
    c.fillRect(x+p2, y+p2, p36, p38);
    c.fillRect(x, y+p2, plot, p36);
    c.fillStyle = grassColor;
    c.fillRect(x, y+p19, p2, p2);
    c.fillRect(x+p38, y+p19, p2, p2);
    c.fillRect(x+p19, y+p38, p2, p2);
    c.fillStyle = "white";
    c.fillRect(x+p21, y+p38, p17, p1);
    c.fillRect(x+p38, y+p2, p1, p17);
    c.fillRect(x+p1, y+p21, p1, p17);
*/  
  c.fillStyle = 'yellowgreen'
//c.fillRect(x, y, plot, plot)
    // Curb
    c.fillStyle = "grey";
    c.fillRect(x, y+14, plot, 1);
    c.fillRect(x, y+36, plot, 1);
    c.fillRect(x, y+63, plot, 1);
    c.fillRect(x, y+85, plot, 1);
    // Asphalt 4 lanes
    c.fillStyle = "silver";
    c.fillRect(x, y+15, plot, 21);
    c.fillRect(x, y+64, plot, 21);
    // Ashphalt patchwork
//    c.fillStyle='red'
    c.fillRect(x+15, y+84, 21, 20);
    c.fillRect(x+64, y+84, 21, 20);
//    c.fillStyle="red"
    c.fillRect(x+15, y+35, 21, 30);
    c.fillRect(x+64, y+35, 21, 30);
    for(i=0;i<7;i++){
//      c.fillStyle = 'black'
      c.fillRect(x+9+i, y+85+i, 6, 1);
      c.fillRect(x+30+i, y+42-i, 6, 1);
      c.fillRect(x+57+i, y+36+i, 7, 1);
      c.fillRect(x+79+i, y+91-i, 6, 1);
    }



    // Curb patchwork
    c.fillStyle = 'grey'
//    c.fillStyle='black'
    c.fillRect(x+14, y+36, 1, 27);
    c.fillRect(x+14, y+91, 1, 10);
    c.fillRect(x+36, y+42, 1, 21);
    c.fillRect(x+36, y+85, 1, 20);
    c.fillRect(x+63, y+85, 1, 20);
    c.fillRect(x+63, y+42, 1, 21);
    c.fillRect(x+85, y+36, 1, 27);
    c.fillRect(x+85, y+91, 1, 20);

    // corner blocks
    c.fillStyle='green'
//    c.fillRect(x, y+86, 6, 6);
  //  c.fillRect(x+8, y+94, 6, 6);

    //c.fillRect(x+94, y+86, 6, 6);
    //c.fillRect(x+86, y+94, 6, 6);

    // CornerCurb
    c.fillStyle = 'grey'

    for(i=0;i<7;i++){
      c.fillStyle = 'grey'
//      c.fillStyle = 'red'
      c.fillRect(x+8+i, y+85+i, 1, 1);
      c.fillRect(x+36+i, y+42-i, 1, 1);
      c.fillRect(x+57+i, y+36+i, 1, 1);
      c.fillRect(x+85+i, y+91-i, 1, 1);
    }

    // Middle of highway

    // Lane markings
    c.fillStyle = "white";
    for (let i = 0; i < 13; i++) {
//      c.fillRect(x+2+i*9, y+25, 2, 1);
//      c.fillRect(x+2+i*9, y+74, 2, 1);
    }


/*
    // HELPER lINES
    c.fillStyle='blue'
    c.fillRect(x+15, y+0, 10, 1);
    c.fillRect(x+26, y+0, 10, 1);
    c.fillRect(x+64, y+0, 10, 1);
    c.fillRect(x+75, y+0, 10, 1);
*/

    // Trees & flowers
    for (let i = 0; i < 15; i++){
      treeXSmall(c, x+11+i*6, y+10);
    }


/*
    // Asphalt 6 lanes
    c.fillStyle = "silver";
    c.fillRect(x+15, y, 70, plot);
    // Middle of highway
    c.fillStyle = grassColor;
    c.fillRect(x+47, y, 6, plot);

    // Lane markings
    c.fillStyle = "white";
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
    c.fillStyle = "silver";
    c.fillRect(x+p2, y, p36, plot);
    c.fillRect(x, y+p2, p36, plot);
    c.fillStyle = grassColor;
    c.fillRect(x, y+p19, p2, p2);
    c.fillRect(x+p19, y, p2, p2);
    c.fillRect(x+p19, y+p38, p2, p2);
    c.fillStyle = "white";
    c.fillRect(x+p21, y+p38, p17, p1);
    c.fillRect(x+p2, y+p1, p17, p1);
    c.fillRect(x+p1, y+p21, p1, p17);
  }
  else if(sdirection == 'tsplit_9_12_3'){
    c.fillStyle = "silver";
    c.fillRect(x+p2, y, p36, p38);
    c.fillRect(x, y+p2, plot, p36);
    c.fillStyle = grassColor;
    c.fillRect(x, y+p19, p2, p2);
    c.fillRect(x+p38, y+p19, p2, p2);
    c.fillRect(x+p19, y, p2, p2);
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
  else if(sdirection == 'straight_3_9'){ 
    road2LaneStraight(c, x, y, 'hor');
  }
  else if(sdirection == 'dead_12'){
    road2LaneDead(c, x, y, -1, 1, 'vert');
  }
  else if(sdirection == 'dead_6'){
    road2LaneDead(c, x, y, -1, -1, 'vert');
  }
  else if(sdirection == 'dead_3'){
    road2LaneDead(c, x, y, -1, -1, 'hor');
  }
  else if(sdirection == 'dead_9'){
    road2LaneDead(c, x, y, 1, 1, 'hor');
  }
}


function road2LaneCorner(c, x, y, hor, vert) {
  // determine middle of plot, to rotate image.
  let midX = x+50;
  let midY = y+50;

  // Curb
  c.fillStyle = "grey";
  c.fillRect(midX-36*hor, midY-36*vert, 86*hor, 1*vert); 
  c.fillRect(midX-36*hor, midY-36*vert, 1*hor, 86*vert); 
  // Asphalt
  c.fillStyle = "silver";
  c.fillRect(midX-35*hor, midY-35*vert, 85*hor, 85*vert);
  // Curb
  c.fillStyle = "grey";
  c.fillRect(midX-8*hor, midY-14*vert, 58*hor, 1*vert); 
  c.fillRect(midX-14*hor, midY-8*vert, 1*hor, 58*vert); 
  c.fillStyle = grassColor;
  c.fillRect(midX-13*hor, midY-13*vert, 63*hor, 63*vert); 

  c.fillStyle = "grey";
  c.fillRect(midX+13*hor, midY+13*vert, 37*hor, 37*vert); 
  c.fillStyle = "silver";
  c.fillRect(midX+14*hor, midY+14*vert, 36*hor, 36*vert); 
  c.fillStyle = "grey";
  c.fillRect(midX+35*hor, midY+35*vert, 15*hor, 15*vert); 
  c.fillStyle = grassColor;
  c.fillRect(midX+36*hor, midY+36*vert, 14*hor, 14*vert); 

  // 'Rounding' square corners (sharp corners)
  for(k=0; k<6; k++) {
    c.fillStyle = "grey";
    // Inner curb
    c.fillRect(midX+(36+k)*hor, midY+(40-k)*vert, 1*hor, 1*vert); 
    // Outer curb
    c.fillRect(midX-(13-k)*hor, midY-(9+k)*vert, 1*hor, 1*vert); 

    c.fillStyle = "silver";
    // Inner corner
    c.fillRect(midX+(35+k)*hor, midY+35*vert, 1*hor, (6-k)*vert); 
    // Outer corner
    c.fillRect(midX-(14-k)*hor, midY-14*vert, 1*hor, (6-k)*vert);    
  }

  // 'Rounding' square corners (wide corners)
  for(k=0; k<10; k++) {
    c.fillStyle = "grey";
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

  // Lane markings
  c.fillStyle = "white";
  c.fillRect(midX+24*hor, midY+43*vert, 1, 2);    
  c.fillRect(midX+43*hor, midY+24*vert, 2, 1);    
  for (let i = 0; i < 6; i++) {
    c.fillRect(midX-5+(i*9)*hor, midY-25*vert, 2, 1);    
    c.fillRect(midX-25*hor, midY-1+(i*9)*vert, 1, 2);    
  }
  



/*
  c.fillStyle='red'
  c.fillRect(midX+24*hor, midY+43*vert, 1*hor, 6*vert);    
  c.fillStyle='blue'
  c.fillRect(midX+25*hor, midY+41*vert, 10*hor, 1*vert);    
  c.fillRect(midX+14*hor, midY+41*vert, 10*hor, 1*vert);    

  c.fillRect(midX-35*hor, midY+49, 10*hor, 1*vert);    
  
  c.fillRect(midX+41*hor, midY+25*vert, 1*hor, 10*vert);    
  c.fillRect(midX+41*hor, midY+14*vert, 1*hor, 10*vert);    

  for(l=0;l<15;l++){
    c.fillStyle='red'
    c.fillRect(midX+(37-l)*hor, midY+(14+l)*vert, 1*hor, 1*vert);    
    c.fillStyle='green'
    c.fillRect(midX+(39-l)*hor, midY+(25+l)*vert, 1*hor, 1*vert);    
  }
//  c.fillRect(x+99, y, 1, 15);
//  c.fillRect(x+99, y+85, 1, 15);
//  c.fillRect(midX-50*hor, midY+49*vert, 14*hor, 1*vert); 
//  c.fillRect(midX+35*hor, midY+49*vert, 14*hor, 1*vert); 
//  c.fillRect(midX+48*hor, midY+48*vert, 14*hor, 1*vert); 
//  c.fillRect(x, y+85, 1, 15);
  **/
}

function road2LaneDead(c, x, y, hor, vert, dir) {
// determine middle of plot, to rotate image.
  let midX = x+p20;
  let midY = y+p20;
// silver asphalt
  c.fillStyle = "silver";
  c.fillRect(midX+p18*hor, midY-p18*vert, -p36*hor, p36*vert);  
  if(dir == 'vert') {
    c.fillRect(midX+p18*hor, midY-p20*vert, -p36*hor, p2*vert);  
    c.fillStyle = grassColor;
    c.fillRect(midX-p1, y+p20, p2, -p20*vert);
    c.fillStyle = "white";
    c.fillRect(midX-p10, midY-p17*vert, p1, p2*vert);
    c.fillRect(midX-p10, midY-p9*vert, p1, p2*vert);
    c.fillRect(midX-p10, midY-p1*vert, p1, p2*vert);
    c.fillRect(midX+p9, midY-p17*vert, p1, p2*vert);
    c.fillRect(midX+p9, midY-p9*vert, p1, p2*vert);
    c.fillRect(midX+p9, midY-p1*vert, p1, p2*vert);
  }
  else {
    c.fillRect(midX-p20*vert, midY-p18*vert, p2*hor, p36*vert);
    c.fillStyle = grassColor;
    c.fillRect(midX-p20*hor, y+p19, p20*hor, p2);
    c.fillStyle = "white";
    c.fillRect(midX-p17*hor, y+p10, p2*hor, p1);
    c.fillRect(midX-p9*hor, y+p10, p2*hor, p1);
    c.fillRect(midX-p1*hor, y+p10, p2*hor, p1);
    c.fillRect(midX-p17*hor, y+p29, p2*hor, p1);
    c.fillRect(midX-p9*hor, y+p29, p2*hor, p1);
    c.fillRect(midX-p1*hor, y+p29, p2*hor, p1);
  }
}

function road2LaneStraight(c, x, y, dir) {

  if(dir == 'vert') {
    // Curb
    c.fillStyle = "grey";
    c.fillRect(x+14, y, 1, plot);
    c.fillRect(x+36, y, 1, plot);
    c.fillRect(x+63, y, 1, plot);
    c.fillRect(x+85, y, 1, plot);
    // Asphalt 4 lanes
    c.fillStyle = "silver";
    c.fillRect(x+15, y, 21, plot);
    c.fillRect(x+64, y, 21, plot);

    // Lane markings
    c.fillStyle = "white";
    for (let i = 0; i < 13; i++) {
      c.fillRect(x+25, y+2+i*9, 1, 2);
      c.fillRect(x+74, y+2+i*9, 1, 2);      
    }

    // HELPER lINES
    c.fillStyle='blue'
//    c.fillRect(x+15, y+0, 10, 1);
//    c.fillRect(x+26, y+0, 10, 1);
//    c.fillRect(x+37, y+0, 10, 1);
//    c.fillRect(x+53, y+0, 10, 1);
//    c.fillRect(x+64, y+0, 10, 1);
//    c.fillRect(x+75, y+0, 10, 1);
   

    // Trees & flowers
    for (let i = 0; i < 15; i++){
      treeXSmall(c, x+10, y+8+i*6);
      flowersXSmall(c, x+39, y+5+i*5, 'pink', 'lightblue');
      treeXSmall(c, x+46, y+11+i*6);
      treeXSmall(c, x+42, y+10+i*6);
      treeXSmall(c, x+52, y+10+i*6);
      treeXSmall(c, x+59, y+12+i*6);
      flowersXSmall(c, x+56, y+5+i*5, 'pink', 'lightblue');
      treeXSmall(c, x+87, y+11+i*6);
    }

    // Testcar
    drivingSpeed = second * 1;
    drivingSpeed = second *2;
    drivingSpeed = nFrameCounter;
    drivingSpeed = nFrameCounter*1.8;
    vehicleFamilyCar1(c, x+17, y-300+drivingSpeed, "cornflowerblue", "down");

    lane1= 65;
    lane2= 76;
    backwards = 0 - Math.abs(nFrameCounter)*2;
    vehicleFamilyCar1(c, x+lane1+1, y+backwards, "green", "up");
    vehicleLargeTruck(c, x+lane1, y+55+backwards, 'pink', 'up');
    vehicleFamilyCar1(c, x+lane2, y+60+backwards,    "hotpink", "up");
    vehicleAmbulance2(c, x+lane2, y+85+backwards, 'up');
//    let truckColor = `rgb(${255},0,0)`
    vehicleSmallTruck(c, x+lane2, y+4+backwards, 'purple', 'up');
    vehicleSmallTruck(c, x+lane2, y+34+backwards, 'lightblue', 'up');
//    vehicleLargeTruck(c, x+34, y+12, 'grey', 'up');

    }
  else {
    // Curb
    c.fillStyle = "grey";
    c.fillRect(x, y+14, plot, 1);
    c.fillRect(x, y+36, plot, 1);
    c.fillRect(x, y+63, plot, 1);
    c.fillRect(x, y+85, plot, 1);
    // Asphalt 4 lanes
    c.fillStyle = "silver";
    c.fillRect(x, y+15, plot, 21);
    c.fillRect(x, y+64, plot, 21);
    // Middle of highway

    // Lane markings
    c.fillStyle = "white";
    for (let i = 0; i < 13; i++) {
      c.fillRect(x+2+i*9, y+25, 2, 1);
      c.fillRect(x+2+i*9, y+74, 2, 1);
    }

    // HELPER lINES
    c.fillStyle='blue'
    c.fillRect(x+15, y+0, 10, 1);
    c.fillRect(x+26, y+0, 10, 1);
    c.fillRect(x+64, y+0, 10, 1);
    c.fillRect(x+75, y+0, 10, 1);


    // Trees & flowers
    for (let i = 0; i < 15; i++){
      treeXSmall(c, x+11+i*6, y+10);
      flowersXSmall(c, x+5+i*5, y+39, 'pink', 'lightblue');
      treeXSmall(c, x+11+i*6, y+46);
      treeXSmall(c, x+9+i*6, y+54);
      flowersXSmall(c, x+6+i*5, y+60, 'pink', 'lightblue');
      treeXSmall(c, x+9+i*6, y+87);
    }

    // Testcar
    drivingSpeed = second * 1;
    drivingSpeed = second *2;
    drivingSpeed = nFrameCounter;
    drivingSpeed = nFrameCounter*1.8;
//    vehicleFamilyCar1(c, x+17, y-300+drivingSpeed, "cornflowerblue", "down");

    lane1= 65;
    lane2= 76;
    backwards = 0 - Math.abs(nFrameCounter)*2;
//    vehicleFamilyCar1(c, x+lane1+1+backwards, y, "green", "up");
//    vehicleLargeTruck(c, x+lane1+backwards, y+55, 'pink', 'up');
//    vehicleFamilyCar1(c, x+lane2+backwards, y+60,    "hotpink", "up");
 //   vehicleAmbulance2(c, x+lane2+backwards, y+85, 'up');
//    let truckColor = `rgb(${255},0,0)`
 //   vehicleSmallTruck(c, x+lane2+backwards, y+4, 'purple', 'up');
 //   vehicleSmallTruck(c, x+lane2+backwards, y+34, 'lightblue', 'up');
//    vehicleLargeTruck(c, x+34, y+12, 'grey', 'up');


  }
}
  





