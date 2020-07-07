




function vehicleLargeTruck(c, x, y, primaryColor, direction) {

  if(direction === "up") {

    // Frontside frame
    c.fillStyle = primaryColor;
    c.fillRect(x-1, y, 9, 20)

    // Sample of Frontside frame for color editing
    sample = c.getImageData(x+1, y+2, 1, 1).data;

    // Frontside wheelcovers
    c.fillStyle = shader(sample, 0.85);
    c.fillRect(x-1, y+1, 1, 4)
    c.fillRect(x+7, y+1, 1, 4)

    // Engine cover
    c.fillStyle = shader(sample, 0.91);
    c.fillStyle = shader(sample, 1.1);
    c.fillRect(x+3, y, 1, 3)
    c.fillRect(x, y, 7, 1)

    // Doors
    c.fillStyle = shader(sample, 0.9);
    c.fillRect(x, y+3, 1, 4)
    c.fillRect(x+6, y+3, 1, 4)

    // Frontside roof
    c.fillStyle = shader(sample, 1);
    c.fillRect(x+1, y+4, 5, 3)

    // Back of frontside
    c.fillStyle = shader(sample, 0.9);
    c.fillRect(x-1, y+7, 9, 3)

    // Between front&back
    c.fillStyle = "#ddd";
    c.fillRect(x-1, y+10, 1, 2)
    c.fillRect(x+7, y+10, 1, 2)
    c.fillStyle = shader(sample, 0.68);
    c.fillRect(x, y+10, 7, 2)
    c.fillStyle = '#888';
    c.fillRect(x+2, y+10, 3, 2)

    // CargoHull
    c.fillStyle = shader(sample, 0.8);
    c.fillRect(x-1, y+12, 9, 30)

    // Windows
    c.fillStyle = "aqua";
    c.fillRect(x, y+3, 7, 1)
    
    // Lights
    c.fillStyle = "yellow";
    c.fillRect(x-1, y, 1, 1)
    c.fillRect(x+7, y, 1, 1)
    c.fillStyle = "red";
    c.fillRect(x-1, y+41, 1, 1)
    c.fillRect(x+7, y+41, 1, 1)  
  }

}
