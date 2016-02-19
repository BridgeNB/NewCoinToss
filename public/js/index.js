// This js document is for experiment animation

// Set primary database directory
var ref = new Firebase("https://torrid-inferno-4110.firebaseio.com");

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
var keyName;
var startTime; // Primary key for Json
var waitMiliseconds = 120000;

// Split Data storage
var group = []; // group A or B
var signal_show_time = []; // clear or obstacle show time
var signal = []; // clear or obstacle
var press_time = []; // press buttom time
var result_list = []; // Distrust or trust
var judgement = []; // correct or incorrect
var mode = []; // mode A or B

// Down timer
function Show_Countdown() {
    var counter = waitMiliseconds / 1000;
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

function primaryKeyRecord() {
  var systemTime = "";
  var d = new Date();
  var x = document.getElementById("demo");
  var h = addZero(d.getHours(), 2);
  var m = addZero(d.getMinutes(), 2);
  var s = addZero(d.getSeconds(), 2);
  var ms = addZero(d.getMilliseconds(), 3);
  systemTime = "" + h + m + s + ms;
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

// Obtain time value
var sPressTime = function sPressTime() {
// find the current time
  var systemTime = myFunction();
  var todayDate = mySystemDate();
  // second the show_5 window time
  var sPT = " " + todayDate + "_" + systemTime;
  return sPT;
};

// Hide all pictures
var hidePicture = function hidePicture () {
  setImageVisible('one',  false);
  setImageVisible('two', false);
  setImageVisible('three',  false);
  setImageVisible('four', false);
  setImageVisible('onePressed',  false);
  setImageVisible('twoPressed', false);
  setImageVisible('threePressed',  false);
  setImageVisible('fourPressed', false);
  // return;
}

var fBreakResult1 = function fBreakResult1 (final_judgement) {
  // hide all pictures
  hidePicture();

	if (userChose == -1) {
		final_judgement = "no choice!";
    signal_show_time.pop();
    console.log("singal show time" + signal_show_time);
	}

	$('.content').text("Your choice was" + "\n" + final_judgement);

	setTimeout(fBreakResult2, 1300);
}

var fBreakResult2 = function fBreakResult2 () {

  hidePicture();
  // console.log("FUNK!!!!!!!");
	$('.content').text(" This session is over. \n Two minutes break!");

  Show_Countdown();
}

var show_00 = function show_00() {
  // Set initial image unvisible
  hidePicture();

  $('.content').text('');

  var time = 1000;

  setTimeout(show_0(final_judgement), time);

}

var show_0 = function show_0(final_judgement) {
  // Set initial image unvisible
  if (userChose == -1) {
    final_judgement = "no choice!";
    signal_show_time.pop();
    console.log("singal show time" + signal_show_time);
  }

  $('.content').text("Your choice was" + "\n" + final_judgement);

  var time = 1300;

  setTimeout(show_1, time);

}

// Start to loop
var show_1 = function show_1() {
  // // Set initial image unvisible
  hidePicture();

  $('.content').text('Detecting Obstacle');

  if (n == 0) {
    hidePicture;
    $('.content').text('The experiment has ended.\n Thanks for your anticipation!');
    save_result();
    return;
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

  // Record object shown time
  var spt = sPressTime();
  signal_show_time.push(spt);
  setTimeout(show_6, 1300);
};

var show_6 = function show_6() {
  $('.content').text('Your Choice?');
  setTimeout(show_7, 500);
};

var show_7 = function show_7() {
  $('.content').text('1 TRUST\n2 SKEPTICAL BUT TRUST\n3 SKEPTICAL BUT DISTRUST\n4 DISTRUST');
  inputing = true;
  setImageVisible('one',true);
  setImageVisible('two',true);
  setImageVisible('three',true);
  setImageVisible('four',true);
  // 3 seconds option time
  console.log('n is ' + n);

  n--;
  if (n >= 0 && n != 153 && n != 100) {
    // addTimeStamp2();
    setTimeout(show_00, 4000);
	  userChose = -1;
  } else if (n == 153 || n == 100) {
    // wait for two minutes
    setTimeout(fBreakResult1(final_judgement), 4000);
    setTimeout(show_1, 4000 + 1300 + waitMiliseconds);
    userChose = -1;
  }

};

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
    case 49:
      // one
      result_list.push('TRUST'); // add trust or distrust
      // reporter catch left signal
      userChose = 0;
      // change the color
      hidePicture();
      setImageVisible('onePressed', true);
      // record press time
      var spt = sPressTime();
      press_time.push(spt); // add press time
      break;

    case 50:
      // two
      result_list.push('SKEPTICAL BUT TRUST');
      // reporter catch right signal
      userChose = 0;
      // change the color
      hidePicture();
      setImageVisible('twoPressed', true);
      // record press time
      var spt = sPressTime();
      press_time.push(spt);
      break;

    case 51:
      // three
      result_list.push('SKEPTICAL BUT DISTRUST');
      // reporter catch right signal
      userChose = 1;
      // change the color
      hidePicture();
      setImageVisible('threePressed', true);
      // record press time
      var spt = sPressTime();
      press_time.push(spt);
      break;

    case 52:
    // four
      result_list.push('DISTRUST');
      // reporter catch right signal
      userChose = 1;
      // change the color
      hidePicture();
      setImageVisible('fourPressed', true);
      // record press time
      var spt = sPressTime();
      press_time.push(spt);
      break;

    default:
      userChose = -1;
      // if there is no choice
      // signal_show_time.pop();
      // console.log("singal show time" + signal_show_time);

    return;
  }
  e.preventDefault();

  // Add final result
  n++;
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

  n--;
  // if user did not chose, no result recorded
  if (result[1] == undefined) {
    result[0] = "";
  }
  console.log("result 0 is " + result[0]);
  results.push(result[0]);

  final_judgement = result[1]

  // reset temResult
  temResult = "";
  result = "";

});

