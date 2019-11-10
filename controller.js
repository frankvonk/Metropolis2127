/* JavaScript - Controller for Metropolis 2127
   a Simulation/City builder/Dystopian Adventure Game
   by Frank Vonk, visit www.frankvonk.be/metropolis2127.html */
window.onload = function(){
  
  
  //import fnConsLog from './view/houses/house1x1_01';
  //let fnConsLog = require('./view/houses/house1x1_01');
//s  require('./view/houses/house1x1_01.js');
  
  
  // Concatenated string to test M.V.C. links and correct order in JavaScript Files
  console.log("%cLinked :" + sTestLinkModel + sTestLinkView + " Controller",
  'color: lightgreen; background-color: grey; padding: 2px 5px;');
  var plot_x;
  var plot_y;
//  let zoomlevel;




//  let x = ['ja', 'nee' ];
//let userGameStateDump = [aGrid, aStructures, aEconomy, aRoads, nHouses, nRoads]

//document.cookie = JSON.stringify(userGameStateDump) + "; expires=Thu, 18 Dec 2022 12:00:00 UTC";

//    console.log(document.cookie);
//  console.log(userGameStateDump);

//let userGameState = JSON.parse(document.cookie);

//  console.log(' ');
//  console.log(userGameState);









  
  //════════╡ GLOBAL VARIABLES ╞═══════════════════════════════════════════════
  let aPlotClicked;  // Holds the object belonging to the plot clicked on canvas
  let sMouseMode = ""; // Holds which button is pressed
  //════════╡ DOM ELEMENTS ╞═══════════════════════════════════════════════════
  const eCanvas = document.getElementById('gameboardCanvas');
  var c = eCanvas.getContext("2d");
  // Buttons
  const eBtnHouses = document.getElementById('house');
  const eBtnRoad = document.getElementById('road');
  const eBtnInspect = document.getElementById('inspect');
  const eBtnBulldozer = document.getElementById('bulldozer');
  const aMouseButtons = [eBtnHouses,eBtnRoad,eBtnInspect,eBtnBulldozer];
  const eBtnZoomMax = document.getElementById('zoomMax');
  const eBtnZoomMin = document.getElementById('zoomMin');
  // Text Messages and Guide
  const eMessages = document.getElementById('messages')
  let sErrorMessage;
  const eBuildOptions = document.getElementById('buildOptions');
  //════════╡ END DOM & GLOBAL VARIABLES ╞═════════════════════════════════════


  //var myVar;
  //function myFunction() {
  //  myVar = setTimeout(alertFunc, 3000);
  //}
    fnMainAnimation(c);


  //════════╡ EVENT LISTENERS ╞════════════════════════════════════════════════
  eCanvas.addEventListener('mousedown', fnMainEngine, false);
  //    eCanvas.addEventListener('mousemove', fnMainEngine, false);
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
  eBtnBulldozer.addEventListener('click', function(){
    sMouseMode = 'bulldozer'; 
    eBuildOptions.innerHTML = '';
});
  eBtnZoomMax.addEventListener('click', function(){
    eBtnZoomMax.style.color = 'aqua';
    eBtnZoomMax.style.backgroundColor = 'hotpink';
    eBtnZoomMin.style.color = '#541388';
    eBtnZoomMin.style.backgroundColor = 'aqua';
  })
  eBtnZoomMin.addEventListener('click', function(){
    eBtnZoomMin.style.color = 'aqua';
    eBtnZoomMin.style.backgroundColor = 'hotpink';
    eBtnZoomMax.style.color = '#541388';
    eBtnZoomMax.style.backgroundColor = 'aqua';
  } );

  //════════╡ END EVENT LISTENERS ╞════════════════════════════════════════════


  //════════╡ fnMouseToPlot ╞══════════════════════════════════════════════════
  // This function takes mouseX/Y & translates in to plot on the grid.
  function fnMouseToPlot(e){
    var rect = eCanvas.getBoundingClientRect();
    posx = e.clientX - rect.left
    posy = e.clientY - rect.top
             //  console.log("RAW PIXELS = x", posx, "y", posy);
    plot_x = posx / zoomlevel; // # 1 plot is 10x10 px
    plot_y = posy / zoomlevel; //  # 1 plot is 10x10 px
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
    fnBuildOption('Small Residential Tower');
    fnBuildOption('Medium Residential Tower');
    fnBuildOption('Test')
  } //══════╡ END fnBuildOptionsHouses ╞═══════════════════════════════════════


  //════════╡ CREATE BUILD OPTIONS ╞═══════════════════════════════════════════
  function fnBuildOption(type){
    let eBuildOption = document.createElement('div');
    let tnBuildOption = document.createTextNode(type+"+logo res/tax/power");
    eBuildOption.appendChild(tnBuildOption);
    eBuildOption.id = type;
    eBuildOption.style.color = 'hotpink';
    // eBuildOption.style.backgroundColor = '#541388'; // bright purple
    // eBuildOption.style.backgroundColor = '#d40078'; // dark pink
    eBuildOption.style.backgroundColor = '#241734';
    eBuildOption.style.padding = '2px';
    eBuildOption.style.border = '1px solid #d40078';
    eBuildOption.style.margin = '5px';
    eBuildOption.style.fontSize = '0.7em';
    eBuildOption.style.height = '50px';
    eBuildOption.style.width = '80px';
  
    eBuildOptions.appendChild(eBuildOption);
    // DOM and EVENT LISTENER
    eBuildOption = document.getElementById(type);
    eBuildOption.addEventListener('click', function(){sMouseMode = 'house'});
//    eBuildOption.addEventListener('click', function(){sMouseMode = type});
//console.log('test houses options' + sMouseMode);
  } //══════╡ END CREATE BUILD OPTIONS ╞═══════════════════════════════════════


  //════════╡ HOVERCRAFT ON CANVAS ╞═══════════════════════════════════════════
  function fnHovercraft(e){
    var rect = eCanvas.getBoundingClientRect();
    plot_x = Math.trunc((e.clientX - rect.left) / zoomlevel);
    plot_y = Math.trunc((e.clientY - rect.top) / zoomlevel);
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




  // normal zoomlevel
  zoomlevel = 40;
  eCanvas.width = 560;
  eCanvas.height = 560;

  //mouse zoom related
  eBtnZoomMax.addEventListener('click', function(){
    eCanvas.setAttribute('height','560px');
    eCanvas.setAttribute('width','560px');
    c.scale(1, 1);
    zoomlevel = 40; // calculation mouse
    sZoomMode = 'zoomMax';  // used for css button
    fnMainAnimation(c);
  } );
  eBtnZoomMin.addEventListener('click', function(){
    eCanvas.setAttribute('height','280px');
    eCanvas.setAttribute('width','280px');
    c.scale(0.5, 0.5);
    zoomlevel = 20; // calculation mouse
    sZoomMode = 'zoomMin';  // used for css button
    fnMainAnimation(c);
  } );

  // Change css for buttons when cicked
  for(i=0; i<aMouseButtons.length; i++){
    aMouseButtons[i].addEventListener('click', function(){
      fnBtnMouseCSS(sMouseMode);
      fnBtnMessage(eMessages, sMouseMode);  }  ); 
  } //════╡ END EVENT LISTENERS ╞════════════════════════════════════════════


  // Animate the outside of the city area
  //  fnAnimateOutsidePlayerReach(c);
  // Introduction image goes on top of city
//  fnAnimateIntroImage(c);

  

  //════════╡ ACT ON CLICK ON CANVAS ╞═════════════════════════════════════════
  function fnMainEngine(e) {  
    // Display message depending on which button is pressed
    fnBtnMessage(eMessages, sMouseMode);
    // Abort this function if no button is pressed
    if(sMouseMode != ""){
      // Find out which plot on the grid is clicked
      fnMouseToPlot(e);
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

          case 'bulldozer':
            fnRemoveStructure(aPlotClicked.typeStructure, plot_y, plot_x);
            // send message ' you destroyed 1... ' but code breaks before here 
            // due to fnCheckAvailability so code location is important
            break;
        } // End of switch

        // Send New GameState Data to screen
        fnGameStateData();
        // This animation function is in a constant loop,
        // yet i add an extra call here for inmediate action
        // instead of waiting microseconds
//    fnMainAnimation(c); COMMENTED OUT, TAKEN OVER BY LOOP 

      } // End if fnCheckAvailability was true
      else {
  //split up in several messages
        sMessage = sErrorMessage;
  //          sMessage = 'actionNotAllowed';
        // Display message on page
        fnBtnMessage(eMessages, sMessage);
      } // End else (if fnCheckAvailability returned false)

    } // End if statement to see is a button was pressed



    // update localStorage in mainengine
//localStorage.setItem('userGameStateDump', JSON.stringify(''));
  let userGameStateDump = {
    aGrid: aGrid,
    aStructures: aStructures,
    aEconomy: aEconomy,
    aRoads: aRoads,
    nHouses: nHouses,
    nRoads: nRoads  
  }
  localStorage.setItem('userGameStateDump', JSON.stringify(userGameStateDump));
  console.log(JSON.parse(localStorage.getItem('userGameStateDump')));


} //══════╡ END ACT ON CLICK ON CANVAS ╞═════════════════════════════════════


  //════════╡ fnCheckAvailability ╞════════════════════════════════════════════
  // This function checks if an action is possible on desired plot.
  function fnCheckAvailability(sCurrentBuildState, sMouseMode, y, x) {
    if (y<1 || x<1 || y>nNumPlots-1 || x>nNumPlots-1){
      console.log("Fuck no it's too far outside!");
      sErrorMessage ='outsidebounds';
      return false;
    }
    else if(sCurrentBuildState == '' || sMouseMode == 'inspect' || (sCurrentBuildState != '' && sMouseMode == 'bulldozer')){
      //  console.log('empty');
      return true;
    }
    else {
      console.log("Fuck no it's taken!");
      sErrorMessage = 'occupado';
      return false;
    }
  } //══════╡ END fnCheckAvailability ╞════════════════════════════════════════
    
    
  //════════╡ fnRemoveStructure ╞══════════════════════════════════════════════
  // Remove an existing structure
  function fnRemoveStructure(sTypeOfBuild, y, x){
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
    

    //════════╡ IMPORTED TIME ╞══════════════════════════════════════════════════
    // make gametime hour pas by in 60 rl seconds... +add pauze button
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
//      document.getElementById('clock').innerHTML =
      document.getElementById('time').innerHTML =
      h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 1000);
    }
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
    startTime();
      //══════╡ END IMPORTED TIME ╞══════════════════════════════════════════════

      

    
  } //══════╡ END WINDOW.ONLOAD ╞══════════════════════════════════════════════