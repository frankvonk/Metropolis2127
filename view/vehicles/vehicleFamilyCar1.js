




function vehicleFamilyCar1(c, x, y, primaryColor, direction) {


  if(direction === "up") {
    // Frame
    c.fillStyle = primaryColor;
    c.fillRect(x, y, 6, 11)
    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x+1, y+3, 4, 2)
    c.fillRect(x+1, y+8, 4, 1)
    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y, 1, 1)
    c.fillRect(x+5, y, 1, 1)
    c.fillStyle = "red";
    c.fillRect(x, y+10, 1, 1)
    c.fillRect(x+5, y+10, 1, 1)  

    
  }
  if(direction === "down") {
    // Frame
    c.fillStyle = primaryColor;
    c.fillRect(x, y, 6, 11)
    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x+1, y+2, 4, 1)
    c.fillRect(x+1, y+6, 4, 2)
    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y+10, 1, 1)
    c.fillRect(x+5, y+10,1,1)  
    c.fillStyle = "red";
    c.fillRect(x, y, 1, 1)
    c.fillRect(x+5, y, 1, 1)
  }

  if(direction === "west") {
    // Frame
    c.fillStyle = primaryColor;
    c.fillRect(x, y, 11, 6)
    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x+3, y+1, 2, 4)
    c.fillRect(x+8, y+1, 1, 4)
    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y, 1, 1)
    c.fillRect(x, y+5, 1, 1)
    c.fillStyle = "red";
    c.fillRect(x+10, y, 1, 1)
    c.fillRect(x+10, y+5, 1, 1)  
  }

}
