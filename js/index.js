$(document).ready(function() {
	// fire function at start and then every 10s;
	illuminate();
	setInterval(illuminate, 10 * 1000); // 10 * 1000 milsec
});

function illuminate() {
	// determine current time
	var currentdate = new Date();
	var hours = currentdate.getHours();
	var minutes = currentdate.getMinutes();
	
	// reset all illumination
	$(".digit").css("color","#404040")
	// start illuminating
	$(".it").css("color", "white");
	$(".is").css("color", "white");


	// determine AM/PM case
	if (hours < 12) {
		$(".am").css("color", "white");
	} else {
		$(".pm").css("color", "white");
	}

	var past = false;
	if (minutes > 32) {
		past = true;
	}

	// determine the hour which is to be illuminated
	hoursDisplay = hours;
	if (hoursDisplay > 12) {
		hoursDisplay -= 12;
	}
	if (hoursDisplay == 0){
		hoursDisplay = 12;
	}
	if (past) {
		hoursDisplay += 1;
	}
	var hourDict = [
		".one",
		".two",
		".three",
		".four",
		".five",
		".six",
		".seven",
		".eight",
		".nine",
		".ten",
		".eleven",
		".twelve",
		".one"
	];
	$(hourDict[hoursDisplay - 1]).css("color", "white");
	// determine minute relevant text to be illuminated
	var arr = [];
	if (minutes > 57 || minutes < 3) {
		arr = [".oclock"];
	} else if (3 <= minutes && minutes <= 7) {
		arr = [".five2", ".past"];
	} else if (8 <= minutes && minutes<= 12) {
		arr = [".ten2", ".past"];
	} else if (13 <= minutes && minutes<= 17) {
		arr = [".quarter", ".past"];
	} else if (18 <= minutes && minutes<= 22) {
		arr = [".twenty", ".past"];
	} else if (23 <= minutes && minutes<= 27) {
		arr = [".twentyfive", ".past"];
	} else if (28 <= minutes && minutes<= 32) {
		arr = [".half", ".past"];
	} else if (33 <= minutes && minutes<= 37) {
		arr = [".twentyfive", ".to"];
	} else if (38 <= minutes && minutes<= 42) {
		arr = [".twenty", ".to"];
	} else if (43 <= minutes && minutes<= 47) {
		arr = [".quarter", ".to"];
	} else if (48 <= minutes && minutes <= 52) {
		arr = [".ten2", ".to"];
	} else  {
		arr = [".five2", ".to"];
	}
	
	for (var i = 0; i < arr.length; i++) {
    	$(arr[i]).css("color", "white");
}
	
}