document.addEventListener('DOMContentLoaded', () => {
    const moduleCards = document.querySelectorAll('.module-card');
    const refreshButton = document.querySelector('.refresh-button');
    const sectionProgressElements = document.querySelectorAll('.section-progress');
    const TOTAL_MODULES = 12; // Atualizado para 12 módulos

    // Usaremos localStorage para persistir o progresso
    let moduleState = JSON.parse(localStorage.getItem('pythonCourseProgress')) || { // Alterado para 'pythonCourseProgress'
        'python-basico': {
            percentage: 0,
            completed: false
        },
        'tipos-comparacoes': {
            percentage: 0,
            completed: false
        },
        'declaracoes-condicionais': {
            percentage: 0,
            completed: false
        },
        'loops-python': {
            percentage: 0,
            completed: false
        },
        'listas': {
            percentage: 0,
            completed: false
        },
        'operacoes-listas': {
            percentage: 0,
            completed: false
        },
        'operacao-string': {
            percentage: 0,
            completed: false
        },
        'funcoes-python': {
            percentage: 0,
            completed: false
        },
        'tuplas-dicionarios-sets': {
            percentage: 0,
            completed: false
        },
        'list-comprehensions': {
            percentage: 0,
            completed: false
        },
        'classes-python': {
            percentage: 0,
            completed: false
        },
        'oop-python': {
            percentage: 0,
            completed: false
        },
        'modulos-python': {
            percentage: 0,
            completed: false
        },
        'erros-excecoes': {
            percentage: 0,
            completed: false
        }
    };

    function saveProgress() {
        localStorage.setItem('pythonCourseProgress', JSON.stringify(moduleState));
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

            // Lógica de desbloqueio sequencial (todos os 12 módulos)
            const moduleOrder = [
                'python-basico', 'tipos-comparacoes', 'loops-python', 'listas',
                'operacoes-listas', 'funcoes-python', 'tuplas-dicionarios-sets',
                'list-comprehensions', 'classes-python', 'oop-python',
                'modulos-python', 'erros-excecoes'
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