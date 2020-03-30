let a = 1;
let b = 10;

function maiorNumero(x, y) {
    if (x > y) return x;

    if (y > x) return y;

    if (x === y) return "Os dois numeros são iguais";
}
if (maiorNumero(a, b) === "Os dois numeros são iguais") {
    console.log( "Os dois numeros são iguais");
} else {
    console.log("O maior numero é " + maiorNumero(a, b));
}