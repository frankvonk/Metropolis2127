const l = (value) => console.log(value)


let route = {
  // origin: [1, 1],
  destination: [],
  currentLocationPlotNums: [1, 1],
  // currentLocationPlotNums: [3, 6],
  // currentCoordinatesPixelsWithinCanvas: [100, 100],
  // currentCoordinatesPixelsWithinPlot: [16, 24],
  currentCoordinatesPixelsWithinPlot: [77, 76],
  // direction: 'south',
  direction: 'north',
  arrived: false,    
  color: '#777'
}


function fnCarRoute(c, i, j) {
  // console.log('hoi')

  route = followTheRoadOuterLane(route, route.currentLocationPlotNums[0], route.currentLocationPlotNums[1]);

  let movementX = 0;
  let movementY = 0;
  if(route.direction === 'north') {
    movementX = 0;
    movementY = -1;
    route.currentCoordinatesPixelsWithinPlot[1]--;
  } else if(route.direction === 'east') {
    movementX = +1;
    movementY = 0;
    route.currentCoordinatesPixelsWithinPlot[0] ++;
  } else if(route.direction === 'south') {
    movementX = 0;
    movementY = +1;
    route.currentCoordinatesPixelsWithinPlot[1] ++;
  } else if(route.direction === 'west') {
    movementX = -1;
    movementY = 0;
    route.currentCoordinatesPixelsWithinPlot[0] --;
  }
//  console.log('route = ', route)
  vehicleFamilyCar1(c, 
    // route.currentCoordinatesPixelsWithinCanvas[0] + movementX, 
    // route.currentCoordinatesPixelsWithinCanvas[1] + movementY, 
    route.currentCoordinatesPixelsWithinPlot[0] + (route.currentLocationPlotNums[0]*plot) + movementX, 
    route.currentCoordinatesPixelsWithinPlot[1] + (route.currentLocationPlotNums[1]*plot) + movementY, 
    route.color, 
    route.direction
  );
}


function followTheRoadOuterLane(route, i, j) {
    if(route.direction === 'north') {
        // Check if driving straight ahead in current direction is not possible
        if (aRoads[route.currentLocationPlotNums[1]-1][route.currentLocationPlotNums[0]].type !== '2lane') {   
          
            // Check at beginning if you can drive in northern direction
            if (route.currentCoordinatesPixelsWithinPlot[1] === 17) {
                clearCanvas('canvasPedestrianLevel')
                route.direction = 'west';        

            // Check at the end if you can drive in eastern direction
            } else if (route.currentCoordinatesPixelsWithinPlot[1] === 77 &&
              aRoads[route.currentLocationPlotNums[1]][route.currentLocationPlotNums[0]+1].type === '2lane') {
                clearCanvas('canvasPedestrianLevel')
                route.direction = 'east';
            } 
          
        } else if (route.currentCoordinatesPixelsWithinPlot[1] === 0 ) { 
            route.currentCoordinatesPixelsWithinPlot[1] = 104;
            route.currentLocationPlotNums[1] --;
        }

    } else if(route.direction === 'east') {

        // Check if driving straight ahead in current direction is not possible
        if (aRoads[route.currentLocationPlotNums[1]][route.currentLocationPlotNums[0]+1].type !== '2lane') {          
            // Check at beginning if you can drive in southern direction
            if (route.currentCoordinatesPixelsWithinPlot[0] === 17 &&
              aRoads[route.currentLocationPlotNums[1]+1][route.currentLocationPlotNums[0]].type === '2lane') {  
                clearCanvas('canvasPedestrianLevel')
                route.direction = 'south';        
            // Check at the end if you can drive in east direction
            } else if (route.currentCoordinatesPixelsWithinPlot[0] === 77) {
                clearCanvas('canvasPedestrianLevel')
                route.direction = 'north';
            } 
        }

        // Simply drive on to the next plot in the direction you were heading
        else if (route.currentCoordinatesPixelsWithinPlot[0] === 100 ) {      
            route.currentCoordinatesPixelsWithinPlot[0] = 0;
            route.currentLocationPlotNums[0] ++;
        }   

        // Later on, as multi-lane traffic enters the logic, more if statements are needed
        /*
        // Check if you can continue to drive east at the beginning
        if (route.currentCoordinatesPixelsWithinPlot[0] === 17 &&
          aRoads[route.currentLocationPlotNums[1]][route.currentLocationPlotNums[0]+1].type !== '2lane') {

            // check if you can drive in southern direction
            if (aRoads[route.currentLocationPlotNums[1]+1][route.currentLocationPlotNums[0]].type === '2lane') {
                clearCanvas('canvasPedestrianLevel')
                route.direction = 'south';        
            } 

        // Check if you can continue to drive east at the end
        } else if (route.currentCoordinatesPixelsWithinPlot[0] === 77 &&
          aRoads[route.currentLocationPlotNums[1]][route.currentLocationPlotNums[0]+1].type !== '2lane') {
            clearCanvas('canvasPedestrianLevel')
            route.direction = 'north';
        
        // Simply drive on to the next plot in the direction you were heading
        } else if (route.currentCoordinatesPixelsWithinPlot[0] === 100 ) {      
            route.currentCoordinatesPixelsWithinPlot[0] = 0;
            route.currentLocationPlotNums[0] ++;
        }
        */  
        
    } else if (route.direction === 'south') {
      // l('south')

        // Check if driving straight ahead in current direction is not possible
        if (aRoads[route.currentLocationPlotNums[1]+1][route.currentLocationPlotNums[0]].type !== '2lane') {   

            // Check at beginning if you can drive in western direction
            if (route.currentCoordinatesPixelsWithinPlot[1] === 17
              && aRoads[route.currentLocationPlotNums[1]][route.currentLocationPlotNums[0]-1].type === '2lane') {  
                clearCanvas('canvasPedestrianLevel')
                route.direction = 'west';        

            // Check at the end if you can drive in eastern direction
            } else if (route.currentCoordinatesPixelsWithinPlot[1] === 77) {
                clearCanvas('canvasPedestrianLevel')
                route.direction = 'east';
            } 
        } else if ( route.currentCoordinatesPixelsWithinPlot[1] === 100 ) {      
            route.currentCoordinatesPixelsWithinPlot[1] = 0;
            route.currentLocationPlotNums[1] ++;
        }

    } else if (route.direction === 'west') {


        // Check if driving straight ahead in current direction is not possible
        if (aRoads[route.currentLocationPlotNums[1]][route.currentLocationPlotNums[0]-1].type !== '2lane') {   
          // l('neee')

            // Check at beginning if you can drive in northern direction
            if (route.currentCoordinatesPixelsWithinPlot[0] === 17) {
                clearCanvas('canvasPedestrianLevel')
                route.direction = 'south';        

            // Check at the end if you can drive in eastern direction
            } else if (route.currentCoordinatesPixelsWithinPlot[0] === 77 &&
              aRoads[route.currentLocationPlotNums[1]-1][route.currentLocationPlotNums[0]].type === '2lane') {
                clearCanvas('canvasPedestrianLevel')
                route.direction = 'north';
            } 
        } else if (route.currentCoordinatesPixelsWithinPlot[0] === 0 ) { 
          l('cross')     
            route.currentCoordinatesPixelsWithinPlot[0] = 100;
            route.currentLocationPlotNums[0] --;
        }

    }

  return route;
}










































