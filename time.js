
  //════════╡ IMPORTED TIME ╞══════════════════════════════════════════════════
  // TODO make gametime hour pas by in 60 rl seconds... +add pauze button
  var second = 0;
  var totalSeconds = 0;
  function startTime() {
    var today = new Date();
    today.setFullYear(2127, 5, 29)
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // For moving animations
    second = s;
    totalSeconds ++
    m = addZeroIfBelow10(m);
    s = addZeroIfBelow10(s);
    const eTime = document.getElementById('time');
    if(eTime) eTime.innerHTML =
    // h + ":" + m + ":" + s;
    h + ":" + m;
    const eDate = document.getElementById('date');
    if(eDate) eDate.innerHTML =

    // checkDay(today, day) + " " + checkMonth(month) + " " + day + checkDayOrdinals(day) + " " + year;
    // day + checkDayOrdinals(day) + " " + checkMonth(month) + " " + year;
    day + "/" + month + "/" + year;
//    console.log(second)
    setTimeout(startTime, 1000);
  }
  checkMonth = month => {
    arrMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return arrMonths[month];
  }
  checkDay = (today) => {
    arrDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return arrDays[today.getDay()];
  }
  checkDayOrdinals = (day) => {
    return (day % 10 == 1 && day != 11 ? 'st' : (day % 10 == 2 && day != 12 ? 'nd' : (day % 10 == 3 && day != 13 ? 'rd' : 'th'))); 
  }
  function addZeroIfBelow10(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  startTime();
  //══════╡ END IMPORTED TIME ╞══════════════════════════════════════════════
