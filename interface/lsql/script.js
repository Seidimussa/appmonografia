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
    const COURSE_STORAGE_KEY = 'courseProgress_sql';

    // --- ESTRUTURA DE DADOS COMPLETA PARA O CURSO DE SQL ---
    const initialCourseData = {
        currentSectionId: 1,
        sections: [{
                id: 1,
                title: 'Noções básicas de SQL',
                description: 'Selecione e filtre os dados de uma tabela',
                locked: false,
                lessons: [{
                        id: 1,
                        title: 'Selecionando Dados',
                        type: 'learn',
                        completed: false,
                        locked: false,
                        url: './sql-basico/licao01/aprender01/game.html'
                    },
                    {
                        id: 2,
                        title: 'Dados do pedido',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './sql-basico/licao02/aprender01/game.html'
                    },
                    {
                        id: 3,
                        title: 'Filtrando dados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './sql-basico/licao03/aprender01/game.html'
                    },
                    {
                        id: 4,
                        title: 'Noções básicas de SQL 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './sql-basico/licao04/aprender01/game.html'
                    },
                    {
                        id: 5,
                        title: 'Usando o Operador de Desigualdade',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './sql-basico/licao05/aprender01/game.html'
                    },
                    {
                        id: 6,
                        title: 'Usando comparações',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './sql-basico/licao06/aprender01/game.html'
                    },
                    {
                        id: 7,
                        title: 'Noções básicas de SQL 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './sql-basico/licao07/aprender01/game.html'
                    },
                ]
            },
            {
                id: 2,
                title: 'Gestão de tabelas',
                description: 'Aprenda a criar e gerenciar tabelas em SQL',
                locked: true,
                lessons: [{
                        id: 8,
                        title: 'Adicionar e remover dados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './gestao-tabelas/licao01/aprender01/game.html'
                    },
                    {
                        id: 9,
                        title: 'Atualização SQL',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './gestao-tabelas/licao02/aprender01/game.html'
                    },
                    {
                        id: 10,
                        title: 'Criação de tabela SQL',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/table-management/03.html'
                    },
                    {
                        id: 11,
                        title: 'Gerenciamento de Tabelas SQL 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/table-management/04.html'
                    },
                    {
                        id: 12,
                        title: 'Alteração SQL',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/table-management/05.html'
                    },
                    {
                        id: 13,
                        title: 'Listando e Excluindo Tabelas',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/table-management/06.html'
                    },
                    {
                        id: 14,
                        title: 'Gerenciamento de Tabelas SQL 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/table-management/07.html'
                    },
                ]
            },
            {
                id: 3,
                title: 'Filtros',
                description: 'Use um ou mais filtros avançados para restringir os resultados',
                locked: true,
                lessons: [{
                        id: 15,
                        title: 'Filtragem com Intervalos',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/filters/01.html'
                    },
                    {
                        id: 16,
                        title: 'Filtrando por padrões',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/filters/02.html'
                    },
                    {
                        id: 17,
                        title: 'Filtrando com opções',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/filters/03.html'
                    },
                    {
                        id: 18,
                        title: 'Filtros SQL 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/filters/04.html'
                    },
                    {
                        id: 19,
                        title: 'Usando AND',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/filters/05.html'
                    },
                    {
                        id: 20,
                        title: 'Usando OU',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/filters/06.html'
                    },
                    {
                        id: 21,
                        title: 'Usando NÃO',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/filters/07.html'
                    },
                    {
                        id: 22,
                        title: 'Filtros SQL 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/filters/08.html'
                    },
                ]
            },
            {
                id: 4,
                title: 'Funções Agregadas',
                description: 'Obtenha insights de dados usando operações matemáticas',
                locked: true,
                lessons: [{
                        id: 23,
                        title: 'Aliasing',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/aggregate-functions/01.html'
                    },
                    {
                        id: 24,
                        title: 'Encontrando MIN, MAX e Média',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/aggregate-functions/02.html'
                    },
                    {
                        id: 25,
                        title: 'Contando e Somando',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/aggregate-functions/03.html'
                    },
                    {
                        id: 26,
                        title: 'Agrupando resultados da consulta',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/aggregate-functions/04.html'
                    },
                    {
                        id: 27,
                        title: 'Funções de agregação SQL',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/aggregate-functions/05.html'
                    },
                ]
            },
            {
                id: 5,
                title: 'Junta-se',
                description: 'Consultar dados distribuídos em várias tabelas',
                locked: true,
                lessons: [{
                        id: 28,
                        title: 'Apresentando INNER JOINs',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/joins/01.html'
                    },
                    {
                        id: 29,
                        title: 'Usando INNER JOINs',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/joins/02.html'
                    },
                    {
                        id: 30,
                        title: 'Usando LEFT JOINs',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/joins/03.html'
                    },
                    {
                        id: 31,
                        title: 'SQL Junções 1',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/joins/04.html'
                    },
                    {
                        id: 32,
                        title: 'Usando RIGHT JOINs',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/joins/05.html'
                    },
                    {
                        id: 33,
                        title: 'Usando FULL OUTER JOINs',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/joins/06.html'
                    },
                    {
                        id: 34,
                        title: 'SQL Junções 2',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/joins/07.html'
                    },
                ]
            },
            {
                id: 6,
                title: 'Subconsultas',
                description: 'Use o resultado de uma consulta dentro de outra consulta',
                locked: true,
                lessons: [{
                        id: 35,
                        title: 'Subconsultas com agregados',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/subqueries/01.html'
                    },
                    {
                        id: 36,
                        title: 'Subconsultas com IN',
                        type: 'learn',
                        completed: false,
                        locked: true,
                        url: './lessons/subqueries/02.html'
                    },
                    {
                        id: 37,
                        title: 'Subconsultas SQL',
                        type: 'practice',
                        subAction: 'SOBRECARREGAR',
                        completed: false,
                        locked: true,
                        url: './lessons/subqueries/03.html'
                    },
                    {
                        id: 38,
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

    // let courseData = JSON.parse(localStorage.getItem('courseProgress_sql_full')) || JSON.parse(JSON.stringify(initialCourseData));
    // const saveProgress = () => localStorage.setItem('courseProgress_sql_full', JSON.stringify(courseData));

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
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>SQL</span></div>
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
            localStorage.removeItem('courseProgress_sql_full');
            courseData = JSON.parse(JSON.stringify(initialCourseData));
            renderApp();
        }
    });

    renderApp();
});