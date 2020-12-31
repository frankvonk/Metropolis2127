




function vehicleFamilyCar2(c, x, y, primaryColor, direction) {

  // Frame
  c.fillStyle = primaryColor;
  c.fillRect(x, y, 6, 12)

  if(direction === "up") {
    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x+1, y+3, 4, 2)
    c.fillRect(x+1, y+9, 4, 2)
    c.fillRect(x+2, y+6, 2, 1)

    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y, 1, 1)
    c.fillRect(x+5, y, 1, 1)
    c.fillStyle = "red";
    c.fillRect(x, y+11, 1, 1)
    c.fillRect(x+5, y+11, 1, 1)  
  }



  if(direction === "down") {
    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x+1, y+7, 4, 2)
    c.fillRect(x+2, y+5, 2, 1)
    c.fillRect(x+1, y+2, 4, 1)
    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y+11, 1, 1)
    c.fillRect(x+5, y+11, 1, 1)
    c.fillStyle = "red";
    c.fillRect(x, y, 1, 1)
    c.fillRect(x+5, y, 1, 1)  
  }
}
