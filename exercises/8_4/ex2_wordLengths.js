const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (arrWords) => {
    let lengths = [];
    for (let index in arrWords) {
        lengths.push(arrWords[index].length);
    }
    return lengths;
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
