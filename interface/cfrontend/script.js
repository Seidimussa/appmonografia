document.addEventListener('DOMContentLoaded', () => {
    const moduleCards = document.querySelectorAll('.module-card');
    const refreshButton = document.querySelector('.refresh-button');
    const sectionProgressElements = document.querySelectorAll('.section-progress');
    const TOTAL_MODULES = 15; // Atualizado para 15 módulos

    // Usaremos localStorage para persistir o progresso
    let moduleState = JSON.parse(localStorage.getItem('frontEndCourseProgress')) || { // Alterado para 'frontEndCourseProgress'
        'intro-webdev': { percentage: 0, completed: false },
        'webpages-interativas': { percentage: 0, completed: false },
        'html-css-intermediario': { percentage: 0, completed: false },
        'loops-js': { percentage: 0, completed: false },
        'flexbox-fe': { percentage: 0, completed: false },
        'grid-fe': { percentage: 0, completed: false },
        'array-funcoes': { percentage: 0, completed: false },
        'objetos-es6': { percentage: 0, completed: false },
        'dom-eventos': { percentage: 0, completed: false },
        'html-semantico-acessibilidade': { percentage: 0, completed: false },
        'sincronia-assincronia-js': { percentage: 0, completed: false },
        'classes-javascript': { percentage: 0, completed: false },
        'intro-react': { percentage: 0, completed: false },
        'react-essentials': { percentage: 0, completed: false },
        'react-deep-dive': { percentage: 0, completed: false }
    };

    function saveProgress() {
        localStorage.setItem('frontEndCourseProgress', JSON.stringify(moduleState));
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
            if (moduleName === 'intro-webdev') {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            }
            // Os módulos seguintes são desbloqueados se o anterior estiver 100%
            else if (moduleName === 'webpages-interativas' && moduleState['intro-webdev'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'html-css-intermediario' && moduleState['webpages-interativas'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'loops-js' && moduleState['html-css-intermediario'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'flexbox-fe' && moduleState['loops-js'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'grid-fe' && moduleState['flexbox-fe'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'array-funcoes' && moduleState['grid-fe'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'objetos-es6' && moduleState['array-funcoes'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'dom-eventos' && moduleState['objetos-es6'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'html-semantico-acessibilidade' && moduleState['dom-eventos'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'sincronia-assincronia-js' && moduleState['html-semantico-acessibilidade'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'classes-javascript' && moduleState['sincronia-assincronia-js'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'intro-react' && moduleState['classes-javascript'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'react-essentials' && moduleState['intro-react'].percentage === 100) {
                card.classList.remove('locked');
                card.classList.add('active');
                if (lockIcon) lockIcon.remove();
            } else if (moduleName === 'react-deep-dive' && moduleState['react-essentials'].percentage === 100) {
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