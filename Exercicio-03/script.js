// Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

let valor = Number(prompt("Digite um valor"));
let numeroPrimo = 0;
function retornarValor(valor) {
  for (let i = 1; i <= valor; i++) {
    if (valor % i == 0) {
      numeroPrimo++;
    }
  }
  if (numeroPrimo == 2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
retornarValor(valor);
