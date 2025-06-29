document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar-button');
    const closeSidebarButton = document.getElementById('close-sidebar-button');
    const resetProgressButton = document.getElementById('reset-progress-button');
    const sectionsNavList = document.getElementById('sections-nav-list');
    const mainSectionContent = document.getElementById('main-section-content');
    const totalProgressBar = document.getElementById('total-progress-bar');
    const totalProgressText = document.getElementById('total-progress-text');

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
                        url: './lessons/js-basics/01.html'
                    },
                    {
                        id: 2,
                        title: 'Estruturando texto com tags',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/02.html'
                    },
                    {
                        id: 3,
                        title: 'Noções básicas de HTML 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/05.html'
                    },
                    {
                        id: 4,
                        title: 'Criando Links',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/03.html'
                    },
                    {
                        id: 5,
                        title: 'Adicionando Imagens',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 6,
                        title: 'Noções básicas de HTML 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/05.html'
                    },
                    {
                        id: 7,
                        title: 'Linktree PARTE 1',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/05.html'
                    },
                    {
                        id: 8,
                        title: 'Código padrão',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 9,
                        title: 'Folha de Estilo e Seletores Básicos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 10,
                        title: 'Estilizando texto',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 11,
                        title: 'Definindo tamanho e bordas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 12,
                        title: 'Noções básicas de CSS 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/05.html'
                    },
                    {
                        id: 13,
                        title: 'Construindo com o modelo de caixa',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 14,
                        title: 'Adicionando preenchimento com uma linha',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 15,
                        title: 'Estilizando cantos com uma linha',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 16,
                        title: 'Noções básicas de CSS 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/05.html'
                    },
                    {
                        id: 17,
                        title: 'Linktree PARTE 2',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
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
                        url: './lessons/types-comparisons/01.html'
                    },
                    {
                        id: 19,
                        title: 'Usando Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 20,
                        title: 'Usando Verdadeiro e Falso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/03.html'
                    },
                    {
                        id: 21,
                        title: 'Verificando a igualdade numérica',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/04.html'
                    },
                    {
                        id: 22,
                        title: 'Noções básicas de JavaScript',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 23,
                        title: 'Comparando números',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 24,
                        title: 'Comparando Strings',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 25,
                        title: 'Descobrindo Tipos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 26,
                        title: 'Operadores Lógicos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 27,
                        title: 'Tipos e Comparações',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 28,
                        title: 'Tomando decisões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 29,
                        title: 'Condições de uso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 30,
                        title: 'Codificando instruções Else',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 31,
                        title: 'Incorporando Else If',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 32,
                        title: 'Condicionais',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 33,
                        title: 'Reutilizando código com funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 34,
                        title: 'Interagindo com páginas da Web',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 35,
                        title: 'Conversor de unidades PARTE 1',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 36,
                        title: 'Como acessar um elemento HTML',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 37,
                        title: 'Acesse vários elementos HTML',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 38,
                        title: 'Páginas da Web Dinâmicas 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 39,
                        title: 'Botões de construção',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 40,
                        title: 'Coletando informações',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 41,
                        title: 'Obtendo a entrada do usuário',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 42,
                        title: 'HTML Intermediário',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 43,
                        title: 'Definindo atributos dinamicamente',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 44,
                        title: 'Alternando classes CSS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 45,
                        title: 'Selecione',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 46,
                        title: 'Páginas Web Dinâmicas 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 47,
                        title: 'Conversor de unidades PARTE 2 ',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
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
                        url: './lessons/conditionals/01.html'
                    },
                    {
                        id: 49,
                        title: 'Listas de construção',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/02.html'
                    },
                    {
                        id: 50,
                        title: 'Elemento Span',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 51,
                        title: 'Estilizando grupos de elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 52,
                        title: 'Descobrindo Elementos Filhos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 53,
                        title: 'Usando classes para layouts',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 54,
                        title: 'CSS Intermediário 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 55,
                        title: 'Adicionando cor com valores hexadecimais',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 56,
                        title: 'Definindo o tamanho com porcentagens',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 57,
                        title: 'Combinando várias classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 58,
                        title: 'Seletores de agrupamento',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 59,
                        title: 'CSS Intermediário 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 60,
                        title: 'Cardápio da cafeteria PARTE 1',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 61,
                        title: 'Exibindo Elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 62,
                        title: 'Imagens Flutuantes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 63,
                        title: 'Posicionamento Relativo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 64,
                        title: 'Fundamentos de Layout CSS 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 65,
                        title: 'Posição Absoluta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 66,
                        title: 'Índice Z',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 67,
                        title: 'Fundamentos de Layout CSS 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 68,
                        title: 'Bibliotecas JavaScript',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 69,
                        title: 'Cardápio da cafeteria PARTE 2',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
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
                        url: './lessons/loops/01.html'
                    },
                    {
                        id: 71,
                        title: 'Atribuição com operadores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/02.html'
                    },
                    {
                        id: 72,
                        title: 'Repetindo código com loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/03.html'
                    },
                    {
                        id: 73,
                        title: 'Parando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/04.html'
                    },
                    {
                        id: 74,
                        title: 'Laços 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/05.html'
                    },
                    {
                        id: 75,
                        title: 'Jogo de Adivinhação PARTE 1',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/06.html'
                    },
                    {
                        id: 76,
                        title: 'Controlando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/07.html'
                    },
                    {
                        id: 77,
                        title: 'Repetindo código com loops For',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/08.html'
                    },
                    {
                        id: 78,
                        title: 'Looping para baixo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/08.html'
                    },
                    {
                        id: 79,
                        title: 'Laços 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/09.html'
                    },
                    {
                        id: 80,
                        title: 'Jogo de Adivinhação PARTE 2',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/08.html'
                    },
                ]
            },
            {
                id: 5,
                title: 'Caixa flexível',
                description: 'Crie belos layouts usando Flexbox',
                locked: true,
                lessons: [{
                        id: 81,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/01.html'
                    },
                    {
                        id: 82,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 83,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 84,
                        title: '',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 85,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/01.html'
                    },
                    {
                        id: 86,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 87,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 88,
                        title: '',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 89,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/04.html'
                    },
                    {
                        id: 90,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/04.html'
                    },
                    {
                        id: 91,
                        title: '',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 92,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/01.html'
                    },
                    {
                        id: 93,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 94,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 95,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 96,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 97,
                        title: '',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 98,
                        title: '',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                ]
            },
            {
                id: 6,
                title: 'Funções',
                description: 'Funções de código para tornar o código reutilizável e mais fácil de ler',
                locked: true,
                lessons: [{
                        id: 30,
                        title: 'Reutilizando código com funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/01.html'
                    },
                    {
                        id: 31,
                        title: 'Criando Parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/02.html'
                    },
                    {
                        id: 32,
                        title: 'Retomando Valores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/03.html'
                    },
                    {
                        id: 33,
                        title: 'Funções 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/04.html'
                    },
                    {
                        id: 34,
                        title: 'Usando vários parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 35,
                        title: 'Compreendendo Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/06.html'
                    },
                    {
                        id: 36,
                        title: 'Funções 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/07.html'
                    },
                ]
            },
            {
                id: 7,
                title: 'Objetos',
                description: 'Crie objetos para armazenar valores relacionados em uma variável',
                locked: true,
                lessons: [{
                        id: 37,
                        title: 'Agrupando valores em objetos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/01.html'
                    },
                    {
                        id: 38,
                        title: 'Usando métodos de objeto',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 39,
                        title: 'O que é JSON',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 40,
                        title: 'Objetos',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                ]
            },
            {
                id: 8,
                title: 'Funções Aplicadas',
                description: 'Crie funções que alterem sua saída com base na entrada',
                locked: true,
                lessons: [{
                        id: 41,
                        title: 'Condicionais de aninhamento',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/01.html'
                    },
                    {
                        id: 42,
                        title: 'Usando Condições e Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/02.html'
                    },
                    {
                        id: 43,
                        title: 'Parando funções com retorno',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/03.html'
                    },
                    {
                        id: 44,
                        title: 'Funções Aplicadas 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/04.html'
                    },
                    {
                        id: 45,
                        title: 'Adicionando Loops a Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/05.html'
                    },
                    {
                        id: 46,
                        title: 'Looping sobre matrizes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 47,
                        title: 'Funções Aplicadas 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/07.html'
                    },
                ]
            },
            {
                id: 9,
                title: 'ES6',
                description: 'Aprenda a usar as funções de seta do ES6',
                locked: true,
                lessons: [{
                        id: 48,
                        title: 'Variáveis e Escopo ES6',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/01.html'
                    },
                    {
                        id: 49,
                        title: 'Funções de seta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/02.html'
                    },
                    {
                        id: 50,
                        title: 'Parâmetros da função de seta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/03.html'
                    },
                    {
                        id: 51,
                        title: 'ES6 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/04.html'
                    },
                    {
                        id: 52,
                        title: 'Literais de modelo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/05.html'
                    },
                    {
                        id: 53,
                        title: 'Desestruturação',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/06.html'
                    },
                    {
                        id: 54,
                        title: 'ES6 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/07.html'
                    },
                ]
            },
            {
                id: 10,
                title: 'Operações de matriz',
                description: 'Otimize seu fluxo de trabalho com operações de matriz',
                locked: true,
                lessons: [{
                        id: 55,
                        title: 'Matriz.map()',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/01.html'
                    },
                    {
                        id: 56,
                        title: 'Matriz.filter()',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/02.html'
                    },
                    {
                        id: 57,
                        title: 'Matriz.reduce()',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/03.html'
                    },
                    {
                        id: 58,
                        title: 'Operações de matriz',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/array-operations/04.html'
                    },
                ]
            },
            {
                id: 11,
                title: 'Páginas da Web dinâmicas',
                description: 'Use HTML e JavaScript para criar elementos interativos',
                locked: true,
                lessons: [{
                        id: 59,
                        title: 'Interagindo com páginas da Web',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/01.html'
                    },
                    {
                        id: 60,
                        title: 'Como acessar um elemento HTML',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/02.html'
                    },
                    {
                        id: 61,
                        title: 'Acesse vários elementos HTML',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/03.html'
                    },
                    {
                        id: 62,
                        title: 'Páginas da Web Dinâmicas 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/04.html'
                    },
                    {
                        id: 63,
                        title: 'Obtendo a entrada do usuário',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/05.html'
                    },
                    {
                        id: 64,
                        title: 'Definindo atributos dinamicamente',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/06.html'
                    },
                    {
                        id: 65,
                        title: 'Alternando classes CSS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/07.html'
                    },
                    {
                        id: 66,
                        title: 'Páginas da Web Dinâmicas 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/dynamic-webpages/08.html'
                    },
                ]
            },
            {
                id: 12,
                title: 'O Modelo de Objeto de Documento',
                description: 'Aprenda sobre a árvore DOM e o acesso baseado em posição',
                locked: true,
                lessons: [{
                        id: 67,
                        title: 'Árvore e nós do documento HTML',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/01.html'
                    },
                    {
                        id: 68,
                        title: 'O Modelo de Objeto de Documento',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/02.html'
                    },
                    {
                        id: 69,
                        title: 'Criando Elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/03.html'
                    },
                    {
                        id: 70,
                        title: 'Removendo Elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/04.html'
                    },
                    {
                        id: 71,
                        title: 'O Modelo de Objeto de Documento',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/dom/05.html'
                    },
                ]
            },
            {
                id: 13,
                title: 'Eventos JavaScript',
                description: 'Use eventos JavaScript para fazer com que páginas da web reajam',
                locked: true,
                lessons: [{
                        id: 72,
                        title: 'Usando propriedades de eventos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/01.html'
                    },
                    {
                        id: 73,
                        title: 'Explorando Propriedades de Eventos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/02.html'
                    },
                    {
                        id: 74,
                        title: 'Adicionando Eventos com Métodos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/03.html'
                    },
                    {
                        id: 75,
                        title: 'Eventos de toque',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/04.html'
                    },
                    {
                        id: 76,
                        title: 'Eventos JavaScript',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-events/05.html'
                    },
                ]
            },
            {
                id: 14,
                title: 'Sincronia e Assincronia em JS',
                description: 'Aprenda como funciona o JavaScript assíncrono',
                locked: true,
                lessons: [{
                        id: 77,
                        title: 'Sincronia e Assincronia em JS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/01.html'
                    },
                    {
                        id: 78,
                        title: 'Tempo limite e Intervalos em JS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/02.html'
                    },
                    {
                        id: 79,
                        title: 'Esperando em JS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/async/03.html'
                    },
                    {
                        id: 80,
                        title: 'Sincronia e Assincronia em JS',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/async/04.html'
                    },
                ]
            },
            {
                id: 15,
                title: 'Classes de JavaScript',
                description: 'Crie modelos para objetos usando classes',
                locked: true,
                lessons: [{
                        id: 81,
                        title: 'Usando Classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/01.html'
                    },
                    {
                        id: 82,
                        title: 'Classes com Métodos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/02.html'
                    },
                    {
                        id: 83,
                        title: 'Criando Instâncias',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/03.html'
                    },
                    {
                        id: 84,
                        title: 'Aulas de JavaScript 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/04.html'
                    },
                    {
                        id: 85,
                        title: 'Extensão de classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/05.html'
                    },
                    {
                        id: 86,
                        title: 'Métodos de substituição',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/06.html'
                    },
                    {
                        id: 87,
                        title: 'Propriedades da subclasse de codificação',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/07.html'
                    },
                    {
                        id: 88,
                        title: 'Aulas de JavaScript 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-classes/08.html'
                    },
                ]
            },
            {
                id: 16,
                title: 'Módulos, Bibliotecas e Node',
                description: 'Use o código de outras pessoas e aprenda o básico do Node',
                locked: true,
                lessons: [{
                        id: 89,
                        title: 'Introdução aos Módulos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/modules-node/01.html'
                    },
                    {
                        id: 90,
                        title: 'Bibliotecas JavaScript',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/modules-node/02.html'
                    },
                    {
                        id: 91,
                        title: 'Introdução ao Node.js',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/modules-node/03.html'
                    },
                    {
                        id: 92,
                        title: 'Módulos, Bibliotecas e Node',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/modules-node/04.html'
                    },
                    {
                        id: 93,
                        title: 'Certificado de Conclusão',
                        type: 'certificate',
                        completed: false,
                        locked: true,
                        url: './certificate.html'
                    }
                ]
            }
        ]
    };

    let courseData = JSON.parse(localStorage.getItem('courseProgress_js_full')) || JSON.parse(JSON.stringify(initialCourseData));
    const saveProgress = () => localStorage.setItem('courseProgress_js_full', JSON.stringify(courseData));

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

    const renderLessonCard = (lesson, index) => {
        const isFirstUnlocked = !lesson.locked && !lesson.completed;
        const lockIcon = '<i class="fas fa-lock status-icon"></i>';
        const statusIcon = lesson.completed ? '<i class="fas fa-check-circle status-icon"></i>' : '<i class="far fa-circle status-icon"></i>';
        const linkAttributes = `href="${lesson.url}"`;

        if (lesson.type === 'certificate') {
            return `<a class="lesson-card certificate-card ${lesson.locked ? 'locked' : ''}" data-lesson-id="${lesson.id}" ${linkAttributes}>
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>JavaScript</span></div>
                        <div class="cert-title">${lesson.title}</div>
                        ${lesson.locked ? lockIcon : statusIcon}
                    </a>`;
        }

        const lessonNumber = String(index + 1).padStart(2, '0');
        let typeInfo = (lesson.type === 'learn') ? `<i class="fa-regular fa-file-lines"></i> APRENDER` : `<i class="fas fa-bolt"></i> PRÁTICA`;
        let subButtonHTML = (lesson.type === 'practice') ? `<div class="sub-button-container"><button class="sub-button"><i class="fas fa-bolt"></i><div class="lesson-status">
        ${lesson.subAction}</button>${lesson.locked ? lockIcon : statusIcon}</div>` : '';

        return `
            <a class="lesson-card ${lesson.locked ? 'locked' : ''} ${isFirstUnlocked ? 'active' : ''}" data-lesson-id="${lesson.id}" ${linkAttributes}>
                <div class="lesson-main-info">
                    <div class="lesson-title-area">
                        <span class="lesson-number">${lessonNumber}</span>
                        <span class="lesson-title">${lesson.title}</span>
                    </div>
                    <div class="lesson-status">
                        <span class="lesson-type ${lesson.type}">${typeInfo}</span>
                        ${lesson.type !== 'practice' ? (lesson.locked ? lockIcon : statusIcon) : ''}
                    </div>
                </div>
                ${subButtonHTML}
            </a>`;
    };

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