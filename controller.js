/* JavaScript - Controller for Metropolis 2127
   a Simulation/City builder/Dystopian Adventure Game
   by Frank Vonk, visit www.frankvonk.be/metropolis2127.html */
window.onload = function(){
  l = (data) => console.log(data);


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

  // Grass/water/roads/lower buildings
  const eCanvas = document.getElementById('canvasGroundLevel');
  // alpha: false  sets background transparent
  const c = eCanvas.getContext("2d", { alpha: false });
  // Initial call to draw previous gamestate or new city borders
//  fnMainAnimation(c)
  const eCanvasHovercraft = document.getElementById('canvasHovercraft');
  const cHov = eCanvasHovercraft.getContext("2d");

  const eGridOverlay = document.getElementById('gridOverlay')


  // Buttons
  const eBtnHouses = document.getElementById('house');
  const eBtnRoad = document.getElementById('road');
  const eBtnInspect = document.getElementById('inspect');
  const eBtnHospital = document.getElementById('hospital');
  const eBtnNightClub = document.getElementById('nightClub');
  const eBtnPark = document.getElementById('park');
  const eBtnBulldozer = document.getElementById('bulldozer');
  const aMouseButtons = [eBtnHouses,eBtnRoad,eBtnInspect,eBtnBulldozer];
  const eBtnZoomMax = document.getElementById('zoomMax');
  const eBtnZoomMin = document.getElementById('zoomMin');
  const eBtnNewCity = document.getElementById('newCity');
  // Text Messages and Guide
  const eMessages = document.getElementById('messages')
  let sErrorMessage;
  const eBuildOptions = document.getElementById('buildOptions');
  //════════╡ END DOM & GLOBAL VARIABLES ╞═════════════════════════════════════


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
        eToggleConstructionBtn.style.color = "#541388"
        eToggleConstructionBtn.style.backgroundColor = "aqua"
        toggleEBtnBuild = false;
      } else {
        eBtnBuild.style.display = "none";
        eToggleConstructionBtn.style.color = "aqua"
        eToggleConstructionBtn.style.backgroundColor = "hotpink"
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
        eToggleToolsBtn.style.color = "#541388"
        eToggleToolsBtn.style.backgroundColor = "aqua"
        toggleToolsBtn = false;
      } else {
        eBtnTools.style.display = "none";
        eToggleToolsBtn.style.color = "aqua"
        eToggleToolsBtn.style.backgroundColor = "hotpink"
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

  // Only show hovercraft if a button is clicked to select action
//  if(sMouseMode == ""){
  // Store button pressed in 'sMouseMode' and call function for CSS
  eBtnHouses.addEventListener('click', function(){
    fnBuildOptionsHouses();
  });
   eBtnRoad.onclick = () => {
     sMouseMode = 'road';
     eBuildOptions.innerHTML = '';
   };
  eBtnInspect.onclick = () => {
    sMouseMode = 'inspect';
    eBuildOptions.innerHTML = '';
  };
  eBtnHospital.onclick = () => {
    sMouseMode = 'hospital';
    eBuildOptions.innerHTML = '';
  };
  eBtnNightClub.onclick = () => {
    sMouseMode = 'nightClub';
    eBuildOptions.innerHTML = '';
  };
  eBtnPark.onclick = () => {
    sMouseMode = 'park';
    eBuildOptions.innerHTML = '';
  }
  eBtnBulldozer.onclick = () => {
    sMouseMode = 'bulldozer';
    eBuildOptions.innerHTML = '';
  };
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
    eCanvasHovercraft.style.minHeight = cSize + 'px';
    eCanvasHovercraft.style.minWidth = cSize + 'px';
    eGridOverlay.style.minHeight = cSize + 'px';
    eGridOverlay.style.minWidth = cSize + 'px';
    adjustSizeOfCellsForMouseDetection(100)
    fnMainAnimation(c)
  };
  eBtnZoomMax.onclick = () => {
    eBtnZoomMin.style.color = 'white';
    eBtnZoomMin.style.backgroundColor = 'transparent';
    eBtnZoomMax.style.color = 'white';
    eBtnZoomMax.style.backgroundColor = 'rgba(0,0,0,0.5)';
    eCanvas.setAttribute('height', cSize*2);
    eCanvas.setAttribute('width', cSize*2);
    c.scale(2, 2);
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
        fnBtnMessage(eMessages, sMouseMode);  }  );
    }
  }
  eventListenersOnConstructionButtons();
  //════════╡ END EVENT LISTENERS ╞════════════════════════════════════════════




  // TEMPORARILY DISABLED
  // The pop-up menu with different options of houses to build
  //════════╡ fnBuildOptionsHouses ╞═══════════════════════════════════════════
  function fnBuildOptionsHouses(){
    // for applying CSS to button
    sMouseMode = 'house';
    // the buildOptions area must be cleared from previous data
    eBuildOptions.innerHTML = '';
    //---------SHOULD LATER BE 'VILLA'----------------
    //    eVilla.addEventListener('click', function(){sMouseMode = 'villa'});
    fnBuildOption('villa');
    fnBuildOption('Small_Residential_Tower');
    fnBuildOption('Medium_Residential_Tower');
    fnBuildOption('Test')
  } //══════╡ END fnBuildOptionsHouses ╞═══════════════════════════════════════


  //════════╡ CREATE BUILD OPTIONS ╞═══════════════════════════════════════════
  function fnBuildOption(type){
    let eBuildOption = document.createElement('div');
     let sBuildOption = type.replace(/_/g, ' ');

    let tnBuildOption = document.createTextNode(sBuildOption +" + logo res/tax/power");
    eBuildOption.appendChild(tnBuildOption);
    eBuildOption.id = type;
    eBuildOption.style.color = 'hotpink';
    // eBuildOption.style.backgroundColor = '#541388'; // bright purple
    // eBuildOption.style.backgroundColor = '#d40078'; // dark pink
    eBuildOption.style.backgroundColor = '#241734';
    eBuildOption.style.padding = '2px';
    eBuildOption.style.border = '1px solid #d40078';
    eBuildOption.style.margin = '5px';
    eBuildOption.style.fontSize = '12px';
    eBuildOption.style.height = '50px';
    eBuildOption.style.width = '94px';

    eBuildOptions.appendChild(eBuildOption);
    // DOM and EVENT LISTENER
    eBuildOption = document.getElementById(type);
    eBuildOption.addEventListener('click', function(){sMouseMode = 'house'});
    eBuildOption.addEventListener('mouseover', function(){eBuildOption.setAttribute('class', 'hover')});
    eBuildOption.addEventListener('mouseout', function(){eBuildOption.setAttribute('class', 'nothover')});
//    eBuildOption.addEventListener('click', function(){sMouseMode = type});
//console.log('test houses options' + sMouseMode);
  } //══════╡ END CREATE BUILD OPTIONS ╞═══════════════════════════════════════









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

          case 'house':
            aPlotClicked.typeStructure = 'structure';
            fnBuildHouse(plot_y, plot_x);
            fnAssignOnAndOffRampsToRoads(plot_y, plot_x);
            nHouses += 1;
            break;

          case 'road':
            // later several road types will be possible
            fnBuildRoad(plot_y, plot_x);
            nRoads += 1;
            fnRedesignRoads(plot_y,plot_x);
            // Store road direction
            fnAssignRoadDirection(plot_y, plot_x);
            break;

          case 'inspect':
            // Gives whole array of plot, so that later added data can also be inspected.
            fnInspect(eMessages, aPlotClicked, plot_y, plot_x);
            break;

          case 'hospital':
            aGrid[plot_y][plot_x].typeStructure = 'structure'
            aStructures[plot_y][plot_x] = {
              type : 'hospital',
            }
            fnAssignOnAndOffRampsToRoads(plot_y, plot_x);
            break;

          case 'nightClub':
            aGrid[plot_y][plot_x].typeStructure = 'structure'
            aStructures[plot_y][plot_x] = {
              type : 'nightClub',
            }
            fnAssignOnAndOffRampsToRoads(plot_y, plot_x);
            break;

          case 'park':
            aGrid[plot_y][plot_x].typeStructure = 'structure'
            aStructures[plot_y][plot_x] = {
              type : 'park',
            }
            fnAssignOnAndOffRampsToRoads(plot_y, plot_x);
            break;

          case 'bulldozer':
            fnRemoveStructure(aPlotClicked.typeStructure, plot_y, plot_x);
            // send message ' you destroyed 1... ' but code breaks before here
            // due to fnCheckAvailability so code location is important
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
    localStorage.setItem('userGameStateDump', JSON.stringify(''));
    let userGameStateDump = {
      aAnimation: aAnimation,
      aEconomy: aEconomy,
      aGrid: aGrid,
      nHouses: nHouses,
      aRoads: aRoads,
      nRoads: nRoads,
      aStructures: aStructures,
    }
    localStorage.setItem('userGameStateDump', JSON.stringify(userGameStateDump));
    // console.log(JSON.parse(localStorage.getItem('userGameStateDump')));
    fnMainAnimation(c)
  } //══════╡ END ACT ON CLICK ON CANVAS ╞═════════════════════════════════════

  //════════╡ fnAssignOnAndOffRampsToRoads ╞═══════════════════════════════════
  function fnAssignOnAndOffRampsToRoads(y, x) {
    // Asign driveways to roads next to structure
    console.log('doin it')
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
    console.log('fromGridOverlayToAGridHover')
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



} //══════╡ END WINDOW.ONLOAD ╞══════════════════════════════════════════════