// Lucas
// k30
// 2022-2-14

let canvas = document.getElementById("slate");
//canvas node
let ctx = canvas.getContext("2d");
//2d canvas
let mode = "rect";
//rect or circle

let toggleMode = function(e){
  console.log("toggling....");
  if (mode == "rect"){
    console.log("changing to circle");
    mode = "circle";
  }
  else {
    console.log("changing to rect");
    mode = "rect"
  }
}

let drawRect = function(e){
  let mouseX = event.offsetX;
  let mouseY = event.offsetY;
  console.log("mouseclick at ", mouseX, mouseY);
  ctx.fillStyle="#xff0000";
  ctx.fillRect(mouseX, mouseY, 100, 200);
}
//draws rectangle at point of mouse
//e = event
let drawCircle = function(e){
  let mouseX = event.offsetX;
  let mouseY = event.offsetY;
  console.log("mouseclick at ", mouseX, mouseY);
  ctx.fillStyle="#xff0000";
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}
//draws cricle at point of mouse

let draw = function(e){
  // console.log("mouseclick at ", mouseX, mouseY);
  if (mode == "rect"){
    // console.log("drawing rect at ");
    drawRect();
  }
  else{
    // console.log("drawing cricle at ");
    drawCircle();
  }
}
//draw?


var wipeCanvas = function(e){
  console.log("clearing");
  ctx.clearRect(0, 0, 600, 600);
}
//clears canvas

canvas.addEventListener("click", draw);
//detects click on canvas

let bToggle = document.getElementById("buttonToggle");
bToggle.addEventListener("click", function(){
  toggleMode();
  bToggle.innerHTML = mode;
});
//toggle button
let clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas);
//clear button
