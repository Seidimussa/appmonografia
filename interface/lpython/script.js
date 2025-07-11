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
    const COURSE_STORAGE_KEY = 'courseProgress_python';

    // --- ESTRUTURA DE DADOS COMPLETA PARA O CURSO DE PYTHON ---
    const initialCourseData = {
        currentSectionId: 1,
        sections: [{
                id: 1,
                title: 'Noções básicas de Python',
                description: 'Crie variáveis que armazenam números, strings e booleanos',
                locked: false,
                lessons: [{
                        id: 1,
                        title: 'Criando Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: false,
                        url: './python-basico/licao01/aprender01/game.html'
                    },
                    {
                        id: 2,
                        title: 'Usando Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './python-basico/licao02/aprender01/game.html'
                    },
                    {
                        id: 3,
                        title: 'Verdadeiro e falso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './python-basico/licao03/aprender01/game.html'
                    },
                    {
                        id: 4,
                        title: 'Verificando a igualdade numérica',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './python-basico/licao04/aprender01/game.html'
                    },
                    {
                        id: 5,
                        title: 'Formatando Strings',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './python-basico/licao05/aprender01/game.html'
                    },
                    {
                        id: 6,
                        title: 'Noções básicas de Python',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './python-basico/licao06/aprender01/game.html'
                    },
                ]
            },
            {
                id: 2,
                title: 'Tipos e comparações',
                description: 'Armazene o resultado das comparações em variáveis',
                locked: true,
                lessons: [{
                        id: 7,
                        title: 'Comparando números',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './tipos-comparacoes/licao01/aprender01/game.html'
                    },
                    {
                        id: 8,
                        title: 'Comparando Strings',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './tipos-comparacoes/licao02/aprender01/game.html'
                    },
                    {
                        id: 9,
                        title: 'Descobrindo Tipos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './tipos-comparacoes/licao03/aprender01/game.html'
                    },
                    {
                        id: 10,
                        title: 'Tipos e Comparações',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './tipos-comparacoes/licao04/aprender01/game.html'
                    },
                ]
            },
            {
                id: 3,
                title: 'Declarações Condicionais',
                description: 'Condicionais de código para construir programas que tomam decisões',
                locked: true,
                lessons: [{
                        id: 11,
                        title: 'Tomando decisões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './declaracoes-condicionais/licao01/aprender01/game.html'
                    },
                    {
                        id: 12,
                        title: 'Condições de uso',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './declaracoes-condicionais/licao02/aprender01/game.html'
                    },
                    {
                        id: 13,
                        title: 'Declarações Condicionais 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './declaracoes-condicionais/licao03/aprender01/game.html'
                    },
                    {
                        id: 14,
                        title: 'Codificando Instruções Else',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './declaracoes-condicionais/licao04/aprender01/game.html'
                    },
                    {
                        id: 15,
                        title: 'Incorporando Elif',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './declaracoes-condicionais/licao05/aprender01/game.html'
                    },
                    {
                        id: 16,
                        title: 'Usando Decisões Complexas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './declaracoes-condicionais/licao06/aprender01/game.html'
                    },
                    {
                        id: 17,
                        title: 'Declarações Condicionais 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './declaracoes-condicionais/licao07/aprender01/game.html'
                    },
                ]
            },
            {
                id: 4,
                title: 'Laços / Loops',
                description: 'Crie loops para repetir linhas de código',
                locked: true,
                lessons: [{
                        id: 18,
                        title: 'Autoatribuição e Operadores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-python/licao01/aprender01/game.html'
                    },
                    {
                        id: 19,
                        title: 'Laços While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-python/licao02/aprender01/game.html'
                    },
                    {
                        id: 20,
                        title: 'Parando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-python/licao03/aprender01/game.html'
                    },
                    {
                        id: 21,
                        title: 'Laços 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './loops-python/licao04/aprender01/game.html'
                    },
                    {
                        id: 22,
                        title: 'Controlando loops While',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-python/licao05/aprender01/game.html'
                    },
                    {
                        id: 23,
                        title: 'Para laços',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './loops-python/licao06/aprender01/game.html'
                    },
                    {
                        id: 24,
                        title: 'Laços 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './loops-python/licao07/aprender01/game.html'
                    },
                ]
            },
            {
                id: 5,
                title: 'Listas',
                description: 'Crie listas para organizar grupos de valores',
                locked: true,
                lessons: [{
                        id: 25,
                        title: 'Agrupando dados em listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './listas/licao01/aprender01/game.html'
                    },
                    {
                        id: 26,
                        title: 'Alterando dados em listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './listas/licao02/aprender01/game.html'
                    },
                    {
                        id: 27,
                        title: 'Atualizando Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './listas/licao03/aprender01/game.html'
                    },
                    {
                        id: 28,
                        title: 'Organizando Dados 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './listas/licao04/aprender01/game.html'
                    },
                    {
                        id: 29,
                        title: 'Looping sobre Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './listas/licao05/aprender01/game.html'
                    },
                    {
                        id: 30,
                        title: 'Decidindo com Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './listas/licao06/aprender01/game.html'
                    },
                    {
                        id: 31,
                        title: 'Organizando Dados 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './listas/licao07/aprender01/game.html'
                    },
                ]
            },
            {
                id: 6,
                title: 'Operações de Lista',
                description: 'Use métodos para obter insights dos valores em listas',
                locked: true,
                lessons: [{
                        id: 32,
                        title: 'Encontrando Dados Extremos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './operacoes-listas/licao01/aprender01/game.html'
                    },
                    {
                        id: 33,
                        title: 'Classificando Dados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './operacoes-listas/licao02/aprender01/game.html'
                    },
                    {
                        id: 34,
                        title: 'Somando Dados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './operacoes-listas/licao03/aprender01/game.html'
                    },
                    {
                        id: 35,
                        title: 'Usando Listas 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './operacoes-listas/licao04/aprender01/game.html'
                    },
                    {
                        id: 36,
                        title: 'Listas de adesão',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './operacoes-listas/licao05/aprender01/game.html'
                    },
                    {
                        id: 37,
                        title: 'Contando Elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './operacoes-listas/licao06/aprender01/game.html'
                    },
                    {
                        id: 38,
                        title: 'Usando Listas 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './operacoes-listas/licao07/aprender01/game.html'
                    },
                ]
            },
            {
                id: 7,
                title: 'Operações de String',
                description: 'Use métodos para manipular strings de maneiras úteis',
                locked: true,
                lessons: [{
                        id: 39,
                        title: 'Dividindo cordas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './operacao-string/licao01/aprender01/game.html'
                    },
                    {
                        id: 40,
                        title: 'Atualizando Strings',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './operacao-string/licao02/aprender01/game.html'
                    },
                    {
                        id: 41,
                        title: 'Usando Strings',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './operacao-string/licao03/aprender01/game.html'
                    },
                ]
            },
            {
                id: 8,
                title: 'Funções',
                description: 'Funções de código para tornar o código reutilizável e mais fácil de ler',
                locked: true,
                lessons: [{
                        id: 42,
                        title: 'Reutilizando código com funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao01/aprender01/game.html'
                    },
                    {
                        id: 43,
                        title: 'Criando Parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao02/aprender01/game.html'
                    },
                    {
                        id: 44,
                        title: 'Retornando Valores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao03/aprender01/game.html'
                    },
                    {
                        id: 45,
                        title: 'Usando vários parâmetros',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao04/aprender01/game.html'
                    },
                    {
                        id: 46,
                        title: 'Compreendendo Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao05/aprender01/game.html'
                    },
                    {
                        id: 47,
                        title: 'Funções 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao06/aprender01/game.html'
                    },
                    {
                        id: 48,
                        title: 'Funções e Escopo de Variáveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao07/aprender01/game.html'
                    },
                    {
                        id: 49,
                        title: 'Decidindo com Funções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao08/aprender01/game.html'
                    },
                    {
                        id: 50,
                        title: 'Funções com Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao09/aprender01/game.html'
                    },
                    {
                        id: 51,
                        title: 'Funções com Loops',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao10/aprender01/game.html'
                    },
                    {
                        id: 52,
                        title: 'Funções 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './funcoes-python/licao11/aprender01/game.html'
                    },
                ]
            },
            {
                id: 9,
                title: 'Tuplas, dicionários e conjuntos',
                description: 'Identificar as estruturas de dados corretas para armazenar dados',
                locked: true,
                lessons: [{
                        id: 53,
                        title: 'Criando Tuplas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/01.html'
                    },
                    {
                        id: 54,
                        title: 'Tuplas e Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/02.html'
                    },
                    {
                        id: 55,
                        title: 'Retornando Tuplas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/03.html'
                    },
                    {
                        id: 56,
                        title: 'Criando Dicionários',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/04.html'
                    },
                    {
                        id: 57,
                        title: 'Usando dicionários',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/05.html'
                    },
                    {
                        id: 58,
                        title: 'Tuplas, Dicionários e Conjuntos 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/06.html'
                    },
                    {
                        id: 59,
                        title: 'Criando conjuntos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/07.html'
                    },
                    {
                        id: 60,
                        title: 'Usando conjuntos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/08.html'
                    },
                    {
                        id: 61,
                        title: 'Conjuntos e Listas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/09.html'
                    },
                    {
                        id: 62,
                        title: 'Operações de conjunto',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/10.html'
                    },
                    {
                        id: 63,
                        title: 'Tuplas, Dicionários e Conjuntos 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/data-structures/11.html'
                    },
                ]
            },
            {
                id: 10,
                title: 'Compreensões de lista',
                description: 'Use compreensões de lista para tornar o código mais compacto',
                locked: true,
                lessons: [{
                        id: 64,
                        title: 'Usando compreensões de lista',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/list-comprehensions/01.html'
                    },
                    {
                        id: 65,
                        title: 'Funções como Expressões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/list-comprehensions/02.html'
                    },
                    {
                        id: 66,
                        title: 'Filtrando com Instruções If',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/list-comprehensions/03.html'
                    },
                    {
                        id: 67,
                        title: 'Compreensões de Lista 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/list-comprehensions/04.html'
                    },
                    {
                        id: 68,
                        title: 'Indexação e Exclusão Negativa',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/list-comprehensions/05.html'
                    },
                    {
                        id: 69,
                        title: 'Notação de fatias',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/list-comprehensions/06.html'
                    },
                    {
                        id: 70,
                        title: 'Compreensões de Lista 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/list-comprehensions/07.html'
                    },
                ]
            },
            {
                id: 11,
                title: 'Aulas',
                description: 'Crie modelos para objetos usando classes',
                locked: true,
                lessons: [{
                        id: 71,
                        title: 'Usando Classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/classes/01.html'
                    },
                    {
                        id: 72,
                        title: 'Criando Instâncias',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/classes/02.html'
                    },
                    {
                        id: 73,
                        title: 'Aulas 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/classes/03.html'
                    },
                    {
                        id: 74,
                        title: 'Classes com Métodos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/classes/04.html'
                    },
                    {
                        id: 75,
                        title: 'Construtores',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/classes/05.html'
                    },
                    {
                        id: 76,
                        title: 'Compreendendo Classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/classes/06.html'
                    },
                    {
                        id: 77,
                        title: 'Aulas 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/classes/07.html'
                    },
                ]
            },
            {
                id: 12,
                title: 'Programação Orientada a Objetos',
                description: 'Use programação orientada a objetos para aplicativos sofisticados',
                locked: true,
                lessons: [{
                        id: 78,
                        title: 'Encapsulando Objetos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/oop/01.html'
                    },
                    {
                        id: 79,
                        title: 'Aplicando Herança em POO',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/oop/02.html'
                    },
                    {
                        id: 80,
                        title: 'Abstraindo Objetos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/oop/03.html'
                    },
                    {
                        id: 81,
                        title: 'Objetos Polimórficos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/oop/04.html'
                    },
                    {
                        id: 82,
                        title: 'Programação Orientada a Objetos',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/oop/05.html'
                    },
                ]
            },
            {
                id: 13,
                title: 'Módulos',
                description: 'Use módulos para estender seu kit de ferramentas Python',
                locked: true,
                lessons: [{
                        id: 83,
                        title: 'Módulos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/modules/01.html'
                    },
                    {
                        id: 84,
                        title: 'Módulos',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/modules/02.html'
                    },
                ]
            },
            {
                id: 14,
                title: 'Erros e exceções',
                description: 'Interpretar erros e exceções que surgem no código',
                locked: true,
                lessons: [{
                        id: 85,
                        title: 'Erros e exceções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/errors-exceptions/01.html'
                    },
                    {
                        id: 86,
                        title: 'Gerando exceções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/errors-exceptions/02.html'
                    },
                    {
                        id: 87,
                        title: 'Erros e exceções',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/errors-exceptions/03.html'
                    },
                    {
                        id: 88,
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

    // let courseData = JSON.parse(localStorage.getItem('courseProgress_python_full')) || JSON.parse(JSON.stringify(initialCourseData));
    // const saveProgress = () => localStorage.setItem('courseProgress_python_full', JSON.stringify(courseData));

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
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>Pitão</span></div>
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
            localStorage.removeItem('courseProgress_python_full');
            courseData = JSON.parse(JSON.stringify(initialCourseData));
            renderApp();
        }
    });

    renderApp();
});