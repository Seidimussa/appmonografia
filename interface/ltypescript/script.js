document.addEventListener('DOMContentLoaded', () => {
    const moduleCards = document.querySelectorAll('.module-card');
    const refreshButton = document.querySelector('.refresh-button');
    const sectionProgressElements = document.querySelectorAll('.section-progress');
    const TOTAL_MODULES = 4; // Atualizado para 4 módulos

    // Usaremos localStorage para persistir o progresso
    let moduleState = JSON.parse(localStorage.getItem('typescriptCourseProgress')) || { // Alterado para 'typescriptCourseProgress'
        'ts-basico': { percentage: 0, completed: false },
        'mais-tipos': { percentage: 0, completed: false },
        'funcoes-classes-enums': { percentage: 0, completed: false },
        'genericos': { percentage: 0, completed: false }
    };

    function saveProgress() {
        localStorage.setItem('typescriptCourseProgress', JSON.stringify(moduleState));
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
            if (moduleName === 'ts-basico') {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            }
            // Os módulos seguintes são desbloqueados se o anterior estiver 100%
            else if (moduleName === 'mais-tipos' && moduleState['ts-basico'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'funcoes-classes-enums' && moduleState['mais-tipos'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'genericos' && moduleState['funcoes-classes-enums'].percentage === 100) {
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