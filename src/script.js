$(document).ready(function() {
        // Set the date we're counting down to
        var countDownDate = new Date("Jun 6, 2023 12:00:00").getTime(1674241130);

        // Update the count down every 1 second
        var x = setInterval(function() {
          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="days", "hours", "minutes", "seconds"
          $("#days").html(days);
          $("#hours").html(hours);
           $("#minutes").html(minutes);
          $("#seconds").html(seconds);

          
          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            $("#days").html("0");
            $("#hours").html("00");
            $("#minutes").html("00");
            $("#seconds").html("00");
          }
        }, 1000);

      });

