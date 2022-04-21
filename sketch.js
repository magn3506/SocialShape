// CONFIG
const canvasSize = { width: 500, height: 500 };

// SKETCH
function setup() {
  createCanvas(800, 800);
}

function draw() {

  createShapeFromDevicesData(recieved_payload)
}


function createShapeFromDevicesData(devicesData) {
  
  background(240)

  // BEGIN SHAPE
  beginShape();
    // Create shape form each divice position
    devicesData.forEach((device) => {
      let device_position = mapCordinatesToCanvas(
        device.latitude,
        device.longitude
      );
      vertex(device_position.posX, device_position.posY);
      let circleDiamiter = 10;
      fill("black");
      circle(device_position.posX, device_position.posY, circleDiamiter);
      fill("white");
    });
  endShape(CLOSE);
}

// UTILS
function mapCordinatesToCanvas(lat, long) {
  // ? This function will map the values of cordinates to the size of

  // Range for latitude -90 - 90
  let lat_start = -90;
  let lat_stop = 90;

  // Range for longtiude -180 - 180
  let long_start = -180;
  let long_stop = 180;

  // Canvas size is target range
  let target_start = 0;
  let target_stop = 500;

  // Map latitude and longitude to canvas dimensions
  // map(value, start1, stop1, start2, stop2, [withinBounds]) - Docs
  const latitudeToCanvas = map(
    lat,
    lat_start,
    lat_stop,
    target_start,
    target_stop
  );
  const longitudeToCanvas = map(
    long,
    long_start,
    long_stop,
    target_start,
    target_stop
  );

  return { posX: latitudeToCanvas, posY: longitudeToCanvas };
}