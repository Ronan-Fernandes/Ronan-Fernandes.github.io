// ********************************* declaração de variaveis ************************
const cartaVirada = document.getElementById('carta-virada');
// ********************************* Funções ******************************************
function cardOnGrid() {
  console.log('cardongrid');
}
window.onload = function () {
  cartaVirada.addEventListener('click', cardOnGrid);
}