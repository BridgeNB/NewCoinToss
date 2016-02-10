var inputing = false;
var sTemtemResult = "";
var temResult = "";
var results = [];
var n;
var option;
var userChose;
var reporterChose;
var judgement = "";
var min = 4;
var max = 1000;
var final_judgement = "";

// Down timer
function Show_Countdown() {
    var counter = 120;
    var countDown_overlay = 'position:absolute;' +
        'top:50%;' +
        'left:50%;' +
        'background-color:white;' +
        'z-index:1002;' +
        'overflow:auto;' +
        'width:400px;' +
        'text-align:center;' +
        'height:100px;' +
        'margin-left:-200px;' +
        'margin-top:150px';

    $('body').append('<div id="overLay" style="' + countDown_overlay + '"><span id="time"></span></div>');
    $('body').append('<embed id = "bgMusic" src= music/backgroundMusic.mp3 autostart=true hidden=true volumn = 100%>');

    var timer = setInterval(function () {
        var timeShower = document.getElementById("time");

        timeShower.style.fontSize = "45px";
        timeShower.innerHTML = counter;
        counter = (counter - 1);

        if (counter < 0) 
        {
            
            clearInterval(timer);
            var elem = document.getElementById("overLay");
            elem.parentNode.removeChild(elem);

            var bgm = document.getElementById("bgMusic");
            bgm.parentNode.removeChild(bgm);
        }
    }, 1000);
}

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

