let mgtt_payload;

let oriAlpha;
let oriBeta;
let oriGamma;

const device_one = {
  x1: 30,
  y1: 75
}

const device_two = {
  x2: 58,
  y2: 20
}

const device_three = {
  x3: 86,
  y3: 75
}


window.addEventListener("deviceorientation", handleOrientation, true);


// triangle(30, 75, 58, 20, 86, 75);
//triangle(x1, y1, x2, y2, x3, y3)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  const {x1, y1} = device_one
  const {x2, y2} = device_two
  const {x3, y3} = device_three

  fill("green")
  triangle(x1, y1, x2, y2, x3, y3)
  fill("red")
  ellipse(50, 50, oriAlpha)

}

function handleOrientation(e) {
  console.log(e)
  oriAlpha = e.alpha;
  oriBeta = e.beta;
}