document.addEventListener('DOMContentLoaded', () => {
    // Seletores de Elementos
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar-button');
    const closeSidebarButton = document.getElementById('close-sidebar-button');
    const resetProgressButton = document.getElementById('reset-progress-button');
    const sectionsNavList = document.getElementById('sections-nav-list');
    const mainSectionContent = document.getElementById('main-section-content');
    const totalProgressBar = document.getElementById('total-progress-bar');
    const totalProgressText = document.getElementById('total-progress-text');
    const mainHeaderProgressBar = document.getElementById('main-header-progress-bar');
    const mainHeaderProgressText = document.getElementById('main-header-progress-text');
    const courseTitleHeader = document.getElementById('course-title-header');

    // --- ESTRUTURA DE DADOS COMPLETA DA CARREIRA FULL-STACK (DO VÍDEO) ---
    const initialCourseData_fullstack = {
        currentSectionId: 1,
        sections: [
            { id: 1, title: 'Introdução ao Desenvolvimento Web', description: 'Comece sua jornada no desenvolvimento web. Aprenda sobre os componentes fundamentais que compõem a web e como eles interagem.', locked: false, lessons: [
                { id: 1, title: 'Descobrindo HTML e Tags', type: 'learn', completed: false, locked: false },
                { id: 2, title: 'Estruturando texto com tags', type: 'learn', completed: false, locked: true },
                { id: 3, title: 'Noções básicas de HTML 1', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                { id: 4, title: 'Criando Links', type: 'learn', completed: false, locked: true },
                { id: 5, title: 'Adicionando imagens', type: 'learn', completed: false, locked: true },
                { id: 6, title: 'Noções básicas de HTML 2', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                { id: 7, title: 'Linktree', type: 'guided_project', part: 1, description: 'Prepare-se para criar sua própria página no estilo Linktree, onde você pode exibir todas as suas redes sociais e outros links importantes em um só lugar.', preview_img: '', completed: false, locked: true },
                { id: 8, title: 'Estilizando texto', type: 'learn', completed: false, locked: true },
                { id: 9, title: 'Definindo tamanho e bordas', type: 'learn', completed: false, locked: true },
                { id: 10, title: 'Noções básicas de CSS 1', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                { id: 11, title: 'Construindo com o modelo de caixa', type: 'learn', completed: false, locked: true },
                { id: 12, title: 'Adicionando preenchimento com uma linha', type: 'learn', completed: false, locked: true },
                { id: 13, title: 'Estilizando cantos com uma linha', type: 'learn', completed: false, locked: true },
                { id: 14, title: 'Noções básicas de CSS 2', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
                { id: 15, title: 'Linktree', type: 'guided_project', part: 2, description: 'Agora que você configurou o HTML da sua página no estilo Linktree, é hora de dar um toque especial! Nesta parte, usaremos CSS para estilizar e dar personalidade à sua página.', preview_img: '', completed: false, locked: true },
            ], optional_projects: [
                { id: 101, title: 'Página de publicação de postagens de blog', description: 'Programe uma página de publicação de blog para praticar suas habilidades com links e botões', completed: false, locked: true },
                { id: 102, title: 'Perfil de mídia social', description: 'Crie sua própria página de perfil de mídia social', completed: false, locked: true },
                { id: 103, title: 'Tarefas domésticas', description: 'Crie um resumo útil de suas tarefas domésticas inteiramente com HTML', completed: false, locked: true },
            ]},
            { id: 2, title: 'Páginas da Web Interativas', description: 'Dê vida às suas páginas da web! Aprenda os fundamentos do JavaScript para criar interações dinâmicas e funcionais.', locked: true, lessons: [
                { id: 'ad-card-1', type: 'advertisement' },
                { id: 16, title: 'Criando Variáveis', type: 'learn', completed: false, locked: true },
                { id: 17, title: 'Usando Variáveis', type: 'learn', completed: false, locked: true },
                { id: 18, title: 'Noções básicas de JavaScript', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true },
            ]},
            { id: 3, title: 'HTML e CSS Intermediários', description: 'Aprofunde seus conhecimentos em HTML e CSS. Aprenda a estruturar layouts complexos e a estilizar com mais precisão.', locked: true, lessons: [] },
            { id: 4, title: 'Laços', description: 'Automatize tarefas repetitivas com laços. Aprenda a usar "while" e "for" para executar blocos de código várias vezes.', locked: true, lessons: [] },
            { id: 5, title: 'Flexbox', description: 'Domine o layout moderno com Flexbox. Aprenda a alinhar e distribuir elementos em uma página de forma flexível e responsiva.', locked: true, lessons: [] },
            { id: 6, title: 'Grade', description: 'Construa layouts bidimensionais complexos com CSS Grid.', locked: true, lessons: [] },
            { id: 7, title: 'Matrizes e Funções', description: 'Organize e manipule coleções de dados com matrizes e funções.', locked: true, lessons: [] },
            { id: 8, title: 'Objetos e ES6', description: 'Trabalhe com estruturas de dados complexas e as novidades do JavaScript moderno.', locked: true, lessons: [] },
            { id: 9, title: 'DOM e Eventos', description: 'Manipule a página HTML e reaja às interações do usuário.', locked: true, lessons: [] },
            { id: 10, title: 'HTML Semântico e Acessibilidade', description: 'Escreva um código mais significativo e acessível para todos os usuários.', locked: true, lessons: [] },
            { id: 11, title: 'Sincronia e Assincronia em JS', description: 'Entenda como o JavaScript lida com operações demoradas sem travar a página.', locked: true, lessons: [] },
            { id: 12, title: 'Classes de JavaScript', description: 'Crie modelos para objetos usando o paradigma de orientação a objetos.', locked: true, lessons: [] },
            { id: 13, title: 'Introdução ao React', description: 'Inicie no mundo do React, a biblioteca para construir interfaces de usuário.', locked: true, lessons: [] },
            { id: 14, title: 'Fundamentos do React', description: 'Aprenda os conceitos centrais do React, como componentes, props e state.', locked: true, lessons: [] },
            { id: 15, title: 'Mergulho profundo no React', description: 'Explore tópicos avançados do React, incluindo hooks e contexto.', locked: true, lessons: [] },
            { id: 16, title: 'Noções básicas do Express', description: 'Use o Express para mergulhar no desenvolvimento de backend com Node.js.', locked: true, lessons: [] },
            { id: 17, title: 'Trabalhando com bancos de dados', description: 'Aprenda a trabalhar com bancos de dados e gerenciar dados em SQL.', locked: true, lessons: [] },
            { id: 18, title: 'SQL em profundidade', description: 'Obtenha insights de dados usando operações e filtros avançados de SQL.', locked: true, lessons: [] },
            { id: 19, title: 'Mergulho profundo expresso', description: 'Crie aplicativos complexos do lado do servidor usando o Express.', locked: true, lessons: [] },
            { id: 20, title: 'Pilha completa', description: 'Junte tudo o que você aprendeu até agora para construir uma aplicação full-stack.', locked: true, lessons: [
                 { id: 200, title: 'Certificado Profissional', type: 'certificate', completed: false, locked: true },
            ] },
        ]
    };
    
    let courseData = JSON.parse(localStorage.getItem('courseProgress_fullstack_v2')) || JSON.parse(JSON.stringify(initialCourseData_fullstack));
    const saveProgress = () => localStorage.setItem('courseProgress_fullstack_v2', JSON.stringify(courseData));

    const completeLesson = (lessonId) => {
        const currentSection = courseData.sections.find(s => s.id === courseData.currentSectionId);
        let lesson = currentSection.lessons.find(l => l.id === lessonId);
        if (!lesson && currentSection.optional_projects) {
            lesson = currentSection.optional_projects.find(l => l.id === lessonId);
        }

        if (!lesson || lesson.completed || lesson.locked || ['certificate', 'advertisement'].includes(lesson.type)) return;
        lesson.completed = true;

        const allLessons = [...currentSection.lessons, ...(currentSection.optional_projects || [])];
        const lessonIndex = allLessons.findIndex(l => l.id === lessonId);
        if (lessonIndex + 1 < allLessons.length) {
            const nextLesson = allLessons[lessonIndex + 1];
            if(nextLesson.type !== 'advertisement') {
                nextLesson.locked = false;
            } else if (lessonIndex + 2 < allLessons.length) {
                allLessons[lessonIndex + 2].locked = false;
            }
        }
        
        const allRegularLessons = currentSection.lessons.filter(l => !['advertisement', 'certificate'].includes(l.type));
        const allSectionLessonsCompleted = allRegularLessons.every(l => l.completed);
        
        if (allSectionLessonsCompleted) {
            const currentSectionIndex = courseData.sections.findIndex(s => s.id === courseData.currentSectionId);
            if (currentSectionIndex + 1 < courseData.sections.length) {
                const nextSection = courseData.sections[currentSectionIndex + 1];
                nextSection.locked = false;
                if (nextSection.lessons.length > 0) {
                    const firstLesson = nextSection.lessons[0];
                    if(firstLesson.type === 'advertisement' && nextSection.lessons.length > 1) {
                         nextSection.lessons[1].locked = false;
                    } else {
                         firstLesson.locked = false;
                    }
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
            const regularLessons = section.lessons.filter(l => !['advertisement', 'certificate'].includes(l.type));
            const completedLessons = regularLessons.filter(l => l.completed).length;
            
            const isSectionCompleted = regularLessons.length > 0 && completedLessons === regularLessons.length;
            if (isSectionCompleted) { completedSectionsCount++; }
            
            const navItem = document.createElement('div');
            navItem.className = 'section-nav-item';
            navItem.classList.toggle('active', section.id === courseData.currentSectionId);
            navItem.classList.toggle('locked', section.locked);
            navItem.dataset.sectionId = section.id;
            navItem.innerHTML = `<span class="title">${String(section.id).padStart(2, '0')}. ${section.title}</span><span class="status">${section.locked ? '<span class="m-icon">M</span>' : (isSectionCompleted ? '<i class="fas fa-check"></i>' : '')}</span>`;
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

        const regularLessons = section.lessons.filter(l => !['advertisement', 'certificate'].includes(l.type));
        const completedLessons = regularLessons.filter(l => l.completed).length;
        const totalLessons = regularLessons.length;
        const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
        
        const allCourseLessons = courseData.sections.flatMap(s => s.lessons.filter(l => !['advertisement', 'certificate'].includes(l.type)));
        const totalCompletedInCourse = allCourseLessons.filter(l => l.completed).length;

        mainHeaderProgressText.textContent = `${section.id}/${courseData.sections.length}`;
        mainHeaderProgressBar.style.width = `${(section.id / courseData.sections.length) * 100}%`;
        courseTitleHeader.textContent = `Carreira de Desenvolvedor Full-Stack`;

        const nextSection = courseData.sections.find(s => s.id === section.id + 1);

        const optionalProjectsHtml = (section.optional_projects && section.optional_projects.length > 0) ? `
            <p class="lessons-label">PROJETOS OPCIONAIS <i class="fas fa-info-circle"></i></p>
            <div class="lessons-list">
                ${section.optional_projects.map((proj, index) => renderLessonCard(proj, index + section.lessons.length, 'optional_project')).join('')}
            </div>` : '';

        mainSectionContent.innerHTML = `
            <section class="section-details">
                <div class="section-title-header">
                    <div>
                        <p class="section-label">SEÇÃO ${section.id}</p>
                        <h1>${section.title}</h1>
                    </div>
                    <div class="progress-circle" style="background: conic-gradient(var(--purple-highlight) ${progressPercentage * 3.6}deg, var(--card-bg) 0deg);"><span class="progress-text">${progressPercentage}%</span></div>
                </div>
            </section>
            <section class="lessons-container">
                <p class="lessons-label">LIÇÕES</p>
                <div class="lessons-list" id="lessons-list-container">
                    ${section.lessons.map((lesson, index) => renderLessonCard(lesson, index)).join('')}
                </div>
                ${optionalProjectsHtml}
            </section>
            ${nextSection ? `<section class="next-section-card"><p>PRÓXIMA SEÇÃO</p><div class="next-section-content"><span>${nextSection.title}</span><button class="continue-button" ${progressPercentage < 100 ? 'disabled' : ''} data-next-section-id="${nextSection.id}">Continuar</button></div></section>` : ''}
        `;

        document.getElementById('lessons-list-container').addEventListener('click', (e) => {
            const card = e.target.closest('.lesson-card');
            if (!card || card.classList.contains('locked') || card.classList.contains('advertisement-card')) {
                e.preventDefault(); return;
            }
             if (e.target.closest('.sub-button')) {
                e.preventDefault(); alert(`Prática sobrecarregada!`); return;
            }
            const lessonId = card.dataset.lessonId.startsWith('ad-') ? card.dataset.lessonId : parseInt(card.dataset.lessonId);
            completeLesson(lessonId);
        });

        const continueBtn = document.querySelector('.continue-button');
        if (continueBtn && !continueBtn.disabled) {
            continueBtn.addEventListener('click', (e) => changeSection(parseInt(e.target.dataset.nextSectionId)));
        }
    };
    
    const renderLessonCard = (lesson, lessonNumber) => {
        if (lesson.type === 'advertisement') {
            return `
            <div class="advertisement-card">
                <div class="ad-content">
                    <h3>Dê início à sua carreira de programação com o Mimo Max!</h3>
                    <p>"O Mimo me ajudou a adquirir as habilidades necessárias..."</p>
                    <div class="ad-author"><i class="fas fa-user-circle"></i> PETER</div>
                </div>
                <div class="ad-features">
                    <h4>MAX</h4><ul><li><i class="fas fa-check-circle"></i> Biblioteca completa</li><li><i class="fas fa-check-circle"></i> Espaços de projeto</li>...</ul>
                    <button class="ad-button">Comece um teste gratuito</button>
                </div>
            </div>`;
        }

        const lessonNumDisplay = String(lesson.type !== 'optional_project' ? lessonNumber + 1 : lessonNumber - courseData.sections.find(s=>s.id === courseData.currentSectionId).lessons.length + 1).padStart(2, '0');
        
        // Icon logic
        let statusIconHtml = '';
        if (lesson.completed) {
            const iconClass = lesson.type === 'practice' ? 'practice-completed' : 'completed';
            statusIconHtml = `<div class="status-icon ${iconClass}"><i class="fas fa-check"></i></div>`;
        } else if (lesson.locked) {
            statusIconHtml = `<div class="status-icon locked-icon">M</div>`;
        } else { // Unlocked but not complete
            const iconClass = lesson.type === 'practice' ? 'practice-unlocked' : 'unlocked';
            statusIconHtml = `<div class="status-icon ${iconClass}"><i class="fas fa-check"></i></div>`; // Simulating the empty circle with a check
            if(lesson.type !== 'practice') statusIconHtml = ''; // Learn lessons don't show the empty circle icon
        }


        if (lesson.type === 'guided_project' || lesson.type === 'optional_project') {
             return `<div class="lesson-card guided-project-card ${lesson.locked ? 'locked' : ''}" data-lesson-id="${lesson.id}">
                        <div class="guided-project-header">
                            <div class="guided-project-preview"></div>
                            <div class="guided-project-info">
                                <span class="lesson-title">${lesson.title}</span>
                                <p class="lesson-description">${lesson.description}</p>
                            </div>
                        </div>
                        <div class="guided-project-footer">
                           <span class="lesson-type"><i class="fas fa-code"></i> PROJETO GUIADO</span>
                           ${lesson.completed ? statusIconHtml : (lesson.locked ? statusIconHtml : `<div class="status-icon completed"><i class="fas fa-play"></i></div>`)}
                        </div>
                     </div>`;
        }

        let typeInfo = (lesson.type === 'learn') ? `<i class="fas fa-book-open"></i> APRENDER` : `<i class="fas fa-bolt"></i> PRÁTICA`;
        let subButtonHTML = (lesson.type === 'practice') ? `<div class="sub-button-container"><button class="sub-button"><i class="fas fa-bolt"></i> ${lesson.subAction}</button>${statusIconHtml}</div>` : '';

        return `
            <div class="lesson-card ${lesson.locked ? 'locked' : ''}" data-lesson-id="${lesson.id}">
                <div class="lesson-main-info">
                    <div class="lesson-title-area">
                        <span class="lesson-number">${lessonNumDisplay}</span>
                        <span class="lesson-title">${lesson.title}</span>
                    </div>
                    <div class="lesson-status">
                        <span class="lesson-type ${lesson.type}">${typeInfo}</span>
                        ${lesson.type !== 'practice' ? statusIconHtml : ''}
                    </div>
                </div>
                ${subButtonHTML}
            </div>`;
    };

    const changeSection = (sectionId) => {
        const section = courseData.sections.find(s => s.id === sectionId);
        if (section && !section.locked) {
            courseData.currentSectionId = sectionId;
            saveProgress();
            renderApp();
            if (window.innerWidth < 1024) sidebar.classList.remove('visible');
        }
    };

    openSidebarButton.addEventListener('click', () => sidebar.classList.add('visible'));
    closeSidebarButton.addEventListener('click', () => sidebar.classList.remove('visible'));
    resetProgressButton.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
            localStorage.removeItem('courseProgress_fullstack_v2');
            courseData = JSON.parse(JSON.stringify(initialCourseData_fullstack));
            renderApp();
        }
    });
    
    renderApp();
});