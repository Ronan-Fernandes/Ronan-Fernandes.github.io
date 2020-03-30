let a = 45;
let b = 45;
let c = 90;

function verificaAngulos(x, y, z) {
    if ((x+y+z) === 180) return true;
    else return false;
}

if (typeof(a) === typeof(1) && typeof(b) === typeof(1) && typeof(c) === typeof(1)) {
    console.log(verificaAngulos(a, b, c));
} else {
    console.log("erro, angulos invalidos!!");
}