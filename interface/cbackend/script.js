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
    const COURSE_STORAGE_KEY = 'courseProgress_backend';

    // --- ESTRUTURA DE DADOS COMPLETA PARA O CURSO DE FRONT-END ---
    const initialCourseData = {
        currentSectionId: 1,
        sections: [{
                id: 1,
                title: 'Introdução ao JavaScript',
                description: 'Mergulhe no JavaScript e aprenda o que há de tão especial',
                locked: false,
                lessons: [{
                        id: 1,
                        title: 'Criando Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: false,
                        url: './lessons/js-basics/01.html'
                    },
                    {
                        id: 2,
                        title: 'Usando Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/02.html'
                    },
                    {
                        id: 3,
                        title: 'Usando Verdadeiro e Falso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/05.html'
                    },
                    {
                        id: 4,
                        title: 'Verificando a Igualidade numérica',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/03.html'
                    },
                    {
                        id: 5,
                        title: 'Noções básicas de JavaScript',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 6,
                        title: 'Comparando números',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/01.html'
                    },
                    {
                        id: 7,
                        title: 'Comparando Strings',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/02.html'
                    },
                    {
                        id: 8,
                        title: 'Descobrindo Tipos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/05.html'
                    },
                    {
                        id: 9,
                        title: 'Operadores Lógicos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/03.html'
                    },
                    {
                        id: 10,
                        title: 'Tipos e Comparações',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 11,
                        title: 'Programa Interruptor de Luz',
                        type: 'guided_project',
                        description: 'Crie seu primeiro projeto Javascript para operar um interruptor de luz',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 12,
                        title: 'Programa Interruptor de Luz',
                        type: 'guided_project',
                        description: 'Na segunda parte do projeto, adicionaremos condições adicionais para verificar se as luzes acenderão',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 2,
                title: 'Fluxo do programa',
                description: 'Aprenda a',
                locked: true,
                lessons: [{
                        id: 13,
                        title: 'Tomando decisões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/01.html'
                    },
                    {
                        id: 14,
                        title: 'Condições de uso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 15,
                        title: 'Codificando instruções Else',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/03.html'
                    },
                    {
                        id: 16,
                        title: 'Incorporando Else If',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/04.html'
                    },
                    {
                        id: 17,
                        title: 'Condicionais',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 18,
                        title: 'Ímpar ou Par',
                        type: 'guided_project',
                        description: 'Crie seu próprio jogo! Nesta primeira parte, prepararemos o cenário elaborando a lógica básica do jogo.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 19,
                        title: 'Variáveis ​​autoatribuíveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 20,
                        title: 'Atribuição com operadores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 21,
                        title: 'Repetindo código com loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 22,
                        title: 'Parando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 23,
                        title: 'Laços / loops 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 24,
                        title: 'Controlando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 25,
                        title: 'Repetindo código com loops For',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 26,
                        title: 'Looping para baixo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 27,
                        title: 'Laços / loops 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 28,
                        title: 'Ímpar ou Par',
                        type: 'guided_project',
                        description: 'Na segunda parte do projeto, estenderemos o jogo para jogar uma melhor de três',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 3,
                title: 'Matrizes e Funções',
                description: 'Use matrizes e funções para construir programas sofisticados',
                locked: true,
                lessons: [{
                        id: 29,
                        title: 'Agrupando valores com matrizes / arrays',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/01.html'
                    },
                    {
                        id: 30,
                        title: 'Alterando valores em matrizes / arrays',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/02.html'
                    },
                    {
                        id: 31,
                        title: 'Empurrando e removendo matrizes arrays',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 32,
                        title: 'Decidindo com Arrays',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 33,
                        title: 'Matrizes / arrays',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 34,
                        title: 'Reutilizando código com funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 35,
                        title: 'Criando Parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 36,
                        title: 'Retornando Valores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 37,
                        title: 'Funções 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 38,
                        title: 'Usando vários parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 39,
                        title: 'Compreendendo Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 40,
                        title: 'Funções 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 41,
                        title: 'Lista de tarefas',
                        type: 'guided_project',
                        description: 'Muita coisa para fazer? Muitas coisas para conciliar ao mesmo tempo? Neste projeto, vamos criar um gerenciador de tarefas para ajudar com isso!',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 42,
                        title: 'Condicionais de aninhamento',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 43,
                        title: 'Usando Condições e Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 44,
                        title: 'Parando funções com retorno',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 45,
                        title: 'Funções Aplicadas 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 46,
                        title: 'Adicionando Loops a Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 47,
                        title: 'Looping sobre matrizes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 48,
                        title: 'Funções Aplicadas 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 49,
                        title: 'Matriz .map() / Array .map()',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 50,
                        title: 'Matriz.filtro() / Array.filter()',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 51,
                        title: 'Matriz.reduzir() / Array.reduce()',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 52,
                        title: 'Operações de matriz / arrays',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 53,
                        title: 'Lista de tarefas',
                        type: 'guided_project',
                        description: 'Adicionar tarefas é útil, mas também queremos removê-las novamente. É isso que planejamos fazer na segunda parte do projeto.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 4,
                title: 'Objetos e ES6',
                description: 'Aprenda a usar objetos e funções JS mais avançadas',
                locked: true,
                lessons: [{
                        id: 54,
                        title: 'Agrupando valores em objetos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/01.html'
                    },
                    {
                        id: 55,
                        title: 'Usando métodos de objeto',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/02.html'
                    },
                    {
                        id: 56,
                        title: 'O que é JSON',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/03.html'
                    },
                    {
                        id: 57,
                        title: 'Objetos',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/04.html'
                    },
                    {
                        id: 58,
                        title: 'Variáveis ​​e Escopo ES6',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/01.html'
                    },
                    {
                        id: 59,
                        title: 'Funções de seta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/02.html'
                    },
                    {
                        id: 60,
                        title: 'Parâmetros da função de seta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/03.html'
                    },
                    {
                        id: 61,
                        title: 'ES6 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/04.html'
                    },
                    {
                        id: 62,
                        title: 'Blackjack',
                        type: 'guided_project',
                        description: 'No Blackjack, usaremos o que aprendemos até agora para construir nossa própria versão do clássico jogo de cartas',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 63,
                        title: 'Literais de modelo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/07.html'
                    },
                    {
                        id: 64,
                        title: 'Desestruturação',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/07.html'
                    },
                    {
                        id: 65,
                        title: 'ES6 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/08.html'
                    },
                    {
                        id: 66,
                        title: 'Blackjack',
                        type: 'guided_project',
                        description: 'Na segunda parte do projeto, completaremos o jogo para podermos jogar contra o computador',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 5,
                title: 'Noções básicas do Express',
                description: 'Use o Express para mergulhar no desenvolvimento de backend',
                locked: true,
                lessons: [{
                        id: 67,
                        title: 'Introdução aos Módulos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/01.html'
                    },
                    {
                        id: 68,
                        title: 'Introdução ao Node.js',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 69,
                        title: 'Módulos, Bibliotecas e Nó',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 70,
                        title: 'Cliente vs Servidores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 71,
                        title: 'Comunicando-se com uma API',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/01.html'
                    },
                    {
                        id: 72,
                        title: 'Respostas de solicitação HTTP',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 73,
                        title: 'Introdução ao Backend 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 74,
                        title: 'ExpressJS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/04.html'
                    },
                    {
                        id: 75,
                        title: 'Objetos de solicitação e resposta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/04.html'
                    },
                    {
                        id: 76,
                        title: 'Construindo um aplicativo expresso 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 77,
                        title: 'Números aleatórios',
                        type: 'guided_project',
                        description: 'Crie um backend que possa ajudar caso você não tenha uma moeda ou dado pronto',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 78,
                        title: 'Parâmetros de Rota',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 79,
                        title: 'Parâmetros de consulta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 80,
                        title: 'Construindo um aplicativo expresso 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 81,
                        title: 'Solicitações POST',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 82,
                        title: 'Solicitações PUT',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 83,
                        title: 'Solicitações de PATCH',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 84,
                        title: 'Solicitações DELETE',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 85,
                        title: 'Construindo um aplicativo expresso 3',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 86,
                        title: 'Números aleatórios',
                        type: 'guided_project',
                        description: 'Na segunda parte do projeto, usaremos parâmetros de consulta para adaptar os endpoints às nossas necessidades.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 6,
                title: 'Classes e Padrões Assíncronos',
                description: 'Aprenda a usar classes e JavaScript assíncrono',
                locked: true,
                lessons: [{
                        id: 87,
                        title: 'Sincronia e Assincronia em JS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/01.html'
                    },
                    {
                        id: 88,
                        title: 'Tempo limite e intervalos em JS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/02.html'
                    },
                    {
                        id: 89,
                        title: 'Esperando em JS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/03.html'
                    },
                    {
                        id: 90,
                        title: 'Sincronia e Assincronia em JS',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/04.html'
                    },
                    {
                        id: 91,
                        title: 'Usando Classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 92,
                        title: 'Classes com Métodos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 93,
                        title: 'Criando Instâncias',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/06.html'
                    },
                    {
                        id: 94,
                        title: 'Aulas de JavaScript 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/07.html'
                    },
                    {
                        id: 95,
                        title: 'Biblioteca de mídia',
                        type: 'guided_project',
                        description: 'Crie um servidor para ajudar a encontrar o filme perfeito para a ocasião',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 96,
                        title: 'Extensão de classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 97,
                        title: 'Métodos de substituição',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/06.html'
                    },
                    {
                        id: 98,
                        title: 'Propriedades da subclasse de codificação',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 99,
                        title: 'Aulas de JavaScript 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/07.html'
                    },
                    {
                        id: 100,
                        title: 'Biblioteca de mídia',
                        type: 'guided_project',
                        description: 'Na segunda parte do projeto, otimizaremos a estrutura de dados para torná-la escalável',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 7,
                title: 'Trabalhando com bancos de dados ',
                description: 'Aprenda a trabalhar com bancos de dados e gerenciar dados em SQL',
                locked: true,
                lessons: [{
                        id: 101,
                        title: 'Selecionando Dados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/01.html'
                    },
                    {
                        id: 102,
                        title: 'Dados do pedido',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 103,
                        title: 'Filtrando dados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 104,
                        title: 'Noções básicas de SQL 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 105,
                        title: 'Usando o Operador de Desigualdade',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 106,
                        title: 'Usando comparações',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 107,
                        title: 'Aliasing',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 108,
                        title: 'Noções básicas de SQL 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 109,
                        title: 'Adicionar e remover dados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 110,
                        title: 'Atualização SQL',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 111,
                        title: 'Criação de tabela SQL',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 112,
                        title: 'Gerenciamento de Tabelas SQL 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 113,
                        title: 'Introdução ao SQLite',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 114,
                        title: 'Configuração do banco de dados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 115,
                        title: 'Consultas Parametrizadas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 116,
                        title: 'Transações',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 117,
                        title: 'SQLite',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 118,
                        title: 'Estruturação de endpoints',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 119,
                        title: 'Estruturação de endpoints',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 120,
                        title: 'Gerenciador de Tarefas',
                        type: 'guided_project',
                        description: 'Neste projeto, voltaremos a gerenciar tarefas. Desta vez, criaremos um servidor com um banco de dados para acompanhar nossas tarefas.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 121,
                        title: 'Alteração SQL',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 122,
                        title: 'Listando e Excluindo Tabelas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 123,
                        title: 'Gerenciamento de Tabelas SQL 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 124,
                        title: 'Gerenciador de Tarefas',
                        type: 'guided_project',
                        description: 'Na segunda parte do projeto, permitiremos que nossos usuários definam tarefas como concluídas e, com isso, tornar o gerenciador de tarefas uma ferramenta útil',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 8,
                title: 'SQL em profundidade',
                description: 'Obtenha insights de dados usando operações e filtros',
                locked: true,
                lessons: [{
                        id: 125,
                        title: 'Filtragem com intervalos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/01.html'
                    },
                    {
                        id: 126,
                        title: 'Filtrando por padrões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/02.html'
                    },
                    {
                        id: 127,
                        title: 'Filtrando com opções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/03.html'
                    },
                    {
                        id: 128,
                        title: 'Filtros SQL 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/04.html'
                    },
                    {
                        id: 129,
                        title: 'Usando AND',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/02.html'
                    },
                    {
                        id: 130,
                        title: 'Usando OU',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/03.html'
                    },
                    {
                        id: 131,
                        title: 'Filtros SQL 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/04.html'
                    },
                    {
                        id: 132,
                        title: 'Contador',
                        type: 'guided_project',
                        description: 'Crie um backend que registre todos os livros que você lê. Com a ajuda de um banco de dados, você criará a estante digital perfeita.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 133,
                        title: 'Encontrando MIN, MAX e Média',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 134,
                        title: 'Contando e Somando',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/05.html'
                    },
                    {
                        id: 135,
                        title: 'Agrupando resultados da consulta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 136,
                        title: 'Funções de agregação SQL',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/07.html'
                    },
                    {
                        id: 137,
                        title: 'Apresentando INNER JOINs',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/05.html'
                    },
                    {
                        id: 138,
                        title: 'Usando INNER JOINs',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 139,
                        title: 'Usando LEFT JOINs',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 140,
                        title: 'SQL Junções 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/07.html'
                    },
                    {
                        id: 141,
                        title: 'Usando RIGHT JOINs',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 142,
                        title: 'Usando FULL OUTER JOINs',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 143,
                        title: 'SQL Junções 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/07.html'
                    },
                    {
                        id: 144,
                        title: 'Subconsultas com agregados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 145,
                        title: 'Subconsultas com IN',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 146,
                        title: 'Subconsultas SQL',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/07.html'
                    },
                    {
                        id: 147,
                        title: 'Contador',
                        type: 'guided_project',
                        description: 'Anotar os principais aprendizados de um ótimo livro pode ser uma ótima maneira de se lembrar dele. Aqui, criaremos um aplicativo para nos ajudar a fazer exatamente isso.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 9,
                title: 'Mergulho profundo expresso',
                description: 'Crie aplicativos complexos do lado do servidor usando o Express',
                locked: true,
                lessons: [{
                        id: 148,
                        title: 'Middleware',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/01.html'
                    },
                    {
                        id: 149,
                        title: 'Introdução ao Express Router',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/02.html'
                    },
                    {
                        id: 150,
                        title: 'Usando o Roteador Expresso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/03.html'
                    },
                    {
                        id: 151,
                        title: 'Redirecionando',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/03.html'
                    },
                    {
                        id: 152,
                        title: 'Tratamento de erros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/03.html'
                    },
                    {
                        id: 153,
                        title: 'Mergulho Profundo Expresso',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/04.html'
                    },
                    {
                        id: 154,
                        title: 'Questionário',
                        type: 'guided_project',
                        description: 'Aproveite o poder do Express para criar um aplicativo de quiz bem estruturado e complexo',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 155,
                        title: 'Questionário',
                        type: 'guided_project',
                        description: 'Na segunda parte do projeto, você adicionará um banco de dados à mistura',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 156,
                        title: '',
                        type: 'certificate',
                        completed: false,
                        locked: true,
                        url: './certificate.html'
                    }
                ]
            },
        ]
    };

    // Pega a chave do curso dinamicamente do atributo data-course-key no body
    const courseKey = document.body.dataset.courseKey;
    if (!courseKey) {
        console.error("A chave do curso (data-course-key) não foi definida no elemento <body> do HTML.");
        // Opcional: desabilitar a funcionalidade se a chave não for encontrada
        return;
    }

    let courseData = JSON.parse(localStorage.getItem(courseKey)) || structuredClone(initialCourseData);
    const saveProgress = () => localStorage.setItem(courseKey, JSON.stringify(courseData));

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
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>Back-End</span></div>
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
            localStorage.removeItem(courseKey);
            courseData = structuredClone(initialCourseData);
            renderApp();
        }
    });

    renderApp();
});