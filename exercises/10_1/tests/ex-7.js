const assert = require('assert');

const thereIs = '';

// implemente seus testes aqui
assert.notStrictEqual(thereIs, undefined, 'variavel não definida');

module.exports = thereIs;
test('test if variable is defined', () => {
    expect(thereIs).not.toEqual(undefined);
});