let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;
let votosCandidato4 = 0;
let votosNuloBranco = 0;

function votar(opcao) {
  switch (opcao) {
    case 1:
      votosCandidato1++;
      break;
    case 2:
      votosCandidato2++;
      break;
    case 3:
      votosCandidato3++;
      break;
    case 4:
      votosCandidato4++;
      break;
    case 0:
      votosNuloBranco++;
      break;
    default:
      console.log("Opção inválida!");
      break;
  }
  exibirResultados();
}

function exibirResultados() {
  let resultados = `
    <h2>Resultados da eleição:</h2>
    <p>Candidato 1: ${votosCandidato1} votos</p>
    <p>Candidato 2: ${votosCandidato2} votos</p>
    <p>Candidato 3: ${votosCandidato3} votos</p>
    <p>Candidato 4: ${votosCandidato4} votos</p>
    <p>Nulo/Branco: ${votosNuloBranco} votos</p>
  `;
  document.getElementById('resultados').innerHTML = resultados;
}
