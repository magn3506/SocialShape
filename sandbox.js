// Global
let lastDataObj;

// DATA
const data = {
  id: Math.random() * 100 + "ef",
  latitude: Math.random() * 50,
  longitude: Math.random() * 50,
};


// Config
const canvasSize = { width: 500, height: 500 };

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

function setup() {
  createCanvas(canvasSize.width, canvasSize.height);
  background(240)
  publishAndSubsribeTimeLoop();
}

function publishAndSubsribeTimeLoop() {
  if(!revieced_payload) {
    // if recieved payload is NOT-true, send initial data and set lastDataObj
    // OBS: this block should only run once every instance
    revieced_payload = []
    // set lastDataObj to be current data
    lastDataObj = data;
    // set lastDataObj to be current data
    sendMessage(revieced_payload)
    console.log("revieced_payload is not true")
  } else {
    // ? If revieced data is true ?
    // set lastDataObj to be current data
    lastDataObj = data
    // Push currect data to revieced_payload
    revieced_payload.push(data)
    // Send data to broker
    sendMessage(revieced_payload)
    console.log("revieced_payload is true")
  }
  setTimeout(publishAndSubsribeTimeLoop, 3000);
}

function draw() {
   // Remove lastDataObj from revieced_payload
  
    revieced_payload.filter(item => {
      return item.id !== lastDataObj.id
    })
  
  createShapeFromDevicesData(revieced_payload)
}

function createShapeFromDevicesData(devicesData) {
  console.log(devicesData)
  console.log(lastDataObj)
  clear();
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
