let palavra = "arara";

function verificaPalindromo(p) {
    let inversa = "";
    for (let i = p.length - 1; i>=0; i--) {
        inversa += p[i];
    }
    if (inversa === p) return true;
    else return false;
}
console.log(verificaPalindromo(palavra));