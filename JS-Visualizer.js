let img;
let pixelSize = 10;

function preload() {
  // Use the RAW link, not the GitHub HTML link
  img = loadImage('https://raw.githubusercontent.com/mbmotorcyclesproject/JS-Visualizer/main/harley_davidson_PNG50.png');
}

function setup() {
  createCanvas(img.width, img.height);
  noLoop(); // Stop continuous drawing
}

function draw() {
  background(220);

  for (let i = 0; i < img.width; i += pixelSize) {
    for (let j = 0; j < img.height; j += pixelSize) {
      let pixelColor = img.get(i, j);
      fill(pixelColor);
      noStroke();
      rect(i, j, pixelSize, pixelSize);
    }
  }
}
