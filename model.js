/* JavaScript - Model for Metropolis 2127
   a Simulation/City builder/Dystopian Adventure Game
   by Frank Vonk, visit www.frankvonk.be/metropolis2127.html */

// Concatenated string in controller.js to test links and order in JavaScript Files
var sTestLinkModel = ' Model,';

// Grid Plot on the game board / canvas, in pixels.
const plot = 100;

// numplots could later be split up in height/width, now it's a square not rectangle 
var nNumPlots = 9;
// var nNumPlots = 12;

// nSize is for creating basic grid. it should be at least 1 higher then nNumPlots
// because of checking / looping for road direction
var nSize = nNumPlots + 1;

// Tax settings
// TODO make these adjustable in a finance menu
// TODO create object with these type of costs
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
// House (c1r1) as it loops through the array
// END ARCHEOLOGY CODE HERE




// Initialize all arrays which will hold gamestate data.
// Fill with default values
// Secondary task is creating gridOverlay for mousedetection
// (has same size, structure and values)

// Store animation data
let aAnimation = [];
// Financial data
let aEconomy = [];
// Main data: name, x&y coordinates, occupied.
let aGrid = [];
// Store roadtype, what route it leads to, etc. 
let aRoads = [];
// Stores where houses are build & other details
let aStructures = [];

//const gridOverlaytest = document.getElementById('gridOverlay')

for(i=0; i<nSize; i++){

  let horizontalArrayAnimation = [];
  let horizontalArrayEconomy = [];
  let horizontalArrayGrid = [];
  let horizontalArrayRoads = [];
  let horizontalArrayStructures = [];

  for(j=0; j<nSize; j++){
    horizontalArrayAnimation.push(0);
    horizontalArrayEconomy.push(0);
    horizontalArrayGrid.push(0);
    horizontalArrayRoads.push(0);
    horizontalArrayStructures.push(0);
  } 

  aAnimation.push(horizontalArrayAnimation);
  aEconomy.push(horizontalArrayEconomy);
  aGrid.push(horizontalArrayGrid);
  aRoads.push(horizontalArrayRoads);
  aStructures.push(horizontalArrayStructures);


  for(j=0; j<nSize; j++){

    aAnimation[i][j] = {
      type: 'none',
      colorSet: 0,
      design: 0,
      groundLevel: {
        type: 'none',
      },
      pedestrianLevel: {
        swimmer: {
          animationX: 0,
          animationXConst: 0,
          animationY: 0, // animation x & y is for swimmer in pool
          animationYConst: 0,
          swimDirection: 'up' 
        },
        traffic: {
          route: {
            origin: [i, j],
            destination: [],
            currentLocation: [i, j],
            currentCoordinatesPixels: [],
            currentCoordinatesPixelsWithinPlot: [],
            direction: '',
            arrived: false,    
            color: '#777'      
          },
        },
      },
      treeLevel: {
        type: 'none',
      },
      birdLevel: {
        type: 'none',
      }
    }
    aEconomy[i][j] = {
      type: 'none',
      tax: 0,
      income: 0,
      maintenanceCosts: 0
    }
    aGrid[i][j] = {
      name: "r" + i + 'c' + j, // ex ("c2r4") used for lockoverlay
      canvasX: plot*j,   // j > horizontal 
      canvasY: plot*i,   // i ^ vertical
      typeStructure: "", // for type of construction, road/structure/etc
      hovercraft: "",    // for hovering effect mouse
    }
    aRoads[i][j] = {
      type: 'none',
      neighbourTop: false,
      neighbourRight: false,
      neighbourBottom: false,
      neighbourLeft: false,
      direction: '',
      exitTop: false,
      exitRight: false,
      exitBottom: false,
      exitLeft: false,
    }
    aStructures[i][j] = {
      type: 'none',
      colorSet: 0,
      design: 0,
    }   

    // const cell = document.createElement('canvas');
    // cell.className = 'cell';
    // cell.id = "r" + i + 'c' + j;

  //  row.appendChild(cell);
  }
 // gridOverlay.appendChild(row);
}

// Simple houses counter for speed optimization
// later expand with housetax and sizes 
let nHouses = 0;
// Current amount of money
let nMoney = 0;
// Current houses counter for tax purposes
let nRoads = 0;





// Create road piece where test car drives
aGrid[1][1] = {
  canvasX: 100,
  canvasY: 100,
  carAccesLeft: true,
  carAccesRight: true,
  exitLeft: false,
  exitRight: false,
  hovercraft: "",
  name: "r1c1",
};
aRoads[1][1] = {
  direction: "dead",
  type: "2lane",
};






 




// Retrieve gamestate data from cookie on startup
if(JSON.parse(localStorage.getItem('userGameStateDump')) === null) {
  console.log('No cookie Detected');
}
else {
  let gameState = JSON.parse(localStorage.getItem('userGameStateDump'));
  console.log('Cookie gamestate data used =', gameState);
  aAnimation = gameState.aAnimation;
  aGrid = gameState.aGrid;
  nHouses = gameState.nHouses;
  aEconomy = gameState.aEconomy;
  aRoads = gameState.aRoads;
  nRoads = gameState.nRoads;
  aStructures = gameState.aStructures;
}
