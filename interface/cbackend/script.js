document.addEventListener('DOMContentLoaded', () => {
    const moduleCards = document.querySelectorAll('.module-card');
    const refreshButton = document.querySelector('.refresh-button');
    const sectionProgressElements = document.querySelectorAll('.section-progress');
    const TOTAL_MODULES = 9; // Atualizado para 9 módulos

    // Usaremos localStorage para persistir o progresso
    let moduleState = JSON.parse(localStorage.getItem('backEndCourseProgress')) || { // Alterado para 'backEndCourseProgress'
        'intro-javascript-be': { percentage: 0, completed: false },
        'fluxo-programa': { percentage: 0, completed: false },
        'arrays-funcoes-be': { percentage: 0, completed: false },
        'objetos-es6-be': { percentage: 0, completed: false },
        'express-basico': { percentage: 0, completed: false },
        'classes-async': { percentage: 0, completed: false },
        'trabalhando-bancos-dados': { percentage: 0, completed: false },
        'sql-aprofundado': { percentage: 0, completed: false },
        'express-deep-dive': { percentage: 0, completed: false }
    };

    function saveProgress() {
        localStorage.setItem('backEndCourseProgress', JSON.stringify(moduleState));
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

            // Lógica de desbloqueio sequencial
            // O primeiro módulo é sempre desbloqueado
            if (moduleName === 'intro-javascript-be') {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            }
            // Os módulos seguintes são desbloqueados se o anterior estiver 100%
            else if (moduleName === 'fluxo-programa' && moduleState['intro-javascript-be'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'arrays-funcoes-be' && moduleState['fluxo-programa'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'objetos-es6-be' && moduleState['arrays-funcoes-be'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'express-basico' && moduleState['objetos-es6-be'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'classes-async' && moduleState['express-basico'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'trabalhando-bancos-dados' && moduleState['classes-async'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'sql-aprofundado' && moduleState['trabalhando-bancos-dados'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'express-deep-dive' && moduleState['sql-aprofundado'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            }
            // Se o módulo não atender aos critérios de desbloqueio, ele permanece bloqueado
            else {
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