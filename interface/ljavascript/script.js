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
    const COURSE_STORAGE_KEY = 'courseProgress_js';

    // --- ESTRUTURA DE DADOS COMPLETA PARA O CURSO DE JAVASCRIPT ---
    const initialCourseData = {
        currentSectionId: 1,
        sections: [{
                id: 1,
                title: 'Noções básicas de JavaScript',
                description: 'Crie variáveis que armazenam números, strings e booleanos',
                locked: false,
                lessons: [{
                        id: 1,
                        title: 'Criando Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: false,
                        url: './js-basico/licao01/aprender01/game.html'
                    },
                    {
                        id: 2,
                        title: 'Usando Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './js-basico/licao02/aprender01/game.html'
                    },
                    {
                        id: 3,
                        title: 'Usando Verdadeiro e Falso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './js-basico/licao03/aprender01/game.html'
                    },
                    {
                        id: 4,
                        title: 'Verificando a igualdade numérica',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './js-basico/licao04/aprender01/game.html'
                    },
                    {
                        id: 5,
                        title: 'Noções básicas de JavaScript',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './js-basico/licao05/praticar01/game.html'
                    },
                ]
            },
            {
                id: 2,
                title: 'Tipos e Comparações',
                description: 'Armazene o resultado das comparações em variáveis',
                locked: true,
                lessons: [{
                        id: 6,
                        title: 'Comparando números',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './tipos-comparacoes/licao01/aprender01/game.html'
                    },
                    {
                        id: 7,
                        title: 'Comparando Strings',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './tipos-comparacoes/licao02/aprender01/game.html'
                    },
                    {
                        id: 8,
                        title: 'Descobrindo Tipos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './tipos-comparacoes/licao03/aprender01/game.html'
                    },
                    {
                        id: 9,
                        title: 'Operadores Lógicos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './tipos-comparacoes/licao04/aprender01/game.html'
                    },
                    {
                        id: 10,
                        title: 'Tipos e Comparações',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './tipos-comparacoes/licao05/praticar01/game.html'
                    },
                ]
            },
            {
                id: 3,
                title: 'Condicionais',
                description: 'Condicionais de código para construir programas que tomem decisões',
                locked: true,
                lessons: [{
                        id: 11,
                        title: 'Tomando decisões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './condicionais/licao01/aprender01/game.html'
                    },
                    {
                        id: 12,
                        title: 'Condições de uso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './condicionais/licao02/aprender01/game.html'
                    },
                    {
                        id: 13,
                        title: 'Codificando Instruções Else',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './condicionais/licao03/aprender01/game.html'
                    },
                    {
                        id: 14,
                        title: 'Incorporando Else If',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './condicionais/licao04/aprender01/game.html'
                    },
                    {
                        id: 15,
                        title: 'Condicionais',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './condicionais/licao05/praticar01/game.html'
                    },
                ]
            },
            {
                id: 4,
                title: 'Laços',
                description: 'Crie loops para repetir linhas de código',
                locked: true,
                lessons: [{
                        id: 16,
                        title: 'Variáveis autoatribuíveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops/licao01/aprender01/game.html'
                    },
                    {
                        id: 17,
                        title: 'Atribuição com operadores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops/licao02/aprender01/game.html'
                    },
                    {
                        id: 18,
                        title: 'Repetindo código com loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops/licao03/aprender01/game.html'
                    },
                    {
                        id: 19,
                        title: 'Parando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops/licao04/aprender01/game.html'
                    },
                    {
                        id: 20,
                        title: 'Laços 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './loops/licao05/praticar01/game.html'
                    },
                    {
                        id: 21,
                        title: 'Controlando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops/licao06/aprender01/game.html'
                    },
                    {
                        id: 22,
                        title: 'Repetindo código com loops For',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops/licao07/aprender01/game.html'
                    },
                    {
                        id: 23,
                        title: 'Looping para baixo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops/licao08/aprender01/game.html'
                    },
                    {
                        id: 24,
                        title: 'Laços 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './loops/licao09/praticar01/game.html'
                    },
                ]
            },
            {
                id: 5,
                title: 'Matrizes',
                description: 'Use matrizes para armazenar um grupo de valores em uma variável',
                locked: true,
                lessons: [{
                        id: 25,
                        title: 'Agrupando valores com matrizes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './arrays/licao01/aprender01/game.html'
                    },
                    {
                        id: 26,
                        title: 'Alterando valores em matrizes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './arrays/licao02/aprender01/game.html'
                    },
                    {
                        id: 27,
                        title: 'Empurrando e removendo matrizes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './arrays/licao03/aprender01/game.html'
                    },
                    {
                        id: 28,
                        title: 'Decidindo com Arrays',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './arrays/licao04/aprender01/game.html'
                    },
                    {
                        id: 29,
                        title: 'Matrizes',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './arrays/licao05/praticar01/game.html'
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
                        url: './funcoes/licao01/aprender01/game.html'
                    },
                    {
                        id: 31,
                        title: 'Criando Parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes/licao02/aprender01/game.html'
                    },
                    {
                        id: 32,
                        title: 'Retomando Valores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes/licao03/aprender01/game.html'
                    },
                    {
                        id: 33,
                        title: 'Funções 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './funcoes/licao04/praticar01/game.html'
                    },
                    {
                        id: 34,
                        title: 'Usando vários parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes/licao05/aprender01/game.html'
                    },
                    {
                        id: 35,
                        title: 'Compreendendo Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes/licao06/aprender01/game.html'
                    },
                    {
                        id: 36,
                        title: 'Funções 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './funcoes/licao07/praticar01/game.html'
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
                        url: './certificate/index.html'
                    }
                ]
            }
        ]
    };

    // let courseData = JSON.parse(localStorage.getItem('courseProgress_js')) || JSON.parse(JSON.stringify(initialCourseData));
    // const saveProgress = () => localStorage.setItem('courseProgress_js', JSON.stringify(courseData));

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
        let subButtonHTML = (lesson.type === 'practice') ? `<div class="sub-button-container"><button class="sub-button"><i class="fas fa-bolt"></i> ${lesson.subAction}</button>${lesson.locked ? lockIcon : statusIcon}</div>` : '';

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