

// NORTHERN DIRECTION
charN_A = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x+1,y,1,1);
  c.fillRect(x+1,y+2,1,1);
  c.fillRect(x+2,y,1,5);
}
charN_C = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x,y,3,1);
  c.fillRect(x,y+4,3,1);
}
charN_B = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x,y,2,1);
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x+1,y+2,1,1);
  c.fillRect(x+2,y+3,1,1);
  c.fillRect(x+1,y+4,1,1);
}
charN_D = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x+2,y+1,1,3);
  c.fillRect(x,y,2,1);
  c.fillRect(x+1,y+4,1,1);
}
charN_E = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x+1,y,2,1);
  c.fillRect(x+1,y+2,1,1);
  c.fillRect(x+1,y+4,2,1);
}
charN_F = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x+1,y,2,1);
  c.fillRect(x+1,y+2,1,1);
}
charN_H = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x+1,y+2,1,1);
  c.fillRect(x+2,y,1,5);
}
charN_M = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x-1,y,1,5);
  c.fillRect(x,y,1,1);
  c.fillRect(x+1,y,1,5);
  c.fillRect(x+2,y,1,1);
  c.fillRect(x+3,y+1,1,4);
}
charN_N = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x+1,y,1,1);
  c.fillRect(x+2,y+1,1,4);
}
charN_I = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y+2,1,3);
  c.fillRect(x,y,1,1);
}
charN_L = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x,y+4,3,1);
}
charN_N = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x+1,y,1,1);
  c.fillRect(x+2,y+1,1,4);
}
charN_O = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x+1,y,1,1);
  c.fillRect(x+1,y+4,1,1);
  c.fillRect(x+2,y,1,5);
}
charN_P = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,3,1);
  c.fillRect(x,y,1,5);
  c.fillRect(x,y+2,3,1);
  c.fillRect(x+2,y+1,1,1);
}
charN_R = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x,y,2,1);
  c.fillRect(x,y+2,2,1);
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x+2,y+3,1,2);
}
charN_S = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,3,1);
  c.fillRect(x,y+1,1,1);
  c.fillRect(x,y+2,3,1);
  c.fillRect(x+2,y+3,1,1);
  c.fillRect(x,y+4,3,1);
}
charN_T = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,3,1);
  c.fillRect(x+1,y,1,5);
}
charN_U = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,5);
  c.fillRect(x,y+4,3,1);
  c.fillRect(x+2,y,1,5);
}
charN_W = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x-1,y,1,3);
  c.fillRect(x,y+3,1,2);
  c.fillRect(x+1,y,1,4);
  c.fillRect(x+2,y+3,1,2);
  c.fillRect(x+3,y,1,3);
  c.fillRect(x-1,y+3,5,1);
}
charN_Y = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,2);
  c.fillRect(x+2,y,1,5);
  c.fillRect(x,y+2,3,1);
  c.fillRect(x,y+4,3,1);
}
// SPECIAL CHARACTERS
charN_Apos = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,2);
}
charN_Arrow = (c, x, y) => {
  c.fillStyle = 'white';
  c.fillRect(x+2, y, 1, 1)
  c.fillRect(x+1, y+1, 3, 1)
  c.fillRect(x, y+2, 5, 1)
  c.fillRect(x+2, y+3, 1, 4)
}




















// EASTERN DIRECTION
charE_A = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,5,1);
  c.fillRect(x,y+1,1,1);
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x,y+2,5,1);
}
charE_C = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,2);
  c.fillRect(x+4,y,1,2);
  c.fillRect(x,y+2,5,1);
}
charE_E = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,3);
  c.fillRect(x+2,y,1,2);
  c.fillRect(x+4,y,1,3);
  c.fillRect(x,y,5,1);
}
charE_H = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,5,1);
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x,y+2,5,1);
}
charE_I = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,1);
  c.fillRect(x+2,y,3,1);
}
charE_L = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x+4,y,1,2);
  c.fillRect(x,y+2,5,1);
}
charE_O = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,5,1);
  c.fillRect(x,y+1,1,1);
  c.fillRect(x+4,y+1,1,1);
  c.fillRect(x,y+2,5,1);
}
charE_P = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,3,1);
  c.fillRect(x,y+1,1,1);
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x,y+2,5,1);
}
charE_R = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,5,1);
  c.fillRect(x+2,y,1,2);
  c.fillRect(x+4,y,1,2);
  c.fillRect(x,y+2,2,1);
  c.fillRect(x+3,y+2,2,1);
}
charE_S = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,3);
  c.fillRect(x+1,y+2,1,1);
  c.fillRect(x+2,y,1,3);
  c.fillRect(x+3,y,1,1);
  c.fillRect(x+4,y,1,3);
}
charE_T = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,3);
  c.fillRect(x,y+1,5,1);
}

charE_Arrow = (c, x, y) => {
  c.fillStyle = 'white';
  c.fillRect(x, y+2, 4, 1)
  c.fillRect(x+4, y, 1, 5)
  c.fillRect(x+5, y+1, 1, 3)
  c.fillRect(x+6, y+2, 1, 1)
}

















