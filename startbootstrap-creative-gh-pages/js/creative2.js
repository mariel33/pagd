  //set date to PAGD at midnight
  var countDownDate = new Date("May 9, 2018 00:00:01").getTime();

  //update countdown every 1 second
  var x = setInterval(function () {
    //set today's date and time
    var now = new Date().getTime();
    //find distance between now and PAGD
    var distance = countDownDate - now;

    //calculations for days, hours, minutes, seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60)) / (1000);
    var secondsRound = Math.round(seconds, -1);

    //put result in #timer
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = secondsRound;

  }, 1000);