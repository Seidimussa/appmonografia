document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar-button');
    const closeSidebarButton = document.getElementById('close-sidebar-button');
    const resetProgressButton = document.getElementById('reset-progress-button');
    const sectionsNavList = document.getElementById('sections-nav-list');
    const mainSectionContent = document.getElementById('main-section-content');
    const totalProgressBar = document.getElementById('total-progress-bar');
    const totalProgressText = document.getElementById('total-progress-text');

    // --- CHAVE DE ARMAZENAMENTO ESPECÍFICA DO CURSO ---
    const COURSE_STORAGE_KEY = 'courseProgress_frontend';

    // --- ESTRUTURA DE DADOS COMPLETA PARA O CURSO DE FRONT-END ---
    const initialCourseData = {
        currentSectionId: 1,
        sections: [{
                id: 1,
                title: 'Introdução ao Desenvolvimento Web',
                description: 'Crie páginas da web usando HTML e CSS',
                locked: false,
                lessons: [{
                        id: 1,
                        title: 'descobrindo HTML e Tags',
                        type: 'learn',
                        completed: false,
                        locked: false,
                        url: './intro-webdev/licao01/aprender01/game.html'
                    },
                    {
                        id: 2,
                        title: 'Estruturando texto com tags',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao02/aprender01/game.html'
                    },
                    {
                        id: 3,
                        title: 'Noções básicas de HTML 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao03/aprender01/game.html'
                    },
                    {
                        id: 4,
                        title: 'Criando Links',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao04/aprender01/game.html'
                    },
                    {
                        id: 5,
                        title: 'Adicionando Imagens',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao05/aprender01/game.html'
                    },
                    {
                        id: 6,
                        title: 'Noções básicas de HTML 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao06/aprender01/game.html'
                    },
                    {
                        id: 7,
                        title: 'Linktree',
                        type: 'guided_project',
                        description: 'Prepare-se para criar sua própria página no estilo Linktree, onde você pode exibir todas as suas redes sociais e outros links importantes em um só lugar.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao07/aprender01/game.html'
                    },
                    {
                        id: 8,
                        title: 'Código padrão',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao08/aprender01/game.html'
                    },
                    {
                        id: 9,
                        title: 'Folha de Estilo e Seletores Básicos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao09/aprender01/game.html'
                    },
                    {
                        id: 10,
                        title: 'Estilizando texto',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao10/aprender01/game.html'
                    },
                    {
                        id: 11,
                        title: 'Definindo tamanho e bordas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao11/aprender01/game.html'
                    },
                    {
                        id: 12,
                        title: 'Noções básicas de CSS 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao12/aprender01/game.html'
                    },
                    {
                        id: 13,
                        title: 'Construindo com o modelo de caixa',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao13/aprender01/game.html'
                    },
                    {
                        id: 14,
                        title: 'Adicionando preenchimento com uma linha',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao14/aprender01/game.html'
                    },
                    {
                        id: 15,
                        title: 'Estilizando cantos com uma linha',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao15/aprender01/game.html'
                    },
                    {
                        id: 16,
                        title: 'Noções básicas de CSS 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao16/aprender01/game.html'
                    },
                    {
                        id: 17,
                        title: 'Linktree',
                        type: 'guided_project',
                        description: 'Agora que você configurou o HTML da sua página no estilo Linktree, é hora de dar um toque especial! Nesta parte, usaremos CSS para estilizar e dar personalidade à sua página',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './intro-webdev/licao17/aprender01/game.html'
                    },
                ]
            },
            {
                id: 2,
                title: 'Páginas Web Interativas',
                description: 'Use HTML e JavaScript para criar páginas da web interativas',
                locked: true,
                lessons: [{
                        id: 18,
                        title: 'Criando Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao01/aprender01/game.html'
                    },
                    {
                        id: 19,
                        title: 'Usando Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao02/aprender01/game.html'
                    },
                    {
                        id: 20,
                        title: 'Usando Verdadeiro e Falso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao03/aprender01/game.html'
                    },
                    {
                        id: 21,
                        title: 'Verificando a igualdade numérica',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao04/aprender01/game.html'
                    },
                    {
                        id: 22,
                        title: 'Noções básicas de JavaScript',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao05/aprender01/game.html'
                    },
                    {
                        id: 23,
                        title: 'Comparando números',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao06/aprender01/game.html'
                    },
                    {
                        id: 24,
                        title: 'Comparando Strings',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao07/aprender01/game.html'
                    },
                    {
                        id: 25,
                        title: 'Descobrindo Tipos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao08/aprender01/game.html'
                    },
                    {
                        id: 26,
                        title: 'Operadores Lógicos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao09/aprender01/game.html'
                    },
                    {
                        id: 27,
                        title: 'Tipos e Comparações',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao10/aprender01/game.html'
                    },
                    {
                        id: 28,
                        title: 'Tomando decisões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao11/aprender01/game.html'
                    },
                    {
                        id: 29,
                        title: 'Condições de uso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao12/aprender01/game.html'
                    },
                    {
                        id: 30,
                        title: 'Codificando instruções Else',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao13/aprender01/game.html'
                    },
                    {
                        id: 31,
                        title: 'Incorporando Else If',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao14/aprender01/game.html'
                    },
                    {
                        id: 32,
                        title: 'Condicionais',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao15/aprender01/game.html'
                    },
                    {
                        id: 33,
                        title: 'Reutilizando código com funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao16/aprender01/game.html'
                    },
                    {
                        id: 34,
                        title: 'Interagindo com páginas da Web',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao17/aprender01/game.html'
                    },
                    {
                        id: 35,
                        title: 'Conversor de unidades',
                        type: 'guided_project',
                        description: 'Neste projeto, vamos nos aventurar na criação de um conversor de milhas para km. Além de ser uma ferramenta super útil, você também explorará o uso de JavaScript para tornar sites interativos.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao18/aprender01/game.html'
                    },
                    {
                        id: 36,
                        title: 'Como acessar um elemento HTML',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao19/aprender01/game.html'
                    },
                    {
                        id: 37,
                        title: 'Acesse vários elementos HTML',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao20/aprender01/game.html'
                    },
                    {
                        id: 38,
                        title: 'Páginas da Web Dinâmicas 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao21/aprender01/game.html'
                    },
                    {
                        id: 39,
                        title: 'Botões de construção',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao22/aprender01/game.html'
                    },
                    {
                        id: 40,
                        title: 'Coletando informações',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao23/aprender01/game.html'
                    },
                    {
                        id: 41,
                        title: 'Obtendo a entrada do usuário',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao24/aprender01/game.html'
                    },
                    {
                        id: 42,
                        title: 'HTML Intermediário',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao25/aprender01/game.html'
                    },
                    {
                        id: 43,
                        title: 'Definindo atributos dinamicamente',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: '/webpages-interativas/licao26/aprender01/game.html'
                    },
                    {
                        id: 44,
                        title: 'Alternando classes CSS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao27/aprender01/game.html'
                    },
                    {
                        id: 45,
                        title: 'Selecione',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao28/aprender01/game.html'
                    },
                    {
                        id: 46,
                        title: 'Páginas Web Dinâmicas 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao29/aprender01/game.html'
                    },
                    {
                        id: 47,
                        title: 'Conversor de unidades',
                        type: 'guided_project',
                        description: 'Agora que temos nosso conversor básico instalado e funcionando, é hora de torná-lo mais interativo e aprimorar seu estilo',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './webpages-interativas/licao30/aprender01/game.html'
                    },
                ]
            },
            {
                id: 3,
                title: ' HTML e CSS intermediários',
                description: 'Mergulhe mais fundo em HTML e CSS para criar aplicativos da web impressionantes',
                locked: true,
                lessons: [{
                        id: 48,
                        title: 'Agrupando Elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao01/aprender01/game.html'
                    },
                    {
                        id: 49,
                        title: 'Listas de construção',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao02/aprender01/game.html'
                    },
                    {
                        id: 50,
                        title: 'Elemento Span',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao03/aprender01/game.html'
                    },
                    {
                        id: 51,
                        title: 'Estilizando grupos de elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao04/aprender01/game.html'
                    },
                    {
                        id: 52,
                        title: 'Descobrindo Elementos Filhos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao05/aprender01/game.html'
                    },
                    {
                        id: 53,
                        title: 'Usando classes para layouts',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao06/aprender01/game.html'
                    },
                    {
                        id: 54,
                        title: 'CSS Intermediário 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao07/aprender01/game.html'
                    },
                    {
                        id: 55,
                        title: 'Adicionando cor com valores hexadecimais',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao08/aprender01/game.html'
                    },
                    {
                        id: 56,
                        title: 'Definindo o tamanho com porcentagens',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao09/aprender01/game.html'
                    },
                    {
                        id: 57,
                        title: 'Combinando várias classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao10/aprender01/game.html'
                    },
                    {
                        id: 58,
                        title: 'Seletores de agrupamento',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao11/aprender01/game.html'
                    },
                    {
                        id: 59,
                        title: 'CSS Intermediário 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao12/aprender01/game.html'
                    },
                    {
                        id: 60,
                        title: 'Cardápio da cafeteria',
                        type: 'guided_project',
                        description: 'Mergulhe no mundo de uma cafeteria movimentada, onde você criará um cardápio detalhado e envolvente. Não se trata apenas de listar espressos e lattes; trata-se de estruturar as informações de forma rica e organizada.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao13/aprender01/game.html'
                    },
                    {
                        id: 61,
                        title: 'Exibindo Elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao14/aprender01/game.html'
                    },
                    {
                        id: 62,
                        title: 'Imagens Flutuantes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao15/aprender01/game.html'
                    },
                    {
                        id: 63,
                        title: 'Posicionamento Relativo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao16/aprender01/game.html'
                    },
                    {
                        id: 64,
                        title: 'Fundamentos de Layout CSS 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao17/aprender01/game.html'
                    },
                    {
                        id: 65,
                        title: 'Posição Absoluta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao18/aprender01/game.html'
                    },
                    {
                        id: 66,
                        title: 'Índice Z',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao19/aprender01/game.html'
                    },
                    {
                        id: 67,
                        title: 'Fundamentos de Layout CSS 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao20/aprender01/game.html'
                    },
                    {
                        id: 68,
                        title: 'Bibliotecas JavaScript',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao21/aprender01/game.html'
                    },
                    {
                        id: 47,
                        title: 'Cardápio da cafeteria',
                        type: 'guided_project',
                        description: 'Com a estrutura do nosso cardápio pronta, vamos dar vida a ele! Esta fase visa tornar o cardápio da nossa cafeteria visualmente atraente e intuitivo.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './html-css-intermediario/licao22/aprender01/game.html'
                    },
                ]
            },
            {
                id: 4,
                title: 'Laços / Loops',
                description: 'Condicionais de código para construir programas que tomam decisões',
                locked: true,
                lessons: [{
                        id: 70,
                        title: 'Variáveis ​​autoatribuíveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao01/aprender01/game.html'
                    },
                    {
                        id: 71,
                        title: 'Atribuição com operadores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao02/aprender01/game.html'
                    },
                    {
                        id: 72,
                        title: 'Repetindo código com loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao03/aprender01/game.html'
                    },
                    {
                        id: 73,
                        title: 'Parando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao04/aprender01/game.html'
                    },
                    {
                        id: 74,
                        title: 'Laços 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao05/aprender01/game.html'
                    },
                    {
                        id: 75,
                        title: 'Jogo de Adivinhação',
                        type: 'guided_project',
                        description: 'Crie seu próprio jogo! Nesta primeira parte, prepararemos o cenário elaborando a lógica básica do jogo. O objetivo é definir as regras e deixar os jogadores darem o seu melhor.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao06/aprender01/game.html'
                    },
                    {
                        id: 76,
                        title: 'Controlando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao07/aprender01/game.html'
                    },
                    {
                        id: 77,
                        title: 'Repetindo código com loops For',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao08/aprender01/game.html'
                    },
                    {
                        id: 78,
                        title: 'Looping para baixo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao09/aprender01/game.html'
                    },
                    {
                        id: 79,
                        title: 'Laços 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao10/aprender01/game.html'
                    },
                    {
                        id: 80,
                        title: 'Jogo de Adivinhação',
                        type: 'guided_project',
                        description: 'Pronto para aumentar as apostas? Agora, estamos introduzindo vidas ao nosso jogo, adicionando aquela camada extra de desafio e suspense. Pronto, Jogador 1?',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './loops-js/licao11/aprender01/game.html'
                    },
                ]
            },
            {
                id: 5,
                title: 'Caixa flexível / Flexbox',
                description: 'Crie belos layouts usando Flexbox',
                locked: true,
                lessons: [{
                        id: 81,
                        title: 'Compreendendo o Flexbox',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox-fe/licao01/aprender01/game.html'
                    },
                    {
                        id: 82,
                        title: 'Usando Flex Direction',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 83,
                        title: 'Eixos Flexbox',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 84,
                        title: 'Noções básicas do Flexbox',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 85,
                        title: 'Justificando grupos de itens',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/01.html'
                    },
                    {
                        id: 86,
                        title: 'Justificando linhas e colunas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 87,
                        title: 'Alinhando Itens Flexíveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 88,
                        title: 'Contêineres Flexbox 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 89,
                        title: 'Envolvendo itens flexíveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/04.html'
                    },
                    {
                        id: 90,
                        title: 'Alinhando linhas encapsuladas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/04.html'
                    },
                    {
                        id: 91,
                        title: 'Contêineres Flexbox 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 92,
                        title: 'Galeria',
                        type: 'guided_project',
                        description: 'Pronto para criar uma galeria online? Neste segmento, lançaremos as bases, configurando uma tela para exibir imagens cativantes em um layout harmonioso.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 93,
                        title: 'Definindo um tamanho inicial do item',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 94,
                        title: 'Itens Flex em crescimento',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 95,
                        title: 'Itens Flexíveis Encolhendo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 96,
                        title: 'Usando a abreviação Flex',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 97,
                        title: 'Itens Flexbox',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 98,
                        title: 'Galeria',
                        type: 'guided_project',
                        description: 'Agora, vamos levar as coisas a um nível mais alto! Apresentaremos um recurso modal elegante, garantindo que cada imagem possa ser admirada de perto e em toda a sua glória.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 6,
                title: 'Grid',
                description: 'Crie belos layouts usando grid CSS',
                locked: true,
                lessons: [{
                        id: 99,
                        title: 'Criando uma grid CSS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/01.html'
                    },
                    {
                        id: 100,
                        title: 'Criando colunas de grid',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/02.html'
                    },
                    {
                        id: 101,
                        title: 'Criando Linhas de Grid',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/03.html'
                    },
                    {
                        id: 102,
                        title: 'Grid CSS 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/04.html'
                    },
                    {
                        id: 103,
                        title: 'Definindo colunas e linhas da grade',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 104,
                        title: 'Cartão de Visita Digital',
                        type: 'guided_project',
                        description: 'É hora de facilitar o networking! Nesta seção, vamos começar a criar seu próprio cartão de visita digital.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 105,
                        title: 'Lacunas na grid',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 106,
                        title: 'Definindo o tamanho de um item da grid',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/06.html'
                    },
                    {
                        id: 107,
                        title: 'Grid CSS 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/07.html'
                    },
                    {
                        id: 108,
                        title: 'Criando áreas nomeadas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 109,
                        title: 'Seções usando áreas nomeadas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/06.html'
                    },
                    {
                        id: 110,
                        title: 'Alinhando itens da grade',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 111,
                        title: 'Usando CSS Grid e Flexbox',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/06.html'
                    },
                    {
                        id: 112,
                        title: 'Grade CSS 3',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/07.html'
                    },
                    {
                        id: 113,
                        title: 'Webdesign responsivo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 114,
                        title: 'Cartão de Visita Digital',
                        type: 'guided_project',
                        description: 'Agora, vamos nos concentrar na capacidade de resposta. Vamos refinar nosso design, garantindo que ele brilhe e impressione em telas grandes e pequenas.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 7,
                title: 'Matrizes / Arrays e Funções ',
                description: 'Use matrizes / Arrays e funções para construir programas sofisticados',
                locked: true,
                lessons: [{
                        id: 115,
                        title: 'Agrupando valores com matrizes / arrays',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/01.html'
                    },
                    {
                        id: 116,
                        title: 'Alterando valores em matrizes / arrays',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 117,
                        title: 'Empurrando e removendo matrizes / arrays',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 118,
                        title: 'Decidindo com Arrays',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 119,
                        title: 'Matrizes / Arrays',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 120,
                        title: 'Criando Parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 121,
                        title: 'Retornando Valores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 122,
                        title: 'Funções 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 123,
                        title: 'Usando vários parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 124,
                        title: 'Compreendendo Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 125,
                        title: 'Funções 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 126,
                        title: 'Jogo de perguntas e respostas',
                        type: 'guided_project',
                        description: 'Pronto para desafiar seus amigos? Nesta apresentação, vamos preparar o cenário para o nosso jogo, adicionando a primeira pergunta e apresentando a mecânica essencial do jogo.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 127,
                        title: 'Condicionais de aninhamento',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 128,
                        title: 'Usando Condições e Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 129,
                        title: 'Parando funções com retorno',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 130,
                        title: 'Funções Aplicadas 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 131,
                        title: 'Adicionando Loops a Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 132,
                        title: 'Looping sobre matrizes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 133,
                        title: 'Funções Aplicadas 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 134,
                        title: 'Array .map()',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 135,
                        title: 'Array.filter()',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 136,
                        title: 'Array.reduce()',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 137,
                        title: 'Operações de matriz / array',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 138,
                        title: 'Jogo de perguntas e respostas',
                        type: 'guided_project',
                        description: 'Com a lógica implementada, agora tudo se resume ao engajamento do jogador. Vamos aprimorar nosso jogo, introduzindo várias perguntas e exibindo uma pontuação.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 8,
                title: 'Objetos e ES 6',
                description: 'Aprenda a usar objetos e funções JS mais avançadas',
                locked: true,
                lessons: [{
                        id: 139,
                        title: 'Agrupando valores em objetos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/01.html'
                    },
                    {
                        id: 140,
                        title: 'Usando métodos de objeto',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/02.html'
                    },
                    {
                        id: 141,
                        title: 'O que é JSON',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/03.html'
                    },
                    {
                        id: 142,
                        title: 'Objetos',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/04.html'
                    },
                    {
                        id: 143,
                        title: 'Rick e Morty',
                        type: 'guided_project',
                        description: 'Pronto para embarcar em uma jornada interdimensional? Nesta fase, vamos mergulhar no multiverso do JSON. Analisaremos e apresentaremos dados do mundo de Rick e Morty, estabelecendo a base para nossa bússola de personagens.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 144,
                        title: 'Variáveis ​​e Escopo ES6',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 145,
                        title: 'Funções de seta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/05.html'
                    },
                    {
                        id: 146,
                        title: 'Parâmetros da função de seta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 147,
                        title: 'ES6 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/07.html'
                    },
                    {
                        id: 148,
                        title: 'Literais de modelo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/05.html'
                    },
                    {
                        id: 149,
                        title: 'Desestruturação',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 150,
                        title: 'ES6 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/07.html'
                    },
                    {
                        id: 151,
                        title: 'Rick e Morty',
                        type: 'guided_project',
                        description: 'É hora de se conectar com o cosmos! Agora, estamos migrando do JSON local para a extração de dados em tempo real por meio de uma API. Aproveite o poder da conectividade da web para buscar e exibir detalhes dinâmicos do universo de Rick e Morty.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 9,
                title: 'DOM e Eventos',
                description: 'Aprenda sobre a árvore DOM e as relações dos nós',
                locked: true,
                lessons: [{
                        id: 152,
                        title: 'Árvore e nós do documento HTML',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/01.html'
                    },
                    {
                        id: 153,
                        title: 'O Modelo de Objeto de Documento',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/02.html'
                    },
                    {
                        id: 154,
                        title: 'Criando Elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/03.html'
                    },
                    {
                        id: 155,
                        title: 'Removendo Elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/03.html'
                    },
                    {
                        id: 156,
                        title: 'O Modelo de Objeto de Documento',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/04.html'
                    },
                    {
                        id: 157,
                        title: 'Usando propriedades de eventos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/05.html'
                    },
                    {
                        id: 158,
                        title: 'Explorando Propriedades de Eventos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/06.html'
                    },
                    {
                        id: 159,
                        title: 'Adicionando Eventos com Métodos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/05.html'
                    },
                    {
                        id: 160,
                        title: 'Eventos de toque',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/06.html'
                    },
                    {
                        id: 161,
                        title: 'Eventos JavaScript',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/07.html'
                    },
                    {
                        id: 162,
                        title: 'Cifra de César',
                        type: 'guided_project',
                        description: 'Entre no mundo da criptografia! Neste projeto, estamos construindo um tradutor de Cifra de César ao vivo. Insira sua mensagem e veja como ela é codificada perfeitamente diante dos seus olhos.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 10,
                title: 'HTML Semântico e Acessibilidade',
                description: 'Aprenda a criar páginas web acessíveis',
                locked: true,
                lessons: [{
                        id: 163,
                        title: 'Alternativas semânticas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/01.html'
                    },
                    {
                        id: 164,
                        title: 'Estrutura da página semântica',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/02.html'
                    },
                    {
                        id: 165,
                        title: 'Elementos que mudam o visual',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/03.html'
                    },
                    {
                        id: 166,
                        title: 'HTML semântico',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/04.html'
                    },
                    {
                        id: 167,
                        title: 'Noções básicas de acessibilidade HTML',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/02.html'
                    },
                    {
                        id: 168,
                        title: 'Acessibilidade WAI-ARIA',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/03.html'
                    },
                    {
                        id: 169,
                        title: 'Noções básicas de acessibilidade',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/04.html'
                    },
                    {
                        id: 170,
                        title: 'Criando Formulários',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/02.html'
                    },
                    {
                        id: 171,
                        title: 'Formulários com rótulos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/03.html'
                    },
                    {
                        id: 172,
                        title: 'Formulários HTML',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/04.html'
                    },
                    {
                        id: 173,
                        title: 'Portfólio de Máquina de Escrever',
                        type: 'guided_project',
                        description: 'Abrace o charme do passado com um toque moderno! Neste projeto, estamos criando uma página de portfólio pessoal com o estilo de uma máquina de escrever clássica. Suas conquistas, experiências e habilidades são "digitadas" na tela, apresentando sua jornada de uma forma cativante e nostálgica.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 11,
                title: 'Sincronia e Assincronia em JS',
                description: 'Aprenda como funciona o JavaScript assíncrono',
                locked: true,
                lessons: [{
                        id: 174,
                        title: 'Sincronia e Assincronia em JS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/01.html'
                    },
                    {
                        id: 175,
                        title: 'Comediante Bot',
                        type: 'guided_project',
                        description: 'Pronto para algumas risadas? Vamos preparar o cenário para o nosso próprio Robô Comediante. Nesta primeira parte, programaremos nosso robô para fazer uma piada, garantindo que nosso comediante virtual comece com uma apresentação de abertura impactante.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 176,
                        title: 'Tempo limite e intervalos em JS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/03.html'
                    },
                    {
                        id: 177,
                        title: 'Esperando em JS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/03.html'
                    },
                    {
                        id: 178,
                        title: 'Sincronia e Assincronia em JS',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/04.html'
                    },
                    {
                        id: 179,
                        title: 'Comediante Bot',
                        type: 'guided_project',
                        description: 'Agora, vamos aprimorar o jogo do nosso Robô Comediante. Nesta fase, incorporaremos interatividade, permitindo que você peça outra piada.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 12,
                title: 'Classes de JavaScript',
                description: 'Crie modelos para objetos usando classes',
                locked: true,
                lessons: [{
                        id: 180,
                        title: 'Usando Classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/01.html'
                    },
                    {
                        id: 181,
                        title: 'Classes com Métodos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/02.html'
                    },
                    {
                        id: 182,
                        title: 'Criando Instâncias',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/03.html'
                    },
                    {
                        id: 183,
                        title: 'Aulas de JavaScript 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/05.html'
                    },
                    {
                        id: 184,
                        title: 'Patas de Pixel',
                        type: 'guided_project',
                        description: 'Neste projeto, daremos vida ao nosso próprio companheiro pixelado. Crie um bichinho charmoso que você possa alimentar e cuidar.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 185,
                        title: 'Extensão de classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/01.html'
                    },
                    {
                        id: 186,
                        title: 'Métodos de substituição',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/02.html'
                    },
                    {
                        id: 187,
                        title: 'Propriedades da subclasse de codificação',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/03.html'
                    },
                    {
                        id: 188,
                        title: 'Aulas de JavaScript 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/05.html'
                    },
                    {
                        id: 47,
                        title: 'Patas de Pixel',
                        type: 'guided_project',
                        description: 'Sentindo amor pelo seu bichinho? É hora de dar as boas-vindas a outro! Mas, com o dobro de patas pixeladas, vem o dobro de responsabilidade. Nesta fase, não só apresentaremos um novo bichinho, como também adicionaremos níveis de desafio à jogabilidade, garantindo que suas habilidades de cuidador de pets sejam realmente colocadas à prova.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 13,
                title: 'Introdução ao React',
                description: 'Use React para criar aplicativos da web modernos',
                locked: true,
                lessons: [{
                        id: 190,
                        title: 'Introdução ao React',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/01.html'
                    },
                    {
                        id: 191,
                        title: 'Componentes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/02.html'
                    },
                    {
                        id: 192,
                        title: 'Noções básicas de React 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/05.html'
                    },
                    {
                        id: 193,
                        title: 'JSX',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/03.html'
                    },
                    {
                        id: 194,
                        title: 'Propriedades',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/04.html'
                    },
                    {
                        id: 195,
                        title: 'Botões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/03.html'
                    },
                    {
                        id: 196,
                        title: 'Estado',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/04.html'
                    },
                    {
                        id: 197,
                        title: 'Noções básicas de React 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/05.html'
                    },
                    {
                        id: 198,
                        title: 'Contador de pontos',
                        type: 'guided_project',
                        description: 'Crie um aplicativo React para monitorar as pontuações de duas equipes usando recursos essenciais do React',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 199,
                        title: 'Usando folhas de estilo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/03.html'
                    },
                    {
                        id: 200,
                        title: 'Usando propriedades de estilo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/04.html'
                    },
                    {
                        id: 201,
                        title: 'Noções básicas de React 3',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/05.html'
                    },
                    {
                        id: 202,
                        title: 'Contador de pontos',
                        type: 'guided_project',
                        description: 'Nesta segunda parte, daremos vida ao aplicativo Score Keeper com estilo',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 14,
                title: 'Fundamentos do React',
                description: 'Aprenda conceitos essenciais do React para aprimorar seus aplicativos',
                locked: true,
                lessons: [{
                        id: 203,
                        title: 'Renderização Condicional 1',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/01.html'
                    },
                    {
                        id: 204,
                        title: 'Renderização Condicional 2',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/02.html'
                    },
                    {
                        id: 205,
                        title: 'Fragmentos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/03.html'
                    },
                    {
                        id: 206,
                        title: 'Fundamentos do React 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/async/04.html'
                    },
                    {
                        id: 207,
                        title: 'Propriedades destrutivas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/01.html'
                    },
                    {
                        id: 208,
                        title: 'Propriedades padrão',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/02.html'
                    },
                    {
                        id: 209,
                        title: 'Propriedades complexas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/03.html'
                    },
                    {
                        id: 210,
                        title: 'Matrizes em React',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/01.html'
                    },
                    {
                        id: 211,
                        title: 'Entrada',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/02.html'
                    },
                    {
                        id: 212,
                        title: 'Área de texto',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/03.html'
                    },
                    {
                        id: 213,
                        title: 'Componentes Controlados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/03.html'
                    },
                    {
                        id: 214,
                        title: 'Fundamentos do React 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/async/04.html'
                    },
                    {
                        id: 215,
                        title: 'Clone de Wordle',
                        type: 'guided_project',
                        description: 'Recrie o mundialmente famoso jogo de palavras construindo sua lógica e mecânica central, passo a passo',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 15,
                title: 'Mergulho profundo no React',
                description: 'Mergulhe mais fundo no React para dominar aplicativos de página única',
                locked: true,
                lessons: [{
                        id: 216,
                        title: 'Crianças',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/01.html'
                    },
                    {
                        id: 217,
                        title: 'Funções de Passagem',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/02.html'
                    },
                    {
                        id: 218,
                        title: 'Perfuração de adereços',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/03.html'
                    },
                    {
                        id: 219,
                        title: 'React Deep Dive 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/04.html'
                    },
                    {
                        id: 220,
                        title: 'useState',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/05.html'
                    },
                    {
                        id: 221,
                        title: 'useEffect',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/06.html'
                    },
                    {
                        id: 222,
                        title: 'Mergulho Profundo React 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/04.html'
                    },
                    {
                        id: 223,
                        title: 'Buscar',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/01.html'
                    },
                    {
                        id: 224,
                        title: 'Roteador',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/02.html'
                    },
                    {
                        id: 225,
                        title: 'Parâmetros de consulta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/03.html'
                    },
                    {
                        id: 226,
                        title: 'Mergulho Profundo 3 no React',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/04.html'
                    },
                    {
                        id: 227,
                        title: 'Pokédex',
                        type: 'guided_project',
                        description: 'Estabeleça a base para seu Pokédex buscando dados de Pokémon de uma API e exibindo-os',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 228,
                        title: 'Pokédex',
                        type: 'guided_project',
                        description: 'Melhore seu Pokédex com um recurso de busca para encontrar rapidamente seus Pokémon favoritos',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 229,
                        title: 'Pokédex',
                        type: 'guided_project',
                        description: 'Complete seu Pokédex implementando uma visão detalhada para Pokémon individuais',
                        subAction: 'PARTE 3',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 230,
                        title: 'Certificado de Conclusão',
                        type: 'certificate',
                        completed: false,
                        locked: true,
                        url: './certificate/index.html'
                    }
                ]
            }
        ]
    };

    // let courseData = JSON.parse(localStorage.getItem('courseProgress_js_full')) || JSON.parse(JSON.stringify(initialCourseData));
    // const saveProgress = () => localStorage.setItem('courseProgress_js_full', JSON.stringify(courseData));

     let courseData = JSON.parse(localStorage.getItem(COURSE_STORAGE_KEY)) || JSON.parse(JSON.stringify(initialCourseData));

    // --- FUNÇÕES DE LÓGICA E ESTADO ---
    const saveProgress = () => localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(courseData));

    const resetProgress = () => {
        if (confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
            localStorage.removeItem(COURSE_STORAGE_KEY);
            courseData = JSON.parse(JSON.stringify(initialCourseData));
            renderApp();
        }
    };

    const completeLesson = (lessonId) => {
        const currentSection = courseData.sections.find(s => s.id === courseData.currentSectionId);
        const lesson = currentSection.lessons.find(l => l.id === lessonId);

        if (!lesson || lesson.completed || lesson.locked || lesson.type === 'certificate') return;

        lesson.completed = true;

        const lessonIndex = currentSection.lessons.findIndex(l => l.id === lessonId);
        if (lessonIndex + 1 < currentSection.lessons.length) {
            currentSection.lessons[lessonIndex + 1].locked = false;
        }

        const regularLessons = currentSection.lessons.filter(l => l.type !== 'certificate');
        const allSectionLessonsCompleted = regularLessons.every(l => l.completed);

        if (allSectionLessonsCompleted) {
            const currentSectionIndex = courseData.sections.findIndex(s => s.id === courseData.currentSectionId);
            if (currentSectionIndex + 1 < courseData.sections.length) {
                const nextSection = courseData.sections[currentSectionIndex + 1];
                nextSection.locked = false;
                if (nextSection.lessons.length > 0) {
                    nextSection.lessons[0].locked = false;
                }
            }
        }

        saveProgress();
        renderApp();
    };

    const renderSidebar = () => {
        sectionsNavList.innerHTML = '';
        let completedSectionsCount = 0;

        courseData.sections.forEach(section => {
            const regularLessons = section.lessons.filter(l => l.type !== 'certificate');
            const completedLessons = regularLessons.filter(l => l.completed).length;

            if (regularLessons.length > 0 && completedLessons === regularLessons.length) {
                completedSectionsCount++;
            }

            const navItem = document.createElement('div');
            navItem.className = 'section-nav-item';
            navItem.classList.toggle('active', section.id === courseData.currentSectionId);
            navItem.classList.toggle('locked', section.locked);
            navItem.dataset.sectionId = section.id;
            navItem.innerHTML = `<span class="title">${section.title}</span><span class="status">${section.locked ? '<i class="fas fa-lock"></i>' : `${completedLessons}/${regularLessons.length}`}</span>`;
            navItem.addEventListener('click', () => changeSection(section.id));
            sectionsNavList.appendChild(navItem);
        });

        const totalSections = courseData.sections.length;
        totalProgressText.textContent = `${completedSectionsCount}/${totalSections} seções`;
        totalProgressBar.style.width = `${(completedSectionsCount / totalSections) * 100}%`;
    };

    const renderMainContent = () => {
        const section = courseData.sections.find(s => s.id === courseData.currentSectionId);
        if (!section) return;

        const regularLessons = section.lessons.filter(l => l.type !== 'certificate');
        const completedLessons = regularLessons.filter(l => l.completed).length;
        const totalLessons = regularLessons.length;
        const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
        const nextSection = courseData.sections.find(s => s.id === section.id + 1);

        mainSectionContent.innerHTML = `
            <section class="section-details">
                <p class="section-label">SEÇÃO</p>
                <div class="section-title-header">
                    <div>
                        <h1>${section.id}. ${section.title}</h1>
                        <p class="section-description">${section.description}</p>
                    </div>
                    <div class="progress-circle" style="background: conic-gradient(var(--purple-highlight) ${progressPercentage * 3.6}deg, var(--card-bg) 0deg);"><span class="progress-text">${progressPercentage}%</span></div>
                </div>
            </section>
            <section class="lessons-container">
                <p class="lessons-label">LIÇÕES</p>
                <div class="lessons-list" id="lessons-list-container">
                    ${section.lessons.map((lesson, index) => renderLessonCard(lesson, index)).join('')}
                </div>
            </section>
            ${nextSection ? `<section class="next-section-card"><p>PRÓXIMA SEÇÃO</p><div class="next-section-content"><span>${nextSection.title}</span><button class="continue-button" ${progressPercentage < 100 ? 'disabled' : ''} data-next-section-id="${nextSection.id}">Continuar</button></div></section>` : ''}
        `;

        document.getElementById('lessons-list-container').addEventListener('click', (e) => {
            const card = e.target.closest('.lesson-card');
            if (!card) return;
            if (card.classList.contains('locked')) {
                e.preventDefault();
                return;
            }
            if (e.target.closest('.sub-button')) {
                e.preventDefault();
                alert(`Prática "${card.querySelector('.lesson-title').textContent}" sobrecarregada!`);
                return;
            }
            const lessonId = parseInt(card.dataset.lessonId);
            completeLesson(lessonId);
        });

        const continueBtn = document.querySelector('.continue-button');
        if (continueBtn && !continueBtn.disabled) {
            continueBtn.addEventListener('click', (e) => changeSection(parseInt(e.target.dataset.nextSectionId)));
        }
    };

    // ===================== INÍCIO DA ATUALIZAÇÃO DA FUNÇÃO =====================
    // A função renderLessonCard foi completamente reestruturada para suportar múltiplos layouts de card.
    const renderLessonCard = (lesson, index) => {
        const isFirstUnlocked = !lesson.locked && !lesson.completed;
        const lockIcon = '<i class="fas fa-lock status-icon"></i>';
        const statusIcon = lesson.completed ? '<i class="fas fa-check-circle status-icon completed"></i>' : '<i class="far fa-circle status-icon"></i>';
        const linkAttributes = `href="${lesson.url}"`;

        // Lógica para o card de certificado (sem alterações)
        if (lesson.type === 'certificate') {
            return `<a class="lesson-card certificate-card ${lesson.locked ? 'locked' : ''}" data-lesson-id="${lesson.id}" ${linkAttributes}>
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>Front-End</span></div>
                        <div class="cert-title">${lesson.title}</div>
                        ${lesson.locked ? lockIcon : statusIcon}
                    </a>`;
        }

        const lessonNumber = String(index + 1).padStart(2, '0');

        // Variáveis para construir as partes do card dinamicamente
        let topTypeInfo = '';
        let bottomContentHTML = '';
        let mainStatusIcon = '';

        // Adiciona a classe do tipo de lição ao card para estilização (ex: 'learn-card', 'practice-card')
        const typeClass = `${lesson.type}-card`;

        // Lógica para construir o card com base no 'type' da lição
        if (lesson.type === 'guided_project') {
            // NOVO TIPO: Projeto Guiado
            // Não possui 'typeInfo' no topo. A informação fica na parte de baixo.
            bottomContentHTML = `
                <div class="lesson-bottom-info">
                    <span class="sub-action-text">${lesson.subAction || ''}</span>
                    <div class="lesson-status">
                        <span class="lesson-type ${lesson.type} guided-project-label"><i class="fas fa-code"></i> PROJETO GUIADO</span>
                        ${lesson.locked ? lockIcon : statusIcon}
                    </div>
                </div>
            `;
        } else if (lesson.type === 'practice') {
            // TIPO: Prática (existente)
            topTypeInfo = `<span class="lesson-type ${lesson.type}"><i class="fas fa-bolt"></i> PRÁTICA</span>`;
            bottomContentHTML = `
                <div class="lesson-bottom-info">
                    <button class="sub-button"><i class="fas fa-bolt"></i> ${lesson.subAction || ''}</button>
                    <div class="lesson-status">
                        ${lesson.locked ? lockIcon : statusIcon}
                    </div>
                </div>`;
        } else {
            // TIPO PADRÃO: Aprender (learn)
            topTypeInfo = `<span class="lesson-type ${lesson.type}"><i class="fa-regular fa-file-lines"></i> APRENDER</span>`;
            // Para o tipo 'learn', o ícone de status fica no topo.
            mainStatusIcon = lesson.locked ? lockIcon : statusIcon;
        }

        // Renderização final do card, montando as peças
        return `
            <a class="lesson-card ${typeClass} ${lesson.locked ? 'locked' : ''} ${isFirstUnlocked ? 'active' : ''}" data-lesson-id="${lesson.id}" ${linkAttributes}>
                <div class="lesson-main-info">
                    <div class="lesson-title-area">
                        <span class="lesson-number">${lessonNumber}</span>
                        <span class="lesson-title">${lesson.title}</span>
                    </div>
                    <div class="lesson-status">
                        ${topTypeInfo}
                        ${mainStatusIcon}
                    </div>
                </div>
                
                ${lesson.description ? `<p class="lesson-description">${lesson.description}</p>` : ''}

                ${bottomContentHTML}
            </a>`;
    };
    // ====================== FIM DA ATUALIZAÇÃO DA FUNÇÃO =======================

    const renderApp = () => {
        renderSidebar();
        renderMainContent();
    };

    const changeSection = (sectionId) => {
        const section = courseData.sections.find(s => s.id === sectionId);
        if (section && !section.locked) {
            courseData.currentSectionId = sectionId;
            renderApp();
            if (window.innerWidth < 1024) sidebar.classList.remove('visible');
        }
    };

    openSidebarButton.addEventListener('click', () => sidebar.classList.add('visible'));
    closeSidebarButton.addEventListener('click', () => sidebar.classList.remove('visible'));
    resetProgressButton.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
            localStorage.removeItem('courseProgress_js_full');
            courseData = JSON.parse(JSON.stringify(initialCourseData));
            renderApp();
        }
    });

    renderApp();
});