// const addOne = (myArr) => {
//     let arr = [];
//     for(let i = 0; i < myArr.length; i += 1) {
//         //arr.push((myArr[i] + 1));
//         myArr[i] += 1;
//     }
//     return myArr;
// }
// const myArray = [31, 57, 12, 5];
// console.log(myArray);
// const output = addOne(myArray);
// console.log(myArray);
// let teste = myArray;
// console.log(myArray);
// teste[0] = 0;
// console.log(myArray);

const addOne = (myArr) => {
    let arr = [];
    for (let i = 0; i < myArr.length; i += 1) {
        arr.push(myArr[i] + 1);
    }
    return arr;
}
const myArray = [31, 57, 12, 5];
console.log("Array sem ser alterado", myArray);
const output = addOne(myArray);
console.log("Array apos ter sido alterado", output);
console.log("Array global não modificado", myArray)