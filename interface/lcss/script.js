document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar-button');
    const closeSidebarButton = document.getElementById('close-sidebar-button');
    const resetProgressButton = document.getElementById('reset-progress-button');
    const sectionsNavList = document.getElementById('sections-nav-list');
    const mainSectionContent = document.getElementById('main-section-content');
    const totalProgressBar = document.getElementById('total-progress-bar');
    const totalProgressText = document.getElementById('total-progress-text');

    const initialCourseData = {
        currentSectionId: 1,
        sections: [
            {
                id: 1,
                title: 'Introdução ao CSS',
                description: 'Estilizar páginas da web usando CSS',
                locked: false,
                lessons: [
                    { id: 1, title: 'Folha de Estilo e Seletores Básicos', type: 'learn', completed: false, locked: false },
                    { id: 2, title: 'Estilizando texto', type: 'learn', completed: false, locked: true },
                    { id: 3, title: 'Definindo tamanho e bordas', type: 'learn', completed: false, locked: true },
                    { id: 4, title: 'Noções básicas de CSS 1', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                    { id: 5, title: 'Construindo com o modelo de caixa', type: 'learn', completed: false, locked: true },
                    { id: 6, title: 'Adicionando preenchimento com uma linha', type: 'learn', completed: false, locked: true },
                    { id: 7, title: 'Estilizando cantos com uma linha', type: 'learn', completed: false, locked: true },
                    { id: 8, title: 'Noções básicas de CSS 2', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                ]
            },
            {
                id: 2,
                title: 'CSS Intermediário',
                description: 'Mergulhe mais fundo no CSS para criar layouts impressionantes',
                locked: true,
                lessons: [
                    { id: 9, title: 'Estilizando grupos de elementos', type: 'learn', completed: false, locked: true },
                    { id: 10, title: 'Descobrindo Elementos Filhos', type: 'learn', completed: false, locked: true },
                    { id: 11, title: 'Usando classes para layouts', type: 'learn', completed: false, locked: true },
                    { id: 12, title: 'CSS Intermediário 1', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                    { id: 13, title: 'Adicionando cor com valores hexadecimais', type: 'learn', completed: false, locked: true },
                    { id: 14, title: 'Definindo o tamanho com porcentagens', type: 'learn', completed: false, locked: true },
                    { id: 15, title: 'Combinando várias classes', type: 'learn', completed: false, locked: true },
                    { id: 16, title: 'Seletores de agrupamento', type: 'learn', completed: false, locked: true },
                    { id: 17, title: 'CSS Intermediário 2', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                    { id: 18, title: 'Exibindo Elementos', type: 'learn', completed: false, locked: true },
                    { id: 19, title: 'Imagens Flutuantes', type: 'learn', completed: false, locked: true },
                    { id: 20, title: 'Posicionamento Relativo', type: 'learn', completed: false, locked: true },
                    { id: 21, title: 'Fundamentos de Layout CSS 1', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                    { id: 22, title: 'Posição Absoluta', type: 'learn', completed: false, locked: true },
                    { id: 23, title: 'Índice Z', type: 'learn', completed: false, locked: true },
                    { id: 24, title: 'Fundamentos de Layout CSS 2', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                ]
            },
            {
                id: 3,
                title: 'Flexbox',
                description: 'Crie layouts complexos usando Flexbox',
                locked: true,
                lessons: [
                    { id: 25, title: 'Compreendendo o Flexbox', type: 'learn', completed: false, locked: true },
                    { id: 26, title: 'Usando Flex Direction', type: 'learn', completed: false, locked: true },
                    { id: 27, title: 'Eixos Flexbox', type: 'learn', completed: false, locked: true },
                    { id: 28, title: 'Noções básicas do Flexbox', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                    { id: 29, title: 'Justificando grupos de itens', type: 'learn', completed: false, locked: true },
                    { id: 30, title: 'Justificando linhas e colunas', type: 'learn', completed: false, locked: true },
                    { id: 31, title: 'Alinhando Itens Flexíveis', type: 'learn', completed: false, locked: true },
                    { id: 32, title: 'Contêineres Flexbox 1', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                    { id: 33, title: 'Envolvendo itens flexíveis', type: 'learn', completed: false, locked: true },
                    { id: 34, title: 'Alinhando linhas encapsuladas', type: 'learn', completed: false, locked: true },
                    { id: 35, title: 'Contêineres Flexbox 2', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                    { id: 36, title: 'Definindo um tamanho inicial do item', type: 'learn', completed: false, locked: true },
                    { id: 37, title: 'Itens Flex em crescimento', type: 'learn', completed: false, locked: true },
                    { id: 38, title: 'Itens Flexíveis Encolhendo', type: 'learn', completed: false, locked: true },
                    { id: 39, title: 'Usando a abreviação Flex', type: 'learn', completed: false, locked: true },
                    { id: 40, title: 'Itens Flexbox', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                ]
            },
            {
                id: 4,
                title: 'Grade',
                description: 'Crie uma grade CSS usando linhas e colunas',
                locked: true,
                lessons: [
                    { id: 41, title: 'Criando uma grade CSS', type: 'learn', completed: false, locked: true },
                    { id: 42, title: 'Criando colunas de grade', type: 'learn', completed: false, locked: true },
                    { id: 43, title: 'Criando Linhas de Grade', type: 'learn', completed: false, locked: true },
                    { id: 44, title: 'Grade CSS 1', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                    { id: 45, title: 'Definindo colunas e linhas da grade', type: 'learn', completed: false, locked: true },
                    { id: 46, title: 'Lacunas na grade', type: 'learn', completed: false, locked: true },
                    { id: 47, title: 'Definindo o tamanho de um item da grade', type: 'learn', completed: false, locked: true },
                    { id: 48, title: 'Grade CSS 2', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                    { id: 49, title: 'Criando áreas nomeadas', type: 'learn', completed: false, locked: true },
                    { id: 50, title: 'Seções usando áreas nomeadas', type: 'learn', completed: false, locked: true },
                    { id: 51, title: 'Alinhando itens da grade', type: 'learn', completed: false, locked: true },
                    { id: 52, title: 'Usando CSS Grid e Flexbox', type: 'learn', completed: false, locked: true },
                    { id: 53, title: 'Grade CSS 3', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                    { id: 54, title: 'Certificado de Conclusão', type: 'certificate', completed: false, locked: true }
                ]
            },
        ]
    };
    
    let courseData = JSON.parse(localStorage.getItem('courseProgress_css')) || JSON.parse(JSON.stringify(initialCourseData));

    const saveProgress = () => localStorage.setItem('courseProgress_css', JSON.stringify(courseData));

    const resetProgress = () => {
        if (confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
            localStorage.removeItem('courseProgress_css');
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

        const allLessonsCompleted = currentSection.lessons.every(l => l.completed || l.type === 'certificate');
        if (allLessonsCompleted) {
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
            if (!card || card.classList.contains('locked')) return;

            if (e.target.closest('.sub-button')) {
                 alert(`Prática "${card.querySelector('.lesson-title').textContent}" sobrecarregada!`);
                return;
            }
            
            completeLesson(parseInt(card.dataset.lessonId));
        });

        const continueBtn = document.querySelector('.continue-button');
        if (continueBtn && !continueBtn.disabled) {
            continueBtn.addEventListener('click', (e) => changeSection(parseInt(e.target.dataset.nextSectionId)));
        }
    };
    
    const renderLessonCard = (lesson, index) => {
        const isFirstUnlocked = !lesson.locked && !lesson.completed;
        const statusIcon = lesson.completed ? '<i class="fas fa-check-circle status-icon"></i>' : '<i class="far fa-circle status-icon"></i>';
        const lockIcon = '<i class="fas fa-lock status-icon"></i>';
        
        if (lesson.type === 'certificate') {
            return `<div class="lesson-card certificate-card ${lesson.locked ? 'locked' : ''}" data-lesson-id="${lesson.id}">
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>CSS</span></div>
                        <div class="cert-title">${lesson.title}</div>
                        ${lesson.locked ? lockIcon : statusIcon}
                    </div>`;
        }

        const lessonNumber = String(index + 1).padStart(2, '0');
        let typeInfo = (lesson.type === 'learn') ? `<i class="fa-regular fa-file-lines"></i> APRENDER` : `<i class="fas fa-bolt"></i> PRÁTICA`;
        let subButtonHTML = (lesson.type === 'practice') ? `<div class="sub-button-container"><button class="sub-button"><i class="fas fa-bolt"></i> ${lesson.subAction}</button>${lesson.locked ? lockIcon : statusIcon}</div>` : '';

        return `
            <div class="lesson-card ${lesson.locked ? 'locked' : ''} ${isFirstUnlocked ? 'active' : ''}" data-lesson-id="${lesson.id}">
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
            </div>`;
    };
    
    const renderApp = () => {
        renderSidebar();
        renderMainContent();
    };

    openSidebarButton.addEventListener('click', () => sidebar.classList.add('visible'));
    closeSidebarButton.addEventListener('click', () => sidebar.classList.remove('visible'));
    resetProgressButton.addEventListener('click', resetProgress);
    
    renderApp();
});