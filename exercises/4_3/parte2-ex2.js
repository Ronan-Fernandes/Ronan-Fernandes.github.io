let array = [20, 3, 6, 7, 1, 1];
function indiceMaior(array) {
    let maior = {
        indice: 0,
        numeroMaior: array[0],
    }
    for (let i =1; i<array.length; i++) {
        if (array[i] > maior.numeroMaior){
            maior.numeroMaior = array[i];
            maior.indice = i;
        }
    }
    return maior.indice;
}
console.log(indiceMaior(array));