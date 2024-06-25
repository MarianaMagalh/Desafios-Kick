# Site corrigido

onde estavam os erros:

1- Na declaração da variavel 'desenhosAnimados', antes com '()' e agora '[]', essa variavel é um array.  

2- Erro na variavel 'lista', expecificamente no 'document.getElementByClass('lista-desenhos')', o correto seria usar o 'document.querySelector', pois ele é flexível de selecionar elementos no DOM.       

3- Na variavel item, no 'document.createElement(li);', que precisava estar assim 'document.createElement('li');'.                                                                                 

4- Na variavel 'novoDesenhos', que precisava da adição de 'value', para obtém o que o usuario escrever, 'document.getElementById('novo-desenho').value'.                                                             

5-No 'if (novoDesenho.trim() !== '') {', ate esta correto, ams precisava ter o valor obtido antes.              

6-'exibirLista', erro ao chamar a função, deveria ter os '()' para de fato executar a função.                       

7-'window.onload', o correto seria 'window.onload = exibirLista', que garante que a função apareça quando a pagina terminar de carregar.

