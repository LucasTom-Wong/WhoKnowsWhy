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
var ctx = c.getContext("2d");// YOUR CODE HERE
//set fill color to team color
ctx.fillStyle = "#B4CEB3";// YOUR CODE HERE

var requestID;  //init global var for use with animation frames
// let speed = 0; //number you see

var radius = 0;
var radius_growth = 1; //i had it manually press to increase/decrease size because animation is hard, so it was greater than 1 at some point
var growing = true;

var image = 

//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.width, c.height);
  // YOUR CODE HERE
};

var drawCircle = function(){
  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

//var drawDot = function() {
var drawDot = () => {
  window.cancelAnimationFrame(requestID);
  console.log("drawDot invoked...")
  // YOUR CODE HERE

  if (radius >= (c.width / 2)){
    growing = false;
  }
  if (radius <= 0){
    growing = true;
  }

  if (growing){
    console.log("growing");
    clear();
    radius+=radius_growth;
    drawCircle();
  }
  else{
    console.log("shrinking");
    clear();
    radius-=radius_growth;
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
  console.log(soup);
  // YOUR CODE HERE
  /*
    ...to
    Stop the animation

    You will need
    window.cancelAnimationFrame()
  */
};

let display_Speed = function(){
  //  console.log(n);
  let text = document.getElementById("speedlevel");
  text.innerHTML = speed;
}

var movieTime = function(){

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
})
