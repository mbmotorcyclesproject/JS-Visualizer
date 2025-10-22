
let img;

function preload() {
  img = loadImage('harley_davidson_PNG50.png'); // Replace 'your_image.png' with your file name
}

function setup() {
  createCanvas(img.width, img.height);
  // In this example, we'll draw rectangles of size 10x10
  let pixelSize = 10;
}
function draw() {
  background(220); // Optional: set a background color
  let pixelSize = 10; // Size of the squares in the new pixel art

  for (let i = 0; i < img.width; i += pixelSize) {
    for (let j = 0; j < img.height; j += pixelSize) {
      // Get the color of the pixel at the center of the new square
      let pixelColor = img.get(i, j);
      
      // Set the fill color to the sampled pixel color
      fill(pixelColor);
      
      // Draw a rectangle (the new "pixel")
      rect(i, j, pixelSize, pixelSize);
    }
  }
}
