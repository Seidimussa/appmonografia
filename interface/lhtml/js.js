document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTOS DO DOM (CORRIGIDO PARA O SEU HTML) ---
    const sidebar = document.getElementById('sidebar');
    const menuToggleButton = document.getElementById('menu-toggle-button'); // ID correto do seu HTML
    const resetProgressButton = document.getElementById('reset-progress-button');
    const sectionsNavList = document.getElementById('sections-nav-list');
    const mainSectionContent = document.getElementById('main-section-content');
    const mainProgressContainer = document.getElementById('main-progress-container');
    const sidebarProgressBar = document.getElementById('sidebar-progress-bar');
    const sidebarProgressPercentage = document.getElementById('sidebar-progress-percentage');
    const sidebarProgressRatio = document.getElementById('sidebar-progress-ratio');

    // --- DADOS DO CURSO COM URLs ---
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
                        url: 'licoes/licao-01.html',
                        locked: false,
                        completed: false
                    },
                    {
                        id: 2,
                        title: 'Estruturação de texto com tags',
                        type: 'learn',
                        url: 'licoes/licao-02.html',
                        locked: true,
                        completed: false
                    },
                    {
                        id: 3,
                        title: 'Botões de construção',
                        type: 'learn',
                        url: 'licoes/licao-03.html',
                        locked: true,
                        completed: false
                    },
                    {
                        id: 4,
                        title: 'Noções básicas de HTML 1',
                        type: 'practice',
                        url: 'licoes/licao-04.html',
                        locked: true,
                        completed: false
                    },
                    {
                        id: 5,
                        title: 'Criando links',
                        type: 'learn',
                        url: 'licoes/licao-05.html',
                        locked: true,
                        completed: false
                    },
                    {
                        id: 6,
                        title: 'Adicionando Imagens',
                        type: 'learn',
                        url: 'licoes/licao-06.html',
                        locked: true,
                        completed: false
                    },
                    {
                        id: 7,
                        title: 'Noções básicas de HTML 2',
                        type: 'practice',
                        url: 'licoes/licao-07.html',
                        locked: true,
                        completed: false
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
                        url: 'licoes/licao-08.html',
                        locked: true,
                        completed: false
                    },
                    {
                        id: 9,
                        title: 'Agrupando Elementos',
                        type: 'learn',
                        url: 'licoes/licao-09.html',
                        locked: true,
                        completed: false
                    },
                    {
                        id: 10,
                        title: 'Listas de construção',
                        type: 'learn',
                        url: 'licoes/licao-10.html',
                        locked: true,
                        completed: false
                    },
                    {
                        id: 11,
                        title: 'Vinculando páginas da web',
                        type: 'learn',
                        url: 'licoes/licao-11.html',
                        locked: true,
                        completed: false
                    },
                    {
                        id: 12,
                        title: 'HTML Intermediário',
                        type: 'practice',
                        url: 'licoes/licao-12.html',
                        locked: true,
                        completed: false
                    },
                ]
            },
            {
                id: 3,
                title: 'HTML Semântico',
                description: 'Use elementos semânticos',
                locked: true,
                lessons: [{
                    id: 13,
                    title: 'Alternativas semânticas',
                    type: 'learn',
                    url: 'licoes/licao-13.html',
                    locked: true,
                    completed: false
                }, ]
            },
            {
                id: 4,
                title: 'Acessibilidade',
                description: 'Crie páginas acessíveis',
                locked: true,
                lessons: [{
                    id: 17,
                    title: 'Noções básicas de acessibilidade HTML',
                    type: 'learn',
                    url: 'licoes/licao-17.html',
                    locked: true,
                    completed: false
                }, ]
            },
            {
                id: 5,
                title: 'Formulários HTML',
                description: 'Reúna dados do usuário',
                locked: true,
                lessons: [{
                    id: 20,
                    title: 'Criando Formulários',
                    type: 'learn',
                    url: 'licoes/licao-20.html',
                    locked: true,
                    completed: false
                }, {
                    id: 23,
                    title: 'Certificado de Conclusão',
                    type: 'certificate',
                    url: '#',
                    locked: true,
                    completed: false
                }]
            },
        ]
    };

    let courseData = JSON.parse(localStorage.getItem('courseProgress')) || JSON.parse(JSON.stringify(initialCourseData));

    // --- FUNÇÕES DE LÓGICA E ESTADO ---
    // A função completeLesson é mantida, mas não será chamada diretamente pelo clique no painel.
    // Ela deve ser chamada pela página da lição para atualizar o progresso.
    const saveProgress = () => localStorage.setItem('courseProgress', JSON.stringify(courseData));
    const resetProgress = () => {
        if (confirm('Tem certeza?')) {
            localStorage.removeItem('courseProgress');
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

    // --- FUNÇÕES DE RENDERIZAÇÃO ---
    const renderApp = () => {
        renderSidebarAndHeader();
        renderMainContent();
    };

    const renderSidebarAndHeader = () => {
        sectionsNavList.innerHTML = '';
        let completedSectionsCount = 0;
        courseData.sections.forEach(section => {
            const regularLessons = section.lessons.filter(l => l.type !== 'certificate');
            const completedLessons = regularLessons.filter(l => l.completed).length;
            if (completedLessons === regularLessons.length && regularLessons.length > 0) completedSectionsCount++;
            const navItem = document.createElement('div');
            navItem.className = 'section-nav-item';
            navItem.classList.toggle('active', section.id === courseData.currentSectionId);
            navItem.classList.toggle('locked', section.locked);
            navItem.dataset.sectionId = section.id;
            navItem.innerHTML = `<span class="title">${String(section.id).padStart(2, '0')}. ${section.title}</span><span class="status">${section.locked ? '<i class="fas fa-lock"></i>' : `${completedLessons}/${regularLessons.length}`}</span>`;
            navItem.addEventListener('click', () => changeSection(section.id));
            sectionsNavList.appendChild(navItem);
        });
        const totalSections = courseData.sections.length;
        const totalProgressPercentage = totalSections > 0 ? Math.round((completedSectionsCount / totalSections) * 100) : 0;
        if (sidebarProgressBar) sidebarProgressBar.style.width = `${totalProgressPercentage}%`;
        if (sidebarProgressPercentage) sidebarProgressPercentage.textContent = `${totalProgressPercentage}% concluído`;
        if (sidebarProgressRatio) sidebarProgressRatio.textContent = `${completedSectionsCount}/${totalSections}`;
        if (mainProgressContainer) mainProgressContainer.innerHTML = `<span>${completedSectionsCount}/${totalSections}</span><div class="progress-bar-container"><div class="progress-bar" style="width: ${totalProgressPercentage}%"></div></div>`;
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
            <section class="section-details"><div class="section-title-header"><div><p class="section-label">SEÇÃO</p><h1>${section.title}</h1><p class="section-description">${section.description}</p></div><div class="progress-circle" style="background: conic-gradient(var(--purple-highlight) ${progressPercentage * 3.6}deg, var(--card-bg) 0deg);"><span class="progress-text">${progressPercentage}%</span></div></div></section>
            <section class="lessons-container"><p class="lessons-label">LIÇÕES</p><div class="lessons-list" id="lessons-list-container">${section.lessons.map((lesson, index) => renderLessonCard(lesson, index)).join('')}</div></section>
            ${nextSection ? `<section class="next-section-card"><p>PRÓXIMA SEÇÃO</p><div class="next-section-content"><span>${nextSection.title}</span><button class="continue-button" ${progressPercentage < 100 ? 'disabled' : ''} data-next-section-id="${nextSection.id}">Continuar</button></div></section>` : ''}
        `;
        const continueBtn = document.querySelector('.continue-button');
        if (continueBtn && !continueBtn.disabled) {
            continueBtn.addEventListener('click', (e) => changeSection(parseInt(e.target.dataset.nextSectionId)));
        }
    };

    const renderLessonCard = (lesson, index) => {
        const isLocked = lesson.locked && !lesson.completed;
        const statusIcon = isLocked ? '<i class="fas fa-lock status-icon"></i>' : '<i class="fas fa-check-circle status-icon"></i>';

        if (lesson.type === 'certificate') {
            return `<div class="lesson-card certificate-card ${lesson.locked ? 'locked' : ''}" data-lesson-id="${lesson.id}"><div class="cert-icon-area"><i class="fas fa-award"></i><span>HTML</span></div><div class="cert-title">${lesson.title}</div>${statusIcon}</div>`;
        }

        const lessonNumber = String(index + 1).padStart(2, '0');
        let typeInfo = (lesson.type === 'learn') ? `<i class="fa-regular fa-file-lines"></i> APRENDER` : `<i class="fas fa-bolt"></i> PRÁTICA`;
        let subButtonHTML = (lesson.type === 'practice') ? `<div class="sub-button-container"><button class="sub-button" type="button" onclick="event.preventDefault(); alert('Prática sobrecarregada!')"><i class="fas fa-bolt"></i> SOBRECARREGAR</button>${statusIcon}</div>` : '';

        const cardTag = isLocked ? 'div' : 'a';
        const hrefAttr = isLocked ? '' : `href="${lesson.url}?id=${lesson.id}"`;

        return `
            <${cardTag} class="lesson-card ${isLocked ? 'locked' : ''} ${lesson.completed ? 'completed' : ''}" ${hrefAttr} data-lesson-id="${lesson.id}">
                <div class="lesson-main-info">
                    <div class="lesson-title-area">
                        <span class="lesson-number">${lessonNumber}</span>
                        <span class="lesson-title">${lesson.title}</span>
                    </div>
                    <div class="lesson-status">
                        <span class="lesson-type ${lesson.type}">${typeInfo}</span>
                        ${lesson.type !== 'practice' ? statusIcon : ''}
                    </div>
                </div>
                ${subButtonHTML}
            </${cardTag}>`;
    };

    // --- EVENT LISTENERS GLOBAIS (CORRIGIDO) ---
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('visible');
        });
    }
    if (resetProgressButton) {
        resetProgressButton.addEventListener('click', resetProgress);
    }

    // --- INICIALIZAÇÃO ---
    renderApp();
});