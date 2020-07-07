


const gridOverlayAutoloader = () => {
  console.log("gridOverlayAutoloader called");
  

  // Create overlaying divs for mouseDetection
  const row = document.createElement('div');
  row.className = 'row';
  const tn = document.createTextNode('');
  row.appendChild(tn)
  row.innerHTML = 'kut';
  const test = document.getElementById('test');
  console.log('?',test);
  
  //  gridOverlaytest.appendChild(row);
}  

