

function nightClub(c, x, y, i, j) {

      c.globalAlpha = 1;  
  
    // Ground or grass
    c.fillStyle = "#777";
    c.fillStyle = "silver";
    c.fillStyle = "#aaa";
    c.fillStyle = "lightgrey";
    c.fillRect(x, y, plot, plot);
    
    // Roof
    color = '#ccc';
    color = '#999';
    c.fillStyle = color;
    c.fillRect(x+2, y+2, 84, 40);
    c.fillRect(x+2, y+2, 30, 84);
    color = '#aaa';
    color = '#bbb';
    c.fillStyle = color;
    c.fillRect(x+3, y+3, 82, 38);
    c.fillRect(x+3, y+3, 28, 82);
    c.fillStyle = '#eee'
    c.fillRect(x+4, y+4, 80, 36);
    c.fillRect(x+4, y+4, 26, 80);
  
    // windows
    color = 'grey';
    c.fillStyle = color;
    c.fillRect(x+10, y+10, 4, 10);
    c.fillRect(x+20, y+10, 4, 10);
    c.fillRect(x+30, y+10, 4, 10);
    color = 'lightblue';
    color= "aqua"
    c.fillStyle = color;
    c.fillRect(x+11, y+11, 2, 8);
    c.fillRect(x+21, y+11, 2, 8);
    c.fillRect(x+31, y+11, 2, 8);
  
    // Lines on road
    c.fillStyle = 'white';
    c.fillRect(x+70, y+86, 1, 12);
    c.fillRect(x+80, y+86, 1, 12);
    c.fillRect(x+90, y+86, 1, 12);
  
    // Flowers
    for (let ii = 0; ii < 5; ii++){
      fnBush(c, x+32, y+42+ii*6);
    }
    for (let ii = 0; ii < 9; ii++){
      fnBush(c, x+96, y+10+ii*6);
    }
    
  
    c.fillStyle = 'white';
    c.fillRect(x+41, y+75, 1, 1)
    c.fillRect(x+40, y+76, 1, 1)
    c.fillRect(x+39, y+77, 1, 1)
    c.fillRect(x+40, y+78, 1, 1)
    c.fillRect(x+41, y+79, 1, 1)
  
   
    c.fillRect(x+61, y+75, 1, 1)
    c.fillRect(x+60, y+76, 2, 1)
    c.fillRect(x+59, y+77, 2, 1)
    c.fillRect(x+60, y+78, 2, 1)
    c.fillRect(x+61, y+79, 1, 1)
  
  
    c.fillRect(x+61, y+77,5, 1)
    //c.fillRect(x+62, y+76, 3, 1)
  
  
    vehicleFamilyCar1(c, x+83, y+87, "cornflowerblue", "down");
    vehicleFamilyCar1(c, x+72, y+87, "green", "up");
    vehicleFamilyCar2(c, x+62, y+86, "silver", "down");
    vehicleFamilyCar2(c, x+52, y+87, "antiquewhite", "up");
  
    vehicleFamilyCar2(c, x+43, y+85, 'black','up');
    vehicleFamilyCar1(c, x+92, y+86, "pink", 'up');
  
    // NIGHTTIME HospitalSign
    // c.fillStyle = '#666'
    // c.fillRect(x+47, y+11, 35, 7);  
    // hospitalSign(c, x+50, y+12, '#500');
  
  

    /*
    let target = c.getImageData(x+50, y+35, 1, 1).data;
    c.fillStyle = 'rgba(' + (1.2*target[0]) + ',' + (1.2*target[1]) + ',' + (1.2*target[2]) + ',' + 0.82 + ')';
  
    c.fillStyle='black'
    c.font = "19px Arial";
    c.fillText("Hello World",1,5);  
  
    const searchLight = (hor, ver) => {
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
  */
    /*
    hor = x+10+ seconds
    ver = y+ 51
    searchLight(hor, ver);
    searchLight(hor+10, ver);
    searchLight(hor+20, ver);
  */
      // NIGHT WILL MAKE IT DARKER, A SPOTLIGHT WILL TURN IT BACK TO NORMAL COLOR TO 
    // MAKE IT LOOK LIKE DAYLIGHT 
  
  }
  