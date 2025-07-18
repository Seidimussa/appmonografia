document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTOS DO DOM ---
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar-button');
    const closeSidebarButton = document.getElementById('close-sidebar-button');
    const resetProgressButton = document.getElementById('reset-progress-button');
    const sectionsNavList = document.getElementById('sections-nav-list');
    const mainSectionContent = document.getElementById('main-section-content');
    const totalProgressBar = document.getElementById('total-progress-bar');
    const totalProgressText = document.getElementById('total-progress-text');

    // --- CHAVE DE ARMAZENAMENTO ESPECÍFICA DO CURSO ---
    const COURSE_STORAGE_KEY = 'courseProgress_html';

    // --- DADOS DO CURSO (COMPLETOS) ---
    // --- ALTERAÇÃO: Adicionada a propriedade 'url' em cada lição ---
    const initialCourseData = {
        currentSectionId: 1,
        sections: [{
                id: 1,
                title: 'HTML Básico',
                description: 'Crie páginas da Web usando tags HTML',
                locked: false,
                lessons: [{
                        id: 1,
                        title: 'Descobrindo HTML e tags',
                        type: 'learn',
                        locked: false,
                        completed: false,
                        url: './basico/licao01/aprender01/game.html'
                    },
                    {
                        id: 2,
                        title: 'Estruturação de texto com tags',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './basico/licao02/aprender01/game.html'
                    },
                    {
                        id: 3,
                        title: 'Botões de construção',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './basico/licao03/aprender01/game.html'
                    },
                    {
                        id: 4,
                        title: 'Noções básicas de HTML 1',
                        type: 'practice',
                        locked: true,
                        completed: false,
                        url: './basico/licao04/aprender01/game.html'
                    },
                    {
                        id: 5,
                        title: 'Criando links',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './basico/licao05/aprender01/game.html'
                    },
                    {
                        id: 6,
                        title: 'Adicionando Imagens',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './basico/licao06/aprender01/game.html'
                    },
                    {
                        id: 7,
                        title: 'Noções básicas de HTML 2',
                        type: 'practice',
                        locked: true,
                        completed: false,
                        url: './basico/licao07/aprender01/game.html'
                    },
                ]
            },
            {
                id: 2,
                title: 'HTML Intermediário',
                description: 'Vincule vários arquivos HTML para criar um site',
                locked: true,
                lessons: [{
                        id: 8,
                        title: 'Coletando Informações',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './intermediario/licao01/aprender01/game.html'
                    },
                    {
                        id: 9,
                        title: 'Agrupando Elementos',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './intermediario/licao02/aprender01/game.html'
                    },
                    {
                        id: 10,
                        title: 'Listas de construção',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './intermediario/licao03/aprender01/game.html'
                    },
                    {
                        id: 11,
                        title: 'Vinculando páginas da web',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './intermediario/licao04/aprender01/game.html'
                    },
                    {
                        id: 12,
                        title: 'HTML Intermediário',
                        type: 'practice',
                        locked: true,
                        completed: false,
                        url: './intermediario/licao05/aprender01/game.html'
                    },
                ]
            },
            {
                id: 3,
                title: 'HTML Semântico',
                description: 'Use elementos semânticos para tornar seu código mais legível',
                locked: true,
                lessons: [{
                        id: 13,
                        title: 'Alternativas semânticas',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './semantica/licao01/aprender01/game.html'
                    },
                    {
                        id: 14,
                        title: 'Estrutura da página semântica',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './semantica/licao02/aprender01/game.html'
                    },
                    {
                        id: 15,
                        title: 'Elementos que mudam o visual',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './semantica/licao03/aprender01/game.html'
                    },
                    {
                        id: 16,
                        title: 'HTML semântico',
                        type: 'practice',
                        locked: true,
                        completed: false,
                        url: './semantica/licao04/aprender01/game.html'
                    },
                ]
            },
            {
                id: 4,
                title: 'Acessibilidade',
                description: 'Aprenda a criar páginas web acessíveis',
                locked: true,
                lessons: [{
                        id: 17,
                        title: 'Noções básicas de acessibilidade HTML',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './acessibilidade/licao01/aprender01/game.html'
                    },
                    {
                        id: 18,
                        title: 'Acessibilidade WAI-ARIA',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './acessibilidade/licao02/aprender01/game.html'
                    },
                    {
                        id: 19,
                        title: 'Noções básicas de acessibilidade',
                        type: 'practice',
                        locked: true,
                        completed: false,
                        url: './acessibilidade/licao03/aprender01/game.html'
                    },
                ]
            },
            {
                id: 5,
                title: 'Formulários HTML',
                description: 'Reúna a entrada do usuário usando formulários',
                locked: true,
                lessons: [{
                        id: 20,
                        title: 'Criando Formulários',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './formularios/licao01/aprender01/game.html'
                    },
                    {
                        id: 21,
                        title: 'Formulários com rótulos',
                        type: 'learn',
                        locked: true,
                        completed: false,
                        url: './formularios/licao02/aprender01/game.html'
                    },
                    {
                        id: 22,
                        title: 'Formulários HTML',
                        type: 'practice',
                        locked: true,
                        completed: false,
                        url: './formularios/licao03/aprender01/game.html'
                    },
                    {
                        id: 23,
                        title: 'Certificado de Conclusão',
                        type: 'certificate',
                        locked: true,
                        completed: false,
                        url: './certificate/index.html'
                    }
                ]
            },
        ]
    };

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

    const changeSection = (sectionId) => {
        const section = courseData.sections.find(s => s.id === sectionId);
        if (section && !section.locked) {
            courseData.currentSectionId = sectionId;
            renderApp();
            if (window.innerWidth < 1024) sidebar.classList.remove('visible');
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

    // --- FUNÇÕES DE RENDERIZAÇÃO ---
    const renderSidebar = () => {
        sectionsNavList.innerHTML = '';
        let completedSectionsCount = 0;
        courseData.sections.forEach(section => {
            const regularLessons = section.lessons.filter(l => l.type !== 'certificate');
            const completedLessons = regularLessons.filter(l => l.completed).length;
            if (completedLessons === regularLessons.length && regularLessons.length > 0) {
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
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>HTML</span></div>
                        <div class="cert-title">${lesson.title}</div>
                        ${lesson.locked ? lockIcon : statusIcon}
                    </a>`;
        }
        const lessonNumber = String(index + 1).padStart(2, '0');
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

    const renderApp = () => {
        renderSidebar();
        renderMainContent();
    };

    // --- EVENT LISTENERS GLOBAIS ---
    openSidebarButton.addEventListener('click', () => sidebar.classList.add('visible'));
    closeSidebarButton.addEventListener('click', () => sidebar.classList.remove('visible'));
    resetProgressButton.addEventListener('click', resetProgress);

    // --- INICIALIZAÇÃO ---
    renderApp();
});