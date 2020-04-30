console.log('solução usando normal function')
function fat(n) {
  if (n === 0) return 1;
  else return n * fat(n - 1);
}

console.log(fat(3));

// usando arrow function
console.log('solução usando recursividade e arrow function');
let fatorial = (n) => (n === 0) ? 1 : (n * fatorial(n - 1));

console.log(fatorial(3));