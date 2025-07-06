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
    const COURSE_STORAGE_KEY = 'courseProgress_python_full';

    // --- ESTRUTURA DE DADOS COMPLETA PARA O CURSO DE  ---
    const initialCourseData = {
        courseName: 'Python',
        currentSectionId: 1,
        sections: [{
                id: 1,
                title: 'Introdução ao Python',
                description: 'Crie variáveis ​​que armazenam números, strings e booleanos',
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
                        title: 'Verdadeiro e Falso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/02.html'
                    },
                    {
                        id: 4,
                        title: 'verificando a igualdade numérica',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/02.html'
                    },
                    {
                        id: 5,
                        title: 'Formatando Strings',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/02.html'
                    },
                    {
                        id: 6,
                        title: 'Noções básicas de Python',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/05.html'
                    },
                    {
                        id: 7,
                        title: 'Robô',
                        type: 'guided_project',
                        description: 'Prepare-se para construir seu primeiro projeto Python: uma conversa com bots',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 8,
                        title: 'Comparando números',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/03.html'
                    },
                    {
                        id: 9,
                        title: 'Comparando Strings',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 10,
                        title: 'Descobrindo Tipos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 11,
                        title: 'Tipos e Comparações',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/05.html'
                    },
                    {
                        id: 12,
                        title: 'Entrada',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/js-basics/04.html'
                    },
                    {
                        id: 13,
                        title: 'Robô',
                        type: 'guided_project',
                        description: 'Na parte 2, você usará a função de entrada para tornar o bot interativo e permitir que seus usuários conversem com ele',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 2,
                title: 'Controle de fluxo',
                description: 'Codifique condicionais e loops para construir programas inteligentes',
                locked: true,
                lessons: [{
                        id: 14,
                        title: 'Tomando decisões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/01.html'
                    },
                    {
                        id: 15,
                        title: 'Condições de uso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 16,
                        title: 'Declarações Condicionais 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 17,
                        title: 'Codificando instruções Else',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/03.html'
                    },
                    {
                        id: 18,
                        title: 'Incorporando Elif ',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/04.html'
                    },
                    {
                        id: 19,
                        title: 'Usando Decisões Complexas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 20,
                        title: 'Declarações Condicionais 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 21,
                        title: 'Pedra, Papel e Tesoura',
                        type: 'guided_project',
                        description: 'Crie seu próprio jogo! Nesta primeira parte, prepararemos o cenário, elaborando a lógica básica do jogo. Deixaremos o jogador e o computador escolherem uma opção e determinarem o vencedor.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 22,
                        title: 'Autoatribuição e Operadores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 23,
                        title: 'Laços / loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 24,
                        title: 'Parando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 25,
                        title: 'Laços 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 26,
                        title: 'Controlando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 27,
                        title: 'Para laços / loops For',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 28,
                        title: 'Laços 2 ',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 29,
                        title: 'Laços 2 ',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/02.html'
                    },
                    {
                        id: 30,
                        title: 'Laços 3',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/types-comparisons/05.html'
                    },
                    {
                        id: 31,
                        title: 'Pedra, Papel e Tesoura',
                        type: 'guided_project',
                        description: 'Aqui, estenderemos o projeto para jogar uma melhor de três e, com isso, torná-lo um jogo real',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 3,
                title: 'Listas ',
                description: 'Crie listas para organizar grupos de valores',
                locked: true,
                lessons: [{
                        id: 32,
                        title: 'Agrupando dados em listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/01.html'
                    },
                    {
                        id: 33,
                        title: 'Alterando dados em listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/02.html'
                    },
                    {
                        id: 34,
                        title: 'Atualizando Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 35,
                        title: 'Organizando Dados 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 36,
                        title: 'Looping sobre listas ',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 37,
                        title: 'Decidindo com Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 38,
                        title: 'Organizando Dados 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 39,
                        title: 'Lista de tarefas',
                        type: 'guided_project',
                        description: 'Comece a criar seu aplicativo de lista de tarefas. Este primeiro passo se concentra em criar a estrutura básica e adicionar tarefas.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 40,
                        title: 'Encontrando Dados Extremos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 41,
                        title: 'Classificando Dados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 42,
                        title: 'Somando Dados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 43,
                        title: 'Usando Listas 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 44,
                        title: 'Listas de adesão',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/03.html'
                    },
                    {
                        id: 45,
                        title: 'Contando Elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/04.html'
                    },
                    {
                        id: 46,
                        title: 'Usando Listas 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/conditionals/05.html'
                    },
                    {
                        id: 47,
                        title: 'Lista de tarefas',
                        type: 'guided_project',
                        description: 'Adicione um menu interativo à sua lista de tarefas e aprimore-a permitindo a exclusão de tarefas novamente',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 4,
                title: 'Funções',
                description: 'Funções de código para tornar o código reutilizável e mais fácil de ler',
                locked: true,
                lessons: [{
                        id: 48,
                        title: 'Criando Parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/02.html'
                    },
                    {
                        id: 49,
                        title: 'Retornando Valores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/03.html'
                    },
                    {
                        id: 50,
                        title: 'Usando vários parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/04.html'
                    },
                    {
                        id: 51,
                        title: 'Compreendendo Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/04.html'
                    },
                    {
                        id: 52,
                        title: 'Funções 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/05.html'
                    },
                    {
                        id: 53,
                        title: 'Sistema de pedidos de comida',
                        type: 'guided_project',
                        description: 'Embarque em uma jornada culinária: um sistema de pedidos de comida italiana. Mergulhe no delicioso mundo das pizzas e massas enquanto constrói um serviço de entrega.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 54,
                        title: 'Funções e Escopo de Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/07.html'
                    },
                    {
                        id: 55,
                        title: 'Decidindo com Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/08.html'
                    },
                    {
                        id: 56,
                        title: 'Funções com Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/08.html'
                    },
                    {
                        id: 57,
                        title: 'Funções com Loops',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/04.html'
                    },
                    {
                        id: 58,
                        title: 'Funções 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/loops/09.html'
                    },
                    {
                        id: 59,
                        title: 'Sistema de pedidos de comida',
                        type: 'guided_project',
                        description: 'Expanda seu sistema de pedidos de comida para incluir um mundo de sabores! Nesta parte, adicionamos culinárias diversas, tornando seu sistema um destino gastronômico global.',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 5,
                title: 'Tuplas , dicionários e conjuntos',
                description: 'Identificar as estruturas de dados corretas para armazenar dados',
                locked: true,
                lessons: [{
                        id: 60,
                        title: 'Criando Tuplas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/01.html'
                    },
                    {
                        id: 61,
                        title: 'Tuplas e Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 62,
                        title: 'Retornando Tuplas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 63,
                        title: 'Criando Dicionários',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    }, {
                        id: 64,
                        title: 'Usando dicionários',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 65,
                        title: 'Tuplas, Dicionários e Conjuntos 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 66,
                        title: 'Compre uma carta',
                        type: 'guided_project',
                        description: 'No projeto "Desenhe uma Carta", você criará um baralho virtual de cartas. Embaralhe-as e exiba-as uma a uma usando arte ASCII.',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 67,
                        title: 'Criando conjuntos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 68,
                        title: 'Usando conjuntos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 69,
                        title: 'Conjuntos e Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/02.html'
                    },
                    {
                        id: 70,
                        title: 'Operações de conjunto',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/03.html'
                    },
                    {
                        id: 71,
                        title: 'Tuplas, Dicionários e Conjuntos 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/arrays/05.html'
                    },
                    {
                        id: 72,
                        title: 'Compre uma carta',
                        type: 'guided_project',
                        description: 'Assuma o controle na segunda parte escolhendo quantas cartas comprar, tornando o jogo de cartas ainda mais envolvente',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 6,
                title: 'Módulos e APIs',
                description: 'Use módulos e APIs para estender seu kit de ferramentas Python',
                locked: true,
                lessons: [{
                        id: 73,
                        title: 'Módulos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/01.html'
                    },
                    {
                        id: 74,
                        title: 'Módulos',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/04.html'
                    },
                    {
                        id: 75,
                        title: 'Erros e exceções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/02.html'
                    },
                    {
                        id: 76,
                        title: 'Gerando exceções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/03.html'
                    },
                    {
                        id: 77,
                        title: 'Erros e exceções',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/04.html'
                    },
                    {
                        id: 78,
                        title: 'Comunicando-se com uma API',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 79,
                        title: 'Introdução às Solicitações ',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/functions/05.html'
                    },
                    {
                        id: 80,
                        title: 'API de Star Wars',
                        type: 'guided_project',
                        description: 'Lançamento na galáxia com um projeto que chama a API de Star Wars para recuperar personagens do vasto universo de Star Wars',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 81,
                        title: 'API de Star Wars',
                        type: 'guided_project',
                        description: 'Dê poder aos usuários nesta sequência, permitindo que eles escolham quantos personagens baixar e explorar',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 7,
                title: 'Strings e operações de lista',
                description: 'Use métodos para manipular strings e listas',
                locked: true,
                lessons: [{
                        id: 82,
                        title: 'Dividindo cordas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/01.html'
                    },
                    {
                        id: 83,
                        title: 'Atualizando Strings',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 84,
                        title: 'Usando Strings',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 85,
                        title: 'Usando compreensões de lista',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 86,
                        title: 'Funções como Expressões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 87,
                        title: 'Filtrando com instruções If',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/03.html'
                    },
                    {
                        id: 88,
                        title: 'Compreensões de Lista 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 89,
                        title: 'Analisador de transações',
                        type: 'guided_project',
                        description: 'Estabeleça as bases para uma visão financeira configurando um sistema para analisar suas transações bancárias',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 90,
                        title: 'Indexação e Exclusão Negativa',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 91,
                        title: 'Notação de fatias',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/02.html'
                    },
                    {
                        id: 92,
                        title: 'Compreensões de Lista 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/objects/04.html'
                    },
                    {
                        id: 93,
                        title: 'Analisador de transações',
                        type: 'guided_project',
                        description: 'Mergulhe mais fundo em suas finanças conduzindo uma análise aprofundada de suas atividades bancárias, descobrindo insights',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 8,
                title: 'Programação Orientada a Objetos',
                description: 'Use programação orientada a objetos para aplicativos sofisticados',
                locked: true,
                lessons: [{
                        id: 94,
                        title: 'Usando Classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/01.html'
                    },
                    {
                        id: 95,
                        title: 'Criando Instâncias',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/02.html'
                    },
                    {
                        id: 96,
                        title: 'Aulas 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/04.html'
                    },
                    {
                        id: 97,
                        title: 'Classes com Métodos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/01.html'
                    }, {
                        id: 98,
                        title: 'Construtores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/02.html'
                    },
                    {
                        id: 99,
                        title: 'Compreendendo Classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/03.html'
                    },
                    {
                        id: 100,
                        title: 'Aulas 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/04.html'
                    },
                    {
                        id: 101,
                        title: 'Biblioteca',
                        type: 'guided_project',
                        description: 'Mergulhe na POO criando objetos de livros. Esta primeira parte do projeto apresenta a criação e o gerenciamento da sua própria estante digital.',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 102,
                        title: 'Encapsulando Objetos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 103,
                        title: 'Aplicando Herança em POO',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/05.html'
                    },
                    {
                        id: 104,
                        title: 'Abstraindo Objetos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/06.html'
                    },
                    {
                        id: 105,
                        title: 'Objetos Polimórficos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/05.html'
                    },
                    {
                        id: 106,
                        title: 'Programação Orientada a Objetos',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/applied-functions/07.html'
                    },
                    {
                        id: 107,
                        title: 'Biblioteca',
                        type: 'guided_project',
                        description: 'Expanda seu projeto para um sistema de biblioteca completo que organize e armazene todos os seus livros',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                ]
            },
            {
                id: 9,
                title: 'Trabalhando com APIs privadas',
                description: 'Aprenda como acessar APIs privadas com segurança',
                locked: true,
                lessons: [{
                        id: 108,
                        title: 'Variáveis ​​de ambiente',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/01.html'
                    },
                    {
                        id: 109,
                        title: 'Personalizando chamadas de API',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/02.html'
                    },
                    {
                        id: 110,
                        title: 'Tratamento de Resposta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/03.html'
                    },
                    {
                        id: 111,
                        title: 'Variáveis ​​de ambiente',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/04.html'
                    },
                    {
                        id: 112,
                        title: 'Trabalhando com APIs privadas',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/es6/04.html'
                    },
                    {
                        id: 113,
                        title: 'Clone do ChatGPT',
                        type: 'guided_project',
                        description: 'Use a API OpenAI para criar nossa própria versão do ChatGPT e tenha uma primeira impressão do que é possível ao trabalhar com LLMs',
                        subAction: 'PARTE 1',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 114,
                        title: 'Clone do ChatGPT',
                        type: 'guided_project',
                        description: 'Construir sobre a primeira parte do projeto ChatGPT Clone para permitir múltiplas conversas e completar o aplicativo',
                        subAction: 'PARTE 2',
                        completed: false,
                        locked: true,
                        url: './lessons/projects/linktree-p1.html'
                    },
                    {
                        id: 115,
                        title: 'Certificado de Conclusão',
                        type: 'certificate',
                        completed: false,
                        locked: true,
                        url: './certificate.html'
                    }
                ]
            },
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

    const checkCourseCompletionAndUnlockCertificate = () => {
        const allLessons = courseData.sections.flatMap(s => s.lessons);
        const certificateLesson = allLessons.find(l => l.type === 'certificate');

        if (!certificateLesson) return; // Não há certificado neste curso.

        const allRegularLessons = allLessons.filter(l => l.type !== 'certificate');
        const allCompleted = allRegularLessons.every(l => l.completed);

        if (allCompleted) {
            certificateLesson.locked = false;
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

        checkCourseCompletionAndUnlockCertificate();

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
            const certLink = `${lesson.url}?course=${encodeURIComponent(courseData.courseName || 'Curso Completo')}`;
            const linkAttributesWithCert = `href="${certLink}"`;
            return `<a class="lesson-card certificate-card ${lesson.locked ? 'locked' : ''}" data-lesson-id="${lesson.id}" ${linkAttributes}>
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>${courseData.courseName || 'Curso'}</span></div>
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
    resetProgressButton.addEventListener('click', resetProgress);

    renderApp();
});