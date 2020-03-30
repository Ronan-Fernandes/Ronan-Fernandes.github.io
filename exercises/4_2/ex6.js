let num = 53;
let count =0;
for (let i = 2; i <= num/2; i++) {
    if (num % i == 0) {
        count ++;
    }
}
if (count == 0) {
    console.log(num + " é um numero primo ");
} else {
    console.log(num + " não é um numero primo ");
} 