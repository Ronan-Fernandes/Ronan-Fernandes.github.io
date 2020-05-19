const myFizzBuzz = require('./ex-6');

describe('fizzbuzz', () => {
    test('fizzbuzz', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
        expect(myFizzBuzz(9)).toEqual('fizz');
        expect(myFizzBuzz(25)).toEqual('buzz');
        expect(myFizzBuzz(7)).toEqual(7);
        expect(myFizzBuzz('9')).toEqual(false);
    });
});