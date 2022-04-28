let oriA;
let oriB;
let oriG;

// Generate randoom ID for this device instance
let deviceId = Math.random() * 100 + "ef";

let initLatitude = randomLatitude();
let initLongitude = randomLongitude();

let position = {
  id: deviceId,
  timeStamp: Math.floor(Date.now() / 1000), // current timestamp in sec
  latitude: initLatitude,
  longitude: initLongitude,
};



// Use button to manuel send position
document.querySelector("#button").addEventListener("click", sendPosition);


// Print id to the screen
document.querySelector("#title").innerHTML = "DEVICE ID: " + deviceId;

// SEND DEVICE POSITION EVERY 5 SECONDS
// COMMENT OUT TIME LOOP TO REMOVE AUTOMATIC UPDATE OF DATA
// TIME LOOP
let timer;

sendPosition();
startTimer();
function startTimer() {
  timer = setInterval(function () {
    sendPosition();
  }, 100);
}

// TIME LOOP END

// Send randmomly generated position
function sendPosition() {
  console.log("Sending position of device with id of: " + deviceId);
  sendMessage(position);
}

// Generate random longitude
function randomLongitude() {
  return (longitude = (Math.random() * 360 - 180).toFixed(8));
}
// Generate random latitude
function randomLatitude() {
  return (latitude = (Math.random() * 180 - 90).toFixed(8));
}

function requestAccess() {
  DeviceOrientationEvent.requestPermission()
    .then((response) => {
      if (response == "granted") {
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
    })
    .catch(console.error);

  this.remove();
}

function setup() {
  createCanvas(200, 200);
  background("red");
}

function setOrientation(e) {
  oriA = Math.floor(e.alpha);
  oriB = Math.floor(e.beta);
  oriG = Math.floor(e.gamma);
  console.log("oriA: ", oriA);
  console.log("oriB: ", oriB);
  console.log("oriG: ", oriG);


  oriBMapped = map(oriB, -180, 180, 0, 360)
  oriGMapped = map(oriG, -90, 90, 0, 180)
 
  position.oriB = oriBMapped;
  position.oriG = oriGMapped;
}

function draw() {
  let x = 0;
  let y = 0;
  if (oriB && oriG) {
    x = map(oriG, 0, 180, 0, 200);
    y = map(oriB, 0, 360, 0, 200);
  }

  ellipse(x, y, 10, 10);
}
