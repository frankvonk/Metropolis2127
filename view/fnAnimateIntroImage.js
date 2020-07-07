
// opacity +=1
//════════╡ INTRODUCTION FILM ╞════════════════════════════════════════════
/*
let swimmerX = 233;

let speedRatioX = 2.3
let speedRatioY = 2;
let speedX = speedRatioX*2.5
let speedY = speedRatioY*2.5

// LINES IN THE ORDER WHICH THEY APPEAR
let line1tx =-48; // LINE 1
let line1ty =-10;  // LINE 1
let line2tx =28; // LINE 2
let line2ty =-10;  // LINE 2

let dropper1 = 219; // VERTICAL ON LETTERS
let dropper2 = 219; // VERTICAL ON LETTERS

let line3tx =70; // LINE 3
let line3ty =-10;  // LINE 3
let line4tx =147; // LINE 4
let line4ty =-10;  // LINE 4

let line5tx =-45; // LINE 5
let line5ty =470;  // LINE 5
let line6tx =31; // LINE 6
let line6ty =470;  // LINE 6
let line7tx =70; // LINE 7
let line7ty =470;  // LINE 7

let line8tx =147; // LINE 8
let line8ty =470;  // LINE 8

let line9tx = 520;  // LINE 9  RIGHT TO LEFT DOWN
let line9ty =-10;  // LINE 9  RIGHT TO LEFT DOWN
let line10tx = 638;  // LINE 10 RIGHT TO LEFT UP
let line10ty =-10; // LINE 10 RIGHT TO LEFT UP
let line11tx = 470;  // LINE 11 RIGHT TO LEFT UP
let line11ty = 470; // LINE 11 RIGHT TO LEFT UP
let line12tx = 518;  // LINE 11 RIGHT TO LEFT UP
let line12ty = 470; // LINE 11 RIGHT TO LEFT UP
let line13tx = 637;  // LINE 11 RIGHT TO LEFT UP
let line13ty = 470; // LINE 11 RIGHT TO LEFT UP
let line14tx = -5;  // HORIZONTAL
let line15tx = 560;  // HORIZONTAL
let dropper3 = 219; // VERTICAL ON LETTERS
let dropper4 = 219; // VERTICAL ON LETTERS


opacityFade = 1;

function fnAnimateIntroImage(c){
  var eHelp = document.getElementById('intro1jpg');

//  c.drawImage(eHelp, 0, 0, 547, 462);
  // 2153 x 1589
  // 215 x 159
  // 22 x 16
  
  const eCanvas = document.getElementById('gameboardCanvas');
  var c = eCanvas.getContext("2d");

  // BLACK BACKGROUND
//  let cSlideBlackToTransparent = "black";
//  cSlideBlackToTransparent = "transparent";
//  opacityFade -= 0.004;
//  if(opacityFade < 0.001){cSlideBlackToTransparent = 'transparent';}
//  c.fillStyle = cSlideBlackToTransparent;
//  c.globalAlpha = opacityFade;
//  c.fillRect(0, 0, 600, 600);  
//  c.globalAlpha = 1;
  // MOVING BLOCKS
//  let metrolines = "#f6019d";
//  if(opacityFade <0.01){metrolines = 'transparent';}





///  c.fillRect(100, swimmerX, 20, 20);  
 // c.fillRect( swimmerX,100, 20, 20);
  // put a break on it, infinite movement could crash game  
//  if(swimmerX<550){
  //  swimmerX +=0.5;  }

// FIRST LINES 

if(seconds<10){
  let metrolines = "#f6019d";
   metrolines = "lightgrey";
  c.globalAlpha = 1;

  
  // LINES TO LETTERS
  c.lineWidth = 5;
  c.strokeStyle = metrolines;
  c.moveTo(-48, -10);
  c.lineTo(line1tx,line1ty);
  c.stroke();
  if(line1ty<230){
    line1tx +=speedX;
    line1ty +=speedY;
  }
  c.moveTo(28, -10);
  c.lineTo(line2tx,line2ty);
  c.stroke();
  if(line2ty<219){
    line2tx += speedX;
    line2ty += speedY;
  }
  else if(line2ty<238){
    c.moveTo(294, 219);
    c.lineTo(294, dropper1);
    c.stroke();
    if(dropper1<242){
      dropper1 +=2;
    }
  }
  c.moveTo(70, -10);
  c.lineTo(line3tx,line3ty);
  c.stroke();
  if(line3ty<230){
    line3tx += speedX;
    line3ty += speedY;
  }
  c.moveTo(147, -10);
  c.lineTo(line4tx,line4ty);
  c.stroke();
  if(line4ty<219){
    line4tx += speedX;
    line4ty += speedY;
  }
  else if(line4ty<236){
    c.moveTo(411, 219);
    c.lineTo(411, dropper2);
    c.stroke();
    if(dropper2<240){
      dropper2 += speedRatioY;
    }
  }
  // DOWN TO TOP
  c.moveTo(-45, 470);
  c.lineTo(line5tx,line5ty);
  c.stroke();
  if(line5ty>230){
    line5ty -= speedY;
    line5tx += speedX;
  }
  c.moveTo(31, 470);
  c.lineTo(line6tx,line6ty);
  c.stroke();
  if(line6ty>244){
    line6ty -= speedY;
    line6tx += speedX;
  }
  c.moveTo(70, 472);
  c.lineTo(line7tx,line7ty);
  c.stroke();
  if(line7ty>230){
    line7ty -= speedY;
    line7tx += speedX;
  }
  c.moveTo(147, 470);
  c.lineTo(line8tx,line8ty);
  c.stroke();
  if(line8ty>241){
    line8ty -=speedY;
    line8tx +=speedX;
  }
} // END FRAMERATE < xx
//if(seconds>2.5) { //if (nFrameCounter<20){
if(seconds>0.5) { //if (nFrameCounter<20){
    c.moveTo(520, -10);
  c.lineTo(line9tx,line9ty);
  c.stroke();
  if(line9ty<219){
    line9tx -= speedX;
    line9ty += speedY;
  }
  else if(line9ty<238){
    c.moveTo(255, 219);
    c.lineTo(255, dropper3);
    c.stroke();
    if(dropper3<243){
      dropper3 += speedY;
    }
  }

  c.moveTo(638, -10);
  c.lineTo(line10tx,line10ty);
  c.stroke();
  if(line10ty<219){
    line10tx -= speedX;
    line10ty += speedY;
  }
  else if(line10ty<238){
    c.moveTo(373, 219);
    c.lineTo(373, dropper4);
    c.stroke();
    if(dropper4<241){
      dropper4 +=2;
    }
  }
  c.moveTo(470, 470);
  c.lineTo(line11tx,line11ty);
  c.stroke();
  if(line11ty>249){
    line11tx -= speedX;
    line11ty -= speedY;
  }
  c.moveTo(518, 470);
  c.lineTo(line12tx,line12ty);
  c.stroke();
  if(line12ty>243){
    line12tx -= speedX;
    line12ty -= speedY;
  }
  c.moveTo(637, 470);
  c.lineTo(line13tx,line13ty);
  c.stroke();
  if(line13ty>244){
    line13tx -= speedX;
    line13ty -= speedY;
  }
} // END IF SECONDS >2.5

if(seconds>1) { 
  c.moveTo(-5, 252);
  c.lineTo(line14tx, 252);
  c.stroke();
  if(line14tx<480){
    line14tx += 14;
  }
  c.moveTo(560, 210);
  c.lineTo(line15tx, 210);
  c.stroke();
  if(line15tx>120){
    line15tx -= 14;
  }
}
}*/
 //════╡ END INTRODUCTION FILM ╞══════════════════════════════════════════

