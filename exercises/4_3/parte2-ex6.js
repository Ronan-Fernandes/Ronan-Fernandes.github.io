let N = 5;
function soma(num) {
    let soma = 0;
    for (let i = 1; i <= num; i++) {
        soma += i;
    }
    return soma;
}
console.log("A soma de 1 até " + N + " = " + soma(N));