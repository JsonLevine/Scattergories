var players = [];
var gameInProgress = false;
var timerRunning = false;

function hideScore() {
	document.getElementById("visibleScores").style.display="none"
	document.getElementById("showScoreButton").style.display="block"
}

function displayScore() {
	document.getElementById("visibleScores").style.display="block"
	document.getElementById("showScoreButton").style.display="none"
}

function startGame() {
	document.getElementById("game").style.display="block"
	document.getElementById("endTimerButton").style.display="block"
	listNames()
	listNumber()
	generateLetter()
	getListPicture()
	startTimer()
	showScore()
}

function stopTimer() { 
	timerRunning = false;
	document.getElementById("endTimerButton").style.display="none"
	document.getElementById("restartButton").style.display="block";
}

function restartGame() {
	document.getElementById("game").style.display="block"
	document.getElementById("endTimerButton").style.display="block"
	document.getElementById("restartButton").style.display="none";
	listNames()
	listNextNumber()
	generateLetter()
	getListPicture()
	startTimer()
}

function listNames() {
	var simpleText = document.getElementById("namesEntry").value;
	var namesSeparated = simpleText.split(',');
	players = simpleText.split(',');
	shuffleArray(namesSeparated);
	for (var i = namesSeparated.length - 1; i > 0; i--) {
		namesSeparated[i] = " " + namesSeparated[i]
	}
	document.getElementById("namesList").innerHTML = namesSeparated;
}

function showScore() {
	if (!gameInProgress) {
		for (var i = players.length - 1; i >= 0; i--) {
			playerlist = "<li class='playerItem'>" + players[i] + ":  " + "<input type='number' value='0' class='playerScore'></input>" + "</li>";
			document.getElementById("playerList").innerHTML += playerlist;
		}
	}
	gameInProgress = true;
}

function listNumber() {
	document.getElementById("roundListNumber").innerHTML = document.getElementById("listNumber").value;
}

function listNextNumber() {
	var nextRound = Number(document.getElementById("listNumber").value)
	if(nextRound == 12) {
		nextRound = 1;
	}
	else {
		nextRound ++;
	}
	nextRound.toString();

	document.getElementById("listNumber").value = nextRound;
	document.getElementById("roundListNumber").innerHTML = nextRound;
}

function generateLetter() {
	var alphabet = "A as in Alpha,B as in Bravo,C as in Charlie,D as in Delta,E as in Echo,F as in Foxtrot,G as in Golf,H as in Hotel,I as in India,J as in Juliet,K as in Kilo,L as in Lima,M as in Mike,N as in November,O as in Oscar,P as in Papa,Q as in Quebec,R as in Romeo,S as in Sierra,T as in Tango,U as in Uniform,V as in Victor,W as in Whiskey,X as in X-ray,Y as in Yankee,Z as in Zulu"
	var easyAlphabet = "A as in Alpha,B as in Bravo,C as in Charlie,D as in Delta,E as in Echo,F as in Foxtrot,G as in Golf,H as in Hotel,I as in India,L as in Lima,M as in Mike,N as in November,P as in Papa,R as in Romeo,S as in Sierra,T as in Tango"
	var selection = document.getElementById("letterOptions").value;
	if(selection == "easy") {
		var alphabetSeparated = easyAlphabet.split(',');
		shuffleArray(alphabetSeparated);
		var randomLetter = alphabetSeparated[0]
		document.getElementById("roundLetter").innerHTML = randomLetter;
	}
	else {
		var alphabetSeparated = alphabet.split(',');
		shuffleArray(alphabetSeparated);
		var randomLetter = alphabetSeparated[0]
		document.getElementById("roundLetter").innerHTML = randomLetter;
	}
}

function getListPicture() {
	//Delete current picture
	document.getElementById("list1").style.display="none"
	document.getElementById("list2").style.display="none"
	document.getElementById("list3").style.display="none"
	document.getElementById("list4").style.display="none"
	document.getElementById("list5").style.display="none"
	document.getElementById("list6").style.display="none"
	document.getElementById("list7").style.display="none"
	document.getElementById("list8").style.display="none"
	document.getElementById("list9").style.display="none"
	document.getElementById("list10").style.display="none"
	document.getElementById("list11").style.display="none"
	document.getElementById("list12").style.display="none"

	var listNumber = document.getElementById("listNumber").value;
	switch (listNumber) {
		case "1": {document.getElementById("list1").style.display="block"};break;
		case "2": {document.getElementById("list2").style.display="block"};break;
		case "3": {document.getElementById("list3").style.display="block"};break;
		case "4": {document.getElementById("list4").style.display="block"};break;
		case "5": {document.getElementById("list5").style.display="block"};break;
		case "6": {document.getElementById("list6").style.display="block"};break;
		case "7": {document.getElementById("list7").style.display="block"};break;
		case "8": {document.getElementById("list8").style.display="block"};break;
		case "9": {document.getElementById("list9").style.display="block"};break;
		case "10": {document.getElementById("list10").style.display="block"};break;
		case "11": {document.getElementById("list11").style.display="block"};break;
		case "12": {document.getElementById("list12").style.display="block"};break;
	}
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function startTimer() {
	var timeLimit = document.getElementById("timeLimit").value * 1000;
	var count = 0;
	timerRunning = true;
	// Update the count down every 1 second
	var x = setInterval(function() {
	  // Find the time remaining
	  var remaining = timeLimit - (count*1000);

	  // Time calculations for days, hours, minutes and seconds
	  var seconds = Math.floor(remaining / 1000);
	    
	  // Output the result in an element with id="demo"
	  document.getElementById("timer").innerHTML = seconds + " seconds";
	  document.getElementById("timerCopy").innerHTML = seconds + " seconds";
	    
	  if (!timerRunning) {
	  	document.getElementById("timer").innerHTML = "ROUND ENDED";
	  	document.getElementById("timerCopy").innerHTML = "ROUND ENDED";
	  	clearInterval(x);
	  }
	  // If the count down is over, write some text 
	  if (remaining < 1) {
	    clearInterval(x);
	    document.getElementById("timer").innerHTML = "TIME IS UP";
	    document.getElementById("timerCopy").innerHTML = "TIME IS UP";
	   	document.getElementById("endTimerButton").style.display="none"
	    document.getElementById("restartButton").style.display="block";
	  }
	 count++;
	}, 1000);
}