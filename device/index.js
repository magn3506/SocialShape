// Use button to manuel send position
document.querySelector("#button").addEventListener("click", sendPosition);

// Generate randoom ID for this device instance
let deviceId = Math.random() * 100 + "ef"
// Print id to the screen
document.querySelector("#title").innerHTML = "DEVICE ID: " + deviceId

// SEND DEVICE POSITION EVERY 5 SECONDS
// COMMENT OUT TIME LOOP TO REMOVE AUTOMATIC UPDATE OF DATA
// TIME LOOP
let timer;
        
sendPosition()
startTimer()
function startTimer() {
    timer = setInterval(function() {
        sendPosition()
    }, 5000);
}
 
// TIME LOOP END

// Send randmomly generated position
function sendPosition() {
  console.log("Sending position of device with id of: " + deviceId);

  const position = {
    id: deviceId,
    timeStamp: Math.floor(Date.now() / 1000), // current timestamp in sec
    latitude: randomLatitude(),
    longitude: randomLongitude()
  };

  sendMessage(position);
}


// Generate random longitude
function randomLongitude() {
    return longitude = (Math.random()*360-180).toFixed(8);
}
// Generate random latitude
function randomLatitude() {   
     return latitude = (Math.random()*180-90).toFixed(8);
}