// Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.
let valor = Number(prompt("Digite um numero"));

function receberValor(valor) {
  if (valor % 2 == 0) {
    console.log("O valor é par", true);
  } else {
    console.log("O valor é impar", false);
  }
}

receberValor(valor);
