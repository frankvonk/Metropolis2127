

function nightClubPedestrianLevel(c, x, y, i, j) {
  c.globalAlpha = 1;  

  // Ground or grass
  c.fillStyle = "#888";
  c.fillStyle = "red";
  c.fillStyle = "silver";
  //c.fillRect(x, y, plot, plot);

  // clubsign
  clubSign(c, x+40, y+30);
  // yoshiwaraSign
  yoshiwaraSign(c, x+88, y+2);
}


function clubSign(c, x, y){
  c.fillStyle = 'cornflowerblue'
  c.fillRect(x-2, y-2, 19, 9);  
  if(second % 2 == 0) {   
    c.fillStyle = 'hotpink'
    c.fillRect(x-1, y-1, 17, 7);  
    clubLetters(c, x, y, 'purple');
  }
  else {
    c.fillStyle = 'purple'
    c.fillRect(x-1, y-1, 17, 7);  
    clubLetters(c, x, y, 'hotpink');
  }
}
function clubLetters(c, x, y, color){
  charN_C(c, x, y, color)
  charN_L(c, x+4, y, color)
  charN_U(c, x+8, y, color)
  charN_B(c, x+12, y, color)  
}

function yoshiwaraSign(c, x, y) {
  const second = new Date().getSeconds();
  c.fillStyle = 'cornflowerblue'
  c.fillRect(x-1, y-1, 9, 59);  
  if(second % 2 === 0) {      
    c.fillStyle = 'hotpink'
    c.fillRect(x, y, 7, 57);  
    yoshiwaraLetters(c, x+2, y+2, 'purple')
    }
  else {
    c.fillStyle = 'purple'
    c.fillRect(x, y, 7, 57);  
    yoshiwaraLetters(c, x+2, y+2, 'hotpink')
    }
  }
function yoshiwaraLetters(c, x, y, color) {
  charN_Y(c, x, y, color)
  charN_O(c, x, y+6, color)
  charN_S(c, x, y+12, color)
  charN_H(c, x, y+18, color)  
  charN_I(c, x+1, y+24, color)
  charN_W(c, x, y+30, color)
  charN_A(c, x, y+36, color)
  charN_R(c, x, y+42, color)
  charN_A(c, x, y+48, color)
} 
