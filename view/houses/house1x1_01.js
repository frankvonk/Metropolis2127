

// i + j are for swimmer in pool
function house1x1_01(c, x, y, i, j){
  c.globalAlpha = 1;

  // green hedge outside
  c.fillStyle = "forestgreen";
  c.fillStyle = "limegreen";
  c.fillRect(x, y, plot, plot);
  // grass
  c.fillStyle = "lightgreen";
  c.fillRect(x+p1,y+p1,98,98);
  // frontgarden

  // treelines
  // vertical
  for(i=0; i<10; i++){
    treeXSmall(c, x, y, p1, p2+(i*p4));
  }
  for(i=0; i<3; i++){
    treeXSmall(c, x, y+p45, p1, p2+(i*p4));
  }
  // horizontal
  for(i=0; i<9; i++){
    treeXSmall(c, x, y, p5+(i*p4), p58);
  }

  treeXSmall(c, x+p55, y+p2);
  treeXSmall(c, x+p55, y+p12);
  treeXSmall(c, x+p56, y+p26);

  flowersXSmall(c, x+p4,  y+p2,  'pink', 'violet');
  flowersXSmall(c, x+p13, y+p2,  'pink', 'violet');
  flowersXSmall(c, x+p17, y+p2,  'pink', 'violet');
  flowersXSmall(c, x+p23, y+p2,  'pink', 'violet');
  flowersXSmall(c, x+p31, y+p2,  'pink', 'violet');
  flowersXSmall(c, x+p22, y+p8,  'pink', 'hotpink');
  flowersXSmall(c, x+p32, y+p55, 'pink', 'hotpink');
  flowersXSmall(c, x+p20, y+p50, 'pink', 'hotpink');
  flowersXSmall(c, x+p6,  y+p51, 'pink', 'cornflowerblue');
  flowersXSmall(c, x+p14, y+p53, 'pink', 'lightblue');
  flowersXSmall(c, x+p10, y+p54, 'pink', 'aquamarine');


  // Pool
  let poolX = x + p7;
  let poolY = y + p5;
  c.fillStyle ="skyblue"
  c.fillRect(poolX,poolY,p12,p28);
  c.fillStyle = "aqua"
  c.fillRect(poolX+p1,poolY+p1,p10,p26);


  // Swimmer in pool
  // TURNAROUND X AND Y, ITS A MISTAKE
  c.fillStyle = "pink";
  let nSwimSpeed = 0.05;


  c.fillRect(poolX+p6, poolY + aAnimation[i][j].pedestrianLevel.swimmer.animationY, p1, p1);
  if(aAnimation[i][j].pedestrianLevel.swimmer.swimDirection == 'down'){
     aAnimation[i][j].pedestrianLevel.swimmer.animationY += nSwimSpeed;
    }
  if(aAnimation[i][j].pedestrianLevel.swimmer.swimDirection == 'up'){
     aAnimation[i][j].pedestrianLevel.swimmer.animationY -= nSwimSpeed; 
  }
  if(aAnimation[i][j].pedestrianLevel.swimmer.animationY > (aAnimation[i][j].pedestrianLevel.swimmer.animationYConst+p19)){
     aAnimation[i][j].pedestrianLevel.swimmer.swimDirection = 'up'
  }
  if(aAnimation[i][j].pedestrianLevel.swimmer.animationY < (aAnimation[i][j].pedestrianLevel.swimmer.animationYConst+p1)){
     aAnimation[i][j].pedestrianLevel.swimmer.swimDirection = 'down'
  }

  // path
  c.fillStyle = "lightgrey"
  c.fillRect(x+p36, y,p6,p6);
  c.fillRect(x+p54,y+p28,p6,p6);
  c.fillRect(x+p36,y+p54,p8,p6);
  // poolpaths
  c.fillRect(x+p19,y+p18,p14,p6);
  c.fillRect(x+p19,y+p23,p4,p14);
  c.fillRect(x+p7,y+p33,p14,p4);
  c.fillStyle = "silver"
  c.fillRect(x+p10,y+p31,p1,p3);

  // house
  let houseX = x;
  let houseY = y;
  c.fillStyle = "grey" // left half
  c.fillRect(houseX+p29,houseY+p6,p10,p48);
  c.fillStyle = "dimgrey" // right half
  c.fillRect(houseX+p39,houseY+p6,p7,p48);
  c.fillRect(houseX+p39,houseY+p23,p15,p12);
  // attic windows
  c.fillStyle = "grey" // right half attick windows
  c.fillRect(houseX+p41,houseY+p15,p4,p6);
  c.fillRect(houseX+p41,houseY+p40,p4,p6);
  // skylight
  c.fillStyle = "dimgrey"
  c.fillRect(houseX+p31,houseY+p10,p3,p4);
  c.fillRect(houseX+p31,houseY+p28,p3,p4);
  c.fillRect(houseX+p31,houseY+p36,p3,p4);
  c.fillStyle = "skyblue"
  c.fillRect(houseX+p32, houseY+p11, p1,p2);
  c.fillRect(houseX+p32, houseY+p29, p1,p2);
  c.fillRect(houseX+p32, houseY+p37, p1,p2);
  // chimney
  c.fillStyle = "#4d4d4d"
  c.fillRect(houseX+p36,houseY+p6,p5,p2);
}
