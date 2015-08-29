describe('EvenFibonacci', function() {
  describe('#sum', function() {
    it('returns the correct sum when the limit is 10', function() {
      var fib = new EvenFibonacci(10);
      expect(fib.sum()).toEqual(10);
    });

    it('returns the correct sum when the limit is 100', function() {
      var fib = new EvenFibonacci(100);
      expect(fib.sum()).toEqual(44);      
    });

    it('returns the correct sum when the limit is 4000000', function() {
      var fib = new EvenFibonacci(4000000);
      expect(fib.sum()).toEqual(4613732);      
    });    
  });
});