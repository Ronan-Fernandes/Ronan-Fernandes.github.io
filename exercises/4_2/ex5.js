let n = 9;
let aux = "";
let float = n/2;
let countdown = parseInt(float);
let countup = parseInt(float);
let base = countup;
if (n%2 !=0) {
    for (let j=0; j<=base;j+=1) {
        for (let i=0; i< n; i+=1) {
            if ((i == countdown || i == countup) || j === base) {
                aux += "*";
            } else {
                aux += " ";
            }
        }
        console.log(aux);
        countdown -= 1;
        countup += 1;
        aux = "";
    }  
} else {
    console.log("o numero deve ser impar!!!");
}
