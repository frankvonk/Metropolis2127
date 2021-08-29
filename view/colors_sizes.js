



//════════╡ CREATE TOOLBOX FOR STYLING / ANIMATING / ANIMATION ╞═════════════

// standard purple = #541388
// standard pink   = #d40078
var cHovercraftNotAvailable = "#d40078"; // purple
var cHovercraftAvailable = "aqua";




// Draws a pixel on given coordinates, lighter color then before
function lumen(x, y, factor){   
  var imgData = c.getImageData(x, y, 1, 1).data;
  c.fillStyle = 'rgba(' + factor*imgData[0] + ',' + factor*imgData[1] + ',' + factor*imgData[2] + ',' + 255 + ')';
  c.fillRect(x, y, 1, 1);  
}



// Return a color darker then sample pixel given
function shader(imgData, factor){   
  return 'rgb(' + factor*imgData[0] + ',' + factor*imgData[1] + ',' + factor*imgData[2] + ')';
}





//════════╡ END TOOLBOX STYING / ANIMATION ╞══════════════════════════════════
