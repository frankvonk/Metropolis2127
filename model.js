/* JavaScript - Model for Metropolis 2127
   a Simulation/City builder/Dystopian Adventure Game
   by Frank Vonk, visit www.frankvonk.be/metropolis2127.html */

// Concatenated string in controller.js to test links and order in JavaScript Files
var sTestLinkModel = ' Model,';

// Grid Plot on the game board / canvas, in pixels.
const small = parseInt(window.devicePixelRatio*10);
const large = window.devicePixelRatio*10;
let plot = large;  // completely scalable at the moment,
//plot = window.devicePixelRatio*18;
plot = 40;
//plot = window.devicePixelRatio*30;
// numplots could later be split up in height/width
var nNumPlots = 13;
// nSize is for creating basic grid. it should be at least 1 higher then nNumPlots
// because of checking / looping for road direction
var nSize = nNumPlots + 1;

// Tax settings
var nRoadTax2Lane = -1;
var nHouseTax = 10;



/*
ARCHEOLOGY CODE HERE
//════════╡ NAME, X+Y COORDINATES, STATE, ╞══════════════════════
var c1r1 = ['c1r1', 0, 0,      ""]; var c2r1 = ['c2r1', plot, 0,      ""]; var c3r1 = ['c3r1', plot*2, 0,      ""]; var c4r1 = ['c4r1', plot*3, 0, ""];      var c5r1 = ['c5r1', plot*4, 0,      ""]; var c6r1 = ['c6r1', plot*5, 0,      ""]; var c7r1 = ['c7r1', plot*6, 0,      ""];
var c1r2 = ['c1r2', 0, plot*1, ""]; var c2r2 = ['c2r2', plot, plot*1, ""]; var c3r2 = ['c3r2', plot*2, plot*1, ""]; var c4r2 = ['c4r2', plot*3, plot, ""];   var c5r2 = ['c5r2', plot*4, plot,   ""]; var c6r2 = ['c6r2', plot*5, plot,   ""]; var c7r2 = ['c7r2', plot*6, plot,   ""];
var c1r3 = ['c1r3', 0, plot*2, ""]; var c2r3 = ['c2r3', plot, plot*2, ""]; var c3r3 = ['c3r3', plot*2, plot*2, ""]; var c4r3 = ['c4r3', plot*3, plot*2, ""]; var c5r3 = ['c5r3', plot*4, plot*2, ""]; var c6r3 = ['c6r3', plot*5, plot*2, ""]; var c7r3 = ['c7r3', plot*6, plot*2, ""];
var c1r4 = ['c1r4', 0, plot*3, ""]; var c2r4 = ['c2r4', plot, plot*3, ""]; var c3r4 = ['c3r4', plot*2, plot*3, ""]; var c4r4 = ['c4r4', plot*3, plot*3, ""]; var c5r4 = ['c5r4', plot*4, plot*3, ""]; var c6r4 = ['c6r4', plot*5, plot*3, ""]; var c7r4 = ['c7r4', plot*6, plot*3, ""];
var c1r5 = ['c1r5', 0, plot*4, ""]; var c2r5 = ['c2r5', plot, plot*4, ""]; var c3r5 = ['c3r5', plot*2, plot*4, ""]; var c4r5 = ['c4r5', plot*3, plot*4, ""]; var c5r5 = ['c5r5', plot*4, plot*4, ""]; var c6r5 = ['c6r5', plot*5, plot*4, ""]; var c7r5 = ['c7r5', plot*6, plot*4, ""];
var c1r6 = ['c1r6', 0, plot*5, ""]; var c2r6 = ['c2r6', plot, plot*5, ""]; var c3r6 = ['c3r6', plot*2, plot*5, ""]; var c4r6 = ['c4r6', plot*3, plot*5, ""]; var c5r6 = ['c5r6', plot*4, plot*5, ""]; var c6r6 = ['c6r6', plot*5, plot*5, ""]; var c7r6 = ['c7r6', plot*6, plot*5, ""];
//════════╡ HARDCODED CITYGRID ╞═════════════════════════════════
let grid = [[c1r1, c2r1, c3r1, c4r1, c5r1, c6r1],
            [c1r2, c2r2, c3r2, c4r2, c5r2, c6r2],
            [c1r3, c2r3, c3r3, c4r3, c5r3, c6r3],
            [c1r4, c2r4, c3r4, c4r4, c5r4, c6r4],
            [c1r5, c2r5, c3r5, c4r5, c5r5, c6r5],
            [c1r6, c2r6, c3r6, c4r6, c5r6, c6r6]];        
*/
// name of plot in arrays with coordinates,
// use this later for everything.
// try to transfer the string in to a variable,
// so the aHouses has ['c1r1'] in it, it can be called upon to get 
// fnDrawHouse (c1r1) as it loops through the arrayPERSISTENT MEMORY









