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
  const eCanvas = document.getElementById('gameboardCanvas');
  const c = eCanvas.getContext("2d", { alpha: false });
  const eCanvasHTMLSection = this.document.getElementById('eCanvasHTMLSection');
  // Buttons
  const eBtnHouses = document.getElementById('house');
  const eBtnRoad = document.getElementById('road');
  const eBtnInspect = document.getElementById('inspect');
  const eBtnHospital = document.getElementById('hospital');
  const eBtnNightClub = document.getElementById('nightClub');
  const eBtnBulldozer = document.getElementById('bulldozer');
  const aMouseButtons = [eBtnHouses,eBtnRoad,eBtnInspect,eBtnBulldozer];
  const eBtnZoomMax = document.getElementById('zoomMax');
  const eBtnZoomMed = document.getElementById('zoomMed');
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
  eCanvas.addEventListener('mouseup', fnMainEngine, false);

  // Drag mouse functions
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
        plot_x2 = x / zoomlevel; // # 1 plot is 10x10 px
        plot_y2 = y / zoomlevel; //  # 1 plot is 10x10 px
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




  // Only show hovercraft if a button is clicked to select action
//  if(sMouseMode == ""){
  eCanvas.addEventListener('mousemove', fnHovercraft, false);
  
  // Store button pressed in 'sMouseMode' and call function for CSS

  //  eBtnHouse.addEventListener('click', function(){sMouseMode = 'house'});
  eBtnHouses.addEventListener('click', function(){
    fnBuildOptionsHouses();
  });
  eBtnRoad.addEventListener('click', function(){
    sMouseMode = 'road';
    eBuildOptions.innerHTML = '';
  });
  eBtnInspect.addEventListener('click', function(){
    sMouseMode = 'inspect';
    eBuildOptions.innerHTML = '';
  });
  eBtnHospital.addEventListener('click', function(){
    sMouseMode = 'hospital';
    eBuildOptions.innerHTML = '';
  });
  eBtnNightClub.addEventListener('click', function(){
    sMouseMode = 'nightClub';
    eBuildOptions.innerHTML = '';
  });
  eBtnBulldozer.addEventListener('click', function(){
    sMouseMode = 'bulldozer'; 
    eBuildOptions.innerHTML = '';
  });
  eBtnNewCity.addEventListener('click', function(){
    // TODO confirmation screen
    localStorage.removeItem('userGameStateDump');
    window.location.reload(true);
  } );

  //════════╡ CALCULATE SETTINGS FOR ZOOM LEVEL ╞══════════════════════════════
  // Parent container of canvas has fixed width and overflow auto
  // to keep the body in the same size independent of game zoomlevel
  // eCanvasHTMLSection.style.width = $(window).width();
  // eCanvasHTMLSection.style.height = $(window).height();
  eCanvasHTMLSection.style.width = window.screen.width;
  eCanvasHTMLSection.style.height = window.screen.height;


  
  // normal zoomlevel
  zoomlevel = 100;
  c.scale(1, 1);
  cSize = plot * this.nNumPlots + plot;

    
  eCanvas.setAttribute('height', cSize);
  eCanvas.setAttribute('width', cSize);
  

