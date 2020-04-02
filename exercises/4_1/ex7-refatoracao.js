let nota = 75;
function notaEmConceitos(n) {
    if (n >= 90 && n <= 100){
        console.log("Sua nota é A");
    } else if (n >= 80 && n < 90) {
        console.log("Sua nota é B");
    } else if (n >= 70 && n < 80) {
        console.log("Sua nota é C");
    } else if (n >= 60 && n < 70) {
        console.log("Sua nota é D");
    } else if (n >= 50 && n < 60) {
        console.log("Sua nota é E");
    } else if (n <= 50 && n >= 0) {
        console.log("Sua nota é F");
    } else  {
        console.log("Erro: nota invalidas!!!");
    }
}
notaEmConceitos(nota);