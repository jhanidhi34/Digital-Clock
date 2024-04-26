    // Function to update the clock display
    /*const d=new Date();
    document.getElementById("date").innerHTML=d;*/
    date =new Date();
    year =date.getFullYear();
    month=date.getMonth()+1;
    day =date.getDate();
    document.getElementById("current_date").innerHTML=month + "/" + day + "/" + year;
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
  
        // Add leading zeros to the values
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
  
        var time = hours + ':' + minutes + ':' + seconds;
        document.getElementById('clock').textContent = time;
      }
  
      var intervalId;
  
      // Start button event listener
      document.getElementById('startBtn').addEventListener('click', function() {
        updateClock(); // Update immediately
        intervalId = setInterval(updateClock, 1000); // Update every second
      });
  
      // Stop button event listener
      document.getElementById('stopBtn').addEventListener('click', function() {
        clearInterval(intervalId);
      });