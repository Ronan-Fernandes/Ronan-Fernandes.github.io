let word = "trybe";
let ending = "be";
function verificaFimPalavra(word, ending) {
    let endOfWord = ""
    for (let i = 0; i < word.length; i++){
        if (i >= (word.length - ending.length)) {
            endOfWord += word[i];
        }
    }
    if (ending === endOfWord) return true;
    else return false;
}
console.log(verificaFimPalavra(word, ending));