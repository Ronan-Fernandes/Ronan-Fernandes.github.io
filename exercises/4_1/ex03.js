let a = 15;
let b = 10;
let c = 19;

if (a > b && a > c) {
    console.log(a + ' é o maior numero. ');
} else if (b > a && b > c) {
    console.log(b + " é o maior numero.");
} else if (c > a && c > b) {
    console.log(c + " é o maior numero.");
} else {
    console.log("existem numeros iguais portanto não é possivel voltar o maior deles");
}