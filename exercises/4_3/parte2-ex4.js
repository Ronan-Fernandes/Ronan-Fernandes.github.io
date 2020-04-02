let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maisCaracteres(array) {
    let maior = array[0];
    for (let i =1; i<array.length; i++) {
        if (array[i].length > maior.length){
            maior = array[i];
        }
    }
    return maior;
}
console.log(maisCaracteres(array));