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

    // --- DADOS DO CURSO ---
    const initialCourseData = {
        currentSectionId: 1,
        sections: [
            {
                id: 1, title: 'HTML Básico', description: 'Crie páginas da Web usando tags HTML', locked: false,
                lessons: [
                    { id: 1, title: 'Descobrindo HTML e tags', type: 'learn', locked: false, completed: false },
                    { id: 2, title: 'Estruturação de texto com tags', type: 'learn', locked: true, completed: false },
                    { id: 3, title: 'Botões de construção', type: 'learn', locked: true, completed: false },
                    { id: 4, title: 'Noções básicas de HTML 1', type: 'practice', locked: true, completed: false },
                    { id: 5, title: 'Criando links', type: 'learn', locked: true, completed: false },
                    { id: 6, title: 'Adicionando Imagens', type: 'learn', locked: true, completed: false },
                    { id: 7, title: 'Noções básicas de HTML 2', type: 'practice', locked: true, completed: false },
                ]
            },
            {
                id: 2, title: 'HTML Intermediário', description: 'Vincule vários arquivos HTML para criar um site', locked: true,
                lessons: [
                    { id: 8, title: 'Coletando Informações', type: 'learn', locked: true, completed: false },
                    { id: 9, title: 'Agrupando Elementos', type: 'learn', locked: true, completed: false },
                    { id: 10, title: 'HTML Intermediário', type: 'practice', locked: true, completed: false },
                ]
            },
            {
                id: 3, title: 'HTML Semântico', description: 'Use elementos semânticos para tornar seu código mais legível', locked: true,
                lessons: [ /* ... adicionar lições aqui ... */ ]
            },
            {
                id: 4, title: 'Acessibilidade', description: 'Aprenda a criar páginas web acessíveis', locked: true,
                lessons: [ /* ... adicionar lições aqui ... */ ]
            },
            {
                id: 5, title: 'Formulários HTML', description: 'Reúna a entrada do usuário usando formulários', locked: true,
                lessons: [ /* ... adicionar lições aqui ... */ ]
            },
        ]
    };

    let courseData = JSON.parse(localStorage.getItem('courseProgress')) || initialCourseData;

    // --- FUNÇÕES DE LÓGICA E ESTADO ---
    const saveProgress = () => localStorage.setItem('courseProgress', JSON.stringify(courseData));

    const resetProgress = () => {
        if (confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
            localStorage.removeItem('courseProgress');
            courseData = JSON.parse(JSON.stringify(initialCourseData)); // Deep copy para evitar referência
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
        const lessonIndex = currentSection.lessons.findIndex(l => l.id === lessonId);

        if (lessonIndex === -1 || currentSection.lessons[lessonIndex].completed || currentSection.lessons[lessonIndex].locked) return;

        // Completa a lição atual
        currentSection.lessons[lessonIndex].completed = true;

        // Desbloqueia a próxima lição na seção atual
        if (lessonIndex + 1 < currentSection.lessons.length) {
            currentSection.lessons[lessonIndex + 1].locked = false;
        }

        // Verifica se a seção foi concluída
        const allLessonsCompleted = currentSection.lessons.every(l => l.completed);
        if (allLessonsCompleted) {
            // Desbloqueia a próxima seção
            const currentSectionIndex = courseData.sections.findIndex(s => s.id === courseData.currentSectionId);
            if (currentSectionIndex + 1 < courseData.sections.length) {
                courseData.sections[currentSectionIndex + 1].locked = false;
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
            const completedLessons = section.lessons.filter(l => l.completed).length;
            if (completedLessons === section.lessons.length && section.lessons.length > 0) {
                completedSectionsCount++;
            }
            const navItem = document.createElement('div');
            navItem.className = 'section-nav-item';
            navItem.classList.toggle('active', section.id === courseData.currentSectionId);
            navItem.classList.toggle('locked', section.locked);
            navItem.dataset.sectionId = section.id;
            navItem.innerHTML = `
                <span class="title">${section.title}</span>
                <span class="status">${section.locked ? '<i class="fas fa-lock"></i>' : `${completedLessons}/${section.lessons.length}`}</span>
            `;
            navItem.addEventListener('click', () => changeSection(section.id));
            sectionsNavList.appendChild(navItem);
        });

        // Atualiza progresso geral no topo da sidebar
        const totalSections = courseData.sections.length;
        totalProgressText.textContent = `${completedSectionsCount}/${totalSections} seções`;
        totalProgressBar.style.width = `${(completedSectionsCount / totalSections) * 100}%`;
    };

    const renderMainContent = () => {
        const section = courseData.sections.find(s => s.id === courseData.currentSectionId);
        if (!section) return;

        const completedLessons = section.lessons.filter(l => l.completed).length;
        const totalLessons = section.lessons.length;
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
                    <div class="progress-circle" style="background: conic-gradient(var(--purple-highlight) ${progressPercentage * 3.6}deg, var(--card-bg) 0deg);">
                        <span class="progress-text">${progressPercentage}%</span>
                    </div>
                </div>
            </section>

            <section class="lessons-container">
                <p class="lessons-label">LIÇÕES</p>
                <div class="lessons-list" id="lessons-list-container">
                    ${section.lessons.map(renderLessonCard).join('')}
                </div>
            </section>

            ${nextSection ? `
            <section class="next-section-card">
                <p>PRÓXIMA SEÇÃO</p>
                <div class="next-section-content">
                    <span>${nextSection.title}</span>
                    <button class="continue-button" ${progressPercentage < 100 ? 'disabled' : ''} data-next-section-id="${nextSection.id}">Continuar</button>
                </div>
            </section>
            ` : ''}
        `;

        // Adiciona listeners aos elementos recém-criados
        document.getElementById('lessons-list-container').addEventListener('click', (e) => {
            const card = e.target.closest('.lesson-card');
            if(card && !card.classList.contains('locked')) {
                completeLesson(parseInt(card.dataset.lessonId));
            }
        });
        const continueBtn = document.querySelector('.continue-button');
        if(continueBtn) {
            continueBtn.addEventListener('click', (e) => {
                const nextId = parseInt(e.target.dataset.nextSectionId);
                changeSection(nextId);
            });
        }
    };

    const renderLessonCard = (lesson) => {
        const isFirstUnlocked = !lesson.locked && !lesson.completed;
        const statusIcon = lesson.completed ? '<i class="fas fa-check-circle status-icon"></i>' : '<i class="fas fa-lock status-icon"></i>';
        
        let typeInfo = '';
        if(lesson.type === 'learn') typeInfo = `<i class="fa-regular fa-file-lines"></i> APRENDER`;
        if(lesson.type === 'practice') typeInfo = `<i class="fas fa-bolt"></i> PRÁTICA`;

        let subButtonHTML = '';
        if(lesson.type === 'practice') {
            subButtonHTML = `<div class="sub-button-container">
                                <button class="sub-button"><i class="fas fa-bolt"></i> SOBRECARREGAR</button>
                                ${statusIcon}
                             </div>`;
        }

        return `
            <div class="lesson-card ${lesson.locked ? 'locked' : ''} ${isFirstUnlocked ? 'active' : ''}" data-lesson-id="${lesson.id}">
                <div class="lesson-main-info">
                    <div class="lesson-title-area">
                        <span class="lesson-number">${String(lesson.id).padStart(2, '0')}</span>
                        <span class="lesson-title">${lesson.title}</span>
                    </div>
                    <div class="lesson-status">
                        <span class="lesson-type ${lesson.type}">${typeInfo}</span>
                        ${lesson.type !== 'practice' ? statusIcon : ''}
                    </div>
                </div>
                ${subButtonHTML}
            </div>
        `;
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