// reference from google(jQuery)

// countdown function start
function countdown() {
    const pillowDate = new Date(`August 30, 2023 00:00`);
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