function fnInitializeArrays() {
}

fnInitializeArrays();



  // Initialize all arrays
  //════════╡ START CITYGRID ╞═════════════════════════════════════
  // Initialize array and fill with standard properties
  let aGrid = [];
  for(i=0; i<nSize; i++){
    let horizontalArray = [];
    for(j=0; j<nSize; j++){
      horizontalArray.push(0);
    }    
    aGrid.push(horizontalArray);
    for(j=0; j<nSize; j++){
      let aPlotInGrid = {
        name: "",      // should be name inserted ("c2r4")
        canvasX: plot*j,  // j ^ horizontal 
        canvasY: plot*i,  // i > vertical
        typeStructure: "",      // for type of construction
        hovercraft: "",      // for hovering effect mouse
      }
      aGrid[i][j] = aPlotInGrid;
    }
  }

  //console.log(aGrid);

  //════════╡ END CITYGRID ╞═══════════════════════════════════════

  // Game State Money / Time
  let dtTime = 0;




  //════════╡ STRUCTURES / BUILDINGS ╞══════════════════════════════
  // Store where houses are build & other details

  // Initialize array and fill with standard properties
  let aStructures = [];
  for(i=0; i<nSize; i++){
    let horizontalArray = [];
    for(j=0; j<nSize; j++){
      horizontalArray.push(0);
    }    
    aStructures.push(horizontalArray);
    for(j=0; j<nSize; j++){
      aStructures[i][j] = {
        type: 'none',
        colorSet: 0,
        design: 0,
        animationY: 0, // animation x & y is for swimmer in pool
        animationYConst: 0,
        animationX: 0,
        animationXConst: 0,
        swimDirection: 'up'
      }
    }
  }

  // Simple houses counter for speed optimization
  let nHouses = 0;
  //════════╡ END STRUCTURES / BUILDINGSHOUSESGRID ╞═══════════════


  //════════╡ ECONOMY : TAX / INCOME ╞═════════════════════════════

  // Initialize array and fill with standard properties
  let aEconomy = [];
  for(i=0; i<nSize; i++){
    let horizontalArray = [];
    for(j=0; j<nSize; j++){
      horizontalArray.push(0);
    }    
    aEconomy.push(horizontalArray);
    for(j=0; j<nSize; j++){
      aEconomy[i][j] = {
        type: 'none',
        tax: 0
      }
    }
  }
  // Current amount of money
  let nMoney = 0;
  //════════╡ END ECONOMY : TAX / INCOME ╞═════════════════════════


  //════════╡ ROADGRID ╞═══════════════════════════════════════════
  // Store roadtype, what route it leads to, etc. 
  //-----store T3_6_9 Cur3_6 etc...

  // Initialize array and fill with standard properties
  let aRoads = [];
  for(i=0; i<nSize; i++){
    let horizontalArray = [];
    for(j=0; j<nSize; j++){
      horizontalArray.push(0);
    }    
    aRoads.push(horizontalArray);
    for(j=0; j<nSize; j++){
      aRoads[i][j] = {
        type: 'none',
        neighbourTop: false,
        neighbourRight: false,
        neighbourBottom: false,
        neighbourLeft: false,
        direction: ''
      }
    }
  }
  // Current houses counter for tax purposes
  let nRoads = 0;
  //════════╡ END ROADGRID ╞═══════════════════════════════════════










if(JSON.parse(localStorage.getItem('userGameStateDump')) === null) {
  console.log('bestaat niet');
}
else {
  let gameState = JSON.parse(localStorage.getItem('userGameStateDump'));
//  console.log(gameState);
  aGrid = gameState.aGrid;
  aStructures = gameState.aStructures;
  aEconomy = gameState.aEconomy;
  aRoads = gameState.aRoads;
  nHouses = gameState.nHouses;
  nRoads = gameState.nRoads;
  console.log('bestaat');
}


