const thereIs = require('./ex-7');

test('test if variable is defined', () => {
    expect(thereIs).not.toEqual(undefined);
});