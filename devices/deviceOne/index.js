function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (mouseIsPressed === true) {
    fill("blue")

  
    const device_one = {
      longitude: 55.931648054910305, 
      latitude: 12.311291354201092
    }

    sendMessage(device_one)
  }

}