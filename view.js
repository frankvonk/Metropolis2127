/* JavaScript - View for Metropolis 2127
   a Simulation/City builder/Dystopian Adventure Game
   by Frank Vonk, visit www.frankvonk.be/metropolis2127.html */

// Concatenated string in controller.js to test links and order in JavaScript Files
var sTestLinkView = ' View,';


//════════╡ GLOBAL VARIABLES ╞═══════════════════════════════════════════════
// Buttons
let i, j;
// Messages and Errors to screen
let sMessage;
//════════╡ DOM ELEMENTS ╞═══════════════════════════════════════════════════
//════════╡ END GLOBAL VARIABLES ╞═══════════════════════════════════════════



//════════╡ GAMESTATE DATA AND MESSAGES ╞═════════════════════════════════════
// Send GameState Data to Screen
// Displays money, number of houses, etc 
function fnDisplayGameStateData(){
  document.getElementById('money').innerHTML = ' ' + nMoney;
  document.getElementById('roads').innerHTML = ' ' + nRoads;
  document.getElementById('housesCounter').innerHTML = ' ' + nHouses;
}
// Send Message or advice to messages section
function fnBtnMessage(eMessages, sMessage){
  switch (sMessage){
    case "":
      eMessages.className = 'messages messageAlert ';
      eMessages.innerHTML = "First select an action to perform";
      break;
    case "outsidebounds":
      eMessages.className = 'messages messageAlert ';
      eMessages.innerHTML = "Outside city bounds, pick somewhere else.";
      break;
    case "occupado":
      eMessages.className = 'messages messageAlert ';
      eMessages.innerHTML = "That spot is taken, pick somewhere else.";
      break;
    case 'fire':
      eMessages.className = 'messages messageText ';
      eMessages.innerHTML = "Fire Fighters are heroes! And Hot!";
      break;  
    case 'house':
      eMessages.className = 'messages messageText ';
      eMessages.innerHTML = "Sure, we need houses! Go nuts!";
      break;
    case "road":
      eMessages.className = 'messages messageText ';
      eMessages.innerHTML = "Roads are awesome!";
      break;
    case "police":
      eMessages.className = 'messages messageText ';
      eMessages.innerHTML = "Police helps fight crime! Don't defund!";
      break; 
    case 'inspect':
      eMessages.className = 'messages messageText ';
      eMessages.innerHTML = "Click on a plot to get information.";
      break;
    case 'bulldozer':
      eMessages.className = 'messages messageText ';
      eMessages.innerHTML = "Clink on a structure to destroy it."
  } // End switch
} //══════╡ END GAMESTATE DATA AND MESSAGES ╞════════════════════════════════


//════════╡ INSPECTIONTOOL ╞═════════════════════════════════════════════════
// Send GameState Data to Screen when using inspection tool
function fnInspect(eMessages, aPlotClicked, y, x){
  console.log(aPlotClicked)
  console.log('aStructures[y][x]',aStructures[y][x])
  eMessages.className = 'messages messageText ';
  if(aPlotClicked.typeStructure == ""){
    sMessage = "There is nothing built there";
  }
  else if(aPlotClicked.typeStructure == "structure"){
    switch(aStructures[y][x].type) {
      case 'house':
        sMessage = "That's a " + aStructures[y][x].type + '.';
        // ALSO ADD TAX ETC.
        break;
      case 'fire':
        sMessage = 'That\'s a Fire Station ';
        sMessage += ' They have put out 6 fires last month! ';
        break;
      case 'police':
        sMessage = 'That\'s a Police Station ';
        sMessage += ' They have put out 6 fires last month! ';
        break;
    }
  }
  else if(aPlotClicked.typeStructure == 'road'){
    // Later on, there will be more types of roads & pathways
    if(aRoads[y][x].type == '2lane'){
      sMessage = 'That\'s a 2 lane road';
      // sMessage += aEconomy[y][x];
    }
  }

    
  // sMessage = "That's a " + aPlotClicked[3] + '.';
  // if else depending on tax income or spending
  if (aEconomy[y][x] < 0) {
    sMessage += "<br>Tax Cost is " + aEconomy[y][x] + " /hr.";
  }
  else if (aEconomy[y][x] > 0) {
    sMessage += "<br>Tax Income is " + aEconomy[y][x] + " /hr.";
  }
  eMessages.innerHTML = sMessage;
  sMessage = '';
} //══════╡ END INSPECTIONTOOL ╞═════════════════════════════════════════════




