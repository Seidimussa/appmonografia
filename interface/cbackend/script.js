document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar-button');
    const resetProgressButton = document.getElementById('reset-progress-button');
    const sectionsNavList = document.getElementById('sections-nav-list');
    const mainSectionContent = document.getElementById('main-section-content');
    const totalProgressBar = document.getElementById('total-progress-bar');
    const totalProgressText = document.getElementById('total-progress-text');
    const sectionTitleHeader = document.getElementById('section-title-header');

    const initialCourseData = {
        title: "Curso de JavaScript",
        currentSectionId: 1,
        sections: [
            { id: 1, title: 'Noções básicas de JavaScript', description: 'Crie variáveis que armazenam números, strings e booleanos', locked: false,
                lessons: [
                    { id: 1, title: 'Criando Variáveis', type: 'learn', completed: false, locked: false, url: './lessons/js-basics/01.html' },
                    { id: 2, title: 'Usando Variáveis', type: 'learn', completed: false, locked: true, url: './lessons/js-basics/02.html' },
                    { id: 3, title: 'Usando Verdadeiro e Falso', type: 'learn', completed: false, locked: true, url: './lessons/js-basics/03.html' },
                    { id: 4, title: 'Verificando a igualdade numérica', type: 'learn', completed: false, locked: true, url: './lessons/js-basics/04.html' },
                    { id: 5, title: 'Noções básicas de JavaScript', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true, url: './lessons/js-basics/05.html' },
                ]
            },
            { id: 2, title: 'Tipos e Comparações', description: 'Armazene o resultado das comparações em variáveis', locked: true, lessons: [ /*...*/ ] },
            { id: 3, title: 'Condicionais', description: 'Condicionais de código para construir programas que tomem decisões', locked: true, lessons: [ /*...*/ ] },
            { id: 4, title: 'Laços', description: 'Crie loops para repetir linhas de código', locked: true, lessons: [ /*...*/ ] },
            { id: 5, title: 'Matrizes', description: 'Use matrizes para armazenar um grupo de valores em uma variável', locked: true, lessons: [ /*...*/ ] },
            { id: 6, title: 'Funções', description: 'Funções de código para tornar o código reutilizável e mais fácil de ler', locked: true, lessons: [ /*...*/ ] },
            { id: 7, title: 'Objetos', description: 'Crie objetos para armazenar valores relacionados em uma variável', locked: true, lessons: [ /*...*/ ] },
            { id: 8, title: 'Funções Aplicadas', description: 'Crie funções que alterem sua saída com base na entrada', locked: true, lessons: [ /*...*/ ] },
            { id: 9, title: 'ES6', description: 'Aprenda a usar as funções de seta do ES6', locked: true, lessons: [ /*...*/ ] },
            { id: 10, title: 'Operações de matriz', description: 'Otimize seu fluxo de trabalho com operações de matriz', locked: true, lessons: [ /*...*/ ] },
            { id: 11, title: 'Páginas da Web dinâmicas', description: 'Use HTML e JavaScript para criar elementos interativos', locked: true, lessons: [ /*...*/ ] },
            { id: 12, title: 'O Modelo de Objeto de Documento', description: 'Aprenda sobre a árvore DOM e o acesso baseado em posição', locked: true, lessons: [ /*...*/ ] },
            { id: 13, title: 'Eventos JavaScript', description: 'Use eventos JavaScript para fazer com que páginas da web reajam', locked: true, lessons: [ /*...*/ ] },
            { id: 14, title: 'Sincronia e Assincronia em JS', description: 'Aprenda como funciona o JavaScript assíncrono', locked: true, lessons: [ /*...*/ ] },
            { id: 15, title: 'Classes de JavaScript', description: 'Crie modelos para objetos usando classes', locked: true, lessons: [ /*...*/ ] },
            {
                id: 16, title: 'Módulos, Bibliotecas e Nó', description: 'Use o código de outras pessoas e aprenda o básico do Node', locked: true,
                lessons: [
                    { id: 89, title: 'Introdução aos Módulos', type: 'learn', completed: false, locked: true, url: '#' },
                    { id: 90, title: 'Bibliotecas JavaScript', type: 'learn', completed: false, locked: true, url: '#' },
                    { id: 91, title: 'Introdução ao Node.js', type: 'learn', completed: false, locked: true, url: '#' },
                    { id: 92, title: 'Módulos, Bibliotecas e Nó', type: 'practice', subAction: 'SOBRECARREGAR', completed: false, locked: true, url: '#' },
                    { id: 93, title: 'Certificado de Conclusão', type: 'certificate', completed: false, locked: true, url: '#' }
                ]
            }
        ]
    };
    
    let courseData = JSON.parse(localStorage.getItem('courseProgress_js_light')) || JSON.parse(JSON.stringify(initialCourseData));
    const saveProgress = () => localStorage.setItem('courseProgress_js_light', JSON.stringify(courseData));

    const completeLesson = (lessonId) => {
        const section = courseData.sections.find(s => s.lessons.some(l => l.id === lessonId));
        if (!section) return;
        const lesson = section.lessons.find(l => l.id === lessonId);

        if (!lesson || lesson.completed || lesson.locked || lesson.type === 'certificate') return;
        
        lesson.completed = true;

        const lessonIndex = section.lessons.findIndex(l => l.id === lessonId);
        if (lessonIndex + 1 < section.lessons.length) {
            section.lessons[lessonIndex + 1].locked = false;
        } else {
            const nextSection = courseData.sections.find(s => s.id === section.id + 1);
            if (nextSection) {
                nextSection.locked = false;
                if(nextSection.lessons.length > 0) {
                    nextSection.lessons[0].locked = false;
                }
            }
        }
        
        saveProgress();
        renderApp();
    };

    const renderSidebar = () => {
        sectionsNavList.innerHTML = '';
        let totalLessons = 0;
        let completedLessons = 0;

        courseData.sections.forEach(section => {
            const regularLessons = section.lessons.filter(l => l.type !== 'certificate');
            totalLessons += regularLessons.length;
            const completedInSection = regularLessons.filter(l => l.completed).length;
            completedLessons += completedInSection;

            const navItem = document.createElement('div');
            navItem.className = 'section-nav-item';
            navItem.classList.toggle('active', section.id === courseData.currentSectionId);
            if(section.locked) navItem.classList.add('locked');
            
            navItem.dataset.sectionId = section.id;
            navItem.innerHTML = `
                <span class="title">${section.title}</span>
                <span class="status">
                    ${section.locked ? '<i class="fas fa-lock"></i>' : `${completedInSection}/${regularLessons.length}`}
                    <i class="fas fa-chevron-right progress-arrows"></i>
                </span>
            `;
            navItem.addEventListener('click', () => changeSection(section.id));
            sectionsNavList.appendChild(navItem);
        });

        const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
        totalProgressBar.style.width = `${progressPercentage}%`;
        totalProgressText.textContent = `${Math.round(progressPercentage)}% concluído`;
    };

    const renderMainContent = () => {
        const section = courseData.sections.find(s => s.id === courseData.currentSectionId);
        if (!section) return;

        sectionTitleHeader.textContent = `Curso de ${courseData.title}`;

        let contentHTML = `
            <div class="section-header">
                <p class="section-label">SEÇÃO</p>
                <h1>${section.id}. ${section.title}</h1>
                <p>${section.description}</p>
            </div>
            <p class="lessons-label">LIÇÕES</p>
            <div class="lessons-list">
                ${section.lessons.map((lesson, index) => renderLessonCard(lesson, index)).join('')}
            </div>
        `;
        
        mainSectionContent.innerHTML = contentHTML;

        mainSectionContent.querySelectorAll('.lesson-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (card.classList.contains('locked')) {
                    e.preventDefault();
                    return;
                }
                if (e.target.closest('.sub-button')) {
                    e.preventDefault();
                    alert(`Prática "${card.querySelector('.lesson-title-area span:last-child').textContent}" sobrecarregada!`);
                    return;
                }
                const lessonId = parseInt(card.dataset.lessonId);
                completeLesson(lessonId);
            });
        });
    };
    
    const renderLessonCard = (lesson, index) => {
        const linkAttributes = `href="${lesson.url}"`;
        const lessonNumber = String(index + 1).padStart(2, '0');

        if (lesson.type === 'certificate') {
            return `
                <a class="lesson-card certificate-card ${lesson.locked ? 'locked' : ''}" data-lesson-id="${lesson.id}" ${linkAttributes}>
                    <div class="cert-title-area">
                        <i class="fas fa-award"></i>
                        <h4>${lesson.title}</h4>
                    </div>
                    <span>JavaScript</span>
                </a>`;
        }

        const lessonContent = `
            <div class="lesson-title-area">
                <span class="lesson-number">${lessonNumber}</span>
                <span>${lesson.title}</span>
            </div>
            <span class="lesson-status">
                <i class="far fa-file-alt"></i>
            </span>
        `;

        const practiceContent = `
            <div style="flex-grow: 1;">
                <div class="lesson-title-area">
                    <span class="lesson-number">${lessonNumber}</span>
                    <span>${lesson.title}</span>
                </div>
                <div class="sub-button-container">
                    <button class="sub-button"><i class="fas fa-bolt"></i> ${lesson.subAction}</button>
                </div>
            </div>
            <span class="lesson-status">
                <i class="fas fa-bolt" style="color: var(--yellow-practice)"></i>
            </span>
        `;

        return `
            <a class="lesson-card ${lesson.locked ? 'locked' : ''} ${!lesson.locked && !lesson.completed ? 'active' : ''}" data-lesson-id="${lesson.id}" ${linkAttributes}>
                ${lesson.type === 'practice' ? practiceContent : lessonContent}
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
            if (window.innerWidth <= 1024) {
                 sidebar.classList.remove('visible');
            }
        }
    };

    openSidebarButton.addEventListener('click', () => sidebar.classList.add('visible'));
    resetProgressButton.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja resetar todo o seu progresso?')) {
            localStorage.removeItem('courseProgress_js_light');
            courseData = JSON.parse(JSON.stringify(initialCourseData));
            renderApp();
        }
    });
    
    renderApp();
});