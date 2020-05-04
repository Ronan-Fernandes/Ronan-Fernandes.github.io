const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

let maiorPalavra = (frase) => {
    let palavras = frase.split(' ');
    let maior = palavras[0];
    for (let i = 1; i < palavras.length; i += 1) {
        if (palavras[i].length > maior.length) maior = palavras[i];
    }
    return maior;
}

console.log(maiorPalavra(frase));