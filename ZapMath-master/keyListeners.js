window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;
	if(key == 38){
		Number(document.getElementById("answer").value) += 1;
	}
	if(key == 40){
		Number(document.getElementById("answer").value) -= 1;
	}
	if(key == 13){
		var num1 = document.getElementById("leftnum").innerHTML;
		var num2 = document.getElementById("rightnum").innerHTML;
		var answernum = document.getElementById("answer").value;
		console.log(num1);
		console.log(num2);
		console.log(answernum);
		if(document.getElementById("add").style.visibility == 'visible'){
			if(Number(num1) + Number(num2) == Number(answernum)){
			points += 10;
			timeLeft += 2;
			document.getElementById("leftnum").innerHTML = getRand();
			document.getElementById("rightnum").innerHTML = getRand();
			console.log(points);
			} else {
			points -= 5;
			//console.log(points);
			}
		}
		if(document.getElementById("sub").style.visibility == 'visible'){
			if(Number(num1) - Number(num2) == Number(answernum)){
			points += 10;
			timeLeft += 2;
			document.getElementById("leftnum").innerHTML = getRand();
			document.getElementById("rightnum").innerHTML = getRand();
			console.log(points);
			} else {
			points -= 5;
			//console.log(points);
			}
		}
		if(document.getElementById("divy").style.visibility == 'visible'){
			if(Math.round(Number(num1) / Number(num2)) == Number(answernum)){
			points += 10;
			timeLeft += 2;
			document.getElementById("leftnum").innerHTML = getRand1();
			document.getElementById("rightnum").innerHTML = getRand2();
			console.log(points);
			} else {
			points -= 5;
			//console.log(points);
			}
		}
		if(document.getElementById("mult").style.visibility == 'visible'){
			if(Number(num1) * Number(num2) == Number(answernum)){
			points += 10;
			timeLeft += 2;
			document.getElementById("leftnum").innerHTML = getRand1();
			document.getElementById("rightnum").innerHTML = getRand2();
			console.log(points);
			} else {
			points -= 5;
			//console.log(points);
			}
		}
		document.getElementById("points").innerHTML = points;
		document.getElementById("answer").value = ""; 
	}
}