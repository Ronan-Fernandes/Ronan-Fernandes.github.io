let a = 22;
let b = 20;
let c = 20;
function maiorNumero(x, y, z) {
    let maior = x;
    if (y > maior) maior = y;
    if (z > maior) maior = z;
    return maior;
}
console.log("o maior numero é " + maiorNumero(a, b, c));