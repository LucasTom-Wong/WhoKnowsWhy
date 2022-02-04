(define fib
  (lambda (n)
    (if (<= n 1)
      n
      (+ (fib (- n 1)) (fib (- n 2)))
    )
  )
)

(define fact (lambda (n)    ; lambda defines function, n is variable
  (if (= n 1)               ; if function
    1                       ; result if true
    (* n (fact (- n 1)))    ; else
)))
; example of recursion

(fact 3)
; in order to call function (function varA varB....)