//  eCanvas.setAttribute('height', cSize);
//  eCanvas.setAttribute('width', cSize);

  eBtnZoomMax.addEventListener('click', function(){
    eBtnZoomMax.style.color = '#541388';
    eBtnZoomMax.style.backgroundColor = 'aqua';
    eBtnZoomMed.style.color = 'aqua';
    eBtnZoomMed.style.backgroundColor = 'hotpink';
    eBtnZoomMin.style.color = 'aqua';
    eBtnZoomMin.style.backgroundColor = 'hotpink';
    eCanvas.setAttribute('height', cSize*2);
    eCanvas.setAttribute('width', cSize*2);
    c.scale(2, 2);
    zoomlevel = 180; // calculation mouse
    sZoomMode = 'zoomMax';  // used for css button
  } );
  eBtnZoomMed.addEventListener('click', function(){
    eBtnZoomMax.style.color = 'aqua';
    eBtnZoomMax.style.backgroundColor = 'hotpink';
    eBtnZoomMed.style.color = '#541388';
    eBtnZoomMed.style.backgroundColor = 'aqua';
    eBtnZoomMin.style.color = 'aqua';
    eBtnZoomMin.style.backgroundColor = 'hotpink';
    eCanvas.setAttribute('height', cSize);
    eCanvas.setAttribute('width', cSize);
    c.scale(1, 1);
    zoomlevel = 120; // calculation mouse
    sZoomMode = 'zoomMed';  // used for css button
  } );
  eBtnZoomMin.addEventListener('click', function(){
    eBtnZoomMin.style.color = '#541388';
    eBtnZoomMin.style.backgroundColor = 'aqua';
    eBtnZoomMed.style.color = 'aqua';
    eBtnZoomMed.style.backgroundColor = 'hotpink';
    eBtnZoomMax.style.color = 'aqua';
    eBtnZoomMax.style.backgroundColor = 'hotpink';
    eCanvas.setAttribute('height', cSize/2);
    eCanvas.setAttribute('width', cSize/2);
    c.scale(0.5, 0.5);
    zoomlevel = 60; // calculation mouse
    sZoomMode = 'zoomMin';  // used for css button
  } );

  // Change css for buttons when clicked
  eventListenersOnConstructionButtons = () => {
    for(i=0; i<aMouseButtons.length; i++){
      aMouseButtons[i].addEventListener('click', function(){
        fnBtnMouseCSS(sMouseMode);
        fnBtnMessage(eMessages, sMouseMode);  }  ); 
    }  
  }
  eventListenersOnConstructionButtons();
  //════════╡ END CALCULATE SETTINGS FOR ZOOM LEVEL ╞══════════════════════════
  //════════╡ END EVENT LISTENERS ╞════════════════════════════════════════════


  //════════╡ fnMouseToPlot ╞══════════════════════════════════════════════════
  // This function takes mouseX/Y & translates in to plot on the grid.
  function fnMouseToPlot(e){
    var rect = eCanvas.getBoundingClientRect();
    posx = e.clientX - rect.left
    posy = e.clientY - rect.top
             //  console.log("RAW PIXELS = x", posx, "y", posy);
    plot_x = posx / zoomlevel; // # 1 plot is 40x40 px
    plot_y = posy / zoomlevel; 
    plot_x = Math.trunc(plot_x);
    plot_y = Math.trunc(plot_y);
              // console.log('x trunc =', Math.trunc(plot_x) + ' y trunc =', Math.trunc(plot_y));
    if((plot_y >= 0 && plot_y < nNumPlots) && (plot_x >=0 && plot_x < nNumPlots)){
    aPlotClicked = aGrid[plot_y][plot_x];
  //  console.log('DataPlot', aPlotClicked);
//    return plot_y, plot_x;
    }           
  } //══════╡ END getMousPos ╞═════════════════════════════════════════════════


  //════════╡ fnBuildOptionsHouses ╞══════════════════════════════════════════════════
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


  //════════╡ HOVERCRAFT ON CANVAS ╞═══════════════════════════════════════════
  function fnHovercraft(/*e*/){
    // TODO remove hover if mouse is off edge of canvas
//    var rect = eCanvas.getBoundingClientRect();
//    plot_x = Math.trunc((e.clientX - rect.left) / zoomlevel);
//    plot_y = Math.trunc((e.clientY - rect.top) / zoomlevel);
    // Only show hovercraft if a button is clicked to select action
    //  < numplots because otherwise you get console errors if mouse gets outside canvas.
    if(sMouseMode!== "" && plot_x < nNumPlots && plot_y < nNumPlots){

      if(fnCheckAvailability(aGrid[plot_y][plot_x].typeStructure, sMouseMode, plot_y, plot_x, sErrorMessage)){
        aGrid[plot_y][plot_x].hovercraft = 'hovercraftAvailable';
      }
      else {
        aGrid[plot_y][plot_x].hovercraft = 'hovercraftNotAvailable';
      }

      // looping this reset, as only adjusting adjacent plots gives problems with rapid mouse movement.
      // If the game board gets to big, make a loop for 9x9 plots with the hovercraft plot centered.

      for(i=0; i<nNumPlots; i++){
        for(j=0; j<nNumPlots; j++){
          if(i!=plot_y && j!=plot_x &&i!=0 && j!=0){
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



  //════════╡ ACT ON CLICK ON CANVAS ╞═════════════════════════════════════════
  function fnMainEngine(/*e*/) {  
    // Display message depending on which button is pressed
    fnBtnMessage(eMessages, sMouseMode);
    // Abort this function if no button is pressed
    if(sMouseMode != ""){
      // Find out which plot on the grid is clicked
//      fnMouseToPlot(e);
      // Find out if such an action is allowed there, depending on button pressed
      if(fnCheckAvailability(aPlotClicked.typeStructure, sMouseMode, plot_y, plot_x, sErrorMessage)){
        // Switch depending on button pressed 
        switch(sMouseMode){

          case 'house':
            aPlotClicked.typeStructure = 'structure';
            fnBuildHouse(plot_y, plot_x);
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
            break;
          
          case 'nightClub':
            aGrid[plot_y][plot_x].typeStructure = 'structure'  
            aStructures[plot_y][plot_x] = {  
              type : 'nightClub',
            }
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
  //  console.log(JSON.parse(localStorage.getItem('userGameStateDump')));
} //══════╡ END ACT ON CLICK ON CANVAS ╞═════════════════════════════════════


  //════════╡ fnCheckAvailability ╞════════════════════════════════════════════
  // This function checks if an action is possible on desired plot.
  function fnCheckAvailability(sCurrentBuildState, sMouseMode, y, x) {
    if (y<1 || x<1 || y>nNumPlots-1 || x>nNumPlots-1){
      console.log("nope it's too far outside!");
      sErrorMessage ='outsidebounds';
      return false;
    }
    else if(sCurrentBuildState == '' || sMouseMode == 'inspect' || (sCurrentBuildState != '' && sMouseMode == 'bulldozer')){
      //  console.log('empty');
      return true;
    }
    else {
      console.log("nope it's taken!");
      sErrorMessage = 'occupado';
      return false;
    }
  } //══════╡ END fnCheckAvailability ╞════════════════════════════════════════
    
    
  //════════╡ fnRemoveStructure ╞══════════════════════════════════════════════
  // Remove an existing structure
  function fnRemoveStructure(sTypeOfBuild, y, x){
    // document.getElementById("gameboardCanvas").style.transform = 'rotate(90deg)';
    // document.getElementById("gameboardCanvas").style.zIndex = -10;
    switch(sTypeOfBuild) {
      case 'structure':
        if(aStructures[y][x].type == 'house'){
          nHouses -= 1;
        }
        break;

      case 'road':
  //    if(aRoads[y][x].type == '2lane'){
        nRoads -= 1;
        aRoads[y][x] = {
          type: '', 
          neighbourTop: false,
          neighbourRight: false,
          neighbourBottom: false,
          neighbourLeft: false,
          direction: ''
        }
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
    mouseLocation.addEventListener('click', 
      (mouseLoc) => {
        // Select the right plot in aPlotCLicked
        fromGridOverlayToAGrid(mouseLoc)
        // Fire Main Engine
        fnMainEngine()
      }
    )
    mouseLocation.onmousemove =
      (mouseLoc) => {
        console.log('moving=');
        fromGridOverlayToAGrid(mouseLoc)
        fnHovercraft(); 
      }
    // mouseLocation.setAttribute('class', 'hover');      
  }

  const fromGridOverlayToAGrid = (mouseLoc) => {
//      console.log(mouseLoc.target.id);
    let targetRow = mouseLoc.target.id[1];
    let targetColumn = mouseLoc.target.id[3];
//      console.log(targetColumn);
    plot_x = parseInt(targetColumn);
    plot_y = parseInt(targetRow);
    aPlotClicked = aGrid[plot_y][plot_x];
//      console.log(aPlotClicked);
  }
  //══════╡ END CONNECTION WITH LOCKOVERLAY ╞════════════════════════════════







    
  } //══════╡ END WINDOW.ONLOAD ╞══════════════════════════════════════════════