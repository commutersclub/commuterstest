//Calculate Tip
function calculateTip() {
	var people = document.getElementById('peopleamt').value;

	var level0 = '눈 깜짝하면 도착하는';
	var level1 = '늦게 일어나면 아침밥은 없는';
	var level2 = '만원 지하철에 신경이 곤두서 있는';
	var level3 = '빠른환승 쯤은 외워두고 있는';
	var level4 = '호시탐탐 빈자리를 노리는';
	var level5 = '푹 자도 도착할때쯤 일어나는';
	var level6 = '본투비 프론트패커';

	var mlevel0 = '타조형 커뮤터';
	var mlevel1 = '쿼카형 커뮤터';
	var mlevel2 = '고슴도치형 커뮤터';
	var mlevel3 = '돌고래형 커뮤터';
	var mlevel4 = '악어형 커뮤터';
	var mlevel5 = '코알라형 커뮤터';
	var mlevel6 = '캥거루형 커뮤터';

	var plevel0 =
		'<img id="resultpic" src="https://ifh.cc/g/su695t.jpg" width="100%" height="100%"/>';
	var plevel1 =
		'<img id="resultpic" src="https://ifh.cc/g/qbsjFY.jpg" width="100%" height="100%"/>';
	var plevel2 =
		'<img id="resultpic" src="https://ifh.cc/g/cPhwZU.jpg" width="100%" height="100%"/>';
	var plevel3 =
		'<img id="resultpic" src="https://ifh.cc/g/zobKEB.jpg" width="100%" height="100%"/>';
	var plevel4 =
		'<img id="resultpic" src="https://ifh.cc/g/t8pnJw.jpg" width="100%" height="100%"/>';
	var plevel5 =
		'<img id="resultpic" src="https://ifh.cc/g/Ik0js7.jpg" width="100%" height="100%"/>';
	var plevel6 =
		'<img id="resultpic" src="https://ifh.cc/g/Abgjls.jpg" width="100%" height="100%"/>';

	//validate input
	if (people === '') {
		alert('편도 통학시간을 입력해주세요');
		return;
	}
	//Check to see if this input is empty or less than or equal to 1

	//Calculate tip
	var total = people * 44;
	//round to two decimal places

	//next line allows us to always have two digits
	//Display the tip

	if (total < 880) {
		document.getElementById('resultname').innerHTML = level0;
		document.getElementById('resultname2').innerHTML = mlevel0;
		document.getElementById('pic').innerHTML = plevel0;
	} else if (total < 1760) {
		document.getElementById('resultname').innerHTML = level1;
		document.getElementById('resultname2').innerHTML = mlevel1;
		document.getElementById('pic').innerHTML = plevel1;
	} else if (total < 2640) {
		document.getElementById('resultname').innerHTML = level2;
		document.getElementById('resultname2').innerHTML = mlevel2;
		document.getElementById('pic').innerHTML = plevel2;
	} else if (total < 3080) {
		document.getElementById('resultname').innerHTML = level3;
		document.getElementById('resultname2').innerHTML = mlevel3;
		document.getElementById('pic').innerHTML = plevel3;
	} else if (total < 3520) {
		document.getElementById('resultname').innerHTML = level4;
		document.getElementById('resultname2').innerHTML = mlevel4;
		document.getElementById('pic').innerHTML = plevel4;
	} else if (total < 4400) {
		document.getElementById('resultname').innerHTML = level5;
		document.getElementById('resultname2').innerHTML = mlevel5;
		document.getElementById('pic').innerHTML = plevel5;
	} else {
		document.getElementById('resultname').innerHTML = level6;
		document.getElementById('resultname2').innerHTML = mlevel6;
		document.getElementById('pic').innerHTML = plevel6;
	}

	var rplay1 = parseInt(total / 780);
	var rplay2 = parseInt(total / 200);
	var rplay3 = parseInt(total / 60);
	var rplay4 = parseInt(total / 3);
	var rplay5 = Number(parseInt((total / 60) * 9160 * 12)).toLocaleString();

	document.getElementById('play1').innerHTML = rplay1;
	document.getElementById('play2').innerHTML = rplay2;
	document.getElementById('play3').innerHTML = rplay3;
	document.getElementById('play4').innerHTML = rplay4;
	document.getElementById('play5').innerHTML = rplay5;

	document.getElementById('totalTip').style.display = 'block';
	document.getElementById('tip').innerHTML = total;
	document.getElementById('tip2').innerHTML = (total / 60).toFixed(0);
	document.getElementById('tip3').innerHTML = (total / 1440).toFixed(0);




}

//Hide the tip amount on load

document.getElementById('totalTip').style.display = 'none';

//click to call function
document.getElementById('calculate').onclick = function () {
	calculateTip();
};



document.documentElement.addEventListener('touchstart', function (event) {
     if (event.touches.length > 1) {
          event.preventDefault(); 
        } 
    }, false);

var lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
     var now = (new Date()).getTime();
     if (now - lastTouchEnd <= 300) {
          event.preventDefault(); 
        } lastTouchEnd = now; 
    }, false);