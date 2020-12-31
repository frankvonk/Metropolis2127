





function vehicleSmallTruck(c, x, y, primaryColor, direction) {

  // Frame
  c.fillStyle = primaryColor;
  c.fillRect(x, y, 7, 20)

  if(direction === "up") {
    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x+1, y+2, 5, 2)
    c.fillRect(x+2, y+5, 3, 1)

    // CargoHull
    let sample = c.getImageData(x+1, y, 1, 1).data;
    let factor = 0.8;
    c.fillStyle = shader(sample, factor);
    c.fillRect(x-1, y+7, 9, 13)

    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x, y, 1, 1)
    c.fillRect(x+6, y, 1, 1)
    c.fillStyle = "red";
    c.fillRect(x-1, y+19, 1, 1)
    c.fillRect(x+7, y+19, 1, 1)  
  }



}
