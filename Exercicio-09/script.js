// Crie uma função chamada calcularMedia(nota1, nota2, nota3,
// nome), que recebe 4 parâmetros sendo três inteiros e um texto
// (String). Esta função será chamada ao abrir a página e mostrará um
// alerta com a média. Exemplo: “João, sua média é 70.” A função
// também deve mostrar no console.log() as notas recebidas. Exemplo
// “Nota 1: 60,Nota 2: 70,Nota 3: 80”.
let nota1 = Number(prompt("Nota 1"));
let nota2 = Number(prompt("Nota 2"));
let nota3 = Number(prompt("Nota 3"));
let nome = String(prompt("Digite seu nome"));
function calcularMedia(nota1, nota2, nota3, nome) {
  let media = (nota1 + nota2 + nota3) / 3;
  alert(`${nome} sua média é ${media}`);
  console.log(`Nota 1 = ${nota1}, Nota 2 = ${nota2}, Nota 3 = ${nota3}`);
}

calcularMedia(nota1, nota2, nota3, nome);
