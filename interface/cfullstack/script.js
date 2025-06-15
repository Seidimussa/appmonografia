document.addEventListener('DOMContentLoaded', () => {
    const moduleCards = document.querySelectorAll('.module-card');
    const refreshButton = document.querySelector('.refresh-button');
    const sectionProgressElements = document.querySelectorAll('.section-progress');
    const TOTAL_MODULES = 20; // Atualizado para 20 módulos

    // Usaremos localStorage para persistir o progresso
    let moduleState = JSON.parse(localStorage.getItem('fullStackCourseProgress')) || { // Alterado para 'fullStackCourseProgress'
        'intro-webdev-fs': { percentage: 0, completed: false },
        'webpages-interativas-fs': { percentage: 0, completed: false },
        'html-css-intermediario-fs': { percentage: 0, completed: false },
        'loops-fs': { percentage: 0, completed: false },
        'flexbox-fs': { percentage: 0, completed: false },
        'grid-fs': { percentage: 0, completed: false },
        'array-funcoes-fs': { percentage: 0, completed: false },
        'objetos-es6-fs': { percentage: 0, completed: false },
        'dom-eventos-fs': { percentage: 0, completed: false },
        'html-semantico-acessibilidade-fs': { percentage: 0, completed: false },
        'sincronia-assincronia-js-fs': { percentage: 0, completed: false },
        'javascript-classes-fs': { percentage: 0, completed: false },
        'intro-react-fs': { percentage: 0, completed: false },
        'react-essentials-fs': { percentage: 0, completed: false },
        'react-deep-dive-fs': { percentage: 0, completed: false },
        'express-basico-fs': { percentage: 0, completed: false },
        'trabalhando-bancos-dados-fs': { percentage: 0, completed: false },
        'sql-aprofundado-fs': { percentage: 0, completed: false },
        'express-deep-dive-fs': { percentage: 0, completed: false },
        'full-stack-projeto': { percentage: 0, completed: false }
    };

    function saveProgress() {
        localStorage.setItem('fullStackCourseProgress', JSON.stringify(moduleState));
    }

    function updateModuleUI() {
        let completedModulesCount = 0;

        moduleCards.forEach(card => {
            const moduleName = card.dataset.module;
            const moduleData = moduleState[moduleName];
            const moduleProgressSpan = card.querySelector('.module-progress');
            let lockIcon = card.querySelector('.fa-lock');

            // Garante que a porcentagem seja exibida para todos os módulos
            if (moduleProgressSpan) {
                moduleProgressSpan.textContent = `${moduleData.percentage}%`;
            }

            // Lógica de desbloqueio sequencial (todos os 20 módulos)
            const moduleOrder = [
                'intro-webdev-fs', 'webpages-interativas-fs', 'html-css-intermediario-fs', 'loops-fs',
                'flexbox-fs', 'grid-fs', 'array-funcoes-fs', 'objetos-es6-fs',
                'dom-eventos-fs', 'html-semantico-acessibilidade-fs', 'sincronia-assincronia-js-fs',
                'javascript-classes-fs', 'intro-react-fs', 'react-essentials-fs', 'react-deep-dive-fs',
                'express-basico-fs', 'trabalhando-bancos-dados-fs', 'sql-aprofundado-fs',
                'express-deep-dive-fs', 'full-stack-projeto'
            ];

            const currentIndex = moduleOrder.indexOf(moduleName);
            const previousModuleCompleted = (currentIndex === 0) || (moduleState[moduleOrder[currentIndex - 1]] && moduleState[moduleOrder[currentIndex - 1]].percentage === 100);

            if (previousModuleCompleted) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else {
                card.classList.add('locked');
                card.classList.remove('active');
                if (!lockIcon) {
                    lockIcon = document.createElement('i');
                    lockIcon.classList.add('fas', 'fa-lock');
                    card.appendChild(lockIcon);
                }
            }

            // Conta os módulos concluídos
            if (moduleData.percentage === 100) {
                moduleData.completed = true;
                completedModulesCount++;
            } else {
                moduleData.completed = false;
            }
        });

        sectionProgressElements.forEach(element => {
            element.textContent = `${completedModulesCount}/${TOTAL_MODULES}`;
        });

        saveProgress();
    }

    moduleCards.forEach(card => {
        card.addEventListener('click', (event) => {
            const moduleName = card.dataset.module;
            const moduleData = moduleState[moduleName];
            const targetPage = card.dataset.targetPage;

            if (card.classList.contains('locked')) {
                alert('Este módulo está bloqueado! Conclua o módulo anterior para desbloqueá-lo.');
                event.preventDefault();
                return;
            }

            // Simula o progresso se o módulo não estiver 100% completo
            if (moduleData.percentage < 100) {
                moduleData.percentage += 25;
                if (moduleData.percentage > 100) {
                    moduleData.percentage = 100;
                }
                updateModuleUI(); // Atualiza a UI imediatamente para mostrar o progresso
            }

            // Navega para a página de etapa se houver progresso ou se estiver 100%
            if (moduleData.percentage === 100 || moduleData.percentage > 0) {
                 window.location.href = targetPage;
            }
        });
    });

    refreshButton.addEventListener('click', () => {
        for (const module in moduleState) {
            moduleState[module].percentage = 0;
            moduleState[module].completed = false;
        }
        saveProgress();
        updateModuleUI();
        alert('Progresso resetado!');
    });

    updateModuleUI(); // Chamada inicial para garantir que tudo é exibido corretamente
});