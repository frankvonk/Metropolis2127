
const gridOverlayAutoloader = () => {
  const gridOverlay = document.getElementById('gridOverlay');
  for(rowCounter=0; rowCounter <= nNumPlots; rowCounter++) {
    const row = document.createElement('div');
    row.className = 'row';
    for(cellCounter=0; cellCounter <= nNumPlots; cellCounter++) {
      const cell = document.createElement('canvas');
      cell.id = 'r' + padNum(rowCounter) + 'c' + padNum(cellCounter);
      cell.classList = 'cell';
      row.appendChild(cell); 
    }
    gridOverlay.appendChild(row)
  }
}  

function padNum(num) {
  return num < 10 ? '0' + num : num;
}
