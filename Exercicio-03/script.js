// Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

let valor = Number(prompt("Digite um valor"));
let divisores = 0;
function retornarValor(valor) {
  for (let i = 1; i <= valor; i++) {
    if (valor % i == 0) {
      divisores++;
    }
  }
  if (divisores == 2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
retornarValor(valor);
