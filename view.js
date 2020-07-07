/* JavaScript - View for Metropolis 2127
   a Simulation/City builder/Dystopian Adventure Game
   by Frank Vonk, visit www.frankvonk.be/metropolis2127.html */

// Concatenated string in controller.js to test links and order in JavaScript Files
var sTestLinkView = ' View,';



//════════╡ GLOBAL VARIABLES ╞═══════════════════════════════════════════════
// Buttons
let eBtnMouseMode = "";
let i, j;
// Messages and Errors to screen
let sMessage;
//════════╡ DOM ELEMENTS ╞═══════════════════════════════════════════════════
//════════╡ END GLOBAL VARIABLES ╞═══════════════════════════════════════════



//════════╡ GAMESTATE DATA AND MESSAGES ╞═════════════════════════════════════
// Send GameState Data to Screen
function fnGameStateData(){
  document.getElementById('money').innerHTML = ' ' + nMoney;
  document.getElementById('roads').innerHTML = ' ' + nRoads;
  document.getElementById('housesCounter').innerHTML = ' ' + nHouses;
}
// Send Message or advice to messages section
function fnBtnMessage(eMessages, sMessage){
  switch (sMessage){
    case "":
      eMessages.style.color = colAlert;
      eMessages.innerHTML = "First select an action to perform";
      break;
    case "outsidebounds":
      eMessages.style.color = colAlert;
      eMessages.innerHTML = "Outside city bounds, pick somewhere else.";
    break;
    case "occupado":
      eMessages.style.color = colAlert;
      eMessages.innerHTML = "That spot is taken, pick somewhere else.";
    break;
    case 'house':
      eMessages.style.color = colText;
      eMessages.innerHTML = "Sure, we need houses! Go nuts!";
      break;
    case "road":
      eMessages.style.color = colText;
      eMessages.innerHTML = "Roads are awesome!";
      break;
    case 'inspect':
      eMessages.style.color = colText;
      eMessages.innerHTML = "Click on a plot to get information.";
      break;
    case 'bulldozer':
      eMessages.style.color = colText;
      eMessages.innerHTML = "Clink on a structure to destroy it."
  } // End switch
} //══════╡ END GAMESTATE DATA AND MESSAGES ╞════════════════════════════════


//════════╡ INSPECTIONTOOL ╞═════════════════════════════════════════════════
// Send GameState Data to Screen when using inspection tool
function fnInspect(eMessages, aPlotClicked, y, x){
  eMessages.style.color = colText;
  if(aPlotClicked[3] == ""){ 
    sMessage = "There is nothing built there";
  }
  else if(aPlotClicked[3] == "structure"){
    if(aStructures[y][x].type == 'house'){
      sMessage = "That's a " + aStructures[y][x].type + '.';
      // ALSO ADD TAX ETC.
    }
  }
  else if(aPlotClicked[3] == 'road'){
//    if(aRoads[y][x].type == 'road'){
      sMessage = 'That\'s a '+aRoads[y][x].type+' '+ aPlotClicked[3];
//      sMessage += aEconomy[y][x];
//    }
  }
 //   sMessage = "That's a " + aPlotClicked[3] + '.';
    // if else depending on tax income or spending
    if (aEconomy[y][x] < 0) {sMessage += "<br>Tax Cost is " + aEconomy[y][x] + " /hr.";} 
    else if (aEconomy[y][x] > 0) {sMessage += "<br>Tax Income is " + aEconomy[y][x] + " /hr.";} 
//    eMessages.innerHTML = sMessage;
//    console.log(sMessage);     
  eMessages.innerHTML = sMessage;
  sMessage = '';
} //══════╡ END INSPECTIONTOOL ╞═════════════════════════════════════════════


//════════╡ ADJUST CSS AFTER CLICK ON BUTTON ╞═══════════════════════════════
function fnBtnMouseCSS(sMouseMode) {
  // Depending on mouseMode (which button clicked) adjust CSS for corresponding
  // button to visualize current type of action and reset other buttons to normal css
  if(eBtnMouseMode != ""){
    eBtnMouseMode.style.color = '#541388';
    eBtnMouseMode.style.backgroundColor = 'aqua';
    eBtnMouseMode.style.borderRight = '3px solid hotpink';
  }
  // Store current button in eBtn for styling CSS
  eBtnMouseMode = document.getElementById(sMouseMode);
  //  document.getElementById(mouseMode).innerHTML += ' pressed';
  eBtnMouseMode.style.color = 'aqua';
  eBtnMouseMode.style.backgroundColor = '#541388'; // purple
  eBtnMouseMode.style.borderRight = 'none';
  eBtnMouseMode.style.outline = 0;
  if(sMouseMode == 'bulldozer' || sMouseMode == "inspect"){
    eBtnMouseMode.style.borderRight = '3px solid hotpink';
  }
} //══════╡ END ADJUST CSS AFTER CLICK ON BUTTON ╞═══════════════════════════


