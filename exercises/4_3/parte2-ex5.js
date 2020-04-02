let array = [2, 3, 2, 5, 8, 2, 3];
function contaRepeticoes(array) {
    let maisFrequente = {
        count: 0,
        numero: array[0],
    };
    let countAll = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) { 
            if(array[i] === array[j]){
                countAll += 1;
            }
        }
        if (countAll > maisFrequente.count) {
            maisFrequente.numero = array[i];
            maisFrequente.count = countAll;
        }
        countAll = 0;
    }
    return maisFrequente.numero;
}
console.log(contaRepeticoes(array));