function myFunction2() {
    var systemTime = "";
    var d = new Date();
    var x = document.getElementById("demo");
    var h = addZero(d.getHours(), 2);
    var m = addZero(d.getMinutes(), 2);
    var s = addZero(d.getSeconds(), 2);
    var ms = addZero(d.getMilliseconds(), 3);
    systemTime = h + ":" + m + ":" + (s+4) + ":" + ms;
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

// Add time stamp 2

function addTimeStamp2() {
  // add timestamp

  var systemTime = myFunction2();
  var todayDate = mySystemDate();
  // second the show_5 window time
  var sTemtemResult = todayDate + "_" + systemTime;

  temResult += '\t' + sTemtemResult + '\t';
}

// Obtain value from html drop down lsit

function readDropdown() {
  var option = document.getElementById("Mode Selection").value;
}

var fBreakResult1 = function fBreakResult1 (final_judgement) {
	setImageVisible('left',  false);
	setImageVisible('right', false);
	setImageVisible('leftPressed',  false);
	setImageVisible('rightPressed', false);
	
	if (userChose == -1) {
		final_judgement = "no choice!";
	}
	$('.content').text("Your choice was" + "\n" + final_judgement);

	setTimeout(fBreakResult2, 1300);
}

var fBreakResult2 = function fBreakResult2 () {
  // console.log("FUNK!!!!!!!");
	$('.content').text(" This session is over. \n Two minutes break!");
  
  Show_Countdown();

}

var show_00 = function show_00() {
  // Set initial image unvisible
  setImageVisible('left',  false);
  setImageVisible('right', false);
  setImageVisible('leftPressed',  false);
  setImageVisible('rightPressed', false);

  $('.content').text('');
  // var time = 3000 + Math.random() * (max - min) + min;
  var time = 1000;

  // // add timestamp

  // var systemTime = myFunction();
  // var todayDate = mySystemDate();
  // // second the show_5 window time
  // var sTemtemResult = todayDate + "_" + systemTime;

  // temResult += '\t' + sTemtemResult;

  setTimeout(show_0(final_judgement), time);

}

var show_0 = function show_0(final_judgement) {
  // Set initial image unvisible
  if (userChose == -1) {
    final_judgement = "no choice!";
  }

  $('.content').text("Your choice was" + "\n" + final_judgement);

  var time = 1300;
  
  setTimeout(show_1, time);

}

// Start to loop
var show_1 = function show_1() {
  // // Set initial image unvisible
  setImageVisible('left',  false);
  setImageVisible('right', false);
  setImageVisible('leftPressed',  false);
  setImageVisible('rightPressed', false);

  $('.content').text('Detecting Obstacle');
  // var time = 3000 + Math.random() * (max - min) + min;
  if (userChose != -1) {
    temResult += (155 - n + 1) + "\t";
  }

  var time = 1000;
  
  setTimeout(show_2, time);
};

var show_2 = function show_2() {
  $('.content').text('The outcome is...');
  // var time = 5000 + Math.random() * (max - min) + min;
  var time = 800;

  setTimeout(show_4, time);
};

var show_3 = function show_3() {
  $('.content').text('The Reporter Says ....');
  setTimeout(show_4, 1000);
};

var show_4 = function show_4() {
  $('.content').text('');
  setTimeout(show_5, 1000);
};

var show_5 = function show_5() {
// Time + content !!!
  var oneOrZero = Math.random() * 100;

  if (oneOrZero > 50) {
    $('.content').text('OBSTACLE DETECTED');
    reporterChose = 0;
  } else {
    $('.content').text('CLEAR ROAD');
    reporterChose = 1;
  }

  if (reporterChose == 1 || reporterChose == 0) {
      // find the current result
      var systemTime = myFunction();
      var todayDate = mySystemDate();
      // second the show_5 window time
      sTemtemResult = todayDate + "_" + systemTime;
  }   

  setTimeout(show_6, 1300);
};

var show_6 = function show_6() {
  $('.content').text('Your Choice?');
  setTimeout(show_7, 500);
};

var show_7 = function show_7() {
  $('.content').text('TRUST       DISTRUST');
  inputing = true;
  setImageVisible('left',true);
  setImageVisible('right',true);
  
  // 3 seconds option time
  n--;
  console.log('n is ' + n);
  
  if (n >= 0 && n != 125 && n != 100) {

    addTimeStamp2();
    setTimeout(show_00, 4000);
    

	  userChose = -1;

  } else if (n == 125) {
    // wait for two minutes
    addTimeStamp2();
    setTimeout(fBreakResult1(final_judgement), 4000);
    setTimeout(show_1, 4000 + 1300 + 120000);
    // save_result();///////////////
    userChose = -1;

  } else if (n == 100) {
    // wait for two minutes
    addTimeStamp2();
    setTimeout(fBreakResult1(final_judgement), 4000);
    setTimeout(show_1, 4000 + 1300 + 120000);
    userChose = -1;
    
  } else {
    save_result();
  }
};

var sPressTime = function sPressTime() {
// find the current time
  var systemTime = myFunction();
  var todayDate = mySystemDate();
  // second the show_5 window time
  var sPT = " " + todayDate + "_" + systemTime;
  return sPT;
}

$(document).keydown(function (e) {

  var iIfMadeChoice = false;

  // default: user has no input
  userChose = -1;

  if (!inputing) {
    return;
  }
  inputing = false;

  // user make the decision
  switch (e.which) {
    // Time!!!
    case 37:
      // left
      temResult += sTemtemResult;
      temResult += '\t' + 'TRUST';
      // reporter catch left signal
      userChose = 0;
      // change the color
      setImageVisible('left', false);
      setImageVisible('leftPressed', true)
      var spt = sPressTime();
      // temResult = sTemtemResult;
      temResult += spt;
      break;

    case 39:
      // right
      temResult += sTemtemResult;
      temResult += '\t' + 'DISTRUST';
      // reporter catch right signal
      userChose = 1;
      // change the color
      setImageVisible('right', false);
      setImageVisible('rightPressed', true)
      var spt = sPressTime();
      // console.log(spt);
      // temResult = sTemtemResult;
      temResult += spt;
      break;

    default:
      temResult += '\t' + 'NO RESPONSE';
      userChose = -1;
      return;
  }
  e.preventDefault();

  // // find the current time
  // var systemTime = myFunction();
  // var todayDate = mySystemDate();
  // // second the show_5 window time
  // temResult += " " + todayDate + "_" + systemTime;

  // Add final result
  if (option == 0) {
    // group 1 mode

    if (n > 125 && n <= 155) {
      result = common(temResult);
    }

    if (n > 100 && n <= 125) {
      result = confilcting(temResult);
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

    if (n > 125 && n <= 155) {
      result = confilcting(temResult);
    }

    if (n > 100 && n <= 130) {
      result = common(temResult);
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

  // if user did not chose, no result recorded
  if (result[1] == undefined) {
    result[0] = "";
  }
  console.log("result 0 is " + result[0]);
  results.push(result[0]);

  // results.push(result[0]);
  // console.log("judgement" + result[1]);
  final_judgement = result[1]
  console.log(result[1]);
  console.log(n);

  // reset temResult
  temResult = "";
  result = "";

});

var common = function common(temResult) {
    // userchose 0 TURST 1 DISTRUST
    // return 0 temResult, 1 judgement
    if (reporterChose == 0) {
      // Both user and reporter select heads
      temResult +=  '\t' + 'A' + '\t' + 'OBSTACLE DETECTED';
    } else{
      temResult += '\t' + 'A' + '\t' + 'CLEAR ROAD';
    }

    if (userChose == 0) {
        var sJudgement = "Correct!";
    } else {
        var sJudgement = "Incorrect!";
    }

    temResult += '\t' + sJudgement;
	
    return [temResult, sJudgement];
}

var confilcting = function confilcting(temResult) {

    // confilcting mode
    // return 0 temResult, 1 judgement
    var ranConfilcting = Math.random();
    
    if (reporterChose == 0) {
      // Both user and reporter select heads
      temResult += '\t' + 'B' + '\t' + 'OBSTACLE DETECTED';
    } else{
      temResult += '\t' + 'B' + '\t' + 'CLEAR ROAD';
    }

    if (ranConfilcting > 0 && ranConfilcting < 0.5) {
      var sJudgement = "Correct!";
    } else {
      var sJudgement = "Incorrect!";
    }

    temResult += '\t' + sJudgement;

    return [temResult, sJudgement];

}

$('#start').click(function (event) {
  event.preventDefault();
  // n = $("#ri").val();
  n = 155;
  option = $("#modeSelection").val();
  var modeInfo = "";
  if (option == 0) {
    modeInfo = "Group A";
  } else {
    modeInfo = "Group B";
  }
  results.push(modeInfo);
  console.log(option);
  show_1();
});

var save_result = function save_result() {
  var textToWrite = results.join('\n');
  var blob = new Blob([textToWrite], { type: 'text/plain' });
  saveAs(blob, "results.txt");
};







