document.addEventListener('DOMContentLoaded', () => {
    const moduleCards = document.querySelectorAll('.module-card');
    const refreshButton = document.querySelector('.refresh-button');
    const sectionProgressElements = document.querySelectorAll('.section-progress');

    // Usaremos localStorage para persistir o progresso
    // Inicializa o estado dos módulos a partir do localStorage ou com valores padrão
    let moduleState = JSON.parse(localStorage.getItem('reactCourseProgress')) || {
        'intro': { percentage: 0, completed: false },
        'essentials': { percentage: 0, completed: false },
        'deep-dive': { percentage: 0, completed: false }
    };

    function saveProgress() {
        localStorage.setItem('reactCourseProgress', JSON.stringify(moduleState));
    }

    function updateModuleUI() {
        let completedModulesCount = 0;

        moduleCards.forEach(card => {
            const moduleName = card.dataset.module;
            const moduleData = moduleState[moduleName];
            const moduleProgressSpan = card.querySelector('.module-progress');
            let lockIcon = card.querySelector('.fa-lock');

            // Atualiza o progresso visual
            if (moduleProgressSpan) {
                moduleProgressSpan.textContent = `${moduleData.percentage}%`;
            }

            // Lógica de desbloqueio e classes
            if (moduleName === 'intro') {
                // Intro sempre é "ativo" (clicável para progredir)
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove(); // Remove o cadeado se por algum motivo estiver lá
            } else if (moduleName === 'essentials' && moduleState.intro.percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'deep-dive' && moduleState.essentials.percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else {
                // Se não atender aos critérios, o módulo está bloqueado
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

        // Atualiza o progresso total da seção
        sectionProgressElements.forEach(element => {
            element.textContent = `${completedModulesCount}/3`;
        });

        saveProgress(); // Salva o progresso no localStorage
    }

    // Adiciona interatividade aos módulos
    moduleCards.forEach(card => {
        card.addEventListener('click', (event) => {
            const moduleName = card.dataset.module;
            const moduleData = moduleState[moduleName];
            const targetPage = card.dataset.targetPage;

            if (card.classList.contains('locked')) {
                alert('Este módulo está bloqueado! Conclua o módulo anterior para desbloqueá-lo.');
                event.preventDefault(); // Impede o clique em módulos bloqueados
                return;
            }

            // Se o módulo não está 100% completo, simula o progresso
            if (moduleData.percentage < 100) {
                moduleData.percentage += 25; // Simula progresso em 25%
                if (moduleData.percentage > 100) {
                    moduleData.percentage = 100; // Garante que não exceda 100%
                }
                updateModuleUI(); // Atualiza a UI imediatamente para mostrar o progresso
            }

            // Se o módulo está 100% completo ou se o progresso acabou de ser atualizado para 100%,
            // ou se for a primeira vez clicando, navega para a página de etapa.
            if (moduleData.percentage === 100 || moduleData.percentage > 0) { // Navega se tiver algum progresso
                 window.location.href = targetPage;
            }
        });
    });

    // Adiciona funcionalidade ao botão de atualização
    refreshButton.addEventListener('click', () => {
        // Reinicia o progresso para todos os módulos
        for (const module in moduleState) {
            moduleState[module].percentage = 0;
            moduleState[module].completed = false;
        }
        saveProgress(); // Salva o estado reiniciado
        updateModuleUI(); // Atualiza a interface
        alert('Progresso resetado!');
    });

    // Inicializa a UI ao carregar a página
    updateModuleUI();
});