//════════╡ FUNCTION FOR ANIMATION ON CANVAS ╞═══════════════════════════════
function fnMainAnimation(){
  const eCanvas = document.getElementById('canvasGroundLevel');
  var c = eCanvas.getContext("2d");

  fnAnimateOutsidePlayerReach(c)

  for(i=0; i<nNumPlots; i++){
    for(j=0; j<nNumPlots; j++){
      if(i>0 && j>0){ // The outter edge of board needs no animation

        if(aGrid[i][j].typeStructure == ''){
          cEmptyPlot = "#f6019d"; // hot pink
          emptyPlot(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, cEmptyPlot);
        }

        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'fire')
          mediumFireStation(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);

        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'hospital')
          hospital(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'house')
          houses(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
                
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'nightClub')
          nightClub(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'park') {
          // later choose here from arr of multiple parks
          // console.log('ja')
          parkAndysCoffeebar(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }
        
        if (aGrid[i][j].typeStructure == 'structure' & aStructures[i][j].type == 'police') {
          mediumPoliceOffice(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }
  
        if(aGrid[i][j].typeStructure == 'road' & aRoads[i][j].type == '2lane')
          road2Lane(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);

      } // End exclude outter loop
    } // End for loop on Y in grid
  } // End for loop on X in grid
} //══════╡ END FUNCTION FOR ANIMATION ON CANVAS ╞═══════════════════════════


