function evenFibonacciSum(limit) {
  var i = 1;
  var a = 0;
  var b = 1;
  var sum = 0;
  var fib = 1;

  while(fib < limit){
    if (fib % 2 == 0) {    
      sum += fib;
    }
    a = b;
    b = fib;
    fib = a + b
  }

  return sum;
}