var common = function common(temResult) {
    // userchose 0 TURST 1 DISTRUST
    // return 0 temResult, 1 judgement
    if (reporterChose == 0) {
      // Both user and reporter select heads
      mode.push('A');
      signal.push('OBSTACLE DETECTED');
    } else{
      mode.push('A');
      signal.push('CLEAR ROAD');
    }

    if (userChose == 0) {
        var sJudgement = "Correct!";
    } else {
        var sJudgement = "Incorrect!";
    }

    judgement.push(sJudgement);

    return [temResult, sJudgement];
};

var confilcting = function confilcting(temResult) {

    var ranConfilcting = Math.random();

    if (reporterChose == 0) {
      // Both user and reporter select heads
      mode.push('B');
      signal.push('OBSTACLE DETECTED');
    } else{
      mode.push('B');
      signal.push('CLEAR ROAD');
    }

    if (ranConfilcting > 0 && ranConfilcting < 0.5) {
      var sJudgement = "Correct!";
    } else {
      var sJudgement = "Incorrect!";
    }

    judgement.push(sJudgement);

    return [temResult, sJudgement];
};

$('#start').click(function (event) {
  event.preventDefault();
  // n = $("#ri").val();
  n = 155;
  option = $("#modeSelection").val();

    var modeInfo = "";

    // Obtain group info
    if (option == 0) {
    modeInfo = "Group A";
    } else {
    modeInfo = "Group B";
    }
    group.push(modeInfo);

    // Set up primary key
    var d = new Date();
    startTime = d.getTime();

    console.log("start " + startTime);

    console.log(option);
    show_1();
});

var save_result = function save_result() {

  var textToWrite = results.join('\n');

  // Construct Json data structure
  var json = {};

  json[startTime] = {}

  json[startTime]["signal_show_time"] = signal_show_time;
  json[startTime]["signal"] = signal;
  json[startTime]["press_time"] = press_time;
  json[startTime]["result_list"] = result_list;
  json[startTime]["judgement"] = judgement;
  json[startTime]["mode"] = mode;

  // Update to dataBase
  ref.update(json);
};