// SOUTHERN DIRECTION
charS_B = (c, x, y, color) => {
  c.fillStyle = color;
}
charS_C = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,2);
  c.fillRect(x+4,y,1,2);
  c.fillRect(x,y+2,5,1);
}
charS_E = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,2,1);
  c.fillRect(x+1,y+2,1,1);
  c.fillRect(x,y+4,2,1);
  c.fillRect(x+2,y,1,5);
}
charS_I = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,1);
  c.fillRect(x+2,y,3,1);
}
charS_L = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x+4,y,1,2);
  c.fillRect(x,y+2,5,1);
}
charS_O = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,5,1);
  c.fillRect(x,y+1,1,1);
  c.fillRect(x+4,y+1,1,1);
  c.fillRect(x,y+2,5,1);
}
charS_P = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,3,1);
  c.fillRect(x,y+1,1,1);
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x,y+2,5,1);
}
charS_R = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,2);
  c.fillRect(x,y+3,1,2);
  c.fillRect(x+1,y+2,1,1);
  c.fillRect(x+1,y+4,1,1);
  c.fillRect(x+2,y,1,5);
}
charS_S = (c, x, y, color) => {
  c.fillStyle = color;
}
charS_T = (c, x, y, color) => {
  c.fillStyle = color;
}

charS_Arrow = (c, x, y) => {
  c.fillStyle = 'white';
  c.fillRect(x+2, y, 1, 4)
  c.fillRect(x, y+4, 5, 1)
  c.fillRect(x+1, y+5, 3, 1)
  c.fillRect(x+2, y+6, 1, 1)
}



















// WESTERN DIRECTION
charW_E2222 = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,2);
  c.fillRect(x,y+2,5,1);
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x+4,y,1,2);
}
charW_B = (c, x, y, color) => {
  c.fillStyle = color;
}
charW_C = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,2);
  c.fillRect(x+4,y,1,2);
  c.fillRect(x,y+2,5,1);
}
charW_E = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,2);
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x+4,y,1,2);
  c.fillRect(x,y+2,5,1);
}
charW_I = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,1);
  c.fillRect(x+2,y,3,1);
}
charW_L = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x+4,y,1,2);
  c.fillRect(x,y+2,5,1);
}
charW_O = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,5,1);
  c.fillRect(x,y+1,1,1);
  c.fillRect(x+4,y+1,1,1);
  c.fillRect(x,y+2,5,1);
}
charW_P = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,3,1);
  c.fillRect(x,y+1,1,1);
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x,y+2,5,1);
}
charW_R = (c, x, y, color) => {
  c.fillStyle = color;
  c.fillRect(x,y,1,2);
  c.fillRect(x,y+2,5,1);
  c.fillRect(x+1,y,1,1);
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x+3,y,2,1);
}

charW_Arrow = (c, x, y) => {
  c.fillStyle = 'white';
  c.fillRect(x, y+2, 1, 1)
  c.fillRect(x+1, y+1, 1, 3)
  c.fillRect(x+2, y, 1, 5)
  c.fillRect(x+3, y+2, 4, 1)
}

















































// BIG LETTERS
l_CharW_A = (c, x, y, colorOutline, colorFill) => {
  c.fillStyle = colorOutline
  c.fillRect(x+1,y,10,-3);
  c.fillRect(x,y-1,3,-5);
  c.fillRect(x+1,y-4,10,-3);
  c.fillRect(x+4,y,3,-4);
  c.fillStyle = colorFill
  c.fillRect(x+1,y-1,9,-1);
  c.fillRect(x+1,y-1,1,-4);
  c.fillRect(x+1,y-5,9,-1);
  c.fillRect(x+5,y-1,1,-4);
}

l_CharW_N = (c, x, y, colorOutline, colorFill) => {
  c.fillStyle = colorOutline
  c.fillRect(x,y,11,-3);
  c.fillRect(x,y,3,-6);
  c.fillRect(x+1,y-4,10,-3);
  c.fillStyle = colorFill
  c.fillRect(x+1,y-1,9,-1);
  c.fillRect(x+1,y-1,1,-4);
  c.fillRect(x+1,y-5,9,-1);
}

l_CharW_D = (c, x, y, colorOutline, colorFill) => {
  c.fillStyle = colorOutline
  c.fillRect(x,y,11,-3);
  c.fillRect(x,y,3,-6);
  c.fillRect(x+1,y-4,9,-3);
  c.fillRect(x+8,y-1,3,-5);
  c.fillStyle = colorFill
  c.fillRect(x+1,y-1,9,-1);
  c.fillRect(x+1,y-1,1,-4);
  c.fillRect(x+1,y-5,9,-1);
  c.fillRect(x+9,y-1,1,-4);
}

l_CharW_S = (c, x, y, colorOutline, colorFill) => {
  c.fillStyle = colorOutline
  c.fillRect(x,y-1,3,-6);
  c.fillRect(x+1,y,5,-3);
  c.fillRect(x+4,y-1,3,-5);
  c.fillRect(x+5,y-4,5,-3);
  c.fillRect(x+8,y,3,-6);
  c.fillStyle = colorFill
  c.fillRect(x+1,y-1,1,-5);
  c.fillRect(x+1,y-1,5,-1);
  c.fillRect(x+5,y-1,1,-5);
  c.fillRect(x+5,y-5,5,-1);
  c.fillRect(x+9,y-1,1,-5);
}

l_CharW_Y = (c, x, y, colorOutline, colorFill) => {
  c.fillStyle = colorOutline
  c.fillRect(x,y,6,-3);
  c.fillRect(x,y-4,10,-3);
  c.fillRect(x+4,y-1,3,-6);
  c.fillRect(x+8,y,3,-6);
  c.fillStyle = colorFill
  c.fillRect(x+1,y-1,5,-1);
  c.fillRect(x+1,y-5,9,-1);
  c.fillRect(x+5,y-1,1,-5);
  c.fillRect(x+9,y-1,1,-5);
}

l_CharW_Apos = (c, x, y, colorOutline, colorFill) => {
  c.fillStyle = colorOutline
  c.fillRect(x,y,3,-3);
  c.fillRect(x+3,y,1,-2);
  c.fillStyle = colorFill
  c.fillRect(x+1,y-1,2,-1);
}
