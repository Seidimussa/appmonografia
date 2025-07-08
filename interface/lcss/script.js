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
    const COURSE_STORAGE_KEY = 'courseProgress_css';

    // --- ESTRUTURA DE DADOS COMPLETA, IDÊNTICA AO VÍDEO ---
    const initialCourseData = {
        currentSectionId: 1,
        sections: [{
                id: 1,
                title: 'Introdução ao CSS',
                description: 'Estilizar páginas da web usando CSS',
                locked: false,
                lessons: [{
                        id: 1,
                        title: 'Folha de Estilo e Seletores Básicos',
                        type: 'learn',
                        completed: false,
                        locked: false,
                        url: './intro-css/licao01/aprender01/game.html'
                    },
                    {
                        id: 2,
                        title: 'Estilizando texto',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-css/licao02/aprender01/game.html'
                    },
                    {
                        id: 3,
                        title: 'Definindo tamanho e bordas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-css/licao03/aprender01/game.html'
                    },
                    {
                        id: 4,
                        title: 'Noções básicas de CSS 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './intro-css/licao04/aprender01/game.html'
                    },
                    {
                        id: 5,
                        title: 'Construindo com o modelo de caixa',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-css/licao05/aprender01/game.html'
                    },
                    {
                        id: 6,
                        title: 'Adicionando preenchimento com uma linha',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-css/licao06/aprender01/game.html'
                    },
                    {
                        id: 7,
                        title: 'Estilizando cantos com uma linha',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './intro-css/licao07/aprender01/game.html'
                    },
                    {
                        id: 8,
                        title: 'Noções básicas de CSS 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './intro-css/licao09/aprender01/game.html'
                    },
                ]
            },
            {
                id: 2,
                title: 'CSS Intermediário',
                description: 'Mergulhe mais fundo no CSS para criar layouts impressionantes',
                locked: true,
                lessons: [{
                        id: 9,
                        title: 'Estilizando grupos de elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao01/aprender01/game.html'
                    },
                    {
                        id: 10,
                        title: 'Descobrindo Elementos Filhos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao02/aprender01/game.html'
                    },
                    {
                        id: 11,
                        title: 'Usando classes para layouts',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao03/aprender01/game.html'
                    },
                    {
                        id: 12,
                        title: 'CSS Intermediário 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao04/aprender01/game.html'
                    },
                    {
                        id: 13,
                        title: 'Adicionando cor com valores hexadecimais',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao05/aprender01/game.html'
                    },
                    {
                        id: 14,
                        title: 'Definindo o tamanho com porcentagens',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao06/aprender01/game.html'
                    },
                    {
                        id: 15,
                        title: 'Combinando várias classes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao07/aprender01/game.html'
                    },
                    {
                        id: 16,
                        title: 'Seletores de agrupamento',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao08/aprender01/game.html'
                    },
                    {
                        id: 17,
                        title: 'CSS Intermediário 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao09/aprender01/game.html'
                    },
                    {
                        id: 18,
                        title: 'Exibindo Elementos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao10/aprender01/game.html'
                    },
                    {
                        id: 19,
                        title: 'Imagens Flutuantes',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao11/aprender01/game.html'
                    },
                    {
                        id: 20,
                        title: 'Posicionamento Relativo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao12/aprender01/game.html'
                    },
                    {
                        id: 21,
                        title: 'Fundamentos de Layout CSS 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao13'
                    },
                    {
                        id: 22,
                        title: 'Posição Absoluta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao14/aprender01/game.html'
                    },
                    {
                        id: 23,
                        title: 'Índice Z',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao15/aprender01/game.html'
                    },
                    {
                        id: 24,
                        title: 'Fundamentos de Layout CSS 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './css-intermediario/licao16/aprender01/game.html'
                    },
                ]
            },
            {
                id: 3,
                title: 'Flexbox',
                description: 'Crie layouts complexos usando Flexbox',
                locked: true,
                lessons: [{
                        id: 25,
                        title: 'Compreendendo o Flexbox',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao01/aprender01/game.html'
                    },
                    {
                        id: 26,
                        title: 'Usando Flex Direction',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao02/aprender01/game.html'
                    },
                    {
                        id: 27,
                        title: 'Eixos Flexbox',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao03/aprender01/game.html'
                    },
                    {
                        id: 28,
                        title: 'Noções básicas do Flexbox',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao04/aprender01/game.html'
                    },
                    {
                        id: 29,
                        title: 'Justificando grupos de itens',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao05/aprender01/game.html'
                    },
                    {
                        id: 30,
                        title: 'Justificando linhas e colunas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao06/aprender01/game.html'
                    },
                    {
                        id: 31,
                        title: 'Alinhando Itens Flexíveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao07/aprender01/game.html'
                    },
                    {
                        id: 32,
                        title: 'Contêineres Flexbox 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao08/aprender01/game.html'
                    },
                    {
                        id: 33,
                        title: 'Envolvendo itens flexíveis',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao09/aprender01/game.html'
                    },
                    {
                        id: 34,
                        title: 'Alinhando linhas encapsuladas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao10/aprender01/game.html'
                    },
                    {
                        id: 35,
                        title: 'Contêineres Flexbox 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao11/aprender01/game.html'
                    },
                    {
                        id: 36,
                        title: 'Definindo um tamanho inicial do item',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao12/aprender01/game.html'
                    },
                    {
                        id: 37,
                        title: 'Itens Flex em crescimento',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao13/aprender01/game.html'
                    },
                    {
                        id: 38,
                        title: 'Itens Flexíveis Encolhendo',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao14/aprender01/game.html'
                    },
                    {
                        id: 39,
                        title: 'Usando a abreviação Flex',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao15/aprender01/game.html'
                    },
                    {
                        id: 40,
                        title: 'Itens Flexbox',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './flexbox/licao16/aprender01/game.html'
                    },
                ]
            },
            {
                id: 4,
                title: 'Grade',
                description: 'Crie uma grade CSS usando linhas e colunas',
                locked: true,
                lessons: [{
                        id: 41,
                        title: 'Criando uma grade CSS',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/01.html'
                    },
                    {
                        id: 42,
                        title: 'Criando colunas de grade',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/02.html'
                    },
                    {
                        id: 43,
                        title: 'Criando Linhas de Grade',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/03.html'
                    },
                    {
                        id: 44,
                        title: 'Grade CSS 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/04.html'
                    },
                    {
                        id: 45,
                        title: 'Definindo colunas e linhas da grade',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/05.html'
                    },
                    {
                        id: 46,
                        title: 'Lacunas na grade',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/06.html'
                    },
                    {
                        id: 47,
                        title: 'Definindo o tamanho de um item da grade',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/07.html'
                    },
                    {
                        id: 48,
                        title: 'Grade CSS 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/08.html'
                    },
                    {
                        id: 49,
                        title: 'Criando áreas nomeadas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/09.html'
                    },
                    {
                        id: 50,
                        title: 'Seções usando áreas nomeadas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/10.html'
                    },
                    {
                        id: 51,
                        title: 'Alinhando itens da grade',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/11.html'
                    },
                    {
                        id: 52,
                        title: 'Usando CSS Grid e Flexbox',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/grid/12.html'
                    },
                    {
                        id: 53,
                        title: 'Grade CSS 3',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './grid/licao01/aprender01/game.html'
                    },
                    {
                        id: 54,
                        title: 'Certificado de Conclusão',
                        type: 'certificate',
                        completed: false,
                        locked: true,
                        url: './certificate/index.html'
                    }
                ]
            },
        ]
    };

    // Carrega o progresso do localStorage usando a chave específica do curso,
    // ou usa os dados iniciais se não houver progresso salvo.
    let courseData = JSON.parse(localStorage.getItem(COURSE_STORAGE_KEY)) || JSON.parse(JSON.stringify(initialCourseData));

    // Salva o progresso atual no localStorage.
    const saveProgress = () => localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(courseData));

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
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>CSS</span></div>
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
            localStorage.removeItem(COURSE_STORAGE_KEY);
            courseData = JSON.parse(JSON.stringify(initialCourseData));
            renderApp();
        }
    });

    renderApp();
});