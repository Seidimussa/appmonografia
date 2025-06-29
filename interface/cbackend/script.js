document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar-button');
    const closeSidebarButton = document.getElementById('close-sidebar-button');
    const resetProgressButton = document.getElementById('reset-progress-button');
    const coursesNavList = document.getElementById('courses-nav-list');
    const mainSectionContent = document.getElementById('main-section-content');
    const careerProgressBar = document.getElementById('career-progress-bar');
    const careerProgressText = document.getElementById('career-progress-text');

    // --- FULL BACK-END CAREER DATA STRUCTURE ---
    const initialCareerData = {
        title: "Carreira de Desenvolvedor Back-End",
        currentCourseId: 1,
        courses: [{
                id: 1,
                title: 'JavaScript',
                locked: false,
                sections: [{
                        id: 1,
                        title: 'Introdução ao JavaScript',
                        description: 'Mergulhe no JavaScript e aprenda o que há de tão especial',
                        project: 'Programa Interruptor de Luz',
                        lessons: [{
                                id: 1,
                                title: 'Criando Variáveis',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 2,
                                title: 'Usando Variáveis',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 3,
                                title: 'Usando Verdadeiro e Falso',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 4,
                                title: 'Verificando a igualdade numérica',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 5,
                                title: 'Noções básicas de JavaScript',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 6,
                                title: 'Comparando números',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 7,
                                title: 'Comparando Strings',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 8,
                                title: 'Descobrindo Tipos',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 9,
                                title: 'Operadores Lógicos',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 10,
                                title: 'Tipos e Comparações',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 11,
                                title: 'Programa Interruptor de Luz',
                                type: 'project',
                                part: 1,
                                description: 'Crie seu primeiro projeto JavaScript para operar um interruptor de luz',
                                url: '#'
                            },
                            {
                                id: 12,
                                title: 'Programa Interruptor de Luz',
                                type: 'project',
                                part: 2,
                                description: 'Na segunda parte do projeto, adicionaremos condições adicionais para verificar se as luzes acenderão',
                                url: '#'
                            },
                        ]
                    },
                    {
                        id: 2,
                        title: 'Fluxo do programa',
                        description: 'Aprenda a controlar o fluxo do seu programa com condicionais e loops',
                        project: 'Ímpar ou Par',
                        lessons: [{
                                id: 13,
                                title: 'Tomando decisões',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 14,
                                title: 'Condições de uso',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 15,
                                title: 'Codificando Instruções Else',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 16,
                                title: 'Incorporando Else If',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 17,
                                title: 'Condicionais',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 18,
                                title: 'Ímpar ou Par',
                                type: 'project',
                                part: 1,
                                description: 'Crie seu próprio jogo! Nesta primeira parte, prepararemos o cenário elaborando a lógica básica do jogo.',
                                url: '#'
                            },
                            {
                                id: 19,
                                title: 'Variáveis autoatribuíveis',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 20,
                                title: 'Atribuição com operadores',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 21,
                                title: 'Repetindo código com loops While',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 22,
                                title: 'Parando loops While',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 23,
                                title: 'Laços 1',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 24,
                                title: 'Controlando loops While',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 25,
                                title: 'Repetindo código com loops For',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 26,
                                title: 'Looping para baixo',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 27,
                                title: 'Laços 2',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 28,
                                title: 'Ímpar ou Par',
                                type: 'project',
                                part: 2,
                                description: 'Na segunda parte do projeto, estenderemos o jogo para jogar uma melhor de três.',
                                url: '#'
                            },
                        ]
                    },
                    {
                        id: 3,
                        title: 'Matrizes e Funções',
                        description: 'Use matrizes e funções para construir programas sofisticados',
                        project: 'Lista de tarefas',
                        lessons: [{
                                id: 29,
                                title: 'Agrupando valores com matrizes',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 30,
                                title: 'Alterando valores em matrizes',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 31,
                                title: 'Empurrando e removendo matrizes',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 32,
                                title: 'Decidindo com Arrays',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 33,
                                title: 'Matrizes',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 34,
                                title: 'Reutilizando código com funções',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 35,
                                title: 'Criando Parâmetros',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 36,
                                title: 'Retornando Valores',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 37,
                                title: 'Funções 1',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 38,
                                title: 'Usando vários parâmetros',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 39,
                                title: 'Compreendendo Funções',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 40,
                                title: 'Funções 2',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 41,
                                title: 'Lista de tarefas',
                                type: 'project',
                                part: 1,
                                description: 'Neste projeto, vamos criar um gerenciador de tarefas para ajudar com isso.',
                                url: '#'
                            },
                            {
                                id: 42,
                                title: 'Condicionais de aninhamento',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 43,
                                title: 'Usando Condições e Funções',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 44,
                                title: 'Parando funções com retorno',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 45,
                                title: 'Funções Aplicadas 1',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 46,
                                title: 'Adicionando Loops a Funções',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 47,
                                title: 'Looping sobre matrizes',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 48,
                                title: 'Funções Aplicadas 2',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 49,
                                title: 'Matriz.map()',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 50,
                                title: 'Matriz.filter()',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 51,
                                title: 'Matriz.reduce()',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 52,
                                title: 'Operações de matriz',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 53,
                                title: 'Lista de tarefas',
                                type: 'project',
                                part: 2,
                                description: 'Adicionar tarefas é útil, mas também queremos removê-las novamente.',
                                url: '#'
                            },
                        ]
                    },
                    {
                        id: 4,
                        title: 'Objetos e ES6',
                        description: 'Aprenda a usar objetos e funções JS mais avançadas',
                        project: 'Blackjack',
                        lessons: [{
                                id: 54,
                                title: 'Agrupando valores em objetos',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 55,
                                title: 'Usando métodos de objeto',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 56,
                                title: 'O que é JSON',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 57,
                                title: 'Objetos',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 58,
                                title: 'Variáveis e Escopo ES6',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 59,
                                title: 'Funções de seta',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 60,
                                title: 'Parâmetros da função de seta',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 61,
                                title: 'ES6 1',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 62,
                                title: 'Blackjack',
                                type: 'project',
                                part: 1,
                                description: 'No Blackjack, usaremos o que aprendemos até agora para construir nossa própria versão do clássico jogo de cartas.',
                                url: '#'
                            },
                            {
                                id: 63,
                                title: 'Literais de modelo',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 64,
                                title: 'Desestruturação',
                                type: 'learn',
                                url: '#'
                            },
                            {
                                id: 65,
                                title: 'ES6 2',
                                type: 'practice',
                                url: '#'
                            },
                            {
                                id: 66,
                                title: 'Blackjack',
                                type: 'project',
                                part: 2,
                                description: 'Na segunda parte do projeto, completaremos o jogo para podermos jogar contra o computador.',
                                url: '#'
                            },
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: 'Noções básicas do Express',
                locked: true,
                sections: [{
                    id: 5,
                    title: 'Noções básicas do Express',
                    description: 'Use o Express para mergulhar no desenvolvimento de backend',
                    project: 'Números aleatórios',
                    lessons: [{
                            id: 67,
                            title: 'Introdução aos Módulos',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 68,
                            title: 'Introdução ao Node.js',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 69,
                            title: 'Módulos, Bibliotecas e Nó',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 70,
                            title: 'Cliente vs Servidores',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 71,
                            title: 'Comunicando-se com uma API',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 72,
                            title: 'Respostas de solicitação HTTP',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 73,
                            title: 'Introdução ao Backend 1',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 74,
                            title: 'Express.JS',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 75,
                            title: 'Objetos de solicitação e resposta',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 76,
                            title: 'Construindo um aplicativo expresso 1',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 77,
                            title: 'Números aleatórios',
                            type: 'project',
                            part: 1,
                            description: 'Crie um backend que possa ajudar caso você não tenha uma moeda ou dado pronto.',
                            url: '#'
                        },
                        {
                            id: 78,
                            title: 'Parâmetros de Rota',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 79,
                            title: 'Parâmetros de consulta',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 80,
                            title: 'Construindo um aplicativo expresso 2',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 81,
                            title: 'Solicitações POST',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 82,
                            title: 'Solicitações PUT',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 83,
                            title: 'Solicitações de PATCH',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 84,
                            title: 'Solicitações DELETE',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 85,
                            title: 'Construindo um aplicativo expresso 3',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 86,
                            title: 'Números aleatórios',
                            type: 'project',
                            part: 2,
                            description: 'Na segunda parte do projeto, usaremos parâmetros de consulta para adaptar os endpoints às nossas necessidades.',
                            url: '#'
                        },
                    ]
                }]
            },
            {
                id: 3,
                title: 'Classes e Padrões Assíncronos',
                locked: true,
                sections: [{
                    id: 6,
                    title: 'Classes e Padrões Assíncronos',
                    description: 'Aprenda a usar classes e JavaScript assíncrono',
                    project: 'Biblioteca de mídia',
                    lessons: [{
                            id: 87,
                            title: 'Sincronia e Assincronia em JS',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 88,
                            title: 'Tempo limite e Intervalos em JS',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 89,
                            title: 'Esperando em JS',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 90,
                            title: 'Sincronia e Assincronia em JS',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 91,
                            title: 'Usando Classes',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 92,
                            title: 'Classes com Métodos',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 93,
                            title: 'Criando Instâncias',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 94,
                            title: 'Aulas de JavaScript 1',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 95,
                            title: 'Biblioteca de mídia',
                            type: 'project',
                            part: 1,
                            description: 'Crie um servidor para ajudar a encontrar o filme perfeito para a ocasião.',
                            url: '#'
                        },
                        {
                            id: 96,
                            title: 'Extensão de classes',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 97,
                            title: 'Métodos de substituição',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 98,
                            title: 'Propriedades da subclasse de codificação',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 99,
                            title: 'Aulas de JavaScript 2',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 100,
                            title: 'Biblioteca de mídia',
                            type: 'project',
                            part: 2,
                            description: 'Na segunda parte do projeto, otimizaremos a estrutura de dados para torná-la escalável.',
                            url: '#'
                        },
                    ]
                }]
            },
            {
                id: 4,
                title: 'Trabalhando com bancos de dados',
                locked: true,
                sections: [{
                    id: 7,
                    title: 'Trabalhando com bancos de dados',
                    description: 'Aprenda a trabalhar com bancos de dados e gerenciar dados em SQL',
                    project: 'Gerenciador de Tarefas',
                    lessons: [{
                            id: 101,
                            title: 'Selecionando Dados',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 102,
                            title: 'Dados do pedido',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 103,
                            title: 'Filtrando dados',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 104,
                            title: 'Noções básicas de SQL 1',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 105,
                            title: 'Usando o Operador de Desigualdade',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 106,
                            title: 'Usando comparações',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 107,
                            title: 'Aliasing',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 108,
                            title: 'Noções básicas de SQL 2',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 109,
                            title: 'Adicionar e remover dados',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 110,
                            title: 'Atualização SQL',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 111,
                            title: 'Criação de tabela SQL',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 112,
                            title: 'Gerenciamento de Tabelas SQL 1',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 113,
                            title: 'Introdução ao SQLite',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 114,
                            title: 'Configuração do banco de dados',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 115,
                            title: 'Consultas Parametrizadas',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 116,
                            title: 'Transações',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 117,
                            title: 'SQLite',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 118,
                            title: 'Estruturação de endpoints',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 119,
                            title: 'Estruturação de endpoints',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 120,
                            title: 'Gerenciador de Tarefas',
                            type: 'project',
                            part: 1,
                            description: 'Neste projeto, voltaremos a gerenciar tarefas. Desta vez, criaremos um servidor com um banco de dados para acompanhar nossas tarefas.',
                            url: '#'
                        },
                        {
                            id: 121,
                            title: 'Alteração SQL',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 122,
                            title: 'Listando e Excluindo Tabelas',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 123,
                            title: 'Gerenciamento de Tabelas SQL 2',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 124,
                            title: 'Gerenciador de Tarefas',
                            type: 'project',
                            part: 2,
                            description: 'Na segunda parte do projeto, permitiremos que nossos usuários definam tarefas como concluídas e, com isso, tornaremos nosso gerenciador de tarefas uma ferramenta útil.',
                            url: '#'
                        },
                    ],
                    optionalProjects: [{
                            id: 1001,
                            title: 'Serviço de entrega de comida',
                            description: 'Ajude um serviço de entrega de comida a filtrar restaurantes e apresentar os resultados aos seus usuários.',
                            url: '#'
                        },
                        {
                            id: 1002,
                            title: 'Rastreador de recibos',
                            description: 'Explorar consultas SQL no contexto da organização de despesas e recibos.',
                            url: '#'
                        },
                        {
                            id: 1003,
                            title: 'Lentes de câmera',
                            description: 'Pratique o uso de SQL básico para examinar um banco de dados de lentes de câmera.',
                            url: '#'
                        },
                    ]
                }]
            },
            {
                id: 5,
                title: 'SQL em profundidade',
                locked: true,
                sections: [{
                    id: 8,
                    title: 'SQL em profundidade',
                    description: 'Obtenha insights de dados usando operações e filtros',
                    project: 'Contador',
                    lessons: [{
                            id: 125,
                            title: 'Filtragem com Intervalos',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 126,
                            title: 'Filtrando por padrões',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 127,
                            title: 'Filtrando com opções',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 128,
                            title: 'Filtros SQL 1',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 129,
                            title: 'Usando AND',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 130,
                            title: 'Usando OU',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 131,
                            title: 'Filtros SQL 2',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 132,
                            title: 'Contador',
                            type: 'project',
                            part: 1,
                            description: 'Crie um backend que registre todos os livros que você lê. Com a ajuda de um banco de dados, você criará esta ferramenta digital perfeita.',
                            url: '#'
                        },
                        {
                            id: 133,
                            title: 'Encontrando MIN, MAX e Média',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 134,
                            title: 'Contando e Somando',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 135,
                            title: 'Agrupando resultados da consulta',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 136,
                            title: 'Funções de agregação SQL',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 137,
                            title: 'Apresentando INNER JOINs',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 138,
                            title: 'Usando INNER JOINs',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 139,
                            title: 'Usando LEFT JOINs',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 140,
                            title: 'SQL Junções 1',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 141,
                            title: 'Usando RIGHT JOINs',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 142,
                            title: 'Usando FULL OUTER JOINs',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 143,
                            title: 'SQL Junções 2',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 144,
                            title: 'Subconsultas com agregados',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 145,
                            title: 'Subconsultas com IN',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 146,
                            title: 'Subconsultas SQL',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 147,
                            title: 'Contador',
                            type: 'project',
                            part: 2,
                            description: 'Anotar os principais aprendizados de um ótimo livro pode ser uma ótima maneira de se lembrar dele. Aqui, criaremos um aplicativo para nos ajudar a fazer exatamente isso.',
                            url: '#'
                        },
                    ],
                    optionalProjects: [{
                            id: 1004,
                            title: 'Inventário da livraria',
                            description: 'Ajude uma livraria a rastrear pedidos e gerenciar seu estoque.',
                            url: '#'
                        },
                        {
                            id: 1005,
                            title: 'Pesquisa de aluguel de carros',
                            description: 'Pratique suas habilidades de filtragem SQL filtrando um banco de dados de carros alugados.',
                            url: '#'
                        },
                        {
                            id: 1006,
                            title: 'Banco de dados de funcionários',
                            description: 'Pratique habilidades de filtragem de SQL pesquisando funcionários específicos em um banco de dados.',
                            url: '#'
                        },
                    ]
                }]
            },
            {
                id: 6,
                title: 'Mergulho profundo expresso',
                locked: true,
                sections: [{
                    id: 9,
                    title: 'Mergulho profundo expresso',
                    description: 'Crie aplicativos complexos do lado do servidor usando o Express',
                    project: 'Questionário',
                    lessons: [{
                            id: 148,
                            title: 'Middleware',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 149,
                            title: 'Introdução ao Express Router',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 150,
                            title: 'Usando o Roteador Expresso',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 151,
                            title: 'Redirecionando',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 152,
                            title: 'Tratamento de erros',
                            type: 'learn',
                            url: '#'
                        },
                        {
                            id: 153,
                            title: 'Mergulho Profundo Expresso',
                            type: 'practice',
                            url: '#'
                        },
                        {
                            id: 154,
                            title: 'Questionário',
                            type: 'project',
                            part: 1,
                            description: 'Aproveite o poder do Express para criar um aplicativo de quiz bem estruturado e complexo.',
                            url: '#'
                        },
                        {
                            id: 155,
                            title: 'Questionário',
                            type: 'project',
                            part: 2,
                            description: 'Na segunda parte do projeto, você adicionará um banco de dados à mistura.',
                            url: '#'
                        },
                    ]
                }]
            },
            {
                id: 7,
                title: 'Autenticação',
                locked: true,
                sections: [ /*...*/ ]
            },
            {
                id: 8,
                title: 'Segurança',
                locked: true,
                sections: [ /*...*/ ]
            },
            {
                id: 9,
                title: 'Implantação',
                locked: true,
                sections: [ /*...*/ ]
            }
        ],
        finalCertificate: {
            title: 'Desenvolvedor Back-End',
            type: 'professional-certificate',
            locked: true,
            url: './certificate.html'
        }
    };

    let careerData = JSON.parse(localStorage.getItem('careerProgress_backend_full')) || JSON.parse(JSON.stringify(initialCareerData));
    const saveProgress = () => localStorage.setItem('careerProgress_backend_full', JSON.stringify(careerData));

    const completeLesson = (lessonId) => {
        const course = careerData.courses.find(c => c.id === careerData.currentCourseId);
        if (!course) return;

        let lesson, lessonSection;
        for (const section of course.sections) {
            const foundLesson = section.lessons.find(l => l.id === lessonId);
            if (foundLesson) {
                lesson = foundLesson;
                lessonSection = section;
                break;
            }
        }

        if (!lesson || lesson.completed || lesson.locked || lesson.type === 'certificate' || lesson.type === 'project') return;

        lesson.completed = true;

        const lessonIndex = lessonSection.lessons.findIndex(l => l.id === lessonId);
        if (lessonIndex + 1 < lessonSection.lessons.length) {
            lessonSection.lessons[lessonIndex + 1].locked = false;
        }

        const regularLessons = lessonSection.lessons.filter(l => l.type !== 'certificate' && l.type !== 'project');
        const allSectionLessonsCompleted = regularLessons.every(l => l.completed);

        if (allSectionLessonsCompleted) {
            const currentCourse = careerData.courses.find(c => c.id === careerData.currentCourseId);
            const currentSectionIndex = currentCourse.sections.findIndex(s => s.id === lessonSection.id);
            if (currentSectionIndex + 1 < currentCourse.sections.length) {
                currentCourse.sections[currentSectionIndex + 1].lessons[0].locked = false;
            } else {
                const currentCourseIndex = careerData.courses.findIndex(c => c.id === careerData.currentCourseId);
                if (currentCourseIndex + 1 < careerData.courses.length) {
                    careerData.courses[currentCourseIndex + 1].locked = false;
                }
            }
        }

        saveProgress();
        renderApp();
    };

    const renderSidebar = () => {
        coursesNavList.innerHTML = '';
        let completedCoursesCount = 0;

        careerData.courses.forEach(course => {
            const allLessons = course.sections.flatMap(s => s.lessons).filter(l => l.type !== 'certificate' && l.type !== 'project');
            const completedLessons = allLessons.filter(l => l.completed).length;

            if (allLessons.length > 0 && completedLessons === allLessons.length) {
                completedCoursesCount++;
            }

            const navItem = document.createElement('div');
            navItem.className = 'course-nav-item';
            navItem.classList.toggle('active', course.id === careerData.currentCourseId);
            navItem.classList.toggle('locked', course.locked);
            navItem.dataset.courseId = course.id;
            navItem.innerHTML = `<div class="course-nav-item-header"><span class="title">${course.title}</span><span class="status">${course.locked ? '<i class="fas fa-lock"></i>' : `${completedLessons}/${allLessons.length}`}</span></div>`;
            navItem.addEventListener('click', () => changeCourse(course.id));
            coursesNavList.appendChild(navItem);
        });

        const totalCourses = careerData.courses.length;
        careerProgressText.textContent = `${completedCoursesCount}/${totalCourses} Cursos`;
        careerProgressBar.style.width = `${(completedCoursesCount / totalCourses) * 100}%`;
    };

    const renderMainContent = () => {
        const course = careerData.courses.find(c => c.id === careerData.currentCourseId);
        if (!course || !course.sections.length) {
            mainSectionContent.innerHTML = '<h1>Selecione um curso para começar.</h1>';
            return;
        };

        // For this complex structure, we'll just show the first section of the current course
        const section = course.sections[0]; // Simplified: always show the first section

        const regularLessons = section.lessons.filter(l => l.type !== 'certificate' && l.type !== 'project');
        const completedLessons = regularLessons.filter(l => l.completed).length;
        const totalLessons = regularLessons.length;
        const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
        const nextSection = course.sections.find(s => s.id === section.id + 1);

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
                <h2 class="section-project-title">${section.project}</h2>
            </section>
            <section class="lessons-container">
                <p class="lessons-label">LIÇÕES</p>
                <div class="lessons-list" id="lessons-list-container">
                    ${section.lessons.map((lesson, index) => renderLessonCard(lesson, index)).join('')}
                    ${section.optionalProjects ? renderOptionalProjects(section.optionalProjects) : ''}
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
                alert('Prática sobrecarregada!');
                return;
            }
            const lessonId = parseInt(card.dataset.lessonId);
            completeLesson(lessonId);
        });

        const continueBtn = document.querySelector('.continue-button');
        if (continueBtn && !continueBtn.disabled) {
            continueBtn.addEventListener('click', (e) => alert("Navegação para próxima seção não implementada neste exemplo."));
        }
    };

    const renderLessonCard = (lesson, index) => {
        const isFirstUnlocked = !lesson.locked && !lesson.completed;
        const lockIcon = '<i class="fas fa-lock status-icon"></i>';
        const statusIcon = lesson.completed ? '<i class="fas fa-check-circle status-icon"></i>' : '<i class="far fa-circle status-icon"></i>';
        const linkAttributes = `href="${lesson.url}"`;

        if (lesson.type === 'project') {
            return `
                <a class="lesson-card project-guided ${lesson.locked ? 'locked' : ''}" data-lesson-id="${lesson.id}" ${linkAttributes}>
                    <div class="lesson-main-info">
                        <div class="project-guided-header">
                            <div class="lesson-title-area">
                                <span class="lesson-number">${String(lesson.id).padStart(2, '0')}</span>
                                <span class="lesson-title">${lesson.title}</span>
                            </div>
                            <span class="project-part">PARTE ${lesson.part}</span>
                        </div>
                        <p class="project-guided-description">${lesson.description}</p>
                    </div>
                    <div class="lesson-status">
                         <span class="lesson-type"><i class="fas fa-code"></i> PROJETO GUIADO</span>
                         ${lesson.locked ? lockIcon : statusIcon}
                    </div>
                </a>`;
        }

        if (lesson.type === 'certificate') {
            return `<a class="lesson-card certificate-card ${lesson.locked ? 'locked' : ''}" data-lesson-id="${lesson.id}" ${linkAttributes}>
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>${lesson.badge}</span></div>
                        <div class="cert-title">${lesson.title}</div>
                        ${lesson.locked ? lockIcon : statusIcon}
                    </a>`;
        }

        const lessonNumber = String(lesson.id).padStart(2, '0');
        let typeInfo = (lesson.type === 'learn') ? `<i class="fa-regular fa-file-lines"></i> APRENDER` : `<i class="fas fa-bolt"></i> PRÁTICA`;
        let subButtonHTML = (lesson.type === 'practice') ? `<div class="sub-button-container"><button class="sub-button"><i class="fas fa-bolt"></i> SOBRECARREGAR</button>${lesson.locked ? lockIcon : statusIcon}</div>` : '';

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

    const renderOptionalProjects = (projects) => {
        let html = '<p class="lessons-label">PROJETOS OPCIONAIS</p>';
        html += projects.map((proj, index) => `
            <a class="lesson-card project-guided" href="${proj.url}">
                <div class="lesson-main-info">
                     <div class="project-guided-header">
                        <div class="lesson-title-area">
                             <span class="lesson-number">${String(index + 1).padStart(2, '0')}</span>
                             <span class="lesson-title">${proj.title}</span>
                        </div>
                    </div>
                    <p class="project-guided-description">${proj.description}</p>
                </div>
                 <div class="lesson-status">
                     <span class="lesson-type"><i class="fas fa-code"></i> PROJETO GUIADO</span>
                </div>
            </a>
        `).join('');
        return html;
    };

    const renderApp = () => {
        renderSidebar();
        renderMainContent();
    };

    const changeCourse = (courseId) => {
        const course = careerData.courses.find(c => c.id === courseId);
        if (course && !course.locked) {
            careerData.currentCourseId = courseId;
            renderApp();
        }
    };

    openSidebarButton.addEventListener('click', () => sidebar.classList.add('visible'));
    closeSidebarButton.addEventListener('click', () => sidebar.classList.remove('visible'));
    resetProgressButton.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
            localStorage.removeItem('careerProgress_backend_full');
            careerData = JSON.parse(JSON.stringify(initialCareerData));
            renderApp();
        }
    });

    renderApp();
});