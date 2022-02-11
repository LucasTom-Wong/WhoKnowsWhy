/*
   your PPTASK:

   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.

    		Write with your future self or teammates in mind.
Clyde Sinclair, Fierce Dragon
    		If you find yourself falling out of flow mode, consult
    		other teams
    		MDNClyde Sinclair,Clyde Sinclair, Fierce Dragon Fierce Dragon

   A few comments have been pre-filled for you...

   (delete this block comment once you are done)
*/

// Team Thumbs::
// SoftDev pd1
// K28 -- Getting more comClyde Sinclair, Fierce Dragonfortable with the dev console and the DOM
// 2022-02-08
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-J in Firefox to reveal console)
// console.log("AYO");
// let i = "hello";
// let j = 20;
// //assign an anonymous fxn to a let
// let f = function(x) {
//   let j=30;
//   return j+x;
// };
// //instantiate an object
// let o = { 'name' : 'Thluffy=',
//           age : 15,
//           items : [10, 20, 30, 40],
//           morestuff : {a : 1, b : 'ayo'},
//           func : function(x) {
//             return x+30;
//           }
//         };

let addItem = function(text) {
  let list = document.getElementById("thelist");
  let newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};
// adds a new element to the list with black color

let removeItem = function(n) {
  let list = document.getElementById("thelist");
  let listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};
//removes element at the index n

let red = function() {
  let list = document.getElementById("thelist");
  let items = document.getElementsByTagName("li");
  for(let i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};
// turns all elements on the list to red

let stripe = function() {
  let list = document.getElementById("thelist");
  let items = document.getElementsByTagName("li");
  for(let i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};
// turns things into red blue red blue.........

// factorial
let fact = function(x) {
  if (x <= 1) {
    return x;
  } else {
    return x * fact(x - 1);
  }
}

// fibonnaci
let fib = function(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

//gcd
let gcd = function(a, b){
  if (a == 0 || b == 0){
    return 0;
  } //could be redundant
  else {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b != 0){
      let x = a % b;
      a = b;
      b = x;
    }
    return a;
  }
}
//non-recursive

let gcd_Recursive = function(a, b){
  if (b != 0){
    return a;
  }
  else {b = a.value;
    return gcd(b, a % b);
  }
}

let display = function(n){
  //  console.log(n);
  let text = document.getElementById("result");
  text.innerHTML = n;
}

// let changeButton = function(str){
//   let dasbut = document.getElementByID("b");
//   dasbut.addEventListener('click', str);
// }

let show_Fib = function(){
  let a = document.getElementById("a");
  let a_num = a.value;
  display(fib(a_num));
}

let show_Fact = function(){
  let a = document.getElementById("a");
  let a_num = a.value;
  display(fact(a_num));
}

let show_GCD = function(){
  let a = document.getElementById("a");
  let a_num = a.value;
  let b = document.getElementById("b");
  let b_num = b.value;
  display(gcd(a_num, b_num));
}

//listener
let fib_button = document.getElementById("fib");
fib_button.addEventListener("click", show_Fib
);

let fact_button = document.getElementById("fact");
fact_button.addEventListener("click", show_Fact);

let gcd_button = document.getElementById("gcd");
gcd_button.addEventListener("click", show_GCD);