//════════╡ FUNCTION FOR ANIMATION ON CANVAS ╞═══════════════════════════════
function fnMainAnimation(c){
  fnAnimateOutsidePlayerReach(c)  
  
  for(i=0; i<nNumPlots; i++){
    for(j=0; j<nNumPlots; j++){
      if(i>0 && j>0){ // The outter edge of board needs no animation

        if(aGrid[i][j].typeStructure == ''){
          cEmptyPlot = "#f6019d"; // hot pink
          emptyPlot(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, cEmptyPlot);
        }

        if(aGrid[i][j].typeStructure == 'road' & aRoads[i][j].type == '2lane')
          road2Lane(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);

        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'house')
          houses(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j); 

        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'hospital')
          hospital(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j); 
        
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'nightClub')
          nightClub(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j); 

        if (aGrid[i][j].hovercraft == 'hovercraftAvailable' || aGrid[i][j].hovercraft == 'hovercraftNotAvailable'){
          if(i>0 && j>0){
            if(aGrid[i][j].hovercraft == 'hovercraftAvailable'){
              hovercraft(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, cHovercraftAvailable);
            }
            else if(aGrid[i][j].hovercraft == 'hovercraftNotAvailable'){
              hovercraft(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, cHovercraftNotAvailable);
            }
          }
        } // End hovercraft if's
      } // End exclude outter loop
    } // End for loop on Y in grid
  } // End for loop on X in grid
} //══════╡ END FUNCTION FOR ANIMATION ON CANVAS ╞═══════════════════════════








//════════╡ ANIMATE HOVERING EFFECT ON MOUSEOVER ╞═══════════════════════════
function hovercraft(c, x, y, cHoverColor){
  c.globalAlpha = 0.3;
  c.fillStyle = cHoverColor;
  c.fillRect(x, y, plot, plot);
  //horiz
  c.fillRect(x, y, plot95Perc, plot5Perc);
  c.fillRect(x, y, plot90Perc, plot10Perc);
  //left
  c.fillRect(x, y+plot5Perc, plot5Perc, plot95Perc);
  c.fillRect(x, y+plot10Perc, plot10Perc, plot90Perc);
  //right
  c.fillRect(x+plot95Perc, y, plot5Perc, plot95Perc);
  c.fillRect(x+plot90Perc, y, plot10Perc, plot90Perc);
  // bottom
  c.fillRect(x+plot5Perc, y+plot95Perc, plot95Perc, plot5Perc);
  c.fillRect(x+plot10Perc, y+plot90Perc, plot90Perc, plot10Perc);
  c.globalAlpha = 1;
} //══════╡ END ANIMATE HOVERING EFFECT ON MOUSEOVER ╞═══════════════════════


/*▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓          ▓▓▓▓          ▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓      ▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓      ▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓          ▓▓▓▓  ▓▓▓▓                  ▓▓▓▓
  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓*/


//════════╡ BUILD HOUSE TOP FUNCTION ╞═══════════════════════════════════════
function fnBuildHouse(y, x){
  // Assigns characteristics of the house to the aStructures

  // Determine tax level depending on circumstances and chance
  aEconomy[y][x] = nHouseTax;
  // Determine and store house style
  aStructures[y][x] = {
    type : 'house', 
    // colorSet choose random set of colors
    colorSet : Math.floor(Math.random()*3)+1,
    // nDesign determines and stores house style
    design : Math.floor(Math.random()*4)+1,
//    design : 3,
  }
  // Assign coordinates for animation
  aAnimation[y][x].pedestrianLevel.swimmer = {
    animationY : aGrid[y][x].canvasY +plot15Perc, // +plot15Perc is the designed starting point of swimmer in the pool.
    animationYConst : aGrid[y][x].canvasY,
    animationX : aGrid[y][x].canvasX,
    animationXConst : aGrid[y][x].canvasX,
    swimDirection: 'down'
  }
} //══════╡ END BUILD HOUSE TOP FUNCTION ╞═══════════════════════════════════


//════════╡ DRAW A HOUSE FROM THE ARRAY OF DESIGNS ╞═════════════════════════
function houses(c, y, x, i, j){
  let design = aStructures[i][j].design;
  switch(design){
    case 1:
      house1x1_01(c, y, x, i, j);
      break;
    case 2:
      house1x1_02(c, y, x, i, j);
      break;
    case 3:
      house1x1_03(c, y, x, i, j);
      break;
    case 4:
      house1x1_04(c, y, x, i, j);
      break;
    }
}
//══════╡ END DRAW A HOUSE FROM THE ARRAY OF DESIGNS ╞═════════════════════



