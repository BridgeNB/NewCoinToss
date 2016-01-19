

var inputing = false;
var temResult = "";
var results = [];
var n;
var option;
var userChose;
var reporterChose;
var judgement = "";
var min = 4;
var max = 1000;
var final_judgement;

// Change Image Visibility
function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

// Get system time 
function addZero(x,n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}

function myFunction() {
    var systemTime = "";
    var d = new Date();
    var x = document.getElementById("demo");
    var h = addZero(d.getHours(), 2);
    var m = addZero(d.getMinutes(), 2);
    var s = addZero(d.getSeconds(), 2);
    var ms = addZero(d.getMilliseconds(), 3);
    systemTime = h + ":" + m + ":" + s + ":" + ms;
    return systemTime;
}

// Get system date

function mySystemDate() {
  var todayDate = "";

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  todayDate = mm + "" + dd + "" + yyyy;

  return todayDate;
}


// Obtain value from html drop down lsit

function readDropdown() {
  var option = document.getElementById("Mode Selection").value;
}

// Start to loop
var show_1 = function show_1() {
  // Set initial image unvisible
  setImageVisible('left',  false);
  setImageVisible('right', false);

  $('.content').text('Tossing Coin');
  var time = 3000 + Math.random() * (max - min) + min;

  setTimeout(show_2, time);
};

var show_2 = function show_2() {
  $('.content').text('Showing Outcome to the Reporter');
  var time = 5000 + Math.random() * (max - min) + min;

  setTimeout(show_3, time);
};

var show_3 = function show_3() {
  $('.content').text('The Reporter Says ....');
  setTimeout(show_4, 1000);
};

var show_4 = function show_4() {
  $('.content').text('');
  setTimeout(show_5, 500);
};

var show_5 = function show_5() {
// Time + content !!!
  var oneOrZero = Math.random() * 100;

  if (oneOrZero > 50) {
    $('.content').text('HEADS');
    reporterChose = 0;
  } else {
    $('.content').text('TAILS');
    reporterChose = 1;
  }

  // find the current result
  var systemTime = myFunction();
  var todayDate = mySystemDate();
  // second the show_5 window time
  temResult += todayDate + "_" + systemTime;

  setTimeout(show_6, 500);
};

var show_6 = function show_6() {
  $('.content').text('Your Guess?');
  setTimeout(show_7, 500);
};

var show_7 = function show_7() {
  $('.content').text('HEADS       TAILS');
  inputing = true;
  setImageVisible('left',true);
  setImageVisible('right',true);

  setTimeout(function() {show_8(final_judgement)}, 4500);
};

var show_8 = function show_8(judgement) {
  // inputing = false;
  setImageVisible('left', false);
  setImageVisible('right', false);
  $('.content').text(judgement);
  setTimeout(show_1, 1000);
}

$(document).keydown(function (e) {

  if (!inputing) {
    return;
  }
  inputing = false;
  switch (e.which) {
    // Time!!!
    case 37:
      // left
      temResult += '\t' + 'HEADS';
      // reporter catch left signal
      userChose = 0;
      break;

    case 39:
      // right
      temResult += '\t' + 'TAILS';
      // reporter catch right signal
      userChose = 1;
      break;

    default:
      return;
  }
  e.preventDefault();

  // find the current time
  var systemTime = myFunction();
  var todayDate = mySystemDate();
  // second the show_5 window time
  temResult += " " + todayDate + "_" + systemTime;

  // Add final result
  if (option == 0) {
    // group 1 mode

    if (n > 140 && n <= 180) {
      result = common(temResult);
       if (n == 141) {
        // pause for two minutes
       }
    }

    if (n > 100 && n <= 140) {
      result = confilcting(temResult);
      if (n == 101) {
        // pause for two minutes
      }
    }

    if (n > 80 && n <= 100) {
      result = common(temResult);
    }

    if (n > 58 && n <= 80) {
      result = confilcting(temResult);
    }

    if (n > 41 && n <= 58) {
      result = common(temResult);
    }

    if (n > 16 && n <= 41) {
      result = confilcting(temResult);
    }

    if (n > 0 && n <= 16) {
      result = common(temResult);
    }

  } else {
    // group 2 mode

    if (n > 140 && n <= 180) {
      result = confilcting(temResult);
      if (n == 141) {
        // pause for two minutes
      }
    }

    if (n > 100 && n <= 140) {
      result = common(temResult);
      if (n == 101) {
        // pause for two minutes
      }
    }

    if (n > 80 && n <= 100) {
      result = confilcting(temResult);
    }

    if (n > 58 && n <= 80) {
      result = common(temResult);
    }

    if (n > 41 && n <= 58) {
      result = confilcting(temResult);
    }

    if (n > 16 && n <= 41) {
      result = common(temResult);
    }

    if (n > 0 && n <= 16) {
      result = confilcting(temResult);
    }
    
  }

  results.push(result[0]);
  console.log(result[0]);
  final_judgement = result[1]

  // reset temResult
  temResult = "";

  // showing result
  // setImageVisible('left', false);
  // setImageVisible('right', false);
  // setInterval(function(){$('.content').text(result[1]);}, 1000);
  // console.log(result[1]);
  // $('.content').text(result[1]);

  n--;
  if (n > 0) {
    // console.log("Here it is");
    // setTimeout(show_1(), 1000);
    show_1();
  } else {
    save_result();
  }
});

var common = function common(temResult) {
    // common mode; push reporter choice
    // return 0 temResult, 1 judgement
    if (reporterChose == 0) {
      // Both user and reporter select heads
      temResult +=  '\t' + 'HEADS';
    } else{
      temResult += '\t' +  'TAILS';
    }

    if (reporterChose == userChose) {
      judgement = "Correct!";
    } else {
      judgement = "Incorrect!";
    }

    temResult += '\t' + judgement;

    return [temResult, judgement];
}

var confilcting = function confilcting(temResult) {

    // confilcting mode
    // return 0 temResult, 1 judgement
    var ranConfilcting = Math.random();
    // console.log(ranConfilcting);

    if (ranConfilcting > 0 && ranConfilcting < 0.5) {
      // reporter is correct
      if (reporterChose == 0) {
        // Both user and reporter select heads
        
        temResult +=  '\t' + 'HEADS';
      } else {
        
        temResult +=  '\t' + 'TAILS';
      }

      if (reporterChose == userChose) {
        judgement = "Correct!";
      } else {
        judgement = "Incorrect!";
      }

      temResult +=  '\t' + judgement;
      
    } else {
      // reporter is incorrect
      if (reporterChose == 0) {
        // Both user and reporter select heads
        
        temResult +=  '\t' + 'HEADS';
      } else {
        
        temResult += '\t' +  'TAILS';
      }

      if (reporterChose != userChose) {
        judgement = "Correct!";
      } else {
        judgement = "Incorrect!";
      } 

      temResult +=  '\t' + judgement;
      
    }

    return [temResult, judgement];
}

$('#start').click(function (event) {
  event.preventDefault();
  // n = $("#ri").val();
  n = 180;
  option = $("#modeSelection").val();
  console.log(option);
  show_1();
});

var save_result = function save_result() {
  var textToWrite = results.join('\n');
  var blob = new Blob([textToWrite], { type: 'text/plain' });
  saveAs(blob, "results.txt");
};







