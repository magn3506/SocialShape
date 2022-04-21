// GLOBAL VARIABLE
let canvasSize;


function setup() {
  // Set canvasize to be the width and hight of the window
  canvasSize = { width: windowWidth, height: windowHeight };
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  createShapeFromDevicesData(recieved_payload); // ? recieved_payload is updated in my_mqtt_functions.js
}


// This function is the one created the custom shape on the canvas by iterating over the list of devicesData and creating a point on the canvas.
function createShapeFromDevicesData(devicesData) {
  // Set background color of canvas
  background("#00B1B0");

  // Draw equator
  stroke("lightBlue");
  line(0, canvasSize.height / 2, canvasSize.width,  canvasSize.height / 2)

  // BEGIN SHAPE
  beginShape();
  devicesData.sort(function (a, b) {
    if (a.longitude == b.longitude) return a.latitude - b.latitude;
    return a.latitude - b.latitude;
  });

  // Create shape form each divice position
  devicesData.forEach((device) => {
    // Map position of device to position on canvas
    let device_position = mapCordinatesToCanvas(
      device.latitude,
      device.longitude
    );
    stroke("yellow");
    strokeWeight(1);
    vertex(device_position.posX, device_position.posY);
    fill("#00E091");
    let circleDiamiter = 10;
    circle(device_position.posX, device_position.posY, circleDiamiter);
    fill("#FF8370");
  });
  endShape(CLOSE);
}

// This function maps and calculated the correct mapping betweeen longitude, and latitude cprdinates to the canvas.
function mapCordinatesToCanvas(lat, long) {

  // Range for latitude -90 - 90
  let lat_start = -90;
  let lat_stop = 90;

  // Range for longtiude -180 - 180
  let long_start = -180;
  let long_stop = 180;

  // Canvas size is target range
  let target_start_width = 0;
  let target_stop_width = canvasSize.width;
  let target_start_height = 0;
  let target_stop_height = canvasSize.height;

  // Map latitude and longitude to canvas dimensions
  // map(value, start1, stop1, start2, stop2, [withinBounds]) - Docs
  const latitudeToCanvas = map(
    lat,
    lat_start,
    lat_stop,
    target_start_height,
    target_stop_height
  );
  const longitudeToCanvas = map(
    long,
    long_start,
    long_stop,
    target_start_width,
    target_stop_width
  );

  return { posX: latitudeToCanvas, posY: longitudeToCanvas };
}
