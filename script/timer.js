// reference from google(jQuery)


// function makeTimer() {

//      		var endTime = new Date("17 August 2023 24:59:59 GMT+01:00");			
// 			endTime = (Date.parse(endTime) / 1000);

// 			var now = new Date();
// 			now = (Date.parse(now) / 1000);

// 			var timeLeft = endTime - now;

// 			var days = Math.floor(timeLeft / 86400); 
// 			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
// 			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
// 			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
// 			if (hours < "10") { hours = "0" + hours; }
// 			if (minutes < "10") { minutes = "0" + minutes; }
// 			if (seconds < "10") { seconds = "0" + seconds; }

// 			$("#days").html(days + "<span>Days</span>");
// 			$("#hours").html(hours + "<span>Hours</span>");
// 			$("#minutes").html(minutes + "<span>Minutes</span>");
// 			$("#seconds").html(seconds + "<span>Seconds</span>");		

// 	}

// 	setInterval(function() { makeTimer(); }, 1000);


// countdown function start
function countdown() {
    const pillowDate = new Date(`August 19, 2023 00:00`);
    const nowDate = new Date();
    const diff = pillowDate - nowDate;

    const msInSecond = 1000;  // how much ms in second - 1.000
    const msInMinute = 60 * 1000;  //  how much ms in minute - 60.000
    const msInHour = 60 * 60 * 1000;  //  how much ms in hour - 3.600.000
    const msInDay = 24 * 60 * 60 * 1000;  //  how much ms in day - 86.400.000

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(`.days`).textContent = displayDay;

    const displayHour = Math.floor((diff % msInDay) / msInHour);
    document.querySelector(`.hours`).textContent = displayHour;

    const displayMinutes = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector(`.minutes`).textContent = displayMinutes;

    const displaySeconds = Math.floor((diff % msInMinute) / msInSecond);
    document.querySelector(`.seconds`).textContent = displaySeconds;
  
  
    if (diff <= 0) {
      document.querySelector(`.days`).textContent = 0;
      document.querySelector(`.hours`).textContent = 0;
      document.querySelector(`.minutes`).textContent = 0;
      document.querySelector(`.seconds`).textContent = 0;
      clearInterval(timerId);
    }
}

let timerId = setInterval(countdown, 1000);
// countwod finish

