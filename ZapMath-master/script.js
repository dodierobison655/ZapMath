var points = 0;
var count = 0;
var timeLeft = 60;
var getRand = function(){
	return Math.floor(Math.random()*(95)+5);
}
var getRand1 = function(){
	return Math.floor(Math.random()*(95)+5);
}
var getRand2 = function(){
	return Math.floor(Math.random()*(8)+2);
}
var onStart = function(){
	if(count<1){
		if(document.getElementById("sub").style.visibility == 'visible' || document.getElementById("add").style.visibility == 'visible'){
			document.getElementById("leftnum").innerHTML = getRand();
			document.getElementById("rightnum").innerHTML = getRand();
			document.getElementById("time").innerHTML = timeLeft;
			setInterval(timer, 1000);
			count++;
		} else {
			document.getElementById("leftnum").innerHTML = getRand1();
			document.getElementById("rightnum").innerHTML = getRand2();
			document.getElementById("time").innerHTML = timeLeft;
			setInterval(timer, 1000);
			count++;
		}
		if(document.getElementById("divy").style.visibility == 'visible'){
			document.getElementById("round").style.visibility = 'visible';
		}
	}
}
var timer = function(){
	timeLeft -= 1;
	if(timeLeft <= 0){
		if(points<0){
			document.getElementById("finalpoints").style.color = 'red';
		}
		document.getElementById("finalpoints").innerHTML = points;
		document.getElementById("finalscore").style.visibility = 'visible';
		document.getElementById("finalpoints").style.visibility = 'visible';
		document.getElementById("gmovr").style.visibility = 'visible';
		document.getElementById("playagain").style.visibility = 'visible';
		document.getElementById("leftnum").style.visibility = 'hidden';
		document.getElementById("add").style.visibility = 'hidden';
		document.getElementById("sub").style.visibility = 'hidden';
		document.getElementById("mult").style.visibility = 'hidden';
		document.getElementById("divy").style.visibility = 'hidden';
		document.getElementById("rightnum").style.visibility = 'hidden';
		document.getElementById("equals").style.visibility = 'hidden';
		document.getElementById("answer").style.visibility = 'hidden';
		document.getElementById("timer").style.visibility = 'hidden';
		document.getElementById("time").style.visibility = 'hidden';
		document.getElementById("points").style.visibility = 'hidden';
		document.getElementById("pp").style.visibility = 'hidden';
		document.getElementById("round").style.visibility = 'hidden';
	}
	document.getElementById("time").innerHTML = timeLeft;
}