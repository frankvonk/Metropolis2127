




function vehicleFamilyCar2(c, x, y, primaryColor, direction) {

  // Frame
  c.fillStyle = primaryColor;
  c.fillRect(x, y, p6, p12)
//  c.fillRect(x+p2, y-2, p4, p1)

  if(direction === "up") {
    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x+p1, y+p3, p4, p2)
    c.fillRect(x+p1, y+p9, p4, p2)
    c.fillRect(x+p2, y+p6, p2, p1)

    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y, p1, p1)
    c.fillRect(x+p5, y, p1, p1)
    c.fillStyle = "red";
    c.fillRect(x, y+p11, p1, p1)
    c.fillRect(x+p5, y+p11, p1, p1)  
  }



  if(direction === "down") {
    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x+p1, y+p7, p4, p2)
    c.fillRect(x+2, y+5, 2, 1)
    c.fillRect(x+p1, y+p2, p4, p1)
    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y+11, p1, p1)
    c.fillRect(x+p5, y+11, p1, p1)
    c.fillStyle = "red";
    c.fillRect(x, y, p1, p1)
    c.fillRect(x+p5, y, p1, p1)  
  }
}
