let selFile = document.getElementById('selectFile');
let dataUrl;

let x;
let y;

let xSpeed;
let ySpeed;
let speed;

let imgPath;
let img;
let element;
let imgWidth;
let imgHeight;
let scale;

let r, g, b;

imgPath = 'src/img/syachiku.png';
scale = 0.1;
speed = 3;

// input imageFile
selFile.addEventListener("change", function(evt){
  var file = evt.target.files;
  var reader = new FileReader();

  reader.readAsDataURL(file[0]);

  reader.onload = function(){
    console.log('reader');

    dataUrl = reader.result;
  }
}, false);

function main() {
  imgPath = dataUrl;
  preload();
  setup();
}

// canvas
function preload() {
  img = loadImage(imgPath);

  console.log('preload');
  imgSetup();
}

function imgSetup() {
  element = new Image();

  element.onload = function () {
    imgWidth = element.naturalWidth ;
    imgHeight = element.naturalHeight ;
  }
  element.src = imgPath;

  console.log("imgSetup \n" + imgWidth + "\n" + imgHeight);
}

function setup() {
  let canvas = createCanvas(windowWidth - 20, 500);
  canvas.parent('canvas');

  x = random(width);
  y = random(height);
  xSpeed = speed;
  ySpeed = speed;

  console.log('setup');
  pickColor();
}

function pickColor() {
  r = Math.floor(random(50, 256));
  g = Math.floor(random(50, 256));
  b = Math.floor(random(50, 256));

  //console.log('rgb(' + r + ', ' + g + ', ' + b + ')');
}

function draw() {
  background(0);

  tint(r, g, b);
  img.resize(imgWidth * scale, imgHeight * scale);
  //img.resize(1754, 1240);
  image(img, x, y);
  
  x = x + xSpeed;
  y = y + ySpeed;

  if (x + img.width >= width) {
    xSpeed = -xSpeed;
    x= width - img.width;
    pickColor();
  } else if (x <= 0) {
    xSpeed = -xSpeed;
    x= 0;
    pickColor();
  }

  if (y + img.height >= height) {
    ySpeed = -ySpeed;
    y = height - img.height;
    pickColor();
  } else if (y <= 0) {
    ySpeed = -ySpeed;
    y = 0;
    pickColor();
  }
  console.log('draw');
}
