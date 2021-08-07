


let route = {
  origin: [1, 1],
  destination: [],
  currentLocation: [1, 1],
  currentCoordinatesPixels: [100, 100],
  currentCoordinatesPixelsWithinPlot: [16, 24],
  direction: 'south',
  arrived: false,    
  color: '#777'
}


function fnCarRoute(c, i, j) {
  // console.log('hoi')

  route = followTheRoad(route, route.currentLocation[0], route.currentLocation[1]);

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
    // route.currentCoordinatesPixels[0] + movementX, 
    // route.currentCoordinatesPixels[1] + movementY, 
    route.currentCoordinatesPixelsWithinPlot[0] + (route.currentLocation[0]*plot) + movementX, 
    route.currentCoordinatesPixelsWithinPlot[1] + (route.currentLocation[1]*plot) + movementY, 
    route.color, 
    route.direction
  );
}


function followTheRoad(route, i, j) {
  if(route.direction === 'north') {
    if(route.currentCoordinatesPixelsWithinPlot[1] < 17 &&
      aRoads[route.currentLocation[1]-1][route.currentLocation[0]].type !== '2lane') {
        clearCanvas('canvasPedestrianLevel')
        route.direction = 'west';
    } else if ( route.currentCoordinatesPixelsWithinPlot[1] === 0 ) {      
      route.currentCoordinatesPixelsWithinPlot[1] = 104;
      route.currentLocation[1] --;
    }
                        // console.log('hoi', aRoads[i][j-1])
                      //   console.log('hoi', route)
                      /*
                          if( aRoads[i][j-2].type !== '2lane' ) {
                            route.direction = 'east'
                          } else {
                            route.direction = 'north'
                          }
                      */
                      // route.color = 'black';
  } else if(route.direction === 'east') {
    if(route.currentCoordinatesPixelsWithinPlot[0] > 77 &&
      aRoads[route.currentLocation[1]][route.currentLocation[0]+1].type !== '2lane') {
        clearCanvas('canvasPedestrianLevel')
        route.direction = 'north';
    } else if ( route.currentCoordinatesPixelsWithinPlot[0] === 100 ) {      
      route.currentCoordinatesPixelsWithinPlot[0] = 0;
      route.currentLocation[0] ++;
    }      
  } else if(route.direction === 'south') {
    if(route.currentCoordinatesPixelsWithinPlot[1] > 77 &&
      aRoads[route.currentLocation[1]+1][route.currentLocation[0]].type !== '2lane') {
        clearCanvas('canvasPedestrianLevel')
        route.direction = 'east';
    } else if ( route.currentCoordinatesPixelsWithinPlot[1] === 100 ) {      
      route.currentCoordinatesPixelsWithinPlot[1] = 0;
      route.currentLocation[1] ++;
    }
  } else if(route.direction === 'west') {
    if(route.currentCoordinatesPixelsWithinPlot[0] < 17 &&
      aRoads[route.currentLocation[1]][route.currentLocation[0]-1].type !== '2lane') {
        clearCanvas('canvasPedestrianLevel')
        route.direction = 'south';
    } else if ( route.currentCoordinatesPixelsWithinPlot[0] === 0 ) {      
      route.currentCoordinatesPixelsWithinPlot[0] = 100;
      route.currentLocation[0] --;
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
  
  
  let currentCoordinatesPixels = route.currentCoordinatesPixels;
  // console.log('curr = ', currentCoordinates)
  if (currentCoordinatesPixels.length === 0) {
    // console.log('leeg')
    // currentCoordinates = [plot*j, plot*i];
    // route.currentCoordinates = currentCoordinates;
  }
//  console.log('hier = ',aAnimation[i][j].pedestrianLevel.traffic.route.currentCoordinatesPixels )

// route.color = followTheRoad(route, i, j);
//  if(route.currentCoordinatesPixels[0] > 0 && route.currentCoordinatesPixels[1] > 0) {
    route = followTheRoad(route, i, j);
  //}

  let movementX = 0;
  let movementY = 0;
  if(route.direction === 'north') {


    if(route.currentCoordinatesPixels[1] < (i*plot-80)) {
      // route.currentCoordinatesPixels[1] = i*plot;
//      route.direction = 'west'

    }
    movementX = 0;
    movementY = -1;

    route.currentCoordinatesPixels[1]--;



  } else if(route.direction === 'east') {
    movementX = +1;
    movementY = 0;
    route.currentCoordinatesPixels[0] ++;
  } else if(route.direction === 'south') {
    movementX = 0;
    movementY = +1;
    route.currentCoordinatesPixels[1] ++;
  } else if(route.direction === 'west') {
    movementX = -1;
    movementY = 0;
    route.currentCoordinatesPixels[0] --;
  }
//  console.log('route = ', route)
  vehicleFamilyCar1(c, 
    route.currentCoordinatesPixels[0] + movementX, 
    route.currentCoordinatesPixels[1] + movementY, 
    //route.currentCoordinatesPixelsWithinPlot[0] + (route.currentLocation[0]*plot) + movementX, 
    //route.currentCoordinatesPixelsWithinPlot[1] + (route.currentLocation[1]*plot) + movementY, 
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


function followTheRoad(route, i, j) {
  if(route.direction === 'north') {
    // console.log('hoi', aRoads[i][j-1])
 //   console.log('hoi', route)
    if( aRoads[i][j-2].type !== '2lane' ) {
      route.direction = 'east'
    } else {
      route.direction = 'north'
    }
    // route.color = 'black';
  } else if(route.direction === 'east') {
    // route.color = 'red';
  } else if(route.direction === 'south') {
    // route.color = 'yellow';
  } else if(route.direction === 'west') {
    // route.color = 'green';
  }

  route.currentLocation = [1, 1];
  return route;
}
*/