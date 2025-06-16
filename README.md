# Construa um aplicativo de teste com HTML, CSS e JavaScript

! [Tela inicial] (./ imagens/cover.png)

Lista de reprodução de vídeo: https://www.youtube.com/playlist?list=plb6wleecdj5yyh6p2n6q_9jijb6v4uejf

Crie um aplicativo de teste com HTML, CSS e JavaScript para melhorar seu principal desenvolvimento da web

> Se você tiver dúvidas, pergunte -lhes no [Learn Build Teach Discord.] (Https://learnbuildteach.com/)

Deseja melhorar suas habilidades ** de desenvolvimento da web ** **? Deseja melhorar seu conhecimento de ** html, css e javascript **? Neste curso, você aprenderá a criar um aplicativo de questionário ** sem a assistência de bibliotecas ou estruturas **. Aqui estão alguns dos tópicos que abordaremos!

- Salvar pontuações altas no armazenamento local
- Crie uma barra de progresso
- Crie um ícone de carregador giratório
- gerar dinamicamente html em javascript
- buscar perguntas de curiosidades da API Open Trivia DB

- JavaScript - Funções de matriz (emenda, mapa, classificação), armazenamento local, API buscar
- ES6 Recursos de JavaScript - Funções de seta, Operador de espalhamento, const and Let, modelo literais
- CSS - Flexbox, animações e unidades REM

## Introdução e recursos do curso

Bem -vindo ao "Construa um aplicativo de teste com HTML, CSS e JS". Estou tão animado que você decidiu tomar a iniciativa de melhorar suas principais habilidades de desenvolvimento da Web!

Neste curso, usaremos habilidades fundamentais de HTML, CSS e JavaScript para criar um aplicativo de questionário. Este aplicativo poderá carregar perguntas de uma API de terceiros, rastrear e exibir pontuações altas e muito mais! Você aprenderá a usar o armazenamento local, criar animações, usar os modernos recursos de JavaScript ES6 e muito mais.

Recursos

-[Código-fonte do curso] (https://github.com/jamesqquick/design-and-build-a-quiz-app)
- [Learn Build Teach Discord] (https://learnbuildteach.com/)

## 1. Crie e estilize a página inicial

Neste vídeo, criaremos a página inicial junto com uma boa parte do CSS necessário. A página inicial consistirá em alguns links para as páginas do jogo e das pontuações altas. Também criaremos classes CSS Helper para Flexbox, Buttons e Hiding Elements.

Encorajo todos vocês a dar uma olhada nos trechos do Emmet para gerar HTML e CSS.

Recursos

- [Emmet no Código do Visual Studio] (https://www.youtube.com/watch?v=5guzjndcvna)
-[Compreendendo as unidades REM] (https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)
-[Um guia completo do Flexbox] (https://css-tricks.com/snippets/css/a-guide-toflexbox/)

## 2. Crie e estilize a página do jogo

Neste vídeo, criaremos a página do jogo e exibiremos informações estáticas de perguntas e respostas. Eventualmente, carregaremos perguntas de uma API, mas, por enquanto, codificaremos uma pergunta difícil para estabelecer o estilo.

## 3. Exibir perguntas e respostas codificadas

Neste vídeo, carregaremos perguntas de uma matriz codificada e iteraremos através das perguntas disponíveis à medida que o usuário as responder. Usaremos os atributos de dados personalizados, o operador de spread ES6 e as funções de seta JavaScript.

Recursos

- [Criando trechos de código no código do Visual Studio] (https://www.youtube.com/watch?v=k3Gllzm-m_8)
- [Usando atributos de dados] (https://developer.mozilla.org/en-us/docs/learn/html/howto/use_data_attributes)
- [Seletor de consulta de documentos] (https://developer.mozilla.org/en-us/docs/web/api/document_object_model/locating_dom_elements_using_selectors)
- [Documento Get By Id] (https://developer.mozilla.org/en-us/docs/web/api/document/getElementbyId)
- [Spread Operator] (https://developer.mozilla.org/en-us/docs/web/javascript/reference/operators/spread_syntax)
- [Arrow Functions] (https://developer.mozilla.org/en-us/docs/web/javascript/reference/functions/arrow_functions)

## 4. Exiba feedback para respostas corretas/incorretas

Neste vídeo, verificamos a resposta do usuário quanto à correção e exibimos feedback ao usuário antes de carregar a próxima pergunta.

Recursos

- [Bootstrap 4 Cores] (https://www.w3schools.com/bootstrap4/bootstrap_colors.asp)
-[Triple vs Double Equals] (https://codeburst.io/javascript-double-equals-vs-tripe-equals-61d4ce5a121a)

## 5. Crie o Display Up da cabeça (HUD)

Neste vídeo, criaremos uma exibição Heads Up (HUD) para o nosso aplicativo Quiz. Isso exibirá a pontuação do usuário e o número da pergunta atual.

Recursos

- [ES6 Literais de modelos] (https://developer.mozilla.org/en-us/docs/web/javascript/reference/template_literals)

## 6. Crie uma barra de progresso

Neste vídeo, levaremos nosso HUD um passo adiante, criando uma barra de progresso visual para rastrear o progresso do usuário através das perguntas.

## 7. Crie e estilize a página final

Neste vídeo, criaremos nossa página final, onde exibiremos a pontuação alcançada do usuário. Esta tela fornecerá um formulário para salvar a pontuação e os links para jogar novamente ou ir para casa.

Recursos

- [Local Storage] (https://www.w3schools.com/jsref/prop_win_localstorage.asp)

## 8. Economize pontuações altas no armazenamento local

Neste vídeo, salvaremos e manteremos uma matriz de pontuações altas no armazenamento local. Para fazer isso, precisaremos json.stringify () e json.parse () para converter nossa matriz de pontuação alta em uma corda e visa versa.

Recursos

- [Local Storage] (https://www.w3schools.com/jsref/prop_win_localstorage.asp)

## 9. Load and Display High Scores from Local Storage

In this video, we will create our High Scores page. We will have to load the high scores from Local Storage, iterate through them, and display them on the screen.

Resources

-   [JSON Parse and Stringify](https://alligator.io/js/json-parse-stringify/)
-   [Array Sort](https://www.w3schools.com/js/js_array_sort.asp)
-   [Array Map](https://www.w3schools.com/jsref/jsref_map.asp)
-   [Array Join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## 10. Fetch API to Load Questions From Local JSON File

In this video, we will move our sample questions from a hard coded array to an external .json file. This will help clean up our Game.js file and set ourselves up to request questions from an API in the next video.

Resources

-   [How to Use the Fetch API](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
-   [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise_)

## 11. Fetch API to Load Questions from Open Trivia API

In this video, we will use Fetch to request a list of questions from the Open Trivia DB API.

Reources

-   [How to Use the Fetch API](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
-   [Open Trivia DB](https://opentdb.com/)
-   [Array Map](https://www.w3schools.com/jsref/jsref_map.asp)
-   [Array For Each](https://www.w3schools.com/jsref/jsref_foreach.asp)

## 12. Create a Spinning Loader

In this video, we will create a simple spinning loader in CSS that will be displayed until we are finished requesting/loading questions from the API.

Resources

-   [Create a CSS Loader](https://www.w3schools.com/howto/howto_css_loader.asp)

## 13. Closing

Thank you so much for going through this course. I truly hope that you enjoyed it and that you have improved your core Web Development skills!!
