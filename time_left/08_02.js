var countDownDate = new Date("May 31, 2023 12:00:00").getTime();
var countDownDate2 = new Date("Feb 9, 2023 8:30:00").getTime();
var countDownDate3 = new Date("Feb 9, 2023 15:30:00").getTime();
var countDownDate4 = new Date("Feb 9, 2023 16:30:00").getTime();
var countDownDate5 = new Date("Feb 9, 2023 18:30:00").getTime();
var countDownDate6 = new Date("Feb 9, 2023 19:30:00").getTime();
var countDownDate7 = new Date("Feb 9, 2023 22:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var distance2 = countDownDate2 - now;
  var distance3 = countDownDate3 - now;
  var distance4 = countDownDate4 - now;
  var distance5 = countDownDate5 - now;
  var distance6 = countDownDate6 - now;
  var distance7 = countDownDate7 - now;
  if (distance > 0){
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("time_left").innerHTML = days + " dni " + hours + " godz " + minutes + " min " + seconds + " s" + msseconds + " ms";
  }
  if(distance < 0){
    var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);
    document.getElementById("time_left").innerHTML = days + " dni " + hours + " godz " + minutes + " min " + seconds + " s";
    if(distance2 < 0){
        var days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
        document.getElementById("time_left").innerHTML = days + " dni " + hours + " godz " + minutes + " min " + seconds + " s";
        if(distance3 < 0){
            var days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
            document.getElementById("time_left").innerHTML = days + " dni " + hours + " godz " + minutes + " min " + seconds + " s";
            if(distance4 < 0){
                var days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance5 % (1000 * 60)) / 1000);
                document.getElementById("time_left").innerHTML = days + " dni " + hours + " godz " + minutes + " min " + seconds + " s";
                if(distance5 < 0){
                    var days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance6 % (1000 * 60)) / 1000);
                    document.getElementById("time_left").innerHTML = days + " dni " + hours + " godz " + minutes + " min " + seconds + " s";
                    if(distance6 < 0){
                        var days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
                        var hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance7 % (1000 * 60)) / 1000);
                        document.getElementById("time_left").innerHTML = days + " dni " + hours + " godz " + minutes + " min " + seconds + " s";
                        if(distance7 < 0){
                            clearInterval(x);
                            document.getElementById("time_left").innerHTML = "EXPIRED";
                        }
                    }
                }
            }
        }
    }
   }
}, 1000);