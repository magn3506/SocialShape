document.querySelector("#button").addEventListener("click", sendPosition);
let deviceId = Math.random() * 100 + "ef"

// SEND DEVICE POSITION EVERY 5 SECONDS
let timer;
        
sendPosition()
startTimer()
function startTimer() {
    timer = setInterval(function() {
        sendPosition()
    }, 5000);
}
 
function stopTimer() {
    alert("Timer stopped");
    clearInterval(timer);
}


function sendPosition() {
  console.log("Print pos");

  const position = {
    id: deviceId,
    timeStamp: Math.floor(Date.now() / 1000), // current timestamp in sec
    latitude: randomLatitude(),
    longitude: randomLongitude()
  };



  sendMessage(position);
}



function randomLongitude() {
    return longitude = (Math.random()*360-180).toFixed(8);
}

function randomLatitude() {   
     return latitude = (Math.random()*180-90).toFixed(8);
}