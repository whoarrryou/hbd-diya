let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minsItem = document.querySelector("#mins");
let secondsItem = document.querySelector("#seconds");


// Set the date and time to redirect (adjust the date to the birthday)
var targetDate = new Date("Aug 1, 2024 14:55:00").getTime();

// Check every second if it's time to redirect
var checkTime = setInterval(function() {
    var now = new Date().getTime();
// If current time has reached or passed the target time, redirect to another page
if (now >= targetDate) {
  clearInterval(checkTime);
  window.location.href = "pagebeforebirthday.html";
}
}, 1000);
let countDown = () => {
  let futureDate = new Date("12 Aug 2024");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;
  //console.log(myDate);

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let mins = Math.floor(myDate / 1000 / 60) % 60;
  let seconds = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minsItem.innerHTML = mins;
  secondsItem.innerHTML = seconds;
};

countDown();

setInterval(countDown, 1000);
