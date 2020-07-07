






function flowersXSmall(c, x, y, col1, col2){
  c.fillStyle = 'limegreen';
  c.fillRect(x,y,p1,p1);
  c.fillStyle = '#090';
  c.fillRect(x,y+p1,p1,p1);
  c.fillStyle = col1;
  c.fillRect(x-p1,y,p1,p1);
  c.fillRect(x,y-p1,p1,p1);
  c.fillStyle = col2;
  c.fillRect(x+p1,y,p1,p1);
}





function treeXSmall(c, x, y){

  // treelines
  c.fillStyle = "green";
  c.fillRect(x+1,y,1,1);
  c.fillRect(x,y+1,1,1);
  c.fillStyle = "darkgreen";
  c.fillRect(x+1,y+1,1,1);
  c.fillStyle = "#090";
  c.fillRect(x+2,y+1,1,1);
  c.fillRect(x+1,y+2,1,1);
  
}