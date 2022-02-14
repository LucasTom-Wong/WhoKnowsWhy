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
  let bmode = e.innerHTML;
  if (bmode == "rect"){
    console.log("changing to circle");
    e.innerHTML = "circle";
  }
  else {
    console.log("changing to rect");
    e.innerHTML = "rect";
  }
}

let drawRect = function(e){
  // let mouseX = ;
  // let mouseY = ;
  // console.log("mouseclick at ", mouseX, mouseY);
}
//draws rectangle at point of mouse

//draws cricle at point of mouse

let draw = function(e){
  // console.log("mouseclick at ", mouseX, mouseY);
}
//draw?


var wipeCanvas = function(e){
  console.log("clearing");
}
//clears canvas

canvas.addEventListener("click", draw);
//detects click on canvas

let bToggle = document.getElementById("buttonToggle");
bToggle.addEventListener("click", toggleMode);
//toggle button
let clearB = document.getElementById("buttonClear");
clearB.addEventListener("click", wipeCanvas);
//clear button
