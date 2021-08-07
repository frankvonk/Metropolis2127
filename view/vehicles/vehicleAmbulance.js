



function vehicleAmbulance(c, x, y, direction) {

  var second = new Date().getSeconds();
  let colorSiren1 = '';
  let colorSiren2 = '';
  let blue = 'cornflowerblue'
   blue = '#3385ff'
  let orange = 'orange'
  if(second % 2 === 0){
    colorSirenBlueWhite = 'white'
    colorSirenBlueRed = 'red'
    colorSirenWhiteBlue = blue
  } else {
    colorSirenBlueWhite = blue
    colorSirenBlueRed = blue
    colorSirenWhiteBlue = 'white'
  }

  
  if(direction === "north") {
    // Frame
    c.fillStyle = 'red';
    c.fillRect(x, y, 7, 14);
    c.fillStyle = "#fff";
    // Windows
    c.fillStyle = "aqua";
    c.fillStyle = "#42C0FB";

    c.fillRect(x+1, y+1, 5, 2);

    // Red cross
    c.fillStyle = "white";
    c.fillRect(x+3, y+9, 1, 3);
    c.fillRect(x+2, y+10, 3, 1);

    // Siren
    c.fillStyle = "blue";
    c.fillRect(x+1, y+4, 2, 1);
    c.fillRect(x+4, y+4, 2, 1);
    c.fillStyle = 'silver';
    c.fillRect(x+3, y+4, 1, 1);

    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y, 1, 1);
    c.fillRect(x+6, y, 1, 1);
    c.fillStyle = "orange";
    c.fillRect(x, y+13, 1, 1);
    c.fillRect(x+6, y+13, 1, 1);
  }

  if(direction === "south") {
    // Frame
    c.fillStyle = 'red';
    c.fillRect(x, y, 7, 14);
    c.fillStyle = "#fff";
    // Windows
    c.fillStyle = "#42C0FB";
    c.fillRect(x+1, y+11, 5, 2);
    // Red cross
    c.fillStyle = "white";
    c.fillRect(x+3, y+2, 1, 3);
    c.fillRect(x+2, y+3, 3, 1);

    // Siren
    c.fillStyle = colorSirenBlueWhite;
    c.fillRect(x+1, y+9, 2, 1);

    c.fillStyle = 'red';
    c.fillRect(x+3, y+9, 1, 1);

    c.fillStyle = colorSirenBlueWhite;
    c.fillRect(x+4, y+9, 2, 1);



    // Lights
    c.fillStyle = colorSirenBlueRed;
    c.fillStyle = colorSirenBlueWhite;
    c.fillStyle = colorSirenWhiteBlue
    c.fillRect(x+1, y, 1, 1);
    c.fillRect(x+5, y, 1, 1);

    c.fillRect(x+3, y+13, 1, 1);

    c.fillStyle = "orange";
    c.fillRect(x, y, 1, 1);
    c.fillRect(x+6, y, 1, 1);
    c.fillStyle = "yellow";
    c.fillRect(x, y+13, 1, 1);
    c.fillRect(x+6, y+13, 1, 1);

  }
  if(direction === "east") {
    // Frame
    c.fillStyle = 'red';
    c.fillRect(x, y, 14, 7);

    // Windows
    c.fillStyle = "#42C0FB";
    c.fillRect(x+11, y+1, 2, 5);

    // Red cross
    c.fillStyle = "white";
    c.fillRect(x+2, y+3, 3, 1);
    c.fillRect(x+3, y+2, 1, 3);

    // Siren
    c.fillStyle = "blue";
    c.fillRect(x+9, y+4, 1, 2);
    c.fillRect(x+9, y+1, 1, 2);
    c.fillStyle = 'silver';
    c.fillRect(x+9, y+3, 1, 1);

    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x+13, y, 1, 1);
    c.fillRect(x+13, y+6, 1, 1);
    c.fillStyle = "orange";
    c.fillRect(x, y, 1, 1);
    c.fillRect(x, y+6, 1, 1);
  }
  if(direction === "west") {
    // Frame
    c.fillStyle = 'red';
    c.fillRect(x, y, 14, 7);

    // Windows
    c.fillStyle = "#42C0FB";
    c.fillRect(x+1, y+1, 2, 5);

    // Red cross
    c.fillStyle = "white";
    c.fillRect(x+9, y+3, 3, 1);
    c.fillRect(x+10, y+2, 1, 3);

    // Siren
    c.fillStyle = "blue";
    c.fillRect(x+4, y+4, 1, 2);
    c.fillRect(x+4, y+1, 1, 2);
    c.fillStyle = 'silver';
    c.fillRect(x+4, y+3, 1, 1);

    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y, 1, 1);
    c.fillRect(x, y+6, 1, 1);
    c.fillStyle = "orange";
    c.fillRect(x+13, y, 1, 1);
    c.fillRect(x+13, y+6, 1, 1);
  }


}
