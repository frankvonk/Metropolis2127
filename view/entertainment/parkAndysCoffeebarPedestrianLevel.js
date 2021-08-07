// Park with coffeebar and fountains

function parkAndysCoffeebarPedestrianLevel(c, x, y){

var second = new Date().getSeconds();

let color1 = 'darkturquoise';
color1 = 'aqua';
//color1 = 'blue';
let color2 = 'turquoise'
//color2 = 'red'
let fountain1x = x+60;
let fountain1y = y+11;
let fountain2x = x+72;
let fountain2y = y+11;
let fountain3x = x+84;
let fountain3y = y+11;
if(second % 2 === 0){
  firstFountainRing(c, fountain1x, fountain1y-1, color2)
  secondFountainRing(c, fountain1x-1, fountain1y-2, color1)

  firstFountainRing(c, fountain2x, fountain2y-1, color2)
  secondFountainRing(c, fountain2x-1, fountain2y-2, color1)

  firstFountainRing(c, fountain3x, fountain3y-1, color2)
  secondFountainRing(c, fountain3x-1, fountain3y-2, color1)

  firstFountainRing(c, fountain1x, fountain1y+76, color1)
  secondFountainRing(c, fountain1x-1, fountain1y+75, color2)

  firstFountainRing(c, fountain2x, fountain2y+76, color1)
  secondFountainRing(c, fountain2x-1, fountain2y+75, color2)

  firstFountainRing(c, fountain3x, fountain3y+76, color1)
  secondFountainRing(c, fountain3x-1, fountain3y+75, color2)
  
  //  thirdFountainRing(c, mazeTopX+6, mazeTopY+6, color2)
} else {
  firstFountainRing(c, fountain1x, fountain1y-1, color1)
  secondFountainRing(c, fountain1x-1, fountain1y-2, color2)

  firstFountainRing(c, fountain2x, fountain2y-1, color1)
  secondFountainRing(c, fountain2x-1, fountain2y-2, color2)

  firstFountainRing(c, fountain3x, fountain3y-1, color1)
  secondFountainRing(c, fountain3x-1, fountain3y-2, color2)

  firstFountainRing(c, fountain1x, fountain1y+76, color2)
  secondFountainRing(c, fountain1x-1, fountain1y+75, color1)

  firstFountainRing(c, fountain2x, fountain2y+76, color2)
  secondFountainRing(c, fountain2x-1, fountain2y+75, color1)

  firstFountainRing(c, fountain3x, fountain3y+76, color2)
  secondFountainRing(c, fountain3x-1, fountain3y+75, color1)
  //  thirdFountainRing(c, mazeTopX+6, mazeTopY+6, color1)
}

function fountain(c, x, y, color1, color2){
}
function firstFountainRing(c, x, y, color) {
  c.fillStyle = color;
  c.fillRect(x+2,y,2,1);
  c.fillRect(x+4,y+1,1,1);
  c.fillRect(x+2,y+2,2,1);
  c.fillRect(x+1,y+1,1,1);
}
function secondFountainRing(c, x, y, color) {
  c.fillStyle = color;
//  c.fillStyle = 'red';
  c.fillRect(x+3,y,2,1);
  c.fillRect(x+5,y+1,1,1);
  c.fillRect(x+6,y+2,1,1);
  c.fillRect(x+5,y+3,1,1);
  c.fillRect(x+3,y+4,2,1);
  c.fillRect(x+2,y+3,1,1);
  c.fillRect(x+1,y+2,1,1);
  c.fillRect(x+2,y+1,1,1);
}
function thirdFountainRing(c, x, y, color) {
  c.fillStyle = color;
  c.fillStyle = 'red';
  c.fillRect(x-1,y-1,1,3);
}



}