//════════╡ FUNCTION FOR ANIMATION ON CANVAS ╞═══════════════════════════════
function fnAnimationPedestrianLevelSeconds(){
  //  fnAnimateOutsidePlayerReach(c)
  let eCanvas2 = document.getElementById('canvasPedestrianLevel');
  var c = eCanvas2.getContext("2d");

  for(i=0; i<nNumPlots; i++){
    for(j=0; j<nNumPlots; j++){
      if(i>0 && j>0){ // The outter edge of board needs no animation

        if(aGrid[i][j].typeStructure == ''){
          // cEmptyPlot = "#f6019d"; // hot pink
          // emptyPlot(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, cEmptyPlot);
        }
        if(aGrid[i][j].typeStructure == 'road' & aRoads[i][j].type == '2lane') {
          // road2Lane(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'house') {
          // houses(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'hospital') {
          // hospital(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'nightClub') {
           nightClubPedestrianLevel(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
          //nightClub(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'park') {
          // later choose here from arr of multiple parks
          parkAndysCoffeebarPedestrianLevel(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }

      } // End exclude outter loop
    } // End for loop on Y in grid
  } // End for loop on X in grid
} //══════╡ END FUNCTION FOR ANIMATION ON CANVAS ╞═══════════════════════════


//════════╡ FUNCTION FOR ANIMATION ON CANVAS ╞═══════════════════════════════
let cur = 0;
function fnAnimationPedestrianLevelFrameRate(){
  //  fnAnimateOutsidePlayerReach(c)
  let eCanvas2 = document.getElementById('canvasPedestrianLevel');
  var c = eCanvas2.getContext("2d");


    // let ambuX = 128
  // let ambuY = 220
  // c.clearRect(ambuX, ambuY+cur, 7,-1)
  // vehicleAmbulance2(c, ambuX, ambuY+cur++, 'down');
  //vehicleAmbulance2(c, ambuX, ambuY+110+cur, 'down');

  fnCarRoute(c, i, j);


  for(i=0; i<nNumPlots; i++){
    for(j=0; j<nNumPlots; j++){
      if(i>0 && j>0){ // The outter edge of board needs no animation

        if(aGrid[i][j].typeStructure == ''){
          // cEmptyPlot = "#f6019d"; // hot pink
          // emptyPlot(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, cEmptyPlot);
        }
        if(aGrid[i][j].typeStructure == 'road' & aRoads[i][j].type == '2lane') {
          // fnCarRoute(c, i, j);
          // road2Lane(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'house') {
          // houses(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'hospital') {
          // hospital(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'nightClub') {
          //  nightClubPedestrianLevel(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
          //nightClub(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }
        if (aGrid[i][j].typeStructure == 'structure' && aStructures[i][j].type == 'park') {
          // later choose here from arr of multiple parks
          // parkAndysCoffeebarPedestrianLevel(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, i, j);
        }

      } // End exclude outter loop
    } // End for loop on Y in grid
  } // End for loop on X in grid
} //══════╡ END FUNCTION FOR ANIMATION ON CANVAS ╞═══════════════════════════


//════════╡ FUNCTION FOR ANIMATION ON CANVAS ╞═══════════════════════════════
function fnAnimateHover() {
  const eCanvasHovercraft = document.getElementById('canvasHovercraft');
  var c = eCanvasHovercraft.getContext("2d");

  for(i=0; i<nNumPlots; i++){
    for(j=0; j<nNumPlots; j++){
      if(i>0 && j>0){ // The outter edge of board needs no animation

        if(aGrid[i][j].hovercraft == 'hovercraftAvailable' || aGrid[i][j].hovercraft == 'hovercraftNotAvailable'){
          // if(i>0 && j>0){
            if(aGrid[i][j].hovercraft == 'hovercraftAvailable'){
              hovercraft(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, cHovercraftAvailable);
            }
            else if(aGrid[i][j].hovercraft == 'hovercraftNotAvailable'){
              hovercraft(c, aGrid[i][j].canvasX, aGrid[i][j].canvasY, cHovercraftNotAvailable);
            }
          // }
        } // End hovercraft if's

      } // End exclude outter loop
    } // End for loop on Y in grid
  } // End for loop on X in grid
} //══════╡ END FUNCTION FOR ANIMATION ON CANVAS ╞═══════════════════════════


//════════╡ ANIMATE HOVERING EFFECT ON MOUSEOVER ╞═══════════════════════════
function hovercraft(cHov, x, y, cHoverColor){
  // c.clearRect(0, 0, 1000, 1000)
  // console.log('me');
  // console.log(x);

 // console.log(cHoverColor);
 // console.log(x,y);
  cSize = plot * nNumPlots + plot;
  cHov.clearRect(0, 0, cSize, cSize)

  cHov.globalAlpha = 0.3;
  cHov.fillStyle = cHoverColor;
  //console.log(cHov);

  cHov.fillRect(x, y, plot, plot);
  //horiz
  cHov.fillRect(x, y, 95, 5);
  cHov.fillRect(x, y, 90, 10);
  //left
  cHov.fillRect(x, y+5, 5, 95);
  cHov.fillRect(x, y+10, 10, 90);
  //right
  cHov.fillRect(x+95, y, 5, 95);
  cHov.fillRect(x+90, y, 10, 90);
  // bottom
  cHov.fillRect(x+5, y+95, 95, 5);
  cHov.fillRect(x+10, y+90, 90, 10);
  cHov.globalAlpha = 1;

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
  console.log('win',window.localStorage['houseDesign'] )
  // Assigns characteristics of the house to the aStructures

  // Determine tax level depending on circumstances and chance
  aEconomy[y][x] = nHouseTax;
  // Determine and store house style
  let design = Math.floor(Math.random() * 3) + 1;
  if(window.localStorage['houseDesign'] && 
   design == window.localStorage['houseDesign']) {
      design = design + 1;
  }
  // Store design to prevent the same design being chosen in a row
  window.localStorage['houseDesign'] = design;
  // Assign details to house
  aStructures[y][x] = {
    type : 'house',
    // colorSet choose random set of colors
    colorSet : Math.floor(Math.random()*3)+1,
    // nDesign determines and stores house style
    // design : Math.floor(Math.random()*4)+1,
    design,
  }
  // Assign coordinates for animation
  aAnimation[y][x].pedestrianLevel.swimmer = {
    animationY : aGrid[y][x].canvasY + 15, // +plot15Perc is the designed starting point of swimmer in the pool.
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
      // Villa with pool
      house1x1_01(c, y, x, i, j);
      break;
    case 2:
      // Andy's Coffeebar
      house1x1_02(c, y, x, i, j);
      break;
    case 3:
      // Residential tower
      house1x1_03(c, y, x, i, j);
      break;
    case 4:
      // Motel
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

  // Determine and store road style, neighbours
  aRoads[y][x] = {
    type : '2lane',
    // check for adjecent roads for direction, true or false
    neighbourTop: fnCheckRoadDirection(y-1,x),
    neighbourRight: fnCheckRoadDirection(y,x+1),
    neighbourBottom: fnCheckRoadDirection(y+1,x),
    neighbourLeft: fnCheckRoadDirection(y,x-1),
    // check for adjecent structures for on / off ramps, true or false
    exitTop: fnCheckRoadNeedsExit(y-1,x),
    exitRight: fnCheckRoadNeedsExit(y,x+1),
    exitBottom: fnCheckRoadNeedsExit(y+1,x),
    exitLeft: fnCheckRoadNeedsExit(y,x-1),
  }
  aGrid[y-1][x].carAccesBottom = true;
  aGrid[y][x+1].carAccesLeft = true;
  aGrid[y+1][x].carAccesTop = true;
  aGrid[y][x-1].carAccesRight = true;
} //══════╡ END BUILD ROAD TOP FUNCTION ╞════════════════════════════════════


//════════╡ CHECK IF ROAD HAS ADJACENT ROADS ╞═══════════════════════════════
function fnCheckRoadDirection(y, x){
  if (x<0 || x>nNumPlots-1 || y<0 || y>nNumPlots-1) {
    // i got an error after i removed this due to outter edges of city outside canvas
    // console.log('whaaaat');
    return false;
  }
  else if (aRoads[y][x].type == "2lane"){
    return true;
  }
} //══════╡ END CHECK IF ROAD HAS ADJACENT ROADS ╞═══════════════════════════


//════════╡ CHECK IF ROAD HAS ADJACENT ROADS ╞═══════════════════════════════
function fnCheckRoadNeedsExit(y, x){
  if (x<0 || x>nNumPlots-1 || y<0 || y>nNumPlots-1) {
    // i got an error after i removed this due to outter edges of city outside canvas
    return false;
  }
  else if (aGrid[y][x].typeStructure == "structure"){
    return true;
  }
} //══════╡ END CHECK IF ROAD HAS ADJACENT ROADS ╞═══════════════════════════


//════════╡ ASSIGN THE DIRECTION OF THE ROAD ╞═══════════════════════════════
function fnAssignRoadDirection(y, x){
//toooooo  
clearCanvas('canvasPedestrianLevel')
  // Assign road direction depending on neighbour plots
  let road = aRoads[y][x]
  let top = road.neighbourTop;
  let right = road.neighbourRight;
  let bottom = road.neighbourBottom;
  let left = road.neighbourLeft;
  let i = y;
  let j = x;
  if(!top && !right && !bottom && !left){
    aRoads[y][x].direction = 'dead';
    startingCoordinatesPixels = [plot*j+28, plot*i+78];
    startingCoordinatesPixelsWithinPlot = [28, 78];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'east'
  }
  if(top && right && bottom && left){
    aRoads[y][x].direction = 'intersection';
    startingCoordinatesPixels = [plot*j+44, plot*i+77];
    startingCoordinatesPixelsWithinPlot = [44, 77];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'east'
  }
  else if(top && right && bottom){
    aRoads[y][x].direction = 'tsplit_12_3_6';
    startingCoordinatesPixels = [plot*j+78, plot*i+47];
    startingCoordinatesPixelsWithinPlot = [78, 47];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'north'
  }
  else if(right && bottom && left){
    aRoads[y][x].direction = 'tsplit_3_6_9';
    startingCoordinatesPixels = [plot*j+78, plot*i+47];
    startingCoordinatesPixelsWithinPlot = [78, 47];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'north'
  }
  else if(bottom && left && top){
    aRoads[y][x].direction = 'tsplit_6_9_12';
    startingCoordinatesPixels = [plot*j+78, plot*i+47];
    startingCoordinatesPixelsWithinPlot = [78, 47];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'north'
  }
  else if(left && top && right){
    aRoads[y][x].direction = 'tsplit_9_12_3';
    startingCoordinatesPixels = [plot*j+78, plot*i+47];
    startingCoordinatesPixelsWithinPlot = [78, 47];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'north'
    aAnimation[i][j].pedestrianLevel.traffic.route.color = 'gold'
  }
  else if(top && right){
    aRoads[y][x].direction = 'corner_12_3';
    startingCoordinatesPixels = [plot*j+28, plot*i+78];
    startingCoordinatesPixelsWithinPlot = [28, 78];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'east'
    aAnimation[i][j].pedestrianLevel.traffic.route.color = 'purple'
  }
  else if(right && bottom){
    aRoads[y][x].direction = 'corner_3_6';
    startingCoordinatesPixels = [plot*j+18, plot*i+27];
    startingCoordinatesPixelsWithinPlot = [18, 27];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'south'
  }
  else if(bottom && left){
    aRoads[y][x].direction = 'corner_6_9';
    startingCoordinatesPixels = [plot*j+64, plot*i+16];
    startingCoordinatesPixelsWithinPlot = [64, 16];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'west'
    aAnimation[i][j].pedestrianLevel.traffic.route.color = 'hotpink'
  }
  else if(left && top){
    aRoads[y][x].direction = 'corner_9_12';
    startingCoordinatesPixels = [plot*j+78, plot*i+47];
    startingCoordinatesPixelsWithinPlot = [78, 47];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'north'
    aAnimation[i][j].pedestrianLevel.traffic.route.color = 'cornflowerblue'
  }
  else if(top && bottom){
    aRoads[y][x].direction = 'straight_12_6';
    startingCoordinatesPixels = [plot*j+78, plot*i+47];
    startingCoordinatesPixelsWithinPlot = [78, 47];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'north'
  }
  else if(right && left){
    aRoads[y][x].direction = 'straight_3_9';
    startingCoordinatesPixels = [plot*j+28, plot*i+77];
    startingCoordinatesPixelsWithinPlot = [28, 77];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'east'
    aAnimation[i][j].pedestrianLevel.traffic.route.color = 'green'
  }
  else if(top){
    aRoads[y][x].direction = 'dead_12';
    startingCoordinatesPixels = [plot*j+77, plot*i+60];
    startingCoordinatesPixelsWithinPlot = [77, 60];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'north'
  }
  else if(right){
    aRoads[y][x].direction = 'dead_3';
    startingCoordinatesPixels = [plot*j+28, plot*i+77];
    startingCoordinatesPixelsWithinPlot = [28, 77];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'east'
    aAnimation[i][j].pedestrianLevel.traffic.route.color = 'orange'
  }
  else if(bottom){
    aRoads[y][x].direction = 'dead_6';
    startingCoordinatesPixels = [plot*j+16, plot*i+30];
    startingCoordinatesPixelsWithinPlot = [16, 30];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'south'
  }
  else if(left){
    aRoads[y][x].direction = 'dead_9';
    startingCoordinatesPixels = [plot*j+63, plot*i+16];
    startingCoordinatesPixelsWithinPlot = [63, 16];
    aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels = startingCoordinatesPixels;
    aAnimation[i][j].pedestrianLevel.traffic.route.direction = 'west'
  }
} //══════╡ END ASSIGN THE DIRECTION OF THE ROAD ╞═══════════════════════════


//════════╡ REDESIGN ADJACENT ROADS AFTER BUILDING ROAD ╞════════════════════
function fnRedesignRoads(plot_y, plot_x){
// search locations =
let topy = plot_y+1;    let topx = plot_x;
let rightx = plot_x-1;  let righty = plot_y;
let bottomy = plot_y-1; let bottomx = plot_x;
let leftx = plot_x+1;   let lefty = plot_y;
  // For direction (corner / intersection / etc)
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


  // For creating an on ramp / off ramp
  if(aGrid[topy][topx].typeStructure == 'structure'){        // console.log('top of road');
    aGrid[topy][topx].exitBottom = true;
  } else {
    aGrid[topy][topx].exitBottom = false;
  }
  if(aGrid[righty][rightx].typeStructure == 'structure'){    // console.log('right to road');
    aGrid[righty][rightx].exitLeft = true;
  } else {
    aGrid[righty][rightx].exitLeft = false;
  }
  if(aGrid[bottomy][bottomx].typeStructure == 'structure'){  // console.log('under a road');
    aGrid[bottomy][bottomx].exitTop = true;
  } else {
    aGrid[bottomy][bottomx].exitTop = false;
  }
  if(aGrid[lefty][leftx].typeStructure == 'structure'){      // console.log('left to road');
    aGrid[lefty][leftx].exitRight = true;
  } else {
    aGrid[lefty][leftx].exitRight = false;
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
  // grd.addColorStop(0, "#791e94");
  // grd.addColorStop(0, "#00cc00");
  grd.addColorStop(0, "#1aff1a");
  // grd.addColorStop(1, "#540d6e");
  // grd.addColorStop(1, "#009900");
  grd.addColorStop(1, "#00e600");
  // grd.addColorStop(2, "#00cc00");
  //  grd.addColorStop(3, "#00e600");
  // Fill with gradient
  c.fillStyle = grd;
  // c.fillStyle = 'transparent';
  // c.fillRect(0, 0, nNumPlots*plot+plot,nNumPlots*plot+plot);

  // river in middle
  // c.fillStyle = 'aqua';
  // c.fillRect(250, 0, 50, nNumPlots*plot+plot);
  // border outside city
  // c.fillStyle = '#00cc00';
  // top
  // c.fillRect(0, 0, nNumPlots*plot+20, plot);
  // left
  // c.fillRect(0, 0, plot, nNumPlots*plot+20);
  // bottom
  // c.fillRect(0, nNumPlots*plot, nNumPlots*plot+plot, plot);
  // right
  // c.fillRect(nNumPlots*plot, 0, plot, nNumPlots*plot+plot);

  // Complete background
  c.fillStyle = grd;
  // c.fillStyle = 'grey';
  // c.fillStyle = 'silver';
  c.fillRect(0, 0, nNumPlots*plot+plot, nNumPlots*plot+plot);
/*  for (i = 10; i < 200; i += 20)
  c.fillStyle = "#f6019d"
  c.strokeStyle = "#f6019d";
  c.moveTo(0, i);
  c.lineTo(100, i);
  c.stroke();*/
}





// FRAMERATE USED FOR CALLING FNMAINANIMATION 24 TIMES PER SECOND
let MilisecondsPerFrame = 41;
// MilisecondsPerFrame = 1;
// MilisecondsPerFrame = 541;
//MilisecondsPerFrame = 2000;
let nFrameCounter = 0;

// For loading screen on initial game start.
setTimeout(() => {
  fnMainAnimation();
}, 40);

// For loading screen on initial game start.
setTimeout(() => {
  fnMainAnimation();
}, 140);

// Main Animation Loop 24 Frames Per Second
setTimeout(() => {
  setInterval(() => {
   fnAnimationPedestrianLevelFrameRate();
     fnAnimationPedestrianLevelFrameRate();
     fnAnimationPedestrianLevelFrameRate();
  }, MilisecondsPerFrame);
}, 200);


// Some animation only needs to be updated a few times per second
setInterval(() => {
  fnAnimationPedestrianLevelSeconds();
}, 1000);

// Animating hover
setInterval(() => {
  fnAnimateHover()
}, 60);