/*
function fnCarRoute(c, i, j) {
  // console.log('carroute')
  let route = aAnimation[i][j].pedestrianLevel.traffic.route;
  const road = aRoads[i][j];
  // if(road.type = '2lane' ) {}

  // Choose destination
  if(route.destination === []) {
    // route1.origin [1, 3]
    // chooseDestination()
    route.destination = [1, 3]
  }
  
     if(route.currentCoordinatesPixelsWithinCanvas[1] < (i*plot-80)) {
      // route.currentCoordinatesPixelsWithinCanvas[1] = i*plot;
//      route.direction = 'west'

    }
    movementX = 0;
    movementY = -1;

    route.currentCoordinatesPixelsWithinCanvas[1]--;



  } else if(route.direction === 'east') {
    movementX = +1;
    movementY = 0;
    route.currentCoordinatesPixelsWithinCanvas[0] ++;
  } else if(route.direction === 'south') {
    movementX = 0;
    movementY = +1;
    route.currentCoordinatesPixelsWithinCanvas[1] ++;
  } else if(route.direction === 'west') {
    movementX = -1;
    movementY = 0;
    route.currentCoordinatesPixelsWithinCanvas[0] --;
  }
//  console.log('route = ', route)
  vehicleFamilyCar1(c, 
    route.currentCoordinatesPixelsWithinCanvas[0] + movementX, 
    route.currentCoordinatesPixelsWithinCanvas[1] + movementY, 
    //route.currentCoordinatesPixelsWithinPlot[0] + (route.currentLocationPlotNums[0]*plot) + movementX, 
    //route.currentCoordinatesPixelsWithinPlot[1] + (route.currentLocationPlotNums[1]*plot) + movementY, 
    route.color, 
    route.direction
  );
  
  // Only store once a minute for performance reasons  
  // if(second % 10 == 0) {    // if(second === 0) {      // storeGameState();  } 
}


// Return coordinates for start and endpoints of new route
// function chooseDestination() {
//   return [[1, 2], [8, 6]];
// }


  route.currentLocationPlotNums = [1, 1];
  return route;
}
*/