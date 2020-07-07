



function vehicleAmbulance2(c, x, y, direction) {

  // Frame
  c.fillStyle = 'red';
  c.fillRect(x, y, 7, 14);
  c.fillStyle = "#fff";

  if(direction === "up") {
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

  if(direction === "down") {

    
  }
}
