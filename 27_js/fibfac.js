// Team Thumbs :: Oscar Wang, Lucas Tom-Wong
// SoftDev pd1
// K27 -- Basic functions in JavaScript
// 2022-02-03

var fact = function(x) {
  if (x <= 1) {
    return x
  } else {
    return x * fact(x - 1)
  }
}

var fib = function(n) {
  if (n <= 1) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

// as a duo...
// pair programming style,
// implement a fact and fib fxn


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.