/*▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓
  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓▓▓▓▓▓▓    ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓    ▓▓▓▓          ▓▓▓▓    
  ▓▓▓▓  ▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓
  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓▓▓    ▓▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓▓▓  */

  

//════════╡ BUILD ROAD TOP FUNCTION ╞════════════════════════════════════════
function fnBuildRoad(y, x){
// PASS ARGUMENT HERE TO SET THE TYPE OF ROAD

  //if else statements depending on road types
  // think about other types and how to do that then
  aGrid[y][x].typeStructure = 'road'  
  // Determine tax level
  aEconomy[y][x] = nRoadTax2Lane;
  // check for neighbours, true or false
  let bCheckNeighbourTop = fnCheckRoadNeighbour(y-1,x);
  let bCheckNeighbourRight = fnCheckRoadNeighbour(y,x+1);
  let bCheckNeighbourBottom = fnCheckRoadNeighbour(y+1,x);
  let bCheckNeighbourLeft = fnCheckRoadNeighbour(y,x-1);
  // Determine and store road style, neighbours
  aRoads[y][x] = {
    type : '2lane', 
    neighbourTop: bCheckNeighbourTop,
    neighbourRight: bCheckNeighbourRight,
    neighbourBottom: bCheckNeighbourBottom,
    neighbourLeft: bCheckNeighbourLeft
  }
//  console.log('neighbourTop= '+ bCheckNeighbourTop);
//  console.log('neighbourRight= '+bCheckNeighbourRight);
//  console.log('neighbourBottom= '+bCheckNeighbourBottom);
//  console.log('neighbourLeft= '+bCheckNeighbourLeft);
} //══════╡ END BUILD ROAD TOP FUNCTION ╞════════════════════════════════════

//════════╡ CHECK IF ROAD HAS ADJACENT ROADS ╞═══════════════════════════════
function fnCheckRoadNeighbour(y, x){
//  if (aRoads[y][x]){ // works but only vertical
  if (x<0 || x>nNumPlots-1 || y<0 || y>nNumPlots-1) {
    // i got an error after i removed this
    // console.log('whaaaat');
  }
  else if (aRoads[y][x].type == "2lane"){
//    console.log(true);
    return true;
  }
 //   }
} //══════╡ END CHECK IF ROAD HAS ADJACENT ROADS ╞═══════════════════════════


//════════╡ ASSIGN THE DIRECTION OF THE ROAD ╞═══════════════════════════════
function fnAssignRoadDirection(y, x){
  // Assign road direction depending on neighbour plots
  let road = aRoads[y][x]
  let top = road.neighbourTop;
  let right = road.neighbourRight;
  let bottom = road.neighbourBottom;
  let left = road.neighbourLeft;
  if(!top && !right && !bottom && !left){
    aRoads[y][x].direction = 'dead';
  }
  if(top && right && bottom && left){
    aRoads[y][x].direction = 'intersection';
  }
  else if(top && right && bottom){
    aRoads[y][x].direction = 'tsplit_12_3_6';
  }
  else if(right && bottom && left){
    aRoads[y][x].direction = 'tsplit_3_6_9';
  }
  else if(bottom && left && top){
    aRoads[y][x].direction = 'tsplit_6_9_12';
  }
  else if(left && top && right){
    aRoads[y][x].direction = 'tsplit_9_12_3';
  }
  else if(top && right){
    aRoads[y][x].direction = 'corner_12_3';
  }
  else if(right && bottom){
    aRoads[y][x].direction = 'corner_3_6';
  }
  else if(bottom && left){
    aRoads[y][x].direction = 'corner_6_9';
  }
  else if(left && top){
    aRoads[y][x].direction = 'corner_9_12';
  }
  else if(top && bottom){
    aRoads[y][x].direction = 'straight_12_6';
  }
  else if(right && left){
    aRoads[y][x].direction = 'straight_3_9';
  }
  else if(top){
    aRoads[y][x].direction = 'dead_12';
  }
  else if(right){
    aRoads[y][x].direction = 'dead_3';
  }
  else if(bottom){
    aRoads[y][x].direction = 'dead_6';
  }
  else if(left){
    aRoads[y][x].direction = 'dead_9';
  }
} //══════╡ END ASSIGN THE DIRECTION OF THE ROAD ╞═══════════════════════════


