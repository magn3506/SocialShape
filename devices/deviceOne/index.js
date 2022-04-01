function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (mouseIsPressed === true) {
    fill("blue")
    ellipse(mouseX, mouseY, 12)

  
    const device_one = {
      x1: 30,
      y1: 75
    }

    sendMessage(device_one)
  }

}