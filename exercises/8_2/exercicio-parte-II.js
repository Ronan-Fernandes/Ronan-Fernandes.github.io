const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
// ---------------------------exercicio 1 --------------------------------------

const adicionaEntrada = (objeto, chave, valor) => {objeto[chave] = valor;}
adicionaEntrada(lesson2, 'turno', 'manhã');
console.log(lesson2);

// --------------------------exercicio 2 ---------------------------------------

const listarKeys = (objeto) => Object.keys(objeto);
console.log(listarKeys(lesson3));

// ---------------------------exercicio 3 -------------------------------------

const tamanhoObj = (objeto) => listarKeys(objeto).length;
console.log(tamanhoObj(lesson3));

// ---------------------------exercicio 4 -------------------------------------

const listarValues = (objeto) => Object.values(objeto);
console.log(listarValues(lesson2));

// ---------------------------exercicio 5 -------------------------------------

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// ---------------------------exercicio 6 -------------------------------------

const totalEstudantes = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
console.log(totalEstudantes());

// ---------------------------exercicio 7 -------------------------------------

const getValueByNumber = (obj, num) => listarValues(obj)[num];
console.log(getValueByNumber(lesson1, 2));

// ---------------------------exercicio 8 -------------------------------------

const verifyPair = (obj, key, value) => {
    const arrayOfPair = Object.entries(obj);
    for (let i = 0; i < arrayOfPair.length; i += 1) {
        if ((arrayOfPair[i][0] === key) && (arrayOfPair[i][1] === value)) return true;
    }
    return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
