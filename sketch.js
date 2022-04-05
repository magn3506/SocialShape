// The numbers are in decimal degrees format
// and range from -90 to 90 for latitude
//and -180 to 180 for longitude.

// DATA
const device_one = {
  latitude: 79.88203386173558,
  longitude: -47.038490531567334,
};

const device_two = {
  latitude: 64.9421944390964,
  longitude: -17.85880371753384,
};
const device_three = {
  latitude: 21.330390886510195,
  longitude: -103.99161419269294,
};

const device_four = {
  latitude: 68,
  longitude: 120,
};


const divices = [device_one, device_two, device_three, device_four];

// Config
const canvasSize = {width: 500, height: 500}

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
  background(200);
}

function draw() {
  
  // Create shape form each divice position
  beginShape();
  divices.forEach((device) => {
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
