




function vehicleFamilyCar1(c, x, y, primaryColor, direction) {

  // Frame
  c.fillStyle = primaryColor;
  c.fillRect(x, y, p6, p11)

  if(direction === "up") {
    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x+p1, y+p2, p4, p2)
    c.fillRect(x+p1, y+p8, p4, p1)
    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y, p1, p1)
    c.fillRect(x+p5, y, p1, p1)
    c.fillStyle = "red";
    c.fillRect(x, y+p10, p1, p1)
    c.fillRect(x+p5, y+p10, p1, p1)  

    
  }
  if(direction === "down") {
    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x+p1, y+p2, p4, p1)
    c.fillRect(x+p1, y+p7, p4, p2)
    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y+p10, p1, p1)
    c.fillRect(x+p5, y+p10, p1, p1)  
    c.fillStyle = "red";
    c.fillRect(x, y, p1, p1)
    c.fillRect(x+p5, y, p1, p1)
  }
}
