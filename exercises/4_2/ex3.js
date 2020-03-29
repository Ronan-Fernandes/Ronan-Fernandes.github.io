let n = 10;
let aux = "";
let countdown = n;
// for interno cria linha for externo imprime linha e incrementa countdown
for (let j=0; j<n;j+=1) {
    for (let i=0; i< n; i+=1) {
        if (i >= (countdown - 1)) {
            aux += "*";
        } else {
            aux += " ";
        }
    }
    console.log(aux);
    countdown -= 1;
    aux = "";
}