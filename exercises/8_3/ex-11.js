const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
assert.strictEqual(isAbove(5, 4), true);
assert.strictEqual(isAbove(4, 5), false);
assert.strictEqual(isAbove(4, 4), false);