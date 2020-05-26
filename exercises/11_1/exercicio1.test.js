const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  }
      
test('testando chamada de callback', () => {
  function callback(str) {
    expect(str).toBe('STR');
  }
  uppercase('str', callback);
})