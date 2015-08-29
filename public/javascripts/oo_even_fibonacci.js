function EvenFibonacci(limit) {
  this.limit = limit;
}

EvenFibonacci.prototype.sum = function(){
  var i = 1;
  var a = 0;
  var b = 1;
  var sum = 0;
  var fib = 1;
  while (fib < this.limit) {
    if (!(fib % 2)) sum += fib;
    a = b;
    b = fib;
    fib = a + b;
  }
  return sum;
};