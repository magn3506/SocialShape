// GLOBAL VARIABLE
let canvasSize;
let maxDiameter;
let theta;

function setup() {
  // Set canvasize to be the width and hight of the window
  canvasSize = { width: windowWidth / 2, height: windowHeight / 2};
  createCanvas(canvasSize.width, canvasSize.height);

  maxDiameter = 10; 
	theta = 10;
 
}

function draw() {
  createShapeFromDevicesData(recieved_payload); // ? recieved_payload is updated in my_mqtt_functions.js
  drawHearts(recieved_payload);
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

  // Create shape form each divice position
  devicesData.forEach((device) => {
    // Map position of device to position on canvas
    let device_position = mapCordinatesToCanvas(
      device.latitude,
      device.longitude
    );

    stroke("yellow");
    strokeWeight(1);
 
    if(device.oriA && device.oriB && device.oriG){

      let targetRange = 50;
      let oriAMap = map(device.oriA, -180, 180, 0, targetRange)
      let oriBMap = map(device.oriB, -180, 180, 0, targetRange)
      let oriGMap = map(device.oriG, -180, 180, 0, targetRange)

      let xCordinate = device_position.posX + oriGMap;
      let yCordinate = device_position.posY + oriBMap
      vertex(xCordinate, yCordinate);
      console.log("yess")
    } else {
      console.log("nooo")
      vertex(device_position.posX, device_position.posY);
    }

    fill("#00E091");
  });
  endShape(CLOSE);
}


function drawHearts(devicesData) {
  devicesData.forEach((device) => {
    let device_position = mapCordinatesToCanvas(
      device.latitude,
      device.longitude
    );

    if(device.oriA && device.oriB && device.oriG){

      let targetRange = 50;
      let oriAMap = map(device.oriA, -180, 180, 0, targetRange)
      let oriBMap = map(device.oriB, -180, 180, 0, targetRange)
      let oriGMap = map(device.oriG, -180, 180, 0, targetRange)

      let xCordinate = device_position.posX + oriGMap;
      let yCordinate = device_position.posY + oriBMap
      heart(xCordinate, yCordinate, 20 )
      console.log("yess")
    } else {
      console.log("nooo")
      heart(device_position.posX, device_position.posY, 20 )
    }

  });
}

function heart(x, y, size) {

  size = 10 + sin(theta) * maxDiameter;

  // make theta keep getting bigger
  // you can play with this number to change the speed
  theta += .01; 

  circle(x, y, size)

  // beginShape()
  // vertex(x, y);
  // bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  // bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  // endShape(CLOSE)
}


// This function maps and calculated the correct mapping betweeen longitude, and latitude cprdinates to the canvas.
function mapCordinatesToCanvas(lat, long) {

  // Range for latitude -90 - 90
  let lat_start = -90;
  let lat_stop = 90;

  // Range for longtiude -180 - 180
  let long_start = -180;
  let long_stop = 180;

  // Map latitude and longitude to canvas dimensions
  // map(value, start1, stop1, start2, stop2, [withinBounds]) - Docs
  const latitudeToCanvas = map(
    lat,
    lat_start,
    lat_stop,
    0,
    canvasSize.height
  );
  const longitudeToCanvas = map(
    long,
    long_start,
    long_stop,
    0,
    canvasSize.width
  );

  return { posX: longitudeToCanvas, posY: latitudeToCanvas };
}



