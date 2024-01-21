// Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores
let valorInteiro = 0;
let numeros = 1;
let divisor = 0;
do {
  valorInteiro = Number(prompt("Digite um numero inteiro maior que 1"));
} while (valorInteiro < 2);
{
  while (numeros < valorInteiro) {
    if (valorInteiro % numeros == 0) {
      divisor += numeros;
    }
    numeros++;
  }
  if (divisor == valorInteiro) {
    console.log(true);
  } else {
    console.log(false);
  }
}
