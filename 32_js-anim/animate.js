// Team
// SoftDev pd1
// K31 -- canvas based JS animation
// 2022-02-17

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");// GET CANVAS
var dotButton = document.getElementById("buttonCircle");// GET DOT BUTTON
var stopButton = document.getElementById("buttonStop");// GET STOP BUTTON
var movieButton = document.getElementById("buttonMovie");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");
//set fill color to team color
ctx.fillStyle = "#B4CEB3";

var requestID;  //init global var for use with animation frames
// let speed = 0; //number you see

var radius = 0;
// var radius_growth = 1; //i had it manually press to increase/decrease size because animation is hard, so it was greater than 1 at some point
//currently redudant
var growing = true;

var max_w = c.width;
var max_h = c.height;

//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.width, c.height);
  // YOUR CODE HERE
};

var drawCircle = function(){
  ctx.beginPath();
  ctx.arc(max_h / 2, max_w / 2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

//var drawDot = function() {
var drawDot = () => {
  window.cancelAnimationFrame(requestID);
  console.log("drawDot invoked...")
  // YOUR CODE HERE

  if (radius >= (max_w / 2)){
    growing = false;
  }
  if (radius <= 0){
    growing = true;
  }

  if (growing){
    console.log("growing");
    clear();
    radius+=1;
    drawCircle();
  }
  else{
    console.log("shrinking");
    clear();
    radius-=1;
    drawCircle();
  }
  requestID = window.requestAnimationFrame(drawDot);
  /*
    ...to
    Wipe the canvas,
    Repaint the circle,
    ...and somewhere (where/when is the right time?)
    Update requestID to propagate the animation.
    You will need
    window.cancelAnimationFrame()
    window.requestAnimationFrame()

   */
}

//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log(requestID);
  let soup = window.cancelAnimationFrame(requestID);
  console.log(soup);startMove();
};

// let display_Speed = function(){
//   //  console.log(n);
//   let text = document.getElementById("speedlevel");
//   text.innerHTML = speed;
// }

var x, y;
var dx, dy;

// Grab images
let img_w = 120
let img_h = 80
let dvd = new Image(img_w, img_h);
dvd.src = 'logo_dvd.jpg';

var startMove = function(){
  do {
    x = Math.floor(Math.random() * max_h) - img_w
  }
  while (x < 1 || x > max_w - 1);
  do {
    y = Math.floor(Math.random() * max_w) - img_h
  }
  while (y < 1 || y > max_h - 1);

  dx = 1;
  dy = 1;
}

var movieTime = function(){
  window.cancelAnimationFrame(requestID);
  clear();

  if (x <= 0 || x + img_w>= max_w) {
    dx *= -1
  }
  if (y <= 0 || y + img_h >= max_h) {
    dy *= -1
  }
  //changes directions

  x += dx
  y += dy

  ctx.drawImage(dvd, x, y, img_w, img_h);

  requestID = window.requestAnimationFrame(movieTime);
}

dotButton.addEventListener("click", function(){
  drawDot();
  // speed+=1;
  // display_Speed();
});
stopButton.addEventListener("click", function(){
  // speed-=1;
  // display_Speed();
  stopIt();
});

movieButton.addEventListener("click", function(){
  stopIt();
  clear();
  startMove();
  movieTime();
})
