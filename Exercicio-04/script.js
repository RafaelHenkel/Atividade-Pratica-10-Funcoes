// Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

let tempoSegundos = Number(
  prompt("Digite o tempo de trabalho desta fabrica em segundos")
);

function tempoDeDuracao(tempoSegundos) {
  let tempoHoras = parseInt(tempoSegundos / 3600);
  let tempoMinutos = parseInt((tempoSegundos % 3600) / 60);
  let segundosRestantes = tempoSegundos % 60;
  console.log(`${tempoHoras}: ${tempoMinutos}: ${segundosRestantes}`);
}

tempoDeDuracao(tempoSegundos);
