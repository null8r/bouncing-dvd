let selFile = document.getElementById('selectFile');
let selScale = document.getElementById('selectScale');
let selSpeed = document.getElementById('selectSpeed');

let scaleDown = document.getElementById('scaleDown');
let scaleUp = document.getElementById('scaleUp');
let speedDown = document.getElementById('speedDown');
let speedUp = document.getElementById('speedUp');

let scaleOp = document.getElementById('scaleOp');
let speedOp = document.getElementById('speedOp');

let TBscale = document.getElementById('textBoxScale');
let TBspeed = document.getElementById('textBoxSpeed');

let inputScale;
let inputSpeed;

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
scale = 0.5;
speed = 3;

dataUrl = imgPath;

// first setup
window.onload = function(){
  scaleOp.innerHTML = selScale.value;
  speedOp.innerHTML = selSpeed.value;
  twemoji.parse(document.body);
}

// input imageFile
selFile.addEventListener('change', function(evt){
  var file = evt.target.files;
  console.log(file.name);
  var reader = new FileReader();

  reader.readAsDataURL(file[0]);

  reader.onload = function(){
    console.log('reader');

    dataUrl = reader.result;

    main();
  }
});

// range scale
 selScale.addEventListener('input', function(){
  inputScale = selScale.value;
  scaleSetup();
});
// input scale
TBscale.addEventListener('input', function(){
  inputScale = TBscale.value;
  scaleSetup();
});
// button scale
// 誤差対策のため、数字を10倍(整数)にしてから計算して、小数に戻す
scaleDown.addEventListener('click', function(){
  if(TBscale.value > 0.1){
    var num = Number(TBscale.value) * 10;
    inputScale = Math.round(num - 1) / 10;
    scaleSetup();
  }
});
scaleUp.addEventListener('click', function(){
  if(TBscale.value < 5){
    var num = Number(TBscale.value) * 10;
    inputScale = Math.round(num + 1) / 10;
    scaleSetup();
  }
});
function scaleSetup(){
  selScale.value = inputScale;
  scaleOp.innerHTML = inputScale;
  TBscale.value = inputScale;
  scale = inputScale;
  main();
}

// range speed
selSpeed.addEventListener('input', function(){
  speedSetup();
});
// input speed
TBspeed.addEventListener('input', function(){
  inputSpeed = TBspeed.value;
  speedSetup();
});
// button speed
speedDown.addEventListener('click', function(){
  if(TBspeed.value > 1){
    var num = Number(TBspeed.value);
    inputSpeed = num - 1;
    speedSetup();
  }
});
speedUp.addEventListener('click', function(){
  if(TBspeed.value < 10){
    var num = Number(TBspeed.value);
    inputSpeed = num + 1;
    speedSetup();
  }
});
function speedSetup(){
  selSpeed.value = inputSpeed;
  speedOp.innerHTML = inputSpeed;
  TBspeed.value = inputSpeed;
  speed = inputSpeed;
  main();
}

// resize
window.addEventListener('resize', function(){
  main();
});

// reset
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

// img scale setup
function imgSetup() {
  element = new Image();

  element.onload = function () {
    imgWidth = element.naturalWidth ;
    imgHeight = element.naturalHeight ;
  }
  element.src = imgPath;

  console.log("imgSetup \nW=" + imgWidth + "\nH=" + imgHeight);
}

function setup() {
  let canvas = createCanvas(windowWidth - 20, 500);
  canvas.parent('canvas');

  x = random(width);
  y = random(height);
  speed = speed * 1;
  xSpeed = speed;
  ySpeed = speed;

  console.log('setup');
  pickColor();
}

function pickColor() {
  r = Math.floor(random(100, 256));
  g = Math.floor(random(100, 256));
  b = Math.floor(random(100, 256));

  console.log('rgb(' + r + ', ' + g + ', ' + b + ')');
}

function draw() {
  background(0);

  tint(r, g, b);
  img.resize(imgWidth * scale, imgHeight * scale);
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
