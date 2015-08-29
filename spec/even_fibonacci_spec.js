describe('#evenFibonacciSum', function() {
  it('returns the correct sum when the limit is 10', function() {
    expect(evenFibonacciSum(10)).toEqual(10);
  });

  it('returns the correct sum when the limit is 100', function() {
    expect(evenFibonacciSum(100)).toEqual(44);
  });

  it('retunrns the correct sum when the limit is 4000000', function() {
    expect(evenFibonacciSum(4000000)).toEqual(4613732);
  });
});