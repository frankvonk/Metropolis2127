/* JavaScript - Controller for Metropolis 2127
   a Simulation/City builder/Dystopian Adventure Game
   by Frank Vonk, visit www.frankvonk.be/metropolis2127.html */
window.onload = function(){
  let l = (data) => console.log(data);
  let log = (data) => console.log(data);


  // Concatenated string to test M.V.C. links and correct order in JavaScript Files
  console.log("%cLinked :" + sTestLinkModel + sTestLinkView + " Controller",
  'color: lightgreen; background-color: grey; padding: 2px 5px;');
  //════════╡ GLOBAL VARIABLES ╞═══════════════════════════════════════════════
  let aPlotClicked;  // Holds the object belonging to the plot clicked on canvas
  var plot_x; // x-coordinates of aPlotClicked
  var plot_y; // y-coordinates of aPlotClicked
  let sMouseMode = "";  // Holds which button is pressed
  let arrDragTargetArea = [];  // Create empty array to put selected plots in
  let boolDrag = false;  // Set boolean to check if mouse is dragged over canvas

  //════════╡ DOM ELEMENTS ╞═══════════════════════════════════════════════════
  const header = document.getElementById('header')
  const eCanvasHTMLSection = document.getElementById('eCanvasHTMLSection');
  
  // Initial call to draw previous gamestate or new city borders
  // fnMainAnimation(c)

  // Grass/water/roads/lower buildings
  const eCanvas = document.getElementById('canvasGroundLevel');
  // alpha: false  sets background transparent
  const c = eCanvas.getContext("2d", { alpha: false });
  // Cars/Pedestrians
  const eCanvasPedestrianLevel = document.getElementById('canvasPedestrianLevel');
  const cp = eCanvas.getContext("2d");
  // Hovering colorblock displaying whether or not current action is allowed on desired plot 
  const eCanvasHovercraft = document.getElementById('canvasHovercraft');
  const cHov = eCanvasHovercraft.getContext("2d");
  const eGridOverlay = document.getElementById('gridOverlay')

  // Buttons
  const eBtnBulldozer = document.getElementById('bulldozer');
  const eBtnFire = document.getElementById('fire');
  const eBtnHospital = document.getElementById('hospital');
  const eBtnHouses = document.getElementById('house');
  const eBtnInspect = document.getElementById('inspect');
  const eBtnNightClub = document.getElementById('nightClub');
  const eBtnPark = document.getElementById('park');
  const eBtnRoad = document.getElementById('road');
  const eBtnPolice = document.getElementById('police');

  const aMouseButtons = [eBtnHouses,eBtnRoad,eBtnInspect,eBtnBulldozer];
  const eBtnZoomMax = document.getElementById('zoomMax');
  const eBtnZoomMin = document.getElementById('zoomMin');
  const eBtnNewCity = document.getElementById('newCity');
  // Text Messages and Guide
  const eMessages = document.getElementById('messages')
  let sErrorMessage;

  const buildOptionsModal = document.getElementById('buildOptionsModal');
  const buildOptionsContainer = document.getElementById('buildOptionsContainer');
  //════════╡ END DOM & GLOBAL VARIABLES ╞═════════════════════════════════════

  eMessages.onclick = () => sMouseMode = '';
  //════════╡ Create mousedetection layer overlapping canvas ╞═════════════════
  gridOverlayAutoloader();
  //════════╡ End Create mousedetection layer overlapping canvas ╞═════════════


  //════════╡ make constructionbuttons visible ╞═══════════════════════════════
  // TODO combine 2 functions below into one
  const eToggleConstructionBtn = document.getElementById("toggleConstructionBtn");
  const eBtnBuild = document.getElementById("btnBuild");
  let toggleEBtnBuild = true;
  eToggleConstructionBtn.addEventListener('click', () =>
    {
      if(toggleEBtnBuild){
        eBtnBuild.style.display = "inherit"
        eToggleConstructionBtn.style.color = "#333"
        eToggleConstructionBtn.style.backgroundColor = "white"
        toggleEBtnBuild = false;
      } else {
        eBtnBuild.style.display = "none";
        eToggleConstructionBtn.style.color = "white"
        eToggleConstructionBtn.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        toggleEBtnBuild = true;
      };
    }, false
  )
  //════════╡ end make constructionbuttons visible ╞═══════════════════════════
  //════════╡ make toolsbuttons visible ╞═══════════════════════════════
  const eToggleToolsBtn = document.getElementById("toggleToolsBtn");
  const eBtnTools = document.getElementById("btnTools");
  let toggleToolsBtn = true;
  eToggleToolsBtn.addEventListener('click', () =>
    {
      if(toggleToolsBtn){
        eBtnTools.style.display = "inherit"
        eToggleToolsBtn.style.color = "#333"
        eToggleToolsBtn.style.backgroundColor = "white"
        toggleToolsBtn = false;
      } else {
        eBtnTools.style.display = "none";
        eToggleToolsBtn.style.color = "white"
        eToggleToolsBtn.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        toggleToolsBtn = true;
      };
    }, false
  )
  //════════╡ end make toolsbuttons visible ╞═══════════════════════════


  fnMainAnimation(c);
  //════════╡ fnCalculateTargetArea ╞══════════════════════════════════════════

  //════════╡ EVENT LISTENERS ╞════════════════════════════════════════════════
  // Drag mouse functions
  /*
  eCanvas.addEventListener('onclick', fnCalculateTargetArea(), false);
  eCanvas.addEventListener('mousedown', function(){
  //  console.log('down');
    if(typeof(calcDragInterval) != 'undefined' ){
      clearInterval(calcDragInterval);
    }
    boolDrag = true;
    eCanvas.addEventListener('onclick', fnCalculateTargetArea(), false);
  });
  eCanvas.addEventListener('mouseup', function(){
//    console.log('up');
//    console.log(JSON.stringify(arrDragTargetArea));
    fnValidateTargetArea();
    arrDragTargetArea=[];
    clearInterval(calcDragInterval);
  });
  //════════╡ fnCalculateTargetArea ╞══════════════════════════════════════════
  function fnCalculateTargetArea(){
    // Fill array with the plots i want to select
    if(boolDrag) {
      eCanvas.addEventListener('mousemove', function(){
        var x = event.clientX - 176;
        var y = event.clientY - 57;
        plot_x2 = Math.trunc(plot_x2);
        plot_y2 = Math.trunc(plot_y2);
        if((plot_y2 >= 0 && plot_y2 < nNumPlots) && (plot_x2 >=0 && plot_x2 < nNumPlots)){
          aPlotClicked2 = aGrid[plot_y2][plot_x2];
        }
      });
      let counter = 0;
      boolDrag = false;
      calcDragInterval = setInterval(function(){
        if(typeof(aPlotClicked2) !== 'undefined' && !arrDragTargetArea.includes(aPlotClicked2)) {
          arrDragTargetArea.push(aPlotClicked2);
        }
        counter++;
      },
      40);
    }
  } //══════╡ END fnCalculateTargetArea ╞══════════════════════════════════════
  //════════╡ fnValidateTargetArea ╞═══════════════════════════════════════════
  function fnValidateTargetArea(e){
    // Validate all the plots in arrDragTargetArea
    let arrLength = arrDragTargetArea.length;
 //   console.log(JSON.stringify(arrDragTargetArea));
    for(i=0; i<arrLength; i++) {
      console.log('jow');
    }
  } //══════╡ END fnCalculateTargetArea ╞══════════════════════════════════════
*/

  // CONSTRUCTION MENU
  eBtnBulldozer.onclick = () => {
    // buildOptionsModal.style.display = 'none'
    // eBtnBuild.style.display = "none"
    sMouseMode = 'bulldozer'
  };
  eBtnFire.onclick = () => renderConstructionOptionsModal('fire');
  eBtnHospital.onclick = () => renderConstructionOptionsModal('hospital');
  eBtnHouses.onclick = () => renderConstructionOptionsModal('house');
  eBtnInspect.onclick = () => sMouseMode = 'inspect';
  eBtnNightClub.onclick = () => renderConstructionOptionsModal('nightClub');
  eBtnPark.onclick = () => renderConstructionOptionsModal('park');
  eBtnPolice.onclick = () => renderConstructionOptionsModal('police');
  eBtnRoad.onclick = () => renderConstructionOptionsModal('road');

  // TOOLS MENU
  eBtnNewCity.onclick = () => {
    // TODO confirmation screen
    localStorage.removeItem('userGameStateDump');
    window.location.reload(true);
  };


  //════════╡ CALCULATE SETTINGS FOR ZOOM LEVEL ╞══════════════════════════════
  // eCanvasHTMLSection.style.width = window.screen.width;
  // eCanvasHTMLSection.style.height = window.screen.height;

  // Calculate pixels per plot * number of plots
  cSize = plot * nNumPlots + plot;

  eCanvas.setAttribute('height', cSize);
  eCanvas.setAttribute('width', cSize);
  eCanvasPedestrianLevel.setAttribute('height', cSize*1);
  eCanvasPedestrianLevel.setAttribute('width', cSize*1);
  eCanvasPedestrianLevel.style.minHeight = cSize + 'px';
  eCanvasPedestrianLevel.style.minWidth = cSize + 'px';
  eCanvasHovercraft.setAttribute('height', cSize*1);
  eCanvasHovercraft.setAttribute('width', cSize*1);
  eCanvasHovercraft.style.minHeight = cSize + 'px';
  eCanvasHovercraft.style.minWidth = cSize + 'px';
  eGridOverlay.setAttribute('height', cSize*1);
  eGridOverlay.setAttribute('width', cSize*1);
  eGridOverlay.style.minHeight = cSize + 'px';
  eGridOverlay.style.minWidth = cSize + 'px';
  adjustSizeOfCellsForMouseDetection(100)
  fnMainAnimation(c)

  let num = ($(window).width())-300;
  num = $(window).width() - 10;
  // header.style.width = num + 'px';


  eBtnZoomMin.onclick = () => {
    eBtnZoomMin.style.color = 'white';
    eBtnZoomMin.style.backgroundColor = 'rgba(0,0,0,0.5)';
    eBtnZoomMax.style.color = 'white';
    eBtnZoomMax.style.backgroundColor = 'transparent';
    eCanvas.setAttribute('height', cSize);
    eCanvas.setAttribute('width', cSize);
    eCanvasPedestrianLevel.setAttribute('height', cSize);
    eCanvasPedestrianLevel.setAttribute('width', cSize);
    eCanvasPedestrianLevel.style.minHeight = cSize + 'px';
    eCanvasPedestrianLevel.style.minWidth = cSize + 'px';
    eCanvasHovercraft.style.minHeight = cSize + 'px';
    eCanvasHovercraft.style.minWidth = cSize + 'px';
    eGridOverlay.style.minHeight = cSize + 'px';
    eGridOverlay.style.minWidth = cSize + 'px';
    adjustSizeOfCellsForMouseDetection(100)
    fnMainAnimation(c)
    console.log('zoom min')
  };
  eBtnZoomMax.onclick = () => {
    eBtnZoomMin.style.color = 'white';
    eBtnZoomMin.style.backgroundColor = 'transparent';
    eBtnZoomMax.style.color = 'white';
    eBtnZoomMax.style.backgroundColor = 'rgba(0,0,0,0.5)';
    eCanvas.setAttribute('height', cSize*2);
    eCanvas.setAttribute('width', cSize*2);
    c.scale(2, 2);
    eCanvasPedestrianLevel.setAttribute('height', cSize*2);
    eCanvasPedestrianLevel.setAttribute('width', cSize*2);
    eCanvasPedestrianLevel.style.minHeight = cSize*4 + 'px';
    eCanvasPedestrianLevel.style.minWidth = cSize*4 + 'px'; 
    eCanvasHovercraft.style.minHeight = cSize*2 + 'px';
    eCanvasHovercraft.style.minWidth = cSize*2 + 'px';
    eGridOverlay.style.minHeight = cSize*2 + 'px';
    eGridOverlay.style.minWidth = cSize*2 + 'px';
    adjustSizeOfCellsForMouseDetection(200)
    fnMainAnimation(c)
  };

  function adjustSizeOfCellsForMouseDetection(size) {
    const arrCells = document.getElementsByClassName('cell')
    const length = arrCells.length;
    for(let i = 0; i< length; i++) {
      arrCells[i].style.height = size + 'px';
      arrCells[i].style.width = size + 'px';
    }
  }
  //════════╡ END CALCULATE SETTINGS FOR ZOOM LEVEL ╞══════════════════════════

  // Change css for buttons when clicked
  eventListenersOnConstructionButtons = () => {
    for(i=0; i<aMouseButtons.length; i++){
      if(i % 2 === 1) {
      //  aMouseButtons[i].style.background ='red';
      }
      aMouseButtons[i].addEventListener('click', function(){
        fnBtnMouseCSS(sMouseMode);
//        fnBtnMessage(eMessages, sMouseMode);  
}  );
    }
  }
  eventListenersOnConstructionButtons();
  //════════╡ END EVENT LISTENERS ╞════════════════════════════════════════════



  //════════╡ ACT ON CLICK ON CANVAS ╞═════════════════════════════════════════
  function fnMainEngine(/*e*/) {
    // Display message depending on which button is pressed
    fnBtnMessage(eMessages, sMouseMode);
    // Abort this function if no button is pressed
    if(sMouseMode != ""){
      // Find out if such an action is allowed there, depending on button pressed
      if(fnCheckAvailability(aPlotClicked.typeStructure, sMouseMode, plot_y, plot_x, sErrorMessage)){
        // Switch depending on button pressed
        switch(sMouseMode){
          
          case 'bulldozer':
            fnRemoveStructure(aPlotClicked.typeStructure, plot_y, plot_x);
            // send message ' you destroyed 1... ' but code breaks before here
            // due to fnCheckAvailability so code location is important
            break;
            
          case 'fire':
            aGrid[plot_y][plot_x].typeStructure = 'structure';
            aStructures[plot_y][plot_x] = {
              type : 'fire',
            }
            fnAssignOnAndOffRampsToRoads(plot_y, plot_x);
            break;
    
          case 'hospital':
            aGrid[plot_y][plot_x].typeStructure = 'structure'
            aStructures[plot_y][plot_x] = {
              type : 'hospital',
            }  
            fnAssignOnAndOffRampsToRoads(plot_y, plot_x);
            break;
  
          case 'house':
            aPlotClicked.typeStructure = 'structure';
            fnBuildHouse(plot_y, plot_x);
            fnAssignOnAndOffRampsToRoads(plot_y, plot_x);
            nHouses += 1;
            break;

          case 'inspect':
            // Gives whole array of plot, so that later added data can also be inspected.
            fnInspect(eMessages, aPlotClicked, plot_y, plot_x);
            break;

          case 'nightClub':
            aGrid[plot_y][plot_x].typeStructure = 'structure';
            aStructures[plot_y][plot_x] = {
              type : 'nightClub',
            }  
            fnAssignOnAndOffRampsToRoads(plot_y, plot_x);
            break;

          case 'park':
            aGrid[plot_y][plot_x].typeStructure = 'structure';
            aStructures[plot_y][plot_x] = {
              type : 'park',
            }  
            fnAssignOnAndOffRampsToRoads(plot_y, plot_x);
            break;

          case 'police':
            aGrid[plot_y][plot_x].typeStructure = 'structure';
            aStructures[plot_y][plot_x] = {
              type : 'police',
            }  
            fnAssignOnAndOffRampsToRoads(plot_y, plot_x);
            break;
  
          case 'road':
            // later several road types will be possible
            fnBuildRoad(plot_y, plot_x);
            nRoads += 1;
            fnRedesignRoads(plot_y,plot_x);
            // Store road direction
            fnAssignRoadDirection(plot_y, plot_x);
            break;
  
        } // End of switch

        // Send New GameState Data to screen
        fnGameStateData();

      } // End if fnCheckAvailability was true
      else {
        // split up in several messages
        sMessage = sErrorMessage;
        // sMessage = 'actionNotAllowed';
        // Display message on page
        fnBtnMessage(eMessages, sMessage);
      } // End else (if fnCheckAvailability returned false)

    } // End if statement to see is a button was pressed

    // update localStorage in mainengine
    storeGameState();
    
    fnMainAnimation(c)
  } //══════╡ END ACT ON CLICK ON CANVAS ╞═════════════════════════════════════


  //  Build first piece of road for testcar
  fnBuildRoad(1, 1);
  nRoads += 1;
  fnRedesignRoads(1,1);
  // Store road direction
  fnAssignRoadDirection(1, 1);


  //════════╡ fnAssignOnAndOffRampsToRoads ╞═══════════════════════════════════
  function fnAssignOnAndOffRampsToRoads(y, x) {
    // Asign driveways to roads next to structure
    aRoads[y-1][x].exitBottom = true;
    aRoads[y][x+1].exitLeft = true;
    aRoads[y+1][x].exitTop = true;
    aRoads[y][x-1].exitRight = true;
  }
  //════════╡ END fnAssignOnAndOffRampsToRoads ╞═══════════════════════════════




  //════════╡ fnRemoveStructure ╞══════════════════════════════════════════════
  // Remove an existing structure
  function fnRemoveStructure(sTypeOfBuild, y, x){
    switch(sTypeOfBuild) {
      case 'structure':
        if(aStructures[y][x].type == 'house'){
          nHouses -= 1;
        }
        // Remove driveway
        aRoads[y-1][x].exitBottom = false;
        aRoads[y][x+1].exitLeft = false;
        aRoads[y+1][x].exitTop = false;
        aRoads[y][x-1].exitRight = false;

        break;

      case 'road':
        // if(aRoads[y][x].type == '2lane'){
        nRoads -= 1;
        aRoads[y][x] = {
          type: '',
          neighbourTop: false,
          neighbourRight: false,
          neighbourBottom: false,
          neighbourLeft: false,
          direction: ''
        }
        // Remove carExits on buildings
        aGrid[y-1][x].carAccesBottom = false;
        aGrid[y][x+1].carAccesLeft = false;
        aGrid[y+1][x].carAccesTop = false;
        aGrid[y][x-1].carAccesRight = false;

        fnRedesignRoads(y,x);

        break;
    } // End switch
    // Empty the building state of the plot in the grid
    aPlotClicked.typeStructure = "";
  } //══════╡ END fnRemoveStructure ╞══════════════════════════════════════════





  //══════╡ CONNECTION WITH LOCKOVERLAY ╞════════════════════════════════════

  const arrCells = document.getElementsByClassName('cell');
  for(let i = 0; i < arrCells.length; i++ ) {
    const mouseLocation = document.getElementById(arrCells[i].id);

    mouseLocation.onclick = (mouseLoc) => {
      // Select the right plot in aPlotCLicked
      fromGridOverlayToAGridClick(mouseLoc);
      // Fire Main Engine
      fnMainEngine();
    }

    mouseLocation.onmouseover = (mouseLoc) => {
      // Select the right plot in aPlotCLicked
      fromGridOverlayToAGridHover(mouseLoc);
    }
  }

  const fromGridOverlayToAGridClick = (mouseLoc) => {
    let targetRow = addNumsForfromGridOverlayToAGridClick(mouseLoc.target.id[1], mouseLoc.target.id[2]);
    let targetColumn = addNumsForfromGridOverlayToAGridClick(mouseLoc.target.id[4], mouseLoc.target.id[5]);
    plot_x = parseInt(targetColumn);
    plot_y = parseInt(targetRow);
    aPlotClicked = aGrid[plot_y][plot_x];
    // console.log(aPlotClicked);
  }

  function addNumsForfromGridOverlayToAGridClick(num1, num2) {
    return num1 === '1' ? '1' + num2 : num2;
  }

  let plot_x_hover = 0;
  let plot_y_hover = 0;
  const fromGridOverlayToAGridHover = (mouseLoc) => {
    let targetRow = addNumsForfromGridOverlayToAGridClick(mouseLoc.target.id[1], mouseLoc.target.id[2]);
    let targetColumn = addNumsForfromGridOverlayToAGridClick(mouseLoc.target.id[4], mouseLoc.target.id[5]);

    plot_x_hover = parseInt(targetColumn);
    plot_y_hover = parseInt(targetRow);

    aPlotHover = aGrid[plot_y_hover][plot_x_hover];
  }

  //══════╡ END CONNECTION WITH LOCKOVERLAY ╞════════════════════════════════


  //════════╡ fnCheckAvailability ╞════════════════════════════════════════════
  // This function checks if an action is possible on desired plot.
  function fnCheckAvailability(sCurrentBuildState, sMouseMode, y, x) {
    if (y<1 || x<1 || y>nNumPlots-1 || x>nNumPlots-1){
      // console.log("nope it's too far outside!");
      sErrorMessage ='outsidebounds';
      return false;
    }
    else if(sCurrentBuildState == '' || sMouseMode == 'inspect' || (sCurrentBuildState != '' && sMouseMode == 'bulldozer')){
      //  console.log('empty');
      return true;
    }
    else {
      // console.log("nope it's taken!");
      sErrorMessage = 'occupado';
      return false;
    }
  } //══════╡ END fnCheckAvailability ╞════════════════════════════════════════

  //════════╡ HOVERCRAFT ON CANVAS ╞═══════════════════════════════════════════
  function fnHovercraft(/*e*/){
    // TODO remove hover if mouse is off edge of canvas
    // Only show hovercraft if a button is clicked to select action
    //  < numplots because otherwise you get console errors if mouse gets outside canvas.
    if(sMouseMode !== '' && plot_x_hover != undefined && plot_y_hover &&
       plot_x_hover < nNumPlots && plot_y_hover < nNumPlots){

      if(fnCheckAvailability(aGrid[plot_y_hover][plot_x_hover].typeStructure, sMouseMode, plot_y_hover, plot_x_hover, sErrorMessage)){
        aGrid[plot_y_hover][plot_x_hover].hovercraft = 'hovercraftAvailable';
      }
      else {
        aGrid[plot_y_hover][plot_x_hover].hovercraft = 'hovercraftNotAvailable';
      }
      // looping this reset, as only adjusting adjacent plots gives problems with rapid mouse movement.
      // If the game board gets to big, make a loop for 9x9 plots with the hovercraft plot centered.
      for(i=0; i<nNumPlots; i++){
        for(j=0; j<nNumPlots; j++){
          if(i != plot_y_hover && j != plot_x_hover && i != 0 && j !=0 ){
            aGrid[i][j].hovercraft = '';
            aGrid[i+1][j].hovercraft = '';
            aGrid[i-1][j].hovercraft = '';
            aGrid[i][j-1].hovercraft = '';
            aGrid[i][j+1].hovercraft = '';
          }
        }
      }
    }
  } //══════╡ END HOVERCRAFT ON CANVAS ╞═══════════════════════════════════════


  setInterval(() => {
    // Set data for hovercraft
    fnHovercraft()
  }, 60);



/*
  var canvas = document.getElementById("2-lane_Road");
  var ctx = canvas.getContext("2d");
    
  road2Lane(ctx, 0, 0, i, j, true);
*/

/*
  canvas = document.getElementById("buildOptionExampleNightClub");
  ctx = canvas.getContext("2d");
  nightClub(ctx, 0, 0);
  nightClubPedestrianLevel(ctx, 0, 0);
  */ 
  
  // DIFFERENT CONSTRUCTIONS WITH THEIR PROPERTIES
  const constructionOptions = {
    fire: [
      {
        tax: -30,
        buildCosts: 700,
        title: 'fire',
        residents: 100,
        sMouseMode: 'fire',
      }
    ],
    hospital: [
      {
        tax: -30,
        buildCosts: 700,
        title: 'Hospital',
        residents: 100,
        sMouseMode: 'hospital',
      }
    ],
    house: [
      {
        tax: 1,
        buildCosts: 200,
        title: 'Small house',
        residents: 10,
        sMouseMode: 'house',
      },
      {
        tax: 2,
        buildCosts: 300,
        title: 'Medium house',
        residents: 20,
        sMouseMode: 'house',
      },
    ],
    nightClub: [
      {
        tax: 3,
        buildCosts: 500,
        title: 'Night Club',
        residents: 80,
        sMouseMode: 'nightClub',
      }
    ],
    park: [
      {
        tax: -19,
        buildCosts: 100,
        title: 'Park',
        residents: 30,
        sMouseMode: 'park',
      }
    ],
    police: [
      {
        tax: -1,
        buildCosts: 10,
        title: 'Police Bureau',
        residents: 0,
        sMouseMode: 'police',
      }
    ],
    road: [
      {
        tax: -1,
        buildCosts: 10,
        title: 'Two-Lane Road',
        residents: 0,
        sMouseMode: 'road',
      }
    ],
  };
  //══════╡ RENDER MODAL WITH BUILD OPTIONS ╞══════════════════════════════════
  function renderConstructionOptionsModal(typeOfConstruction) {
    // OLD WAY
    // sMouseMode = typeOfConstruction;
    sMouseMode = '';

    buildOptionsModal.style.visibility = 'inherit';    
    console.log('type = ', typeOfConstruction)
    // Delete options from previous time
    buildOptionsContainer.innerHTML = null;
    constructionOptions[typeOfConstruction].forEach(item => {
      // console.log('dees ==== ', item)
      createConstructionOptions(item)
    })
  }

  function createConstructionOptions(typeOfConstruction) {
    console.log('den dees doet het = ', typeOfConstruction)
    const table = document.createElement('table');
    table.classList = 'buildOptionTile';
    table.onclick = () => selectThisTypeOfConstruction(typeOfConstruction)

    const caption = document.createElement('caption');
    let tn = document.createTextNode(typeOfConstruction.title);
    caption.appendChild(tn);
    table.appendChild(caption);

    const tBody = document.createElement('tbody');

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.classList = "exampleImage";
    const canvas = document.createElement('canvas');
    canvas.height = 100;
    canvas.width = 100;
    canvas.classList = "CanvasExample";
    canvas.id = 'buildOptionExampleNightClub'
    ctx = canvas.getContext("2d");

    switch(typeOfConstruction.sMouseMode) {
      case 'hospital':
        hospital(ctx, 0, 0, 0, 0, true);
        break;
      case 'fire':
        mediumFireStation(ctx, 0, 0, 0, 0, true);
        break;
      case 'house':
        house1x1_01(ctx, 0, 0, 0, 0, true);
        break;
      case 'nightClub':
        nightClub(ctx, 0, 0);
        nightClubPedestrianLevel(ctx, 0, 0);
        break;
      case 'park':
        parkAndysCoffeebar(ctx, 0, 0, i, j, true);
        parkAndysCoffeebarPedestrianLevel(ctx, 0, 0, i, j, true);
        break;   
      case 'police':
        mediumPoliceOffice(ctx, 0, 0, i, j, true);
        break;   
      case 'road':
        road2Lane(ctx, 0, 0, i, j, true);
        break;   
    }

    td.appendChild(canvas)
    tr.appendChild(td)
    tBody.appendChild(tr)

    tr = document.createElement('tr');
    td = document.createElement('td');
    td.classList = "buildOptionText"
    const tableText = document.createElement('table');
    let trText = document.createElement('tr');
    let tdText = document.createElement('td');
    let tnText = document.createTextNode('Build costs')
    tdText.appendChild(tnText);
    trText.appendChild(tdText);

    tdText = document.createElement('td');
    tnText = document.createTextNode('€'+typeOfConstruction.buildCosts)
    tdText.appendChild(tnText);
    trText.appendChild(tdText);

    tableText.appendChild(trText);

    trText = document.createElement('tr');
    tdText = document.createElement('td');
    tnText = document.createTextNode('Income')
    tdText.appendChild(tnText);
    trText.appendChild(tdText);

    tdText = document.createElement('td');
    tnText = document.createTextNode('€'+typeOfConstruction.tax)
    tdText.appendChild(tnText);
    trText.appendChild(tdText);

    tableText.appendChild(trText);

    trText = document.createElement('tr');
    tdText = document.createElement('td');
    tnText = document.createTextNode('Residents')
    tdText.appendChild(tnText);
    trText.appendChild(tdText);

    tdText = document.createElement('td');
    tnText = document.createTextNode('>'+typeOfConstruction.residents)
    tdText.appendChild(tnText);
    trText.appendChild(tdText);

    tableText.appendChild(trText);

    td.appendChild(tableText)
    tr.appendChild(td)
    tBody.appendChild(tr)

    table.appendChild(tBody)
    buildOptionsContainer.appendChild(table);
  }
  //══════╡ END RENDER MODAL WITH BUILD OPTIONS ╞══════════════════════════════
  
  //══════╡ SELECT A CONSTRUCTION TYPE ╞═══════════════════════════════════════
  function selectThisTypeOfConstruction(typeOfConstruction) {
    buildOptionsModal.style.visibility = 'hidden';    
    console.log('mouse =', typeOfConstruction.sMouseMode)

    console.log('selected type = ', typeOfConstruction)
    sMouseMode = typeOfConstruction.sMouseMode;
  }
  //══════╡ END SELECT A CONSTRUCTION TYPE ╞═══════════════════════════════════

  



} //══════╡ END WINDOW.ONLOAD ╞════════════════════════════════════════════════