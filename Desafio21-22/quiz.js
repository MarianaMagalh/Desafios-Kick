const prompt = require('prompt-sync')({ sigint: true })


function perguntar(pergunta, opcoes, resCorreta) {
  console.log(pergunta) 

  opcoes.forEach((opcao, index) => {
    console.log(`${index + 1}. ${opcao}`)
  })


  let resposta = parseInt(prompt('Escolha a opção correta (1-4): '))

  while (isNaN(resposta) || resposta < 1 || resposta > 4) {
    console.log('Por favor, escolha uma opção válida entre 1 e 4.')
    resposta = parseInt(prompt('Escolha a opção correta (1-4): '))
  }

  return resposta === resCorreta
}


function calcularPontuacao(respostas) {
  let pontuacao = 0
  respostas.forEach(correta => {
    if (correta) {
      pontuacao++
    }
  })
  return pontuacao
}


function Quiz() {
  const perguntas = [
    {
        pergunta: 'No desenho "As Meninas Superpoderosas", qual das três, é a mais sensivel?',
        opcoes:['Lindinha', 'Docinho', 'Florzinha', 'Estrelinha'],
        resCorreta: 1
       },
       {
        pergunta: 'No desenho "Os jovens Titãns", quantos heros há no time?',
        opcoes:['10', '8', '4', '5'],
        resCorreta: 4
       },
       {
        pergunta: 'Qual o poder d3o cão Jake, melhor amigo de Finn, em Hora de Aventura?',
        opcoes:['Ficar invisivel', 'Se teleportar', 'Mudar sua forma', 'Mudar de cor'],
        resCorreta: 3
       },
       {
        pergunta: 'Qual o nome a dona de Coragem, no desenho "Coragem, o cão covarde"?',
        opcoes:['Muriel', 'Marta', 'Misa', 'Mona'],
        resCorreta: 1
       },
       {
        pergunta: 'Quais os nomes dos protagonistas do desenho "Apenas um show"?',
        opcoes:['Finn e Jake', 'João e maria', 'Mordecai e Rigby', 'Pink e Cerebro'],
        resCorreta: 3
       },
       {
        pergunta: 'Qual o nome do vilão de "Samurai jake"?',
        opcoes:['Aku', 'Abu', 'Sukuna', 'Geto'],
        resCorreta: 1
       },
  ]


  let respostas = perguntas.map(q => perguntar(q.pergunta, q.opcoes, q.resCorreta))
  let pontuacao = calcularPontuacao(respostas)

  console.log(`\nVocê acertou ${pontuacao} de ${perguntas.length} perguntas.`)
}

Quiz();

