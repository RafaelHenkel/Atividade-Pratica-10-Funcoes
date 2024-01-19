// Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).
let primeiraNota = Number(prompt("Digite a sua primeira nota"));
let segundaNota = Number(prompt("Digite a sua segunda nota"));
let terceiraNota = Number(prompt("Digite a sua terceira nota"));
let media = String(
  prompt("Digite A para média aritmética ou P para média ponderada")
);
function notasAlunos(primeiraNota, segundaNota, terceiraNota, media) {
  if (media === "A") {
    let mediaAluno = (primeiraNota + segundaNota + terceiraNota) / 3;
    console.log(mediaAluno);
  } else if (media === "P") {
    let mediaAluno =
      (primeiraNota * 5 + segundaNota * 3 + terceiraNota * 2) / 10;
    console.log(mediaAluno);
  } else {
    console.log("Letra não encontrada");
  }
}

notasAlunos(primeiraNota, segundaNota, terceiraNota, media);
