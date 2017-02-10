	var NORA = 0;
	var a = prompt("25 + 4 * 2 = ");
	var b = prompt("x^2 - 6x + 9 = 0; x = ");
	var c = prompt("25/5");
	var d = prompt("7 * 8 / 2 * 4 - 12");
	var e = prompt("What means 'APM'");
	if(a == 33){
		NORA += 1;
	} 
	if(b == 3){
		NORA += 1;
	}
	if(c == 5){
		NORA += 1;
	}
	if(d == 100){
		NORA += 1;
	}
	if (e == 'Action Per Minute'){
		NORA += 1;
	}
	if (NORA >= 3){
		alert("Congratulations");
	} else {
		alert("Sorry");
	}
