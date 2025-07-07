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
    const COURSE_STORAGE_KEY = 'courseProgress_react';

    // --- ESTRUTURA DE DADOS COMPLETA PARA O CURSO DE REACT ---
    const initialCourseData = {
        currentSectionId: 1,
        sections: [
            {
                id: 1, title: 'Introdução ao React', description: 'Use React para criar aplicativos da web modernos', locked: false,
                lessons: [
                    { id: 1, title: 'Introdução ao React', type: 'learn', completed: false, locked: false, url: './lessons/react-intro/01.html' },
                    { id: 2, title: 'Componentes', type: 'learn', completed: false, locked: true, url: './lessons/react-intro/02.html' },
                    { id: 3, title: 'Noções básicas de React 1', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true, url: './lessons/react-intro/03.html' },
                    { id: 4, title: 'JSX', type: 'learn', completed: false, locked: true, url: './lessons/react-intro/04.html' },
                    { id: 5, title: 'Propriedades', type: 'learn', completed: false, locked: true, url: './lessons/react-intro/05.html' },
                    { id: 6, title: 'Botões', type: 'learn', completed: false, locked: true, url: './lessons/react-intro/06.html' },
                    { id: 7, title: 'Estado', type: 'learn', completed: false, locked: true, url: './lessons/react-intro/07.html' },
                    { id: 8, title: 'Noções básicas de React 2', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true, url: './lessons/react-intro/08.html' },
                    { id: 9, title: 'Usando folhas de estilo', type: 'learn', completed: false, locked: true, url: './lessons/react-intro/09.html' },
                    { id: 10, title: 'Usando propriedades de estilo', type: 'learn', completed: false, locked: true, url: './lessons/react-intro/10.html' },
                    { id: 11, title: 'Noções básicas de React 3', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true, url: './lessons/react-intro/11.html' },
                ]
            },
            {
                id: 2, title: 'Fundamentos do React', description: 'Aprenda conceitos essenciais do React para aprimorar seus aplicativos', locked: true,
                lessons: [
                    { id: 12, title: 'Renderização Condicional 1', type: 'learn', completed: false, locked: true, url: './lessons/react-fundamentals/01.html' },
                    { id: 13, title: 'Renderização Condicional 2', type: 'learn', completed: false, locked: true, url: './lessons/react-fundamentals/02.html' },
                    { id: 14, title: 'Fragmentos', type: 'learn', completed: false, locked: true, url: './lessons/react-fundamentals/03.html' },
                    { id: 15, title: 'Fundamentos do React 1', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true, url: './lessons/react-fundamentals/04.html' },
                    { id: 16, title: 'Propriedades destrutivas', type: 'learn', completed: false, locked: true, url: './lessons/react-fundamentals/05.html' },
                    { id: 17, title: 'Propriedades padrão', type: 'learn', completed: false, locked: true, url: './lessons/react-fundamentals/06.html' },
                    { id: 18, title: 'Propriedades complexas', type: 'learn', completed: false, locked: true, url: './lessons/react-fundamentals/07.html' },
                    { id: 19, title: 'Matrizes em React', type: 'learn', completed: false, locked: true, url: './lessons/react-fundamentals/08.html' },
                    { id: 20, title: 'Entrada', type: 'learn', completed: false, locked: true, url: './lessons/react-fundamentals/09.html' },
                    { id: 21, title: 'Área de texto', type: 'learn', completed: false, locked: true, url: './lessons/react-fundamentals/10.html' },
                    { id: 22, title: 'Componentes Controlados', type: 'learn', completed: false, locked: true, url: './lessons/react-fundamentals/11.html' },
                    { id: 23, title: 'Fundamentos do React 2', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true, url: './lessons/react-fundamentals/12.html' },
                ]
            },
            {
                id: 3, title: 'Mergulho profundo no React', description: 'Mergulhe mais fundo no React para dominar aplicativos de página única', locked: true,
                lessons: [
                    { id: 24, title: 'Crianças', type: 'learn', completed: false, locked: true, url: './lessons/react-deep-dive/01.html' },
                    { id: 25, title: 'Funções de Passagem', type: 'learn', completed: false, locked: true, url: './lessons/react-deep-dive/02.html' },
                    { id: 26, title: 'Perfuração de adereços', type: 'learn', completed: false, locked: true, url: './lessons/react-deep-dive/03.html' },
                    { id: 27, title: 'React Deep Dive 1', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true, url: './lessons/react-deep-dive/04.html' },
                    { id: 28, title: 'useState', type: 'learn', completed: false, locked: true, url: './lessons/react-deep-dive/05.html' },
                    { id: 29, title: 'useEffect', type: 'learn', completed: false, locked: true, url: './lessons/react-deep-dive/06.html' },
                    { id: 30, title: 'Mergulho Profundo React 2', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true, url: './lessons/react-deep-dive/07.html' },
                    { id: 31, title: 'Buscar', type: 'learn', completed: false, locked: true, url: './lessons/react-deep-dive/08.html' },
                    { id: 32, title: 'Roteador', type: 'learn', completed: false, locked: true, url: './lessons/react-deep-dive/09.html' },
                    { id: 33, title: 'Parâmetros de consulta', type: 'learn', completed: false, locked: true, url: './lessons/react-deep-dive/10.html' },
                    { id: 34, title: 'Mergulho Profundo no React 3', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true, url: './lessons/react-deep-dive/11.html' },
                    { id: 35, title: 'Certificado de Conclusão', type: 'certificate', completed: false, locked: true, url: './certificate/index.html' }
                ]
            }
        ]
    };
    
    // let courseData = JSON.parse(localStorage.getItem('courseProgress_react_full')) || JSON.parse(JSON.stringify(initialCourseData));
    // const saveProgress = () => localStorage.setItem('courseProgress_react_full', JSON.stringify(courseData));
    
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
                        <div class="cert-icon-area"><i class="fas fa-award"></i><span>React</span></div>
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
            localStorage.removeItem('courseProgress_react_full');
            courseData = JSON.parse(JSON.stringify(initialCourseData));
            renderApp();
        }
    });
    
    renderApp();
});