//════════╡ REDESIGN ADJACENT ROADS AFTER BUILDING ROAD ╞════════════════════
function fnRedesignRoads(plot_y, plot_x){
// search locations = 
let topy = plot_y+1;    let topx = plot_x;
let rightx = plot_x-1;  let righty = plot_y;
let bottomy = plot_y-1; let bottomx = plot_x;
let leftx = plot_x+1;   let lefty = plot_y;
  if(aGrid[topy][topx].typeStructure == 'road'){        // console.log('top of road');
    fnBuildRoad(plot_y+1, plot_x);
    fnAssignRoadDirection(plot_y+1, plot_x);
  }
  if(aGrid[righty][rightx].typeStructure == 'road'){    // console.log('right to road');
    fnBuildRoad(plot_y, plot_x-1);
    fnAssignRoadDirection(plot_y, plot_x-1);
  }
  if(aGrid[bottomy][bottomx].typeStructure == 'road'){  // console.log('under a road');
    fnBuildRoad(plot_y-1, plot_x);
    fnAssignRoadDirection(plot_y-1, plot_x);
  }
  if(aGrid[lefty][leftx].typeStructure == 'road'){      // console.log('left to road');  
    fnBuildRoad(plot_y, plot_x+1);
    fnAssignRoadDirection(plot_y, plot_x+1);
  }
} //══════╡ END REDESIGN ADJACENT ROADS AFTER BUILDING ROAD ╞════════════════


//══════╡ END ANIMATE ROADS ╞══════════════════════════════════════════════


//════════╡ ANIMATE BORDERS OF EACH PLOT ╞═══════════════════════════════════
function emptyPlot(c, x, y, cEmptyPlot){
  c.globalAlpha = 0.5;
  c.fillStyle = cEmptyPlot;
  // top
  c.fillRect(x, y, plot, 1);
  //left
  c.fillRect(x, y, 1, plot);
  //right
  c.fillRect(x+plot-1, y, 1, plot);
  // bottom
  c.fillRect(x, y+plot-1, plot, 1);
  c.globalAlpha = 1;
} //══════╡ END ANIMATE BORDERS OF EACH PLOT ╞═══════════════════════════════


function fnAnimateOutsidePlayerReach(c){
  c.globalAlpha = 1;
  var grd = c.createLinearGradient(0, 200, 200, 0);
  grd.addColorStop(0, "#791e94");
  grd.addColorStop(1, "#540d6e");
  // Fill with gradient
  c.fillStyle = grd;
  c.fillRect(0, 0, nNumPlots*plot+plot,nNumPlots*plot+plot);

  // river in middle
  //  c.fillStyle = 'aqua';
  //  c.fillRect(250, 0, 50, nNumPlots*plot+plot);

  // border outside city
  c.fillStyle = '#541388';
  // top
  c.fillRect(0, 0, nNumPlots*plot+plot20Perc, plot);
  // left
  c.fillRect(0, 0, plot, nNumPlots*plot+plot20Perc);
  // bottom
  c.fillRect(0, nNumPlots*plot, nNumPlots*plot+plot, plot);
  // right
  c.fillRect(nNumPlots*plot, 0, plot, nNumPlots*plot+plot);

/*  for (i = 10; i < 200; i += 20) 
  c.fillStyle = "#f6019d"  
  c.strokeStyle = "#f6019d";
  c.moveTo(0, i);
  c.lineTo(100, i);
  c.stroke();*/
}




// Main Animation Loop 24 Frames Per Second

// FRAMERATE USED FOR CALLING FNMAINANIMATION 24 TIMES PER SECOND
let MilisecondsPerFrame = 41;
//MilisecondsPerFrame = 410000;
let nFrameCounter = 0;


setInterval(function(){

  const eCanvas = document.getElementById('gameboardCanvas');
  var c = eCanvas.getContext("2d");

  // Code for introduction film is commented due to lag
  // if(seconds == 0){ fnLinesBackground(c); }
  // if(seconds>1 /*&& seconds <1*/){ fnAnimateIntroImage(c); }
//seconds += 1
  //  else if(seconds>1){
    // CREATE IF, SO ONLY ANIMATED WHEN FRAMECOUNTER SAYS
    // THAT INTRO FILM IS OVER, THEN FADING IN TO GAMEBOARD.

    fnMainAnimation(c);

//    fnUpperAnimation(c)
  //}
//  swimmerX += 2;

nFrameCounter += 1; 

//console.log('nFrameCounter = ' + nFrameCounter)
//console.log(nFrameCounter)
//if(seconds){  l(seconds)}
},
MilisecondsPerFrame);

//var seconds = 0;
// function incrementSeconds() {
// //  seconds += 1;
// //  console.log("You have been here for " + seconds + " seconds.");
// }
// //var cancel = setInterval(incrementSeconds, 1000);


function fnTussenFunctie() {
  const eCanvas = document.getElementById('gameboardCanvas');
  var c = eCanvas.getContext("2d");
  fnMainAnimation(c);
  nFrameCounter += 1; 
}
//window.requestAnimationFrame(fnTussenFunctie())












//════════╡ ANIMATION ZONE ╞═════════════════════════════════════════════════
/*//var img = document.getElementById('house'); context.drawImage(img, building_this_plot[0], building_this_plot[1])*/