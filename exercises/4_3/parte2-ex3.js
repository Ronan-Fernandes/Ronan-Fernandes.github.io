let array = [2, 4, 6, 7, -10, 0, -3];
function indiceMaior(array) {
    let menor = {
        indice: 0,
        numeroMenor: array[0],
    }
    for (let i =1; i<array.length; i++) {
        if (array[i] < menor.numeroMenor){
            menor.numeroMenor = array[i];
            menor.indice = i;
        }
    }
    return menor.indice;
}
console.log(indiceMaior(array));