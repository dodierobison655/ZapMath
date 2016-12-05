var select = function(){
	document.getElementById("addstart").style.visibility='visible';
	document.getElementById("substart").style.visibility='visible';
	document.getElementById("divstart").style.visibility='visible';
	document.getElementById("multstart").style.visibility='visible';
	document.getElementById("start").style.visibility='hidden';
}
var addGame = function(){
	document.getElementById("add").style.visibility = 'visible';
	Gamestrt();
}
var subGame = function(){
	document.getElementById("sub").style.visibility = 'visible';
	Gamestrt();
}
var divGame = function(){
	document.getElementById("divy").style.visibility = 'visible';
	Gamestrt();
}
var multGame = function(){
	document.getElementById("mult").style.visibility = 'visible';
	Gamestrt();
}
var Gamestrt = function(){
	document.getElementById("start").style.visibility='hidden';
	document.getElementById("addstart").style.visibility='hidden';
	document.getElementById("substart").style.visibility='hidden';
	document.getElementById("divstart").style.visibility='hidden';
	document.getElementById("multstart").style.visibility='hidden';
	document.getElementById("leftnum").style.visibility = 'visible';
	document.getElementById("rightnum").style.visibility = 'visible';
	document.getElementById("equals").style.visibility = 'visible';
	document.getElementById("answer").style.visibility = 'visible';
	document.getElementById("timer").style.visibility = 'visible';
	document.getElementById("time").style.visibility = 'visible';
	document.getElementById("points").style.visibility = 'visible';
	document.getElementById("pp").style.visibility = 'visible';
	onStart();
}
var mute = document.getElementById("muteicon");
var unmute = document.getElementById("unmuteicon")
var toggleSound = function(){
	if(document.getElementById("bgaudio").muted == true){
		mute.style.visibility = 'hidden';
		unmute.style.visibility = 'visible';
		document.getElementById("bgaudio").muted = false;
	} else {
		unmute.style.visibility = 'hidden';
		mute.style.visibility = 'visible';
		document.getElementById("bgaudio").muted = true;
	}
}
